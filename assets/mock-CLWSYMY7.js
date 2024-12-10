import{h as jg,aR as xg,ds as yg,j as Na,bi as wg,aS as kg,u as Cg,k as Ac,o as So,F as nr,n as pr,m as ot,r as Ha,H as Za,G as bn,l as ti,w as Ln,s as Sg,aM as Og,L as Go,I as Oa,K as St,_ as Eg,t as zg,R as ca,dt as $g,du as Mg,aX as qn,aA as Xn,a$ as rl,bx as Pc,ay as Ag,a8 as Pg,aa as Rg,a6 as _g,T as xp,a7 as rc,ag as Ig,bl as qg,aB as Tg,a0 as ku,a4 as yp,N as Js,X as al,W as wp,a1 as Dg,$ as kp,dv as Ng,Y as Ug}from"./index-D4tPLX5K.js";import{d as Bg}from"./dayjs.min-74uV_Qwc.js";import{E as Cp}from"./el-dialog-CveBN6qi.js";import{t as Us,c as xt,M as lo,i as un,B as He,j as ha,_ as ni,l as qt,p as gr,f as Sp,a as Op,b as Fg,s as $r,T as Lg,U as Vg,d as Ml,D as xs,o as Al,q as aa,r as sl,u as il,v as Ep,w as Cu,x as Su,aw as ll,e as Ou,V as Wg,R as mo,E as Hg,F as Jg,G as Kg,H as Yg,I as Xg,J as Qg,aj as Cd,K as Gg,h as ys,a5 as mr,a2 as Eu,k as Lt,C as sa,al as Zg,N as em,am as tm,m as Aa,av as nm,y as zp,n as Sd,z as om,A as rm,as as am,Y as sm,Z as im,L as fo,$ as lm,S as cm,a0 as um,O as br,a6 as cs,a7 as $p,a8 as Mp,a9 as us,aa as Ap,ab as Pp,ac as dm,ad as Rc,ae as qi,af as os,ag as vm,ah as pm,ai as Rp,ak as fm,a1 as _p,ao as Ip,a3 as _r,ap as _c,aq as ds,ay as hm,az as gm,ar as Ir,g as Od,at as mm,a4 as bm,P as Ti,an as jm,au as xm,W as ym,X as wm}from"./jse-theme-dark-CecnpZNn.js";import{m as oi}from"./memoize-one.esm-BdPwpGay.js";import{H as km,s as qp,E as Ja,k as Ed,i as Cm,l as Sm,a as Om,h as Em,b as zm,c as $m,f as Mm,d as Am,e as Pm,g as Rm,j as _m,m as Im,r as qm,n as Tm,o as Dm,p as Nm,q as Um,t as Bm,u as Fm,v as Lm,w as Vm,x as Ka,y as Wm,G as Hm,z as Jm,A as Km,F as Bs,K as Ym,B as Xm,C as Qm,D as Gm,I as Zm,J as eb}from"./index-Cc_2LAU6.js";import{i as Nt}from"./Router-DjYdjhyb.js";import{r as Tp}from"./range-D4Q2O08a.js";import{m as tb}from"./map-CK5K6L-R.js";import{a as Dp,E as Np}from"./el-form-item-P7YfRUUs.js";import{E as nb}from"./el-switch-B9WcrC_D.js";/* empty css               */import{E as ob,a as rb}from"./el-select-CwfCBG9l.js";import"./el-popper-hHxrXZTy.js";import"./el-empty-DdZK8GCG.js";import{F as zd,E as ab,a as sb}from"./el-table-v2-C-ZzLR7d.js";import{u as Up}from"./useCopy-fSwL7j4k.js";import{E as ib}from"./el-divider-Cynf6-Bk.js";import{E as Bp}from"./el-popover-CJPz4hxt.js";import{E as $d}from"./index-DVwMwUQO.js";import"./index-Cb6E9lTT.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseEach-DVg7Eemw.js";import"./_castFunction-CO0CBiuY.js";import"./_baseIteratee-smuZHEsM.js";import"./toFinite-CkI2LguK.js";import"./castArray-Cfs_DDwr.js";import"./strings-DX7S174n.js";import"./index-BOnDqpCP.js";import"./raf-i544nqUG.js";const lb=jg({icon:{type:xg,default:()=>yg},title:String,content:{type:String,default:""}}),cb={back:()=>!0},ub=Na({name:"ElPageHeader"}),db=Na({...ub,props:lb,emits:cb,setup(e,{emit:t}){const o=wg(),{t:r}=kg(),a=Cg("page-header"),s=Ac(()=>[a.b(),{[a.m("has-breadcrumb")]:!!o.breadcrumb,[a.m("has-extra")]:!!o.extra,[a.is("contentful")]:!!o.default}]);function i(){t("back")}return(l,c)=>(So(),nr("div",{class:pr(ot(s))},[l.$slots.breadcrumb?(So(),nr("div",{key:0,class:pr(ot(a).e("breadcrumb"))},[Ha(l.$slots,"breadcrumb")],2)):Za("v-if",!0),bn("div",{class:pr(ot(a).e("header"))},[bn("div",{class:pr(ot(a).e("left"))},[bn("div",{class:pr(ot(a).e("back")),role:"button",tabindex:"0",onClick:i},[l.icon||l.$slots.icon?(So(),nr("div",{key:0,"aria-label":l.title||ot(r)("el.pageHeader.title"),class:pr(ot(a).e("icon"))},[Ha(l.$slots,"icon",{},()=>[l.icon?(So(),ti(ot(Og),{key:0},{default:Ln(()=>[(So(),ti(Sg(l.icon)))]),_:1})):Za("v-if",!0)])],10,["aria-label"])):Za("v-if",!0),bn("div",{class:pr(ot(a).e("title"))},[Ha(l.$slots,"title",{},()=>[Go(Oa(l.title||ot(r)("el.pageHeader.title")),1)])],2)],2),St(ot(ib),{direction:"vertical"}),bn("div",{class:pr(ot(a).e("content"))},[Ha(l.$slots,"content",{},()=>[Go(Oa(l.content),1)])],2)],2),l.$slots.extra?(So(),nr("div",{key:0,class:pr(ot(a).e("extra"))},[Ha(l.$slots,"extra")],2)):Za("v-if",!0)],2),l.$slots.default?(So(),nr("div",{key:1,class:pr(ot(a).e("main"))},[Ha(l.$slots,"default")],2)):Za("v-if",!0)],2))}});var vb=Eg(db,[["__file","page-header.vue"]]);const pb=zg(vb),fb={id:-1,name:"",type:"get",enabled:!0,path:"",description:"",delay:0,response:"",projectId:""},_o=ca(),zu=ca([]);function Md(){if(!_o.value)throw new Error("未选择项目");return{...fb,projectId:_o.value.id}}async function Fp(e){_o.value=e,zu.value=[],_o.value?($g("prjId",_o.value.id),await Pl()):Mg("prjId")}async function hb(e){try{if((await qn.put(`${qn.$apiBase}/mock/api/data/${e.id}`,{...e,id:void 0,projectId:void 0}).then(qn.getData)).success)return Xn.success("修改数据成功"),Pl().then(),!0;Xn.error("修改数据失败")}catch{Xn.error("修改数据失败")}return!1}async function gb(e){var t;try{if((await qn.post(`${qn.$apiBase}/mock/api/data`,{...e,id:void 0,projectId:(t=_o.value)==null?void 0:t.id}).then(qn.getData)).success)return Xn.success("创建数据成功"),Pl().then(),!0;Xn.error("创建数据失败")}catch{Xn.error("创建数据失败")}return!1}async function mb(e){try{if((await qn.delete(`${qn.$apiBase}/mock/api/data/${e.id}`).then(qn.getData)).success)return Xn.success("删除数据成功"),Pl().then(),!0;Xn.error("删除数据失败")}catch{Xn.error("删除数据失败")}return!1}async function Pl(){if(!_o.value){Xn.error("未选择项目");return}try{zu.value=await bb(_o.value)}catch(e){console.log(e),Xn.error("获取数据列表失败")}}async function bb(e){const t=await qn.get(`${qn.$apiBase}/mock/api/prj/${e.id}/list`).then(qn.getData);if(t.success)return(t.data||[]).map(o=>(o.createdAt=Bg(o.createdAt).format("YYYY-MM-DD HH:mm:ss"),o.url=`${qn.$apiBase}/mock/${e.id}${e.path}${o.path}`,o));throw new Error(t.message)}const $u=e=>Array.isArray(e),jb=e=>typeof e=="string";function go(e){return(...t)=>{const o=t.map(s=>To(s)),r=o[0],a=o[1];return o.length===1?s=>e(r(s)):o.length===2?s=>e(r(s),a(s)):s=>e(...o.map(i=>i(s)))}}const rs={pipe:(...e)=>{const t=e.map(o=>To(o));return o=>t.reduce((r,a)=>a(r),o)},object:e=>{const t=Object.keys(e).map(o=>[o,To(e[o])]);return o=>{const r={};for(const[a,s]of t)r[a]=s(o);return r}},array:(...e)=>{const t=e.map(o=>To(o));return o=>t.map(r=>r(o))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return o=>o==null?void 0:o[t]}return t=>{let o=t;for(const r of e)o=o==null?void 0:o[r];return o}},map:e=>{const t=To(e);return o=>o.map(t)},filter:e=>{const t=To(e);return o=>o.filter(t)},sort:(e=["get"],t)=>{const o=To(e),r=t==="desc"?-1:1;function a(s,i){const l=o(s),c=o(i);return l>c?r:l<c?-r:0}return s=>s.slice().sort(a)},pick:(...e)=>{const t=e.map(([r,...a])=>[a[a.length-1],rs.get(...a)]),o=(r,a)=>{const s={};for(const[i,l]of a)s[i]=l(r);return s};return r=>$u(r)?r.map(a=>o(a,t)):o(r,t)},groupBy:e=>{const t=To(e);return o=>{const r={};for(const a of o){const s=t(a);r[s]?r[s].push(a):r[s]=[a]}return r}},keyBy:e=>{const t=To(e);return o=>{const r={};for(const a of o){const s=t(a);r[s]=r[s]??a}return r}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(rs.groupBy(e)(t)).map(o=>o[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,o)=>t*o),sum:()=>e=>e.reduce((t,o)=>t+o),average:()=>e=>rs.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const o=To(e),r=To(t);return a=>r(a).includes(o(a))},"not in":(e,t)=>{const o=rs.in(e,t);return r=>!o(r)},regex:(e,t,o)=>{const r=new RegExp(t,o),a=To(e);return s=>r.test(a(s))},and:go((e,t)=>e&&t),or:go((e,t)=>e||t),not:go(e=>!e),exists:go(e=>e!==void 0),eq:go((e,t)=>e===t),gt:go((e,t)=>e>t),gte:go((e,t)=>e>=t),lt:go((e,t)=>e<t),lte:go((e,t)=>e<=t),ne:go((e,t)=>e!==t),add:go((e,t)=>e+t),subtract:go((e,t)=>e-t),multiply:go((e,t)=>e*t),divide:go((e,t)=>e/t),pow:go((e,t)=>e**t),mod:go((e,t)=>e%t),abs:go(Math.abs),round:go((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},Di=[];function To(e,t){Di.unshift({...rs,...Di[0]});try{const o=$u(e)?xb(e,Di[0]):()=>e;return r=>{try{return o(r)}catch(a){throw a.jsonquery=[{data:r,query:e},...a.jsonquery??[]],a}}}finally{Di.shift()}}function xb(e,t){const[o,...r]=e,a=t[o];if(!a)throw new Error(`Unknown function '${o}'`);return a(...r)}const Lp={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},yb=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,wb=/^[a-zA-Z_$][a-zA-Z\d_$]*/,kb=/^"(?:[^"\\]|\\.)*"/,Cb=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Sb=/^(0|[1-9][0-9]*)/,Ob=/^(true|false|null)/,Eb=/^[ \n\t\r]+/;function Vp(e,t){const o=()=>{j();const w=r();if(j(),e[y]==="|"){const _=[w];for(;e[y]==="|";)y++,j(),_.push(r());return["pipe",..._]}return w},r=()=>{const w={...Lp},_=a();j();for(const I of Object.keys(w).sort((q,k)=>k.length-q.length)){const q=w[I];if(e.substring(y,y+q.length)===q){y+=q.length,j();const k=a();return[I,_,k]}}return _},a=()=>{if(e[y]==="("){y++;const w=o();return x(")"),w}return s()},s=()=>{const w=[];if(e[y]==="."){for(;e[y]===".";)y++,w.push(d()??u()??h()??E("Property expected"));return["get",...w]}return i()},i=()=>{const w=y,_=u();if(j(),!_||e[y]!=="(")return y=w,l();y++,!rs[_]&&E(`Unknown function '${_}'`),j();const I=e[y]!==")"?[o()]:[];for(;y<e.length&&e[y]!==")";)j(),x(","),I.push(o());return x(")"),[_,...I]},l=()=>{if(e[y]==="{"){y++,j();const w={};let _=!0;for(;y<e.length&&e[y]!=="}";){_?_=!1:(x(","),j());const I=d()??u()??h()??E("Key expected");j(),x(":"),w[I]=o()}return x("}"),["object",w]}return c()},c=()=>{if(e[y]==="["){y++,j();const w=[];let _=!0;for(;y<e.length&&e[y]!=="]";)_?_=!1:(x(","),j()),w.push(o());return x("]"),["array",...w]}return d()??f()??m()},d=()=>b(kb,JSON.parse),u=()=>b(wb,w=>w),f=()=>b(Cb,JSON.parse),h=()=>b(Sb,JSON.parse),m=()=>{const w=b(Ob,JSON.parse);if(w!==void 0)return w;E("Value expected")},g=()=>{j(),y<e.length&&E(`Unexpected part '${e.substring(y)}'`)},b=(w,_)=>{const I=e.substring(y).match(w);if(I)return y+=I[0].length,_(I[0])},j=()=>b(Eb,w=>w),x=w=>{e[y]!==w&&E(`Character '${w}' expected`),y++},E=(w,_=y)=>{throw new SyntaxError(`${w} (pos: ${_})`)};let y=0;const S=o();return g(),S}const zb=40,$b="  ",Mb=(e,t)=>{const o=$b,r=(d,u)=>$u(d)?a(d,u):JSON.stringify(d),a=(d,u)=>{var f;const[h,...m]=d;if(h==="get"&&m.length>0)return i(m);if(h==="pipe"){const x=m.map(E=>r(E,u+o));return c(x,[""," | ",""],["",`
${u+o}| `,""])}if(h==="object")return s(m[0],u);if(h==="array"){const x=m.map(E=>r(E,u));return c(x,["[",", ","]"],[`[
${u+o}`,`,
${u+o}`,`
${u}]`])}const g=((f=void 0)==null?void 0:f[h])??Lp[h];if(g&&m.length===2){const[x,E]=m,y=r(x,u),S=r(E,u);return`(${y} ${g} ${S})`}const b=m.length===1?u:u+o,j=m.map(x=>r(x,b));return m.length===1&&j[0][0]==="("?`${h}${j}`:c(j,[`${h}(`,", ",")"],m.length===1?[`${h}(`,`,
${u}`,")"]:[`${h}(
${b}`,`,
${b}`,`
${u})`])},s=(d,u)=>{const f=u+o,h=Object.entries(d).map(([m,g])=>`${l(m)}: ${r(g,f)}`);return c(h,["{ ",", "," }"],[`{
${f}`,`,
${f}`,`
${u}}`])},i=d=>d.map(u=>`.${l(u)}`).join(""),l=d=>yb.test(d)?d:JSON.stringify(d),c=(d,[u,f,h],[m,g,b])=>u.length+d.reduce((j,x)=>j+x.length+f.length,0)-f.length+h.length<=zb?u+d.join(f)+h:m+d.join(g)+b;return r(e,"")};function Ab(e,t,o){return To(jb(t)?Vp(t):t)(e)}class Pb{add(t,o,r){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],o&&this[a][r?"unshift":"push"](o)},this)}run(t,o){this[t]=this[t]||[],this[t].forEach(function(r){r.call(o&&o.context?o.context:o,o)})}}class Rb{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];o.forEach(a=>{if(typeof a!="object"||!a.name||!a.init)throw new Error("Invalid JSEP plugin format");this.registered[a.name]||(a.init(this.jsep),this.registered[a.name]=a)})}}class H{static get version(){return"1.3.9"}static toString(){return"JavaScript Expression Parser (JSEP) v"+H.version}static addUnaryOp(t){return H.max_unop_len=Math.max(t.length,H.max_unop_len),H.unary_ops[t]=1,H}static addBinaryOp(t,o,r){return H.max_binop_len=Math.max(t.length,H.max_binop_len),H.binary_ops[t]=o,r?H.right_associative.add(t):H.right_associative.delete(t),H}static addIdentifierChar(t){return H.additional_identifier_chars.add(t),H}static addLiteral(t,o){return H.literals[t]=o,H}static removeUnaryOp(t){return delete H.unary_ops[t],t.length===H.max_unop_len&&(H.max_unop_len=H.getMaxKeyLen(H.unary_ops)),H}static removeAllUnaryOps(){return H.unary_ops={},H.max_unop_len=0,H}static removeIdentifierChar(t){return H.additional_identifier_chars.delete(t),H}static removeBinaryOp(t){return delete H.binary_ops[t],t.length===H.max_binop_len&&(H.max_binop_len=H.getMaxKeyLen(H.binary_ops)),H.right_associative.delete(t),H}static removeAllBinaryOps(){return H.binary_ops={},H.max_binop_len=0,H}static removeLiteral(t){return delete H.literals[t],H}static removeAllLiterals(){return H.literals={},H}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new H(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(o=>o.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return H.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!H.binary_ops[String.fromCharCode(t)]||H.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return H.isIdentifierStart(t)||H.isDecimalDigit(t)}throwError(t){const o=new Error(t+" at character "+this.index);throw o.index=this.index,o.description=t,o}runHook(t,o){if(H.hooks[t]){const r={context:this,node:o};return H.hooks.run(t,r),r.node}return o}searchHook(t){if(H.hooks[t]){const o={context:this};return H.hooks[t].find(function(r){return r.call(o.context,o),o.node}),o.node}}gobbleSpaces(){let t=this.code;for(;t===H.SPACE_CODE||t===H.TAB_CODE||t===H.LF_CODE||t===H.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),o=t.length===1?t[0]:{type:H.COMPOUND,body:t};return this.runHook("after-all",o)}gobbleExpressions(t){let o=[],r,a;for(;this.index<this.expr.length;)if(r=this.code,r===H.SEMCOL_CODE||r===H.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())o.push(a);else if(this.index<this.expr.length){if(r===t)break;this.throwError('Unexpected "'+this.char+'"')}return o}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,H.max_binop_len),o=t.length;for(;o>0;){if(H.binary_ops.hasOwnProperty(t)&&(!H.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!H.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=o,t;t=t.substr(0,--o)}return!1}gobbleBinaryExpression(){let t,o,r,a,s,i,l,c,d;if(i=this.gobbleToken(),!i||(o=this.gobbleBinaryOp(),!o))return i;for(s={value:o,prec:H.binaryPrecedence(o),right_a:H.right_associative.has(o)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+o),a=[i,s,l];o=this.gobbleBinaryOp();){if(r=H.binaryPrecedence(o),r===0){this.index-=o.length;break}s={value:o,prec:r,right_a:H.right_associative.has(o)},d=o;const u=f=>s.right_a&&f.right_a?r>f.prec:r<=f.prec;for(;a.length>2&&u(a[a.length-2]);)l=a.pop(),o=a.pop().value,i=a.pop(),t={type:H.BINARY_EXP,operator:o,left:i,right:l},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+d),a.push(s,t)}for(c=a.length-1,t=a[c];c>1;)t={type:H.BINARY_EXP,operator:a[c-1].value,left:a[c-2],right:t},c-=2;return t}gobbleToken(){let t,o,r,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,H.isDecimalDigit(t)||t===H.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===H.SQUOTE_CODE||t===H.DQUOTE_CODE)a=this.gobbleStringLiteral();else if(t===H.OBRACK_CODE)a=this.gobbleArray();else{for(o=this.expr.substr(this.index,H.max_unop_len),r=o.length;r>0;){if(H.unary_ops.hasOwnProperty(o)&&(!H.isIdentifierStart(this.code)||this.index+o.length<this.expr.length&&!H.isIdentifierPart(this.expr.charCodeAt(this.index+o.length)))){this.index+=r;const s=this.gobbleToken();return s||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:H.UNARY_EXP,operator:o,argument:s,prefix:!0})}o=o.substr(0,--r)}H.isIdentifierStart(t)?(a=this.gobbleIdentifier(),H.literals.hasOwnProperty(a.name)?a={type:H.LITERAL,value:H.literals[a.name],raw:a.name}:a.name===H.this_str&&(a={type:H.THIS_EXP})):t===H.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let o=this.code;for(;o===H.PERIOD_CODE||o===H.OBRACK_CODE||o===H.OPAREN_CODE||o===H.QUMARK_CODE;){let r;if(o===H.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==H.PERIOD_CODE)break;r=!0,this.index+=2,this.gobbleSpaces(),o=this.code}this.index++,o===H.OBRACK_CODE?(t={type:H.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),o=this.code,o!==H.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):o===H.OPAREN_CODE?t={type:H.CALL_EXP,arguments:this.gobbleArguments(H.CPAREN_CODE),callee:t}:(o===H.PERIOD_CODE||r)&&(r&&this.index--,this.gobbleSpaces(),t={type:H.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),r&&(t.optional=!0),this.gobbleSpaces(),o=this.code}return t}gobbleNumericLiteral(){let t="",o,r;for(;H.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===H.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);H.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(o=this.char,o==="e"||o==="E"){for(t+=this.expr.charAt(this.index++),o=this.char,(o==="+"||o==="-")&&(t+=this.expr.charAt(this.index++));H.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);H.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return r=this.code,H.isIdentifierStart(r)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(r===H.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===H.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:H.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const o=this.index,r=this.expr.charAt(this.index++);let a=!1;for(;this.index<this.expr.length;){let s=this.expr.charAt(this.index++);if(s===r){a=!0;break}else if(s==="\\")switch(s=this.expr.charAt(this.index++),s){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=s}else t+=s}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:H.LITERAL,value:t,raw:this.expr.substring(o,this.index)}}gobbleIdentifier(){let t=this.code,o=this.index;for(H.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,H.isIdentifierPart(t));)this.index++;return{type:H.IDENTIFIER,name:this.expr.slice(o,this.index)}}gobbleArguments(t){const o=[];let r=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let s=this.code;if(s===t){r=!0,this.index++,t===H.CPAREN_CODE&&a&&a>=o.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(s===H.COMMA_CODE){if(this.index++,a++,a!==o.length){if(t===H.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===H.CBRACK_CODE)for(let i=o.length;i<a;i++)o.push(null)}}else if(o.length!==a&&a!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===H.COMPOUND)&&this.throwError("Expected comma"),o.push(i)}}return r||this.throwError("Expected "+String.fromCharCode(t)),o}gobbleGroup(){this.index++;let t=this.gobbleExpressions(H.CPAREN_CODE);if(this.code===H.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:H.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:H.ARRAY_EXP,elements:this.gobbleArguments(H.CBRACK_CODE)}}}const _b=new Pb;Object.assign(H,{hooks:_b,plugins:new Rb(H),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},right_associative:new Set,additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});H.max_unop_len=H.getMaxKeyLen(H.unary_ops);H.max_binop_len=H.getMaxKeyLen(H.binary_ops);const ga=e=>new H(e).parse(),Ib=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(H).filter(e=>!Ib.includes(e)&&ga[e]===void 0).forEach(e=>{ga[e]=H[e]});ga.Jsep=H;const qb="ConditionalExpression";var Tb={name:"ternary",init(e){e.hooks.add("after-expression",function(o){if(o.node&&this.code===e.QUMARK_CODE){this.index++;const r=o.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const s=this.gobbleExpression();if(s||this.throwError("Expected expression"),o.node={type:qb,test:r,consequent:a,alternate:s},r.operator&&e.binary_ops[r.operator]<=.9){let i=r;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;o.node.test=i.right,i.right=o.node,o.node=r}}else this.throwError("Expected :")}})}};ga.plugins.register(Tb);const Ad=47,Db=92;var Nb={name:"regex",init(e){e.hooks.add("gobble-token",function(o){if(this.code===Ad){const r=++this.index;let a=!1;for(;this.index<this.expr.length;){if(this.code===Ad&&!a){const s=this.expr.slice(r,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(s,i)}catch(c){this.throwError(c.message)}return o.node={type:e.LITERAL,value:l,raw:this.expr.slice(r-1,this.index)},o.node=this.gobbleTokenProperty(o.node),o.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&(a=!1),this.index+=this.code===Db?2:1}this.throwError("Unclosed Regex")}})}};const ac=43,Ub=45,es={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|="]),updateOperators:[ac,Ub],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];es.assignmentOperators.forEach(r=>e.addBinaryOp(r,es.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(a){const s=this.code;es.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,a.node={type:"UpdateExpression",operator:s===ac?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!a.node.argument||!t.includes(a.node.argument.type))&&this.throwError(`Unexpected ${a.node.operator}`))}),e.hooks.add("after-token",function(a){if(a.node){const s=this.code;es.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(a.node.type)||this.throwError(`Unexpected ${a.node.operator}`),this.index+=2,a.node={type:"UpdateExpression",operator:s===ac?"++":"--",argument:a.node,prefix:!1})}}),e.hooks.add("after-expression",function(a){a.node&&o(a.node)});function o(r){es.assignmentOperators.has(r.operator)?(r.type="AssignmentExpression",o(r.left),o(r.right)):r.operator||Object.values(r).forEach(a=>{a&&typeof a=="object"&&o(a)})}}};ga.plugins.register(Nb,es);ga.addUnaryOp("typeof");ga.addLiteral("null",null);ga.addLiteral("undefined",void 0);var Pd,Bb=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Fb=["mainAxis","crossAxis","limiter"];function Wp(e,t){if(e==null)return{};var o,r,a=function(i,l){if(i==null)return{};var c={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(l.includes(d))continue;c[d]=i[d]}return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function Rd(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,r)}return o}function ge(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Rd(Object(o),!0).forEach(function(r){Lb(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Rd(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Lb(e,t,o){return(t=function(r){var a=function(s,i){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var c=l.call(s,i||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}(r,"string");return typeof a=="symbol"?a:a+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _d(e,t,o,r,a,s,i){try{var l=e[s](i),c=l.value}catch(d){return void o(d)}l.done?t(c):Promise.resolve(c).then(r,a)}function tt(e){return function(){var t=this,o=arguments;return new Promise(function(r,a){var s=e.apply(t,o);function i(c){_d(s,r,a,i,l,"next",c)}function l(c){_d(s,r,a,i,l,"throw",c)}i(void 0)})}}typeof window<"u"&&((Pd=window).__svelte||(Pd.__svelte={v:new Set})).v.add("5");var Po=Symbol(),wi=Array.isArray,Ic=Array.from,Vb=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Hp=Object.getOwnPropertyDescriptors,Wb=Object.prototype,Hb=Array.prototype,cl=Object.getPrototypeOf;function Fs(e){return typeof e=="function"}function Jb(e){return e()}function qc(e){for(var t=0;t<e.length;t++)e[t]()}var Ua=32,ki=128,Tc=256,Vo=512,ws=1024,Ci=2048,Mr=4096,Rl=8192,_l=32768,Jp=1<<19,vs=Symbol("$state"),Kb=Symbol("");function Kp(e){return e===this.v}function Mu(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Au(e){return!Mu(e,this.v)}function Ro(e){return{f:0,v:e,reactions:null,equals:Kp,version:0}}function Pu(e){var t,o,r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=Ro(e);return r||(a.equals=Au),an!==null&&an.l!==null&&((o=(t=an.l).s)!==null&&o!==void 0?o:t.s=[]).push(a),a}function M(e){return function(t){return Sn!==null&&2&Sn.f&&(jr===null?jr=[t]:jr.push(t)),t}(Pu(e,arguments.length>1&&arguments[1]!==void 0&&arguments[1]))}function Uo(e,t){return v(e,Br(()=>n(e))),t}function v(e,t){return Sn!==null&&Il()&&18&Sn.f&&(jr===null||!jr.includes(e))&&function(){throw new Error("state_unsafe_mutation")}(),Dc(e,t)}function Dc(e,t){return e.equals(t)||(e.v=t,e.version=df(),Yp(e,ws),Il()&&tn!==null&&tn.f&Vo&&!(tn.f&Ua)&&(Co!==null&&Co.includes(e)?(vr(tn,ws),ql(tn)):ua===null?function(o){ua=o}([e]):ua.push(e))),t}function Yp(e,t){var o=e.reactions;if(o!==null)for(var r=Il(),a=o.length,s=0;s<a;s++){var i=o[s],l=i.f;l&ws||(r||i!==tn)&&(vr(i,t),640&l&&(2&l?Yp(i,Ci):ql(i)))}}function ul(e){var t=1026;tn===null?t|=ki:tn.f|=Jp;var o={children:null,ctx:an,deps:null,equals:Kp,f:t,fn:e,reactions:null,v:null,version:0,parent:tn};if(Sn!==null&&2&Sn.f){var r,a=Sn;((r=a.children)!==null&&r!==void 0?r:a.children=[]).push(o)}return o}function xe(e){var t=ul(e);return t.equals=Au,t}function Xp(e){var t=e.children;if(t!==null){e.children=null;for(var o=0;o<t.length;o+=1){var r=t[o];2&r.f?Ru(r):ja(r)}}}function Qp(e){var t,o=tn;wr(e.parent);try{Xp(e),t=vf(e)}finally{wr(o)}return t}function Gp(e){var t=Qp(e);vr(e,(as||e.f&ki)&&e.deps!==null?Ci:Vo),e.equals(t)||(e.v=t,e.version=df())}function Ru(e){Xp(e),ii(e,0),vr(e,Rl),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Zp(e){tn===null&&Sn===null&&function(){throw new Error("effect_orphan")}(),Sn!==null&&Sn.f&ki&&function(){throw new Error("effect_in_unowned_derived")}(),Iu&&function(){throw new Error("effect_in_teardown")}()}function $s(e,t,o){var r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],a=!!(64&e),s=tn,i={ctx:an,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|ws,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(o){var l=ps;try{Id(!0),Oi(i),i.f|=16384}catch(u){throw ja(i),u}finally{Id(l)}}else t!==null&&ql(i);if(!(o&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&!(i.f&Jp))&&!a&&r&&(s!==null&&function(u,f){var h=f.last;h===null?f.last=f.first=u:(h.next=u,u.prev=h,f.last=u)}(i,s),Sn!==null&&2&Sn.f)){var c,d=Sn;((c=d.children)!==null&&c!==void 0?c:d.children=[]).push(i)}return i}function ef(e){var t=$s(8,null,!1);return vr(t,Vo),t.teardown=e,t}function Nc(e){if(Zp(),!(tn!==null&&tn.f&Ua&&an!==null&&!an.m))return bo(e);var t,o=an;((t=o.e)!==null&&t!==void 0?t:o.e=[]).push({fn:e,effect:tn,reaction:Sn})}function bo(e){return $s(4,e,!1)}function N(e,t){var o=an,r={effect:null,ran:!1};o.l.r1.push(r),r.effect=Ms(()=>{e(),r.ran||(r.ran=!0,v(o.l.r2,!0),Br(t))})}function Wt(){var e=an;Ms(()=>{if(n(e.l.r2)){for(var t of e.l.r1){var o=t.effect;o.f&Vo&&vr(o,Ci),Ps(o)&&Oi(o),t.ran=!1}e.l.r2.v=!1}})}function Ms(e){return $s(8,e,!0)}function ne(e){return As(e)}function As(e){return $s(24|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function ma(e){return $s(40,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function tf(e){var t=e.teardown;if(t!==null){var o=Iu,r=Sn;qd(!0),ba(null);try{t.call(null)}finally{qd(o),ba(r)}}}function nf(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var o=0;o<t.length;o+=1)Ru(t[o])}}function of(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],o=e.first;for(e.first=e.last=null;o!==null;){var r=o.next;ja(o,t),o=r}}function ja(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],o=!1;if((t||262144&e.f)&&e.nodes_start!==null){for(var r=e.nodes_start,a=e.nodes_end;r!==null;){var s=r===a?null:Dl(r);r.remove(),r=s}o=!0}of(e,t&&!o),nf(e),ii(e,0),vr(e,Rl);var i=e.transitions;if(i!==null)for(var l of i)l.stop();tf(e);var c=e.parent;c!==null&&c.first!==null&&rf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function rf(e){var t=e.parent,o=e.prev,r=e.next;o!==null&&(o.next=r),r!==null&&(r.prev=o),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=o))}function ri(e,t){var o=[];_u(e,o,!0),af(o,()=>{ja(e),t&&t()})}function af(e,t){var o=e.length;if(o>0){var r=()=>--o||t();for(var a of e)a.out(r)}else t()}function _u(e,t,o){if(!(e.f&Mr)){if(e.f^=Mr,e.transitions!==null)for(var r of e.transitions)(r.is_global||o)&&t.push(r);for(var a=e.first;a!==null;){var s=a.next;_u(a,t,!!(a.f&_l||a.f&Ua)&&o),a=s}}}function dl(e){sf(e,!0)}function sf(e,t){if(e.f&Mr){Ps(e)&&Oi(e),e.f^=Mr;for(var o=e.first;o!==null;){var r=o.next;sf(o,!!(o.f&_l||o.f&Ua)&&t),o=r}if(e.transitions!==null)for(var a of e.transitions)(a.is_global||t)&&a.in()}}var vl=!1,Uc=[];function lf(){vl=!1;var e=Uc.slice();Uc=[],qc(e)}function ai(e){vl||(vl=!0,queueMicrotask(lf)),Uc.push(e)}function Si(e){throw new Error("lifecycle_outside_component")}var cf=0,Qi=cf,si=!1,ps=!1,Iu=!1;function Id(e){ps=e}function qd(e){Iu=e}var Ca=[],fs=0,Sn=null;function ba(e){Sn=e}var tn=null;function wr(e){tn=e}var jr=null,Co=null,Do=0,ua=null,uf=0,as=!1,an=null;function df(){return++uf}function Il(){return an!==null&&an.l===null}function Ps(e){var t=e.f;if(t&ws)return!0;if(t&Ci){var o=e.deps,r=!!(t&ki);if(o!==null){var a;if(t&Tc){for(a=0;a<o.length;a++){var s,i;((i=(s=o[a]).reactions)!==null&&i!==void 0?i:s.reactions=[]).push(e)}e.f^=Tc}for(a=0;a<o.length;a++){var l,c,d,u=o[a];if(Ps(u)&&Gp(u),r&&tn!==null&&!as&&((l=u)===null||l===void 0||(l=l.reactions)===null||l===void 0||!l.includes(e))&&((d=(c=u).reactions)!==null&&d!==void 0?d:c.reactions=[]).push(e),u.version>e.version)return!0}}r||vr(e,Vo)}return!1}function vf(e){var t=Co,o=Do,r=ua,a=Sn,s=as,i=jr,l=an,c=e.f;Co=null,Do=0,ua=null,Sn=96&c?null:e,as=!ps&&!!(c&ki),jr=null,an=e.ctx;try{var d=(0,e.fn)(),u=e.deps;if(Co!==null){var f;if(ii(e,Do),u!==null&&Do>0)for(u.length=Do+Co.length,f=0;f<Co.length;f++)u[Do+f]=Co[f];else e.deps=u=Co;if(!as)for(f=Do;f<u.length;f++){var h,m;((m=(h=u[f]).reactions)!==null&&m!==void 0?m:h.reactions=[]).push(e)}}else u!==null&&Do<u.length&&(ii(e,Do),u.length=Do);return d}finally{Co=t,Do=o,ua=r,Sn=a,as=s,jr=i,an=l}}function Yb(e,t){var o=t.reactions;if(o!==null){var r=o.indexOf(e);if(r!==-1){var a=o.length-1;a===0?o=t.reactions=null:(o[r]=o[a],o.pop())}}o===null&&2&t.f&&(Co===null||!Co.includes(t))&&(vr(t,Ci),384&t.f||(t.f^=Tc),ii(t,0))}function ii(e,t){var o=e.deps;if(o!==null)for(var r=t;r<o.length;r++)Yb(e,o[r])}function Oi(e){var t=e.f;if(!(t&Rl)){vr(e,Vo);var o=tn;tn=e;try{16&t?function(a){for(var s=a.first;s!==null;){var i=s.next;s.f&Ua||ja(s),s=i}}(e):of(e),nf(e),tf(e);var r=vf(e);e.teardown=typeof r=="function"?r:null,e.version=uf}catch(a){(function(s){throw s})(a)}finally{tn=o}}}function pf(){fs>1e3&&(fs=0,function(){throw new Error("effect_update_depth_exceeded")}()),fs++}function ff(e){var t=e.length;if(t!==0){pf();var o=ps;ps=!0;try{for(var r=0;r<t;r++){var a=e[r];a.f&Vo||(a.f^=Vo);var s=[];hf(a,s),Xb(s)}}finally{ps=o}}}function Xb(e){var t=e.length;if(t!==0)for(var o=0;o<t;o++){var r=e[o];12288&r.f||!Ps(r)||(Oi(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?rf(r):r.fn=null))}}function Qb(){if(si=!1,!(fs>1001)){var e=Ca;Ca=[],ff(e),si||(fs=0)}}function ql(e){Qi===cf&&(si||(si=!0,queueMicrotask(Qb)));for(var t=e;t.parent!==null;){var o=(t=t.parent).f;if(96&o){if(!(o&Vo))return;t.f^=Vo}}Ca.push(t)}function hf(e,t){var o=e.first,r=[];e:for(;o!==null;){var a=o.f,s=!!(a&Ua);if(!(s&&a&Vo||a&Mr))if(8&a){s?o.f^=Vo:Ps(o)&&Oi(o);var i=o.first;if(i!==null){o=i;continue}}else 4&a&&r.push(o);var l=o.next;if(l===null)for(var c=o.parent;c!==null;){if(e===c)break e;var d=c.next;if(d!==null){o=d;continue e}c=c.parent}o=l}for(var u=0;u<r.length;u++)i=r[u],t.push(i),hf(i,t)}function gf(e){var t=Qi,o=Ca;try{pf();var r=[];Qi=1,Ca=r,si=!1,ff(o);var a=e==null?void 0:e();return vl&&lf(),(Ca.length>0||r.length>0)&&gf(),fs=0,a}finally{Qi=t,Ca=o}}function eo(){return mf.apply(this,arguments)}function mf(){return(mf=tt(function*(){yield Promise.resolve(),gf()})).apply(this,arguments)}function n(e){var t=e.f,o=!!(2&t);if(o&&t&Rl){var r=Qp(e);return Ru(e),r}if(Sn!==null){jr!==null&&jr.includes(e)&&function(){throw new Error("state_unsafe_local_read")}();var a=Sn.deps;Co===null&&a!==null&&a[Do]===e?Do++:Co===null?Co=[e]:Co.push(e),ua!==null&&tn!==null&&tn.f&Vo&&!(tn.f&Ua)&&ua.includes(e)&&(vr(tn,ws),ql(tn))}else if(o&&e.deps===null){var s,i,l=e,c=l.parent;c!==null&&((s=c.deriveds)===null||s===void 0||!s.includes(l))&&((i=c.deriveds)!==null&&i!==void 0?i:c.deriveds=[]).push(l)}return o&&Ps(l=e)&&Gp(l),e.v}function Br(e){var t=Sn;try{return Sn=null,e()}finally{Sn=t}}var Tr,bf,jf,Gb=-3585;function vr(e,t){e.f=e.f&Gb|t}function xa(e){return xf().get(e)}function xf(e){var t,o;return an===null&&Si(),(o=(t=an).c)!==null&&o!==void 0?o:t.c=new Map(function(r){for(var a=r.p;a!==null;){var s=a.c;if(s!==null)return s;a=a.p}return null}(an)||void 0)}function Td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,o=+n(e);return v(e,o+t),o}function rt(e){an={p:an,c:null,e:null,m:!1,s:e,x:null,l:null},arguments.length>1&&arguments[1]!==void 0&&arguments[1]||(an.l={s:null,u:null,r1:[],r2:Ro(!1)})}function at(e){var t=an;if(t!==null){e!==void 0&&(t.x=e);var o=t.e;if(o!==null){var r=tn,a=Sn;t.e=null;try{for(var s=0;s<o.length;s++){var i=o[s];wr(i.effect),ba(i.reaction),bo(i.fn)}}finally{wr(r),ba(a)}}an=t.p,t.m=!0}return e||{}}function $(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(vs in e)Bc(e);else if(!Array.isArray(e))for(var t in e){var o=e[t];typeof o=="object"&&o&&vs in o&&Bc(o)}}}function Bc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var o in t.add(e),e instanceof Date&&e.getTime(),e)try{Bc(e[o],t)}catch{}var r=cl(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){var a=Hp(r);for(var s in a){var i=a[s].get;if(i)try{i.call(e)}catch{}}}}}function ts(e){if(typeof e!="object"||e===null||vs in e)return e;var t=cl(e);if(t!==Wb&&t!==Hb)return e;var o=new Map,r=wi(e),a=Ro(0);return r&&o.set("length",Ro(e.length)),new Proxy(e,{defineProperty(s,i,l){"value"in l&&l.configurable!==!1&&l.enumerable!==!1&&l.writable!==!1||function(){throw new Error("state_descriptors_fixed")}();var c=o.get(i);return c===void 0?(c=Ro(l.value),o.set(i,c)):v(c,ts(l.value)),!0},deleteProperty(s,i){var l=o.get(i);if(l===void 0)i in s&&o.set(i,Ro(Po));else{if(r&&typeof i=="string"){var c=o.get("length"),d=Number(i);Number.isInteger(d)&&d<c.v&&v(c,d)}v(l,Po),Dd(a)}return!0},get(s,i,l){var c;if(i===vs)return e;var d=o.get(i),u=i in s;if(d===void 0&&(!u||(c=qr(s,i))!==null&&c!==void 0&&c.writable)&&(d=Ro(ts(u?s[i]:Po)),o.set(i,d)),d!==void 0){var f=n(d);return f===Po?void 0:f}return Reflect.get(s,i,l)},getOwnPropertyDescriptor(s,i){var l=Reflect.getOwnPropertyDescriptor(s,i);if(l&&"value"in l){var c=o.get(i);c&&(l.value=n(c))}else if(l===void 0){var d=o.get(i),u=d==null?void 0:d.v;if(d!==void 0&&u!==Po)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return l},has(s,i){var l;if(i===vs)return!0;var c=o.get(i),d=c!==void 0&&c.v!==Po||Reflect.has(s,i);return(c!==void 0||tn!==null&&(!d||(l=qr(s,i))!==null&&l!==void 0&&l.writable))&&(c===void 0&&(c=Ro(d?ts(s[i]):Po),o.set(i,c)),n(c)===Po)?!1:d},set(s,i,l,c){var d,u=o.get(i),f=i in s;if(r&&i==="length")for(var h=l;h<u.v;h+=1){var m=o.get(h+"");m!==void 0?v(m,Po):h in s&&(m=Ro(Po),o.set(h+"",m))}u===void 0?(!f||(d=qr(s,i))!==null&&d!==void 0&&d.writable)&&(v(u=Ro(void 0),ts(l)),o.set(i,u)):(f=u.v!==Po,v(u,ts(l)));var g=Reflect.getOwnPropertyDescriptor(s,i);if(g!=null&&g.set&&g.set.call(c,l),!f){if(r&&typeof i=="string"){var b=o.get("length"),j=Number(i);Number.isInteger(j)&&j>=b.v&&v(b,j+1)}Dd(a)}return!0},ownKeys(s){n(a);var i=Reflect.ownKeys(s).filter(d=>{var u=o.get(d);return u===void 0||u.v!==Po});for(var[l,c]of o)c.v===Po||l in s||i.push(l);return i},setPrototypeOf(){(function(){throw new Error("state_prototype_fixed")})()}})}function Dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;v(e,e.v+t)}function Tl(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function Bo(e){return bf.call(e)}function Dl(e){return jf.call(e)}function A(e,t){return Bo(e)}function Te(e,t){var o=Bo(e);return o instanceof Comment&&o.data===""?Dl(o):o}function D(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,o=e;t--;)o=Dl(o);return o}var Zb=!1,yf=new Set,Fc=new Set;function Lc(e,t,o,r){function a(s){if(r.capture||Ks.call(t,s),!s.cancelBubble){var i=Sn,l=tn;ba(null),wr(null);try{return o.call(this,s)}finally{ba(i),wr(l)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ai(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ee(e,t,o,r,a){var s={capture:r,passive:a},i=Lc(e,t,o,s);t!==document.body&&t!==window&&t!==document||ef(()=>{t.removeEventListener(e,i,s)})}function Ks(e){var t,o=this,r=o.ownerDocument,a=e.type,s=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=s[0]||e.target,l=0,c=e.__root;if(c){var d=s.indexOf(c);if(d!==-1&&(o===document||o===window))return void(e.__root=o);var u=s.indexOf(o);if(u===-1)return;d<=u&&(l=d)}if((i=s[l]||e.target)!==o){Vb(e,"currentTarget",{configurable:!0,get:()=>i||r});var f=Sn,h=tn;ba(null),wr(null);try{for(var m,g=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var j=i["__"+a];if(j!==void 0&&!i.disabled)if(wi(j)){var[x,...E]=j;x.apply(i,[e,...E])}else j.call(i,e)}catch(w){m?g.push(w):m=w}if(e.cancelBubble||b===o||b===null)break;i=b}if(m){var y=function(w){queueMicrotask(()=>{throw w})};for(var S of g)y(S);throw m}}finally{e.__root=o,delete e.currentTarget,ba(f),wr(h)}}}function qu(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Pa(e,t){var o=tn;o.nodes_start===null&&(o.nodes_start=e,o.nodes_end=t)}function B(e,t){var o,r=!!(1&t),a=!!(2&t),s=!e.startsWith("<!>");return()=>{o===void 0&&(o=qu(s?e:"<!>"+e),r||(o=Bo(o)));var i=a?document.importNode(o,!0):o.cloneNode(!0);return r?Pa(Bo(i),i.lastChild):Pa(i,i),i}}function ya(e,t){var o,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",a=!e.startsWith("<!>"),s=!!(1&t),i="<".concat(r,">").concat(a?e:"<!>"+e,"</").concat(r,">");return()=>{if(!o){var l=Bo(qu(i));if(s)for(o=document.createDocumentFragment();Bo(l);)o.appendChild(Bo(l));else o=Bo(l)}var c=o.cloneNode(!0);return s?Pa(Bo(c),c.lastChild):Pa(c,c),c}}function zo(){var e=Tl((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Pa(e,e),e}function It(){var e=document.createDocumentFragment(),t=document.createComment(""),o=Tl();return e.append(t,o),Pa(t,o),e}function P(e,t){e!==null&&e.before(t)}var e0=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],t0={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},n0=["touchstart","touchmove"];function o0(e){return n0.includes(e)}function dt(e,t){var o,r=t==null?"":typeof t=="object"?t+"":t;r!==((o=e.__t)!==null&&o!==void 0?o:e.__t=e.nodeValue)&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function r0(e,t){return function(o,r){var{target:a,anchor:s,props:i={},events:l,context:c,intro:d=!0}=r;(function(){if(Tr===void 0){Tr=window;var g=Element.prototype,b=Node.prototype;bf=qr(b,"firstChild").get,jf=qr(b,"nextSibling").get,g.__click=void 0,g.__className="",g.__attributes=null,g.__styles=null,g.__e=void 0,Text.prototype.__t=void 0}})();var u=new Set,f=g=>{for(var b=0;b<g.length;b++){var j=g[b];if(!u.has(j)){u.add(j);var x=o0(j);a.addEventListener(j,Ks,{passive:x});var E=Ya.get(j);E===void 0?(document.addEventListener(j,Ks,{passive:x}),Ya.set(j,1)):Ya.set(j,E+1)}}};f(Ic(yf)),Fc.add(f);var h=void 0,m=function(g){var b=$s(64,g,!0);return()=>{ja(b)}}(()=>{var g=s??a.appendChild(Tl());return ma(()=>{c&&(rt({}),an.c=c),l&&(i.$$events=l),h=o(g,i)||{},c&&at()}),()=>{for(var b of u){a.removeEventListener(b,Ks);var j=Ya.get(b);--j==0?(document.removeEventListener(b,Ks),Ya.delete(b)):Ya.set(b,j)}var x;Fc.delete(f),Vc.delete(h),g!==s&&((x=g.parentNode)===null||x===void 0||x.removeChild(g))}});return Vc.set(h,m),h}(e,t)}var Ya=new Map,Vc=new WeakMap;function L(e,t,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,a=e,s=null,i=null,l=null;As(()=>{l!==(l=!!t())&&(l?(s?dl(s):s=ma(()=>o(a)),i&&ri(i,()=>{i=null})):(i?dl(i):r&&(i=ma(()=>r(a))),s&&ri(s,()=>{s=null})))},arguments.length>4&&arguments[4]!==void 0&&arguments[4]?_l:0)}function wf(e,t,o){var r,a=e,s=Po;As(()=>{Mu(s,s=t())&&(r&&ri(r),r=ma(()=>o(a)))})}var sc=null;function no(e,t){return t}function Hn(e,t,o,r,a){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l={flags:t,items:new Map,first:null};!(4&t)||(i=e.appendChild(Tl()));var c=null,d=!1;As(()=>{var u=o(),f=wi(u)?u:u==null?[]:Ic(u),h=f.length;d&&h===0||(d=h===0,function(m,g,b,j,x,E,y){var S,w,_,I,q,k,X=!!(8&x),je=!!(3&x),ae=m.length,fe=g.items,qe=g.first,we=qe,ze=null,_e=[],$e=[];if(X)for(k=0;k<ae;k+=1){var he,ce;I=y(_=m[k],k),(q=fe.get(I))!==void 0&&((he=q.a)===null||he===void 0||he.measure(),((ce=w)!==null&&ce!==void 0?ce:w=new Set).add(q))}for(k=0;k<ae;k+=1)if(I=y(_=m[k],k),(q=fe.get(I))!==void 0){var ie,Ge;if(je&&a0(q,_,k,x),q.e.f&Mr&&(dl(q.e),X&&((ie=q.a)===null||ie===void 0||ie.unfix(),((Ge=w)!==null&&Ge!==void 0?Ge:w=new Set).delete(q))),q!==we){if(S!==void 0&&S.has(q)){if(_e.length<$e.length){var le,de=$e[0];ze=de.prev;var C=_e[0],oe=_e[_e.length-1];for(le=0;le<_e.length;le+=1)Nd(_e[le],de,b);for(le=0;le<$e.length;le+=1)S.delete($e[le]);Zr(g,C.prev,oe.next),Zr(g,ze,C),Zr(g,oe,de),we=de,ze=oe,k-=1,_e=[],$e=[]}else S.delete(q),Nd(q,we,b),Zr(g,q.prev,q.next),Zr(g,q,ze===null?g.first:ze.next),Zr(g,ze,q),ze=q;continue}for(_e=[],$e=[];we!==null&&we.k!==I;){var T;(E||!(we.e.f&Mr))&&((T=S)!==null&&T!==void 0?T:S=new Set).add(we),$e.push(we),we=we.next}if(we===null)continue;q=we}_e.push(q),ze=q,we=q.next}else ze=s0(we?we.e.nodes_start:b,g,ze,ze===null?g.first:ze.next,_,I,k,j,x),fe.set(I,ze),_e=[],$e=[],we=ze.next;if(we!==null||S!==void 0){for(var re=S===void 0?[]:Ic(S);we!==null;)!E&&we.e.f&Mr||re.push(we),we=we.next;var Ze=re.length;if(Ze>0){var se=4&x&&ae===0?b:null;if(X){for(k=0;k<Ze;k+=1){var V;(V=re[k].a)===null||V===void 0||V.measure()}for(k=0;k<Ze;k+=1){var R;(R=re[k].a)===null||R===void 0||R.fix()}}(function(ve,vt,Be,Ae){for(var K=[],me=vt.length,Ie=0;Ie<me;Ie++)_u(vt[Ie].e,K,!0);var ut=me>0&&K.length===0&&Be!==null;if(ut){var Me=Be.parentNode;Me.textContent="",Me.append(Be),Ae.clear(),Zr(ve,vt[0].prev,vt[me-1].next)}af(K,()=>{for(var gt=0;gt<me;gt++){var Se=vt[gt];ut||(Ae.delete(Se.k),Zr(ve,Se.prev,Se.next)),ja(Se.e,!ut)}})})(g,re,se,fe)}}X&&ai(()=>{if(w!==void 0)for(q of w){var ve;(ve=q.a)===null||ve===void 0||ve.apply()}}),tn.first=g.first&&g.first.e,tn.last=ze&&ze.e}(f,l,i,a,t,!!(Sn.f&Mr),r),s!==null&&(h===0?c?dl(c):c=ma(()=>s(i)):c!==null&&ri(c,()=>{c=null})),o())})}function a0(e,t,o,r){1&r&&Dc(e.v,t),2&r?Dc(e.i,o):e.i=o}function s0(e,t,o,r,a,s,i,l,c){var d=sc;try{var u=1&c?16&c?Ro(a):Pu(a):a,f=2&c?Ro(i):i,h={i:f,v:u,k:s,a:null,e:null,prev:o,next:r};return sc=h,h.e=ma(()=>l(e,u,f),Zb),h.e.prev=o&&o.e,h.e.next=r&&r.e,o===null?t.first=h:(o.next=h,o.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{sc=d}}function Nd(e,t,o){for(var r=e.next?e.next.e.nodes_start:o,a=t?t.e.nodes_start:o,s=e.e.nodes_start;s!==r;){var i=Dl(s);a.before(s),s=i}}function Zr(e,t,o){t===null?e.first=o:(t.next=o,t.e.next=o&&o.e),o!==null&&(o.prev=t,o.e.prev=t&&t.e)}function kf(e,t,o,r,a){var s,i=e,l="";As(()=>{var c;l!==(l=(c=t())!==null&&c!==void 0?c:"")&&(s!==void 0&&(ja(s),s=void 0),l!==""&&(s=ma(()=>{var d=l+"";o&&(d="<svg>".concat(d,"</svg>"));var u=qu(d);if((o||r)&&(u=Bo(u)),Pa(Bo(u),u.lastChild),o||r)for(;Bo(u);)i.before(Bo(u));else i.before(u)})))})}function Wn(e,t,o,r,a){var s,i=(s=t.$$slots)===null||s===void 0?void 0:s[o],l=!1;i===!0&&(i=t[o==="default"?"children":o],l=!0),i===void 0?a!==null&&a(e):i(e,l?()=>r:r)}function Cf(e,t,o){var r,a,s=e;As(()=>{r!==(r=t())&&(a&&(ri(a),a=null),r&&(a=ma(()=>o(s,r))))},_l)}function Eo(e,t,o){bo(()=>{var r=Br(()=>t(e,o==null?void 0:o())||{});if(o&&r!=null&&r.update){var a=!1,s={};Ms(()=>{var i=o();$(i),a&&Mu(s,i)&&(s=i,r.update(i))}),a=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}var Ud=!1;function Ra(e,t){var o,r=(o=e.__attributes)!==null&&o!==void 0?o:e.__attributes={};r.value!==(r.value=t)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t)}function Yt(e,t,o,r){var a,s=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={};s[t]!==(s[t]=o)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Kb]=o),o==null?e.removeAttribute(t):typeof o!="string"&&Sf(e).includes(t)?e[t]=o:e.setAttribute(t,o))}function Gi(e,t,o,r){var a,s=arguments.length>4&&arguments[4]!==void 0&&arguments[4],i=arguments.length>5&&arguments[5]!==void 0&&arguments[5],l=t||{},c=e.tagName==="OPTION";for(var d in t)d in o||(o[d]=null);r!==void 0&&(o.class=o.class?o.class+" "+r:r);var u,f,h,m,g=Sf(e),b=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={},j=[],x=function(y){var S=o[y];if(c&&y==="value"&&S==null)return e.value=e.__value="",l[y]=S,0;if(S===(u=l[y])||(l[y]=S,(f=y[0]+y[1])==="$$"))return 0;if(f==="on"){var w={},_="$$"+y,I=y.slice(2);if(h=function(q){return e0.includes(q)}(I),function(q){return q.endsWith("capture")&&q!=="gotpointercapture"&&q!=="lostpointercapture"}(I)&&(I=I.slice(0,-7),w.capture=!0),!h&&u){if(S!=null)return 0;e.removeEventListener(I,l[_],w),l[_]=null}if(S!=null)if(h)e["__".concat(I)]=S,function(q){for(var k=0;k<q.length;k++)yf.add(q[k]);for(var X of Fc)X(q)}([I]);else{let q=function(k){l[y].call(this,k)};t?l[_]=Lc(I,e,q,w):j.push([y,S,()=>l[_]=Lc(I,e,q,w)])}}else y==="style"&&S!=null?e.style.cssText=S+"":y==="autofocus"?function(q,k){if(k){var X=document.body;q.autofocus=!0,ai(()=>{document.activeElement===X&&q.focus()})}}(e,!!S):y==="__value"||y==="value"&&S!=null?e.value=e[y]=e.__value=S:(m=y,s||(m=function(q){var k;return q=q.toLowerCase(),(k=t0[q])!==null&&k!==void 0?k:q}(m)),S!=null||i?g.includes(m)&&(i||typeof S!="string")?e[m]=S:typeof S!="function"&&Yt(e,m,S):(b[y]=null,e.removeAttribute(y)));y==="style"&&"__styles"in e&&(e.__styles={})};for(var E in o)x(E);return t||ai(()=>{if(e.isConnected)for(var[y,S,w]of j)l[y]===S&&w()}),l}var Bd=new Map;function Sf(e){var t,o=Bd.get(e.nodeName);if(o)return o;Bd.set(e.nodeName,o=[]);for(var r=cl(e),a=Element.prototype;a!==r;){for(var s in t=Hp(r))t[s].set&&o.push(s);r=cl(r)}return o}function Wo(e,t){var o=e.__className,r=function(a){return a??""}(t);o!==r&&(t==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function We(e,t,o){if(o){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function hs(e,t,o,r){var a,s=(a=e.__styles)!==null&&a!==void 0?a:e.__styles={};s[t]!==o&&(s[t]=o,o==null?e.style.removeProperty(t):e.style.setProperty(t,o,""))}function i0(e,t,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:o;e.addEventListener(t,o);var a=e.__on_r;e.__on_r=a?()=>{a(),r()}:r,Ud||(Ud=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{if(!s.defaultPrevented)for(var i of s.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}function pl(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,r=Il();i0(e,"input",()=>{var a,s=Fd(e)?Ld(e.value):e.value;o(s),r&&s!==(s=t())&&(e.value=(a=s)!==null&&a!==void 0?a:"")}),Ms(()=>{var a=t();Fd(e)&&a===Ld(e.value)||(e.type!=="date"||a||e.value)&&a!==e.value&&(e.value=a??"")})}function Fd(e){var t=e.type;return t==="number"||t==="range"}function Ld(e){return e===""?null:+e}function bt(e,t,o){var r=qr(e,t);r&&r.set&&(e[t]=o,ef(()=>{e[t]=null}))}function Vd(e,t){return e===t||(e==null?void 0:e[vs])===t}function On(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;return bo(()=>{var r,a;return Ms(()=>{r=a,a=[],Br(()=>{e!==o(...a)&&(t(e,...a),r&&Vd(o(...r),e)&&t(null,...r))})}),()=>{ai(()=>{a&&Vd(o(...a),e)&&t(null,...a)})}}),e}function er(e){return function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return o[0].stopPropagation(),e==null?void 0:e.apply(this,o)}}function ta(e){return function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return o[0].preventDefault(),e==null?void 0:e.apply(this,o)}}function ct(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=an,o=t.l.u;if(o){var r,a=()=>$(t.s);if(e){var s=0,i={},l=ul(()=>{var c=!1,d=t.s;for(var u in d)d[u]!==i[u]&&(i[u]=d[u],c=!0);return c&&s++,s});a=()=>n(l)}o.b.length&&(r=()=>{Wd(t,a),qc(o.b)},Zp(),Ms(r)),Nc(()=>{var c=Br(()=>o.m.map(Jb));return()=>{for(var d of c)typeof d=="function"&&d()}}),o.a.length&&Nc(()=>{Wd(t,a),qc(o.a)})}}function Wd(e,t){if(e.l.s)for(var o of e.l.s)n(o);t()}function Nl(e){var t=Ro(0);return function(){return arguments.length===1?(v(t,n(t)+1),arguments[0]):(n(t),e())}}function Ys(e,t){var o,r=(o=e.$$events)===null||o===void 0?void 0:o[t.type],a=wi(r)?r.slice():r==null?[]:[r];for(var s of a)s.call(this,t)}function Ao(e){an===null&&Si(),an.l!==null?Of(an).m.push(e):Nc(()=>{var t=Br(e);if(typeof t=="function")return t})}function Lo(e){an===null&&Si(),Ao(()=>()=>Br(e))}function l0(){var e=an;return e===null&&Si(),(t,o,r)=>{var a,s=(a=e.s.$$events)===null||a===void 0?void 0:a[t];if(s){var i=wi(s)?s.slice():[s],l=function(d,u){var{bubbles:f=!1,cancelable:h=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(d,{detail:u,bubbles:f,cancelable:h})}(t,o,r);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function c0(e){an===null&&Si(),an.l===null&&function(){throw new Error("lifecycle_legacy_only")}(),Of(an).b.push(e)}function Of(e){var t,o=e.l;return(t=o.u)!==null&&t!==void 0?t:o.u={a:[],b:[],m:[]}}var Ni=!1,u0={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,o)=>(t in e.special||(e.special[t]=p({get[t](){return e.props[t]}},t,4)),e.special[t](o),Td(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Td(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Ui(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ro(0)},u0)}var d0={get(e,t){for(var o=e.props.length;o--;){var r=e.props[o];if(Fs(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,o){for(var r=e.props.length;r--;){var a=e.props[r];Fs(a)&&(a=a());var s=qr(a,t);if(s&&s.set)return s.set(o),!0}return!1},getOwnPropertyDescriptor(e,t){for(var o=e.props.length;o--;){var r=e.props[o];if(Fs(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){var a=qr(r,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){for(var o of e.props)if(Fs(o)&&(o=o()),o!=null&&t in o)return!0;return!1},ownKeys(e){var t=[];for(var o of e.props)for(var r in Fs(o)&&(o=o()),o)t.includes(r)||t.push(r);return t}};function da(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return new Proxy({props:t},d0)}function Hd(e){for(var t=tn,o=tn;t!==null&&!(96&t.f);)t=t.parent;try{return wr(t),e()}finally{wr(o)}}function p(e,t,o,r){var a,s,i=!!(1&o),l=!!(2&o),c=!!(8&o),d=!!(16&o),u=!1;c?[s,u]=function(I){var q=Ni;try{return Ni=!1,[I(),Ni]}finally{Ni=q}}(()=>e[t]):s=e[t];var f,h=(a=qr(e,t))===null||a===void 0?void 0:a.set,m=r,g=!0,b=!1,j=()=>(b=!0,g&&(g=!1,m=d?Br(r):r),m);if(s===void 0&&r!==void 0&&(h&&l&&function(){throw new Error("props_invalid_value")}(),s=j(),h&&h(s)),l)f=()=>{var I=e[t];return I===void 0?j():(g=!0,b=!1,I)};else{var x=Hd(()=>(i?ul:xe)(()=>e[t]));x.f|=65536,f=()=>{var I=n(x);return I!==void 0&&(m=void 0),I===void 0?m:I}}if(!(4&o))return f;if(h){var E=e.$$legacy;return function(I,q){return arguments.length>0?(l&&q&&!E&&!u||h(q?f():I),I):f()}}var y=!1,S=!1,w=Pu(s),_=Hd(()=>ul(()=>{var I=f(),q=n(w);return y?(y=!1,S=!0,q):(S=!1,w.v=I)}));return i||(_.equals=Au),function(I,q){if(arguments.length>0){var k=q?n(_):l&&c?ts(I):I;return _.equals(k)||(y=!0,v(w,k),b&&m!==void 0&&(m=k),Br(()=>n(_))),I}return n(_)}}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(r){var a=function(s){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[s]}catch{}}("debug");return a!=null&&a.endsWith("*")?r.startsWith(a.slice(0,-1)):r===a}(e);if(!t)return v0;var o=function(r){for(var a=0,s=0;s<r.length;s++)a=(a<<5)-a+r.charCodeAt(s),a|=0;return Jd[Math.abs(a)%Jd.length]}(e);return function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];console.log("%c".concat(e),"color:".concat(o),...a)}}function v0(){}var Jd=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],p0=0;function ss(){return++p0}function jo(e){return parseInt(e,10)}function Tu(e){return f0.test(e)}var f0=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function en(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function to(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function h0(e){return e===!0||e===!1}function Wc(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return Wc(Number(e));try{var t=e&&e.valueOf();if(t!==e)return Wc(t)}catch{return!1}return!1}function Ef(e){(Bi=Bi||window.document.createElement("div")).style.color="",Bi.style.color=e;var t=Bi.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var Bi=void 0;function g0(e){return typeof e=="string"&&e.length<99&&!!Ef(e)}function Du(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(en(e))return"object";var o=t.stringify(e);return o&&Tu(o)?"number":o==="true"||o==="false"?"boolean":o==="null"?"null":"unknown"}var m0=/^https?:\/\/\S+$/;function Ul(e){return typeof e=="string"&&m0.test(e)}function Rs(e,t){if(e==="")return"";var o=e.trim();return o==="null"?null:o==="true"||o!=="false"&&(Tu(o)?t.parse(o):e)}var b0=[];function Kd(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}function Hc(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],o={};if(!Array.isArray(e))throw new TypeError("Array expected");function r(i,l){(!Array.isArray(i)&&!en(i)||t&&l.length>0)&&(o[xt(l)]=!0),en(i)&&Object.keys(i).forEach(c=>{r(i[c],l.concat(c))})}for(var a=Math.min(e.length,1e4),s=0;s<a;s++)r(e[s],b0);return Object.keys(o).sort().map(gr)}function zf(e,t,o){if(!(t<=e))for(var r=e;r<t;r++)o(r)}function $f(e,t){return e.length>t?e.slice(0,t):e}function Yd(e){return ge({},e)}function Xd(e){return Object.values(e)}function Qd(e,t,o,r){var a=e.slice(0),s=a.splice(t,o);return a.splice.apply(a,[t+r,0,...s]),a}function j0(e,t,o){return e.slice(0,t).concat(o).concat(e.slice(t))}function Ei(e,t){try{return t.parse(e)}catch{return t.parse(mr(e))}}function Mf(e,t){try{return Ei(e,t)}catch{return}}function Bl(e,t){e=e.replace(Pf,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Af(e){e=e.replace(Pf,"");try{return mr(e)}catch{}try{var t=mr("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var o=mr("{"+e+"}");return o.substring(1,o.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Pf=/,\s*$/;function ks(e,t){var o=Zd.exec(t);if(o){var r=jo(o[2]),a=function(m,g){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,x=0,E=b;E<j;E++)m.charAt(E)===g&&x++;return x}(e,`
`,0,r),s=r-e.lastIndexOf(`
`,r)-1;return{position:r,line:a,column:s,message:t.replace(Zd,()=>"line ".concat(a+1," column ").concat(s+1))}}var i=k0.exec(t),l=i?jo(i[1]):void 0,c=l!==void 0?l-1:void 0,d=C0.exec(t),u=d?jo(d[1]):void 0,f=u!==void 0?u-1:void 0,h=c!==void 0&&f!==void 0?function(m,g,b){for(var j=m.indexOf(`
`),x=1;x<g&&j!==-1;)j=m.indexOf(`
`,j+1),x++;return j!==-1?j+b+1:void 0}(e,c,f):void 0;return{position:h,line:c,column:f,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function ic(e){return en(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function li(e){return en(e)&&typeof e.text=="string"}function ci(e){return en(e)&&e.json!==void 0}function x0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return li(e)?e:{text:o.stringify(e.json,null,t)}}function Gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return ci(e)?e:{json:t.parse(e.text)}}function Jc(e,t,o){return x0(e,t,o).text}function y0(e,t){return w0(e,t)>t}function w0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(li(e))return e.text.length;var o=e.json,r=0;return function a(s){if(Array.isArray(s)){if((r+=s.length-1+2)>t)return;for(var i=0;i<s.length;i++)if(a(s[i]),r>t)return}else if(en(s)){var l=Object.keys(s);r+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var d=l[c],u=s[d];r+=d.length+2,a(u)}}else r+=typeof s=="string"?s.length+2:String(s).length}(o),r}var Zd=/(position|char) (\d+)/,k0=/line (\d+)/,C0=/column (\d+)/;function S0(e,t){return e.parse===t.parse&&e.stringify===t.stringify}var io,dn,or,ar,sr,Zo,va,O0=/[,:]\S/;function Nu(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:o}=e;return t?o?E0:z0:o?$0:M0}(function(e){e.text="text",e.tree="tree",e.table="table"})(io||(io={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(dn||(dn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(or||(or={})),function(e){e.info="info",e.warning="warning",e.error="error"}(ar||(ar={})),function(e){e.key="key",e.value="value"}(sr||(sr={})),function(e){e.asc="asc",e.desc="desc"}(Zo||(Zo={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(va||(va={}));var E0={escapeValue:e=>Rf(qf(String(e))),unescapeValue:e=>Tf(_f(e))},z0={escapeValue:e=>qf(String(e)),unescapeValue:e=>Tf(e)},$0={escapeValue:e=>Rf(String(e)),unescapeValue:e=>_f(e)},M0={escapeValue:e=>String(e),unescapeValue:e=>e};function Rf(e){return e.replace(/[^\x20-\x7F]/g,t=>{var o;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((o=t.codePointAt(0))===null||o===void 0?void 0:o.toString(16))).slice(-4)})}function _f(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var o=JSON.parse('"'+t+'"');return If[o]||o}catch{return t}})}var If={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},A0={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function qf(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>If[t]||t)}function Tf(e){return e.replace(/\\["bfnrt\\]/g,t=>A0[t]||t)}function Fl(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function Df(e,t){return _s(e,o=>o.nodeName.toUpperCase()===t.toUpperCase())}function ia(e,t,o){return _s(e,r=>function(a,s,i){return typeof a.getAttribute=="function"&&a.getAttribute(s)===i}(r,t,o))}function _s(e,t){return!!Uu(e,t)}function Uu(e,t){for(var o=e;o&&!t(o);)o=o.parentNode;return o}function zi(e){var t,o;return(t=e==null||(o=e.ownerDocument)===null||o===void 0?void 0:o.defaultView)!==null&&t!==void 0?t:void 0}function Bu(e){var t=zi(e),o=t==null?void 0:t.document.activeElement;return!!o&&_s(o,r=>r===e)}function Nf(e,t){return Uu(e,o=>o.nodeName===t)}function lc(e){return ia(e,"data-type","selectable-key")?dn.key:ia(e,"data-type","selectable-value")?dn.value:ia(e,"data-type","insert-selection-area-inside")?dn.inside:ia(e,"data-type","insert-selection-area-after")?dn.after:dn.multi}function Kc(e){return encodeURIComponent(xt(e))}function Uf(e){var t,o=Uu(e,a=>!(a==null||!a.hasAttribute)&&a.hasAttribute("data-path")),r=(t=o==null?void 0:o.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return r?gr(decodeURIComponent(r)):void 0}function P0(e){var{allElements:t,currentElement:o,direction:r,hasPrio:a=()=>!0,margin:s=10}=e,i=tb(t.filter(function(x){var E=x.getBoundingClientRect();return E.width>0&&E.height>0}),c),l=c(o);function c(x){var E=x.getBoundingClientRect();return{x:E.left+E.width/2,y:E.top+E.height/2,rect:E,element:x}}function d(x,E){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=x.x-E.x,w=(x.y-E.y)*y;return Math.sqrt(S*S+w*w)}var u=x=>d(x,l);if(r==="Left"||r==="Right"){var f=r==="Left"?i.filter(x=>{return E=l,x.rect.left+s<E.rect.left;var E}):i.filter(x=>{return E=l,x.rect.right>E.rect.right+s;var E}),h=f.filter(x=>{return E=x,y=l,Math.abs(E.y-y.y)<s;var E,y}),m=Ti(h,u)||Ti(f,x=>d(x,l,10));return m==null?void 0:m.element}if(r==="Up"||r==="Down"){var g=r==="Up"?i.filter(x=>{return E=l,x.y+s<E.y;var E}):i.filter(x=>{return E=l,x.y>E.y+s;var E}),b=g.filter(x=>a(x.element)),j=Ti(b,u)||Ti(g,u);return j==null?void 0:j.element}}function Fu(){var e,t,o,r;return typeof navigator<"u"&&(e=(t=(o=navigator)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(r=navigator)===null||r===void 0||(r=r.userAgentData)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function Fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",o=[];Lu(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fu)&&o.push("Ctrl"),e.altKey&&o.push("Alt"),e.shiftKey&&o.push("Shift");var r=e.key.length===1?e.key.toUpperCase():e.key;return r in R0||o.push(r),o.join(t)}function Lu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fu;return e.ctrlKey||e.metaKey&&t()}var R0={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function ht(e,t){t===void 0&&(t={});var o=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}ht(`.jse-absolute-popup.svelte-1r8q3m8 {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-hidden-input:where(.svelte-1r8q3m8) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-absolute-popup-content:where(.svelte-1r8q3m8) {
  position: absolute;
}`);var _0=B('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"> <!></div>'),I0=B('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');function q0(e,t){rt(t,!1);var o=p(t,"popup",8),r=p(t,"closeAbsolutePopup",8),a=M(),s=M();function i(d){o().options&&o().options.closeOnOuterClick&&!_s(d.target,u=>u===n(a))&&r()(o().id)}function l(d){Fr(d)==="Escape"&&(d.preventDefault(),d.stopPropagation(),r()(o().id))}Ao(function(){n(s)&&n(s).focus()}),ct();var c=I0();ee("mousedown",Tr,function(d){i(d)},!0),ee("keydown",Tr,l,!0),ee("wheel",Tr,function(d){i(d)},!0),L(A(c),()=>n(a),d=>{var u=_0(),f=xe(()=>function(m,g){var b=m.getBoundingClientRect(),{left:j,top:x,positionAbove:E,positionLeft:y}=function(){if(g.anchor){var{anchor:S,width:w=0,height:_=0,offsetTop:I=0,offsetLeft:q=0,position:k}=g,{left:X,top:je,bottom:ae,right:fe}=S.getBoundingClientRect(),qe=k==="top"||je+_>window.innerHeight&&je>_,we=k==="left"||X+w>window.innerWidth&&X>w;return{left:we?fe-q:X+q,top:qe?je-I:ae+I,positionAbove:qe,positionLeft:we}}if(typeof g.left=="number"&&typeof g.top=="number"){var{left:ze,top:_e,width:$e=0,height:he=0}=g;return{left:ze,top:_e,positionAbove:_e+he>window.innerHeight&&_e>he,positionLeft:ze+$e>window.innerWidth&&ze>$e}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(E?"bottom: ".concat(b.top-x,"px;"):"top: ".concat(x-b.top,"px;"))+(y?"right: ".concat(b.left-j,"px;"):"left: ".concat(j-b.left,"px;"))}(n(a),o().options)),h=A(u);On(h,m=>v(s,m),()=>n(s)),Cf(D(h,2),()=>o().component,(m,g)=>{g(m,da(()=>o().props))}),ne(()=>Yt(u,"style",n(f))),P(d,u)}),On(c,d=>v(a,d),()=>n(a)),ee("mousedown",c,function(d){d.stopPropagation()}),ee("keydown",c,l),P(e,c),at()}var T0=B("<!> <!>",1);function Yc(e,t){rt(t,!1);var o,r,a=ho("jsoneditor:AbsolutePopup"),s=M([],!0);function i(d){var u=n(s).findIndex(h=>h.id===d);if(u!==-1){var f=n(s)[u];f.options.onClose&&f.options.onClose(),v(s,n(s).filter(h=>h.id!==d))}}o="absolute-popup",r={openAbsolutePopup:function(d,u,f){a("open...",u,f);var h={id:ss(),component:d,props:u||{},options:f||{}};return v(s,[...n(s),h]),h.id},closeAbsolutePopup:i},xf().set(o,r),N(()=>n(s),()=>{a("popups",n(s))}),Wt(),ct(!0);var l=T0(),c=Te(l);Hn(c,1,()=>n(s),no,(d,u)=>{q0(d,{get popup(){return n(u)},closeAbsolutePopup:i})}),Wn(D(c,2),t,"default",{},null),P(e,l),at()}function $i(e,t){for(var o=new Set(t),r=e.replace(/ \(copy( \d+)?\)$/,""),a=e,s=1;o.has(a);){var i="copy"+(s>1?" "+s:"");a="".concat(r," (").concat(i,")"),s++}return a}function ui(e,t){var o=t-3;return e.length>t?e.substring(0,o)+"...":e}function D0(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var o=Number(e),r=parseFloat(e);return isNaN(o)||isNaN(r)?e:o}}var N0={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:o,sort:r,projection:a}=t,s=[];o&&o.path&&o.relation&&o.value&&s.push(["filter",[(i=o.relation,Vp("1 ".concat(i," 1"))[0]),Fi(o.path),D0(o.value)]]);var i;return r&&r.path&&r.direction&&s.push(["sort",Fi(r.path),r.direction==="desc"?"desc":"asc"]),a&&a.paths&&(a.paths.length>1?s.push(["pick",...a.paths.map(Fi)]):s.push(["map",Fi(a.paths[0])])),Mb(["pipe",...s])},executeQuery:function(e,t){return t.trim()!==""?Ab(e,t):e}};function Fi(e){return["get",...e]}var U0=ya("<g><!></g>");function B0(e,t){rt(t,!1);var o=870711,r=M(""),a=p(t,"data",8);function s(l){if(!l||!l.raw)return"";var c=l.raw,d={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,f)=>{var h="fa-".concat((o+=1).toString(16));return d[f]=h,' id="'.concat(h,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,f,h,m)=>{var g=f||m;return g&&d[g]?"#".concat(d[g]):u}),c}N(()=>$(a()),()=>{v(r,s(a()))}),Wt();var i=U0();kf(A(i),()=>n(r),!0,!1),P(e,i),at()}ht(`
  .fa-icon.svelte-1mc5hvj {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-1mc5hvj {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-1mc5hvj {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-1mc5hvj {
    color: #fff;
  }
  .fa-pulse.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-1mc5hvj-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var F0=ya("<svg><!></svg>"),L0=ya("<path></path>"),V0=ya("<polygon></polygon>"),W0=ya("<!><!><!>",1);function Ut(e,t){var o=Ui(t,["children","$$slots","$$events","$$legacy"]),r=Ui(o,["class","data","scale","spin","inverse","pulse","flip","label","style"]);rt(t,!1);var a=p(t,"class",8,""),s=p(t,"data",8),i=M(),l=p(t,"scale",8,1),c=p(t,"spin",8,!1),d=p(t,"inverse",8,!1),u=p(t,"pulse",8,!1),f=p(t,"flip",8,void 0),h=p(t,"label",8,""),m=p(t,"style",8,""),g=M(10),b=M(10),j=M(),x=M();function E(){var S=1;return l()!==void 0&&(S=Number(l())),isNaN(S)||S<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*S}function y(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}N(()=>($(s()),$(m()),$(l())),()=>{v(i,function(S){var w;if(S){if(!("definition"in S)){if("iconName"in S&&"icon"in S){S.iconName;var[_,I,,,q]=S.icon;w={width:_,height:I,paths:(Array.isArray(q)?q:[q]).map(k=>({d:k}))}}else w=S[Object.keys(S)[0]];return w}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(s())),m(),l(),v(g,n(i)?n(i).width/y()*E():0),v(b,n(i)?n(i).height/y()*E():0),v(j,function(){var S="";m()!==null&&(S+=m());var w=E();return w===1?S.length===0?"":S:(S===""||S.endsWith(";")||(S+="; "),"".concat(S,"font-size: ").concat(w,"em"))}()),v(x,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(g)," ").concat(n(b)))}),Wt(),ct(),function(S,w){var _,I=Ui(w,["children","$$slots","$$events","$$legacy"]),q=Ui(I,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),k=p(w,"class",8,""),X=p(w,"width",8),je=p(w,"height",8),ae=p(w,"box",8,"0 0 0 0"),fe=p(w,"spin",8,!1),qe=p(w,"inverse",8,!1),we=p(w,"pulse",8,!1),ze=p(w,"flip",8,"none"),_e=p(w,"style",8,""),$e=p(w,"label",8,""),he=F0();Wn(A(he),w,"default",{},null),ne(()=>{var ce;_=Gi(he,_,ge({version:"1.1",class:"fa-icon ".concat((ce=k())!==null&&ce!==void 0?ce:""),width:X(),height:je(),"aria-label":$e(),role:$e()?"img":"presentation",viewBox:ae(),style:_e()},q),"svelte-1mc5hvj",!0),We(he,"fa-spin",fe()),We(he,"fa-pulse",we()),We(he,"fa-inverse",qe()),We(he,"fa-flip-horizontal",ze()==="horizontal"),We(he,"fa-flip-vertical",ze()==="vertical")}),P(S,he)}(e,da({get label(){return h()},get width(){return n(g)},get height(){return n(b)},get box(){return n(x)},get style(){return n(j)},get spin(){return c()},get flip(){return f()},get inverse(){return d()},get pulse(){return u()},get class(){return a()}},()=>r,{children:(S,w)=>{var _=It();Wn(Te(_),t,"default",{},I=>{var q=W0(),k=Te(q);Hn(k,1,()=>{var je;return((je=n(i))===null||je===void 0?void 0:je.paths)||[]},no,(je,ae)=>{var fe,qe=L0();ne(()=>fe=Gi(qe,fe,ge({},n(ae)),void 0,!0)),P(je,qe)});var X=D(k);Hn(X,1,()=>{var je;return((je=n(i))===null||je===void 0?void 0:je.polygons)||[]},no,(je,ae)=>{var fe,qe=V0();ne(()=>fe=Gi(qe,fe,ge({},n(ae)),void 0,!0)),P(je,qe)}),L(D(X),()=>{var je;return(je=n(i))===null||je===void 0?void 0:je.raw},je=>{B0(je,{get data(){return n(i)},set data(ae){v(i,ae)},$$legacy:!0})}),P(I,q)}),P(S,_)},$$slots:{default:!0}})),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-1ryp01u {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly:where(.svelte-1ryp01u)) {
  cursor: pointer;
}`);var H0=B('<div role="checkbox" tabindex="-1" class="jse-boolean-toggle svelte-1ryp01u"><!></div>');function J0(e,t){rt(t,!1);var o=p(t,"path",9),r=p(t,"value",9),a=p(t,"readOnly",9),s=p(t,"onPatch",9),i=p(t,"focus",9);ct(!0);var l=H0(),c=A(l),d=xe(()=>r()===!0?Sp:Op);Ut(c,{get data(){return n(d)}}),ne(()=>{Yt(l,"aria-checked",r()===!0),Yt(l,"title",a()?"Boolean value ".concat(r()):"Click to toggle this boolean value"),We(l,"jse-readonly",a())}),ee("mousedown",l,function(u){u.stopPropagation(),a()||(s()([{op:"replace",path:xt(o()),value:!r()}]),i()())}),P(e,l),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-s1wu8v .picker_slider,
.jse-color-picker-popup.svelte-s1wu8v .picker_sl,
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input,
.jse-color-picker-popup.svelte-s1wu8v .picker_sample,
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var K0=B('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');function Y0(e,t){rt(t,!1);var o=p(t,"color",8),r=p(t,"onChange",8),a=p(t,"showOnTop",8),s=M(),i=()=>{};Ao(tt(function*(){var c,d=new((c=yield Ag(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(s),color:o(),popup:a()?"top":"bottom",onDone(u){var f=u.rgba[3]===1?u.hex.substring(0,7):u.hex;r()(f)}});d.show(),i=()=>{d.destroy()}})),Lo(()=>{i()}),ct();var l=K0();On(l,c=>v(s,c),()=>n(s)),P(e,l),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-xeg9n6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly:where(.svelte-xeg9n6)) {
  cursor: pointer;
}`);var X0=B('<button type="button" class="jse-color-picker-button svelte-xeg9n6"></button>');function Q0(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),{openAbsolutePopup:a}=xa("absolute-popup"),s=p(t,"path",9),i=p(t,"value",9),l=p(t,"readOnly",9),c=p(t,"onPatch",9),d=p(t,"focus",9);function u(m){c()([{op:"replace",path:xt(s()),value:m}]),f()}function f(){d()()}N(()=>$(i()),()=>{v(o,Ef(i()))}),N(()=>($(l()),$(i())),()=>{v(r,l()?"Color ".concat(i()):"Click to open a color picker")}),Wt(),ct(!0);var h=X0();ne(()=>{var m;Yt(h,"style","background: ".concat((m=n(o))!==null&&m!==void 0?m:"")),Yt(h,"title",n(r)),Yt(h,"aria-label",n(r)),We(h,"jse-readonly",l())}),ee("click",h,function(m){var g,b;if(!l()){var j=m.target,x=j.getBoundingClientRect().top,E=((g=(b=zi(j))===null||b===void 0?void 0:b.innerHeight)!==null&&g!==void 0?g:0)-x<300&&x>300,y={color:i(),onChange:u,showOnTop:E};a(Y0,y,{anchor:j,closeOnOuterClick:!0,onClose:f,offsetTop:18,offsetLeft:-8,height:300})}}),P(e,h),at()}var cc=1e3,di=100,Xc=2e4,gs=[{start:0,end:di}],G0=1048576,ev=10485760,uc="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",Vu="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Ls="hover-insert-inside",dc="hover-insert-after",tv="hover-collection",vc="valid",nv="repairable",Ar=336,Pr=260,Xs=100,ov={[Zo.asc]:"ascending",[Zo.desc]:"descending"};function Bf(e){for(var t=jm(e,l=>l.start),o=[t[0]],r=0;r<t.length;r++){var a=o.length-1,s=o[a],i=t[r];i.start<=s.end?o[a]={start:Math.min(s.start,i.start),end:Math.max(s.end,i.end)}:o.push(i)}return o}function Qc(e){return fl(e)+di}function fl(e){return Math.floor(e/di)*di}function Ff(e){return!!e&&(e.type==="space"||e.space===!0)}function Zi(e){return!!e&&(e.type==="separator"||e.separator===!0)}function Z0(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Gs(e){return!!e&&typeof e.onClick=="function"}function pc(e){return!!e&&e.type==="dropdown-button"&&Gs(e.main)&&Array.isArray(e.items)}function ej(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function tj(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function rv(e){return en(e)&&en(e.parseError)}function nj(e){return en(e)&&Array.isArray(e.validationErrors)}function oj(e){return en(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function rj(e){return en(e)&&oj(e)&&typeof e.isChildError=="boolean"}function aj(e){return en(e)&&typeof e.action=="function"&&en(e.props)}function ir(e){return e!==void 0&&e.type==="object"}function wo(e){return e!==void 0&&e.type==="array"}function Wu(e){return e!==void 0&&e.type==="value"}function _a(e){return ir(e)||wo(e)}function av(e){return e!==void 0&&Array.isArray(e.searchResults)}function Gc(e){var{json:t,expand:o}=e,r=function(a){var{json:s,factory:i}=a;return Array.isArray(s)?i.createArrayDocumentState():en(s)?i.createObjectDocumentState():s!==void 0?i.createValueDocumentState():void 0}({json:t,factory:Ku});return o&&r?fr(t,r,[],o):r}function Hu(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:gs,items:[]}}function Ju(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Ku={createObjectDocumentState:Ju,createArrayDocumentState:Hu,createValueDocumentState:function(){return{type:"value"}}};function Lf(e,t,o,r){var{createObjectDocumentState:a,createArrayDocumentState:s,createValueDocumentState:i}=r;return function l(c,d,u){if(Array.isArray(c)){var f=wo(d)?d:s();if(u.length===0)return f;var h=jo(u[0]),m=l(c[h],f.items[h],u.slice(1));return $r(f,["items",u[0]],m)}if(en(c)){var g=ir(d)?d:a();if(u.length===0)return g;var b=u[0],j=l(c[b],g.properties[b],u.slice(1));return $r(g,["properties",b],j)}return Wu(d)?d:i()}(e,t,o)}function No(e,t){return vi(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(o,r)=>{if(o!==void 0&&r!==void 0)return Array.isArray(o)?wo(r)?r:Hu({expanded:!!_a(r)&&r.expanded}):en(o)?ir(r)?r:Ju({expanded:!!_a(r)&&r.expanded}):Wu(r)?r:void 0},()=>!0)}function vi(e,t,o,r,a){var s=r(e,t,o);if(Array.isArray(e)&&wo(s)&&a(s)){var i=[];return Yu(e,s.visibleSections,c=>{var d=o.concat(String(c)),u=vi(e[c],s.items[c],d,r,a);u!==void 0&&(i[c]=u)}),Kd(i,s.items)?s:ge(ge({},s),{},{items:i})}if(en(e)&&ir(s)&&a(s)){var l={};return Object.keys(e).forEach(c=>{var d=o.concat(c),u=vi(e[c],s.properties[c],d,r,a);u!==void 0&&(l[c]=u)}),Kd(Object.values(l),Object.values(s.properties))?s:ge(ge({},s),{},{properties:l})}return s}function Yu(e,t,o){t.forEach(r=>{var{start:a,end:s}=r;zf(a,Math.min(e.length,s),o)})}function pi(e,t){for(var o=e,r=[],a=0;a<t.length;){if(Array.isArray(o)){var s=t[a];r.push("items",s),o=o[jo(s)]}else{if(!en(o))throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));var i=t[a];r.push("properties",i),o=o[i]}a++}return r}function fr(e,t,o,r){for(var a=t,s=function(l){var c=o.slice(0,l);a=Cs(e,a,c,(d,u)=>{var f=_a(u)&&!u.expanded?ge(ge({},u),{},{expanded:!0}):u;return wo(f)?function(h,m){if(function(j,x){return j.some(E=>x>=E.start&&x<E.end)}(h.visibleSections,m))return h;var g=fl(m),b={start:g,end:Qc(g)};return ge(ge({},h),{},{visibleSections:Bf(h.visibleSections.concat(b))})}(f,jo(o[l])):f})},i=0;i<o.length;i++)s(i);return Cs(e,a,o,(l,c)=>function(d,u,f,h){return vi(d,u,f,(m,g,b)=>Array.isArray(m)&&h(b)?wo(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Hu({expanded:!0}):en(m)&&h(b)?ir(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Ju({expanded:!0}):g,m=>_a(m)&&m.expanded)}(l,c,[],r))}function sv(e,t,o,r){return Cs(e,t,o,(a,s)=>r?function(i,l,c){return vi(i,l,c,(d,u)=>iv(u),()=>!0)}(a,s,o):iv(s))}function iv(e){return wo(e)&&e.expanded?ge(ge({},e),{},{expanded:!1,visibleSections:gs}):ir(e)&&e.expanded?ge(ge({},e),{},{expanded:!1}):e}function Vf(e,t,o){var r={json:e,documentState:t},a=o.reduce((s,i)=>({json:br(s.json,[i]),documentState:sj(s.json,s.documentState,i)}),r);return{json:a.json,documentState:No(a.json,a.documentState)}}function sj(e,t,o){if(_p(o))return lv(e,t,o,void 0);if(Ip(o))return cv(e,t,o);if(Eu(o)){var r=_r(e,o.path),a=Dr(e,t,r);return a?Ll(e,t,r,{type:"value",enforceString:a}):t}return _c(o)||ds(o)?function(s,i,l){if(ds(l)&&l.from===l.path)return i;var c=i,d=_r(s,l.from),u=Ea(s,c,d);return ds(l)&&(c=cv(s,c,{op:"remove",path:l.from})),c=lv(s,c,{op:"add",path:l.path,value:null},u),c}(e,t,o):t}function Ea(e,t,o){try{return He(t,pi(e,o))}catch{return}}function Xu(e,t,o,r,a){var s=Lf(e,t,o,a);return hm(s,pi(e,o),i=>{var l=He(e,o);return r(l,i)})}function Ll(e,t,o,r){return function(a,s,i,l,c){var d=Lf(a,s,i,c);return $r(d,pi(a,i),l)}(e,t,o,r,Ku)}function Cs(e,t,o,r){return Xu(e,t,o,r,Ku)}function lv(e,t,o,r){var a=_r(e,o.path),s=t;return s=Cs(e,s,Lt(a),(i,l)=>{if(!wo(l))return l;var c=jo(qt(a)),{items:d,visibleSections:u}=l;return ge(ge({},l),{},{items:c<d.length?j0(d,c,r!==void 0?[r]:Array(1)):d,visibleSections:Wf(u,c,1)})}),Ll(e,s,a,r)}function cv(e,t,o){var r=_r(e,o.path),a=Lt(r),s=He(e,a);return Array.isArray(s)?Cs(e,t,a,(i,l)=>{if(!wo(l))return l;var c=jo(qt(r)),{items:d,visibleSections:u}=l;return ge(ge({},l),{},{items:d.slice(0,c).concat(d.slice(c+1)),visibleSections:Wf(u,c,-1)})}):function(i,l,c){var d=pi(i,c);return sa(l,d)?gm(l,pi(i,c)):l}(e,t,r)}function Wf(e,t,o){return function(r){for(var a=r.slice(0),s=1;s<a.length;)a[s-1].end===a[s].start&&(a[s-1]={start:a[s-1].start,end:a[s].end},a.splice(s)),s++;return a}(e.map(r=>({start:r.start>t?r.start+o:r.start,end:r.end>t?r.end+o:r.end})))}function Dr(e,t,o){var r,a=He(e,o),s=Ea(e,t,o),i=Wu(s)?s.enforceString:void 0;return typeof i=="boolean"?i:typeof(r=a)=="string"&&typeof Rs(r,JSON)!="string"}function Mi(e,t){var o=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.indexOf(t);return r!==-1?o?e.slice(r):e.slice(r+1):[]}function Qu(e,t){var o=[];return function r(a,s,i){o.push(i),lo(a)&&wo(s)&&s.expanded&&Yu(a,s.visibleSections,l=>{r(a[l],s.items[l],i.concat(String(l)))}),fo(a)&&ir(s)&&s.expanded&&Object.keys(a).forEach(l=>{r(a[l],s.properties[l],i.concat(l))})}(e,t,[]),o}function Hf(e,t){var o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];return function a(s,i){r.push({path:i,type:or.value});var l=Ea(e,t,i);if(s&&_a(l)&&l.expanded){if(o&&r.push({path:i,type:or.inside}),lo(s)){var c=wo(l)?l.visibleSections:gs;Yu(s,c,d=>{var u=i.concat(String(d));a(s[d],u),o&&r.push({path:u,type:or.after})})}fo(s)&&Object.keys(s).forEach(d=>{var u=i.concat(d);r.push({path:u,type:or.key}),a(s[d],u),o&&r.push({path:u,type:or.after})})}}(e,[]),r}function fc(e,t,o){var r=Qu(e,t),a=r.map(xt).indexOf(xt(o));if(a!==-1&&a<r.length-1)return r[a+1]}function Ia(e,t,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return fr(e,t,o,y0({json:He(e,o)},r)?Qs:Gu)}function hc(e,t,o){var r=Ea(e,t,o);return _a(r)&&r.expanded?t:Ia(e,t,o)}function Qs(e){return e.length===0||e.length===1&&e[0]==="0"}function uv(e){return e.length===0}function Gu(){return!0}function Zc(){return!1}function Yo(e){return e&&e.type===dn.after||!1}function yo(e){return e&&e.type===dn.inside||!1}function vo(e){return e&&e.type===dn.key||!1}function rn(e){return e&&e.type===dn.value||!1}function Cn(e){return e&&e.type===dn.multi||!1}function Vl(e){return Cn(e)&&Nt(e.focusPath,e.anchorPath)}function Zu(e){return Cn(e)||Yo(e)||yo(e)||vo(e)||rn(e)}function gc(e){return e&&e.type===dn.text||!1}function pa(e,t){var o=[];return function(r,a,s){if(a){var i=za(a),l=Xe(a);if(Nt(i,l))return s(i);if(r!==void 0){var c=Kf(i,l);if(i.length===c.length||l.length===c.length)return s(c);var d=Oo(i,l),u=Rr(r,d),f=fa(r,d),h=Ur(r,d,u),m=Ur(r,d,f);if(!(h===-1||m===-1)){var g=He(r,c);if(fo(g)){for(var b=Object.keys(g),j=h;j<=m;j++){var x=s(c.concat(b[j]));if(x!==void 0)return x}return}if(lo(g)){for(var E=h;E<=m;E++){var y=s(c.concat(String(E)));if(y!==void 0)return y}return}throw new Error("Failed to create selection")}}}}(e,t,r=>{o.push(r)}),o}function Jf(e){return yo(e)?e.path:Lt(Xe(e))}function Rr(e,t){if(!Cn(t))return t.path;var o=Ur(e,t,t.anchorPath);return Ur(e,t,t.focusPath)<o?t.focusPath:t.anchorPath}function fa(e,t){if(!Cn(t))return t.path;var o=Ur(e,t,t.anchorPath);return Ur(e,t,t.focusPath)>o?t.focusPath:t.anchorPath}function dv(e,t,o){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(o){var a=r?Xe(o):Rr(e,o),s=function(c,d,u){var f=Qu(c,d),h=f.map(xt),m=xt(u),g=h.indexOf(m);if(g!==-1&&g>0)return f[g-1]}(e,t,a);if(r)return yo(o)||Yo(o)?s!==void 0?Oo(a,a):void 0:s!==void 0?Oo(za(o),s):void 0;if(Yo(o)||yo(o))return Dt(a);if(vo(o)){if(s===void 0||s.length===0)return;var i=Lt(s),l=He(e,i);return Array.isArray(l)||un(s)?Dt(s):Vr(s)}return rn(o),s!==void 0?Dt(s):void 0}}function vv(e,t,o,r){if(!o)return{caret:void 0,previous:void 0,next:void 0};var a=Hf(e,t,r),s=a.findIndex(i=>Nt(i.path,Xe(o))&&String(i.type)===String(o.type));return{caret:s!==-1?a[s]:void 0,previous:s!==-1&&s>0?a[s-1]:void 0,next:s!==-1&&s<a.length-1?a[s+1]:void 0}}function Xa(e,t){for(var o=Qu(e,t),r=0;r<o.length-1&&o[r+1].length>o[r].length;)r++;var a=o[r];return a===void 0||a.length===0||Array.isArray(He(e,Lt(a)))?Dt(a):Vr(a)}function Ss(e,t){if(t.length===1){var o=Ir(t);if(o.op==="replace")return Dt(_r(e,o.path))}if(!un(t)&&t.every(i=>i.op==="move")){var r=Ir(t),a=t.slice(1);if((_c(r)||ds(r))&&r.from!==r.path&&a.every(i=>(_c(i)||ds(i))&&i.from===i.path))return Vr(_r(e,r.path))}var s=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>_r(e,i.path));if(!un(s))return{type:dn.multi,anchorPath:Ir(s),focusPath:qt(s)}}function Kf(e,t){for(var o=0;o<e.length&&o<t.length&&e[o]===t[o];)o++;return e.slice(0,o)}function hl(e){return vo(e)||rn(e)||Vl(e)}function pv(e,t){return hl(t)&&to(He(e,Xe(t)))?Xe(t):Lt(Xe(t))}function Lr(e,t){if(e.length<t.length)return!1;for(var o=0;o<t.length;o++)if(e[o]!==t[o])return!1;return!0}function hr(e){if(Mo(e)){var{type:t,path:o}=e;return{type:t,path:o}}return e}function Vr(e){return{type:dn.key,path:e}}function ed(e,t){return{type:dn.key,path:e,edit:!0,initialValue:t}}function Dt(e){return{type:dn.value,path:e}}function gl(e,t){return{type:dn.value,path:e,edit:!0,initialValue:t}}function Wr(e){return{type:dn.inside,path:e}}function Nr(e){return{type:dn.after,path:e}}function Oo(e,t){var o=Kf(e,t),r=e.length>o.length&&t.length>o.length;return{type:dn.multi,anchorPath:r?o.concat(e[o.length]):o,focusPath:r?o.concat(t[o.length]):o}}function Yf(e,t,o,r){if(vo(t))return String(qt(t.path));if(rn(t)){var a=He(e,t.path);return typeof a=="string"?a:r.stringify(a,null,o)}if(Cn(t)){if(un(t.focusPath))return r.stringify(e,null,o);var s=Jf(t),i=He(e,s);if(Array.isArray(i)){if(Vl(t)){var l=He(e,t.focusPath);return r.stringify(l,null,o)}return pa(e,t).map(c=>{var d=He(e,c);return"".concat(r.stringify(d,null,o),",")}).join(`
`)}return pa(e,t).map(c=>{var d=qt(c),u=He(e,c);return"".concat(r.stringify(d),": ").concat(r.stringify(u,null,o),",")}).join(`
`)}}function Mo(e){return(vo(e)||rn(e))&&e.edit===!0}function Is(e){return vo(e)||rn(e)||Cn(e)}function Li(e){return vo(e)||rn(e)||Vl(e)}function eu(e){switch(e.type){case or.key:return Vr(e.path);case or.value:return Dt(e.path);case or.after:return Nr(e.path);case or.inside:return Wr(e.path)}}function fv(e,t){switch(e){case dn.key:return Vr(t);case dn.value:return Dt(t);case dn.after:return Nr(t);case dn.inside:return Wr(t);case dn.multi:case dn.text:return Oo(t,t)}}function hv(e,t,o){if(t)return fi(e,t,o)||Lr(Cn(t)?Lt(t.focusPath):t.path,o)?t:void 0}function fi(e,t,o){if(e===void 0||!t)return!1;if(vo(t)||yo(t)||Yo(t))return Nt(t.path,o);if(rn(t))return Lr(o,t.path);if(Cn(t)){var r=Rr(e,t),a=fa(e,t),s=Lt(t.focusPath);if(!Lr(o,s)||o.length<=s.length)return!1;var i=Ur(e,t,r),l=Ur(e,t,a),c=Ur(e,t,o);return c!==-1&&c>=i&&c<=l}return!1}function Ur(e,t,o){var r=Lt(t.focusPath);if(!Lr(o,r)||o.length<=r.length)return-1;var a=o[r.length],s=He(e,r);if(fo(s))return Object.keys(s).indexOf(a);if(lo(s)){var i=jo(a);if(i<s.length)return i}return-1}function Xe(e){return Cn(e)?e.focusPath:e.path}function za(e){return Cn(e)?e.anchorPath:e.path}function qs(){for(var e=[],t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];for(var a of o)if(typeof a=="string"&&e.push(a),a&&typeof a=="object")for(var s in a)Object.hasOwnProperty.call(a,s)&&a[s]&&e.push(s);return e.join(" ")}function Xf(e,t,o){return qs("jse-value","jse-"+Du(e,o),{"jse-url":Ul(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===io.table})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-f9kmxj {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-f9kmxj, .jse-value.jse-array.svelte-f9kmxj {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-f9kmxj {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-f9kmxj {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-f9kmxj {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-f9kmxj {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-f9kmxj {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-f9kmxj {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-f9kmxj {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-f9kmxj {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-f9kmxj {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:where(.svelte-f9kmxj):focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var ij=B('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function Qf(e,t){rt(t,!1);var o=ho("jsoneditor:EditableDiv"),r=p(t,"value",9),a=p(t,"initialValue",9),s=p(t,"shortText",9,!1),i=p(t,"label",9),l=p(t,"onChange",9),c=p(t,"onCancel",9),d=p(t,"onFind",9),u=p(t,"onPaste",9,mo),f=p(t,"onValueClass",9,()=>""),h=M(void 0,!0),m=M(void 0,!0),g=!1;function b(){return n(h)?function(y){return y.replace(/\n$/,"")}(n(h).innerText):""}function j(y){n(h)&&Uo(h,n(h).innerText=Fl(y))}Ao(()=>{o("onMount",{value:r(),initialValue:a()}),j(a()!==void 0?a():r()),n(h)&&function(y){if(y.firstChild!=null){var S=document.createRange(),w=window.getSelection();S.setStart(y,1),S.collapse(!0),w==null||w.removeAllRanges(),w==null||w.addRange(S)}else y.focus()}(n(h))}),Lo(()=>{var y=b();o("onDestroy",{closed:g,value:r(),newValue:y}),g||y===r()||l()(y,va.no)}),N(()=>($(f()),$(r())),()=>{v(m,f()(r()))}),Wt(),ct(!0);var x=ij(),E=xe(()=>{var y;return"".concat((y=qs("jse-editable-div",n(m),{"jse-short-text":s()}))!==null&&y!==void 0?y:""," svelte-f9kmxj")});On(x,y=>v(h,y),()=>n(h)),ne(()=>{Yt(x,"aria-label",i()),Wo(x,n(E))}),ee("input",x,function(){var y=b();y===""&&j(""),v(m,f()(y))}),ee("keydown",x,function(y){y.stopPropagation();var S=Fr(y);if(S==="Escape"&&(y.preventDefault(),g=!0,c()()),S==="Enter"||S==="Tab"){y.preventDefault(),g=!0;var w=b();l()(w,va.nextInside)}S==="Ctrl+F"&&(y.preventDefault(),d()(!1)),S==="Ctrl+H"&&(y.preventDefault(),d()(!0))}),ee("paste",x,function(y){if(y.stopPropagation(),u()&&y.clipboardData){var S=y.clipboardData.getData("text/plain");u()(S)}}),ee("blur",x,function(){var y=document.hasFocus(),S=b();o("handleBlur",{hasFocus:y,closed:g,value:r(),newValue:S}),document.hasFocus()&&!g&&(g=!0,S!==r()&&l()(S,va.self))}),P(e,x),at()}function lj(e,t){rt(t,!1);var o=p(t,"path",9),r=p(t,"value",9),a=p(t,"selection",9),s=p(t,"mode",9),i=p(t,"parser",9),l=p(t,"normalization",9),c=p(t,"enforceString",9),d=p(t,"onPatch",9),u=p(t,"onPasteJson",9),f=p(t,"onSelect",9),h=p(t,"onFind",9),m=p(t,"focus",9),g=p(t,"findNextInside",9);function b(y){return c()?y:Rs(y,i())}function j(){f()(Dt(o())),m()()}ct(!0);var x=xe(()=>l().escapeValue(r())),E=xe(()=>Mo(a())?a().initialValue:void 0);Qf(e,{get value(){return n(x)},get initialValue(){return n(E)},label:"Edit value",onChange:function(y,S){d()([{op:"replace",path:xt(o()),value:b(l().unescapeValue(y))}],(w,_,I)=>{if(!I||Nt(o(),Xe(I)))return{state:_,selection:S===va.nextInside?g()(o()):Dt(o())}}),m()()},onCancel:j,onPaste:function(y){try{var S=i().parse(y);to(S)&&u()({path:o(),contents:S,onPasteAsJson:()=>{j();var w=[{op:"replace",path:xt(o()),value:S}];d()(w,(_,I)=>({state:Ia(_,I,o())}))}})}catch{}},get onFind(){return h()},onValueClass:function(y){return Xf(b(l().unescapeValue(y)),s(),i())}}),at()}function is(e,t,o){var r=Lt(t),a=He(e,r);if(lo(a)){var s=jo(qt(t));return o.map((d,u)=>({op:"add",path:xt(r.concat(String(s+u))),value:d.value}))}if(fo(a)){var i=qt(t),l=Object.keys(a),c=i!==void 0?Mi(l,i,!0):[];return[...o.map(d=>{var u=$i(d.key,l);return{op:"add",path:xt(r.concat(u)),value:d.value}}),...c.map(d=>qa(r,d))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function tu(e,t,o){var r=He(e,t);if(Array.isArray(r)){var a=r.length;return o.map((s,i)=>({op:"add",path:xt(t.concat(String(a+i))),value:s.value}))}return o.map(s=>{var i=$i(s.key,Object.keys(r));return{op:"add",path:xt(t.concat(i)),value:s.value}})}function Ai(e,t,o,r){var a=$i(r,t.filter(i=>i!==o)),s=Mi(t,o,!1);return[{op:"move",from:xt(e.concat(o)),path:xt(e.concat(a))},...s.map(i=>qa(e,i))]}function Gf(e,t){var o=qt(t);if(un(o))throw new Error("Cannot duplicate root object");var r=Lt(o),a=qt(o),s=He(e,r);if(lo(s)){var i=qt(t),l=i?jo(qt(i))+1:0;return[...t.map((u,f)=>({op:"copy",from:xt(u),path:xt(r.concat(String(f+l)))}))]}if(fo(s)){var c=Object.keys(s),d=a!==void 0?Mi(c,a,!1):[];return[...t.map(u=>{var f=$i(qt(u),c);return{op:"copy",from:xt(u),path:xt(r.concat(f))}}),...d.map(u=>qa(r,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function Zf(e,t,o,r){if(vo(t)){var a=Mf(o,r),s=Lt(t.path),i=He(e,s);return Ai(s,Object.keys(i),qt(t.path),typeof a=="string"?a:o)}if(rn(t)||Cn(t)&&un(t.focusPath))try{return[{op:"replace",path:xt(Xe(t)),value:Bl(o,_=>Ei(_,r))}]}catch{return[{op:"replace",path:xt(Xe(t)),value:o}]}if(Cn(t)){var l=mc(o,r);return function(_,I,q){var k=Ir(I),X=Lt(k),je=He(_,X);if(lo(je)){var ae=Ir(I),fe=ae?jo(qt(ae)):0;return[...ml(I),...q.map((ie,Ge)=>({op:"add",path:xt(X.concat(String(Ge+fe))),value:ie.value}))]}if(fo(je)){var qe=qt(I),we=Lt(qe),ze=qt(qe),_e=Object.keys(je),$e=ze!==void 0?Mi(_e,ze,!1):[],he=new Set(I.map(ie=>qt(ie))),ce=_e.filter(ie=>!he.has(ie));return[...ml(I),...q.map(ie=>{var Ge=$i(ie.key,ce);return{op:"add",path:xt(we.concat(Ge)),value:ie.value}}),...$e.map(ie=>qa(we,ie))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,pa(e,t),l)}if(Yo(t)){var c=mc(o,r),d=t.path,u=Lt(d),f=He(e,u);if(lo(f)){var h=jo(qt(d));return is(e,u.concat(String(h+1)),c)}if(fo(f)){var m=String(qt(d)),g=Object.keys(f);if(un(g)||qt(g)===m)return tu(e,u,c);var b=g.indexOf(m),j=g[b+1];return is(e,u.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(yo(t)){var x=mc(o,r),E=t.path,y=He(e,E);if(lo(y))return is(e,E.concat("0"),x);if(fo(y)){var S=Object.keys(y);if(un(S))return tu(e,E,x);var w=Ir(S);return is(e,E.concat(w),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function ml(e){return e.map(t=>({op:"remove",path:xt(t)})).reverse()}function qa(e,t){return{op:"move",from:xt(e.concat(t)),path:xt(e.concat(t))}}function mc(e,t){var o=/^\s*{/.test(e),r=/^\s*\[/.test(e),a=Mf(e,t),s=a!==void 0?a:Bl(e,i=>Ei(i,t));return o&&en(s)||r&&Array.isArray(s)?[{key:"New item",value:s}]:Array.isArray(s)?s.map((i,l)=>({key:"New item "+l,value:i})):en(s)?Object.keys(s).map(i=>({key:i,value:s[i]})):[{key:"New item",value:s}]}function eh(e,t){if(vo(t)){var o=Lt(t.path),r=He(e,o),a=Ai(o,Object.keys(r),qt(t.path),"");return{operations:a,newSelection:Ss(e,a)}}if(rn(t))return{operations:[{op:"replace",path:xt(t.path),value:""}],newSelection:t};if(Cn(t)){var s=pa(e,t),i=ml(s),l=qt(s);if(un(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Dt([])};var c=Lt(l),d=He(e,c);if(lo(d)){var u=Ir(s),f=jo(qt(u));return{operations:i,newSelection:f===0?Wr(c):Nr(c.concat(String(f-1)))}}if(fo(d)){var h=Object.keys(d),m=Ir(s),g=qt(m),b=h.indexOf(g),j=h[b-1];return{operations:i,newSelection:b===0?Wr(c):Nr(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function th(e,t){return function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nt;return o.filter((a,s)=>{for(var i=s+1;i<o.length;i++)if(r(a,o[i]))return!1;return!0})}(Rp(e,t,{before:(o,r,a)=>{if(Ip(r)){var s=gr(r.path);return{revertOperations:[...a,...bc(o,s)]}}if(ds(r)){var i=gr(r.from);return{revertOperations:r.from===r.path?[r,...bc(o,i)]:[...a,...bc(o,i)]}}return{document:o}}}))}function bc(e,t){var o=Lt(t),r=qt(t),a=He(e,o);return fo(a)?Mi(Object.keys(a),r,!1).map(s=>qa(o,s)):[]}function gv(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,o=e.items[t],r=e.items.map((a,s)=>ge(ge({},a),{},{active:s===t}));return ge(ge({},e),{},{items:r,activeItem:o,activeIndex:t})}function mv(e,t){var o,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.toLowerCase(),s=(o=r==null?void 0:r.maxResults)!==null&&o!==void 0?o:1/0,i=r==null?void 0:r.columns,l=[],c=[];function d(j){l.length>=s||l.push(j)}function u(j,x){if(lo(x)){var E=c.length;c.push("0");for(var y=0;y<x.length;y++)if(c[E]=String(y),u(j,x[y]),l.length>=s)return;c.pop()}else if(fo(x)){var S=Object.keys(x),w=c.length;for(var _ of(c.push(""),S))if(c[w]=_,bv(_,j,c,sr.key,d),u(j,x[_]),l.length>=s)return;c.pop()}else bv(String(x),j,c,sr.value,d)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var f=0;f<t.length;f++){c[0]=String(f);for(var h=t[f],m=0;m<i.length;m++){var g=i[m];if(g.length===1)c[1]=g[0];else for(var b=0;b<g.length;b++)c[b+1]=g[b];for(;c.length>g.length+1;)c.pop();u(a,He(h,g))}if(l.length>=s)break}return l}return u(a,t),l}function bv(e,t,o,r,a){var s=e.toLowerCase(),i=0,l=-1,c=-1;do(c=s.indexOf(t,l))!==-1&&(l=c+t.length,a({path:o.slice(0),field:r,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function nu(e,t,o,r){return e.substring(0,o)+t+e.substring(r)}function jv(e,t,o){var r=e;return xm(o,a=>{r=nu(r,t,a.start,a.end)}),r}function cj(e,t,o,r,a){var{field:s,path:i,start:l,end:c}=r;if(s===sr.key){var d=Lt(i),u=He(e,d),f=qt(i),h=Ai(d,Object.keys(u),f,nu(f,o,l,c));return{newSelection:Ss(e,h),operations:h}}if(s===sr.value){var m=He(e,i);if(m===void 0)throw new Error("Cannot replace: path not found ".concat(xt(i)));var g=typeof m=="string"?m:String(m),b=Dr(e,t,i),j=nu(g,o,l,c),x=[{op:"replace",path:xt(i),value:b?j:Rs(j,a)}];return{newSelection:Ss(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(s))}function xv(e){return e.path.concat(e.field,String(e.fieldIndex))}var uj={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function nh(e,t){return t.reduce((o,r)=>function(a,s,i,l){return Xu(a,s,i,l,uj)}(e,o,r.path,(a,s)=>ge(ge({},s),{},{searchResults:s.searchResults?s.searchResults.concat(r):[r]})),void 0)}function ou(e){var t,o=(t=e==null?void 0:e.searchResults)!==null&&t!==void 0?t:[],r=ir(e)?Object.values(e.properties).flatMap(ou):wo(e)?e.items.flatMap(ou):[];return o.concat(r)}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-5fb7bl {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-5fb7bl {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var dj=B('<span class="jse-highlight svelte-5fb7bl"> </span>');function oh(e,t){rt(t,!1);var o=M(),r=p(t,"text",8),a=p(t,"searchResultItems",8);N(()=>($(r()),$(a())),()=>{v(o,function(i,l){var c=[],d=0;for(var u of l){var f=i.slice(d,u.start);f!==""&&c.push({type:"normal",text:f,active:!1});var h=i.slice(u.start,u.end);c.push({type:"highlight",text:h,active:u.active}),d=u.end}var m=qt(l);return m&&m.end<i.length&&c.push({type:"normal",text:i.slice(m.end),active:!1}),c}(String(r()),a()))}),Wt(),ct();var s=It();Hn(Te(s),1,()=>n(o),no,(i,l)=>{var c=It();L(Te(c),()=>n(l).type==="normal",d=>{var u=zo();ne(()=>dt(u,n(l).text)),P(d,u)},d=>{var u=dj(),f=A(u);ne(()=>dt(f,Fl(n(l).text))),ne(()=>We(u,"jse-active",n(l).active)),P(d,u)}),P(i,c)}),P(e,s),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-c0g9qz {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-c0g9qz, .jse-value.jse-array.svelte-c0g9qz {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-c0g9qz {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-c0g9qz {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-c0g9qz {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-c0g9qz {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-c0g9qz {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-c0g9qz {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-c0g9qz {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-c0g9qz {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-c0g9qz::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var vj=B('<div role="button" tabindex="-1" data-type="selectable-value"><!></div>');function pj(e,t){rt(t,!1);var o=M(void 0,!0),r=p(t,"path",9),a=p(t,"value",9),s=p(t,"mode",9),i=p(t,"readOnly",9),l=p(t,"normalization",9),c=p(t,"parser",9),d=p(t,"onSelect",9),u=p(t,"searchResultItems",9);N(()=>$(a()),()=>{v(o,Ul(a()))}),Wt(),ct(!0);var f=vj(),h=xe(()=>{var m;return"".concat((m=Xf(a(),s(),c()))!==null&&m!==void 0?m:""," svelte-c0g9qz")});L(A(f),u,m=>{var g=xe(()=>l().escapeValue(a()));oh(m,{get text(){return n(g)},get searchResultItems(){return u()}})},m=>{var g=zo();ne(()=>dt(g,Fl(l().escapeValue(a())))),P(m,g)}),ne(()=>{Wo(f,n(h)),Yt(f,"title",n(o)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)}),ee("click",f,function(m){typeof a()=="string"&&n(o)&&Lu(m)&&(m.preventDefault(),m.stopPropagation(),window.open(a(),"_blank"))}),ee("dblclick",f,function(m){i()||(m.preventDefault(),d()(gl(r())))}),P(e,f),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-14y3y8t {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var fj=B('<div class="jse-tooltip svelte-14y3y8t"> </div>');function hj(e,t){var o=p(t,"text",8),r=fj(),a=A(r);ne(()=>dt(a,o())),P(e,r)}function td(e,t){var o,{text:r,openAbsolutePopup:a,closeAbsolutePopup:s}=t;function i(){o=a(hj,{text:r},{position:"top",width:10*r.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){s(o)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jla5ec {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var gj=B('<div class="jse-timestamp svelte-1jla5ec"><!></div>');function mj(e,t){rt(t,!1);var o=M(void 0,!0),r=xa("absolute-popup"),a=p(t,"value",9);N(()=>$(a()),()=>{v(o,"Time: ".concat(new Date(a()).toString()))}),Wt(),ct(!0);var s=gj();Ut(A(s),{data:Fg}),Eo(s,(i,l)=>td(i,l),()=>ge({text:n(o)},r)),P(e,s),at()}function bj(e){var t=[];return!e.isEditing&&h0(e.value)&&t.push({component:J0,props:e}),!e.isEditing&&g0(e.value)&&t.push({component:Q0,props:e}),e.isEditing&&t.push({component:lj,props:e}),e.isEditing||t.push({component:pj,props:e}),!e.isEditing&&Wc(e.value)&&t.push({component:mj,props:e}),t}function rr(e){return e.map((t,o)=>xj.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(r){return r.replace(/"/g,'\\"')}(t)+'"]':(o>0?".":"")+t).join("")}function jj(e){for(var t=[],o=0;o<e.length;)e[o]==="."&&o++,e[o]==="["?(o++,e[o]==='"'?(o++,t.push(r(s=>s==='"',!0)),a('"')):t.push(r(s=>s==="]")),a("]")):t.push(r(s=>s==="."||s==="["));function r(s){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";o<e.length&&!s(e[o]);)i&&e[o]==="\\"&&e[o+1]==='"'?(l+='"',o+=2):(l+=e[o],o++);return l}function a(s){if(e[o]!==s)throw new SyntaxError("Invalid JSON path: ".concat(s," expected at position ").concat(o));o++}return t}function ra(e){return{value:e,label:un(e)?"(item root)":rr(e)}}var xj=/^\d+$/,yj={},wj={showWizard:!0,showOriginal:!0},bl=Math.min,$a=Math.max,jl=Math.round,Vi=Math.floor,xr=e=>({x:e,y:e}),kj={left:"right",right:"left",bottom:"top",top:"bottom"},Cj={start:"end",end:"start"};function yv(e,t,o){return $a(e,bl(t,o))}function Wl(e,t){return typeof e=="function"?e(t):e}function Ma(e){return e.split("-")[0]}function xl(e){return e.split("-")[1]}function rh(e){return e==="x"?"y":"x"}function ah(e){return e==="y"?"height":"width"}function Os(e){return["top","bottom"].includes(Ma(e))?"y":"x"}function sh(e){return rh(Os(e))}function jc(e){return e.replace(/start|end/g,t=>Cj[t])}function Wi(e){return e.replace(/left|right|bottom|top/g,t=>kj[t])}function Sj(e){return typeof e!="number"?function(t){return ge({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function yl(e){var{x:t,y:o,width:r,height:a}=e;return{width:r,height:a,top:o,left:t,right:t+r,bottom:o+a,x:t,y:o}}function wv(e,t,o){var r,{reference:a,floating:s}=e,i=Os(t),l=sh(t),c=ah(l),d=Ma(t),u=i==="y",f=a.x+a.width/2-s.width/2,h=a.y+a.height/2-s.height/2,m=a[c]/2-s[c]/2;switch(d){case"top":r={x:f,y:a.y-s.height};break;case"bottom":r={x:f,y:a.y+a.height};break;case"right":r={x:a.x+a.width,y:h};break;case"left":r={x:a.x-s.width,y:h};break;default:r={x:a.x,y:a.y}}switch(xl(t)){case"start":r[l]-=m*(o&&u?-1:1);break;case"end":r[l]+=m*(o&&u?-1:1)}return r}var Oj=function(){var e=tt(function*(t,o,r){for(var{placement:a="bottom",strategy:s="absolute",middleware:i=[],platform:l}=r,c=i.filter(Boolean),d=yield l.isRTL==null?void 0:l.isRTL(o),u=yield l.getElementRects({reference:t,floating:o,strategy:s}),{x:f,y:h}=wv(u,a,d),m=a,g={},b=0,j=0;j<c.length;j++){var{name:x,fn:E}=c[j],{x:y,y:S,data:w,reset:_}=yield E({x:f,y:h,initialPlacement:a,placement:m,strategy:s,middlewareData:g,rects:u,platform:l,elements:{reference:t,floating:o}});f=y??f,h=S??h,g=ge(ge({},g),{},{[x]:ge(ge({},g[x]),w)}),_&&b<=50&&(b++,typeof _=="object"&&(_.placement&&(m=_.placement),_.rects&&(u=_.rects===!0?yield l.getElementRects({reference:t,floating:o,strategy:s}):_.rects),{x:f,y:h}=wv(u,m,d)),j=-1)}return{x:f,y:h,placement:m,strategy:s,middlewareData:g}});return function(t,o,r){return e.apply(this,arguments)}}();function ih(e,t){return ru.apply(this,arguments)}function ru(){return ru=tt(function*(e,t){var o;t===void 0&&(t={});var{x:r,y:a,platform:s,rects:i,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:h=!1,padding:m=0}=Wl(t,e),g=Sj(m),b=l[h?f==="floating"?"reference":"floating":f],j=yl(yield s.getClippingRect({element:(o=yield s.isElement==null?void 0:s.isElement(b))==null||o?b:b.contextElement||(yield s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),x=f==="floating"?{x:r,y:a,width:i.floating.width,height:i.floating.height}:i.reference,E=yield s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating),y=(yield s.isElement==null?void 0:s.isElement(E))&&(yield s.getScale==null?void 0:s.getScale(E))||{x:1,y:1},S=yl(s.convertOffsetParentRelativeRectToViewportRelativeRect?yield s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:E,strategy:c}):x);return{top:(j.top-S.top+g.top)/y.y,bottom:(S.bottom-j.bottom+g.bottom)/y.y,left:(j.left-S.left+g.left)/y.x,right:(S.right-j.right+g.right)/y.x}}),ru.apply(this,arguments)}function au(){return au=tt(function*(e,t){var{placement:o,platform:r,elements:a}=e,s=yield r.isRTL==null?void 0:r.isRTL(a.floating),i=Ma(o),l=xl(o),c=Os(o)==="y",d=["left","top"].includes(i)?-1:1,u=s&&c?-1:1,f=Wl(t,e),{mainAxis:h,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?-1*g:g),c?{x:m*u,y:h*d}:{x:h*d,y:m*u}}),au.apply(this,arguments)}function Hl(){return typeof window<"u"}function Es(e){return lh(e)?(e.nodeName||"").toLowerCase():"#document"}function Fo(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yr(e){var t;return(t=(lh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function lh(e){return!!Hl()&&(e instanceof Node||e instanceof Fo(e).Node)}function lr(e){return!!Hl()&&(e instanceof Element||e instanceof Fo(e).Element)}function kr(e){return!!Hl()&&(e instanceof HTMLElement||e instanceof Fo(e).HTMLElement)}function kv(e){return!(!Hl()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof Fo(e).ShadowRoot)}function hi(e){var{overflow:t,overflowX:o,overflowY:r,display:a}=cr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(a)}function Ej(e){return["table","td","th"].includes(Es(e))}function wl(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function su(e){var t=nd(),o=lr(e)?cr(e):e;return o.transform!=="none"||o.perspective!=="none"||!!o.containerType&&o.containerType!=="normal"||!t&&!!o.backdropFilter&&o.backdropFilter!=="none"||!t&&!!o.filter&&o.filter!=="none"||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function nd(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ms(e){return["html","body","#document"].includes(Es(e))}function cr(e){return Fo(e).getComputedStyle(e)}function Jl(e){return lr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function la(e){if(Es(e)==="html")return e;var t=e.assignedSlot||e.parentNode||kv(e)&&e.host||yr(e);return kv(t)?t.host:t}function ch(e){var t=la(e);return ms(t)?e.ownerDocument?e.ownerDocument.body:e.body:kr(t)&&hi(t)?t:ch(t)}function gi(e,t,o){var r;t===void 0&&(t=[]),o===void 0&&(o=!0);var a=ch(e),s=a===((r=e.ownerDocument)==null?void 0:r.body),i=Fo(a);if(s){var l=iu(i);return t.concat(i,i.visualViewport||[],hi(a)?a:[],l&&o?gi(l):[])}return t.concat(a,gi(a,[],o))}function iu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function uh(e){var t=cr(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,a=kr(e),s=a?e.offsetWidth:o,i=a?e.offsetHeight:r,l=jl(o)!==s||jl(r)!==i;return l&&(o=s,r=i),{width:o,height:r,$:l}}function od(e){return lr(e)?e:e.contextElement}function bs(e){var t=od(e);if(!kr(t))return xr(1);var o=t.getBoundingClientRect(),{width:r,height:a,$:s}=uh(t),i=(s?jl(o.width):o.width)/r,l=(s?jl(o.height):o.height)/a;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var zj=xr(0);function dh(e){var t=Fo(e);return nd()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:zj}function Ta(e,t,o,r){t===void 0&&(t=!1),o===void 0&&(o=!1);var a=e.getBoundingClientRect(),s=od(e),i=xr(1);t&&(r?lr(r)&&(i=bs(r)):i=bs(e));var l=function(w,_,I){return _===void 0&&(_=!1),!(!I||_&&I!==Fo(w))&&_}(s,o,r)?dh(s):xr(0),c=(a.left+l.x)/i.x,d=(a.top+l.y)/i.y,u=a.width/i.x,f=a.height/i.y;if(s)for(var h=Fo(s),m=r&&lr(r)?Fo(r):r,g=h,b=iu(g);b&&r&&m!==g;){var j=bs(b),x=b.getBoundingClientRect(),E=cr(b),y=x.left+(b.clientLeft+parseFloat(E.paddingLeft))*j.x,S=x.top+(b.clientTop+parseFloat(E.paddingTop))*j.y;c*=j.x,d*=j.y,u*=j.x,f*=j.y,c+=y,d+=S,b=iu(g=Fo(b))}return yl({width:u,height:f,x:c,y:d})}function rd(e,t){var o=Jl(e).scrollLeft;return t?t.left+o:Ta(yr(e)).left+o}function vh(e,t,o){o===void 0&&(o=!1);var r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(o?0:rd(e,r)),y:r.top+t.scrollTop}}function Cv(e,t,o){var r;if(t==="viewport")r=function(s,i){var l=Fo(s),c=yr(s),d=l.visualViewport,u=c.clientWidth,f=c.clientHeight,h=0,m=0;if(d){u=d.width,f=d.height;var g=nd();(!g||g&&i==="fixed")&&(h=d.offsetLeft,m=d.offsetTop)}return{width:u,height:f,x:h,y:m}}(e,o);else if(t==="document")r=function(s){var i=yr(s),l=Jl(s),c=s.ownerDocument.body,d=$a(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),u=$a(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),f=-l.scrollLeft+rd(s),h=-l.scrollTop;return cr(c).direction==="rtl"&&(f+=$a(i.clientWidth,c.clientWidth)-d),{width:d,height:u,x:f,y:h}}(yr(e));else if(lr(t))r=function(s,i){var l=Ta(s,!0,i==="fixed"),c=l.top+s.clientTop,d=l.left+s.clientLeft,u=kr(s)?bs(s):xr(1);return{width:s.clientWidth*u.x,height:s.clientHeight*u.y,x:d*u.x,y:c*u.y}}(t,o);else{var a=dh(e);r={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return yl(r)}function ph(e,t){var o=la(e);return!(o===t||!lr(o)||ms(o))&&(cr(o).position==="fixed"||ph(o,t))}function $j(e,t,o){var r=kr(t),a=yr(t),s=o==="fixed",i=Ta(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=xr(0);if(r||!r&&!s)if((Es(t)!=="body"||hi(a))&&(l=Jl(t)),r){var d=Ta(t,!0,s,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else a&&(c.x=rd(a));var u=!a||r||s?xr(0):vh(a,l);return{x:i.left+l.scrollLeft-c.x-u.x,y:i.top+l.scrollTop-c.y-u.y,width:i.width,height:i.height}}function xc(e){return cr(e).position==="static"}function Sv(e,t){if(!kr(e)||cr(e).position==="fixed")return null;if(t)return t(e);var o=e.offsetParent;return yr(e)===o&&(o=o.ownerDocument.body),o}function Ov(e,t){var o=Fo(e);if(wl(e))return o;if(!kr(e)){for(var r=la(e);r&&!ms(r);){if(lr(r)&&!xc(r))return r;r=la(r)}return o}for(var a=Sv(e,t);a&&Ej(a)&&xc(a);)a=Sv(a,t);return a&&ms(a)&&xc(a)&&!su(a)?o:a||function(s){for(var i=la(s);kr(i)&&!ms(i);){if(su(i))return i;if(wl(i))return null;i=la(i)}return null}(e)||o}var Mj={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:o,offsetParent:r,strategy:a}=e,s=a==="fixed",i=yr(r),l=!!t&&wl(t.floating);if(r===i||l&&s)return o;var c={scrollLeft:0,scrollTop:0},d=xr(1),u=xr(0),f=kr(r);if((f||!f&&!s)&&((Es(r)!=="body"||hi(i))&&(c=Jl(r)),kr(r))){var h=Ta(r);d=bs(r),u.x=h.x+r.clientLeft,u.y=h.y+r.clientTop}var m=!i||f||s?xr(0):vh(i,c,!0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+u.x+m.x,y:o.y*d.y-c.scrollTop*d.y+u.y+m.y}},getDocumentElement:yr,getClippingRect:function(e){var{element:t,boundary:o,rootBoundary:r,strategy:a}=e,s=[...o==="clippingAncestors"?wl(t)?[]:function(c,d){var u=d.get(c);if(u)return u;for(var f=gi(c,[],!1).filter(x=>lr(x)&&Es(x)!=="body"),h=null,m=cr(c).position==="fixed",g=m?la(c):c;lr(g)&&!ms(g);){var b=cr(g),j=su(g);j||b.position!=="fixed"||(h=null),(m?!j&&!h:!j&&b.position==="static"&&h&&["absolute","fixed"].includes(h.position)||hi(g)&&!j&&ph(c,g))?f=f.filter(x=>x!==g):h=b,g=la(g)}return d.set(c,f),f}(t,this._c):[].concat(o),r],i=s[0],l=s.reduce((c,d)=>{var u=Cv(t,d,a);return c.top=$a(u.top,c.top),c.right=bl(u.right,c.right),c.bottom=bl(u.bottom,c.bottom),c.left=$a(u.left,c.left),c},Cv(t,i,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Ov,getElementRects:function(){var e=tt(function*(t){var o=this.getOffsetParent||Ov,r=this.getDimensions,a=yield r(t.floating);return{reference:$j(t.reference,yield o(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:o}=uh(e);return{width:t,height:o}},getScale:bs,isElement:lr,isRTL:function(e){return cr(e).direction==="rtl"}};function Aj(e,t,o,r){r===void 0&&(r={});var{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,d=od(e),u=a||s?[...d?gi(d):[],...gi(t)]:[];u.forEach(j=>{a&&j.addEventListener("scroll",o,{passive:!0}),s&&j.addEventListener("resize",o)});var f,h=d&&l?function(j,x){var E,y=null,S=yr(j);function w(){var _;clearTimeout(E),(_=y)==null||_.disconnect(),y=null}return function _(I,q){I===void 0&&(I=!1),q===void 0&&(q=1),w();var{left:k,top:X,width:je,height:ae}=j.getBoundingClientRect();if(I||x(),je&&ae){var fe={rootMargin:-Vi(X)+"px "+-Vi(S.clientWidth-(k+je))+"px "+-Vi(S.clientHeight-(X+ae))+"px "+-Vi(k)+"px",threshold:$a(0,bl(1,q))||1},qe=!0;try{y=new IntersectionObserver(we,ge(ge({},fe),{},{root:S.ownerDocument}))}catch{y=new IntersectionObserver(we,fe)}y.observe(j)}function we(ze){var _e=ze[0].intersectionRatio;if(_e!==q){if(!qe)return _();_e?_(!1,_e):E=setTimeout(()=>{_(!1,1e-7)},1e3)}qe=!1}}(!0),w}(d,o):null,m=-1,g=null;i&&(g=new ResizeObserver(j=>{var[x]=j;x&&x.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var E;(E=g)==null||E.observe(t)})),o()}),d&&!c&&g.observe(d),g.observe(t));var b=c?Ta(e):null;return c&&function j(){var x=Ta(e);!b||x.x===b.x&&x.y===b.y&&x.width===b.width&&x.height===b.height||o(),b=x,f=requestAnimationFrame(j)}(),o(),()=>{var j;u.forEach(x=>{a&&x.removeEventListener("scroll",o),s&&x.removeEventListener("resize",o)}),h==null||h(),(j=g)==null||j.disconnect(),g=null,c&&cancelAnimationFrame(f)}}var Pj=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>tt(function*(){var o,r,{x:a,y:s,placement:i,middlewareData:l}=t,c=yield function(d,u){return au.apply(this,arguments)}(t,e);return i===((o=l.offset)==null?void 0:o.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:a+c.x,y:s+c.y,data:ge(ge({},c),{},{placement:i})}})()}},Rj=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>tt(function*(){var{x:o,y:r,placement:a}=t,s=Wl(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:y=>{var{x:S,y:w}=y;return{x:S,y:w}}}}=s,d=Wp(s,Fb),u={x:o,y:r},f=yield ih(t,d),h=Os(Ma(a)),m=rh(h),g=u[m],b=u[h];if(i){var j=m==="y"?"bottom":"right";g=yv(g+f[m==="y"?"top":"left"],g,g-f[j])}if(l){var x=h==="y"?"bottom":"right";b=yv(b+f[h==="y"?"top":"left"],b,b-f[x])}var E=c.fn(ge(ge({},t),{},{[m]:g,[h]:b}));return ge(ge({},E),{},{data:{x:E.x-o,y:E.y-r,enabled:{[m]:i,[h]:l}}})})()}},_j=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>tt(function*(){var o,r,{placement:a,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:d}=t,u=Wl(e,t),{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:j=!0}=u,x=Wp(u,Bb);if((o=s.arrow)!=null&&o.alignmentOffset)return{};var E=Ma(a),y=Os(l),S=Ma(l)===l,w=yield c.isRTL==null?void 0:c.isRTL(d.floating),_=m||(S||!j?[Wi(l)]:function(ce){var ie=Wi(ce);return[jc(ce),ie,jc(ie)]}(l)),I=b!=="none";!m&&I&&_.push(...function(ce,ie,Ge,le){var de=xl(ce),C=function(oe,T,re){var Ze=["left","right"],se=["right","left"];switch(oe){case"top":case"bottom":return re?T?se:Ze:T?Ze:se;case"left":case"right":return T?["top","bottom"]:["bottom","top"];default:return[]}}(Ma(ce),Ge==="start",le);return de&&(C=C.map(oe=>oe+"-"+de),ie&&(C=C.concat(C.map(jc)))),C}(l,j,b,w));var q=[l,..._],k=yield ih(t,x),X=[],je=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&X.push(k[E]),h){var ae=function(ce,ie,Ge){Ge===void 0&&(Ge=!1);var le=xl(ce),de=sh(ce),C=ah(de),oe=de==="x"?le===(Ge?"end":"start")?"right":"left":le==="start"?"bottom":"top";return ie.reference[C]>ie.floating[C]&&(oe=Wi(oe)),[oe,Wi(oe)]}(a,i,w);X.push(k[ae[0]],k[ae[1]])}if(je=[...je,{placement:a,overflows:X}],!X.every(ce=>ce<=0)){var fe,qe,we=(((fe=s.flip)==null?void 0:fe.index)||0)+1,ze=q[we];if(ze)return{data:{index:we,overflows:je},reset:{placement:ze}};var _e=(qe=je.filter(ce=>ce.overflows[0]<=0).sort((ce,ie)=>ce.overflows[1]-ie.overflows[1])[0])==null?void 0:qe.placement;if(!_e)switch(g){case"bestFit":var $e,he=($e=je.filter(ce=>{if(I){var ie=Os(ce.placement);return ie===y||ie==="y"}return!0}).map(ce=>[ce.placement,ce.overflows.filter(ie=>ie>0).reduce((ie,Ge)=>ie+Ge,0)]).sort((ce,ie)=>ce[1]-ie[1])[0])==null?void 0:$e[0];he&&(_e=he);break;case"initialPlacement":_e=l}if(a!==_e)return{reset:{placement:_e}}}return{}})()}};function Ij(e){var t,o,r={autoUpdate:!0},a=e,s=c=>ge(ge(ge({},r),e||{}),c||{}),i=c=>{t&&o&&(a=s(c),((d,u,f)=>{var h=new Map,m=ge({platform:Mj},f),g=ge(ge({},m.platform),{},{_c:h});return Oj(d,u,ge(ge({},m),{},{platform:g}))})(t,o,a).then(d=>{var u;Object.assign(o.style,{position:d.strategy,left:"".concat(d.x,"px"),top:"".concat(d.y,"px")}),!((u=a)===null||u===void 0)&&u.onComputed&&a.onComputed(d)}))},l=c=>{Lo(c.subscribe(d=>{t===void 0?(t=d,i()):(Object.assign(t,d),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,d)=>{var u;o=c,a=s(d),setTimeout(()=>i(d),0),i(d);var f=()=>{u&&(u(),u=void 0)},h=function(){var{autoUpdate:m}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a||{};f(),m!==!1&&eo().then(()=>Aj(t,o,()=>i(a),m===!0?{}:m))};return u=h(),{update(m){i(m),u=h(m)},destroy(){f()}}},i]}function qj(e){var{loadOptions:t,filterText:o,items:r,multiple:a,value:s,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:d,convertStringItemsToObjects:u,filterGroupedItems:f,label:h}=e;if(r&&t)return r;if(!r)return[];r&&r.length>0&&typeof r[0]!="object"&&(r=u(r));var m=r.filter(g=>{var b=d(g[h],o,g);return b&&a&&s!=null&&s.length&&(b=!s.some(j=>!!c&&j[i]===g[i])),b});return l&&(m=f(m)),m}function Tj(e){return fh.apply(this,arguments)}function fh(){return(fh=tt(function*(e){var{dispatch:t,loadOptions:o,convertStringItemsToObjects:r,filterText:a}=e,s=yield o(a).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(s&&!s.cancelled)return s?(s&&s.length>0&&typeof s[0]!="object"&&(s=r(s)),t("loaded",{items:s})):s=[],{filteredItems:s,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}ht(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var Dj=ya(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);ht(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var Nj=ya(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function yc(e){P(e,Nj())}ht(`
    .loading.svelte-1p3nqvd {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-1p3nqvd-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-1p3nqvd {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-1p3nqvd-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var Uj=ya('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');ht(`
    .svelte-select.svelte-82qwg8 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-82qwg8 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-82qwg8:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-82qwg8 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-82qwg8,
    .indicators.svelte-82qwg8 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-82qwg8 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-82qwg8 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-82qwg8:not(.multi:where(.svelte-82qwg8)) > .value-container > input:where(.svelte-82qwg8) {
        width: 100%;
        height: 100%;
    }

    input.svelte-82qwg8::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-82qwg8:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-82qwg8 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-82qwg8 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-82qwg8 input:where(.svelte-82qwg8)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-82qwg8 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-82qwg8 .selected-item:where(.svelte-82qwg8) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-82qwg8:focus {
        outline: none;
    }

    .hide-selected-item.svelte-82qwg8 {
        opacity: 0;
    }

    .icon.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-82qwg8 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-82qwg8:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-82qwg8 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-82qwg8 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-82qwg8 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-82qwg8 input:where(.svelte-82qwg8) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-82qwg8 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-82qwg8 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-82qwg8 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-82qwg8:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-82qwg8 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-82qwg8 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-82qwg8 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-82qwg8 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-82qwg8 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-82qwg8 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-82qwg8 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-82qwg8 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-82qwg8:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-82qwg8 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-82qwg8 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-82qwg8:not(.active:where(.svelte-82qwg8)) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-82qwg8,
    .item.hover.item.not-selectable.svelte-82qwg8,
    .item.active.item.not-selectable.svelte-82qwg8,
    .item.not-selectable.svelte-82qwg8:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-82qwg8 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var Bj=B('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div class="item svelte-82qwg8"><!></div></div>'),Fj=B('<div class="empty svelte-82qwg8">No options</div>'),Lj=B('<div class="svelte-select-list svelte-82qwg8" role="none"><!> <!> <!></div>'),Vj=B('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>',1),Wj=B('<div class="multi-item-clear svelte-82qwg8"><!></div>'),Hj=B('<div class="multi-item svelte-82qwg8" role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>'),Jj=B('<div class="selected-item svelte-82qwg8"><!></div>'),Kj=B('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>'),Yj=B('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>'),Xj=B('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>'),Qj=B('<input type="hidden" class="svelte-82qwg8">'),Gj=B('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>'),Zj=B('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');function ka(e,t){var o=function(U){var J={};for(var ke in U.children&&(J.default=!0),U.$$slots)J[ke]=!0;return J}(t);rt(t,!1);var r,a=M(),s=M(),i=M(),l=M(),c=M(),d=M(),u=M(),f=M(),h=M(),m=l0(),g=p(t,"justValue",12,null),b=p(t,"filter",8,qj),j=p(t,"getItems",8,Tj),x=p(t,"id",8,null),E=p(t,"name",8,null),y=p(t,"container",12,void 0),S=p(t,"input",12,void 0),w=p(t,"multiple",8,!1),_=p(t,"multiFullItemClearable",8,!1),I=p(t,"disabled",8,!1),q=p(t,"focused",12,!1),k=p(t,"value",12,null),X=p(t,"filterText",12,""),je=p(t,"placeholder",8,"Please select"),ae=p(t,"placeholderAlwaysShow",8,!1),fe=p(t,"items",12,null),qe=p(t,"label",8,"label"),we=p(t,"itemFilter",8,(U,J,ke)=>"".concat(U).toLowerCase().includes(J.toLowerCase())),ze=p(t,"groupBy",8,void 0),_e=p(t,"groupFilter",8,U=>U),$e=p(t,"groupHeaderSelectable",8,!1),he=p(t,"itemId",8,"value"),ce=p(t,"loadOptions",8,void 0),ie=p(t,"containerStyles",8,""),Ge=p(t,"hasError",8,!1),le=p(t,"filterSelectedItems",8,!0),de=p(t,"required",8,!1),C=p(t,"closeListOnChange",8,!0),oe=p(t,"clearFilterTextOnBlur",8,!0),T=p(t,"createGroupHeaderItem",8,(U,J)=>({value:U,[qe()]:U})),re=()=>n(u),Ze=p(t,"searchable",8,!0),se=p(t,"inputStyles",8,""),V=p(t,"clearable",8,!0),R=p(t,"loading",12,!1),ve=p(t,"listOpen",12,!1),vt=p(t,"debounce",8,function(U){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(r),r=setTimeout(U,J)}),Be=p(t,"debounceWait",8,300),Ae=p(t,"hideEmptyState",8,!1),K=p(t,"inputAttributes",24,()=>({})),me=p(t,"listAutoWidth",8,!0),Ie=p(t,"showChevron",8,!1),ut=p(t,"listOffset",8,5),Me=p(t,"hoverItemIndex",12,0),gt=p(t,"floatingConfig",24,()=>({})),Se=p(t,"class",8,""),Oe=M(),Qe=M(),jt=M(),zt=M(),Fe=M();function W(U){return U.map((J,ke)=>({index:ke,value:J,label:"".concat(J)}))}function Ot(U){var J=[],ke={};U.forEach(Pe=>{var pt=ze()(Pe);J.includes(pt)||(J.push(pt),ke[pt]=[],pt&&ke[pt].push(Object.assign(T()(pt,Pe),{id:pt,groupHeader:!0,selectable:$e()}))),ke[pt].push(Object.assign({groupItem:!!pt},Pe))});var Je=[];return _e()(J).forEach(Pe=>{ke[Pe]&&Je.push(...ke[Pe])}),Je}function mt(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,J=arguments.length>1?arguments[1]:void 0;Me(U<0?0:U),!J&&ze()&&n(u)[Me()]&&!n(u)[Me()].selectable&&Mn(1)}function Tn(){var U=!0;if(k()){var J=[],ke=[];k().forEach(Je=>{J.includes(Je[he()])?U=!1:(J.push(Je[he()]),ke.push(Je))}),U||k(ke)}return U}function $n(U){var J=U?U[he()]:k()[he()];return fe().find(ke=>ke[he()]===J)}function jn(U){return Qn.apply(this,arguments)}function Qn(){return(Qn=tt(function*(U){var J=k()[U];k().length===1?k(void 0):k(k().filter(ke=>ke!==J)),m("clear",J)})).apply(this,arguments)}function gn(U){if(q())switch(U.stopPropagation(),U.key){case"Escape":U.preventDefault(),Mt();break;case"Enter":if(U.preventDefault(),ve()){if(n(u).length===0)break;var J=n(u)[Me()];if(k()&&!w()&&k()[he()]===J[he()]){Mt();break}hn(n(u)[Me()])}break;case"ArrowDown":U.preventDefault(),ve()?Mn(1):(ve(!0),v(Oe,void 0));break;case"ArrowUp":U.preventDefault(),ve()?Mn(-1):(ve(!0),v(Oe,void 0));break;case"Tab":if(ve()&&q()){if(n(u).length===0||k()&&k()[he()]===n(u)[Me()][he()])return Mt();U.preventDefault(),hn(n(u)[Me()]),Mt()}break;case"Backspace":if(!w()||X().length>0)return;if(w()&&k()&&k().length>0){if(jn(n(Oe)!==void 0?n(Oe):k().length-1),n(Oe)===0||n(Oe)===void 0)break;v(Oe,k().length>n(Oe)?n(Oe)-1:void 0)}break;case"ArrowLeft":if(!k()||!w()||X().length>0)return;n(Oe)===void 0?v(Oe,k().length-1):k().length>n(Oe)&&n(Oe)!==0&&v(Oe,n(Oe)-1);break;case"ArrowRight":if(!k()||!w()||X().length>0||n(Oe)===void 0)return;n(Oe)===k().length-1?v(Oe,void 0):n(Oe)<k().length-1&&v(Oe,n(Oe)+1)}}function Dn(U){var J,ke;q()&&S()===((J=document)===null||J===void 0?void 0:J.activeElement)||(U&&m("focus",U),(ke=S())===null||ke===void 0||ke.focus(),q(!0))}function Jn(U){return $t.apply(this,arguments)}function $t(){return($t=tt(function*(U){var J;Un||(ve()||q())&&(m("blur",U),Mt(),q(!1),v(Oe,void 0),(J=S())===null||J===void 0||J.blur())})).apply(this,arguments)}function Bt(){if(!I())return X().length>0?ve(!0):void ve(!ve())}function sn(){m("clear",k()),k(void 0),Mt(),Dn()}function Mt(){oe()&&X(""),ve(!1)}c0(tt(function*(){v(Qe,k()),v(jt,X()),v(zt,w())})),Ao(()=>{ve()&&q(!0),q()&&S()&&S().focus()});var En=p(t,"ariaValues",8,U=>"Option ".concat(U,", selected.")),Nn=p(t,"ariaListOpen",8,(U,J)=>"You are currently focused on option ".concat(U,". There are ").concat(J," results available.")),co=p(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),Xt,Pt=M(null);function mn(){clearTimeout(Xt),Xt=setTimeout(()=>{Un=!1},100)}Lo(()=>{var U;(U=n(Pt))===null||U===void 0||U.remove()});var Un=!1;function hn(U){U&&U.selectable!==!1&&function(J){if(J){X("");var ke=Object.assign({},J);if(ke.groupHeader&&!ke.selectable)return;k(w()?k()?k().concat([ke]):[ke]:k(ke)),setTimeout(()=>{C()&&Mt(),v(Oe,void 0),m("change",k()),m("select",J)})}}(U)}function ao(U){Un||Me(U)}function Mn(U){if(n(u).filter(ke=>!Object.hasOwn(ke,"selectable")||ke.selectable===!0).length===0)return Me(0);U>0&&Me()===n(u).length-1?Me(0):U<0&&Me()===0?Me(n(u).length-1):Me(Me()+U);var J=n(u)[Me()];J&&J.selectable===!1&&(U!==1&&U!==-1||Mn(U))}function Kn(U,J,ke){if(!w())return J&&J[ke]===U[ke]}var xn=oo,Gn=oo;function oo(U){return{update(J){J.scroll&&(mn(),U.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Bn=M({strategy:"absolute",placement:"bottom-start",middleware:[Pj(ut()),_j(),Rj()],autoUpdate:!1}),[te,Ue,wt]=Ij(n(Bn)),Ht=M(!0);N(()=>($(fe()),$(k())),()=>{fe(),k()&&function(){if(typeof k()=="string"){var U=(fe()||[]).find(J=>J[he()]===k());k(U||{[he()]:k(),label:k()})}else w()&&Array.isArray(k())&&k().length>0&&k(k().map(J=>typeof J=="string"?{value:J,label:J}:J))}()}),N(()=>($(K()),$(Ze())),()=>{!K()&&Ze()||(v(Fe,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},K())),x()&&Uo(Fe,n(Fe).id=x()),Ze()||Uo(Fe,n(Fe).readonly=!0))}),N(()=>$(w()),()=>{w()&&k()&&(Array.isArray(k())?k([...k()]):k([k()]))}),N(()=>(n(zt),$(w())),()=>{n(zt)&&!w()&&k()&&k(null)}),N(()=>($(w()),$(k())),()=>{w()&&k()&&k().length>1&&Tn()}),N(()=>$(k()),()=>{k()&&(w()?JSON.stringify(k())!==JSON.stringify(n(Qe))&&Tn()&&m("input",k()):n(Qe)&&JSON.stringify(k()[he()])===JSON.stringify(n(Qe)[he()])||m("input",k()))}),N(()=>($(k()),$(w()),n(Qe)),()=>{!k()&&w()&&n(Qe)&&m("input",k())}),N(()=>($(q()),$(S())),()=>{!q()&&S()&&Mt()}),N(()=>($(X()),n(jt)),()=>{X()!==n(jt)&&(ce()||X().length!==0)&&(ce()?vt()(tt(function*(){R(!0);var U=yield j()({dispatch:m,loadOptions:ce(),convertStringItemsToObjects:W,filterText:X()});U?(R(U.loading),ve(ve()?U.listOpen:X().length>0),q(ve()&&U.focused),fe(ze()?Ot(U.filteredItems):U.filteredItems)):(R(!1),q(!0),ve(!0))}),Be()):(ve(!0),w()&&v(Oe,void 0)))}),N(()=>($(b()),$(ce()),$(X()),$(fe()),$(w()),$(k()),$(he()),$(ze()),$(qe()),$(le()),$(we())),()=>{v(u,b()({loadOptions:ce(),filterText:X(),items:fe(),multiple:w(),value:k(),itemId:he(),groupBy:ze(),label:qe(),filterSelectedItems:le(),itemFilter:we(),convertStringItemsToObjects:W,filterGroupedItems:Ot}))}),N(()=>($(w()),$(ve()),$(k()),n(u)),()=>{!w()&&ve()&&k()&&n(u)&&mt(n(u).findIndex(U=>U[he()]===k()[he()]),!0)}),N(()=>($(ve()),$(w())),()=>{ve()&&w()&&Me(0)}),N(()=>$(X()),()=>{X()&&Me(0)}),N(()=>$(Me()),()=>{var U;U=Me(),m("hoverItem",U)}),N(()=>($(w()),$(k())),()=>{v(a,w()?k()&&k().length>0:k())}),N(()=>(n(a),$(X())),()=>{v(s,n(a)&&X().length>0)}),N(()=>(n(a),$(V()),$(I()),$(R())),()=>{v(i,n(a)&&V()&&!I()&&!R())}),N(()=>($(ae()),$(w()),$(je()),$(k())),()=>{var U;v(l,ae()&&w()||w()&&((U=k())===null||U===void 0?void 0:U.length)===0?je():k()?"":je())}),N(()=>($(k()),$(w())),()=>{var U,J;v(c,k()?(U=w(),J=void 0,J=U&&k().length>0?k().map(ke=>ke[qe()]).join(", "):k()[qe()],En()(J)):"")}),N(()=>(n(u),$(Me()),$(q()),$(ve())),()=>{v(d,function(){if(!n(u)||n(u).length===0)return"";var U=n(u)[Me()];if(ve()&&U){var J=n(u)?n(u).length:0;return Nn()(U[qe()],J)}return co()()}((n(u),Me(),q(),ve())))}),N(()=>$(fe()),()=>{(function(U){U&&U.length!==0&&!U.some(J=>typeof J!="object")&&k()&&(w()?!k().some(J=>!J||!J[he()]):k()[he()])&&(Array.isArray(k())?k(k().map(J=>$n(J)||J)):k($n()||k()))})(fe())}),N(()=>($(w()),$(k()),$(he())),()=>{g((w(),k(),he(),w()?k()?k().map(U=>U[he()]):null:k()?k()[he()]:k()))}),N(()=>($(w()),n(Qe),$(k())),()=>{w()||!n(Qe)||k()||m("input",k())}),N(()=>($(ve()),n(u),$(w()),$(k())),()=>{ve()&&n(u)&&!w()&&!k()&&mt()}),N(()=>n(u),()=>{(function(U){ve()&&m("filter",U)})(n(u))}),N(()=>($(y()),$(gt()),n(Bn)),()=>{y()&&gt()&&wt(Object.assign(n(Bn),gt()))}),N(()=>n(Pt),()=>{v(f,!!n(Pt))}),N(()=>(n(Pt),$(ve())),()=>{(function(U,J){if(!U||!J)return v(Ht,!0);setTimeout(()=>{v(Ht,!1)},0)})(n(Pt),ve())}),N(()=>($(ve()),$(y()),n(Pt)),()=>{ve()&&y()&&n(Pt)&&function(){var{width:U}=y().getBoundingClientRect();Uo(Pt,n(Pt).style.width=me()?U+"px":"auto")}()}),N(()=>$(Me()),()=>{v(h,Me())}),N(()=>($(S()),$(ve()),$(q())),()=>{S()&&ve()&&!q()&&Dn()}),N(()=>($(y()),$(gt())),()=>{var U;y()&&((U=gt())===null||U===void 0?void 0:U.autoUpdate)===void 0&&Uo(Bn,n(Bn).autoUpdate=!0)}),Wt(),ct();var kt=Zj();ee("click",Tr,function(U){var J;ve()||q()||!y()||y().contains(U.target)||(J=n(Pt))!==null&&J!==void 0&&J.contains(U.target)||Jn()}),ee("keydown",Tr,gn);var nn=A(kt);L(nn,ve,U=>{var J=Lj(),ke=A(J);L(ke,()=>o["list-prepend"],Pe=>{var pt=It();Wn(Te(pt),t,"list-prepend",{},null),P(Pe,pt)});var Je=D(ke,2);L(Je,()=>o.list,Pe=>{var pt=It();Wn(Te(pt),t,"list",{get filteredItems(){return n(u)}},null),P(Pe,pt)},Pe=>{var pt=It();L(Te(pt),()=>n(u).length>0,Ve=>{var _t=It();Hn(Te(_t),1,()=>n(u),no,(Gt,it,Jt)=>{var so=Bj(),An=A(so),uo=xe(()=>Kn(n(it),k(),he()));ne(()=>We(An,"active",n(uo)));var ro=xe(()=>Jt===0);ne(()=>We(An,"first",n(ro))),Wn(A(An),t,"item",{get item(){return n(it)},index:Jt},ln=>{var Pn=zo();ne(()=>{var po;return dt(Pn,(po=n(it))===null||po===void 0?void 0:po[qe()])}),P(ln,Pn)}),Eo(An,(ln,Pn)=>xn(ln),()=>({scroll:Kn(n(it),k(),he()),listDom:n(f)})),Eo(An,(ln,Pn)=>Gn(ln),()=>({scroll:n(h)===Jt,listDom:n(f)})),ne(()=>{var ln;We(An,"list-group-title",n(it).groupHeader),We(An,"hover",Me()===Jt),We(An,"group-item",n(it).groupItem),We(An,"not-selectable",((ln=n(it))===null||ln===void 0?void 0:ln.selectable)===!1)}),ee("mouseover",so,()=>ao(Jt)),ee("focus",so,()=>ao(Jt)),ee("click",so,er(()=>function(ln){var{item:Pn,i:po}=ln;if((Pn==null?void 0:Pn.selectable)!==!1)return k()&&!w()&&k()[he()]===Pn[he()]?Mt():void(function(z){return z.groupHeader&&z.selectable||z.selectable||!z.hasOwnProperty("selectable")}(Pn)&&(Me(po),hn(Pn)))}({item:n(it),i:Jt}))),ee("keydown",so,ta(er(function(ln){Ys.call(this,t,ln)}))),P(Gt,so)}),P(Ve,_t)},Ve=>{var _t=It();L(Te(_t),()=>!Ae(),Gt=>{var it=It();Wn(Te(it),t,"empty",{},Jt=>{P(Jt,Fj())}),P(Gt,it)},null,!0),P(Ve,_t)},!0),P(Pe,pt)}),L(D(Je,2),()=>o["list-append"],Pe=>{var pt=It();Wn(Te(pt),t,"list-append",{},null),P(Pe,pt)}),Eo(J,Pe=>Ue(Pe)),On(J,Pe=>v(Pt,Pe),()=>n(Pt)),bo(()=>ee("scroll",J,mn)),bo(()=>ee("pointerup",J,ta(er(function(Pe){Ys.call(this,t,Pe)})))),bo(()=>ee("mousedown",J,ta(er(function(Pe){Ys.call(this,t,Pe)})))),ne(()=>We(J,"prefloat",n(Ht))),P(U,J)});var Vt=D(nn,2);L(A(Vt),q,U=>{var J=Vj(),ke=Te(J),Je=A(ke),Pe=A(D(ke,2));ne(()=>{dt(Je,n(c)),dt(Pe,n(d))}),P(U,J)});var Ft=D(Vt,2);Wn(A(Ft),t,"prepend",{},null);var Yn=D(Ft,2),zn=A(Yn);L(zn,()=>n(a),U=>{var J=It();L(Te(J),w,ke=>{var Je=It();Hn(Te(Je),1,k,no,(Pe,pt,Ve)=>{var _t=Hj(),Gt=A(_t);Wn(A(Gt),t,"selection",{get selection(){return n(pt)},index:Ve},it=>{var Jt=zo();ne(()=>dt(Jt,n(pt)[qe()])),P(it,Jt)}),L(D(Gt,2),()=>!I()&&!_()&&yc,it=>{var Jt=Wj();Wn(A(Jt),t,"multi-clear-icon",{},so=>{yc(so)}),ee("pointerup",Jt,ta(er(()=>jn(Ve)))),P(it,Jt)}),ne(()=>{We(_t,"active",n(Oe)===Ve),We(_t,"disabled",I())}),ee("click",_t,ta(()=>_()?jn(Ve):{})),ee("keydown",_t,ta(er(function(it){Ys.call(this,t,it)}))),P(Pe,_t)}),P(ke,Je)},ke=>{var Je=Jj();Wn(A(Je),t,"selection",{get selection(){return k()}},Pe=>{var pt=zo();ne(()=>dt(pt,k()[qe()])),P(Pe,pt)}),ne(()=>We(Je,"hide-selected-item",n(s))),P(ke,Je)}),P(U,J)});var Fn,yn=D(zn,2);On(yn,U=>S(U),()=>S());var Q=D(Yn,2),Rt=A(Q);L(Rt,R,U=>{var J=Kj();Wn(A(J),t,"loading-icon",{},ke=>{(function(Je){P(Je,Uj())})(ke)}),P(U,J)});var Qt=D(Rt,2);L(Qt,()=>n(i),U=>{var J=Yj();Wn(A(J),t,"clear-icon",{},ke=>{yc(ke)}),ee("click",J,sn),P(U,J)}),L(D(Qt,2),Ie,U=>{var J=Xj();Wn(A(J),t,"chevron-icon",{get listOpen(){return ve()}},ke=>{(function(Je){P(Je,Dj())})(ke)}),P(U,J)});var vn=D(Q,2);return Wn(vn,t,"input-hidden",{get value(){return k()}},U=>{var J=Qj();ne(()=>Ra(J,k()?JSON.stringify(k()):null)),ne(()=>Yt(J,"name",E())),P(U,J)}),L(D(vn,2),()=>de()&&(!k()||k().length===0),U=>{var J=It();Wn(Te(J),t,"required",{get value(){return k()}},ke=>{P(ke,Gj())}),P(U,J)}),bo(()=>ee("pointerup",kt,ta(Bt))),On(kt,U=>y(U),()=>y()),Eo(kt,U=>te(U)),ne(()=>{var U;Wo(kt,"svelte-select ".concat((U=Se())!==null&&U!==void 0?U:""," svelte-82qwg8")),Yt(kt,"style",ie()),We(kt,"multi",w()),We(kt,"disabled",I()),We(kt,"focused",q()),We(kt,"list-open",ve()),We(kt,"show-chevron",Ie()),We(kt,"error",Ge()),Fn=Gi(yn,Fn,ge(ge({readOnly:!Ze()},n(Fe)),{},{placeholder:n(l),style:se(),disabled:I()}),"svelte-82qwg8")}),ee("keydown",yn,gn),ee("blur",yn,Jn),ee("focus",yn,Dn),pl(yn,X),P(e,kt),bt(t,"getFilteredItems",re),bt(t,"handleClear",sn),at({getFilteredItems:re,handleClear:sn})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-qbze6z {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-qbze6z input:where(.svelte-qbze6z) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) th:where(.svelte-qbze6z) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var ex=B('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');function tx(e,t){var o,r,a,s,i;rt(t,!1);var l=M(void 0,!0),c=M(void 0,!0),d=M(void 0,!0),u=M(void 0,!0),f=M(void 0,!0),h=M(void 0,!0),m=ho("jsoneditor:TransformWizard"),g=p(t,"json",9),b=p(t,"queryOptions",29,()=>({})),j=p(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(le=>({value:le,label:le})),E=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],y=M((o=b())!==null&&o!==void 0&&(o=o.filter)!==null&&o!==void 0&&o.path?ra(b().filter.path):void 0,!0),S=M((r=x.find(le=>{var de;return le.value===((de=b().filter)===null||de===void 0?void 0:de.relation)}))!==null&&r!==void 0?r:x[0],!0),w=M(((a=b())===null||a===void 0||(a=a.filter)===null||a===void 0?void 0:a.value)||"",!0),_=M((s=b())!==null&&s!==void 0&&(s=s.sort)!==null&&s!==void 0&&s.path?ra(b().sort.path):void 0,!0),I=M((i=E.find(le=>{var de;return le.value===((de=b().sort)===null||de===void 0?void 0:de.direction)}))!==null&&i!==void 0?i:E[0],!0);N(()=>$(g()),()=>{v(l,Array.isArray(g()))}),N(()=>(n(l),$(g())),()=>{v(c,n(l)?Hc(g()):[])}),N(()=>(n(l),$(g())),()=>{v(d,n(l)?Hc(g(),!0):[])}),N(()=>(n(c),ra),()=>{v(u,n(c).map(ra))}),N(()=>(n(d),ra),()=>{v(f,n(d)?n(d).map(ra):[])}),N(()=>($(b()),n(f),Nt),()=>{var le;v(h,(le=b())!==null&&le!==void 0&&(le=le.projection)!==null&&le!==void 0&&le.paths&&n(f)?b().projection.paths.map(de=>n(f).find(C=>Nt(C.value,de))).filter(de=>!!de):void 0)}),N(()=>n(y),()=>{var le,de,C;de=(le=n(y))===null||le===void 0?void 0:le.value,Nt((C=b())===null||C===void 0||(C=C.filter)===null||C===void 0?void 0:C.path,de)||(m("changeFilterPath",de),b($r(b(),["filter","path"],de,!0)),j()(b()))}),N(()=>n(S),()=>{var le,de,C;de=(le=n(S))===null||le===void 0?void 0:le.value,Nt((C=b())===null||C===void 0||(C=C.filter)===null||C===void 0?void 0:C.relation,de)||(m("changeFilterRelation",de),b($r(b(),["filter","relation"],de,!0)),j()(b()))}),N(()=>n(w),()=>{var le,de;le=n(w),Nt((de=b())===null||de===void 0||(de=de.filter)===null||de===void 0?void 0:de.value,le)||(m("changeFilterValue",le),b($r(b(),["filter","value"],le,!0)),j()(b()))}),N(()=>n(_),()=>{var le,de,C;de=(le=n(_))===null||le===void 0?void 0:le.value,Nt((C=b())===null||C===void 0||(C=C.sort)===null||C===void 0?void 0:C.path,de)||(m("changeSortPath",de),b($r(b(),["sort","path"],de,!0)),j()(b()))}),N(()=>n(I),()=>{var le,de,C;de=(le=n(I))===null||le===void 0?void 0:le.value,Nt((C=b())===null||C===void 0||(C=C.sort)===null||C===void 0?void 0:C.direction,de)||(m("changeSortDirection",de),b($r(b(),["sort","direction"],de,!0)),j()(b()))}),N(()=>n(h),()=>{(function(le){var de;Nt((de=b())===null||de===void 0||(de=de.projection)===null||de===void 0?void 0:de.paths,le)||(m("changeProjectionPaths",le),b($r(b(),["projection","paths"],le,!0)),j()(b()))})(n(h)?n(h).map(le=>le.value):void 0)}),Wt(),ct(!0);var q=ex(),k=A(q),X=A(k),je=D(A(X)),ae=A(je),fe=A(ae);ka(fe,{class:"jse-filter-path",showChevron:!0,get items(){return n(u)},get value(){return n(y)},set value(le){v(y,le)},$$legacy:!0});var qe=D(fe,2);ka(qe,{class:"jse-filter-relation",showChevron:!0,clearable:!1,items:x,get value(){return n(S)},set value(le){v(S,le)},$$legacy:!0});var we=D(qe,2),ze=D(X),_e=D(A(ze)),$e=A(_e),he=A($e);ka(he,{class:"jse-sort-path",showChevron:!0,get items(){return n(u)},get value(){return n(_)},set value(le){v(_,le)},$$legacy:!0}),ka(D(he,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,items:E,get value(){return n(I)},set value(le){v(I,le)},$$legacy:!0});var ce=D(ze),ie=D(A(ce)),Ge=A(ie);ka(A(Ge),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(f)},get value(){return n(h)},set value(le){v(h,le)},$$legacy:!0}),pl(we,()=>n(w),le=>v(w,le)),P(e,q),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-atm4um {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var nx=B('<button type="button" class="jse-query-language svelte-atm4um"><!> </button>'),ox=B('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');function rx(e,t){rt(t,!1);var o=p(t,"queryLanguages",8),r=p(t,"queryLanguageId",12),a=p(t,"onChangeQueryLanguage",8);ct();var s=ox();Hn(A(s),5,o,no,(i,l)=>{var c=nx(),d=A(c);L(d,()=>n(l).id===r(),f=>{Ut(f,{data:Sp})},f=>{Ut(f,{data:Op})});var u=D(d);ne(()=>{var f;Yt(c,"title","Select ".concat(n(l).name," as query language")),We(c,"selected",n(l).id===r()),dt(u," ".concat((f=n(l).name)!==null&&f!==void 0?f:""))}),ee("click",c,()=>{return f=n(l).id,r(f),void a()(f);var f}),P(i,c)}),P(e,s),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1y24war {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1y24war .jse-title:where(.svelte-1y24war) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var ax=B('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>'),sx=B('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');function kl(e,t){rt(t,!1);var o=p(t,"title",9,"Modal"),r=p(t,"fullScreenButton",9,!1),a=p(t,"fullscreen",13,!1),s=p(t,"onClose",9,void 0);ct(!0);var i=sx(),l=A(i),c=A(l),d=D(l,2);Wn(d,t,"actions",{},null);var u=D(d,2);L(u,r,h=>{var m=ax(),g=A(m),b=xe(()=>a()?Lg:Vg);Ut(g,{get data(){return n(b)}}),ee("click",m,()=>a(!a())),P(h,m)});var f=D(u,2);Ut(A(f),{data:Ml}),ne(()=>dt(c,o())),ee("click",f,()=>{var h;return(h=s())===null||h===void 0?void 0:h()}),P(e,i),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-1kpylsp {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-1kpylsp:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-1kpylsp {
  display: none;
}`);var ix=B('<button slot="actions" type="button" class="jse-config svelte-1kpylsp" title="Select a query language"><!></button>'),wc=ho("jsoneditor:AutoScrollHandler");function Ev(e){var t,o;function r(l){return l<20?200:l<50?400:1200}function a(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function s(l){o&&l===t||(i(),wc("startAutoScroll",l),t=l,o=setInterval(a,50))}function i(){o&&(wc("stopAutoScroll"),clearInterval(o),o=void 0,t=void 0)}return wc("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:d,bottom:u}=e.getBoundingClientRect();c<d?s(-r(d-c)):c>u?s(r(c-u)):i()}},onDragEnd:function(){i()}}}var lx=(e,t,o,r)=>(e/=r/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t,hh=()=>{var e,t,o,r,a,s,i,l,c,d,u,f,h;function m(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+o}function g(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function b(j){d||(d=j),g(s(u=j-d,o,l,c)),h=!0,u<c?requestAnimationFrame(b):function(){g(o+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof f=="function"&&f(),d=0,h=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,a=x.offset||0,f=x.callback,s=x.easing||lx,i=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(o=e.scrollTop,typeof j){case"number":t=void 0,i=!1,r=o+j;break;case"object":r=m(t=j);break;case"string":t=document.querySelector(j),r=m(t)}switch(l=r-o+a,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}h?d=0:requestAnimationFrame(b)}},Hi=ho("jsoneditor:History");function gh(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,o=[],r=0;function a(){return r<o.length}function s(){return r>0}function i(){return{canUndo:a(),canRedo:s(),length:o.length}}function l(){e.onChange&&e.onChange(i())}return{add:function(c){Hi("add",c),o=[c].concat(o.slice(r)).slice(0,t),r=0,l()},clear:function(){Hi("clear"),o=[],r=0,l()},getState:i,undo:function(){if(a()){var c=o[r];return r+=1,Hi("undo",c),l(),c}},redo:function(){if(s())return Hi("redo",o[r-=1]),l(),o[r]}}}function ls(e,t){var o=Date.now(),r=e();return t(Date.now()-o),r}var ns=ho("validation"),cx={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function zv(e,t,o,r){return Xu(e,t,o,r,cx)}function mh(e,t,o,r){if(ns("validateJSON"),!t)return[];if(o!==r){var a=o.stringify(e);return t(a!==void 0?r.parse(a):void 0)}return t(e)}function ux(e,t,o,r){if(ns("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:ar.info}]};if(e.length!==0)try{var a=ls(()=>o.parse(e),c=>ns("validate: parsed json in ".concat(c," ms")));if(!t)return;var s=o===r?a:ls(()=>r.parse(e),c=>ns("validate: parsed json with the validationParser in ".concat(c," ms"))),i=ls(()=>t(s),c=>ns("validate: validated json in ".concat(c," ms")));return un(i)?void 0:{validationErrors:i}}catch(c){var l=ls(()=>function(d,u){if(d.length>G0)return!1;try{return u.parse(mr(d)),!0}catch{return!1}}(e,o),d=>ns("validate: checked whether repairable in ".concat(d," ms")));return{parseError:ks(e,c.message||c.toString()),isRepairable:l}}}var Ji=ho("jsoneditor:FocusTracker");function ad(e){var t,{onMount:o,onDestroy:r,getWindow:a,hasFocus:s,onFocus:i,onBlur:l}=e,c=!1;function d(){var f=s();f&&(clearTimeout(t),c||(Ji("focus"),i(),c=f))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{s()||(Ji("blur"),c=!1,l())}))}o(()=>{Ji("mount FocusTracker");var f=a();f&&(f.addEventListener("focusin",d,!0),f.addEventListener("focusout",u,!0))}),r(()=>{Ji("destroy FocusTracker");var f=a();f&&(f.removeEventListener("focusin",d,!0),f.removeEventListener("focusout",u,!0))})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-czprfx {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-czprfx {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-czprfx .jse-text:where(.svelte-czprfx) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx) {
  cursor: pointer;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-czprfx {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-czprfx {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-czprfx {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var dx=B('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>'),vx=B('<div><div role="button" tabindex="-1" class="jse-text svelte-czprfx"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');function ur(e,t){rt(t,!1);var o=p(t,"type",9,"success"),r=p(t,"icon",9,void 0),a=p(t,"message",9,void 0),s=p(t,"actions",25,()=>[]),i=p(t,"onClick",9,void 0),l=p(t,"onClose",9,void 0);l()&&Lo(l()),ct(!0);var c=vx(),d=A(c),u=A(d),f=A(u);L(f,r,m=>{Ut(m,{get data(){return r()}})});var h=D(f);Hn(D(d,2),5,s,no,(m,g)=>{var b=dx(),j=A(b);L(j,()=>n(g).icon,E=>{Ut(E,{get data(){return n(g).icon}})});var x=D(j);ne(()=>{var E;Yt(b,"title",n(g).title),b.disabled=n(g).disabled,dt(x," ".concat((E=n(g).text)!==null&&E!==void 0?E:""))}),ee("click",b,()=>{n(g).onClick&&n(g).onClick()}),ee("mousedown",b,()=>{n(g).onMouseDown&&n(g).onMouseDown()}),P(m,b)}),ne(()=>{var m,g;Wo(c,"jse-message jse-".concat((m=o())!==null&&m!==void 0?m:""," svelte-czprfx")),We(d,"jse-clickable",!!i()),dt(h," ".concat((g=a())!==null&&g!==void 0?g:""))}),ee("click",d,function(){i()&&i()()}),P(e,c),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1uindol {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-error:where(.svelte-1uindol) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-info:where(.svelte-1uindol) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-icon:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) div.jse-validation-errors-expand:where(.svelte-1uindol) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var px=B('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>'),fx=B('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>'),hx=B('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>'),gx=B('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>'),mx=B('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>'),bx=B('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');function sd(e,t){rt(t,!1);var o=M(void 0,!0),r=p(t,"validationErrors",9),a=p(t,"selectError",9),s=M(!0,!0);function i(){v(s,!1)}function l(){v(s,!0)}N(()=>$(r()),()=>{v(o,r().length)}),Wt(),ct(!0);var c=It();L(Te(c),()=>!un(r()),d=>{var u=bx();L(A(u),()=>n(s)||n(o)===1,f=>{var h=gx(),m=A(h),g=A(m);Hn(g,1,()=>$f(r(),100),no,(b,j,x)=>{var E=fx(),y=A(E);Ut(A(y),{data:Aa});var S=D(y),w=A(S);ne(()=>dt(w,rr(n(j).path)));var _=D(S),I=A(_);L(A(D(_)),()=>x===0&&r().length>1,q=>{var k=px();Ut(A(k),{data:nm}),ee("click",k,er(i)),P(q,k)}),ne(()=>{var q;Wo(E,"jse-validation-".concat((q=n(j).severity)!==null&&q!==void 0?q:""," svelte-1uindol")),dt(I,n(j).message)}),ee("click",E,()=>{setTimeout(()=>a()(n(j)))}),P(b,E)}),L(D(g),()=>n(o)>100,b=>{var j=hx(),x=D(A(j),2),E=A(x);ne(()=>{var y;return dt(E,"(and ".concat((y=n(o)-100)!==null&&y!==void 0?y:""," more errors)"))}),P(b,j)}),P(f,h)},f=>{var h=mx(),m=A(h),g=A(m),b=xe(()=>{var E,y;return"jse-validation-".concat((y=r(),(E=[ar.error,ar.warning,ar.info].find(S=>y.some(w=>w.severity===S)))!==null&&E!==void 0?E:"")," svelte-1uindol")}),j=A(g);Ut(A(j),{data:Aa});var x=A(D(j));Ut(A(D(x)),{data:zp}),ne(()=>{var E;Wo(g,n(b)),dt(x,"".concat((E=n(o))!==null&&E!==void 0?E:""," validation errors "))}),ee("click",g,l),P(f,h)}),P(d,u)}),P(e,c),at()}function bh(e,t){if(e)return e.addEventListener("keydown",o),{destroy(){e.removeEventListener("keydown",o)}};function o(r){r.key==="Escape"&&(r.preventDefault(),r.stopPropagation(),t())}}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-1s9c2ql {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-1s9c2ql {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-1s9c2ql {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-1s9c2ql {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-1s9c2ql {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-1s9c2ql {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-1s9c2ql::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-1s9c2ql {
  animation: svelte-1s9c2ql-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-1s9c2ql::backdrop {
  animation: svelte-1s9c2ql-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-1s9c2ql .jse-modal-inner:where(.svelte-1s9c2ql) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-1s9c2ql-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-1s9c2ql-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-1s9c2ql .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var jx=B('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');function mi(e,t){rt(t,!1);var o=p(t,"className",8,void 0),r=p(t,"fullscreen",8,!1),a=p(t,"onClose",8),s=M();function i(){a()()}Ao(()=>n(s).showModal()),Lo(()=>n(s).close()),ct();var l=jx(),c=xe(()=>{var u;return"".concat((u=qs("jse-modal",o()))!==null&&u!==void 0?u:""," svelte-1s9c2ql")}),d=A(l);Wn(A(d),t,"default",{},null),On(l,u=>v(s,u),()=>n(s)),bo(()=>ee("close",l,i)),bo(()=>{return ee("click",l,(u=i,function(){for(var f=arguments.length,h=new Array(f),m=0;m<f;m++)h[m]=arguments[m];h[0].target===this&&(u==null||u.apply(this,h))}));var u}),bo(()=>ee("cancel",l,ta(function(u){Ys.call(this,t,u)}))),Eo(l,(u,f)=>bh(u,f),()=>i),ne(()=>{Wo(l,n(c)),We(l,"jse-fullscreen",r())}),P(e,l),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-189qksl {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-189qksl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-189qksl .jse-shortcut:where(.svelte-189qksl) .jse-key:where(.svelte-189qksl) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var xx=B('<!> <div class="jse-modal-contents svelte-189qksl"><div>These actions are unavailable via the menu. Please use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>',1);function jh(e,t){rt(t,!1);var o=p(t,"onClose",9),r=Fu()?"⌘":"Ctrl";ct(!0),mi(e,{get onClose(){return o()},className:"jse-copy-paste",children:(a,s)=>{var i=xx(),l=Te(i);kl(l,{title:"Copying and pasting",get onClose(){return o()}});var c=D(l,2),d=D(A(c),2),u=A(d);A(u).textContent="".concat(r??"","+C");var f=D(u,2);A(f).textContent="".concat(r??"","+X"),A(D(f,2)).textContent="".concat(r??"","+V"),ee("click",A(D(d,2)),function(){for(var h,m=arguments.length,g=new Array(m),b=0;b<m;b++)g[b]=arguments[b];(h=o())===null||h===void 0||h.apply(this,g)}),P(a,i)},$$slots:{default:!0}}),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-pf7s2l {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last:where(.svelte-pf7s2l)) {
  border-right: none;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-first:where(.svelte-pf7s2l) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-last:where(.svelte-pf7s2l) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-selected:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-pf7s2l .jse-space:where(.svelte-pf7s2l) {
  flex: 1;
}
.jse-menu.svelte-pf7s2l .jse-separator:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var yx=B('<div class="jse-separator svelte-pf7s2l"></div>'),wx=B('<div class="jse-space svelte-pf7s2l"></div>'),kx=B('<button type="button"><!> <!></button>'),Cx=B('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');function Kl(e,t){rt(t,!1);var o=p(t,"items",25,()=>[]);ct(!0);var r=Cx(),a=A(r);Wn(a,t,"left",{},null);var s=D(a,2);Hn(s,1,o,no,(i,l)=>{var c=It();L(Te(c),()=>Zi(n(l)),d=>{P(d,yx())},d=>{var u=It();L(Te(u),()=>Ff(n(l)),f=>{P(f,wx())},f=>{var h=It();L(Te(h),()=>Gs(n(l)),m=>{var g=kx(),b=A(g);L(b,()=>n(l).icon,j=>{Ut(j,{get data(){return n(l).icon}})}),L(D(b,2),()=>n(l).text,j=>{var x=zo();ne(()=>dt(x,n(l).text)),P(j,x)}),ne(()=>{var j;Wo(g,"jse-button ".concat((j=n(l).className)!==null&&j!==void 0?j:""," svelte-pf7s2l")),Yt(g,"title",n(l).title),g.disabled=n(l).disabled||!1}),ee("click",g,function(){for(var j,x=arguments.length,E=new Array(x),y=0;y<x;y++)E[y]=arguments[y];(j=n(l).onClick)===null||j===void 0||j.apply(this,E)}),P(m,g)},m=>{var g=zo();ne(()=>dt(g,function(b){return console.error("Unknown type of menu item",b),"???"}(n(l)))),P(m,g)},!0),P(f,h)},!0),P(d,u)}),P(i,c)}),Wn(D(s,2),t,"right",{},null),P(e,r),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-3golau {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-3golau .jse-info:where(.svelte-3golau) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-3golau .jse-json-text:where(.svelte-3golau) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var Sx=B('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>'),Ox=B('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function Ex(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=M(void 0,!0),c=p(t,"text",13,""),d=p(t,"readOnly",9,!1),u=p(t,"onParse",9),f=p(t,"onRepair",9),h=p(t,"onChange",9,void 0),m=p(t,"onApply",9),g=p(t,"onCancel",9),b=ho("jsoneditor:JSONRepair"),j=M(void 0,!0);function x(){if(n(j)&&n(o)){var k=n(o).position!==void 0?n(o).position:0;n(j).setSelectionRange(k,k),n(j).focus()}}function E(){m()(c())}function y(){try{c(f()(c())),h()&&h()(c())}catch{}}var S=M(void 0,!0);N(()=>$(c()),()=>{v(o,function(k){try{return void u()(k)}catch(X){return ks(k,X.message)}}(c()))}),N(()=>$(c()),()=>{v(r,function(k){try{return f()(k),!0}catch{return!1}}(c()))}),N(()=>n(o),()=>{b("error",n(o))}),N(()=>$(g()),()=>{v(S,[{type:"space"},{type:"button",icon:Ml,title:"Cancel repair",className:"jse-cancel",onClick:g()}])}),N(()=>Od,()=>{v(a,{icon:Od,text:"Show me",title:"Scroll to the error location",onClick:x})}),N(()=>ys,()=>{v(s,{icon:ys,text:"Auto repair",title:"Automatically repair JSON",onClick:y})}),N(()=>(n(r),n(a),n(s)),()=>{v(i,n(r)?[n(a),n(s)]:[n(a)])}),N(()=>$(d()),()=>{v(l,[{icon:Ou,text:"Apply",title:"Apply fixed JSON",disabled:d(),onClick:E}])}),Wt(),ct(!0);var w=Ox(),_=A(w);Kl(_,{get items(){return n(S)},$$slots:{left:(k,X)=>{P(k,Sx())}}});var I=D(_,2);L(I,()=>n(o),k=>{var X=xe(()=>"Cannot parse JSON: ".concat(n(o).message));ur(k,{type:"error",icon:Aa,get message(){return n(X)},get actions(){return n(i)}})},k=>{ur(k,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})});var q=D(I,2);On(q,k=>v(j,k),()=>n(j)),ne(()=>{q.readOnly=d(),Ra(q,c())}),ee("input",q,function(k){b("handleChange");var X=k.target.value;c()!==X&&(c(X),h()&&h()(c()))}),P(e,w),at()}function xh(e,t){rt(t,!1);var o=p(t,"text",13),r=p(t,"onParse",9),a=p(t,"onRepair",9),s=p(t,"onApply",9),i=p(t,"onClose",9);function l(d){s()(d),i()()}function c(){i()()}ct(!0),mi(e,{get onClose(){return i()},className:"jse-repair-modal",children:(d,u)=>{Ex(d,{get text(){return o()},set text(f){o(f)},get onParse(){return r()},get onRepair(){return a()},onApply:l,onCancel:c,$$legacy:!0})},$$slots:{default:!0}}),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1h6hzoq {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1h6hzoq {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq),
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq) {
  display: inline;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):hover, div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var zx=B('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>'),$x=B('<div role="none" class="jse-collapsed-items svelte-1h6hzoq"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');function Mx(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=p(t,"visibleSections",9),c=p(t,"sectionIndex",9),d=p(t,"total",9),u=p(t,"path",9),f=p(t,"selection",9),h=p(t,"onExpandSection",9),m=p(t,"context",9);N(()=>($(l()),$(c())),()=>{v(o,l()[c()])}),N(()=>n(o),()=>{v(r,n(o).end)}),N(()=>($(l()),$(c()),$(d())),()=>{v(a,l()[c()+1]?l()[c()+1].start:d())}),N(()=>($(m()),$(f()),$(u()),n(r)),()=>{v(s,fi(m().getJson(),f(),u().concat(String(n(r)))))}),N(()=>(n(r),n(a)),()=>{v(i,function(E,y){var S={start:E,end:Math.min(Qc(E),y)},w=Math.max(fl((E+y)/2),E),_={start:w,end:Math.min(Qc(w),y)},I=fl(y),q=I===y?I-di:I,k={start:Math.max(q,E),end:y},X=[S],je=_.start>=S.end&&_.end<=k.start;return je&&X.push(_),k.start>=(je?_.end:S.end)&&X.push(k),X}(n(r),n(a)))}),Wt(),ct(!0);var g=$x(),b=A(g),j=A(b),x=A(j);Hn(D(j,2),1,()=>n(i),no,(E,y)=>{var S=zx(),w=A(S);ne(()=>{var _,I;return dt(w,"show ".concat((_=n(y).start)!==null&&_!==void 0?_:"","-").concat((I=n(y).end)!==null&&I!==void 0?I:""))}),ee("click",S,()=>h()(u(),n(y))),P(E,S)}),ne(()=>{var E,y;We(g,"jse-selected",n(s)),hs(g,"--level",u().length+2),dt(x,"Items ".concat((E=n(r))!==null&&E!==void 0?E:"","-").concat((y=n(a))!==null&&y!==void 0?y:""))}),ee("mousemove",g,function(E){E.stopPropagation()}),P(e,g),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-137iwnw {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-137iwnw {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-137iwnw {
  right: -1px;
}
.jse-context-menu-pointer.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var Ax=B('<button type="button" class="jse-context-menu-pointer svelte-137iwnw"><!></button>');function na(e,t){rt(t,!1);var o=p(t,"root",9,!1),r=p(t,"insert",9,!1),a=p(t,"selected",9),s=p(t,"onContextMenu",9);ct(!0);var i=Ax();Yt(i,"title",Vu),Ut(A(i),{data:ha}),ne(()=>{We(i,"jse-root",o()),We(i,"jse-insert",r()),We(i,"jse-selected",a())}),ee("click",i,function(l){for(var c=l.target;c&&c.nodeName!=="BUTTON";)c=c.parentNode;c&&s()({anchor:c,left:0,top:0,width:Pr,height:Ar,offsetTop:2,offsetLeft:0,showTip:!0})}),P(e,i),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-2iqnqn {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-2iqnqn {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-2iqnqn::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var Px=B('<div role="none" data-type="selectable-key" class="jse-key svelte-2iqnqn"><!></div>'),Rx=B("<!> <!>",1),_x=B('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function yh(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=p(t,"path",9),s=p(t,"value",9),i=p(t,"context",9),l=p(t,"enforceString",9),c=p(t,"selection",9),d=p(t,"searchResultItems",9);N(()=>($(c()),Mo),()=>{v(o,rn(c())&&Mo(c()))}),N(()=>($(i()),$(a()),$(s()),$(l()),n(o),$(c()),$(d())),()=>{v(r,i().onRenderValue({path:a(),value:s(),mode:i().mode,readOnly:i().readOnly,enforceString:l(),isEditing:n(o),parser:i().parser,normalization:i().normalization,selection:c(),searchResultItems:d(),onPatch:i().onPatch,onPasteJson:i().onPasteJson,onSelect:i().onSelect,onFind:i().onFind,findNextInside:i().findNextInside,focus:i().focus}))}),Wt(),ct(!0);var u=It();Hn(Te(u),1,()=>n(r),no,(f,h)=>{var m=It();L(Te(m),()=>aj(n(h)),g=>{var b=_x(),j=xe(()=>n(h).action);Eo(b,(x,E)=>n(j)(x,E),()=>n(h).props),P(g,b)},g=>{var b=It();Cf(Te(b),()=>n(h).component,(j,x)=>{x(j,da(()=>n(h).props))}),P(g,b)}),P(f,m)}),P(e,u),at()}var Ix={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function kc(e){var{json:t,selection:o,deltaY:r,items:a}=e;if(!o)return{operations:void 0,updatedSelection:void 0,offset:0};var s=r<0?function(u){for(var{json:f,items:h,selection:m,deltaY:g}=u,b=Rr(f,m),j=h.findIndex(_=>Nt(_.path,b)),x=()=>{var _;return(_=h[E-1])===null||_===void 0?void 0:_.height},E=j,y=0;x()!==void 0&&Math.abs(g)>y+x()/2;)y+=x(),E-=1;var S=h[E].path,w=E-j;return E!==j&&h[E]!==void 0?{beforePath:S,offset:w}:void 0}({json:t,selection:o,deltaY:r,items:a}):function(u){for(var f,{json:h,items:m,selection:g,deltaY:b}=u,j=fa(h,g),x=m.findIndex(X=>Nt(X.path,j)),E=0,y=x,S=()=>{var X;return(X=m[y+1])===null||X===void 0?void 0:X.height};S()!==void 0&&Math.abs(b)>E+S()/2;)E+=S(),y+=1;var w=Lt(j),_=He(h,w),I=Array.isArray(_)?y:y+1,q=(f=m[I])===null||f===void 0?void 0:f.path,k=y-x;return q?{beforePath:q,offset:k}:{append:!0,offset:k}}({json:t,selection:o,deltaY:r,items:a});if(!s||s.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(u,f,h){if(!f)return[];var m="beforePath"in h?h.beforePath:void 0,g="append"in h?h.append:void 0,b=Lt(Xe(f)),j=He(u,b);if(!(g||m&&Lr(m,b)&&m.length>b.length))return[];var x=Rr(u,f),E=fa(u,f),y=qt(x),S=qt(E),w=m?m[b.length]:void 0;if(!fo(j)){if(lo(j)){var _=jo(y),I=jo(S),q=w!==void 0?jo(w):j.length;return ym(I-_+1,q<_?fe=>({op:"move",from:xt(b.concat(String(_+fe))),path:xt(b.concat(String(q+fe)))}):()=>({op:"move",from:xt(b.concat(String(_))),path:xt(b.concat(String(q)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var k=Object.keys(j),X=k.indexOf(y),je=k.indexOf(S),ae=g?k.length:w!==void 0?k.indexOf(w):-1;return X!==-1&&je!==-1&&ae!==-1?ae>X?[...k.slice(X,je+1),...k.slice(ae,k.length)].map(fe=>qa(b,fe)):[...k.slice(ae,X),...k.slice(je+1,k.length)].map(fe=>qa(b,fe)):[]}(t,o,s),l=Lt(Rr(t,o)),c=He(t,l);if(Array.isArray(c)){var d=function(u){var f,h,{items:m,json:g,selection:b,offset:j}=u,x=Rr(g,b),E=fa(g,b),y=m.findIndex(I=>Nt(I.path,x)),S=m.findIndex(I=>Nt(I.path,E)),w=(f=m[y+j])===null||f===void 0?void 0:f.path,_=(h=m[S+j])===null||h===void 0?void 0:h.path;return Oo(w,_)}({items:a,json:t,selection:o,offset:s.offset});return{operations:i,updatedSelection:d,offset:s.offset}}return{operations:i,updatedSelection:void 0,offset:s.offset}}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var qx=B('<button type="button"><!></button>');function js(e,t){rt(t,!1);var o=M(),r=xa("absolute-popup"),a=p(t,"validationError",8),s=p(t,"onExpand",8);N(()=>$(a()),()=>{v(o,rj(a())&&a().isChildError?"Contains invalid data":a().message)}),Wt(),ct();var i=qx();Ut(A(i),{data:Aa}),bo(()=>ee("click",i,function(){for(var l,c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];(l=s())===null||l===void 0||l.apply(this,d)})),Eo(i,(l,c)=>td(l,c),()=>ge({text:n(o)},r)),ne(()=>{var l;return Wo(i,"jse-validation-".concat((l=a().severity)!==null&&l!==void 0?l:""," svelte-1a8aobl"))}),P(e,i),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-wovgt4 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-wovgt4:hover {
  opacity: 0.8;
}

.jse-meta.svelte-wovgt4,
.jse-separator.svelte-wovgt4,
.jse-index.svelte-wovgt4,
.jse-bracket.svelte-wovgt4 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-wovgt4 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-wovgt4 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-wovgt4 {
  padding-right: var(--jse-padding, 10px);
}

.jse-tag.svelte-wovgt4 {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-wovgt4:hover {
  opacity: 0.8;
}
.jse-tag.jse-expanded.svelte-wovgt4 {
  opacity: 0.7;
  cursor: inherit;
}

.jse-identifier.svelte-wovgt4 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-wovgt4 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-wovgt4 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-wovgt4 > .jse-contents-outer > .jse-contents:where(.svelte-wovgt4) {
  padding-left: 0;
}
.jse-json-node.svelte-wovgt4 .jse-props:where(.svelte-wovgt4),
.jse-json-node.svelte-wovgt4 .jse-items:where(.svelte-wovgt4) {
  position: relative;
}
.jse-json-node.svelte-wovgt4 .jse-header-outer:where(.svelte-wovgt4),
.jse-json-node.svelte-wovgt4 .jse-footer-outer:where(.svelte-wovgt4) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4) {
  position: relative;
}
.jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4) .jse-meta > .jse-meta-inner:where(.svelte-wovgt4) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-wovgt4 .jse-contents-outer:where(.svelte-wovgt4) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
.jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) .jse-value-outer:where(.svelte-wovgt4) {
  display: inline-flex;
}
.jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
.jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4),
.jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-wovgt4 .jse-insert-selection-area:where(.svelte-wovgt4) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-wovgt4 .jse-insert-selection-area.jse-inside:where(.svelte-wovgt4) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-wovgt4 .jse-insert-selection-area.jse-after:where(.svelte-wovgt4) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-wovgt4 .jse-context-menu-pointer-anchor:where(.svelte-wovgt4) {
  position: relative;
}
.jse-json-node.svelte-wovgt4 .jse-insert-area:where(.svelte-wovgt4) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-wovgt4 .jse-insert-area.jse-hovered:where(.svelte-wovgt4) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4) {
  position: relative;
}
.jse-json-node.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4):hover,
.jse-json-node.svelte-wovgt4 .jse-value-outer:where(.svelte-wovgt4):hover,
.jse-json-node.svelte-wovgt4 .jse-meta:where(.svelte-wovgt4):hover,
.jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected:where(.svelte-wovgt4)):not(.jse-selected-value:where(.svelte-wovgt4)) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
.jse-json-node.jse-selected.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4),
.jse-json-node.jse-selected.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4):hover,
.jse-json-node.jse-selected.svelte-wovgt4 .jse-value-outer:where(.svelte-wovgt4):hover,
.jse-json-node.jse-selected.svelte-wovgt4 .jse-meta:where(.svelte-wovgt4):hover,
.jse-json-node.jse-selected.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-wovgt4 .jse-key-outer.jse-selected-key:where(.svelte-wovgt4) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-meta,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-wovgt4 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-wovgt4 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-wovgt4 .jse-insert-area.jse-selected:where(.svelte-wovgt4) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var kn=Nl(()=>Ix),Tx=B('<div class="jse-separator svelte-wovgt4">:</div>'),Dx=B('<div class="jse-bracket svelte-wovgt4">[</div> <span class="jse-tag jse-expanded svelte-wovgt4"> </span> &nbsp;',1),Nx=B('<div class="jse-bracket svelte-wovgt4">[</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">]</div>',1),Ux=B('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),Bx=B('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),Fx=B('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Lx=B('<div class="jse-insert-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"><!></div>'),Vx=B('<div slot="identifier" class="jse-identifier svelte-wovgt4"><div class="jse-index svelte-wovgt4"> </div></div>'),Wx=B("<!> <!>",1),Hx=B('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Jx=B('<div class="jse-items svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><span class="jse-bracket svelte-wovgt4">]</span></div> <!></div>',1),Kx=B('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4"><div class="jse-meta-inner svelte-wovgt4" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),Yx=B('<div class="jse-separator svelte-wovgt4">:</div>'),Xx=B('<div class="jse-bracket jse-expanded svelte-wovgt4">&lbrace;</div>'),Qx=B('<div class="jse-bracket svelte-wovgt4">&lbrace;</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">&rbrace;</div>',1),Gx=B('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),Zx=B('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),e1=B('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),t1=B('<div class="jse-insert-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"><!></div>'),n1=B('<div slot="identifier" class="jse-key-outer svelte-wovgt4"><!></div>'),o1=B('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),r1=B('<div class="jse-props svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><div class="jse-bracket svelte-wovgt4">&rbrace;</div></div> <!></div>',1),a1=B('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4" data-type="selectable-value"><div class="jse-meta-inner svelte-wovgt4"><!></div></div> <!></div> <!> <!></div> <!>',1),s1=B('<div class="jse-separator svelte-wovgt4">:</div>'),i1=B('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),l1=B('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),c1=B('<div class="jse-contents-outer svelte-wovgt4"><div class="jse-contents svelte-wovgt4"><!> <!> <div class="jse-value-outer svelte-wovgt4"><!></div> <!></div> <!> <!></div>'),u1=B('<div class="jse-insert-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"><!></div>'),d1=B('<div role="treeitem" tabindex="-1"><!> <!></div>');function lu(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=p(t,"pointer",9),s=p(t,"value",9),i=p(t,"state",9),l=p(t,"validationErrors",9),c=p(t,"searchResults",9),d=p(t,"selection",9),u=p(t,"context",9),f=p(t,"onDragSelectionStart",9),h=ho("jsoneditor:JSONNode"),m=M(void 0,!0),g=void 0,b=M(void 0,!0),j=M(void 0,!0),x=M(void 0,!0),E=M(void 0,!0),y=M(void 0,!0),S=M(void 0,!0),w=M(void 0,!0);function _(C){C.stopPropagation();var oe=Lu(C);u().onExpand(n(j),!n(x),oe)}function I(C){C.stopPropagation(),u().onExpand(n(j),!0)}function q(C,oe){var T=Ai(n(j),Object.keys(s()),C,oe);return u().onPatch(T),qt(gr(T[0].path))}function k(C){u().onDrag(C)}function X(C){kn().selecting&&(kn(kn().selecting=!1),C.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",k,!0),document.removeEventListener("mouseup",X)}function je(){var C;return((C=u().findElement([]))===null||C===void 0||(C=C.getBoundingClientRect())===null||C===void 0?void 0:C.top)||0}function ae(C,oe){var T=je()-C.initialContentTop;return oe.clientY-C.initialClientY-T}function fe(C){if(!u().readOnly&&d()){var oe=Lt(Xe(d()));if(Nt(n(j),oe)){var T=function(R,ve){var vt=[];function Be(Oe){var Qe=n(j).concat(Oe),jt=u().findElement(Qe);jt!==void 0&&vt.push({path:Qe,height:jt.clientHeight})}if(Array.isArray(s())){var Ae=u().getJson();if(Ae===void 0)return;var K=Rr(Ae,R),me=fa(Ae,R),Ie=parseInt(qt(K),10),ut=parseInt(qt(me),10),Me=ve.find(Oe=>Ie>=Oe.start&&ut<=Oe.end);if(!Me)return;var{start:gt,end:Se}=Me;zf(gt,Math.min(s().length,Se),Oe=>Be(String(Oe)))}else Object.keys(s()).forEach(Be);return vt}(d(),n(y)||gs);if(h("dragSelectionStart",{selection:d(),items:T}),T){var re=u().getJson();if(re!==void 0){var Ze=Rr(re,d()),se=T.findIndex(R=>Nt(R.path,Ze)),{offset:V}=kc({json:re,selection:u().getSelection(),deltaY:0,items:T});v(b,{initialTarget:C.target,initialClientY:C.clientY,initialContentTop:je(),selectionStartIndex:se,selectionItemsCount:pa(re,d()).length,items:T,offset:V,didMoveItems:!1}),kn(kn().dragging=!0),document.addEventListener("mousemove",qe,!0),document.addEventListener("mouseup",we)}}else h("Cannot drag the current selection (probably spread over multiple sections)")}else f()(C)}}function qe(C){if(n(b)){var oe=u().getJson();if(oe===void 0)return;var T=ae(n(b),C),{offset:re}=kc({json:oe,selection:u().getSelection(),deltaY:T,items:n(b).items});re!==n(b).offset&&(h("drag selection",re,T),v(b,ge(ge({},n(b)),{},{offset:re,didMoveItems:!0})))}}function we(C){if(n(b)){var oe=u().getJson();if(oe===void 0)return;var T=ae(n(b),C),{operations:re,updatedSelection:Ze}=kc({json:oe,selection:u().getSelection(),deltaY:T,items:n(b).items});if(re)u().onPatch(re,(R,ve)=>({state:ve,selection:Ze??d()}));else if(C.target===n(b).initialTarget&&!n(b).didMoveItems){var se=lc(C.target),V=Uf(C.target);V&&u().onSelect(fv(se,V))}v(b,void 0),kn(kn().dragging=!1),document.removeEventListener("mousemove",qe,!0),document.removeEventListener("mouseup",we)}}function ze(C){C.shiftKey||(C.stopPropagation(),C.preventDefault(),u().onSelect(Wr(n(j))))}function _e(C){C.shiftKey||(C.stopPropagation(),C.preventDefault(),u().onSelect(Nr(n(j))))}function $e(C){u().onSelect(Wr(n(j))),u().onContextMenu(C)}function he(C){u().onSelect(Nr(n(j))),u().onContextMenu(C)}N(()=>$(a()),()=>{v(j,gr(a()))}),N(()=>$(a()),()=>{v(o,encodeURIComponent(a()))}),N(()=>$(i()),()=>{v(x,!!_a(i())&&i().expanded)}),N(()=>($(s()),$(i())),()=>{v(E,Dr(s(),i(),[]))}),N(()=>$(i()),()=>{v(y,wo(i())?i().visibleSections:void 0)}),N(()=>$(l()),()=>{var C;v(S,(C=l())===null||C===void 0?void 0:C.validationError)}),N(()=>($(u()),$(d()),n(j)),()=>{v(w,fi(u().getJson(),d(),n(j)))}),N(()=>n(j),()=>{v(r,n(j).length===0)}),Wt(),ct(!0);var ce=d1(),ie=xe(()=>{var C;return"".concat((C=qs("jse-json-node",{"jse-expanded":n(x)},u().onClassName(n(j),s())))!==null&&C!==void 0?C:""," svelte-wovgt4")}),Ge=xe(()=>n(w)&&Cn(d())),le=xe(()=>n(w)&&rn(d())),de=A(ce);L(de,()=>Array.isArray(s()),C=>{var oe=Kx(),T=Te(oe),re=A(T),Ze=A(re);L(A(Ze),()=>n(x),Be=>{Ut(Be,{data:ha})},Be=>{Ut(Be,{data:ni})});var se=D(Ze,2);Wn(se,t,"identifier",{},null);var V=D(se,2);L(V,()=>!n(r),Be=>{P(Be,Tx())});var R=D(V,2),ve=A(R);L(A(ve),()=>n(x),Be=>{var Ae=Dx(),K=A(D(Te(Ae),2));ne(()=>{var me,Ie;return dt(K,"".concat((me=s().length)!==null&&me!==void 0?me:"",`
                `).concat((Ie=s().length===1?"item":"items")!==null&&Ie!==void 0?Ie:""))}),P(Be,Ae)},Be=>{var Ae=Nx(),K=D(Te(Ae),2),me=A(K);ne(()=>{var Ie,ut;return dt(me,"".concat((Ie=s().length)!==null&&Ie!==void 0?Ie:"",`
                `).concat((ut=s().length===1?"item":"items")!==null&&ut!==void 0?ut:""))}),ee("click",K,I),P(Be,Ae)}),L(D(R,2),()=>!u().readOnly&&n(w)&&d()&&(rn(d())||Cn(d()))&&!Mo(d())&&Nt(Xe(d()),n(j)),Be=>{var Ae=Ux();na(A(Ae),{get root(){return n(r)},selected:!0,get onContextMenu(){return u().onContextMenu}}),P(Be,Ae)});var vt=D(re,2);L(vt,()=>n(S)&&(!n(x)||!n(S).isChildError),Be=>{js(Be,{get validationError(){return n(S)},onExpand:I})}),L(D(vt,2),()=>n(x),Be=>{var Ae=Bx();ee("click",Ae,ze),P(Be,Ae)},Be=>{var Ae=Fx();ee("click",Ae,_e),P(Be,Ae)}),L(D(T,2),()=>n(x),Be=>{var Ae=Jx(),K=Te(Ae),me=A(K);L(me,()=>!u().readOnly&&(n(m)===Ls||n(w)&&yo(d())),ut=>{var Me=Lx();Yt(Me,"title",uc);var gt=xe(()=>n(w)&&yo(d()));ne(()=>We(Me,"jse-selected",n(gt)));var Se=A(Me),Oe=xe(()=>n(w)&&yo(d()));na(Se,{insert:!0,get selected(){return n(Oe)},onContextMenu:$e}),ne(()=>{We(Me,"jse-hovered",n(m)===Ls),hs(Me,"--level",n(j).length+1)}),P(ut,Me)}),Hn(D(me,2),1,()=>n(y)||gs,no,(ut,Me,gt)=>{var Se=Wx(),Oe=Te(Se);Hn(Oe,1,()=>function(Qe,jt,zt){var Fe=jt.start,W=Math.min(jt.end,Qe.length),Ot=Tp(Fe,W);return zt&&zt.offset!==0?Qd(Ot,zt.selectionStartIndex,zt.selectionItemsCount,zt.offset).map((mt,Tn)=>({index:mt,gutterIndex:Tn})):Ot.map(mt=>({index:mt,gutterIndex:mt}))}(s(),n(Me),n(b)),Qe=>Qe.index,(Qe,jt)=>{var zt=It(),Fe=xe(()=>wo(l())?l().items[n(jt).index]:void 0),W=xe(()=>hv(u().getJson(),d(),n(j).concat(String(n(jt).index)))),Ot=Te(zt),mt=xe(()=>Sd(a(),n(jt).index)),Tn=xe(()=>wo(i())?i().items[n(jt).index]:void 0),$n=xe(()=>wo(c())?c().items[n(jt).index]:void 0);lu(Ot,{get value(){return s()[n(jt).index]},get pointer(){return n(mt)},get state(){return n(Tn)},get validationErrors(){return n(Fe)},get searchResults(){return n($n)},get selection(){return n(W)},get context(){return u()},onDragSelectionStart:fe,$$slots:{identifier:(jn,Qn)=>{var gn=Vx(),Dn=A(gn),Jn=A(Dn);ne(()=>dt(Jn,n(jt).gutterIndex)),P(jn,gn)}}}),P(Qe,zt)}),L(D(Oe,2),()=>n(Me).end<s().length,Qe=>{var jt=xe(()=>n(y)||gs);Mx(Qe,{get visibleSections(){return n(jt)},sectionIndex:gt,get total(){return s().length},get path(){return n(j)},get onExpandSection(){return u().onExpandSection},get selection(){return d()},get context(){return u()}})}),P(ut,Se)});var Ie=D(K,2);L(D(A(Ie),2),()=>!n(r),ut=>{var Me=Hx();ee("click",Me,_e),P(ut,Me)}),P(Be,Ae)}),ee("click",Ze,_),P(C,oe)},C=>{var oe=It();L(Te(oe),()=>en(s()),T=>{var re=a1(),Ze=Te(re),se=A(Ze),V=A(se);L(A(V),()=>n(x),K=>{Ut(K,{data:ha})},K=>{Ut(K,{data:ni})});var R=D(V,2);Wn(R,t,"identifier",{},null);var ve=D(R,2);L(ve,()=>!n(r),K=>{P(K,Yx())});var vt=D(ve,2),Be=A(vt);L(A(Be),()=>n(x),K=>{P(K,Xx())},K=>{var me=Qx(),Ie=D(Te(me),2),ut=xe(()=>{var Se;return(Se=Object.keys(s()).length)!==null&&Se!==void 0?Se:""}),Me=xe(()=>{var Se;return(Se=Object.keys(s()).length===1?"prop":"props")!==null&&Se!==void 0?Se:""}),gt=A(Ie);ne(()=>dt(gt,"".concat(n(ut),`
                `).concat(n(Me)))),ee("click",Ie,I),P(K,me)}),L(D(vt,2),()=>!u().readOnly&&n(w)&&d()&&(rn(d())||Cn(d()))&&!Mo(d())&&Nt(Xe(d()),n(j)),K=>{var me=Gx();na(A(me),{get root(){return n(r)},selected:!0,get onContextMenu(){return u().onContextMenu}}),P(K,me)});var Ae=D(se,2);L(Ae,()=>n(S)&&(!n(x)||!n(S).isChildError),K=>{js(K,{get validationError(){return n(S)},onExpand:I})}),L(D(Ae,2),()=>n(x),K=>{var me=Zx();ee("click",me,ze),P(K,me)},K=>{var me=It();L(Te(me),()=>!n(r),Ie=>{var ut=e1();ee("click",ut,_e),P(Ie,ut)},null,!0),P(K,me)}),L(D(Ze,2),()=>n(x),K=>{var me=r1(),Ie=Te(me),ut=A(Ie);L(ut,()=>!u().readOnly&&(n(m)===Ls||n(w)&&yo(d())),gt=>{var Se=t1();Yt(Se,"title",uc);var Oe=xe(()=>n(w)&&yo(d()));ne(()=>We(Se,"jse-selected",n(Oe)));var Qe=A(Se),jt=xe(()=>n(w)&&yo(d()));na(Qe,{insert:!0,get selected(){return n(jt)},onContextMenu:$e}),ne(()=>{We(Se,"jse-hovered",n(m)===Ls),hs(Se,"--level",n(j).length+1)}),P(gt,Se)}),Hn(D(ut,2),1,()=>function(gt,Se){var Oe=Object.keys(gt);return Se&&Se.offset!==0?Qd(Oe,Se.selectionStartIndex,Se.selectionItemsCount,Se.offset):Oe}(s(),n(b)),no,(gt,Se)=>{var Oe=It(),Qe=xe(()=>Sd(a(),n(Se))),jt=xe(()=>ir(c())?c().properties[n(Se)]:void 0),zt=xe(()=>ir(l())?l().properties[n(Se)]:void 0),Fe=xe(()=>n(j).concat(n(Se))),W=xe(()=>hv(u().getJson(),d(),n(Fe))),Ot=Te(Oe),mt=xe(()=>ir(i())?i().properties[n(Se)]:void 0);lu(Ot,{get value(){return s()[n(Se)]},get pointer(){return n(Qe)},get state(){return n(mt)},get validationErrors(){return n(zt)},get searchResults(){return n(jt)},get selection(){return n(W)},get context(){return u()},onDragSelectionStart:fe,$$slots:{identifier:(Tn,$n)=>{var jn=n1(),Qn=xe(()=>vo(n(W))&&Nt(n(W).path,n(Fe)));ne(()=>We(jn,"jse-selected-key",n(Qn)));var gn=A(jn),Dn=xe(()=>{return Jn=n(jt),($t=av(Jn)?Jn.searchResults.filter(Bt=>Bt.field===sr.key):void 0)&&$t.length>0?$t:void 0;var Jn,$t});(function(Jn,$t){rt($t,!1);var Bt=M(void 0,!0),sn=M(void 0,!0),Mt=p($t,"pointer",9),En=p($t,"key",9),Nn=p($t,"selection",9),co=p($t,"searchResultItems",9),Xt=p($t,"onUpdateKey",9),Pt=p($t,"context",9),mn=M(void 0,!0);function Un(xn){n(sn)||Pt().readOnly||(xn.preventDefault(),Pt().onSelect(ed(n(mn))))}function hn(xn,Gn){var oo=Xt()(En(),Pt().normalization.unescapeValue(xn)),Bn=Lt(n(mn)).concat(oo);Pt().onSelect(Gn===va.nextInside?Dt(Bn):Vr(Bn)),Gn!==va.self&&Pt().focus()}function ao(){Pt().onSelect(Vr(n(mn))),Pt().focus()}N(()=>$(Mt()),()=>{v(mn,gr(Mt()))}),N(()=>($(Nn()),n(mn)),()=>{v(Bt,vo(Nn())&&Nt(Nn().path,n(mn)))}),N(()=>(n(Bt),$(Nn())),()=>{v(sn,n(Bt)&&Mo(Nn()))}),Wt(),ct(!0);var Mn=Rx(),Kn=Te(Mn);L(Kn,()=>!Pt().readOnly&&n(sn),xn=>{var Gn=xe(()=>Pt().normalization.escapeValue(En())),oo=xe(()=>Mo(Nn())?Nn().initialValue:void 0);Qf(xn,{get value(){return n(Gn)},get initialValue(){return n(oo)},label:"Edit key",shortText:!0,onChange:hn,onCancel:ao,get onFind(){return Pt().onFind}})},xn=>{var Gn=Px();L(A(Gn),co,oo=>{var Bn=xe(()=>Pt().normalization.escapeValue(En()));oh(oo,{get text(){return n(Bn)},get searchResultItems(){return co()}})},oo=>{var Bn=zo();ne(()=>dt(Bn,Fl(Pt().normalization.escapeValue(En())))),P(oo,Bn)}),ne(()=>We(Gn,"jse-empty",En()==="")),ee("dblclick",Gn,Un),P(xn,Gn)}),L(D(Kn,2),()=>!Pt().readOnly&&n(Bt)&&!n(sn),xn=>{na(xn,{selected:!0,get onContextMenu(){return Pt().onContextMenu}})}),P(Jn,Mn),at()})(gn,{get pointer(){return n(Qe)},get key(){return n(Se)},get selection(){return n(W)},get searchResultItems(){return n(Dn)},get context(){return u()},onUpdateKey:q}),P(Tn,jn)}}}),P(gt,Oe)});var Me=D(Ie,2);L(D(A(Me),2),()=>!n(r),gt=>{var Se=o1();ee("click",Se,_e),P(gt,Se)}),P(K,me)}),ee("click",V,_),P(T,re)},T=>{var re=c1(),Ze=A(re),se=A(Ze);Wn(se,t,"identifier",{},null);var V=D(se,2);L(V,()=>!n(r),K=>{P(K,s1())});var R=D(V,2),ve=A(R),vt=xe(()=>n(w)?d():void 0),Be=xe(()=>{return K=c(),(me=av(K)?K.searchResults.filter(Ie=>Ie.field===sr.value):void 0)&&me.length>0?me:void 0;var K,me});yh(ve,{get path(){return n(j)},get value(){return s()},get enforceString(){return n(E)},get selection(){return n(vt)},get searchResultItems(){return n(Be)},get context(){return u()}}),L(D(R,2),()=>!u().readOnly&&n(w)&&d()&&(rn(d())||Cn(d()))&&!Mo(d())&&Nt(Xe(d()),n(j)),K=>{var me=i1();na(A(me),{get root(){return n(r)},selected:!0,get onContextMenu(){return u().onContextMenu}}),P(K,me)});var Ae=D(Ze,2);L(Ae,()=>n(S),K=>{js(K,{get validationError(){return n(S)},onExpand:I})}),L(D(Ae,2),()=>!n(r),K=>{var me=l1();ee("click",me,_e),P(K,me)}),P(T,re)},!0),P(C,oe)}),L(D(de,2),()=>!u().readOnly&&(n(m)===dc||n(w)&&Yo(d())),C=>{var oe=u1();Yt(oe,"title",uc);var T=xe(()=>n(w)&&Yo(d()));ne(()=>We(oe,"jse-selected",n(T)));var re=A(oe),Ze=xe(()=>n(w)&&Yo(d()));na(re,{insert:!0,get selected(){return n(Ze)},onContextMenu:he}),ne(()=>We(oe,"jse-hovered",n(m)===dc)),P(C,oe)}),ne(()=>{Wo(ce,n(ie)),Yt(ce,"data-path",n(o)),Yt(ce,"aria-selected",n(w)),We(ce,"jse-root",n(r)),We(ce,"jse-selected",n(Ge)),We(ce,"jse-selected-value",n(le)),We(ce,"jse-readonly",u().readOnly),We(ce,"jse-hovered",n(m)===tv),hs(ce,"--level",n(j).length)}),ee("mousedown",ce,function(C){if((C.buttons===1||C.buttons===2)&&!((oe=C.target).nodeName==="DIV"&&oe.contentEditable==="true"||C.buttons===1&&Df(C.target,"BUTTON"))){var oe;C.stopPropagation(),C.preventDefault(),u().focus(),document.addEventListener("mousemove",k,!0),document.addEventListener("mouseup",X);var T=lc(C.target),re=u().getJson(),Ze=u().getDocumentState();if(!d()||T===dn.after||T===dn.inside||d().type!==T&&d().type!==dn.multi||!fi(re,d(),n(j)))if(kn(kn().selecting=!0),kn(kn().selectionAnchor=n(j)),kn(kn().selectionAnchorType=T),kn(kn().selectionFocus=n(j)),C.shiftKey){var se=u().getSelection();se&&u().onSelect(Oo(za(se),n(j)))}else if(T===dn.multi)if(n(r)&&C.target.hasAttribute("data-path")){var V=qt(Hf(s(),Ze));u().onSelect(eu(V))}else u().onSelect(Oo(n(j),n(j)));else re!==void 0&&u().onSelect(fv(T,n(j)));else C.button===0&&f()(C)}}),ee("mousemove",ce,function(C){if(kn().selecting){C.preventDefault(),C.stopPropagation(),kn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var oe=lc(C.target);Nt(n(j),kn().selectionFocus)&&oe===kn().selectionAnchorType||(kn(kn().selectionFocus=n(j)),kn(kn().selectionAnchorType=oe),u().onSelect(Oo(kn().selectionAnchor||kn().selectionFocus,kn().selectionFocus)))}}),ee("mouseover",ce,function(C){kn().selecting||kn().dragging||(C.stopPropagation(),ia(C.target,"data-type","selectable-value")?v(m,tv):ia(C.target,"data-type","selectable-key")?v(m,void 0):ia(C.target,"data-type","insert-selection-area-inside")?v(m,Ls):ia(C.target,"data-type","insert-selection-area-after")&&v(m,dc),clearTimeout(g))}),ee("mouseout",ce,function(C){C.stopPropagation(),g=window.setTimeout(()=>v(m,void 0))}),P(e,ce),at()}var v1={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},p1={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},$v={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},f1={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1eamlhk {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-before:where(.svelte-1eamlhk) {
  flex: 1;
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-after:where(.svelte-1eamlhk) {
  flex: 2;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) .jse-welcome-info:where(.svelte-1eamlhk) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var h1=B('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>',1),g1=B('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');function cu(e,t){var o=typeof e=="string"?e.toLowerCase():e,r=typeof t=="string"?t.toLowerCase():t;return wm(o,r)}function wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=He(e,t);if(lo(a)){if(o===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,d=function(f,h){return function(m,g){var b=He(m,f),j=He(g,f);return b===void 0?h:j===void 0?-h:typeof b!="string"&&typeof j!="string"?b>j?h:b<j?-h:0:h*cu(b,j)}}(l,c),u=He(s,i);return[{op:"replace",path:xt(i),value:u.slice(0).sort(d)}]}(e,t,o,r)}if(en(a))return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=He(s,i),d=Object.keys(c).slice();d.sort((f,h)=>l*cu(f,h));var u={};return d.forEach(f=>u[f]=c[f]),[{op:"replace",path:xt(i),value:u}]}(e,t,r);throw new Error("Cannot sort: no array or object")}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-2nnd2m {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):focus, .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-2nnd2m) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var m1=B('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m"> </button>'),b1=B('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>'),j1=B('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');function x1(e,t){rt(t,!1);var o=p(t,"items",9),r=p(t,"selectedItem",9),a=p(t,"onSelect",9);ct(!0);var s=j1(),i=A(s);Hn(i,1,()=>$f(o(),100),l=>l,(l,c)=>{var d=m1();ne(()=>Yt(d,"title",n(c).toString()));var u=A(d);ne(()=>dt(u,ui(n(c).toString(),30))),ne(()=>We(d,"jse-selected",n(c)===r())),ee("click",d,er(()=>a()(n(c)))),P(l,d)}),L(D(i,2),()=>o().length>100,l=>{var c=b1();Yt(c,"title","Limited to ".concat(100," items")),P(l,c)}),P(e,s),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-752ro1 {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):focus, .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-752ro1) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-752ro1) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-752ro1:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var y1=B('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>'),w1=B('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button" class="jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1"><!></button> <!></div>');function Mv(e,t){rt(t,!1);var o,r=M(void 0,!0),a=M(void 0,!0),{openAbsolutePopup:s,closeAbsolutePopup:i}=xa("absolute-popup"),l=p(t,"path",9),c=p(t,"index",9),d=p(t,"onSelect",9),u=p(t,"getItems",9),f=M(void 0,!0),h=M(!1,!0);function m(j){i(o),d()(n(r).concat(j))}N(()=>($(l()),$(c())),()=>{v(r,l().slice(0,c()))}),N(()=>($(l()),$(c())),()=>{v(a,l()[c()])}),Wt(),ct(!0);var g=w1(),b=A(g);Ut(A(b),{data:zp}),L(D(b,2),()=>n(a)!==void 0,j=>{var x=y1(),E=A(x);ne(()=>dt(E,n(a))),ee("click",x,()=>m(n(a))),P(j,x)}),On(g,j=>v(f,j),()=>n(f)),ne(()=>We(b,"jse-open",n(h))),ee("click",b,function(){if(n(f)){v(h,!0);var j={items:u()(n(r)),selectedItem:n(a),onSelect:m};o=s(x1,j,{anchor:n(f),closeOnOuterClick:!0,onClose:()=>{v(h,!1)}})}}),P(e,g),at()}function id(e){var t,o;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(o=document).queryCommandSupported)!==null&&t!==void 0&&t.call(o,"copy")){var r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{document.body.removeChild(r)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-zc2wx7 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button:where(.svelte-zc2wx7) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-copy.copied:where(.svelte-zc2wx7) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-validation-error:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 .jse-copied-text:where(.svelte-zc2wx7) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var k1=B('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>'),C1=B('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>'),S1=B('<div class="jse-navigation-bar-path-editor svelte-zc2wx7"><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"> <!> <!> <button type="button" class="jse-navigation-bar-copy svelte-zc2wx7" title="Copy selected path to the clipboard"><!></button></div>');function O1(e,t){rt(t,!1);var o=M(),r=xa("absolute-popup"),a=p(t,"path",8),s=p(t,"pathParser",8),i=p(t,"onChange",8),l=p(t,"onClose",8),c=p(t,"onError",8),d=p(t,"pathExists",8),u=M(),f=M(),h=M(!1),m=void 0,g=M(!1);function b(){n(u).focus()}function j(_){try{var I=s().parse(_);return function(q){if(!d()(q))throw new Error("Path does not exist in current document")}(I),{path:I,error:void 0}}catch(q){return{path:void 0,error:q}}}Ao(()=>{b()}),Lo(()=>{clearTimeout(m)}),N(()=>($(s()),$(a())),()=>{v(f,s().stringify(a()))}),N(()=>(n(h),n(f)),()=>{v(o,n(h)?j(n(f)).error:void 0)}),Wt(),ct();var x=S1(),E=A(x);On(E,_=>v(u,_),()=>n(u));var y=D(E,2);L(y,()=>n(o),_=>{var I=k1();Ut(A(I),{data:Aa}),Eo(I,(q,k)=>td(q,k),()=>ge({text:String(n(o)||"")},r)),P(_,I)});var S=D(y,2);L(S,()=>n(g),_=>{P(_,C1())});var w=D(S,2);Ut(A(w),{data:aa}),ne(()=>{We(x,"error",n(o)),Ra(E,n(f)),We(w,"copied",n(g))}),ee("keydown",E,er(function(_){var I=Fr(_);if(I==="Escape"&&(_.preventDefault(),l()()),I==="Enter"){_.preventDefault(),v(h,!0);var q=j(n(f));q.path!==void 0?i()(q.path):c()(q.error)}})),ee("input",E,function(_){v(f,_.currentTarget.value)}),ee("click",w,function(){id(n(f)),v(g,!0),m=window.setTimeout(()=>v(g,!1),1e3),b()}),P(e,x),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-xs03gj {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.flex:where(.svelte-xs03gj) {
  flex: 1;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):focus, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):hover, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.editing:where(.svelte-xs03gj) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) .jse-navigation-bar-space:where(.svelte-xs03gj) {
  flex: 1;
  text-align: left;
}`);var E1=B("<!> <!>",1),z1=B('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button" class="jse-navigation-bar-edit svelte-xs03gj"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');function $1(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=ho("jsoneditor:NavigationBar"),s=p(t,"json",9),i=p(t,"selection",9),l=p(t,"onSelect",9),c=p(t,"onError",9),d=p(t,"pathParser",9),u=M(void 0,!0),f=M(!1,!0);function h(q){a("get items for path",q);var k=He(s(),q);if(Array.isArray(k))return Tp(0,k.length).map(String);if(en(k)){var X=Object.keys(k).slice(0);return X.sort(cu),X}return[]}function m(q){return sa(s(),q)}function g(q){a("select path",JSON.stringify(q)),l()(Oo(q,q))}function b(){v(f,!1)}function j(q){b(),g(q)}N(()=>($(i()),Xe),()=>{v(o,i()?Xe(i()):[])}),N(()=>($(s()),n(o)),()=>{v(r,to(He(s(),n(o))))}),N(()=>n(o),()=>{n(o),setTimeout(()=>{if(n(u)&&n(u).scrollTo){var q=n(u).scrollWidth-n(u).clientWidth;q>0&&(a("scrollTo ",q),n(u).scrollTo({left:q,behavior:"smooth"}))}})}),Wt(),ct(!0);var x=z1(),E=A(x);L(E,()=>!n(f),q=>{var k=E1(),X=Te(k);Hn(X,1,()=>n(o),no,(je,ae,fe)=>{Mv(je,{getItems:h,get path(){return n(o)},index:fe,onSelect:g})}),L(D(X,2),()=>n(r),je=>{Mv(je,{getItems:h,get path(){return n(o)},get index(){return n(o).length},onSelect:g})}),P(q,k)},q=>{O1(q,{get path(){return n(o)},onClose:b,onChange:j,get onError(){return c()},pathExists:m,get pathParser(){return d()}})});var y=D(E,2),S=A(y),w=A(S);ne(()=>dt(w,to(s())||n(f)?" ":"Navigation bar"));var _=D(S,2),I=xe(()=>n(f)?om:rm);Ut(_,{get data(){return n(I)}}),On(x,q=>v(u,q),()=>n(u)),ne(()=>{Yt(y,"title",n(f)?"Cancel editing the selected path":"Edit the selected path"),We(y,"flex",!n(f)),We(y,"editing",n(f))}),ee("click",y,function(){v(f,!n(f))}),P(e,x),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1mxl2uo {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo),
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-replace-toggle:where(.svelte-1mxl2uo) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-icon:where(.svelte-1mxl2uo) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) label.jse-search-input-label:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count:where(.svelte-1mxl2uo) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count.jse-visible:where(.svelte-1mxl2uo) {
  visibility: visible;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  width: auto;
}`);var M1=B('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),A1=B('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>'),P1=B('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"></label> <div class="jse-search-count svelte-1mxl2uo"> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function kh(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=M(void 0,!0),s=ho("jsoneditor:SearchBox"),i=p(t,"json",9),l=p(t,"documentState",9),c=p(t,"parser",9),d=p(t,"showSearch",9),u=p(t,"showReplace",13),f=p(t,"readOnly",9),h=p(t,"columns",9),m=p(t,"onSearch",9),g=p(t,"onFocus",9),b=p(t,"onPatch",9),j=p(t,"onClose",9),x=M("",!0),E="",y=M("",!0),S=M(!1,!0),w=M(void 0,!0),_=rl(function(se){return de.apply(this,arguments)},300),I=rl(function(se){return C.apply(this,arguments)},300);function q(){u(!u()&&!f())}function k(se){se.stopPropagation();var V=Fr(se);V==="Enter"&&(se.preventDefault(),n(x)!==E?_.flush():_e()),V==="Shift+Enter"&&(se.preventDefault(),he()),V==="Ctrl+Enter"&&(se.preventDefault(),u()?fe():_e()),V==="Ctrl+H"&&(se.preventDefault(),q()),V==="Escape"&&(se.preventDefault(),re())}function X(se){Fr(se)==="Enter"&&(se.preventDefault(),se.stopPropagation(),fe())}function je(){return ae.apply(this,arguments)}function ae(){return(ae=tt(function*(){yield eo(),setTimeout(()=>_.flush())})).apply(this,arguments)}function fe(){return qe.apply(this,arguments)}function qe(){return(qe=tt(function*(){var se;if(!f()){var V=(se=n(w))===null||se===void 0?void 0:se.activeItem;if(s("handleReplace",{replaceText:n(y),activeItem:V}),n(w)&&V&&i()!==void 0){v(w,ge(ge({},gv(n(w))),{},{activeIndex:n(r)}));var{operations:R,newSelection:ve}=cj(i(),l(),n(y),V,c());b()(R,(vt,Be)=>({state:Be,selection:ve})),yield eo(),yield I.flush(),yield ie()}}})).apply(this,arguments)}function we(){return ze.apply(this,arguments)}function ze(){return(ze=tt(function*(){if(!f()){s("handleReplaceAll",{text:n(x),replaceText:n(y)});var{operations:se,newSelection:V}=function(R,ve,vt,Be,Ae){for(var K=mv(vt,R,{maxResults:1/0}),me=[],Ie=0;Ie<K.length;Ie++){var ut=K[Ie-1],Me=K[Ie];Ie!==0&&Me.field===ut.field&&Nt(Me.path,ut.path)?qt(me).items.push(Me):me.push({path:Me.path,field:Me.field,items:[Me]})}me.sort((Oe,Qe)=>Oe.field!==Qe.field?Oe.field===sr.key?1:-1:Qe.path.length-Oe.path.length);var gt,Se=[];return me.forEach(Oe=>{var{field:Qe,path:jt,items:zt}=Oe;if(Qe===sr.key){var Fe=Lt(jt),W=He(R,Fe),Ot=qt(jt),mt=Ai(Fe,Object.keys(W),Ot,jv(Ot,Be,zt));Se=Se.concat(mt),gt=Ss(R,mt)}else{if(Qe!==sr.value)throw new Error("Cannot replace: unknown type of search result field ".concat(Qe));var Tn=He(R,jt);if(Tn===void 0)throw new Error("Cannot replace: path not found ".concat(xt(jt)));var $n=typeof Tn=="string"?Tn:String(Tn),jn=Dr(R,ve,jt),Qn=jv($n,Be,zt),gn=[{op:"replace",path:xt(jt),value:jn?Qn:Rs(Qn,Ae)}];Se=Se.concat(gn),gt=Ss(R,gn)}}),{operations:Se,newSelection:gt}}(i(),l(),n(x),n(y),c());b()(se,(R,ve)=>({state:ve,selection:V})),yield ie()}})).apply(this,arguments)}function _e(){return $e.apply(this,arguments)}function $e(){return($e=tt(function*(){v(w,n(w)?gv(n(w)):void 0),yield ie()})).apply(this,arguments)}function he(){return ce.apply(this,arguments)}function ce(){return ce=tt(function*(){v(w,n(w)?function(se){var V=se.activeIndex>0?se.activeIndex-1:se.items.length-1,R=se.items[V],ve=se.items.map((vt,Be)=>ge(ge({},vt),{},{active:Be===V}));return ge(ge({},se),{},{items:ve,activeItem:R,activeIndex:V})}(n(w)):void 0),yield ie()}),ce.apply(this,arguments)}function ie(){return Ge.apply(this,arguments)}function Ge(){return(Ge=tt(function*(){var se;s("handleFocus",n(w));var V=(se=n(w))===null||se===void 0?void 0:se.activeItem;V&&i()!==void 0&&(yield g()(V.path))})).apply(this,arguments)}function le(){return le=tt(function*(se){yield oe(se,n(x),i())}),le.apply(this,arguments)}function de(){return de=tt(function*(se){yield oe(d(),se,i()),yield ie()}),de.apply(this,arguments)}function C(){return C=tt(function*(se){yield oe(d(),n(x),se)}),C.apply(this,arguments)}function oe(se,V,R){return T.apply(this,arguments)}function T(){return T=tt(function*(se,V,R){return se?(s("applySearch",{showSearch:se,text:V}),V===""?(s("clearing search result"),n(w)!==void 0&&v(w,void 0),Promise.resolve()):(E=V,v(S,!0),new Promise(ve=>{setTimeout(()=>{var vt=mv(V,R,{maxResults:cc,columns:h()});v(w,function(Be,Ae){var K=Ae!=null&&Ae.activeItem?xv(Ae.activeItem):void 0,me=Be.findIndex(Me=>Nt(K,xv(Me))),Ie=me!==-1?me:(Ae==null?void 0:Ae.activeIndex)!==void 0&&(Ae==null?void 0:Ae.activeIndex)<Be.length?Ae==null?void 0:Ae.activeIndex:Be.length>0?0:-1,ut=Be.map((Me,gt)=>ge(ge({},Me),{},{active:gt===Ie}));return{items:ut,activeItem:ut[Ie],activeIndex:Ie}}(vt,n(w))),v(S,!1),ve()})}))):(n(w)&&v(w,void 0),Promise.resolve())}),T.apply(this,arguments)}function re(){s("handleClose"),_.cancel(),I.cancel(),oe(!1,n(x),i()),j()()}N(()=>n(w),()=>{var se;v(o,((se=n(w))===null||se===void 0||(se=se.items)===null||se===void 0?void 0:se.length)||0)}),N(()=>n(w),()=>{var se;v(r,((se=n(w))===null||se===void 0?void 0:se.activeIndex)||0)}),N(()=>(n(o),cc),()=>{v(a,n(o)>=cc?"".concat(999,"+"):String(n(o)))}),N(()=>($(m()),n(w)),()=>{m()(n(w))}),N(()=>$(d()),()=>{(function(se){le.apply(this,arguments)})(d())}),N(()=>n(x),()=>{_(n(x))}),N(()=>$(i()),()=>{I(i())}),Wt(),ct(!0);var Ze=It();L(Te(Ze),d,se=>{var V=P1(),R=A(V),ve=A(R);L(ve,()=>!f(),Se=>{var Oe=M1(),Qe=A(Oe),jt=xe(()=>u()?ha:ni);Ut(Qe,{get data(){return n(jt)}}),ee("click",Oe,q),P(Se,Oe)});var vt=A(D(ve,2)),Be=A(vt);L(A(Be),()=>n(S),Se=>{Ut(Se,{data:am,spin:!0})},Se=>{Ut(Se,{data:Al})});var Ae=D(Be,2),K=A(Ae);bo(()=>pl(K,()=>n(x),Se=>v(x,Se))),Eo(K,Se=>{Se.select()}),bo(()=>ee("paste",K,je));var me=D(Ae,2),Ie=A(me),ut=D(me,2);Ut(A(ut),{data:sm});var Me=D(ut,2);Ut(A(Me),{data:im});var gt=D(Me,2);Ut(A(gt),{data:Ml}),L(D(vt,2),()=>u()&&!f(),Se=>{var Oe=A1(),Qe=A(Oe),jt=D(Qe,2),zt=D(jt,2);pl(Qe,()=>n(y),Fe=>v(y,Fe)),ee("keydown",Qe,X),ee("click",jt,fe),ee("click",zt,we),P(Se,Oe)}),ne(()=>{var Se,Oe;We(me,"jse-visible",n(x)!==""),dt(Ie,"".concat((Se=n(r)!==-1&&n(r)<n(o)?"".concat(n(r)+1,"/"):"")!==null&&Se!==void 0?Se:"").concat((Oe=n(a))!==null&&Oe!==void 0?Oe:""))}),ee("click",ut,_e),ee("click",Me,he),ee("click",gt,re),ee("keydown",R,k),P(se,V)}),P(e,Ze),at()}var bi=Symbol("path");function R1(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,r={};Array.isArray(e)&&function(s,i,l){if(s.length<i)s.forEach(l);else for(var c=i>1?(s.length-1)/(i-1):s.length,d=0;d<i;d++){var u=Math.floor(d*c);l(s[u],u,s)}}(e,o,s=>{en(s)?Ch(s,r,t):r[bi]=!0});var a=[];return bi in r&&a.push([]),Sh(r,[],a,t),a}function Ch(e,t,o){for(var r in e){var a=e[r],s=t[r]||(t[r]={});en(a)&&o?Ch(a,s,o):s[bi]===void 0&&(s[bi]=!0)}}function Sh(e,t,o,r){for(var a in e){var s=t.concat(a),i=e[a];i&&i[bi]===!0&&o.push(s),fo(i)&&r&&Sh(i,s,o,r)}}function _1(e,t,o,r,a,s){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=lo(o)?o.length:0,c=function(E,y){var S=Object.values(E);if(un(S))return y;var w=(_,I)=>_+I;return S.reduce(w)/S.length}(r,a),d=e-i,u=t+2*i,f=E=>r[E]||a,h=0,m=s;m<d&&h<l;)m+=f(h),h++;h>0&&(m-=f(--h));for(var g=h,b=0;b<u&&g<l;)b+=f(g),g++;for(var j=0,x=g;x<l;x++)j+=f(x);return{startIndex:h,endIndex:g,startHeight:m,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:lo(o)?o.slice(h,g):[]}}function Av(e,t,o,r){for(var{rowIndex:a}=Ko(e,t),s=0,i=0;i<a;i++)s+=o[i]||r;return s}function Ko(e,t){var[o,...r]=e,a=parseInt(o,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(s=>Lr(r,s))}}function Sa(e,t){var{rowIndex:o,columnIndex:r}=e;return[String(o),...t[r]]}function I1(e,t){var[o,r]=lm(e,i=>Tu(i.path[0])),a=cm(o,q1),s=um(a,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var d=function(u,f){var h=Ko(u.path,f);return h.columnIndex!==-1?h.columnIndex:-1}(c,t);d!==-1?(l.columns[d]===void 0&&(l.columns[d]=[]),l.columns[d].push(c)):l.row.push(c)}),l});return{root:r,rows:s}}function Cc(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(o=>rr(o.path)+" "+o.message).join(", "),severity:ar.warning}}function q1(e){return parseInt(e.path[0],10)}function T1(e,t,o){var r=t.some(a=>function(s,i,l){if(!s)return!1;if(i.op==="replace"){var c=gr(i.path),{rowIndex:d,columnIndex:u}=Ko(c,l),f=l.findIndex(h=>Nt(h,s.path));if(d!==-1&&u!==-1&&u!==f)return!1}return!0}(e,a,o));return r?void 0:e}function Pv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,o=[];return function r(a,s){fo(a)&&s.length<t&&Object.keys(a).forEach(i=>{r(a[i],s.concat(i))}),lo(a)&&o.push(s)}(e,[]),o}var $o=ho("jsoneditor:actions");function Oh(e){return uu.apply(this,arguments)}function uu(){return uu=tt(function*(e){var{json:t,selection:o,indentation:r,readOnly:a,parser:s,onPatch:i}=e;if(!a&&t!==void 0&&o&&Is(o)){var l=Yf(t,o,r,s);if(l!==void 0){$o("cut",{selection:o,clipboard:l,indentation:r}),yield id(l);var{operations:c,newSelection:d}=eh(t,o);i(c,(u,f)=>({state:f,selection:d}))}}}),uu.apply(this,arguments)}function Eh(e){return du.apply(this,arguments)}function du(){return du=tt(function*(e){var{json:t,selection:o,indentation:r,parser:a}=e,s=Yf(t,o,r,a);s!==void 0&&($o("copy",{clipboard:s,indentation:r}),yield id(s))}),du.apply(this,arguments)}function zh(e){var{clipboardText:t,json:o,selection:r,readOnly:a,parser:s,onPatch:i,onChangeText:l,openRepairModal:c}=e;if(!a)try{d(t)}catch{c(t,f=>{$o("repaired pasted text: ",f),d(f)})}function d(u){if(o!==void 0){var f=r||Dt([]),h=Zf(o,f,u,s);$o("paste",{pastedText:u,operations:h,ensureSelection:f}),i(h,(m,g)=>{var b=g;return h.filter(j=>(_p(j)||Eu(j))&&to(j.value)).forEach(j=>{var x=_r(o,j.path);b=Ia(m,b,x)}),{state:b}})}else $o("paste text",{pastedText:u}),l(t,(m,g)=>{if(m)return{state:Ia(m,g,[])}})}}function $h(e){var{json:t,text:o,selection:r,keepSelection:a,readOnly:s,onChange:i,onPatch:l}=e;if(!s&&r){var c=t!==void 0&&(vo(r)||rn(r))?Oo(r.path,r.path):r;if(un(Xe(r)))$o("remove root",{selection:r}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:o||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:d,newSelection:u}=eh(t,c);$o("remove",{operations:d,selection:r,newSelection:u}),l(d,(f,h)=>({state:h,selection:a?r:u}))}}}function D1(e){var{json:t,selection:o,columns:r,readOnly:a,onPatch:s}=e;if(!a&&t!==void 0&&o&&Is(o)){var{rowIndex:i,columnIndex:l}=Ko(Xe(o),r);$o("duplicate row",{rowIndex:i});var c=[String(i)];s(Gf(t,[c]),(d,u)=>({state:u,selection:Dt(Sa({rowIndex:i<t.length?i+1:i,columnIndex:l},r))}))}}function N1(e){var{json:t,selection:o,columns:r,readOnly:a,onPatch:s}=e;if(!a&&t!==void 0&&o&&Is(o)){var{rowIndex:i}=Ko(Xe(o),r);$o("insert before row",{rowIndex:i}),s(is(t,[String(i)],[{key:"",value:fo(t[0])?{}:""}]))}}function U1(e){var{json:t,selection:o,columns:r,readOnly:a,onPatch:s}=e;if(!a&&t!==void 0&&o&&Is(o)){var{rowIndex:i,columnIndex:l}=Ko(Xe(o),r);$o("insert after row",{rowIndex:i});var c=i+1,d=[String(c)],u=[{key:"",value:fo(t[0])?{}:""}];s(c<t.length?is(t,d,u):tu(t,[],u),(f,h)=>({state:h,selection:Dt(Sa({rowIndex:c,columnIndex:l},r))}))}}function B1(e){var{json:t,selection:o,columns:r,readOnly:a,onPatch:s}=e;if(!a&&t!==void 0&&o&&Is(o)){var{rowIndex:i,columnIndex:l}=Ko(Xe(o),r);$o("remove row",{rowIndex:i}),s(ml([[String(i)]]),(c,d)=>{var u=i<c.length?i:i>0?i-1:void 0,f=u!==void 0?Dt(Sa({rowIndex:u,columnIndex:l},r)):void 0;return $o("remove row new selection",{rowIndex:i,newRowIndex:u,newSelection:f}),{state:d,selection:f}})}}function Cl(e){var{insertType:t,selectInside:o,initialValue:r,json:a,selection:s,readOnly:i,parser:l,onPatch:c,onReplaceJson:d}=e;if(!i){var u=function(b,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&b!==void 0){var E=j?Jf(j):[],y=He(b,E);if(Array.isArray(y)&&!un(y)){var S=Ir(y);return to(S)?mm(S,w=>Array.isArray(w)?[]:en(w)?void 0:""):""}}return""}(a,s,t);if(a!==void 0){var f=l.stringify(u),h=Zf(a,s,f,l);$o("onInsert",{insertType:t,operations:h,newValue:u,data:f});var m=qt(h.filter(b=>b.op==="add"||b.op==="replace"));c(h,(b,j,x)=>{if(m){var E=_r(b,m.path);if(to(u))return{state:fr(b,j,E,Gu),selection:o?Wr(E):x};if(u===""){var y=un(E)?void 0:He(b,Lt(E));return{state:fr(b,j,E,Zc),selection:en(y)?ed(E,r):gl(E,r)}}}}),$o("after patch")}else{$o("onInsert",{insertType:t,newValue:u});var g=[];d(u,(b,j)=>({state:Ia(b,j,g),selection:to(u)?Wr(g):gl(g)}))}}}function Mh(e){return vu.apply(this,arguments)}function vu(){return vu=tt(function*(e){var{char:t,selectInside:o,json:r,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c,onSelect:d}=e;s||(vo(a)?d(ge(ge({},a),{},{edit:!0,initialValue:t})):t==="{"?Cl({insertType:"object",selectInside:o,initialValue:void 0,json:r,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):t==="["?Cl({insertType:"array",selectInside:o,initialValue:void 0,json:r,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):rn(a)&&r!==void 0?to(He(r,a.path))||d(ge(ge({},a),{},{edit:!0,initialValue:t})):($o("onInsertValueWithCharacter",{char:t}),yield function(u){return pu.apply(this,arguments)}({char:t,json:r,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c})))}),vu.apply(this,arguments)}function pu(){return pu=tt(function*(e){var{char:t,json:o,selection:r,readOnly:a,parser:s,onPatch:i,onReplaceJson:l}=e;a||Cl({insertType:"value",selectInside:!1,initialValue:t,json:o,selection:r,readOnly:a,parser:s,onPatch:i,onReplaceJson:l})}),pu.apply(this,arguments)}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-1vjn89h {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var F1=B('<div class="jse-json-preview svelte-1vjn89h"> </div>');function Ah(e,t){rt(t,!1);var o=M(),r=M(),a=p(t,"text",8),s=p(t,"json",8),i=p(t,"indentation",8),l=p(t,"parser",8);N(()=>($(s()),$(a())),()=>{v(o,s()!==void 0?{json:s()}:{text:a()||""})}),N(()=>(n(o),$(i()),$(l()),Xc),()=>{v(r,ui(Jc(n(o),i(),l()),Xc))}),Wt(),ct();var c=F1(),d=A(c);ne(()=>dt(d,n(r))),P(e,c),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var L1=B('<button type="button"><!> <!></button>');function Sc(e,t){rt(t,!1);var o=p(t,"item",8),r=p(t,"className",8,void 0),a=p(t,"onRequestClose",8);ct();var s=L1(),i=xe(()=>{var c;return"".concat((c=qs("jse-context-menu-button",r(),o().className))!==null&&c!==void 0?c:""," svelte-1idfykj")}),l=A(s);L(l,()=>o().icon,c=>{Ut(c,{get data(){return o().icon}})}),L(D(l,2),()=>o().text,c=>{var d=zo();ne(()=>dt(d,o().text)),P(c,d)}),ne(()=>{Wo(s,n(i)),Yt(s,"title",o().title),s.disabled=o().disabled||!1}),ee("click",s,c=>{a()(),o().onClick(c)}),P(e,s),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-11rxb2m {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) li:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown.jse-visible:where(.svelte-11rxb2m) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items.jse-visible:where(.svelte-11rxb2m) {
  display: block;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var V1=B('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>'),W1=B('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" class="jse-open-dropdown svelte-11rxb2m" data-type="jse-open-dropdown"><!></button> <div class="jse-dropdown-items svelte-11rxb2m"><ul class="svelte-11rxb2m"></ul></div></div>');ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var H1=B('<button type="button" slot="defaultItem"><!> </button>');function Oc(e,t){rt(t,!1);var o=M(),r=p(t,"item",8),a=p(t,"className",8,void 0),s=p(t,"onRequestClose",8);N(()=>($(r()),$(s())),()=>{v(o,r().items.map(i=>ge(ge({},i),{},{onClick:l=>{s()(),i.onClick(l)}})))}),Wt(),ct(),function(i,l){rt(l,!1);var c=M(void 0,!0),d=p(l,"items",25,()=>[]),u=p(l,"title",9,void 0),f=p(l,"width",9,"120px"),h=M(!1,!0);function m(){v(h,!1)}function g(y){Fr(y)==="Escape"&&(y.preventDefault(),v(h,!1))}Ao(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Lo(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)}),N(()=>$(d()),()=>{v(c,d().every(y=>y.disabled===!0))}),Wt(),ct(!0);var b=W1(),j=A(b);Wn(j,l,"defaultItem",{},null);var x=D(j,2);Ut(A(x),{data:ha});var E=D(x,2);Hn(A(E),5,d,no,(y,S)=>{var w=V1(),_=A(w),I=A(_);L(I,()=>n(S).icon,k=>{Ut(k,{get data(){return n(S).icon}})});var q=D(I);ne(()=>{var k,X;Yt(_,"title",n(S).title),_.disabled=n(S).disabled,Wo(_,"".concat((k=n(S).className)!==null&&k!==void 0?k:""," svelte-11rxb2m")),dt(q," ".concat((X=n(S).text)!==null&&X!==void 0?X:""))}),ee("click",_,k=>n(S).onClick(k)),P(y,w)}),ne(()=>{var y;Yt(b,"title",u()),x.disabled=n(c),We(x,"jse-visible",n(h)),Yt(E,"style","width: ".concat((y=f())!==null&&y!==void 0?y:"",";")),We(E,"jse-visible",n(h))}),ee("click",x,function(){var y=n(h);setTimeout(()=>v(h,!y))}),ee("click",b,m),P(i,b),at()}(e,{get width(){return r().width},get items(){return n(o)},$$slots:{defaultItem:(i,l)=>{var c=H1(),d=xe(()=>{var h;return"".concat((h=qs("jse-context-menu-button",a(),r().main.className))!==null&&h!==void 0?h:""," svelte-1idfykj")}),u=A(c);L(u,()=>r().main.icon,h=>{Ut(h,{get data(){return r().main.icon}})});var f=D(u);ne(()=>{var h;Wo(c,n(d)),Yt(c,"title",r().main.title),c.disabled=r().main.disabled||!1,dt(f," ".concat((h=r().main.text)!==null&&h!==void 0?h:""))}),ee("click",c,h=>{s()(),r().main.onClick(h)}),P(i,c)}}}),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-12z7bz1 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-label:where(.svelte-12z7bz1) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) div.jse-tip-icon:where(.svelte-12z7bz1) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:where(.svelte-12z7bz1):last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var J1=B('<div class="jse-separator svelte-12z7bz1"></div>'),K1=B('<div class="jse-label svelte-12z7bz1"> </div>'),Y1=B('<div class="jse-column svelte-12z7bz1"></div>'),X1=B('<div class="jse-separator svelte-12z7bz1"></div>'),Q1=B('<div class="jse-row svelte-12z7bz1"></div>'),G1=B('<div class="jse-separator svelte-12z7bz1"></div>'),Z1=B('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>'),ey=B('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');function Ph(e,t){rt(t,!1);var o=p(t,"items",9),r=p(t,"onRequestClose",9),a=p(t,"tip",9),s=M(void 0,!0);Ao(()=>{var u=Array.from(n(s).querySelectorAll("button")).find(f=>!f.disabled);u&&u.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(u){return console.error("Unknown type of context menu item",u),"???"}ct(!0);var c=ey(),d=A(c);Hn(d,1,o,no,(u,f)=>{var h=It();L(Te(h),()=>Gs(n(f)),m=>{Sc(m,{get item(){return n(f)},get onRequestClose(){return r()}})},m=>{var g=It();L(Te(g),()=>pc(n(f)),b=>{Oc(b,{get item(){return n(f)},get onRequestClose(){return r()}})},b=>{var j=It();L(Te(j),()=>ej(n(f)),x=>{var E=Q1();Hn(E,5,()=>n(f).items,no,(y,S)=>{var w=It();L(Te(w),()=>Gs(n(S)),_=>{Sc(_,{get item(){return n(S)},get onRequestClose(){return r()}})},_=>{var I=It();L(Te(I),()=>pc(n(S)),q=>{Oc(q,{get item(){return n(S)},get onRequestClose(){return r()}})},q=>{var k=It();L(Te(k),()=>tj(n(S)),X=>{var je=Y1();Hn(je,5,()=>n(S).items,no,(ae,fe)=>{var qe=It();L(Te(qe),()=>Gs(n(fe)),we=>{Sc(we,{className:"left",get item(){return n(fe)},get onRequestClose(){return r()}})},we=>{var ze=It();L(Te(ze),()=>pc(n(fe)),_e=>{Oc(_e,{className:"left",get item(){return n(fe)},get onRequestClose(){return r()}})},_e=>{var $e=It();L(Te($e),()=>Zi(n(fe)),he=>{P(he,J1())},he=>{var ce=It();L(Te(ce),()=>Z0(n(fe)),ie=>{var Ge=K1(),le=A(Ge);ne(()=>dt(le,n(fe).text)),P(ie,Ge)},ie=>{var Ge=zo();ne(()=>dt(Ge,l(n(fe)))),P(ie,Ge)},!0),P(he,ce)},!0),P(_e,$e)},!0),P(we,ze)}),P(ae,qe)}),P(X,je)},X=>{var je=It();L(Te(je),()=>Zi(n(S)),ae=>{P(ae,X1())},ae=>{var fe=zo();ne(()=>dt(fe,l(n(S)))),P(ae,fe)},!0),P(X,je)},!0),P(q,k)},!0),P(_,I)}),P(y,w)}),P(x,E)},x=>{var E=It();L(Te(E),()=>Zi(n(f)),y=>{P(y,G1())},y=>{var S=zo();ne(()=>dt(S,l(n(f)))),P(y,S)},!0),P(x,E)},!0),P(b,j)},!0),P(m,g)}),P(u,h)}),L(D(d,2),a,u=>{var f=Z1(),h=A(f),m=A(h);Ut(A(m),{data:bm});var g=A(D(m,2));ne(()=>dt(g,a())),P(u,f)}),On(c,u=>v(s,u),()=>n(s)),ee("keydown",c,function(u){var f=Fr(u),h=i[f];if(h&&u.target){u.preventDefault();var m=P0({allElements:Array.from(n(s).querySelectorAll("button:not([disabled])")),currentElement:u.target,direction:h,hasPrio:g=>g.getAttribute("data-type")!=="jse-open-dropdown"});m&&m.focus()}}),P(e,c),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-vrx1dr {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-vrx1dr .jse-hidden-input-label:where(.svelte-vrx1dr) .jse-hidden-input:where(.svelte-vrx1dr) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-vrx1dr {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-search-box-container:where(.svelte-vrx1dr) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading-space:where(.svelte-vrx1dr) {
  flex: 1;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading:where(.svelte-vrx1dr) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-search-box-background:where(.svelte-vrx1dr) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var ty=B("<!> <!>",1),ny=B('<div class="jse-search-box-background svelte-vrx1dr"></div>'),oy=B('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!>',1),ry=B('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"></label> <!>',1),ay=B('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>'),sy=B('<div role="tree" tabindex="-1" class="jse-tree-mode svelte-vrx1dr"><!> <!> <!></div> <!> <!>',1);function fu(e,t){rt(t,!1);var o=M(void 0,!0),r=ho("jsoneditor:TreeMode"),a=typeof window>"u";r("isSSR:",a);var s=xs(),i=xs(),{openAbsolutePopup:l,closeAbsolutePopup:c}=xa("absolute-popup"),d=M(void 0,!0),u=M(void 0,!0),f=M(void 0,!0),h=!1,m=hh(),g=p(t,"readOnly",9),b=p(t,"externalContent",9),j=p(t,"externalSelection",9),x=p(t,"mainMenuBar",9),E=p(t,"navigationBar",9),y=p(t,"escapeControlCharacters",9),S=p(t,"escapeUnicodeCharacters",9),w=p(t,"parser",9),_=p(t,"parseMemoizeOne",9),I=p(t,"validator",9),q=p(t,"validationParser",9),k=p(t,"pathParser",9),X=p(t,"indentation",9),je=p(t,"onError",9),ae=p(t,"onChange",9),fe=p(t,"onChangeMode",9),qe=p(t,"onSelect",9),we=p(t,"onRenderValue",9),ze=p(t,"onRenderMenu",9),_e=p(t,"onRenderContextMenu",9),$e=p(t,"onClassName",9),he=p(t,"onFocus",9),ce=p(t,"onBlur",9),ie=p(t,"onSortModal",9),Ge=p(t,"onTransformModal",9),le=p(t,"onJSONEditorModal",9),de=!1,C=M(!1,!0),oe=M(void 0,!0);ad({onMount:Ao,onDestroy:Lo,getWindow:()=>zi(n(f)),hasFocus:()=>de&&document.hasFocus()||Bu(n(f)),onFocus:()=>{h=!0,he()&&he()()},onBlur:()=>{h=!1,ce()&&ce()()}});var T=M(void 0,!0),re=M(void 0,!0),Ze=void 0,se=!1,V=M(Gc({json:n(T)}),!0),R=M(void 0,!0);function ve(O){v(R,O)}var vt,Be=M(void 0,!0),Ae=M(void 0,!0),K=M(void 0,!0),me=M(!1,!0),Ie=M(!1,!0);function ut(O){v(K,(vt=O)?nh(n(T),vt.items):void 0)}function Me(O){return gt.apply(this,arguments)}function gt(){return(gt=tt(function*(O){v(V,fr(n(T),n(V),O,Zc)),yield Qt(O)})).apply(this,arguments)}function Se(){v(me,!1),v(Ie,!1),Z()}function Oe(O){r("select validation error",O),v(R,Dt(O.path)),Qt(O.path)}var Qe=gh({onChange:O=>{v(jt,O)}}),jt=M(Qe.getState(),!0);function zt(O){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:uv;r("expand"),v(V,fr(n(T),n(V),O,F))}function Fe(O,F){v(V,sv(n(T),n(V),O,F)),n(R)&&function(G,ye){return Lr(Xe(G),ye)&&(Xe(G).length>ye.length||yo(G))}(n(R),O)&&v(R,void 0)}var W=M(!1,!0),Ot=M([],!0),mt=M(void 0,!0),Tn=oi(mh);function $n(O,F,G,ye){ls(()=>{var be;try{be=Tn(O,F,G,ye)}catch(ue){be=[{path:[],message:"Failed to validate: "+ue.message,severity:ar.warning}]}Nt(be,n(Ot))||(r("validationErrors changed:",be),v(Ot,be),v(mt,function(ue,Ne){var pe;return Ne.forEach(Re=>{pe=zv(ue,pe,Re.path,(st,ft)=>ge(ge({},ft),{},{validationError:Re}))}),Ne.forEach(Re=>{for(var st=Re.path;st.length>0;)st=Lt(st),pe=zv(ue,pe,st,(ft,lt)=>lt.validationError?lt:ge(ge({},lt),{},{validationError:{isChildError:!0,path:st,message:"Contains invalid data",severity:ar.warning}}))}),pe}(O,n(Ot))))},be=>r("validationErrors updated in ".concat(be," ms")))}function jn(){return r("validate"),Ze?{parseError:Ze,isRepairable:!1}:($n(n(T),I(),w(),q()),un(n(Ot))?void 0:{validationErrors:n(Ot)})}function Qn(){return n(T)}function gn(){return n(V)}function Dn(){return n(R)}function Jn(O){r("applyExternalContent",{updatedContent:O}),ci(O)?function(F){if(F!==void 0){var G=!Nt(n(T),F);if(r("update external json",{isChanged:G,currentlyText:n(T)===void 0}),!!G){var ye={documentState:n(V),selection:n(R),json:n(T),text:n(re),textIsRepaired:n(W)};v(T,F),v(V,No(F,n(V))),$t(n(T)),v(re,void 0),v(W,!1),Ze=void 0,Bt(n(T)),sn(ye)}}}(O.json):li(O)&&function(F){if(!(F===void 0||ci(b()))){var G=F!==n(re);if(r("update external text",{isChanged:G}),!!G){var ye={documentState:n(V),selection:n(R),json:n(T),text:n(re),textIsRepaired:n(W)};try{v(T,_()(F)),v(V,No(n(T),n(V))),$t(n(T)),v(re,F),v(W,!1),Ze=void 0}catch(be){try{v(T,_()(mr(F))),v(V,No(n(T),n(V))),$t(n(T)),v(re,F),v(W,!0),Ze=void 0,Bt(n(T))}catch{v(T,void 0),v(V,void 0),v(re,b().text),v(W,!1),Ze=n(re)!==void 0&&n(re)!==""?ks(n(re),be.message||String(be)):void 0}}Bt(n(T)),sn(ye)}}}(O.text)}function $t(O){se||(se=!0,v(V,Ia(O,n(V),[])))}function Bt(O){n(R)&&(sa(O,za(n(R)))&&sa(O,Xe(n(R)))||(r("clearing selection: path does not exist anymore",n(R)),v(R,Xa(O,n(V)))))}function sn(O){if(O.json!==void 0||O.text!==void 0){var F=n(T)!==void 0&&O.json!==void 0;Qe.add({undo:{patch:F?[{op:"replace",path:"",value:O.json}]:void 0,json:O.json,text:O.text,documentState:O.documentState,textIsRepaired:O.textIsRepaired,selection:hr(O.selection),sortedColumn:void 0},redo:{patch:F?[{op:"replace",path:"",value:n(T)}]:void 0,json:n(T),text:n(re),documentState:n(V),textIsRepaired:n(W),selection:hr(n(R)),sortedColumn:void 0}})}}function Mt(O,F){var G;if(r("patch",O,F),n(T)===void 0)throw new Error("Cannot apply patch: no JSON");var ye=n(T),be={json:void 0,text:n(re),documentState:n(V),selection:hr(n(R)),textIsRepaired:n(W),sortedColumn:void 0},ue=th(n(T),O),Ne=Vf(n(T),n(V),O),pe=(G=Ss(n(T),O))!==null&&G!==void 0?G:n(R),Re=typeof F=="function"?F(Ne.json,Ne.documentState,pe):void 0;return v(T,(Re==null?void 0:Re.json)!==void 0?Re.json:Ne.json),v(V,(Re==null?void 0:Re.state)!==void 0?Re.state:Ne.documentState),v(R,(Re==null?void 0:Re.selection)!==void 0?Re.selection:pe),v(re,void 0),v(W,!1),v(Ae,void 0),Ze=void 0,Bt(n(T)),Qe.add({undo:ge({patch:ue},be),redo:{patch:O,json:void 0,text:n(re),documentState:n(V),selection:hr(n(R)),sortedColumn:void 0,textIsRepaired:n(W)}}),{json:n(T),previousJson:ye,undo:ue,redo:O}}function En(){!g()&&n(R)&&v(R,ed(Xe(n(R))))}function Nn(){if(!g()&&n(R)){var O=Xe(n(R)),F=He(n(T),O);to(F)?function(G,ye){r("openJSONEditorModal",{path:G,value:ye}),de=!0,le()({content:{json:ye},path:G,onPatch:n(yt).onPatch,onClose:()=>{de=!1,setTimeout(Z)}})}(O,F):v(R,gl(O))}}function co(){if(!g()&&rn(n(R))){var O=Xe(n(R)),F=xt(O),G=He(n(T),O),ye=!Dr(n(T),n(V),O),be=ye?String(G):Rs(String(G),w());r("handleToggleEnforceString",{enforceString:ye,value:G,updatedValue:be}),Je([{op:"replace",path:F,value:be}],(ue,Ne)=>({state:Ll(n(T),Ne,O,{type:"value",enforceString:ye})}))}}function Xt(){return n(W)&&n(T)!==void 0&&Pe(n(T)),n(T)!==void 0?{json:n(T)}:{text:n(re)||""}}function Pt(){return mn.apply(this,arguments)}function mn(){return mn=tt(function*(){var O=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Oh({json:n(T),selection:n(R),indentation:O?X():void 0,readOnly:g(),parser:w(),onPatch:Je})}),mn.apply(this,arguments)}function Un(){return hn.apply(this,arguments)}function hn(){return hn=tt(function*(){var O=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(T)!==void 0&&(yield Eh({json:n(T),selection:n(R),indentation:O?X():void 0,parser:w()}))}),hn.apply(this,arguments)}function ao(O){var F;O.preventDefault();var G=(F=O.clipboardData)===null||F===void 0?void 0:F.getData("text/plain");G!==void 0&&zh({clipboardText:G,json:n(T),selection:n(R),readOnly:g(),parser:w(),onPatch:Je,onChangeText:pt,openRepairModal:Kn})}function Mn(){v(C,!0)}function Kn(O,F){v(oe,{text:O,onParse:G=>Bl(G,ye=>Ei(ye,w())),onRepair:Af,onApply:F,onClose:Z})}function xn(){$h({json:n(T),text:n(re),selection:n(R),keepSelection:!1,readOnly:g(),onChange:ae(),onPatch:Je})}function Gn(){!g()&&n(T)!==void 0&&n(R)&&Is&&!un(Xe(n(R)))&&(r("duplicate",{selection:n(R)}),Je(Gf(n(T),pa(n(T),n(R)))))}function oo(){if(!g()&&n(R)&&(Cn(n(R))||rn(n(R)))&&!un(Xe(n(R)))){r("extract",{selection:n(R)});var O=function(F,G){if(rn(G))return[{op:"move",from:xt(G.path),path:""}];if(!Cn(G))throw new Error("Cannot create extract operations: parent must be an Object or Array");var ye=Lt(G.focusPath),be=He(F,ye);if(lo(be)){var ue=pa(F,G).map(pe=>{var Re=jo(qt(pe));return be[Re]});return[{op:"replace",path:"",value:ue}]}if(fo(be)){var Ne={};return pa(F,G).forEach(pe=>{var Re=String(qt(pe));Ne[Re]=be[Re]}),[{op:"replace",path:"",value:Ne}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(G))}(n(T),n(R));Je(O,(F,G)=>{if(to(F))return{state:hc(F,G,[])}})}}function Bn(O){Cl({insertType:O,selectInside:!0,initialValue:void 0,json:n(T),selection:n(R),readOnly:g(),parser:w(),onPatch:Je,onReplaceJson:Pe})}function te(O){vo(n(R))&&v(R,Dt(n(R).path)),n(R)||v(R,Xa(n(T),n(V))),Bn(O)}function Ue(O){if(!g()&&n(R))if(Li(n(R)))try{var F=za(n(R)),G=He(n(T),F),ye=function(ue,Ne,pe){if(Ne==="array"){if(Array.isArray(ue))return ue;if(en(ue))return Xd(ue);if(typeof ue=="string")try{var Re=pe.parse(ue);if(Array.isArray(Re))return Re;if(en(Re))return Xd(Re)}catch{return[ue]}return[ue]}if(Ne==="object"){if(Array.isArray(ue))return Yd(ue);if(en(ue))return ue;if(typeof ue=="string")try{var st=pe.parse(ue);if(en(st))return st;if(Array.isArray(st))return Yd(st)}catch{return{value:ue}}return{value:ue}}if(Ne==="value")return to(ue)?pe.stringify(ue):ue;throw new Error("Cannot convert ".concat(Du(ue,pe)," to ").concat(Ne))}(G,O,w());if(ye===G)return;var be=[{op:"replace",path:xt(F),value:ye}];r("handleConvert",{selection:n(R),path:F,type:O,operations:be}),Je(be,(ue,Ne)=>({state:n(R)?Ia(ue,Ne,Xe(n(R))):n(V)}))}catch(ue){je()(ue)}else je()(new Error("Cannot convert current selection to ".concat(O)))}function wt(){if(n(R)){var O=dv(n(T),n(V),n(R),!1),F=Lt(Xe(n(R)));O&&!un(Xe(O))&&Nt(F,Lt(Xe(O)))?v(R,Nr(Xe(O))):v(R,Wr(F)),r("insert before",{selection:n(R),selectionBefore:O,parentPath:F}),eo().then(()=>uo())}}function Ht(){if(n(R)){var O=fa(n(T),n(R));r("insert after",O),v(R,Nr(O)),eo().then(()=>uo())}}function kt(O){return nn.apply(this,arguments)}function nn(){return(nn=tt(function*(O){yield Mh({char:O,selectInside:!0,json:n(T),selection:n(R),readOnly:g(),parser:w(),onPatch:Je,onReplaceJson:Pe,onSelect:ve})})).apply(this,arguments)}function Vt(){if(!g()&&Qe.getState().canUndo){var O=Qe.undo();if(O){var F={json:n(T),text:n(re)};v(T,O.undo.patch?br(n(T),O.undo.patch):O.undo.json),v(V,O.undo.documentState),v(R,O.undo.selection),v(re,O.undo.text),v(W,O.undo.textIsRepaired),Ze=void 0,r("undo",{item:O,json:n(T),documentState:n(V),selection:n(R)}),ke(F,O.undo.patch&&O.redo.patch?{json:n(T),previousJson:F.json,redo:O.undo.patch,undo:O.redo.patch}:void 0),Z(),n(R)&&Qt(Xe(n(R)),!1)}}}function Ft(){if(!g()&&Qe.getState().canRedo){var O=Qe.redo();if(O){var F={json:n(T),text:n(re)};v(T,O.redo.patch?br(n(T),O.redo.patch):O.redo.json),v(V,O.redo.documentState),v(R,O.redo.selection),v(re,O.redo.text),v(W,O.redo.textIsRepaired),Ze=void 0,r("redo",{item:O,json:n(T),documentState:n(V),selection:n(R)}),ke(F,O.undo.patch&&O.redo.patch?{json:n(T),previousJson:F.json,redo:O.redo.patch,undo:O.undo.patch}:void 0),Z(),n(R)&&Qt(Xe(n(R)),!1)}}}function Yn(O){var F;g()||n(T)===void 0||(de=!0,ie()({id:s,json:n(T),rootPath:O,onSort:(F=tt(function*(G){var{operations:ye}=G;r("onSort",O,ye),Je(ye,(be,ue)=>({state:hc(be,ue,O),selection:Dt(O)}))}),function(G){return F.apply(this,arguments)}),onClose:()=>{de=!1,setTimeout(Z)}}))}function zn(){n(R)&&Yn(pv(n(T),n(R)))}function Fn(){Yn([])}function yn(O){if(n(T)!==void 0){var{id:F,onTransform:G,onClose:ye}=O,be=O.rootPath||[];de=!0,Ge()({id:F||i,json:n(T),rootPath:be,onTransform:ue=>{G?G({operations:ue,json:n(T),transformedJson:br(n(T),ue)}):(r("onTransform",be,ue),Je(ue,(Ne,pe)=>({state:hc(Ne,pe,be),selection:Dt(be)})))},onClose:()=>{de=!1,setTimeout(Z),ye&&ye()}})}}function Q(){n(R)&&yn({rootPath:pv(n(T),n(R))})}function Rt(){yn({rootPath:[]})}function Qt(O){return vn.apply(this,arguments)}function vn(){return vn=tt(function*(O){var F=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];v(V,fr(n(T),n(V),O,Zc)),yield eo();var G=U(O);if(r("scrollTo",{path:O,elem:G,refContents:n(d)}),!G||!n(d))return Promise.resolve();var ye=n(d).getBoundingClientRect(),be=G.getBoundingClientRect();if(!F&&be.bottom>ye.top&&be.top<ye.bottom)return Promise.resolve();var ue=-ye.height/4;return new Promise(Ne=>{m(G,{container:n(d),offset:ue,duration:300,callback:()=>Ne()})})}),vn.apply(this,arguments)}function U(O){var F,G;return(F=(G=n(d))===null||G===void 0?void 0:G.querySelector('div[data-path="'.concat(Kc(O),'"]')))!==null&&F!==void 0?F:void 0}function J(O){var F=U(O);if(F&&n(d)){var G=n(d).getBoundingClientRect(),ye=F.getBoundingClientRect(),be=to(He(n(T),O))?20:ye.height;ye.top<G.top+20?m(F,{container:n(d),offset:-20,duration:0}):ye.top+be>G.bottom-20&&m(F,{container:n(d),offset:-(G.height-be-20),duration:0})}}function ke(O,F){if(O.json!==void 0||(O==null?void 0:O.text)!==void 0){if(n(re)!==void 0){var G,ye={text:n(re),json:void 0};(G=ae())===null||G===void 0||G(ye,O,{contentErrors:jn(),patchResult:F})}else if(n(T)!==void 0){var be,ue={text:void 0,json:n(T)};(be=ae())===null||be===void 0||be(ue,O,{contentErrors:jn(),patchResult:F})}}}function Je(O,F){r("handlePatch",O,F);var G={json:n(T),text:n(re)},ye=Mt(O,F);return ke(G,ye),ye}function Pe(O,F){var G={json:n(T),text:n(re)},ye={documentState:n(V),selection:n(R),json:n(T),text:n(re),textIsRepaired:n(W)},be=fr(n(T),No(O,n(V)),[],Qs),ue=typeof F=="function"?F(O,be,n(R)):void 0;v(T,(ue==null?void 0:ue.json)!==void 0?ue.json:O),v(V,(ue==null?void 0:ue.state)!==void 0?ue.state:be),v(R,(ue==null?void 0:ue.selection)!==void 0?ue.selection:n(R)),v(re,void 0),v(W,!1),Ze=void 0,Bt(n(T)),sn(ye),ke(G,void 0)}function pt(O,F){r("handleChangeText");var G={json:n(T),text:n(re)},ye={documentState:n(V),selection:n(R),json:n(T),text:n(re),textIsRepaired:n(W)};try{v(T,_()(O)),v(V,fr(n(T),No(n(T),n(V)),[],Qs)),v(re,void 0),v(W,!1),Ze=void 0}catch(ue){try{v(T,_()(mr(O))),v(V,fr(n(T),No(n(T),n(V)),[],Qs)),v(re,O),v(W,!0),Ze=void 0}catch{v(T,void 0),v(V,Gc({json:n(T),expand:Qs})),v(re,O),v(W,!1),Ze=n(re)!==""?ks(n(re),ue.message||String(ue)):void 0}}if(typeof F=="function"){var be=F(n(T),n(V),n(R));v(T,(be==null?void 0:be.json)!==void 0?be.json:n(T)),v(V,(be==null?void 0:be.state)!==void 0?be.state:n(V)),v(R,(be==null?void 0:be.selection)!==void 0?be.selection:n(R))}Bt(n(T)),sn(ye),ke(G,void 0)}function Ve(O,F){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2];r("handleExpand",{path:O,expanded:F,recursive:G}),F?zt(O,G?Gu:uv):Fe(O,G),Z()}function _t(){Ve([],!0,!0)}function Gt(){Ve([],!1,!0)}function it(O){r("openFind",{findAndReplace:O}),v(me,!1),v(Ie,!1),eo().then(()=>{v(me,!0),v(Ie,O)})}function Jt(O,F){r("handleExpandSection",O,F),v(V,function(G,ye,be,ue){return Cs(G,ye,be,(Ne,pe)=>{if(!wo(pe))return pe;var Re=Bf(pe.visibleSections.concat(ue));return ge(ge({},pe),{},{visibleSections:Re})})}(n(T),n(V),O,F))}function so(O){r("pasted json as text",O),v(Ae,O)}function An(O){var F,{anchor:G,left:ye,top:be,width:ue,height:Ne,offsetTop:pe,offsetLeft:Re,showTip:st}=O,ft=function(Rn){var{json:pn,documentState:At,selection:Ke,readOnly:Et,onEditKey:et,onEditValue:Tt,onToggleEnforceString:Kt,onCut:fn,onCopy:_n,onPaste:xo,onRemove:Io,onDuplicate:wa,onExtract:Va,onInsertBefore:ko,onInsert:qo,onConvert:Kr,onInsertAfter:Yr,onSort:Zn,onTransform:wn}=Rn,Qo=pn!==void 0,Wa=!!Ke,Xr=!!Ke&&un(Xe(Ke)),zr=Ke?He(pn,Xe(Ke)):void 0,Ri=Array.isArray(zr)?"Edit array":en(zr)?"Edit object":"Edit value",Ho=Qo&&(Cn(Ke)||vo(Ke)||rn(Ke)),_i=Ke&&!Xr?He(pn,Lt(Xe(Ke))):void 0,Qr=!Et&&Qo&&hl(Ke)&&!Xr&&!Array.isArray(_i),Ts=!Et&&Qo&&Ke!==void 0&&hl(Ke),Ds=Ts&&!to(zr),tc=!Et&&Ho,nc=Ho,dg=!Et&&Wa,vg=!Et&&Qo&&Ho&&!Xr,pg=!Et&&Qo&&Ke!==void 0&&(Cn(Ke)||rn(Ke))&&!Xr,Gr=Ho,Ns=Gr?"Convert to:":"Insert:",fg=!Et&&(yo(Ke)&&Array.isArray(zr)||Yo(Ke)&&Array.isArray(_i)),hg=!Et&&(Gr?Li(Ke)&&!en(zr):Wa),gg=!Et&&(Gr?Li(Ke)&&!Array.isArray(zr):Wa),mg=!Et&&(Gr?Li(Ke)&&to(zr):Wa),bg=Ke!==void 0&&Dr(pn,At,Xe(Ke));function Ii(oc){Ho?oc!=="structure"&&Kr(oc):qo(oc)}return[{type:"row",items:[{type:"button",onClick:()=>et(),icon:cs,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Qr},{type:"dropdown-button",main:{type:"button",onClick:()=>Tt(),icon:cs,text:Ri,title:"Edit the value (Double-click on the value)",disabled:!Ts},width:"11em",items:[{type:"button",icon:cs,text:Ri,title:"Edit the value (Double-click on the value)",onClick:()=>Tt(),disabled:!Ts},{type:"button",icon:bg?$p:Mp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Kt(),disabled:!Ds}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>fn(!0),icon:us,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!tc},width:"10em",items:[{type:"button",icon:us,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>fn(!0),disabled:!tc},{type:"button",icon:us,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>fn(!1),disabled:!tc}]},{type:"dropdown-button",main:{type:"button",onClick:()=>_n(!0),icon:aa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!nc},width:"12em",items:[{type:"button",icon:aa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>_n(!0),disabled:!nc},{type:"button",icon:aa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>_n(!1),disabled:!nc}]},{type:"button",onClick:()=>xo(),icon:Ap,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!dg}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>wa(),icon:Pp,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!vg},{type:"button",onClick:()=>Va(),icon:dm,text:"Extract",title:"Extract selected contents",disabled:!pg},{type:"button",onClick:()=>Zn(),icon:sl,text:"Sort",title:"Sort array or object contents",disabled:Et||!Ho},{type:"button",onClick:()=>wn(),icon:il,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:Et||!Ho},{type:"button",onClick:()=>Io(),icon:Rc,text:"Remove",title:"Remove selected contents (Delete)",disabled:Et||!Ho}]},{type:"column",items:[{type:"label",text:Ns},{type:"button",onClick:()=>Ii("structure"),icon:Gr?qi:os,text:"Structure",title:Ns+" structure like the first item in the array",disabled:!fg},{type:"button",onClick:()=>Ii("object"),icon:Gr?qi:os,text:"Object",title:Ns+" object",disabled:!hg},{type:"button",onClick:()=>Ii("array"),icon:Gr?qi:os,text:"Array",title:Ns+" array",disabled:!gg},{type:"button",onClick:()=>Ii("value"),icon:Gr?qi:os,text:"Value",title:Ns+" value",disabled:!mg}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>ko(),icon:vm,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:Et||!Ho||Xr},{type:"button",onClick:()=>Yr(),icon:pm,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:Et||!Ho||Xr}]}]}({json:n(T),documentState:n(V),selection:n(R),readOnly:g(),onEditKey:En,onEditValue:Nn,onToggleEnforceString:co,onCut:Pt,onCopy:Un,onPaste:Mn,onRemove:xn,onDuplicate:Gn,onExtract:oo,onInsertBefore:wt,onInsert:te,onInsertAfter:Ht,onConvert:Ue,onSort:zn,onTransform:Q}),lt=(F=_e()(ft))!==null&&F!==void 0?F:ft;if(lt!==!1){var Ye={left:ye,top:be,offsetTop:pe,offsetLeft:Re,width:ue,height:Ne,anchor:G,closeOnOuterClick:!0,onClose:()=>{de=!1,Z()}};de=!0;var cn=l(Ph,{tip:st?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:lt,onRequestClose:()=>c(cn)},Ye)}}function uo(O){if(!Mo(n(R)))if(O&&(O.stopPropagation(),O.preventDefault()),O&&O.type==="contextmenu"&&O.target!==n(u))An({left:O.clientX,top:O.clientY,width:Pr,height:Ar,showTip:!1});else{var F,G=(F=n(d))===null||F===void 0?void 0:F.querySelector(".jse-context-menu-pointer.jse-selected");if(G)An({anchor:G,offsetTop:2,width:Pr,height:Ar,showTip:!1});else{var ye,be=(ye=n(d))===null||ye===void 0?void 0:ye.getBoundingClientRect();be&&An({top:be.top+2,left:be.left+2,width:Pr,height:Ar,showTip:!1})}}}function ro(O){An({anchor:Nf(O.target,"BUTTON"),offsetTop:0,width:Pr,height:Ar,showTip:!0})}function ln(){return Pn.apply(this,arguments)}function Pn(){return(Pn=tt(function*(){if(r("apply pasted json",n(Ae)),n(Ae)){var{onPasteAsJson:O}=n(Ae);v(Ae,void 0),O(),setTimeout(Z)}})).apply(this,arguments)}function po(){r("clear pasted json"),v(Ae,void 0),Z()}function z(){fe()(io.text)}function Y(O){v(R,O),Z(),Qt(Xe(O))}function Z(){r("focus"),n(u)&&(n(u).focus(),n(u).select())}function Ee(O){return function(F,G,ye){var be=Lt(ye),ue=[qt(ye)],Ne=He(F,be),pe=Ne?fc(Ne,G,ue):void 0;return pe?Dt(be.concat(pe)):Nr(ye)}(n(T),n(V),O)}function Ce(O){n(o)&&n(o).onDrag(O)}function De(){n(o)&&n(o).onDragEnd()}var yt=M(void 0,!0);N(()=>n(R),()=>{var O;O=n(R),Nt(O,j())||(r("onSelect",O),qe()(O))}),N(()=>($(y()),$(S())),()=>{v(Be,Nu({escapeControlCharacters:y(),escapeUnicodeCharacters:S()}))}),N(()=>n(me),()=>{(function(O){n(d)&&O&&n(d).scrollTop===0&&(Uo(d,n(d).style.overflowAnchor="none"),Uo(d,n(d).scrollTop+=Xs),setTimeout(()=>{n(d)&&Uo(d,n(d).style.overflowAnchor="")}))})(n(me))}),N(()=>$(b()),()=>{Jn(b())}),N(()=>$(j()),()=>{(function(O){Nt(n(R),O)||(r("applyExternalSelection",{selection:n(R),externalSelection:O}),Zu(O)&&v(R,O))})(j())}),N(()=>(n(T),$(I()),$(w()),$(q())),()=>{$n(n(T),I(),w(),q())}),N(()=>(n(d),Ev),()=>{v(o,n(d)?Ev(n(d)):void 0)}),N(()=>($(g()),$(w()),n(Be),$(we()),$($e())),()=>{v(yt,{mode:io.tree,readOnly:g(),parser:w(),normalization:n(Be),getJson:Qn,getDocumentState:gn,getSelection:Dn,findElement:U,findNextInside:Ee,focus:Z,onPatch:Je,onInsert:Bn,onExpand:Ve,onSelect:ve,onFind:it,onExpandSection:Jt,onPasteJson:so,onRenderValue:we(),onContextMenu:An,onClassName:$e()||(()=>{}),onDrag:Ce,onDragEnd:De})}),N(()=>n(yt),()=>{r("context changed",n(yt))}),Wt(),ct(!0);var nt=sy();ee("mousedown",Tr,function(O){!_s(O.target,F=>F===n(f))&&Mo(n(R))&&(r("click outside the editor, exit edit mode"),v(R,hr(n(R))),h&&n(u)&&(n(u).focus(),n(u).blur()),r("blur (outside editor)"),n(u)&&n(u).blur())});var Ct=Te(nt),Le=A(Ct);L(Le,x,O=>{(function(F,G){rt(G,!1);var ye=M(void 0,!0),be=M(void 0,!0),ue=M(void 0,!0),Ne=p(G,"json",9),pe=p(G,"selection",9),Re=p(G,"readOnly",9),st=p(G,"showSearch",13,!1),ft=p(G,"historyState",9),lt=p(G,"onExpandAll",9),Ye=p(G,"onCollapseAll",9),cn=p(G,"onUndo",9),Rn=p(G,"onRedo",9),pn=p(G,"onSort",9),At=p(G,"onTransform",9),Ke=p(G,"onContextMenu",9),Et=p(G,"onCopy",9),et=p(G,"onRenderMenu",9);function Tt(){st(!st())}var Kt=M(void 0,!0),fn=M(void 0,!0),_n=M(void 0,!0),xo=M(void 0,!0);N(()=>$(Ne()),()=>{v(ye,Ne()!==void 0)}),N(()=>(n(ye),$(pe()),rn),()=>{v(be,n(ye)&&(Cn(pe())||vo(pe())||rn(pe())))}),N(()=>($(lt()),$(Ne())),()=>{v(Kt,{type:"button",icon:v1,title:"Expand all",className:"jse-expand-all",onClick:lt(),disabled:!to(Ne())})}),N(()=>($(Ye()),$(Ne())),()=>{v(fn,{type:"button",icon:p1,title:"Collapse all",className:"jse-collapse-all",onClick:Ye(),disabled:!to(Ne())})}),N(()=>$(Ne()),()=>{v(_n,{type:"button",icon:Al,title:"Search (Ctrl+F)",className:"jse-search",onClick:Tt,disabled:Ne()===void 0})}),N(()=>($(Re()),n(Kt),n(fn),$(pn()),$(Ne()),$(At()),n(_n),$(Ke()),$(cn()),$(ft()),$(Rn()),$(Et()),n(be)),()=>{v(xo,Re()?[n(Kt),n(fn),{type:"separator"},{type:"button",icon:aa,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:Et(),disabled:!n(be)},{type:"separator"},n(_n),{type:"space"}]:[n(Kt),n(fn),{type:"separator"},{type:"button",icon:sl,title:"Sort",className:"jse-sort",onClick:pn(),disabled:Re()||Ne()===void 0},{type:"button",icon:il,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:At(),disabled:Re()||Ne()===void 0},n(_n),{type:"button",icon:Ep,title:Vu,className:"jse-contextmenu",onClick:Ke()},{type:"separator"},{type:"button",icon:Cu,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:cn(),disabled:!ft().canUndo},{type:"button",icon:Su,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Rn(),disabled:!ft().canRedo},{type:"space"}])}),N(()=>($(et()),n(xo)),()=>{v(ue,et()(n(xo))||n(xo))}),Wt(),ct(!0),Kl(F,{get items(){return n(ue)}}),at()})(O,{get json(){return n(T)},get selection(){return n(R)},get readOnly(){return g()},get historyState(){return n(jt)},get showSearch(){return n(me)},set showSearch(F){v(me,F)},onExpandAll:_t,onCollapseAll:Gt,onUndo:Vt,onRedo:Ft,onSort:Fn,onTransform:Rt,onContextMenu:ro,onCopy:Un,get onRenderMenu(){return ze()},$$legacy:!0})});var Zt=D(Le,2);L(Zt,E,O=>{$1(O,{get json(){return n(T)},get selection(){return n(R)},onSelect:Y,get onError(){return je()},get pathParser(){return k()}})}),L(D(Zt,2),()=>!a,O=>{var F=ry(),G=Te(F),ye=A(G);ye.readOnly=!0,On(ye,be=>v(u,be),()=>n(u)),L(D(G,2),()=>n(T)===void 0,be=>{var ue=It();L(Te(ue),()=>n(re)===""||n(re)===void 0,Ne=>{(function(pe,Re){rt(Re,!1);var st=p(Re,"readOnly",9),ft=p(Re,"onCreateArray",9),lt=p(Re,"onCreateObject",9),Ye=p(Re,"onClick",9);ct(!0);var cn=g1(),Rn=D(A(cn),2);L(D(A(Rn),2),()=>!st(),pn=>{var At=h1(),Ke=D(Te(At),2);Yt(Ke,"title","Create an empty JSON object (press '{')");var Et=D(Ke,2);Yt(Et,"title","Create an empty JSON array (press '[')"),ee("click",Ke,er(()=>lt()())),ee("click",Et,er(()=>ft()())),P(pn,At)}),ee("click",cn,()=>Ye()()),P(pe,cn),at()})(Ne,{get readOnly(){return g()},onCreateObject:()=>{Z(),kt("{")},onCreateArray:()=>{Z(),kt("[")},onClick:()=>{Z()}})},Ne=>{var pe=ty(),Re=Te(pe),st=xe(()=>g()?[]:[{icon:ll,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:z}]);ur(Re,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(st)}}),Ah(D(Re,2),{get text(){return n(re)},get json(){return n(T)},get indentation(){return X()},get parser(){return w()}}),P(Ne,pe)}),P(be,ue)},be=>{var ue=oy(),Ne=Te(ue);kh(A(Ne),{get json(){return n(T)},get documentState(){return n(V)},get parser(){return w()},get showSearch(){return n(me)},get showReplace(){return n(Ie)},get readOnly(){return g()},columns:void 0,onSearch:ut,onFocus:Me,onPatch:Je,onClose:Se});var pe=D(Ne,2);Yt(pe,"data-jsoneditor-scrollable-contents",!0);var Re=A(pe);L(Re,()=>n(me),lt=>{P(lt,ny())}),lu(D(Re,2),{get value(){return n(T)},pointer:"",get state(){return n(V)},get validationErrors(){return n(mt)},get searchResults(){return n(K)},get selection(){return n(R)},get context(){return n(yt)},onDragSelectionStart:mo}),On(pe,lt=>v(d,lt),()=>n(d));var st=D(pe,2);L(st,()=>n(Ae),lt=>{var Ye=xe(()=>"You pasted a JSON ".concat(Array.isArray(n(Ae).contents)?"array":"object"," as text"));ur(lt,{type:"info",get message(){return n(Ye)},actions:[{icon:ys,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:ln},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:po}]})});var ft=D(st,2);L(ft,()=>n(W),lt=>{var Ye=xe(()=>g()?[]:[{icon:Ou,text:"Ok",title:"Accept the repaired document",onClick:Xt},{icon:ll,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:z}]);ur(lt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Ye)},onClose:Z})}),sd(D(ft,2),{get validationErrors(){return n(Ot)},selectError:Oe}),P(be,ue)}),ee("paste",ye,ao),P(O,F)},O=>{P(O,ay())}),On(Ct,O=>v(f,O),()=>n(f));var on=D(Ct,2);return L(on,()=>n(C),O=>{jh(O,{onClose:()=>v(C,!1)})}),L(D(on,2),()=>n(oe),O=>{xh(O,da(()=>n(oe),{onClose:()=>{var F;(F=n(oe))===null||F===void 0||F.onClose(),v(oe,void 0)}}))}),ne(()=>We(Ct,"no-main-menu",!x())),ee("keydown",Ct,function(O){var F=Fr(O),G=O.shiftKey;if(r("keydown",{combo:F,key:O.key}),F==="Ctrl+X"&&(O.preventDefault(),Pt(!0)),F==="Ctrl+Shift+X"&&(O.preventDefault(),Pt(!1)),F==="Ctrl+C"&&(O.preventDefault(),Un(!0)),F==="Ctrl+Shift+C"&&(O.preventDefault(),Un(!1)),F==="Ctrl+D"&&(O.preventDefault(),Gn()),F!=="Delete"&&F!=="Backspace"||(O.preventDefault(),xn()),F==="Insert"&&(O.preventDefault(),Bn("structure")),F==="Ctrl+A"&&(O.preventDefault(),v(R,Dt([]))),F==="Ctrl+Q"&&uo(O),F==="ArrowUp"||F==="Shift+ArrowUp"){O.preventDefault();var ye=n(R)?dv(n(T),n(V),n(R),G)||n(R):Xa(n(T),n(V));v(R,ye),J(Xe(ye))}if(F==="ArrowDown"||F==="Shift+ArrowDown"){O.preventDefault();var be=n(R)?function(ft,lt,Ye){var cn=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(Ye){var Rn=cn?Xe(Ye):fa(ft,Ye),pn=to(He(ft,Rn))?sv(ft,lt,Rn,!0):lt,At=fc(ft,lt,Rn),Ke=fc(ft,pn,Rn);if(cn)return yo(Ye)?At!==void 0?Oo(At,At):void 0:Yo(Ye)?Ke!==void 0?Oo(Ke,Ke):void 0:Ke!==void 0?Oo(za(Ye),Ke):void 0;if(Yo(Ye))return Ke!==void 0?Dt(Ke):void 0;if(yo(Ye)||rn(Ye))return At!==void 0?Dt(At):void 0;if(vo(Ye)){if(At===void 0||At.length===0)return;var Et=Lt(At),et=He(ft,Et);return Array.isArray(et)?Dt(At):Vr(At)}return Cn(Ye)?Ke!==void 0?Dt(Ke):At!==void 0?Dt(At):void 0:void 0}}(n(T),n(V),n(R),G)||n(R):Xa(n(T),n(V));v(R,be),J(Xe(be))}if(F==="ArrowLeft"||F==="Shift+ArrowLeft"){O.preventDefault();var ue=n(R)?function(ft,lt,Ye){var cn=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Rn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Ye){var{caret:pn,previous:At}=vv(ft,lt,Ye,Rn);if(cn)return Cn(Ye)?void 0:Oo(Ye.path,Ye.path);if(pn&&At)return eu(At);var Ke=Lt(Xe(Ye)),Et=He(ft,Ke);return rn(Ye)&&Array.isArray(Et)?Oo(Ye.path,Ye.path):Cn(Ye)&&!Array.isArray(Et)?Vr(Ye.focusPath):void 0}}(n(T),n(V),n(R),G,!g())||n(R):Xa(n(T),n(V));v(R,ue),J(Xe(ue))}if(F==="ArrowRight"||F==="Shift+ArrowRight"){O.preventDefault();var Ne=n(R)&&n(T)!==void 0?function(ft,lt,Ye){var cn=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Rn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Ye){var{caret:pn,next:At}=vv(ft,lt,Ye,Rn);return cn?Cn(Ye)?void 0:Oo(Ye.path,Ye.path):pn&&At?eu(At):Cn(Ye)?Dt(Ye.focusPath):void 0}}(n(T),n(V),n(R),G,!g())||n(R):Xa(n(T),n(V));v(R,Ne),J(Xe(Ne))}if(F==="Enter"&&n(R)){if(Vl(n(R))){var pe=n(R).focusPath,Re=He(n(T),Lt(pe));Array.isArray(Re)&&(O.preventDefault(),v(R,Dt(pe)))}vo(n(R))&&(O.preventDefault(),v(R,ge(ge({},n(R)),{},{edit:!0}))),rn(n(R))&&(O.preventDefault(),to(He(n(T),n(R).path))?Ve(n(R).path,!0):v(R,ge(ge({},n(R)),{},{edit:!0})))}if(F.replace(/^Shift\+/,"").length===1&&n(R))return O.preventDefault(),void kt(O.key);if(F==="Enter"&&(Yo(n(R))||yo(n(R))))return O.preventDefault(),void kt("");if(F==="Ctrl+Enter"&&rn(n(R))){var st=He(n(T),n(R).path);Ul(st)&&window.open(String(st),"_blank")}F==="Escape"&&n(R)&&(O.preventDefault(),v(R,void 0)),F==="Ctrl+F"&&(O.preventDefault(),it(!1)),F==="Ctrl+H"&&(O.preventDefault(),it(!0)),F==="Ctrl+Z"&&(O.preventDefault(),Vt()),F==="Ctrl+Shift+Z"&&(O.preventDefault(),Ft())}),ee("mousedown",Ct,function(O){r("handleMouseDown",O);var F=O.target;Df(F,"BUTTON")||F.isContentEditable||(Z(),n(R)||n(T)!==void 0||n(re)!==""&&n(re)!==void 0||(r("createDefaultSelection"),v(R,Dt([]))))}),ee("contextmenu",Ct,uo),P(e,nt),bt(t,"expand",zt),bt(t,"collapse",Fe),bt(t,"validate",jn),bt(t,"getJson",Qn),bt(t,"patch",Mt),bt(t,"acceptAutoRepair",Xt),bt(t,"openTransformModal",yn),bt(t,"scrollTo",Qt),bt(t,"findElement",U),bt(t,"focus",Z),at({expand:zt,collapse:Fe,validate:jn,getJson:Qn,patch:Mt,acceptAutoRepair:Xt,openTransformModal:yn,scrollTo:Qt,findElement:U,focus:Z})}function Rh(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(o,r,a)=>Rh(Reflect.get(o,r,a)),set:()=>!1,deleteProperty:()=>!1});var t}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-rrrjnb {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .query-error:where(.svelte-rrrjnb) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data.jse-hide:where(.svelte-rrrjnb) {
  flex: none;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-preview-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents.jse-hide-original-data:where(.svelte-rrrjnb) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) button:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb),
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):focus,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):read-only,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-preview.jse-error:where(.svelte-rrrjnb) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-rrrjnb a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Vs=Nl(()=>yj),Qa=Nl(()=>wj),iy=B('<div class="query-error svelte-rrrjnb"> </div>'),ly=B("<!> <!>",1),cy=B('<div class="jse-preview jse-error svelte-rrrjnb"> </div>'),uy=B('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div class="jse-data-contents svelte-rrrjnb"><div class="jse-original-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>',1),dy=B('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');function vy(e,t){var o,r,a;rt(t,!1);var s=ho("jsoneditor:TransformModal"),i=p(t,"id",25,()=>"transform-modal-"+ss()),l=p(t,"json",9),c=p(t,"rootPath",25,()=>[]),d=p(t,"indentation",9),u=p(t,"escapeControlCharacters",9),f=p(t,"escapeUnicodeCharacters",9),h=p(t,"parser",9),m=p(t,"parseMemoizeOne",9),g=p(t,"validationParser",9),b=p(t,"pathParser",9),j=p(t,"queryLanguages",9),x=p(t,"queryLanguageId",13),E=p(t,"onChangeQueryLanguage",9),y=p(t,"onRenderValue",9),S=p(t,"onRenderMenu",9),w=p(t,"onRenderContextMenu",9),_=p(t,"onClassName",9),I=p(t,"onTransform",9),q=p(t,"onClose",9),k=M(void 0,!0),X=M(void 0,!0),je=M(void 0,!0),ae=M(!1,!0),fe="".concat(i(),":").concat(xt(c())),qe=(o=Vs()[fe])!==null&&o!==void 0?o:{},we=M(Qa().showWizard!==!1,!0),ze=M(Qa().showOriginal!==!1,!0),_e=M((r=qe.queryOptions)!==null&&r!==void 0?r:{},!0),$e=M(x()===qe.queryLanguageId&&qe.query?qe.query:"",!0),he=M((a=qe.isManual)!==null&&a!==void 0&&a,!0),ce=M(void 0,!0),ie=M(void 0,!0),Ge=M({text:""},!0);function le(R){var ve;return(ve=j().find(vt=>vt.id===R))!==null&&ve!==void 0?ve:j()[0]}function de(R){try{v(_e,R),v($e,le(x()).createQuery(n(X),R)),v(ce,void 0),v(he,!1),s("updateQueryByWizard",{queryOptions:n(_e),query:n($e),isManual:n(he)})}catch(ve){v(ce,String(ve))}}function C(R){v($e,R.target.value),v(he,!0),s("handleChangeQuery",{query:n($e),isManual:n(he)})}n(he)||de(n(_e)),Ao(()=>{var R;(R=n(k))===null||R===void 0||R.focus()});var oe=rl(function(R,ve){if(R===void 0)return v(Ge,{text:""}),void v(ie,"Error: No JSON");if(ve.trim()!=="")try{s("previewTransform",{query:ve});var vt=le(x()).executeQuery(R,ve,h());v(Ge,{json:vt}),v(ie,void 0)}catch(Be){v(Ge,{text:""}),v(ie,String(Be))}else v(Ge,{json:R})},300);function T(){if(n(X)===void 0)return v(Ge,{text:""}),void v(ie,"Error: No JSON");try{s("handleTransform",{query:n($e)});var R=le(x()).executeQuery(n(X),n($e),h());I()([{op:"replace",path:xt(c()),value:R}]),q()()}catch(ve){console.error(ve),v(Ge,{text:""}),v(ie,String(ve))}}function re(){v(we,!n(we)),Qa(Qa().showWizard=n(we))}function Ze(){v(ze,!n(ze)),Qa(Qa().showOriginal=n(ze))}function se(R){s("handleChangeQueryLanguage",R),x(R),E()(R),de(n(_e))}function V(){n(ae)?v(ae,!n(ae)):q()()}N(()=>($(l()),$(c())),()=>{v(X,Rh(He(l(),c())))}),N(()=>n(X),()=>{v(je,n(X)?{json:n(X)}:{text:""})}),N(()=>(n(X),n($e)),()=>{oe(n(X),n($e))}),N(()=>(Vs(),n(_e),n($e),$(x()),n(he)),()=>{Vs(Vs()[fe]={queryOptions:n(_e),query:n($e),queryLanguageId:x(),isManual:n(he)}),s("store state in memory",fe,Vs()[fe])}),Wt(),ct(!0),mi(e,{get onClose(){return q()},className:"jse-transform-modal",get fullscreen(){return n(ae)},children:(R,ve)=>{var vt=dy();Yc(A(vt),{children:(Be,Ae)=>{var K=uy(),me=Te(K);(function($t,Bt){rt(Bt,!1);var sn,Mt=p(Bt,"queryLanguages",9),En=p(Bt,"queryLanguageId",9),Nn=p(Bt,"fullscreen",13),co=p(Bt,"onChangeQueryLanguage",9),Xt=p(Bt,"onClose",9),Pt=M(void 0,!0),{openAbsolutePopup:mn,closeAbsolutePopup:Un}=xa("absolute-popup");function hn(){var ao={queryLanguages:Mt(),queryLanguageId:En(),onChangeQueryLanguage:Mn=>{Un(sn),co()(Mn)}};sn=mn(rx,ao,{offsetTop:-2,offsetLeft:0,anchor:n(Pt),closeOnOuterClick:!0})}ct(!0),kl($t,{title:"Transform",fullScreenButton:!0,get fullscreen(){return Nn()},set fullscreen(ao){Nn(ao)},get onClose(){return Xt()},$$slots:{actions:(ao,Mn)=>{var Kn=ix();Ut(A(Kn),{data:Wg}),On(Kn,xn=>v(Pt,xn),()=>n(Pt)),ne(()=>We(Kn,"hide",Mt().length<=1)),ee("click",Kn,hn),P(ao,Kn)}},$$legacy:!0}),at()})(me,{get queryLanguages(){return j()},get queryLanguageId(){return x()},onChangeQueryLanguage:se,get onClose(){return q()},get fullscreen(){return n(ae)},set fullscreen($t){v(ae,$t)},$$legacy:!0});var Ie=A(D(me,2)),ut=A(Ie),Me=D(A(ut),2);kf(A(Me),()=>le(x()).description,!1,!1);var gt=D(Me,4);ne(()=>Ra(gt,un(c())?"(document root)":rr(c())));var Se=D(gt,2),Oe=A(Se),Qe=A(Oe),jt=A(Qe),zt=xe(()=>n(we)?ha:ni);Ut(jt,{get data(){return n(zt)}});var Fe=D(Se,2);L(Fe,()=>n(we),$t=>{var Bt=It();L(Te(Bt),()=>Array.isArray(n(X)),sn=>{var Mt=ly(),En=Te(Mt);tx(En,{get queryOptions(){return n(_e)},get json(){return n(X)},onChange:de}),L(D(En,2),()=>n(ce),Nn=>{var co=iy(),Xt=A(co);ne(()=>dt(Xt,n(ce))),P(Nn,co)}),P(sn,Mt)},sn=>{P(sn,zo("(Only available for arrays, not for objects)"))}),P($t,Bt)});var W=D(Fe,4);On(W,$t=>v(k,$t),()=>n(k));var Ot=D(ut,2),mt=A(Ot),Tn=A(mt),$n=A(Tn),jn=A($n),Qn=A(jn),gn=xe(()=>n(ze)?ha:ni);Ut(Qn,{get data(){return n(gn)}}),L(D(Tn,2),()=>n(ze),$t=>{fu($t,{get externalContent(){return n(je)},externalSelection:void 0,readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return u()},get escapeUnicodeCharacters(){return f()},get parser(){return h()},get parseMemoizeOne(){return m()},get onRenderValue(){return y()},get onRenderMenu(){return S()},get onRenderContextMenu(){return w()},onError:console.error,onChange:mo,onChangeMode:mo,onSelect:mo,onFocus:mo,onBlur:mo,onSortModal:mo,onTransformModal:mo,onJSONEditorModal:mo,get onClassName(){return _()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})});var Dn=D(mt,2);L(D(A(Dn),2),()=>!n(ie),$t=>{fu($t,{get externalContent(){return n(Ge)},externalSelection:void 0,readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return u()},get escapeUnicodeCharacters(){return f()},get parser(){return h()},get parseMemoizeOne(){return m()},get onRenderValue(){return y()},get onRenderMenu(){return S()},get onRenderContextMenu(){return w()},onError:console.error,onChange:mo,onChangeMode:mo,onSelect:mo,onFocus:mo,onBlur:mo,onSortModal:mo,onTransformModal:mo,onJSONEditorModal:mo,get onClassName(){return _()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})},$t=>{var Bt=cy(),sn=A(Bt);ne(()=>dt(sn,n(ie))),P($t,Bt)});var Jn=A(D(Ie,2));bo(()=>ee("click",Jn,T)),Eo(Jn,$t=>{$t.focus()}),ne(()=>{Ra(W,n($e)),We(Ot,"jse-hide-original-data",!n(ze)),We(mt,"jse-hide",!n(ze)),Jn.disabled=!!n(ie)}),ee("click",Qe,re),ee("input",W,C),ee("click",jn,Ze),P(Be,K)},$$slots:{default:!0}}),Eo(vt,(Be,Ae)=>bh(Be,Ae),()=>V),P(R,vt)},$$slots:{default:!0}}),at()}function Jo(){}function Rv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<.9*t)return e.toFixed()+" B";var o=e/t;if(o<.9*t)return o.toFixed(1)+" KB";var r=o/t;if(r<.9*t)return r.toFixed(1)+" MB";var a=r/t;return a<.9*t?a.toFixed(1)+" GB":(a/t).toFixed(1)+" TB"}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1ulj7zd {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1ulj7zd:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1ulj7zd .jse-status-bar-info:where(.svelte-1ulj7zd) {
  padding: 2px;
}`);var py=B('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),fy=B('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),hy=B('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),gy=B('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>'),ld=km.define([{tag:Us.propertyName,color:"var(--internal-key-color)"},{tag:Us.number,color:"var(--internal-value-color-number)"},{tag:Us.bool,color:"var(--internal-value-color-boolean)"},{tag:Us.string,color:"var(--internal-value-color-string)"},{tag:Us.keyword,color:"var(--internal-value-color-null)"}]),my=qp(ld),by=ld.style;ld.style=e=>by(e||[]);ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-xt61xw {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-xt61xw {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-hidden:where(.svelte-xt61xw) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button[name="close"] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading-space:where(.svelte-xt61xw) {
  flex: 1;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading:where(.svelte-xt61xw) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-preview:where(.svelte-xt61xw) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}`);var jy=B('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>',1),xy=B("<!> <!> <!> <!>",1),yy=B('<div class="jse-contents svelte-xt61xw"></div> <!> <!>',1),wy=B('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>'),ky=B('<div class="jse-text-mode svelte-xt61xw"><!> <!></div>');function Cy(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=p(t,"readOnly",9),s=p(t,"mainMenuBar",9),i=p(t,"statusBar",9),l=p(t,"askToFormat",9),c=p(t,"externalContent",9),d=p(t,"externalSelection",9),u=p(t,"indentation",9),f=p(t,"tabSize",9),h=p(t,"escapeUnicodeCharacters",9),m=p(t,"parser",9),g=p(t,"validator",9),b=p(t,"validationParser",9),j=p(t,"onChange",9),x=p(t,"onChangeMode",9),E=p(t,"onSelect",9),y=p(t,"onError",9),S=p(t,"onFocus",9),w=p(t,"onBlur",9),_=p(t,"onRenderMenu",9),I=p(t,"onSortModal",9),q=p(t,"onTransformModal",9),k=ho("jsoneditor:TextMode"),X={key:"Mod-i",run:Be,shift:Ae,preventDefault:!0},je=typeof window>"u";k("isSSR:",je);var ae,fe=M(void 0,!0),qe=M(void 0,!0),we=M(void 0,!0),ze=M(!1,!0),_e=M(l(),!0),$e=M([],!0),he=new Bs,ce=new Bs,ie=new Bs,Ge=new Bs,le=new Bs,de=c(),C=M(Jc(de,u(),m()),!0),oe=M(h(),!0);Ao(tt(function*(){if(!je)try{ae=function(te){var{target:Ue,initialText:wt,readOnly:Ht,indentation:kt}=te;k("Create CodeMirror editor",{readOnly:Ht,indentation:kt});var nn=Ja.create({doc:wt,selection:Tn(d(),wt)?Dn(d()):void 0,extensions:[Ed.of([Cm,X]),he.of(Ot()),Sm(),Om(),Em(),zm(),$m(),Mm(),Am(),Pm(),Ja.allowMultipleSelections.of(!0),Rm(),qp(_m,{fallback:!0}),Im(),Hg(),Jg(),qm(),Tm(),Dm(),Nm(),Ed.of([...Kg,...Um,...Bm,...Fm,...Lm,...Yg,...Vm]),my,Xg({hideFirstIndent:!0}),Ka.domEventHandlers({dblclick:W}),Ka.updateListener.of(Vt=>{v(we,Vt.state),Vt.docChanged?Nn():Vt.selectionSet&&Pt()}),Qg(),Wm({top:!0}),Ka.lineWrapping,ce.of(Ja.readOnly.of(Ht)),Ge.of(Ja.tabSize.of(f())),ie.of(Mt(kt)),le.of(Ka.theme({},{dark:mt()}))]});return ae=new Ka({state:nn,parent:Ue})}({target:n(fe),initialText:mn(n(C),n(ze))?"":n(o).escapeValue(n(C)),readOnly:a(),indentation:u()})}catch(te){console.error(te)}})),Lo(()=>{ae&&(k("Destroy CodeMirror editor"),ae.destroy())});var T=M(!1,!0),re=M(!1,!0),Ze=xs(),se=xs();function V(){ae&&(k("focus"),ae.focus())}var R=!1;function ve(te){return vt(te,!1)}function vt(te,Ue){k("handlePatch",te,Ue);var wt=m().parse(n(C)),Ht=br(wt,te),kt=Rp(wt,te);return gn({text:m().stringify(Ht,null,u())},Ue,!1),{json:Ht,previousJson:wt,undo:kt,redo:te}}function Be(){if(k("format"),a())return!1;try{var te=m().parse(n(C));return gn({text:m().stringify(te,null,u())},!0,!1),v(_e,l()),!0}catch(Ue){y()(Ue)}return!1}function Ae(){if(k("compact"),a())return!1;try{var te=m().parse(n(C));return gn({text:m().stringify(te)},!0,!1),v(_e,!1),!0}catch(Ue){y()(Ue)}return!1}function K(){if(k("repair"),!a())try{gn({text:mr(n(C))},!0,!1),v(Un,vc),v(hn,void 0)}catch(te){y()(te)}}function me(){var te;if(!a())try{var Ue=m().parse(n(C));R=!0,I()({id:Ze,json:Ue,rootPath:[],onSort:(te=tt(function*(wt){var{operations:Ht}=wt;k("onSort",Ht),vt(Ht,!0)}),function(wt){return te.apply(this,arguments)}),onClose:()=>{R=!1,V()}})}catch(wt){y()(wt)}}function Ie(te){var{id:Ue,rootPath:wt,onTransform:Ht,onClose:kt}=te;try{var nn=m().parse(n(C));R=!0,q()({id:Ue||se,json:nn,rootPath:wt||[],onTransform:Vt=>{Ht?Ht({operations:Vt,json:nn,transformedJson:br(nn,Vt)}):(k("onTransform",Vt),vt(Vt,!0))},onClose:()=>{R=!1,V(),kt&&kt()}})}catch(Vt){y()(Vt)}}function ut(){a()||Ie({rootPath:[]})}function Me(){ae&&(n(fe)&&n(fe).querySelector(".cm-search")?Ym(ae):Xm(ae))}function gt(){a()||ae&&(Qm(ae),V())}function Se(){a()||ae&&(Gm(ae),V())}function Oe(){v(ze,!0),gn(c(),!0,!0)}function Qe(){x()(io.tree)}function jt(){Bt()}function zt(te){k("select validation error",te);var{from:Ue,to:wt}=$n(te);Ue!==void 0&&wt!==void 0&&(Fe(Ue,wt),V())}function Fe(te,Ue){k("setSelection",{anchor:te,head:Ue}),ae&&ae.dispatch(ae.state.update({selection:{anchor:te,head:Ue},scrollIntoView:!0}))}function W(te,Ue){if(Ue.state.selection.ranges.length===1){var wt=Ue.state.selection.ranges[0],Ht=n(C).slice(wt.from,wt.to);if(Ht==="{"||Ht==="["){var kt=Cd.parse(n(C)),nn=Object.keys(kt.pointers).find(Ft=>{var Yn;return((Yn=kt.pointers[Ft].value)===null||Yn===void 0?void 0:Yn.pos)===wt.from}),Vt=kt.pointers[nn];nn&&Vt&&Vt.value&&Vt.valueEnd&&(k("pointer found, selecting inner contents of path:",nn,Vt),Fe(Vt.value.pos+1,Vt.valueEnd.pos-1))}}}function Ot(){return Hm(ao,{delay:300})}function mt(){return!!n(fe)&&getComputedStyle(n(fe)).getPropertyValue("--jse-theme").includes("dark")}function Tn(te,Ue){return!!gc(te)&&te.ranges.every(wt=>wt.anchor<Ue.length&&wt.head<Ue.length)}function $n(te){var{path:Ue,message:wt,severity:Ht}=te,{line:kt,column:nn,from:Vt,to:Ft}=function(Yn,zn){try{var Fn=Cd.parse(Yn),yn=xt(zn),Q=Fn.pointers[yn];if(Q)return{path:zn,line:Q.key?Q.key.line:Q.value?Q.value.line:0,column:Q.key?Q.key.column:Q.value?Q.value.column:0,from:Q.key?Q.key.pos:Q.value?Q.value.pos:0,to:Q.keyEnd?Q.keyEnd.pos:Q.valueEnd?Q.valueEnd.pos:0}}catch(Rt){console.error(Rt)}return{path:zn,line:0,column:0,from:0,to:0}}(n(o).escapeValue(n(C)),Ue);return{path:Ue,line:kt,column:nn,from:Vt,to:Ft,message:wt,severity:Ht,actions:[]}}function jn(te,Ue){var{line:wt,column:Ht,position:kt,message:nn}=te;return{path:[],line:wt,column:Ht,from:kt,to:kt,severity:ar.error,message:nn,actions:Ue&&!a()?[{name:"Auto repair",apply:()=>K()}]:void 0}}function Qn(te){return{from:te.from||0,to:te.to||0,message:te.message||"",actions:te.actions,severity:te.severity}}function gn(te,Ue,wt){var Ht=Jc(te,u(),m()),kt=!Nt(te,de),nn=de;k("setCodeMirrorContent",{isChanged:kt,emitChange:Ue,forceUpdate:wt}),ae&&(kt||wt)&&(de=te,v(C,Ht),mn(n(C),n(ze))||ae.dispatch({changes:{from:0,to:ae.state.doc.length,insert:n(o).escapeValue(n(C))}}),En(),kt&&Ue&&Xt(de,nn))}function Dn(te){return gc(te)?Jm.fromJSON(te):void 0}function Jn(){return $t.apply(this,arguments)}function $t(){return $t=tt(function*(){k("refresh"),yield function(){return sn.apply(this,arguments)}()}),$t.apply(this,arguments)}function Bt(){if(ae){var te=ae?n(o).unescapeValue(ae.state.doc.toString()):"",Ue=te!==n(C);if(k("onChangeCodeMirrorValue",{isChanged:Ue}),Ue){var wt=de;v(C,te),de={text:n(C)},En(),Xt(de,wt),eo().then(Pt)}}}function sn(){return(sn=tt(function*(){if(yield eo(),ae){var te=mt();k("updateTheme",{dark:te}),ae.dispatch({effects:[le.reconfigure(Ka.theme({},{dark:te}))]})}})).apply(this,arguments)}function Mt(te){var Ue=Km.of(typeof te=="number"?" ".repeat(te):te);return te==="	"?[Ue]:[Ue,Gg]}function En(){v(T,Zm(ae.state)>0),v(re,eb(ae.state)>0),k({canUndo:n(T),canRedo:n(re)})}Lo(()=>{co()}),ad({onMount:Ao,onDestroy:Lo,getWindow:()=>zi(n(qe)),hasFocus:()=>R&&document.hasFocus()||Bu(n(qe)),onFocus:S(),onBlur:()=>{co(),w()()}});var Nn=rl(Bt,300);function co(){Nn.flush()}function Xt(te,Ue){j()&&j()(te,Ue,{contentErrors:Mn(),patchResult:void 0})}function Pt(){E()(ge({type:dn.text},n(we).selection.toJSON()))}function mn(te,Ue){return!!te&&te.length>ev&&!Ue}var Un=M(vc,!0),hn=M(void 0,!0);function ao(){if(mn(n(C),n(ze)))return[];var te=Mn();if(rv(te)){var{parseError:Ue,isRepairable:wt}=te;return[Qn(jn(Ue,wt))]}return nj(te)?te.validationErrors.map($n).map(Qn):[]}function Mn(){k("validate:start"),co();var te=Kn(n(o).escapeValue(n(C)),g(),m(),b());return rv(te)?(v(Un,te.isRepairable?nv:"invalid"),v(hn,te.parseError),v($e,[])):(v(Un,vc),v(hn,void 0),v($e,(te==null?void 0:te.validationErrors)||[])),k("validate:end"),te}var Kn=oi(ux);function xn(){n(hn)&&function(te){k("select parse error",te);var Ue=jn(te,!1);Fe(Ue.from!=null?Ue.from:0,Ue.to!=null?Ue.to:0),V()}(n(hn))}var Gn={icon:fm,text:"Show me",title:"Move to the parse error location",onClick:xn};N(()=>$(h()),()=>{v(o,Nu({escapeControlCharacters:!1,escapeUnicodeCharacters:h()}))}),N(()=>$(c()),()=>{gn(c(),!1,!1)}),N(()=>$(d()),()=>{(function(te){if(gc(te)){var Ue=Dn(te);!ae||!Ue||n(we)&&n(we).selection.eq(Ue)||(k("applyExternalSelection",Ue),ae.dispatch({selection:Ue}))}})(d())}),N(()=>$(g()),()=>{(function(te){k("updateLinter",te),ae&&ae.dispatch({effects:he.reconfigure(Ot())})})(g())}),N(()=>$(u()),()=>{(function(te){ae&&(k("updateIndentation",te),ae.dispatch({effects:ie.reconfigure(Mt(te))}))})(u())}),N(()=>$(f()),()=>{(function(te){ae&&(k("updateTabSize",te),ae.dispatch({effects:Ge.reconfigure(Ja.tabSize.of(te))}))})(f())}),N(()=>$(a()),()=>{(function(te){ae&&(k("updateReadOnly",te),ae.dispatch({effects:[ce.reconfigure(Ja.readOnly.of(te))]}))})(a())}),N(()=>(n(oe),$(h())),()=>{n(oe)!==h()&&(v(oe,h()),k("forceUpdateText",{escapeUnicodeCharacters:h()}),ae&&ae.dispatch({changes:{from:0,to:ae.state.doc.length,insert:n(o).escapeValue(n(C))}}))}),N(()=>(n(Un),$(a()),ys),()=>{v(r,n(Un)!==nv||a()?[Gn]:[{icon:ys,text:"Auto repair",title:"Automatically repair JSON",onClick:K},Gn])}),Wt(),ct(!0);var oo=ky(),Bn=A(oo);return L(Bn,s,te=>{var Ue=xe(()=>n(C).length===0),wt=xe(()=>!n(Ue)),Ht=xe(()=>!n(Ue)),kt=xe(()=>!n(Ue)),nn=xe(()=>!n(Ue));(function(Vt,Ft){rt(Ft,!1);var Yn=M(void 0,!0),zn=p(Ft,"readOnly",9,!1),Fn=p(Ft,"onFormat",9),yn=p(Ft,"onCompact",9),Q=p(Ft,"onSort",9),Rt=p(Ft,"onTransform",9),Qt=p(Ft,"onToggleSearch",9),vn=p(Ft,"onUndo",9),U=p(Ft,"onRedo",9),J=p(Ft,"canUndo",9),ke=p(Ft,"canRedo",9),Je=p(Ft,"canFormat",9),Pe=p(Ft,"canCompact",9),pt=p(Ft,"canSort",9),Ve=p(Ft,"canTransform",9),_t=p(Ft,"onRenderMenu",9),Gt={type:"button",icon:Al,title:"Search (Ctrl+F)",className:"jse-search",onClick:Qt()},it=M(void 0,!0);N(()=>($(zn()),$(Fn()),$(Je()),$(yn()),$(Pe()),$(Q()),$(pt()),$(Rt()),$(Ve()),$(vn()),$(J()),$(U()),$(ke())),()=>{v(it,zn()?[Gt,{type:"space"}]:[{type:"button",icon:$v,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Fn(),disabled:zn()||!Je()},{type:"button",icon:f1,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:yn(),disabled:zn()||!Pe()},{type:"separator"},{type:"button",icon:sl,title:"Sort",className:"jse-sort",onClick:Q(),disabled:zn()||!pt()},{type:"button",icon:il,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Rt(),disabled:zn()||!Ve()},Gt,{type:"separator"},{type:"button",icon:Cu,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:vn(),disabled:!J()},{type:"button",icon:Su,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:U(),disabled:!ke()},{type:"space"}])}),N(()=>($(_t()),n(it)),()=>{v(Yn,_t()(n(it))||n(it))}),Wt(),ct(!0),Kl(Vt,{get items(){return n(Yn)}}),at()})(te,{get readOnly(){return a()},onFormat:Be,onCompact:Ae,onSort:me,onTransform:ut,onToggleSearch:Me,onUndo:gt,onRedo:Se,get canFormat(){return n(wt)},get canCompact(){return n(Ht)},get canSort(){return n(kt)},get canTransform(){return n(nn)},get canUndo(){return n(T)},get canRedo(){return n(re)},get onRenderMenu(){return _()}})}),L(D(Bn,2),()=>!je,te=>{var Ue=yy(),wt=xe(()=>mn(n(C),n(ze))),Ht=Te(Ue);On(Ht,nn=>v(fe,nn),()=>n(fe));var kt=D(Ht,2);L(kt,()=>n(wt),nn=>{var Vt=jy(),Ft=Te(Vt),Yn=xe(()=>"The JSON document is larger than ".concat(Rv(ev,1024),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(Rv(n(C).length,1024),"."));ur(Ft,{icon:Aa,type:"error",get message(){return n(Yn)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:Oe},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:Qe},{text:"Cancel",title:"Cancel opening this large document.",onClick:jt}],onClose:V});var zn=A(D(Ft,2));ne(()=>dt(zn,ui(n(C)||"",Xc))),P(nn,Vt)}),L(D(kt,2),()=>!n(wt),nn=>{var Vt=xy(),Ft=Te(Vt);L(Ft,i,Fn=>{(function(yn,Q){rt(Q,!1);var Rt=p(Q,"editorState",8),Qt=M(),vn=M(),U=M(),J=M(),ke=M();N(()=>$(Rt()),()=>{var Ve;v(Qt,(Ve=Rt())===null||Ve===void 0||(Ve=Ve.selection)===null||Ve===void 0||(Ve=Ve.main)===null||Ve===void 0?void 0:Ve.head)}),N(()=>(n(Qt),$(Rt())),()=>{var Ve;v(vn,n(Qt)!==void 0?(Ve=Rt())===null||Ve===void 0||(Ve=Ve.doc)===null||Ve===void 0?void 0:Ve.lineAt(n(Qt)):void 0)}),N(()=>n(vn),()=>{v(U,n(vn)!==void 0?n(vn).number:void 0)}),N(()=>(n(vn),n(Qt)),()=>{v(J,n(vn)!==void 0&&n(Qt)!==void 0?n(Qt)-n(vn).from+1:void 0)}),N(()=>$(Rt()),()=>{var Ve;v(ke,(Ve=Rt())===null||Ve===void 0||(Ve=Ve.selection)===null||Ve===void 0||(Ve=Ve.ranges)===null||Ve===void 0?void 0:Ve.reduce((_t,Gt)=>_t+Gt.to-Gt.from,0))}),Wt(),ct();var Je=gy(),Pe=A(Je);L(Pe,()=>n(U)!==void 0,Ve=>{var _t=py(),Gt=A(_t);ne(()=>{var it;return dt(Gt,"Line: ".concat((it=n(U))!==null&&it!==void 0?it:""))}),P(Ve,_t)});var pt=D(Pe,2);L(pt,()=>n(J)!==void 0,Ve=>{var _t=fy(),Gt=A(_t);ne(()=>{var it;return dt(Gt,"Column: ".concat((it=n(J))!==null&&it!==void 0?it:""))}),P(Ve,_t)}),L(D(pt,2),()=>n(ke)!==void 0&&n(ke)>0,Ve=>{var _t=hy(),Gt=A(_t);ne(()=>{var it;return dt(Gt,"Selection: ".concat((it=n(ke))!==null&&it!==void 0?it:""," characters"))}),P(Ve,_t)}),P(yn,Je),at()})(Fn,{get editorState(){return n(we)}})});var Yn=D(Ft,2);L(Yn,()=>n(hn),Fn=>{ur(Fn,{type:"error",icon:Aa,get message(){return n(hn).message},get actions(){return n(r)},onClick:xn,onClose:V})});var zn=D(Yn,2);L(zn,()=>{return!n(hn)&&n(_e)&&(Fn=n(C),!(yn=Fn.substring(0,999).trim()).includes(`
`)&&O0.test(yn));var Fn,yn},Fn=>{var yn=xe(()=>[{icon:$v,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Be},{icon:Ml,text:"No thanks",title:"Close this message",onClick:()=>v(_e,!1)}]);ur(Fn,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(yn)},onClose:V})}),sd(D(zn,2),{get validationErrors(){return n($e)},selectError:zt}),P(nn,Vt)}),ne(()=>We(Ht,"jse-hidden",n(wt))),P(te,Ue)},te=>{P(te,wy())}),On(oo,te=>v(qe,te),()=>n(qe)),ne(()=>We(oo,"no-main-menu",!s())),P(e,oo),bt(t,"focus",V),bt(t,"patch",ve),bt(t,"handlePatch",vt),bt(t,"openTransformModal",Ie),bt(t,"refresh",Jn),bt(t,"validate",Mn),at({focus:V,patch:ve,handlePatch:vt,openTransformModal:Ie,refresh:Jn,validate:Mn})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-h57m0p {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-h57m0p {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-h57m0p {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var Sy=B('<button type="button" class="jse-inline-value svelte-h57m0p"> </button>');ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-2i3vdx {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-2i3vdx:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly:where(.svelte-2i3vdx)) {
  cursor: pointer;
}
.jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
  height: 1em;
}`);var Ki,Yi,Oy=B('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>'),Ey=B('<button type="button" class="jse-column-header svelte-2i3vdx"><span class="jse-column-name"> </span> <!></button>');function _v(e,t){return Ki||(Yi=new WeakMap,Ki=new ResizeObserver(o=>{for(var r of o){var a=Yi.get(r.target);a&&a(r.target)}})),Yi.set(e,t),Ki.observe(e),{destroy:()=>{Yi.delete(e),Ki.unobserve(e)}}}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1q0ce0e {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1q0ce0e:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-space.jse-before:where(.svelte-1q0ce0e) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) .jse-nested-arrays-info:where(.svelte-1q0ce0e) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e) .jse-nested-array-count:where(.svelte-1q0ce0e) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1q0ce0e .jse-space.jse-after:where(.svelte-1q0ce0e) {
  flex: 2;
}`);var zy=B("You can open the document in tree mode instead, or paste a JSON Array using <b>Ctrl+V</b>.",1),$y=B('<button type="button" class="jse-nested-array-action svelte-1q0ce0e"> <span class="jse-nested-array-count svelte-1q0ce0e"> </span></button>'),My=B('<div class="jse-table-mode-welcome svelte-1q0ce0e" role="none"><div class="jse-space jse-before svelte-1q0ce0e"></div> <div class="jse-nested-arrays svelte-1q0ce0e"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1q0ce0e"><!> <!></div> <!> <button type="button" class="jse-nested-array-action svelte-1q0ce0e"> </button></div> <div class="jse-space jse-after svelte-1q0ce0e"></div></div>');function Ay(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=p(t,"text",9),l=p(t,"json",9),c=p(t,"readOnly",9),d=p(t,"parser",9),u=p(t,"openJSONEditorModal",9),f=p(t,"onChangeMode",9),h=p(t,"onClick",9),m=M(void 0,!0);N(()=>$(c()),()=>{v(o,c()?"View":"Edit")}),N(()=>($(l()),Pv),()=>{v(m,l()?Pv(l()).slice(0,99).filter(I=>I.length>0):[])}),N(()=>n(m),()=>{v(r,!un(n(m)))}),N(()=>($(l()),$(i())),()=>{v(a,l()===void 0&&(i()===""||i()===void 0))}),N(()=>(n(r),n(a),$(l()),$(d())),()=>{v(s,n(r)?"Object with nested arrays":n(a)?"An empty document":fo(l())?"An object":lo(l())?"An empty array":"A ".concat(Du(l(),d())))}),Wt(),ct(!0);var g=My(),b=D(A(g),2),j=A(b),x=A(j),E=D(j,2),y=A(E);L(y,()=>n(r),I=>{P(I,zo(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},I=>{var q=zo();ne(()=>{var k;return dt(q,"".concat((k=n(s))!==null&&k!==void 0?k:""," cannot be opened in table mode."))}),P(I,q)}),L(D(y,2),()=>n(a)&&!c(),I=>{P(I,zy())},I=>{P(I,zo("You can open the document in tree mode instead."))});var S=D(E,2);Hn(S,1,()=>n(m),no,(I,q)=>{var k=$y(),X=xe(()=>function(fe){return He(l(),fe).length}(n(q))),je=A(k);ne(()=>{var fe,qe;return dt(je,"".concat((fe=n(o))!==null&&fe!==void 0?fe:"",' "').concat((qe=rr(n(q)))!==null&&qe!==void 0?qe:"",'" '))});var ae=A(D(je));ne(()=>{var fe,qe;return dt(ae,"(".concat((fe=n(X))!==null&&fe!==void 0?fe:""," ").concat((qe=n(X)!==1?"items":"item")!==null&&qe!==void 0?qe:"",")"))}),ee("click",k,()=>u()(n(q))),P(I,k)});var w=D(S,2),_=A(w);ne(()=>{var I;dt(x,n(s)),dt(_,"".concat((I=n(o))!==null&&I!==void 0?I:""," in tree mode"))}),ee("click",w,()=>f()(io.tree)),ee("click",g,()=>h()()),P(e,g),at()}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-fzj761 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-fzj761:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly:where(.svelte-fzj761)) {
  cursor: pointer;
}`);var Py=B('<button type="button" class="jse-column-header svelte-fzj761"><!></button>');ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-u14cgx {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-u14cgx {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-search-box-container:where(.svelte-u14cgx) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) .jse-hidden-input:where(.svelte-u14cgx) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-start-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx),
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-search-box-background:where(.svelte-u14cgx) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx), .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) .jse-table-root-error:where(.svelte-u14cgx) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer.jse-selected-value:where(.svelte-u14cgx) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-context-menu-anchor:where(.svelte-u14cgx) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) {
  align-items: unset;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading-space:where(.svelte-u14cgx) {
  flex: 1;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading:where(.svelte-u14cgx) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var Ry=B('<div class="jse-table-root-error svelte-u14cgx"><!></div>'),_y=B('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),Iy=B('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),qy=B('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>'),Ty=B('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>'),Dy=B('<td class="jse-table-cell svelte-u14cgx"><div class="jse-value-outer svelte-u14cgx"><!><!></div> <!></td>'),Ny=B('<td class="jse-table-cell svelte-u14cgx"></td>'),Uy=B('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>'),By=B('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr class="jse-table-invisible-start-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!>',1),Fy=B("<!> <!>",1),Ly=B('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"></label> <!>',1),Vy=B('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>'),Wy=B('<div role="table" class="jse-table-mode svelte-u14cgx"><!> <!></div> <!> <!>',1);function Hy(e,t){rt(t,!1);var o=M(void 0,!0),r=M(void 0,!0),a=M(void 0,!0),s=ho("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=xa("absolute-popup"),c=hh(),d=xs(),u=xs(),f=typeof window>"u";s("isSSR:",f);var h=p(t,"readOnly",9),m=p(t,"externalContent",9),g=p(t,"externalSelection",9),b=p(t,"mainMenuBar",9),j=p(t,"escapeControlCharacters",9),x=p(t,"escapeUnicodeCharacters",9),E=p(t,"flattenColumns",9),y=p(t,"parser",9),S=p(t,"parseMemoizeOne",9),w=p(t,"validator",9),_=p(t,"validationParser",9),I=p(t,"indentation",9),q=p(t,"onChange",9),k=p(t,"onChangeMode",9),X=p(t,"onSelect",9),je=p(t,"onRenderValue",9),ae=p(t,"onRenderMenu",9),fe=p(t,"onRenderContextMenu",9),qe=p(t,"onFocus",9),we=p(t,"onBlur",9),ze=p(t,"onSortModal",9),_e=p(t,"onTransformModal",9),$e=p(t,"onJSONEditorModal",9),he=M(void 0,!0),ce=M(void 0,!0),ie=M(void 0,!0),Ge=M(void 0,!0),le=M(void 0,!0);ad({onMount:Ao,onDestroy:Lo,getWindow:()=>zi(n(ce)),hasFocus:()=>Ie&&document.hasFocus()||Bu(n(ce)),onFocus:()=>{ut=!0,qe()&&qe()()},onBlur:()=>{ut=!1,we()&&we()()}});var de,C=M(void 0,!0),oe=M(void 0,!0),T=M(void 0,!0),re=M(void 0,!0),Ze=M(void 0,!0),se=M(!1,!0),V=M(!1,!0);function R(z){v(Ze,(de=z)?nh(n(C),de.items):void 0)}function ve(z){return vt.apply(this,arguments)}function vt(){return(vt=tt(function*(z){v(W,void 0),yield hn(z)})).apply(this,arguments)}function Be(){v(se,!1),v(V,!1),Xt()}var Ae=M(1e4,!0),K=M([],!0),me=M(void 0,!0),Ie=!1,ut=!1,Me=M(!1,!0),gt=M({},!0),Se=M(600,!0),Oe=M(0,!0),Qe=18;function jt(z){v(W,z)}function zt(z){n(W)&&z!==void 0&&(sa(z,za(n(W)))&&sa(z,Xe(n(W)))||(s("clearing selection: path does not exist anymore",n(W)),v(W,void 0)))}var Fe=M(n(C)!==void 0?Gc({json:n(C)}):void 0,!0),W=M(void 0,!0),Ot=M(void 0,!0),mt=M(!1,!0);function Tn(z){if(!h()){s("onSortByHeader",z);var Y=z.sortDirection===Zo.desc?-1:1;Mt(wh(n(C),[],z.path,Y),(Z,Ee)=>({state:Ee,sortedColumn:z}))}}var $n=gh({onChange:z=>{v(jn,z)}}),jn=M($n.getState(),!0),Qn=M(void 0,!0);function gn(z){if(z.json!==void 0||z.text!==void 0){var Y=n(C)!==void 0&&z.json!==void 0;$n.add({undo:{patch:Y?[{op:"replace",path:"",value:z.json}]:void 0,json:z.json,text:z.text,documentState:z.documentState,textIsRepaired:z.textIsRepaired,selection:hr(z.selection),sortedColumn:z.sortedColumn},redo:{patch:Y?[{op:"replace",path:"",value:n(C)}]:void 0,json:n(C),text:n(oe),documentState:n(Fe),textIsRepaired:n(mt),selection:hr(n(W)),sortedColumn:n(Ot)}})}}var Dn=M([],!0),Jn=oi(mh);function $t(z,Y,Z,Ee){ls(()=>{var Ce;try{Ce=Jn(z,Y,Z,Ee)}catch(De){Ce=[{path:[],message:"Failed to validate: "+De.message,severity:ar.warning}]}Nt(Ce,n(Dn))||(s("validationErrors changed:",Ce),v(Dn,Ce))},Ce=>s("validationErrors updated in ".concat(Ce," ms")))}function Bt(){return s("validate"),n(T)?{parseError:n(T),isRepairable:!1}:($t(n(C),w(),y(),_()),un(n(Dn))?void 0:{validationErrors:n(Dn)})}function sn(z,Y){if(s("patch",z,Y),n(C)===void 0)throw new Error("Cannot apply patch: no JSON");var Z=n(C),Ee={json:void 0,text:n(oe),documentState:n(Fe),selection:hr(n(W)),sortedColumn:n(Ot),textIsRepaired:n(mt)},Ce=th(n(C),z),De=Vf(n(C),n(Fe),z),yt=T1(n(Ot),z,n(K)),nt=typeof Y=="function"?Y(De.json,De.documentState,n(W)):void 0;return v(C,(nt==null?void 0:nt.json)!==void 0?nt.json:De.json),v(Fe,(nt==null?void 0:nt.state)!==void 0?nt.state:De.documentState),v(W,(nt==null?void 0:nt.selection)!==void 0?nt.selection:n(W)),v(Ot,(nt==null?void 0:nt.sortedColumn)!==void 0?nt.sortedColumn:yt),v(oe,void 0),v(mt,!1),v(re,void 0),v(T,void 0),$n.add({undo:ge({patch:Ce},Ee),redo:{patch:z,json:void 0,text:void 0,documentState:n(Fe),selection:hr(n(W)),sortedColumn:n(Ot),textIsRepaired:n(mt)}}),{json:n(C),previousJson:Z,undo:Ce,redo:z}}function Mt(z,Y){s("handlePatch",z,Y);var Z={json:n(C),text:n(oe)},Ee=sn(z,Y);return En(Z,Ee),Ee}function En(z,Y){if((z.json!==void 0||(z==null?void 0:z.text)!==void 0)&&q()){if(n(oe)!==void 0){var Z={text:n(oe),json:void 0};q()(Z,z,{contentErrors:Bt(),patchResult:Y})}else if(n(C)!==void 0){var Ee={text:void 0,json:n(C)};q()(Ee,z,{contentErrors:Bt(),patchResult:Y})}}}function Nn(z){s("pasted json as text",z),v(re,z)}function co(z){var Y=parseInt(z[0],10),Z=[String(Y+1),...z.slice(1)];return sa(n(C),Z)?Dt(Z):Dt(z)}function Xt(){s("focus"),n(Ge)&&(n(Ge).focus(),n(Ge).select())}function Pt(z){v(Oe,z.target.scrollTop)}function mn(){n(W)||v(W,function(){if(lo(n(C))&&!un(n(C))&&!un(n(K)))return Dt(["0",...n(K)[0]])}())}function Un(){if(n(mt)&&n(C)!==void 0){var z={json:n(C),text:n(oe)},Y={json:n(C),documentState:n(Fe),selection:n(W),sortedColumn:n(Ot),text:n(oe),textIsRepaired:n(mt)};v(oe,void 0),v(mt,!1),zt(n(C)),gn(Y),En(z,void 0)}return{json:n(C),text:n(oe)}}function hn(z){var Y=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],Z=n(se)?Xs:0,Ee=Av(z,n(K),gt,Qe),Ce=Ee-n(Oe)+Z+Qe,De=Kn(z);if(s("scrollTo",{path:z,top:Ee,scrollTop:n(Oe),elem:De}),!n(ie))return Promise.resolve();var yt=n(ie).getBoundingClientRect();if(De&&!Y){var nt=De.getBoundingClientRect();if(nt.bottom>yt.top&&nt.top<yt.bottom)return Promise.resolve()}var Ct=-Math.max(Z+2*Qe,yt.height/4);return new Promise(De?Le=>{c(De,{container:n(ie),offset:Ct,duration:300,callback:()=>{ao(z),Le()}})}:Le=>{var Zt;c(Ce,{container:n(ie),offset:Ct,duration:300,callback:(Zt=tt(function*(){yield eo(),ao(z),Le()}),function(){return Zt.apply(this,arguments)})})})}function ao(z){var Y=Kn(z);if(Y&&n(ie)){var Z=n(ie).getBoundingClientRect(),Ee=Y.getBoundingClientRect();if(Ee.right>Z.right){var Ce=Ee.right-Z.right;Uo(ie,n(ie).scrollLeft+=Ce)}if(Ee.left<Z.left){var De=Z.left-Ee.left;Uo(ie,n(ie).scrollLeft-=De)}}}function Mn(z){(function(Y){if(n(ie)){var{rowIndex:Z}=Ko(Y,n(K)),Ee=Av(Y,n(K),gt,Qe),Ce=Ee+(gt[Z]||Qe),De=Qe,yt=n(ie).getBoundingClientRect(),nt=n(Oe),Ct=n(Oe)+yt.height-De;if(Ce>Ct){var Le=Ce-Ct;Uo(ie,n(ie).scrollTop+=Le)}if(Ee<nt){var Zt=nt-Ee;Uo(ie,n(ie).scrollTop-=Zt)}}})(z),ao(z)}function Kn(z){var Y,Z,Ee=n(K).find(De=>Lr(z.slice(1),De)),Ce=Ee?z.slice(0,1).concat(Ee):z;return(Y=(Z=n(ie))===null||Z===void 0?void 0:Z.querySelector('td[data-path="'.concat(Kc(Ce),'"]')))!==null&&Y!==void 0?Y:void 0}function xn(z){var Y,{anchor:Z,left:Ee,top:Ce,width:De,height:yt,offsetTop:nt,offsetLeft:Ct,showTip:Le}=z,Zt=function(G){var{json:ye,documentState:be,selection:ue,readOnly:Ne,onEditValue:pe,onEditRow:Re,onToggleEnforceString:st,onCut:ft,onCopy:lt,onPaste:Ye,onRemove:cn,onDuplicateRow:Rn,onInsertBeforeRow:pn,onInsertAfterRow:At,onRemoveRow:Ke}=G,Et=ye!==void 0,et=!!ue,Tt=ye!==void 0&&ue?He(ye,Xe(ue)):void 0,Kt=Et&&(Cn(ue)||vo(ue)||rn(ue)),fn=!Ne&&Et&&ue!==void 0&&hl(ue),_n=fn&&!to(Tt),xo=!Ne&&Kt,Io=ue!==void 0&&Dr(ye,be,Xe(ue));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>pe(),icon:cs,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!fn},width:"11em",items:[{type:"button",icon:cs,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>pe(),disabled:!fn},{type:"button",icon:Io?$p:Mp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>st(),disabled:!_n}]},{type:"dropdown-button",main:{type:"button",onClick:()=>ft(!0),icon:us,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!xo},width:"10em",items:[{type:"button",icon:us,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>ft(!0),disabled:Ne||!Kt},{type:"button",icon:us,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>ft(!1),disabled:Ne||!Kt}]},{type:"dropdown-button",main:{type:"button",onClick:()=>lt(!0),icon:aa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Kt},width:"12em",items:[{type:"button",icon:aa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>lt(!1),disabled:!Kt},{type:"button",icon:aa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>lt(!1),disabled:!Kt}]},{type:"button",onClick:()=>Ye(),icon:Ap,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Ne||!et},{type:"button",onClick:()=>cn(),icon:Rc,text:"Remove",title:"Remove selected contents (Delete)",disabled:Ne||!Kt}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Re(),icon:cs,text:"Edit row",title:"Edit the current row",disabled:Ne||!et||!Et},{type:"button",onClick:()=>Rn(),icon:Pp,text:"Duplicate row",title:"Duplicate the current row",disabled:Ne||!et||!Et},{type:"button",onClick:()=>pn(),icon:os,text:"Insert before",title:"Insert a row before the current row",disabled:Ne||!et||!Et},{type:"button",onClick:()=>At(),icon:os,text:"Insert after",title:"Insert a row after the current row",disabled:Ne||!et||!Et},{type:"button",onClick:()=>Ke(),icon:Rc,text:"Remove row",title:"Remove current row",disabled:Ne||!et||!Et}]}]}]}({json:n(C),documentState:n(Fe),selection:n(W),readOnly:h(),onEditValue:Bn,onEditRow:te,onToggleEnforceString:Ue,onCut:Ft,onCopy:zn,onPaste:kt,onRemove:yn,onDuplicateRow:Q,onInsertBeforeRow:Rt,onInsertAfterRow:Qt,onRemoveRow:vn}),on=(Y=fe()(Zt))!==null&&Y!==void 0?Y:Zt;if(on!==!1){var O={left:Ee,top:Ce,offsetTop:nt,offsetLeft:Ct,width:De,height:yt,anchor:Z,closeOnOuterClick:!0,onClose:()=>{Ie=!1,Xt()}};Ie=!0;var F=i(Ph,{tip:Le?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:on,onRequestClose(){l(F),Xt()}},O)}}function Gn(z){if(!Mo(n(W)))if(z&&(z.stopPropagation(),z.preventDefault()),z&&z.type==="contextmenu"&&z.target!==n(Ge))xn({left:z.clientX,top:z.clientY,width:Pr,height:Ar,showTip:!1});else{var Y,Z=(Y=n(ie))===null||Y===void 0?void 0:Y.querySelector(".jse-table-cell.jse-selected-value");if(Z)xn({anchor:Z,offsetTop:2,width:Pr,height:Ar,showTip:!1});else{var Ee,Ce=(Ee=n(ie))===null||Ee===void 0?void 0:Ee.getBoundingClientRect();Ce&&xn({top:Ce.top+2,left:Ce.left+2,width:Pr,height:Ar,showTip:!1})}}}function oo(z){xn({anchor:Nf(z.target,"BUTTON"),offsetTop:0,width:Pr,height:Ar,showTip:!0})}function Bn(){if(!h()&&n(W)){var z=Xe(n(W));to(He(n(C),z))?Ve(z):v(W,Dt(z))}}function te(){!h()&&n(W)&&Ve(Xe(n(W)).slice(0,1))}function Ue(){if(!h()&&rn(n(W))){var z=n(W).path,Y=xt(z),Z=He(n(C),z),Ee=!Dr(n(C),n(Fe),z),Ce=Ee?String(Z):Rs(String(Z),y());s("handleToggleEnforceString",{enforceString:Ee,value:Z,updatedValue:Ce}),Mt([{op:"replace",path:Y,value:Ce}],(De,yt)=>({state:Ll(n(C),yt,z,{type:"value",enforceString:Ee})}))}}function wt(){return Ht.apply(this,arguments)}function Ht(){return(Ht=tt(function*(){if(s("apply pasted json",n(re)),n(re)){var{onPasteAsJson:z}=n(re);z(),setTimeout(Xt)}})).apply(this,arguments)}function kt(){v(Me,!0)}function nn(){s("clear pasted json"),v(re,void 0),Xt()}function Vt(){k()(io.text)}function Ft(z){return Yn.apply(this,arguments)}function Yn(){return(Yn=tt(function*(z){yield Oh({json:n(C),selection:n(W),indentation:z?I():void 0,readOnly:h(),parser:y(),onPatch:Mt})})).apply(this,arguments)}function zn(){return Fn.apply(this,arguments)}function Fn(){return Fn=tt(function*(){var z=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(C)!==void 0&&(yield Eh({json:n(C),selection:n(W),indentation:z?I():void 0,parser:y()}))}),Fn.apply(this,arguments)}function yn(){$h({json:n(C),text:n(oe),selection:n(W),keepSelection:!0,readOnly:h(),onChange:q(),onPatch:Mt})}function Q(){D1({json:n(C),selection:n(W),columns:n(K),readOnly:h(),onPatch:Mt})}function Rt(){N1({json:n(C),selection:n(W),columns:n(K),readOnly:h(),onPatch:Mt})}function Qt(){U1({json:n(C),selection:n(W),columns:n(K),readOnly:h(),onPatch:Mt})}function vn(){B1({json:n(C),selection:n(W),columns:n(K),readOnly:h(),onPatch:Mt})}function U(){return(U=tt(function*(z){yield Mh({char:z,selectInside:!1,json:n(C),selection:n(W),readOnly:h(),parser:y(),onPatch:Mt,onReplaceJson:ke,onSelect:jt})})).apply(this,arguments)}function J(z){var Y;z.preventDefault();var Z=(Y=z.clipboardData)===null||Y===void 0?void 0:Y.getData("text/plain");Z!==void 0&&zh({clipboardText:Z,json:n(C),selection:n(W),readOnly:h(),parser:y(),onPatch:Mt,onChangeText:Je,openRepairModal:_t})}function ke(z,Y){var Z={json:n(C),text:n(oe)},Ee={json:n(C),documentState:n(Fe),selection:n(W),sortedColumn:n(Ot),text:n(oe),textIsRepaired:n(mt)},Ce=No(z,n(Fe)),De=typeof Y=="function"?Y(z,Ce,n(W)):void 0;v(C,(De==null?void 0:De.json)!==void 0?De.json:z),v(Fe,(De==null?void 0:De.state)!==void 0?De.state:Ce),v(W,(De==null?void 0:De.selection)!==void 0?De.selection:n(W)),v(Ot,void 0),v(oe,void 0),v(mt,!1),v(T,void 0),zt(n(C)),gn(Ee),En(Z,void 0)}function Je(z,Y){s("handleChangeText");var Z={json:n(C),text:n(oe)},Ee={json:n(C),documentState:n(Fe),selection:n(W),sortedColumn:n(Ot),text:n(oe),textIsRepaired:n(mt)};try{v(C,S()(z)),v(Fe,No(n(C),n(Fe))),v(oe,void 0),v(mt,!1),v(T,void 0)}catch(De){try{v(C,S()(mr(z))),v(Fe,No(n(C),n(Fe))),v(oe,z),v(mt,!0),v(T,void 0)}catch{v(C,void 0),v(Fe,void 0),v(oe,z),v(mt,!1),v(T,n(oe)!==""?ks(n(oe),De.message||String(De)):void 0)}}if(typeof Y=="function"){var Ce=Y(n(C),n(Fe),n(W));v(C,(Ce==null?void 0:Ce.json)!==void 0?Ce.json:n(C)),v(Fe,(Ce==null?void 0:Ce.state)!==void 0?Ce.state:n(Fe)),v(W,(Ce==null?void 0:Ce.selection)!==void 0?Ce.selection:n(W))}zt(n(C)),gn(Ee),En(Z,void 0)}function Pe(z){s("select validation error",z),v(W,Dt(z.path)),hn(z.path)}function pt(z){if(n(C)!==void 0){var{id:Y,onTransform:Z,onClose:Ee}=z,Ce=z.rootPath||[];Ie=!0,_e()({id:Y||u,json:n(C),rootPath:Ce||[],onTransform:De=>{Z?Z({operations:De,json:n(C),transformedJson:br(n(C),De)}):(s("onTransform",Ce,De),Mt(De))},onClose:()=>{Ie=!1,setTimeout(Xt),Ee&&Ee()}})}}function Ve(z){s("openJSONEditorModal",{path:z}),Ie=!0,$e()({content:{json:He(n(C),z)},path:z,onPatch:Mt,onClose:()=>{Ie=!1,setTimeout(Xt)}})}function _t(z,Y){v(le,{text:z,onParse:Z=>Bl(Z,Ee=>Ei(Ee,y())),onRepair:Af,onApply:Y,onClose:Xt})}function Gt(){(function(z){h()||n(C)===void 0||(Ie=!0,ze()({id:d,json:n(C),rootPath:z,onSort:Y=>{var{operations:Z,itemPath:Ee,direction:Ce}=Y;s("onSort",Z,z,Ee,Ce),Mt(Z,(De,yt)=>({state:yt,sortedColumn:{path:Ee,sortDirection:Ce===-1?Zo.desc:Zo.asc}}))},onClose:()=>{Ie=!1,setTimeout(Xt)}}))})([])}function it(){pt({rootPath:[]})}function Jt(z){s("openFind",{findAndReplace:z}),v(se,!1),v(V,!1),eo().then(()=>{v(se,!0),v(V,z)})}function so(){if(!h()&&$n.getState().canUndo){var z=$n.undo();if(z){var Y={json:n(C),text:n(oe)};v(C,z.undo.patch?br(n(C),z.undo.patch):z.undo.json),v(Fe,z.undo.documentState),v(W,z.undo.selection),v(Ot,z.undo.sortedColumn),v(oe,z.undo.text),v(mt,z.undo.textIsRepaired),v(T,void 0),s("undo",{item:z,json:n(C)}),En(Y,z.undo.patch&&z.redo.patch?{json:n(C),previousJson:Y.json,redo:z.undo.patch,undo:z.redo.patch}:void 0),Xt(),n(W)&&hn(Xe(n(W)),!1)}}}function An(){if(!h()&&$n.getState().canRedo){var z=$n.redo();if(z){var Y={json:n(C),text:n(oe)};v(C,z.redo.patch?br(n(C),z.redo.patch):z.redo.json),v(Fe,z.redo.documentState),v(W,z.redo.selection),v(Ot,z.redo.sortedColumn),v(oe,z.redo.text),v(mt,z.redo.textIsRepaired),v(T,void 0),s("redo",{item:z,json:n(C)}),En(Y,z.undo.patch&&z.redo.patch?{json:n(C),previousJson:Y.json,redo:z.redo.patch,undo:z.undo.patch}:void 0),Xt(),n(W)&&hn(Xe(n(W)),!1)}}}function uo(z){v(Se,z.getBoundingClientRect().height)}N(()=>($(j()),$(x())),()=>{v(he,Nu({escapeControlCharacters:j(),escapeUnicodeCharacters:x()}))}),N(()=>n(se),()=>{(function(z){if(n(ie)){var Y=z?Xs:-100;n(ie).scrollTo({top:Uo(ie,n(ie).scrollTop+=Y),left:n(ie).scrollLeft})}})(n(se))}),N(()=>$(m()),()=>{(function(z){var Y={json:n(C)},Z=li(z)?z.text!==n(oe):!Nt(Y.json,z.json);if(s("update external content",{isChanged:Z}),Z){var Ee={json:n(C),documentState:n(Fe),selection:n(W),sortedColumn:n(Ot),text:n(oe),textIsRepaired:n(mt)};if(li(z))try{v(C,S()(z.text)),v(Fe,No(n(C),n(Fe))),v(oe,z.text),v(mt,!1),v(T,void 0)}catch(Ce){try{v(C,S()(mr(z.text))),v(Fe,No(n(C),n(Fe))),v(oe,z.text),v(mt,!0),v(T,void 0)}catch{v(C,void 0),v(Fe,void 0),v(oe,z.text),v(mt,!1),v(T,n(oe)!==""?ks(n(oe),Ce.message||String(Ce)):void 0)}}else v(C,z.json),v(Fe,No(n(C),n(Fe))),v(oe,void 0),v(mt,!1),v(T,void 0);zt(n(C)),v(Ot,void 0),gn(Ee)}})(m())}),N(()=>$(g()),()=>{(function(z){Nt(n(W),z)||(s("applyExternalSelection",{selection:n(W),externalSelection:z}),Zu(z)&&v(W,z))})(g())}),N(()=>(n(K),n(C),$(E()),n(Ae)),()=>{v(K,lo(n(C))?function(z,Y){var Z=new Set(Y.map(xt)),Ee=new Set(z.map(xt));for(var Ce of Z)Ee.has(Ce)||Z.delete(Ce);for(var De of Ee)Z.has(De)||Z.add(De);return[...Z].map(gr)}(R1(n(C),E(),n(Ae)),n(K)):[])}),N(()=>(n(C),n(K)),()=>{v(me,!(!n(C)||un(n(K))))}),N(()=>(n(C),n(Ae)),()=>{v(o,Array.isArray(n(C))&&n(C).length>n(Ae))}),N(()=>(n(Oe),n(Se),n(C),n(se),Xs),()=>{v(r,_1(n(Oe),n(Se),n(C),gt,Qe,n(se)?Xs:0))}),N(()=>n(C),()=>{n(C),n(ie)&&n(ie).scrollTo({top:n(ie).scrollTop,left:n(ie).scrollLeft})}),N(()=>n(W),()=>{var z;z=n(W),Nt(z,g())||(s("onSelect",z),X()(z))}),N(()=>($(h()),$(y()),n(he),n(C),n(Fe),$(je())),()=>{v(Qn,{mode:io.table,readOnly:h(),parser:y(),normalization:n(he),getJson:()=>n(C),getDocumentState:()=>n(Fe),findElement:Kn,findNextInside:co,focus:Xt,onPatch:(z,Y)=>Mt(function(Z,Ee){return Z.flatMap(Ce=>{if(Eu(Ce)){var De=gr(Ce.path);if(De.length>0){for(var yt=[Ce],nt=Lt(De);nt.length>0&&!sa(Ee,nt);)yt.unshift({op:"add",path:xt(nt),value:{}}),nt=Lt(nt);return yt}}return Ce})}(z,n(C)),Y),onSelect:jt,onFind:Jt,onPasteJson:Nn,onRenderValue:je()})}),N(()=>(n(C),$(w()),$(y()),$(_())),()=>{$t(n(C),w(),y(),_())}),N(()=>(n(Dn),n(K)),()=>{v(a,I1(n(Dn),n(K)))}),Wt(),ct(!0);var ro=Wy();ee("mousedown",Tr,function(z){!_s(z.target,Y=>Y===n(ce))&&Mo(n(W))&&(s("click outside the editor, exit edit mode"),v(W,hr(n(W))),ut&&n(Ge)&&(n(Ge).focus(),n(Ge).blur()),s("blur (outside editor)"),n(Ge)&&n(Ge).blur())});var ln=Te(ro),Pn=A(ln);L(Pn,b,z=>{(function(Y,Z){rt(Z,!1);var Ee=p(Z,"containsValidArray",9),Ce=p(Z,"readOnly",9),De=p(Z,"showSearch",13,!1),yt=p(Z,"historyState",9),nt=p(Z,"onSort",9),Ct=p(Z,"onTransform",9),Le=p(Z,"onContextMenu",9),Zt=p(Z,"onUndo",9),on=p(Z,"onRedo",9),O=p(Z,"onRenderMenu",9);function F(){De(!De())}var G=M(void 0,!0),ye=M(void 0,!0);N(()=>($(Ce()),$(nt()),$(Ee()),$(Ct()),$(Le()),$(Zt()),$(yt()),$(on())),()=>{v(G,Ce()?[{type:"space"}]:[{type:"button",icon:sl,title:"Sort",className:"jse-sort",onClick:nt(),disabled:Ce()||!Ee()},{type:"button",icon:il,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Ct(),disabled:Ce()||!Ee()},{type:"button",icon:Al,title:"Search (Ctrl+F)",className:"jse-search",onClick:F,disabled:!Ee()},{type:"button",icon:Ep,title:Vu,className:"jse-contextmenu",onClick:Le()},{type:"separator"},{type:"button",icon:Cu,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Zt(),disabled:!yt().canUndo},{type:"button",icon:Su,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:on(),disabled:!yt().canRedo},{type:"space"}])}),N(()=>($(O()),n(G)),()=>{v(ye,O()(n(G))||n(G))}),Wt(),ct(!0),Kl(Y,{get items(){return n(ye)}}),at()})(z,{get containsValidArray(){return n(me)},get readOnly(){return h()},get showSearch(){return n(se)},set showSearch(Y){v(se,Y)},get historyState(){return n(jn)},onSort:Gt,onTransform:it,onUndo:so,onRedo:An,onContextMenu:oo,get onRenderMenu(){return ae()},$$legacy:!0})}),L(D(Pn,2),()=>!f,z=>{var Y=Ly(),Z=Te(Y),Ee=A(Z);Ee.readOnly=!0,On(Ee,Ce=>v(Ge,Ce),()=>n(Ge)),L(D(Z,2),()=>n(me),Ce=>{var De=By(),yt=Te(De);kh(A(yt),{get json(){return n(C)},get documentState(){return n(Fe)},get parser(){return y()},get showSearch(){return n(se)},get showReplace(){return n(V)},get readOnly(){return h()},get columns(){return n(K)},onSearch:R,onFocus:ve,onPatch:Mt,onClose:Be});var nt=D(yt,2),Ct=A(nt),Le=A(Ct),Zt=A(Le),on=A(Zt);L(A(on),()=>{var pe;return!un((pe=n(a))===null||pe===void 0?void 0:pe.root)},pe=>{var Re=It(),st=xe(()=>{var ft;return Cc([],(ft=n(a))===null||ft===void 0?void 0:ft.root)});L(Te(Re),()=>n(st),ft=>{var lt=Ry();js(A(lt),{get validationError(){return n(st)},onExpand:Jo}),P(ft,lt)}),P(pe,Re)});var O=D(on);Hn(O,1,()=>n(K),no,(pe,Re)=>{var st=_y();(function(ft,lt){rt(lt,!1);var Ye=M(void 0,!0),cn=M(void 0,!0),Rn=M(void 0,!0),pn=p(lt,"path",9),At=p(lt,"sortedColumn",9),Ke=p(lt,"readOnly",9),Et=p(lt,"onSort",9);N(()=>($(pn()),rr),()=>{v(Ye,un(pn())?"values":rr(pn()))}),N(()=>($(At()),$(pn())),()=>{var fn;v(cn,At()&&Nt(pn(),(fn=At())===null||fn===void 0?void 0:fn.path)?At().sortDirection:void 0)}),N(()=>(n(cn),ov),()=>{v(Rn,n(cn)?ov[n(cn)]:void 0)}),Wt(),ct(!0);var et=Ey(),Tt=A(et),Kt=A(Tt);ne(()=>dt(Kt,ui(n(Ye),50))),L(D(Tt,2),()=>n(cn)!==void 0,fn=>{var _n=Oy(),xo=A(_n),Io=xe(()=>n(cn)===Zo.asc?ha:Zg);Ut(xo,{get data(){return n(Io)}}),ne(()=>Yt(_n,"title","Currently sorted in ".concat(n(Rn)," order"))),P(fn,_n)}),ne(()=>{Yt(et,"title",Ke()?n(Ye):n(Ye)+" (Click to sort the data by this column)"),We(et,"jse-readonly",Ke())}),ee("click",et,function(){Ke()||Et()({path:pn(),sortDirection:n(cn)===Zo.asc?Zo.desc:Zo.asc})}),P(ft,et),at()})(A(st),{get path(){return n(Re)},get sortedColumn(){return n(Ot)},get readOnly(){return h()},onSort:Tn}),P(pe,st)}),L(D(O),()=>n(o),pe=>{var Re=Iy(),st=A(Re),ft=xe(()=>Array.isArray(n(C))?n(C).length:0);(function(lt,Ye){rt(Ye,!1);var cn=p(Ye,"count",9),Rn=p(Ye,"maxSampleCount",9),pn=p(Ye,"readOnly",9),At=p(Ye,"onRefresh",9);ct(!0);var Ke=Py();Ut(A(Ke),{data:em}),ne(()=>{Yt(Ke,"title","The Columns are created by sampling ".concat(Rn()," items out of ").concat(cn(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower."),We(Ke,"jse-readonly",pn())}),ee("click",Ke,()=>At()()),P(lt,Ke),at()})(st,{get count(){return n(ft)},get maxSampleCount(){return n(Ae)},get readOnly(){return h()},onRefresh:()=>v(Ae,1/0)}),P(pe,Re)});var F=D(Zt),G=A(F),ye=D(F);Hn(ye,1,()=>n(r).visibleItems,no,(pe,Re,st)=>{var ft=Uy(),lt=xe(()=>n(r).startIndex+st),Ye=xe(()=>n(a).rows[n(lt)]),cn=xe(()=>{var Ke;return Cc([String(n(lt))],(Ke=n(Ye))===null||Ke===void 0?void 0:Ke.row)}),Rn=xe(()=>Ea(n(C),n(Ze),[String(n(lt))])),pn=A(ft);wf(pn,()=>n(lt),Ke=>{var Et=qy(),et=A(Et);L(D(et),()=>n(cn),Tt=>{js(Tt,{get validationError(){return n(cn)},onExpand:Jo})}),Eo(Et,(Tt,Kt)=>_v(Tt,Kt),()=>Tt=>function(Kt,fn){gt[fn]=Kt.getBoundingClientRect().height}(Tt,n(lt))),ne(()=>{var Tt;return dt(et,"".concat((Tt=n(lt))!==null&&Tt!==void 0?Tt:""," "))}),P(Ke,Et)});var At=D(pn);Hn(At,1,()=>n(K),no,(Ke,Et,et)=>{var Tt=Dy(),Kt=xe(()=>[String(n(lt))].concat(n(Et))),fn=xe(()=>He(n(Re),n(Et))),_n=xe(()=>rn(n(W))&&Lr(n(W).path,n(Kt))),xo=xe(()=>{var ko;return(ko=n(Ye))===null||ko===void 0?void 0:ko.columns[et]}),Io=xe(()=>Cc(n(Kt),n(xo)));ne(()=>Yt(Tt,"data-path",Kc(n(Kt))));var wa=A(Tt),Va=A(wa);L(Va,()=>to(n(fn)),ko=>{var qo=xe(()=>ou(Ea(n(Re),n(Rn),n(Et)))),Kr=xe(()=>!!n(qo)&&n(qo).some(Zn=>Zn.active)),Yr=xe(()=>!un(n(qo)));(function(Zn,wn){rt(wn,!1);var Qo=p(wn,"path",9),Wa=p(wn,"value",9),Xr=p(wn,"parser",9),zr=p(wn,"isSelected",9),Ri=p(wn,"containsSearchResult",9),Ho=p(wn,"containsActiveSearchResult",9),_i=p(wn,"onEdit",9);ct(!0);var Qr=Sy(),Ts=A(Qr);ne(()=>{var Ds;return dt(Ts,ui((Ds=Xr().stringify(Wa()))!==null&&Ds!==void 0?Ds:"",50))}),ne(()=>{We(Qr,"jse-selected",zr()),We(Qr,"jse-highlight",Ri()),We(Qr,"jse-active",Ho())}),ee("dblclick",Qr,()=>_i()(Qo())),P(Zn,Qr),at()})(ko,{get path(){return n(Kt)},get value(){return n(fn)},get parser(){return y()},get isSelected(){return n(_n)},get containsSearchResult(){return n(Yr)},get containsActiveSearchResult(){return n(Kr)},onEdit:Ve})},ko=>{var qo=xe(()=>{var wn;return(wn=Ea(n(C),n(Ze),n(Kt)))===null||wn===void 0?void 0:wn.searchResults}),Kr=xe(()=>n(fn)!==void 0?n(fn):""),Yr=xe(()=>Dr(n(C),n(Fe),n(Kt))),Zn=xe(()=>n(_n)?n(W):void 0);yh(ko,{get path(){return n(Kt)},get value(){return n(Kr)},get enforceString(){return n(Yr)},get selection(){return n(Zn)},get searchResultItems(){return n(qo)},get context(){return n(Qn)}})}),L(D(Va),()=>!h()&&n(_n)&&!Mo(n(W)),ko=>{var qo=Ty();na(A(qo),{selected:!0,onContextMenu:xn}),P(ko,qo)}),L(D(wa,2),()=>n(Io),ko=>{js(ko,{get validationError(){return n(Io)},onExpand:Jo})}),ne(()=>We(wa,"jse-selected-value",n(_n))),P(Ke,Tt)}),L(D(At),()=>n(o),Ke=>{P(Ke,Ny())}),P(pe,ft)});var be=A(D(ye));On(nt,pe=>v(ie,pe),()=>n(ie)),Eo(nt,(pe,Re)=>_v(pe,Re),()=>uo),bo(()=>ee("scroll",nt,Pt));var ue=D(nt,2);L(ue,()=>n(re),pe=>{var Re=xe(()=>"You pasted a JSON ".concat(Array.isArray(n(re).contents)?"array":"object"," as text"));ur(pe,{type:"info",get message(){return n(Re)},actions:[{icon:ys,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:wt},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:nn}]})});var Ne=D(ue,2);L(Ne,()=>n(mt),pe=>{var Re=xe(()=>h()?[]:[{icon:Ou,text:"Ok",title:"Accept the repaired document",onClick:Un},{icon:ll,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Vt}]);ur(pe,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Re)},onClose:Xt})}),sd(D(Ne,2),{get validationErrors(){return n(Dn)},selectError:Pe}),ne(()=>{We(F,"jse-search-box-background",n(se)),Yt(G,"colspan",n(K).length),hs(G,"height",n(r).startHeight+"px"),Yt(be,"colspan",n(K).length),hs(be,"height",n(r).endHeight+"px")}),P(Ce,De)},Ce=>{var De=It();L(Te(De),()=>n(T)&&n(oe)!==void 0&&n(oe)!=="",yt=>{var nt=Fy(),Ct=Te(nt),Le=xe(()=>h()?[]:[{icon:ll,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Vt}]);ur(Ct,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Le)}}),Ah(D(Ct,2),{get text(){return n(oe)},get json(){return n(C)},get indentation(){return I()},get parser(){return y()}}),P(yt,nt)},yt=>{Ay(yt,{get text(){return n(oe)},get json(){return n(C)},get readOnly(){return h()},get parser(){return y()},openJSONEditorModal:Ve,get onChangeMode(){return k()},onClick:()=>{Xt()}})},!0),P(Ce,De)}),ee("paste",Ee,J),P(z,Y)},z=>{P(z,Vy())}),On(ln,z=>v(ce,z),()=>n(ce));var po=D(ln,2);return L(po,()=>n(Me),z=>{jh(z,{onClose:()=>v(Me,!1)})}),L(D(po,2),()=>n(le),z=>{xh(z,da(()=>n(le),{onClose:()=>{var Y;(Y=n(le))===null||Y===void 0||Y.onClose(),v(le,void 0)}}))}),ne(()=>We(ln,"no-main-menu",!b())),ee("mousedown",ln,function(z){if(z.buttons===1||z.buttons===2){var Y=z.target;Y.isContentEditable||Xt();var Z=Uf(Y);if(Z){if(Mo(n(W))&&fi(n(C),n(W),Z))return;v(W,Dt(Z)),z.preventDefault()}}}),ee("keydown",ln,function(z){var Y=Fr(z);if(s("keydown",{combo:Y,key:z.key}),Y==="Ctrl+X"&&(z.preventDefault(),Ft(!0)),Y==="Ctrl+Shift+X"&&(z.preventDefault(),Ft(!1)),Y==="Ctrl+C"&&(z.preventDefault(),zn(!0)),Y==="Ctrl+Shift+C"&&(z.preventDefault(),zn(!1)),Y==="Ctrl+D"&&z.preventDefault(),Y!=="Delete"&&Y!=="Backspace"||(z.preventDefault(),yn()),Y==="Insert"&&z.preventDefault(),Y==="Ctrl+A"&&z.preventDefault(),Y==="Ctrl+Q"&&Gn(z),Y==="ArrowLeft"&&(z.preventDefault(),mn(),n(W))){var Z=function(Ct,Le){var{rowIndex:Zt,columnIndex:on}=Ko(Xe(Le),Ct);return on>0?Dt(Sa({rowIndex:Zt,columnIndex:on-1},Ct)):Le}(n(K),n(W));v(W,Z),Mn(Xe(Z))}if(Y==="ArrowRight"&&(z.preventDefault(),mn(),n(W))){var Ee=function(Ct,Le){var{rowIndex:Zt,columnIndex:on}=Ko(Xe(Le),Ct);return on<Ct.length-1?Dt(Sa({rowIndex:Zt,columnIndex:on+1},Ct)):Le}(n(K),n(W));v(W,Ee),Mn(Xe(Ee))}if(Y==="ArrowUp"&&(z.preventDefault(),mn(),n(W))){var Ce=function(Ct,Le){var{rowIndex:Zt,columnIndex:on}=Ko(Xe(Le),Ct);return Zt>0?Dt(Sa({rowIndex:Zt-1,columnIndex:on},Ct)):Le}(n(K),n(W));v(W,Ce),Mn(Xe(Ce))}if(Y==="ArrowDown"&&(z.preventDefault(),mn(),n(W))){var De=function(Ct,Le,Zt){var{rowIndex:on,columnIndex:O}=Ko(Xe(Zt),Le);return on<Ct.length-1?Dt(Sa({rowIndex:on+1,columnIndex:O},Le)):Zt}(n(C),n(K),n(W));v(W,De),Mn(Xe(De))}if(Y==="Enter"&&n(W)&&rn(n(W))){z.preventDefault();var yt=n(W).path;to(He(n(C),yt))?Ve(yt):h()||v(W,ge(ge({},n(W)),{},{edit:!0}))}if(Y.replace(/^Shift\+/,"").length===1&&n(W))return z.preventDefault(),void function(Ct){U.apply(this,arguments)}(z.key);if(Y==="Ctrl+Enter"&&rn(n(W))){z.preventDefault();var nt=He(n(C),n(W).path);Ul(nt)&&window.open(String(nt),"_blank")}Y==="Escape"&&n(W)&&(z.preventDefault(),v(W,void 0)),Y==="Ctrl+F"&&(z.preventDefault(),Jt(!1)),Y==="Ctrl+H"&&(z.preventDefault(),Jt(!0)),Y==="Ctrl+Z"&&(z.preventDefault(),so()),Y==="Ctrl+Shift+Z"&&(z.preventDefault(),An())}),ee("contextmenu",ln,Gn),P(e,ro),bt(t,"validate",Bt),bt(t,"patch",sn),bt(t,"focus",Xt),bt(t,"acceptAutoRepair",Un),bt(t,"scrollTo",hn),bt(t,"findElement",Kn),bt(t,"openTransformModal",pt),at({validate:Bt,patch:sn,focus:Xt,acceptAutoRepair:Un,scrollTo:hn,findElement:Kn,openTransformModal:pt})}function Iv(e,t){rt(t,!1);var o=p(t,"content",8),r=p(t,"selection",8),a=p(t,"readOnly",8),s=p(t,"indentation",8),i=p(t,"tabSize",8),l=p(t,"mode",8),c=p(t,"mainMenuBar",8),d=p(t,"navigationBar",8),u=p(t,"statusBar",8),f=p(t,"askToFormat",8),h=p(t,"escapeControlCharacters",8),m=p(t,"escapeUnicodeCharacters",8),g=p(t,"flattenColumns",8),b=p(t,"parser",8),j=p(t,"parseMemoizeOne",8),x=p(t,"validator",8),E=p(t,"validationParser",8),y=p(t,"pathParser",8),S=p(t,"insideModal",8),w=p(t,"onChange",8),_=p(t,"onChangeMode",8),I=p(t,"onSelect",8),q=p(t,"onRenderValue",8),k=p(t,"onClassName",8),X=p(t,"onRenderMenu",8),je=p(t,"onRenderContextMenu",8),ae=p(t,"onError",8),fe=p(t,"onFocus",8),qe=p(t,"onBlur",8),we=p(t,"onSortModal",8),ze=p(t,"onTransformModal",8),_e=p(t,"onJSONEditorModal",8),$e=M(),he=M(),ce=M(),ie=M(),Ge={type:"separator"},le=M(),de=M();function C(K){if(n($e))return n($e).patch(K);if(n(he))return n(he).patch(K);if(n(ce))return n(ce).patch(K);throw new Error('Method patch is not available in mode "'.concat(l(),'"'))}function oe(K,me){if(n($e))return n($e).expand(K,me);throw new Error('Method expand is not available in mode "'.concat(l(),'"'))}function T(K,me){if(n($e))return n($e).collapse(K,me);throw new Error('Method collapse is not available in mode "'.concat(l(),'"'))}function re(K){if(n(ce))n(ce).openTransformModal(K);else if(n($e))n($e).openTransformModal(K);else{if(!n(he))throw new Error('Method transform is not available in mode "'.concat(l(),'"'));n(he).openTransformModal(K)}}function Ze(){if(n(ce))return n(ce).validate();if(n($e))return n($e).validate();if(n(he))return n(he).validate();throw new Error('Method validate is not available in mode "'.concat(l(),'"'))}function se(){return n($e)?n($e).acceptAutoRepair():o()}function V(K){if(n($e))return n($e).scrollTo(K);if(n(he))return n(he).scrollTo(K);throw new Error('Method scrollTo is not available in mode "'.concat(l(),'"'))}function R(K){if(n($e))return n($e).findElement(K);if(n(he))return n(he).findElement(K);throw new Error('Method findElement is not available in mode "'.concat(l(),'"'))}function ve(){n(ce)?n(ce).focus():n($e)?n($e).focus():n(he)&&n(he).focus()}function vt(){return Be.apply(this,arguments)}function Be(){return(Be=tt(function*(){n(ce)&&(yield n(ce).refresh())})).apply(this,arguments)}N(()=>($(l()),$(_())),()=>{v(ie,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(l(),")"),className:"jse-group-button jse-first"+(l()===io.text?" jse-selected":""),onClick:()=>_()(io.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(l(),")"),className:"jse-group-button "+(l()===io.tree?" jse-selected":""),onClick:()=>_()(io.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(l(),")"),className:"jse-group-button jse-last"+(l()===io.table?" jse-selected":""),onClick:()=>_()(io.table)}])}),N(()=>(n(ie),$(X()),$(l()),$(S()),$(a())),()=>{v(le,K=>{var me=Ff(K[0])?n(ie).concat(K):n(ie).concat(Ge,K),Ie=Pc(me);return X()(me,{mode:l(),modal:S(),readOnly:a()})||Ie})}),N(()=>($(je()),$(l()),$(S()),$(a()),$(r())),()=>{v(de,K=>{var me,Ie=Pc(K);return(me=je()(K,{mode:l(),modal:S(),readOnly:a(),selection:r()}))!==null&&me!==void 0?me:!a()&&Ie})}),Wt(),ct();var Ae=It();return L(Te(Ae),()=>l()===io.text||String(l())==="code",K=>{On(Cy(K,{get externalContent(){return o()},get externalSelection(){return r()},get readOnly(){return a()},get indentation(){return s()},get tabSize(){return i()},get mainMenuBar(){return c()},get statusBar(){return u()},get askToFormat(){return f()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get validator(){return x()},get validationParser(){return E()},get onChange(){return w()},get onSelect(){return I()},get onChangeMode(){return _()},get onError(){return ae()},get onFocus(){return fe()},get onBlur(){return qe()},get onRenderMenu(){return n(le)},get onSortModal(){return we()},get onTransformModal(){return ze()},$$legacy:!0}),me=>v(ce,me),()=>n(ce))},K=>{var me=It();L(Te(me),()=>l()===io.table,Ie=>{On(Hy(Ie,{get externalContent(){return o()},get externalSelection(){return r()},get readOnly(){return a()},get mainMenuBar(){return c()},get escapeControlCharacters(){return h()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return g()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return E()},get indentation(){return s()},get onChange(){return w()},get onChangeMode(){return _()},get onSelect(){return I()},get onRenderValue(){return q()},get onFocus(){return fe()},get onBlur(){return qe()},get onRenderMenu(){return n(le)},get onRenderContextMenu(){return n(de)},get onSortModal(){return we()},get onTransformModal(){return ze()},get onJSONEditorModal(){return _e()},$$legacy:!0}),ut=>v(he,ut),()=>n(he))},Ie=>{On(fu(Ie,{get externalContent(){return o()},get externalSelection(){return r()},get readOnly(){return a()},get indentation(){return s()},get mainMenuBar(){return c()},get navigationBar(){return d()},get escapeControlCharacters(){return h()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return E()},get pathParser(){return y()},get onError(){return ae()},get onChange(){return w()},get onChangeMode(){return _()},get onSelect(){return I()},get onRenderValue(){return q()},get onClassName(){return k()},get onFocus(){return fe()},get onBlur(){return qe()},get onRenderMenu(){return n(le)},get onRenderContextMenu(){return n(de)},get onSortModal(){return we()},get onTransformModal(){return ze()},get onJSONEditorModal(){return _e()},$$legacy:!0}),ut=>v($e,ut),()=>n($e))},!0),P(K,me)}),P(e,Ae),bt(t,"patch",C),bt(t,"expand",oe),bt(t,"collapse",T),bt(t,"transform",re),bt(t,"validate",Ze),bt(t,"acceptAutoRepair",se),bt(t,"scrollTo",V),bt(t,"findElement",R),bt(t,"focus",ve),bt(t,"refresh",vt),at({patch:C,expand:oe,collapse:T,transform:re,validate:Ze,acceptAutoRepair:se,scrollTo:V,findElement:R,focus:ve,refresh:vt})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-v0el4e {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) .jse-label-inner:where(.svelte-v0el4e) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-modal-inline-editor:where(.svelte-v0el4e) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) .jse-error:where(.svelte-v0el4e) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var Jy=B('<div class="jse-error svelte-v0el4e"> </div>'),Ky=B('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>'),Yy=B('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>'),Xy=B('<button type="button" class="jse-primary svelte-v0el4e">Close</button>'),Qy=B('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>',1),Gy=B('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>'),Zy={};ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-1v9c92j {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) th:where(.svelte-1v9c92j),
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) td:where(.svelte-1v9c92j) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j input.jse-path:where(.svelte-1v9c92j) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-1v9c92j .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) {
  height: 200px;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) .jse-error:where(.svelte-1v9c92j) {
  color: var(--jse-error-color, #ee5341);
}`);var Ga=Nl(()=>Zy),ew=B('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>'),tw=B('<div class="jse-error svelte-1v9c92j"> </div>'),nw=B('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"><col width="75%"></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>',1);ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-57bmz4 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-57bmz4:not(.jse-focus:where(.svelte-57bmz4)) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var ow=B('<div class="jse-main svelte-57bmz4"><!></div> <!> <!> <!>',1);function rw(e,t){rt(t,!1);var o=M(void 0,!0),r=ho("jsoneditor:JSONEditor"),a={text:""},s=!1,i=io.tree,l=!0,c=!0,d=!0,u=!0,f=!1,h=!1,m=!0,g=JSON,b=void 0,j=JSON,x={parse:jj,stringify:rr},E=[N0],y=E[0].id,S=Jo,w=void 0,_=void 0,I=bj,q=Jo,k=Jo,X=Jo,je=Jo,ae=Q=>{console.error(Q),alert(Q.toString())},fe=Jo,qe=Jo,we=p(t,"content",13,a),ze=p(t,"selection",13,void 0),_e=p(t,"readOnly",13,s),$e=p(t,"indentation",13,2),he=p(t,"tabSize",13,4),ce=p(t,"mode",13,i),ie=p(t,"mainMenuBar",13,l),Ge=p(t,"navigationBar",13,c),le=p(t,"statusBar",13,d),de=p(t,"askToFormat",13,u),C=p(t,"escapeControlCharacters",13,f),oe=p(t,"escapeUnicodeCharacters",13,h),T=p(t,"flattenColumns",13,m),re=p(t,"parser",13,g),Ze=p(t,"validator",13,b),se=p(t,"validationParser",13,j),V=p(t,"pathParser",13,x),R=p(t,"queryLanguages",13,E),ve=p(t,"queryLanguageId",13,y),vt=p(t,"onChangeQueryLanguage",13,S),Be=p(t,"onChange",13,w),Ae=p(t,"onSelect",13,_),K=p(t,"onRenderValue",13,I),me=p(t,"onClassName",13,q),Ie=p(t,"onRenderMenu",13,k),ut=p(t,"onRenderContextMenu",13,X),Me=p(t,"onChangeMode",13,je),gt=p(t,"onError",13,ae),Se=p(t,"onFocus",13,fe),Oe=p(t,"onBlur",13,qe),Qe=M(ss(),!0),jt=M(!1,!0),zt=M(void 0,!0),Fe=M(void 0,!0),W=M(void 0,!0),Ot=M(void 0,!0),mt=M(re(),!0);function Tn(){return we()}function $n(Q){return jn.apply(this,arguments)}function jn(){return(jn=tt(function*(Q){r("set");var Rt=ic(Q);if(Rt)throw new Error(Rt);v(Qe,ss()),we(Q)})).apply(this,arguments)}function Qn(Q){return gn.apply(this,arguments)}function gn(){return(gn=tt(function*(Q){r("update");var Rt=ic(Q);if(Rt)throw new Error(Rt);we(Q),yield eo()})).apply(this,arguments)}function Dn(Q){return Jn.apply(this,arguments)}function Jn(){return(Jn=tt(function*(Q){var Rt=n(zt).patch(Q);return yield eo(),Rt})).apply(this,arguments)}function $t(Q){return Bt.apply(this,arguments)}function Bt(){return(Bt=tt(function*(Q){ze(Q),yield eo()})).apply(this,arguments)}function sn(Q,Rt){return Mt.apply(this,arguments)}function Mt(){return(Mt=tt(function*(Q,Rt){n(zt).expand(Q,Rt),yield eo()})).apply(this,arguments)}function En(Q){return Nn.apply(this,arguments)}function Nn(){return Nn=tt(function*(Q){var Rt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(zt).collapse(Q,Rt),yield eo()}),Nn.apply(this,arguments)}function co(Q){n(zt).transform(Q)}function Xt(){return n(zt).validate()}function Pt(){return mn.apply(this,arguments)}function mn(){return mn=tt(function*(){var Q=n(zt).acceptAutoRepair();return yield eo(),Q}),mn.apply(this,arguments)}function Un(Q){return hn.apply(this,arguments)}function hn(){return(hn=tt(function*(Q){yield n(zt).scrollTo(Q)})).apply(this,arguments)}function ao(Q){return n(zt).findElement(Q)}function Mn(){return Kn.apply(this,arguments)}function Kn(){return(Kn=tt(function*(){n(zt).focus(),yield eo()})).apply(this,arguments)}function xn(){return Gn.apply(this,arguments)}function Gn(){return(Gn=tt(function*(){yield n(zt).refresh()})).apply(this,arguments)}function oo(Q){return Bn.apply(this,arguments)}function Bn(){return(Bn=tt(function*(Q){var Rt,Qt,vn,U,J,ke,Je,Pe,pt,Ve,_t,Gt,it,Jt,so,An,uo,ro,ln,Pn,po,z,Y,Z,Ee,Ce,De,yt,nt,Ct=Object.keys(Q);for(var Le of Ct)switch(Le){case"content":we((Rt=Q[Le])!==null&&Rt!==void 0?Rt:a);break;case"readOnly":_e((Qt=Q[Le])!==null&&Qt!==void 0?Qt:s);break;case"indentation":$e((vn=Q[Le])!==null&&vn!==void 0?vn:2);break;case"tabSize":he((U=Q[Le])!==null&&U!==void 0?U:4);break;case"mode":ce((J=Q[Le])!==null&&J!==void 0?J:i);break;case"mainMenuBar":ie((ke=Q[Le])!==null&&ke!==void 0?ke:l);break;case"navigationBar":Ge((Je=Q[Le])!==null&&Je!==void 0?Je:c);break;case"statusBar":le((Pe=Q[Le])!==null&&Pe!==void 0?Pe:d);break;case"askToFormat":de((pt=Q[Le])!==null&&pt!==void 0?pt:u);break;case"escapeControlCharacters":C((Ve=Q[Le])!==null&&Ve!==void 0?Ve:f);break;case"escapeUnicodeCharacters":oe((_t=Q[Le])!==null&&_t!==void 0?_t:h);break;case"flattenColumns":T((Gt=Q[Le])!==null&&Gt!==void 0?Gt:m);break;case"parser":re((it=Q[Le])!==null&&it!==void 0?it:g);break;case"validator":Ze((Jt=Q[Le])!==null&&Jt!==void 0?Jt:b);break;case"validationParser":se((so=Q[Le])!==null&&so!==void 0?so:j);break;case"pathParser":V((An=Q[Le])!==null&&An!==void 0?An:x);break;case"queryLanguages":R((uo=Q[Le])!==null&&uo!==void 0?uo:E);break;case"queryLanguageId":ve((ro=Q[Le])!==null&&ro!==void 0?ro:y);break;case"onChangeQueryLanguage":vt((ln=Q[Le])!==null&&ln!==void 0?ln:S);break;case"onChange":Be((Pn=Q[Le])!==null&&Pn!==void 0?Pn:w);break;case"onRenderValue":K((po=Q[Le])!==null&&po!==void 0?po:I);break;case"onClassName":me((z=Q[Le])!==null&&z!==void 0?z:q);break;case"onRenderMenu":Ie((Y=Q[Le])!==null&&Y!==void 0?Y:k);break;case"onRenderContextMenu":ut((Z=Q[Le])!==null&&Z!==void 0?Z:X);break;case"onChangeMode":Me((Ee=Q[Le])!==null&&Ee!==void 0?Ee:je);break;case"onSelect":Ae((Ce=Q[Le])!==null&&Ce!==void 0?Ce:_);break;case"onError":gt((De=Q[Le])!==null&&De!==void 0?De:ae);break;case"onFocus":Se((yt=Q[Le])!==null&&yt!==void 0?yt:fe);break;case"onBlur":Oe((nt=Q[Le])!==null&&nt!==void 0?nt:qe);break;default:Zt(Le)}function Zt(on){r('Unknown property "'.concat(on,'"'))}R().some(on=>on.id===ve())||ve(R()[0].id),yield eo()})).apply(this,arguments)}function te(){return Ue.apply(this,arguments)}function Ue(){return(Ue=tt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function wt(Q,Rt,Qt){we(Q),Be()&&Be()(Q,Rt,Qt)}function Ht(Q){ze(Q),Ae()&&Ae()(Pc(Q))}function kt(){v(jt,!0),Se()&&Se()()}function nn(){v(jt,!1),Oe()&&Oe()()}function Vt(Q){return Ft.apply(this,arguments)}function Ft(){return(Ft=tt(function*(Q){ce()!==Q&&(ce(Q),yield eo(),yield Mn(),Me()(Q))})).apply(this,arguments)}function Yn(Q){r("handleChangeQueryLanguage",Q),ve(Q),vt()(Q)}function zn(Q){var{id:Rt,json:Qt,rootPath:vn,onTransform:U,onClose:J}=Q;_e()||v(Ot,{id:Rt,json:Qt,rootPath:vn,indentation:$e(),escapeControlCharacters:C(),escapeUnicodeCharacters:oe(),parser:re(),parseMemoizeOne:n(o),validationParser:se(),pathParser:V(),queryLanguages:R(),queryLanguageId:ve(),onChangeQueryLanguage:Yn,onRenderValue:K(),onRenderMenu:ke=>Ie()(ke,{mode:ce(),modal:!0,readOnly:_e()}),onRenderContextMenu:ke=>ut()(ke,{mode:ce(),modal:!0,readOnly:_e(),selection:ze()}),onClassName:me(),onTransform:U,onClose:J})}function Fn(Q){_e()||v(W,Q)}function yn(Q){var{content:Rt,path:Qt,onPatch:vn,onClose:U}=Q;r("onJSONEditorModal",{content:Rt,path:Qt}),v(Fe,{content:Rt,path:Qt,onPatch:vn,readOnly:_e(),indentation:$e(),tabSize:he(),mainMenuBar:ie(),navigationBar:Ge(),statusBar:le(),askToFormat:de(),escapeControlCharacters:C(),escapeUnicodeCharacters:oe(),flattenColumns:T(),parser:re(),validator:void 0,validationParser:se(),pathParser:V(),onRenderValue:K(),onClassName:me(),onRenderMenu:Ie(),onRenderContextMenu:ut(),onSortModal:Fn,onTransformModal:zn,onClose:U})}return N(()=>($(re()),n(mt),$(we()),ss),()=>{if(!S0(re(),n(mt))){if(r("parser changed, recreate editor"),ci(we())){var Q=n(mt).stringify(we().json);we({json:Q!==void 0?re().parse(Q):void 0})}v(mt,re()),v(Qe,ss())}}),N(()=>$(we()),()=>{var Q=ic(we());Q&&console.error("Error: "+Q)}),N(()=>$(ze()),()=>{ze()===null&&console.warn("selection is invalid: it is null but should be undefined")}),N(()=>$(re()),()=>{v(o,oi(re().parse))}),N(()=>$(ce()),()=>{r("mode changed to",ce())}),Wt(),ct(!0),Yc(e,{children:(Q,Rt)=>{var Qt=ow(),vn=Te(Qt);wf(A(vn),()=>n(Qe),ke=>{On(Iv(ke,{get mode(){return ce()},get content(){return we()},get selection(){return ze()},get readOnly(){return _e()},get indentation(){return $e()},get tabSize(){return he()},get statusBar(){return le()},get askToFormat(){return de()},get mainMenuBar(){return ie()},get navigationBar(){return Ge()},get escapeControlCharacters(){return C()},get escapeUnicodeCharacters(){return oe()},get flattenColumns(){return T()},get parser(){return re()},get parseMemoizeOne(){return n(o)},get validator(){return Ze()},get validationParser(){return se()},get pathParser(){return V()},insideModal:!1,get onError(){return gt()},onChange:wt,onChangeMode:Vt,onSelect:Ht,get onRenderValue(){return K()},get onClassName(){return me()},onFocus:kt,onBlur:nn,get onRenderMenu(){return Ie()},get onRenderContextMenu(){return ut()},onSortModal:Fn,onTransformModal:zn,onJSONEditorModal:yn,$$legacy:!0}),Je=>v(zt,Je),()=>n(zt))});var U=D(vn,2);L(U,()=>n(W),ke=>{(function(Je,Pe){var pt,Ve;rt(Pe,!1);var _t=M(void 0,!0),Gt=M(void 0,!0),it=M(void 0,!0),Jt=M(void 0,!0),so=ho("jsoneditor:SortModal"),An=p(Pe,"id",9),uo=p(Pe,"json",9),ro=p(Pe,"rootPath",9),ln=p(Pe,"onSort",9),Pn=p(Pe,"onClose",9),po={value:1,label:"ascending"},z=[po,{value:-1,label:"descending"}],Y="".concat(An(),":").concat(xt(ro())),Z=M((pt=Ga()[Y])===null||pt===void 0?void 0:pt.selectedProperty,!0),Ee=M(((Ve=Ga()[Y])===null||Ve===void 0?void 0:Ve.selectedDirection)||po,!0),Ce=M(void 0,!0);function De(){try{var yt,nt,Ct;v(Ce,void 0);var Le=((yt=n(Z))===null||yt===void 0?void 0:yt.value)||((nt=n(Jt))===null||nt===void 0||(nt=nt[0])===null||nt===void 0?void 0:nt.value)||[],Zt=(Ct=n(Ee))===null||Ct===void 0?void 0:Ct.value,on=wh(uo(),ro(),Le,Zt);ln()!==void 0&&ro()!==void 0&&ln()({operations:on,rootPath:ro(),itemPath:Le,direction:Zt}),Pn()()}catch(O){v(Ce,String(O))}}N(()=>($(uo()),$(ro())),()=>{v(_t,He(uo(),ro()))}),N(()=>n(_t),()=>{v(Gt,Array.isArray(n(_t)))}),N(()=>(n(Gt),n(_t)),()=>{v(it,n(Gt)?Hc(n(_t)):void 0)}),N(()=>(n(it),ra),()=>{v(Jt,n(it)?n(it).map(ra):void 0)}),N(()=>(Ga(),n(Z),n(Ee)),()=>{Ga(Ga()[Y]={selectedProperty:n(Z),selectedDirection:n(Ee)}),so("store state in memory",Y,Ga()[Y])}),Wt(),ct(!0),mi(Je,{get onClose(){return Pn()},className:"jse-sort-modal",children:(yt,nt)=>{var Ct=nw(),Le=Te(Ct),Zt=xe(()=>n(Gt)?"Sort array items":"Sort object keys");kl(Le,{get title(){return n(Zt)},get onClose(){return Pn()}});var on=A(D(Le,2)),O=D(A(on)),F=A(O),G=D(A(F)),ye=A(G);ne(()=>Ra(ye,ro()&&!un(ro())?rr(ro()):"(document root)"));var be=D(F);L(be,()=>{var st;return n(Gt)&&(n(Jt)&&((st=n(Jt))===null||st===void 0?void 0:st.length)>1||n(Z)===void 0)},st=>{var ft=ew(),lt=D(A(ft));ka(A(lt),{showChevron:!0,get items(){return n(Jt)},get value(){return n(Z)},set value(Ye){v(Z,Ye)},$$legacy:!0}),P(st,ft)});var ue=D(be),Ne=D(A(ue));ka(A(Ne),{showChevron:!0,clearable:!1,items:z,get value(){return n(Ee)},set value(st){v(Ee,st)},$$legacy:!0});var pe=D(on,2);L(A(pe),()=>n(Ce),st=>{var ft=tw(),lt=A(ft);ne(()=>dt(lt,n(Ce))),P(st,ft)});var Re=A(D(pe,2));bo(()=>ee("click",Re,De)),Eo(Re,st=>{st.focus()}),ne(()=>{var st;return Re.disabled=!!(n(Gt)&&n(Jt)&&((st=n(Jt))===null||st===void 0?void 0:st.length)>1)&&!n(Z)}),P(yt,Ct)},$$slots:{default:!0}}),at()})(ke,da(()=>n(W),{onClose:()=>{var Je;(Je=n(W))===null||Je===void 0||Je.onClose(),v(W,void 0)}}))});var J=D(U,2);L(J,()=>n(Ot),ke=>{vy(ke,da(()=>n(Ot),{onClose:()=>{var Je;(Je=n(Ot))===null||Je===void 0||Je.onClose(),v(Ot,void 0)}}))}),L(D(J,2),()=>n(Fe),ke=>{(function(Je,Pe){rt(Pe,!1);var pt=M(void 0,!0),Ve=M(void 0,!0),_t=M(void 0,!0),Gt=M(void 0,!0),it=ho("jsoneditor:JSONEditorModal"),Jt=p(Pe,"content",9),so=p(Pe,"path",9),An=p(Pe,"onPatch",9),uo=p(Pe,"readOnly",9),ro=p(Pe,"indentation",9),ln=p(Pe,"tabSize",9),Pn=p(Pe,"mainMenuBar",9),po=p(Pe,"navigationBar",9),z=p(Pe,"statusBar",9),Y=p(Pe,"askToFormat",9),Z=p(Pe,"escapeControlCharacters",9),Ee=p(Pe,"escapeUnicodeCharacters",9),Ce=p(Pe,"flattenColumns",9),De=p(Pe,"parser",9),yt=p(Pe,"validator",9),nt=p(Pe,"validationParser",9),Ct=p(Pe,"pathParser",9),Le=p(Pe,"onRenderValue",9),Zt=p(Pe,"onClassName",9),on=p(Pe,"onRenderMenu",9),O=p(Pe,"onRenderContextMenu",9),F=p(Pe,"onSortModal",9),G=p(Pe,"onTransformModal",9),ye=p(Pe,"onClose",9),be=M(void 0,!0),ue=M(void 0,!0),Ne={mode:st(Jt()),content:Jt(),selection:void 0,relativePath:so()},pe=M([Ne],!0),Re=M(void 0,!0);function st(et){return ci(et)&&lo(et.json)?io.table:io.tree}function ft(){var et,Tt=(et=qt(n(pe)))===null||et===void 0?void 0:et.selection;Zu(Tt)&&n(be).scrollTo(Xe(Tt))}function lt(){if(it("handleApply"),!uo())try{v(Re,void 0);var et=n(pt).relativePath,Tt=n(pt).content,Kt=[{op:"replace",path:xt(et),value:Gd(Tt,De()).json}];if(n(pe).length>1){var fn=Gd(n(pe)[n(pe).length-2].content,De()).json,_n={json:br(fn,Kt)},xo=ge(ge({},n(pe)[n(pe).length-2]||Ne),{},{content:_n});v(pe,[...n(pe).slice(0,n(pe).length-2),xo]),eo().then(ft)}else An()(Kt),ye()()}catch(Io){v(Re,String(Io))}}function Ye(){it("handleClose"),n(ue)?v(ue,!1):n(pe).length>1?(v(pe,Lt(n(pe))),eo().then(()=>{var et;(et=n(be))===null||et===void 0||et.focus(),ft()}),v(Re,void 0)):ye()()}function cn(et){it("handleChange",et),At(Tt=>ge(ge({},Tt),{},{content:et}))}function Rn(et){it("handleChangeSelection",et),At(Tt=>ge(ge({},Tt),{},{selection:et}))}function pn(et){it("handleChangeMode",et),At(Tt=>ge(ge({},Tt),{},{mode:et}))}function At(et){var Tt=et(qt(n(pe)));v(pe,[...Lt(n(pe)),Tt])}function Ke(et){v(Re,et.toString()),console.error(et)}function Et(et){var{content:Tt,path:Kt}=et;it("handleJSONEditorModal",{content:Tt,path:Kt});var fn={mode:st(Tt),content:Tt,selection:void 0,relativePath:Kt};v(pe,[...n(pe),fn]),eo().then(()=>{var _n;return(_n=n(be))===null||_n===void 0?void 0:_n.focus()})}Ao(()=>{var et;(et=n(be))===null||et===void 0||et.focus()}),N(()=>n(pe),()=>{v(pt,qt(n(pe))||Ne)}),N(()=>n(pe),()=>{v(Ve,n(pe).flatMap(et=>et.relativePath))}),N(()=>(n(Ve),rr),()=>{v(_t,un(n(Ve))?"(document root)":rr(n(Ve)))}),N(()=>$(De()),()=>{v(Gt,oi(De().parse))}),Wt(),ct(!0),mi(Je,{onClose:Ye,className:"jse-jsoneditor-modal",get fullscreen(){return n(ue)},children:(et,Tt)=>{var Kt=Gy();Yc(A(Kt),{children:(fn,_n)=>{var xo=Qy(),Io=Te(xo),wa=xe(()=>{var Zn;return"Edit nested content ".concat((Zn=n(pe).length>1?" (".concat(n(pe).length,")"):"")!==null&&Zn!==void 0?Zn:"")});kl(Io,{get title(){return n(wa)},fullScreenButton:!0,get fullscreen(){return n(ue)},set fullscreen(Zn){v(ue,Zn)},onClose:Ye,$$legacy:!0});var Va=D(Io,2),ko=D(A(Va),2),qo=D(ko,4);On(Iv(A(qo),{get mode(){return n(pt).mode},get content(){return n(pt).content},get selection(){return n(pt).selection},get readOnly(){return uo()},get indentation(){return ro()},get tabSize(){return ln()},get statusBar(){return z()},get askToFormat(){return Y()},get mainMenuBar(){return Pn()},get navigationBar(){return po()},get escapeControlCharacters(){return Z()},get escapeUnicodeCharacters(){return Ee()},get flattenColumns(){return Ce()},get parser(){return De()},get parseMemoizeOne(){return n(Gt)},get validator(){return yt()},get validationParser(){return nt()},get pathParser(){return Ct()},insideModal:!0,onError:Ke,onChange:cn,onChangeMode:pn,onSelect:Rn,get onRenderValue(){return Le()},get onClassName(){return Zt()},onFocus:Jo,onBlur:Jo,get onRenderMenu(){return on()},get onRenderContextMenu(){return O()},get onSortModal(){return F()},get onTransformModal(){return G()},onJSONEditorModal:Et,$$legacy:!0}),Zn=>v(be,Zn),()=>n(be));var Kr=A(D(qo,2));L(Kr,()=>n(Re),Zn=>{var wn=Jy(),Qo=A(wn);ne(()=>dt(Qo,n(Re))),P(Zn,wn)});var Yr=D(Kr,2);L(Yr,()=>n(pe).length>1,Zn=>{var wn=Ky();Ut(A(wn),{data:tm}),ee("click",wn,Ye),P(Zn,wn)}),L(D(Yr,2),()=>!uo(),Zn=>{var wn=Yy();bo(()=>ee("click",wn,lt)),Eo(wn,Qo=>{Qo.focus()}),P(Zn,wn)},Zn=>{var wn=Xy();ee("click",wn,Ye),P(Zn,wn)}),ne(()=>Ra(ko,n(_t))),P(fn,xo)},$$slots:{default:!0}}),P(et,Kt)},$$slots:{default:!0}}),at()})(ke,da(()=>n(Fe),{onClose:()=>{var Je;(Je=n(Fe))===null||Je===void 0||Je.onClose(),v(Fe,void 0)}}))}),ne(()=>We(vn,"jse-focus",n(jt))),P(Q,Qt)},$$slots:{default:!0}}),bt(t,"get",Tn),bt(t,"set",$n),bt(t,"update",Qn),bt(t,"patch",Dn),bt(t,"select",$t),bt(t,"expand",sn),bt(t,"collapse",En),bt(t,"transform",co),bt(t,"validate",Xt),bt(t,"acceptAutoRepair",Pt),bt(t,"scrollTo",Un),bt(t,"findElement",ao),bt(t,"focus",Mn),bt(t,"refresh",xn),bt(t,"updateProps",oo),bt(t,"destroy",te),at({get:Tn,set:$n,update:Qn,patch:Dn,select:$t,expand:sn,collapse:En,transform:co,validate:Xt,acceptAutoRepair:Pt,scrollTo:Un,findElement:ao,focus:Mn,refresh:xn,updateProps:oo,destroy:te})}ht(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-6ttr41 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-6ttr41, .jse-value.jse-array.svelte-6ttr41 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-6ttr41 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-6ttr41 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-6ttr41 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-6ttr41 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-6ttr41 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-6ttr41 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-6ttr41 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-6ttr41:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);B("<option> </option>");B("<select></select>");function aw(e){var{target:t,props:o}=e,r=r0(rw,{target:t,props:o});return r.destroy=tt(function*(){return function(a){var s=Vc.get(a);s&&s()}(r),new Promise(a=>setTimeout(a))}),r}const sw=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,iw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,lw=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function cw(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){uw(e);return}return t}function uw(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function el(e,t={}){if(typeof e!="string")return e;const o=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return o.slice(1,-1);if(o.length<=9){const r=o.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!lw.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(sw.test(e)||iw.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,cw)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function dw(e,t={}){return el(e,{...t,strict:!0})}var vw=typeof global=="object"&&global&&global.Object===Object&&global,pw=typeof self=="object"&&self&&self.Object===Object&&self,_h=vw||pw||Function("return this")(),Sl=_h.Symbol,Ih=Object.prototype,fw=Ih.hasOwnProperty,hw=Ih.toString,Ws=Sl?Sl.toStringTag:void 0;function gw(e){var t=fw.call(e,Ws),o=e[Ws];try{e[Ws]=void 0;var r=!0}catch{}var a=hw.call(e);return r&&(t?e[Ws]=o:delete e[Ws]),a}var mw=Object.prototype,bw=mw.toString;function jw(e){return bw.call(e)}var xw="[object Null]",yw="[object Undefined]",qv=Sl?Sl.toStringTag:void 0;function ww(e){return e==null?e===void 0?yw:xw:qv&&qv in Object(e)?gw(e):jw(e)}function kw(e){return e!=null&&typeof e=="object"}var Cw="[object Symbol]";function Sw(e){return typeof e=="symbol"||kw(e)&&ww(e)==Cw}var Ow=/\s/;function Ew(e){for(var t=e.length;t--&&Ow.test(e.charAt(t)););return t}var zw=/^\s+/;function $w(e){return e&&e.slice(0,Ew(e)+1).replace(zw,"")}function hu(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Tv=NaN,Mw=/^[-+]0x[0-9a-f]+$/i,Aw=/^0b[01]+$/i,Pw=/^0o[0-7]+$/i,Rw=parseInt;function Dv(e){if(typeof e=="number")return e;if(Sw(e))return Tv;if(hu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=hu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=$w(e);var o=Aw.test(e);return o||Pw.test(e)?Rw(e.slice(2),o?2:8):Mw.test(e)?Tv:+e}var Ec=function(){return _h.Date.now()},_w="Expected a function",Iw=Math.max,qw=Math.min;function Tw(e,t,o){var r,a,s,i,l,c,d=0,u=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(_w);t=Dv(t)||0,hu(o)&&(u=!!o.leading,f="maxWait"in o,s=f?Iw(Dv(o.maxWait)||0,t):s,h="trailing"in o?!!o.trailing:h);function m(_){var I=r,q=a;return r=a=void 0,d=_,i=e.apply(q,I),i}function g(_){return d=_,l=setTimeout(x,t),u?m(_):i}function b(_){var I=_-c,q=_-d,k=t-I;return f?qw(k,s-q):k}function j(_){var I=_-c,q=_-d;return c===void 0||I>=t||I<0||f&&q>=s}function x(){var _=Ec();if(j(_))return E(_);l=setTimeout(x,b(_))}function E(_){return l=void 0,h&&r?m(_):(r=a=void 0,i)}function y(){l!==void 0&&clearTimeout(l),d=0,r=c=a=l=void 0}function S(){return l===void 0?i:E(Ec())}function w(){var _=Ec(),I=j(_);if(r=arguments,a=this,c=_,I){if(l===void 0)return g(c);if(f)return clearTimeout(l),l=setTimeout(x,t),m(c)}return l===void 0&&(l=setTimeout(x,t)),i}return w.cancel=y,w.flush=S,w}var qh=typeof global=="object"&&global&&global.Object===Object&&global,Dw=typeof self=="object"&&self&&self.Object===Object&&self,Or=qh||Dw||Function("return this")(),Cr=Or.Symbol,Th=Object.prototype,Nw=Th.hasOwnProperty,Uw=Th.toString,Hs=Cr?Cr.toStringTag:void 0;function Bw(e){var t=Nw.call(e,Hs),o=e[Hs];try{e[Hs]=void 0;var r=!0}catch{}var a=Uw.call(e);return r&&(t?e[Hs]=o:delete e[Hs]),a}var Fw=Object.prototype,Lw=Fw.toString;function Vw(e){return Lw.call(e)}var Ww="[object Null]",Hw="[object Undefined]",Nv=Cr?Cr.toStringTag:void 0;function Ba(e){return e==null?e===void 0?Hw:Ww:Nv&&Nv in Object(e)?Bw(e):Vw(e)}function Sr(e){return e!=null&&typeof e=="object"}var Jw="[object Symbol]";function cd(e){return typeof e=="symbol"||Sr(e)&&Ba(e)==Jw}function Kw(e,t){for(var o=-1,r=e==null?0:e.length,a=Array(r);++o<r;)a[o]=t(e[o],o,e);return a}var Xo=Array.isArray,Yw=1/0,Uv=Cr?Cr.prototype:void 0,Bv=Uv?Uv.toString:void 0;function Dh(e){if(typeof e=="string")return e;if(Xo(e))return Kw(e,Dh)+"";if(cd(e))return Bv?Bv.call(e):"";var t=e+"";return t=="0"&&1/e==-Yw?"-0":t}function Er(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function ud(e){return e}var Xw="[object AsyncFunction]",Qw="[object Function]",Gw="[object GeneratorFunction]",Zw="[object Proxy]";function dd(e){if(!Er(e))return!1;var t=Ba(e);return t==Qw||t==Gw||t==Xw||t==Zw}var zc=Or["__core-js_shared__"],Fv=function(){var e=/[^.]+$/.exec(zc&&zc.keys&&zc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ek(e){return!!Fv&&Fv in e}var tk=Function.prototype,nk=tk.toString;function Fa(e){if(e!=null){try{return nk.call(e)}catch{}try{return e+""}catch{}}return""}var ok=/[\\^$.*+?()[\]{}|]/g,rk=/^\[object .+?Constructor\]$/,ak=Function.prototype,sk=Object.prototype,ik=ak.toString,lk=sk.hasOwnProperty,ck=RegExp("^"+ik.call(lk).replace(ok,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uk(e){if(!Er(e)||ek(e))return!1;var t=dd(e)?ck:rk;return t.test(Fa(e))}function dk(e,t){return e==null?void 0:e[t]}function La(e,t){var o=dk(e,t);return uk(o)?o:void 0}var gu=La(Or,"WeakMap"),Lv=Object.create,vk=function(){function e(){}return function(t){if(!Er(t))return{};if(Lv)return Lv(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();function pk(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}function fk(e,t){var o=-1,r=e.length;for(t||(t=Array(r));++o<r;)t[o]=e[o];return t}var hk=800,gk=16,mk=Date.now;function bk(e){var t=0,o=0;return function(){var r=mk(),a=gk-(r-o);if(o=r,a>0){if(++t>=hk)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function jk(e){return function(){return e}}var Ol=function(){try{var e=La(Object,"defineProperty");return e({},"",{}),e}catch{}}(),xk=Ol?function(e,t){return Ol(e,"toString",{configurable:!0,enumerable:!1,value:jk(t),writable:!0})}:ud,yk=bk(xk);function wk(e,t){for(var o=-1,r=e==null?0:e.length;++o<r&&t(e[o],o,e)!==!1;);return e}var kk=9007199254740991,Ck=/^(?:0|[1-9]\d*)$/;function vd(e,t){var o=typeof e;return t=t??kk,!!t&&(o=="number"||o!="symbol"&&Ck.test(e))&&e>-1&&e%1==0&&e<t}function Yl(e,t,o){t=="__proto__"&&Ol?Ol(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function Pi(e,t){return e===t||e!==e&&t!==t}var Sk=Object.prototype,Ok=Sk.hasOwnProperty;function Nh(e,t,o){var r=e[t];(!(Ok.call(e,t)&&Pi(r,o))||o===void 0&&!(t in e))&&Yl(e,t,o)}function Uh(e,t,o,r){var a=!o;o||(o={});for(var s=-1,i=t.length;++s<i;){var l=t[s],c=r?r(o[l],e[l],l,o,e):void 0;c===void 0&&(c=e[l]),a?Yl(o,l,c):Nh(o,l,c)}return o}var Vv=Math.max;function Ek(e,t,o){return t=Vv(t===void 0?e.length-1:t,0),function(){for(var r=arguments,a=-1,s=Vv(r.length-t,0),i=Array(s);++a<s;)i[a]=r[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=r[a];return l[t]=o(i),pk(e,this,l)}}function zk(e,t){return yk(Ek(e,t,ud),e+"")}var $k=9007199254740991;function pd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$k}function Xl(e){return e!=null&&pd(e.length)&&!dd(e)}function Mk(e,t,o){if(!Er(o))return!1;var r=typeof t;return(r=="number"?Xl(o)&&vd(t,o.length):r=="string"&&t in o)?Pi(o[t],e):!1}function Bh(e){return zk(function(t,o){var r=-1,a=o.length,s=a>1?o[a-1]:void 0,i=a>2?o[2]:void 0;for(s=e.length>3&&typeof s=="function"?(a--,s):void 0,i&&Mk(o[0],o[1],i)&&(s=a<3?void 0:s,a=1),t=Object(t);++r<a;){var l=o[r];l&&e(t,l,r,s)}return t})}var Ak=Object.prototype;function fd(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||Ak;return e===o}function Pk(e,t){for(var o=-1,r=Array(e);++o<e;)r[o]=t(o);return r}var Rk="[object Arguments]";function Wv(e){return Sr(e)&&Ba(e)==Rk}var Fh=Object.prototype,_k=Fh.hasOwnProperty,Ik=Fh.propertyIsEnumerable,El=Wv(function(){return arguments}())?Wv:function(e){return Sr(e)&&_k.call(e,"callee")&&!Ik.call(e,"callee")};function qk(){return!1}var Lh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hv=Lh&&typeof module=="object"&&module&&!module.nodeType&&module,Tk=Hv&&Hv.exports===Lh,Jv=Tk?Or.Buffer:void 0,Dk=Jv?Jv.isBuffer:void 0,ji=Dk||qk,Nk="[object Arguments]",Uk="[object Array]",Bk="[object Boolean]",Fk="[object Date]",Lk="[object Error]",Vk="[object Function]",Wk="[object Map]",Hk="[object Number]",Jk="[object Object]",Kk="[object RegExp]",Yk="[object Set]",Xk="[object String]",Qk="[object WeakMap]",Gk="[object ArrayBuffer]",Zk="[object DataView]",e2="[object Float32Array]",t2="[object Float64Array]",n2="[object Int8Array]",o2="[object Int16Array]",r2="[object Int32Array]",a2="[object Uint8Array]",s2="[object Uint8ClampedArray]",i2="[object Uint16Array]",l2="[object Uint32Array]",Vn={};Vn[e2]=Vn[t2]=Vn[n2]=Vn[o2]=Vn[r2]=Vn[a2]=Vn[s2]=Vn[i2]=Vn[l2]=!0;Vn[Nk]=Vn[Uk]=Vn[Gk]=Vn[Bk]=Vn[Zk]=Vn[Fk]=Vn[Lk]=Vn[Vk]=Vn[Wk]=Vn[Hk]=Vn[Jk]=Vn[Kk]=Vn[Yk]=Vn[Xk]=Vn[Qk]=!1;function c2(e){return Sr(e)&&pd(e.length)&&!!Vn[Ba(e)]}function hd(e){return function(t){return e(t)}}var Vh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Zs=Vh&&typeof module=="object"&&module&&!module.nodeType&&module,u2=Zs&&Zs.exports===Vh,$c=u2&&qh.process,zs=function(){try{var e=Zs&&Zs.require&&Zs.require("util").types;return e||$c&&$c.binding&&$c.binding("util")}catch{}}(),Kv=zs&&zs.isTypedArray,gd=Kv?hd(Kv):c2,d2=Object.prototype,v2=d2.hasOwnProperty;function Wh(e,t){var o=Xo(e),r=!o&&El(e),a=!o&&!r&&ji(e),s=!o&&!r&&!a&&gd(e),i=o||r||a||s,l=i?Pk(e.length,String):[],c=l.length;for(var d in e)(t||v2.call(e,d))&&!(i&&(d=="length"||a&&(d=="offset"||d=="parent")||s&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||vd(d,c)))&&l.push(d);return l}function Hh(e,t){return function(o){return e(t(o))}}var p2=Hh(Object.keys,Object),f2=Object.prototype,h2=f2.hasOwnProperty;function g2(e){if(!fd(e))return p2(e);var t=[];for(var o in Object(e))h2.call(e,o)&&o!="constructor"&&t.push(o);return t}function md(e){return Xl(e)?Wh(e):g2(e)}function m2(e){var t=[];if(e!=null)for(var o in Object(e))t.push(o);return t}var b2=Object.prototype,j2=b2.hasOwnProperty;function x2(e){if(!Er(e))return m2(e);var t=fd(e),o=[];for(var r in e)r=="constructor"&&(t||!j2.call(e,r))||o.push(r);return o}function bd(e){return Xl(e)?Wh(e,!0):x2(e)}var y2=Bh(function(e,t,o,r){Uh(t,bd(t),e,r)}),w2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k2=/^\w*$/;function jd(e,t){if(Xo(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||cd(e)?!0:k2.test(e)||!w2.test(e)||t!=null&&e in Object(t)}var xi=La(Object,"create");function C2(){this.__data__=xi?xi(null):{},this.size=0}function S2(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var O2="__lodash_hash_undefined__",E2=Object.prototype,z2=E2.hasOwnProperty;function $2(e){var t=this.__data__;if(xi){var o=t[e];return o===O2?void 0:o}return z2.call(t,e)?t[e]:void 0}var M2=Object.prototype,A2=M2.hasOwnProperty;function P2(e){var t=this.__data__;return xi?t[e]!==void 0:A2.call(t,e)}var R2="__lodash_hash_undefined__";function _2(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=xi&&t===void 0?R2:t,this}function Da(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Da.prototype.clear=C2;Da.prototype.delete=S2;Da.prototype.get=$2;Da.prototype.has=P2;Da.prototype.set=_2;function I2(){this.__data__=[],this.size=0}function Ql(e,t){for(var o=e.length;o--;)if(Pi(e[o][0],t))return o;return-1}var q2=Array.prototype,T2=q2.splice;function D2(e){var t=this.__data__,o=Ql(t,e);if(o<0)return!1;var r=t.length-1;return o==r?t.pop():T2.call(t,o,1),--this.size,!0}function N2(e){var t=this.__data__,o=Ql(t,e);return o<0?void 0:t[o][1]}function U2(e){return Ql(this.__data__,e)>-1}function B2(e,t){var o=this.__data__,r=Ql(o,e);return r<0?(++this.size,o.push([e,t])):o[r][1]=t,this}function Hr(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Hr.prototype.clear=I2;Hr.prototype.delete=D2;Hr.prototype.get=N2;Hr.prototype.has=U2;Hr.prototype.set=B2;var yi=La(Or,"Map");function F2(){this.size=0,this.__data__={hash:new Da,map:new(yi||Hr),string:new Da}}function L2(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Gl(e,t){var o=e.__data__;return L2(t)?o[typeof t=="string"?"string":"hash"]:o.map}function V2(e){var t=Gl(this,e).delete(e);return this.size-=t?1:0,t}function W2(e){return Gl(this,e).get(e)}function H2(e){return Gl(this,e).has(e)}function J2(e,t){var o=Gl(this,e),r=o.size;return o.set(e,t),this.size+=o.size==r?0:1,this}function Jr(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Jr.prototype.clear=F2;Jr.prototype.delete=V2;Jr.prototype.get=W2;Jr.prototype.has=H2;Jr.prototype.set=J2;var K2="Expected a function";function xd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(K2);var o=function(){var r=arguments,a=t?t.apply(this,r):r[0],s=o.cache;if(s.has(a))return s.get(a);var i=e.apply(this,r);return o.cache=s.set(a,i)||s,i};return o.cache=new(xd.Cache||Jr),o}xd.Cache=Jr;var Y2=500;function X2(e){var t=xd(e,function(r){return o.size===Y2&&o.clear(),r}),o=t.cache;return t}var Q2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,G2=/\\(\\)?/g,Z2=X2(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Q2,function(o,r,a,s){t.push(a?s.replace(G2,"$1"):r||o)}),t});function eC(e){return e==null?"":Dh(e)}function Jh(e,t){return Xo(e)?e:jd(e,t)?[e]:Z2(eC(e))}var tC=1/0;function Zl(e){if(typeof e=="string"||cd(e))return e;var t=e+"";return t=="0"&&1/e==-tC?"-0":t}function Kh(e,t){t=Jh(t,e);for(var o=0,r=t.length;e!=null&&o<r;)e=e[Zl(t[o++])];return o&&o==r?e:void 0}function nC(e,t,o){var r=e==null?void 0:Kh(e,t);return r===void 0?o:r}function oC(e,t){for(var o=-1,r=t.length,a=e.length;++o<r;)e[a+o]=t[o];return e}var Yh=Hh(Object.getPrototypeOf,Object),rC="[object Object]",aC=Function.prototype,sC=Object.prototype,Xh=aC.toString,iC=sC.hasOwnProperty,lC=Xh.call(Object);function cC(e){if(!Sr(e)||Ba(e)!=rC)return!1;var t=Yh(e);if(t===null)return!0;var o=iC.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&Xh.call(o)==lC}function uC(){this.__data__=new Hr,this.size=0}function dC(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function vC(e){return this.__data__.get(e)}function pC(e){return this.__data__.has(e)}var fC=200;function hC(e,t){var o=this.__data__;if(o instanceof Hr){var r=o.__data__;if(!yi||r.length<fC-1)return r.push([e,t]),this.size=++o.size,this;o=this.__data__=new Jr(r)}return o.set(e,t),this.size=o.size,this}function dr(e){var t=this.__data__=new Hr(e);this.size=t.size}dr.prototype.clear=uC;dr.prototype.delete=dC;dr.prototype.get=vC;dr.prototype.has=pC;dr.prototype.set=hC;var Qh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Yv=Qh&&typeof module=="object"&&module&&!module.nodeType&&module,gC=Yv&&Yv.exports===Qh,Xv=gC?Or.Buffer:void 0,Qv=Xv?Xv.allocUnsafe:void 0;function Gh(e,t){if(t)return e.slice();var o=e.length,r=Qv?Qv(o):new e.constructor(o);return e.copy(r),r}function mC(e,t){for(var o=-1,r=e==null?0:e.length,a=0,s=[];++o<r;){var i=e[o];t(i,o,e)&&(s[a++]=i)}return s}function bC(){return[]}var jC=Object.prototype,xC=jC.propertyIsEnumerable,Gv=Object.getOwnPropertySymbols,yC=Gv?function(e){return e==null?[]:(e=Object(e),mC(Gv(e),function(t){return xC.call(e,t)}))}:bC;function wC(e,t,o){var r=t(e);return Xo(e)?r:oC(r,o(e))}function mu(e){return wC(e,md,yC)}var bu=La(Or,"DataView"),ju=La(Or,"Promise"),xu=La(Or,"Set"),Zv="[object Map]",kC="[object Object]",ep="[object Promise]",tp="[object Set]",np="[object WeakMap]",op="[object DataView]",CC=Fa(bu),SC=Fa(yi),OC=Fa(ju),EC=Fa(xu),zC=Fa(gu),tr=Ba;(bu&&tr(new bu(new ArrayBuffer(1)))!=op||yi&&tr(new yi)!=Zv||ju&&tr(ju.resolve())!=ep||xu&&tr(new xu)!=tp||gu&&tr(new gu)!=np)&&(tr=function(e){var t=Ba(e),o=t==kC?e.constructor:void 0,r=o?Fa(o):"";if(r)switch(r){case CC:return op;case SC:return Zv;case OC:return ep;case EC:return tp;case zC:return np}return t});var $C=Object.prototype,MC=$C.hasOwnProperty;function AC(e){var t=e.length,o=new e.constructor(t);return t&&typeof e[0]=="string"&&MC.call(e,"index")&&(o.index=e.index,o.input=e.input),o}var zl=Or.Uint8Array;function yd(e){var t=new e.constructor(e.byteLength);return new zl(t).set(new zl(e)),t}function PC(e,t){var o=yd(e.buffer);return new e.constructor(o,e.byteOffset,e.byteLength)}var RC=/\w*$/;function _C(e){var t=new e.constructor(e.source,RC.exec(e));return t.lastIndex=e.lastIndex,t}var rp=Cr?Cr.prototype:void 0,ap=rp?rp.valueOf:void 0;function IC(e){return ap?Object(ap.call(e)):{}}function Zh(e,t){var o=t?yd(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}var qC="[object Boolean]",TC="[object Date]",DC="[object Map]",NC="[object Number]",UC="[object RegExp]",BC="[object Set]",FC="[object String]",LC="[object Symbol]",VC="[object ArrayBuffer]",WC="[object DataView]",HC="[object Float32Array]",JC="[object Float64Array]",KC="[object Int8Array]",YC="[object Int16Array]",XC="[object Int32Array]",QC="[object Uint8Array]",GC="[object Uint8ClampedArray]",ZC="[object Uint16Array]",eS="[object Uint32Array]";function tS(e,t,o){var r=e.constructor;switch(t){case VC:return yd(e);case qC:case TC:return new r(+e);case WC:return PC(e);case HC:case JC:case KC:case YC:case XC:case QC:case GC:case ZC:case eS:return Zh(e,o);case DC:return new r;case NC:case FC:return new r(e);case UC:return _C(e);case BC:return new r;case LC:return IC(e)}}function eg(e){return typeof e.constructor=="function"&&!fd(e)?vk(Yh(e)):{}}var nS="[object Map]";function oS(e){return Sr(e)&&tr(e)==nS}var sp=zs&&zs.isMap,rS=sp?hd(sp):oS,aS="[object Set]";function sS(e){return Sr(e)&&tr(e)==aS}var ip=zs&&zs.isSet,iS=ip?hd(ip):sS,lS=1,tg="[object Arguments]",cS="[object Array]",uS="[object Boolean]",dS="[object Date]",vS="[object Error]",ng="[object Function]",pS="[object GeneratorFunction]",fS="[object Map]",hS="[object Number]",og="[object Object]",gS="[object RegExp]",mS="[object Set]",bS="[object String]",jS="[object Symbol]",xS="[object WeakMap]",yS="[object ArrayBuffer]",wS="[object DataView]",kS="[object Float32Array]",CS="[object Float64Array]",SS="[object Int8Array]",OS="[object Int16Array]",ES="[object Int32Array]",zS="[object Uint8Array]",$S="[object Uint8ClampedArray]",MS="[object Uint16Array]",AS="[object Uint32Array]",In={};In[tg]=In[cS]=In[yS]=In[wS]=In[uS]=In[dS]=In[kS]=In[CS]=In[SS]=In[OS]=In[ES]=In[fS]=In[hS]=In[og]=In[gS]=In[mS]=In[bS]=In[jS]=In[zS]=In[$S]=In[MS]=In[AS]=!0;In[vS]=In[ng]=In[xS]=!1;function tl(e,t,o,r,a,s){var i,l=t&lS;if(i!==void 0)return i;if(!Er(e))return e;var c=Xo(e);if(c)i=AC(e);else{var d=tr(e),u=d==ng||d==pS;if(ji(e))return Gh(e,l);if(d==og||d==tg||u&&!a)i=u?{}:eg(e);else{if(!In[d])return a?e:{};i=tS(e,d,l)}}s||(s=new dr);var f=s.get(e);if(f)return f;s.set(e,i),iS(e)?e.forEach(function(g){i.add(tl(g,t,o,g,e,s))}):rS(e)&&e.forEach(function(g,b){i.set(b,tl(g,t,o,b,e,s))});var h=mu,m=c?void 0:h(e);return wk(m||e,function(g,b){m&&(b=g,g=e[b]),Nh(i,b,tl(g,t,o,b,e,s))}),i}var PS=1,RS=4;function _S(e){return tl(e,PS|RS)}var IS="__lodash_hash_undefined__";function qS(e){return this.__data__.set(e,IS),this}function TS(e){return this.__data__.has(e)}function $l(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new Jr;++t<o;)this.add(e[t])}$l.prototype.add=$l.prototype.push=qS;$l.prototype.has=TS;function DS(e,t){for(var o=-1,r=e==null?0:e.length;++o<r;)if(t(e[o],o,e))return!0;return!1}function NS(e,t){return e.has(t)}var US=1,BS=2;function rg(e,t,o,r,a,s){var i=o&US,l=e.length,c=t.length;if(l!=c&&!(i&&c>l))return!1;var d=s.get(e),u=s.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,m=o&BS?new $l:void 0;for(s.set(e,t),s.set(t,e);++f<l;){var g=e[f],b=t[f];if(r)var j=i?r(b,g,f,t,e,s):r(g,b,f,e,t,s);if(j!==void 0){if(j)continue;h=!1;break}if(m){if(!DS(t,function(x,E){if(!NS(m,E)&&(g===x||a(g,x,o,r,s)))return m.push(E)})){h=!1;break}}else if(!(g===b||a(g,b,o,r,s))){h=!1;break}}return s.delete(e),s.delete(t),h}function FS(e){var t=-1,o=Array(e.size);return e.forEach(function(r,a){o[++t]=[a,r]}),o}function LS(e){var t=-1,o=Array(e.size);return e.forEach(function(r){o[++t]=r}),o}var VS=1,WS=2,HS="[object Boolean]",JS="[object Date]",KS="[object Error]",YS="[object Map]",XS="[object Number]",QS="[object RegExp]",GS="[object Set]",ZS="[object String]",e4="[object Symbol]",t4="[object ArrayBuffer]",n4="[object DataView]",lp=Cr?Cr.prototype:void 0,Mc=lp?lp.valueOf:void 0;function o4(e,t,o,r,a,s,i){switch(o){case n4:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case t4:return!(e.byteLength!=t.byteLength||!s(new zl(e),new zl(t)));case HS:case JS:case XS:return Pi(+e,+t);case KS:return e.name==t.name&&e.message==t.message;case QS:case ZS:return e==t+"";case YS:var l=FS;case GS:var c=r&VS;if(l||(l=LS),e.size!=t.size&&!c)return!1;var d=i.get(e);if(d)return d==t;r|=WS,i.set(e,t);var u=rg(l(e),l(t),r,a,s,i);return i.delete(e),u;case e4:if(Mc)return Mc.call(e)==Mc.call(t)}return!1}var r4=1,a4=Object.prototype,s4=a4.hasOwnProperty;function i4(e,t,o,r,a,s){var i=o&r4,l=mu(e),c=l.length,d=mu(t),u=d.length;if(c!=u&&!i)return!1;for(var f=c;f--;){var h=l[f];if(!(i?h in t:s4.call(t,h)))return!1}var m=s.get(e),g=s.get(t);if(m&&g)return m==t&&g==e;var b=!0;s.set(e,t),s.set(t,e);for(var j=i;++f<c;){h=l[f];var x=e[h],E=t[h];if(r)var y=i?r(E,x,h,t,e,s):r(x,E,h,e,t,s);if(!(y===void 0?x===E||a(x,E,o,r,s):y)){b=!1;break}j||(j=h=="constructor")}if(b&&!j){var S=e.constructor,w=t.constructor;S!=w&&"constructor"in e&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof w=="function"&&w instanceof w)&&(b=!1)}return s.delete(e),s.delete(t),b}var l4=1,cp="[object Arguments]",up="[object Array]",Xi="[object Object]",c4=Object.prototype,dp=c4.hasOwnProperty;function u4(e,t,o,r,a,s){var i=Xo(e),l=Xo(t),c=i?up:tr(e),d=l?up:tr(t);c=c==cp?Xi:c,d=d==cp?Xi:d;var u=c==Xi,f=d==Xi,h=c==d;if(h&&ji(e)){if(!ji(t))return!1;i=!0,u=!1}if(h&&!u)return s||(s=new dr),i||gd(e)?rg(e,t,o,r,a,s):o4(e,t,c,o,r,a,s);if(!(o&l4)){var m=u&&dp.call(e,"__wrapped__"),g=f&&dp.call(t,"__wrapped__");if(m||g){var b=m?e.value():e,j=g?t.value():t;return s||(s=new dr),a(b,j,o,r,s)}}return h?(s||(s=new dr),i4(e,t,o,r,a,s)):!1}function wd(e,t,o,r,a){return e===t?!0:e==null||t==null||!Sr(e)&&!Sr(t)?e!==e&&t!==t:u4(e,t,o,r,wd,a)}var d4=1,v4=2;function p4(e,t,o,r){var a=o.length,s=a;if(e==null)return!s;for(e=Object(e);a--;){var i=o[a];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<s;){i=o[a];var l=i[0],c=e[l],d=i[1];if(i[2]){if(c===void 0&&!(l in e))return!1}else{var u=new dr,f;if(!(f===void 0?wd(d,c,d4|v4,r,u):f))return!1}}return!0}function ag(e){return e===e&&!Er(e)}function f4(e){for(var t=md(e),o=t.length;o--;){var r=t[o],a=e[r];t[o]=[r,a,ag(a)]}return t}function sg(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==void 0||e in Object(o))}}function h4(e){var t=f4(e);return t.length==1&&t[0][2]?sg(t[0][0],t[0][1]):function(o){return o===e||p4(o,e,t)}}function g4(e,t){return e!=null&&t in Object(e)}function m4(e,t,o){t=Jh(t,e);for(var r=-1,a=t.length,s=!1;++r<a;){var i=Zl(t[r]);if(!(s=e!=null&&o(e,i)))break;e=e[i]}return s||++r!=a?s:(a=e==null?0:e.length,!!a&&pd(a)&&vd(i,a)&&(Xo(e)||El(e)))}function b4(e,t){return e!=null&&m4(e,t,g4)}var j4=1,x4=2;function y4(e,t){return jd(e)&&ag(t)?sg(Zl(e),t):function(o){var r=nC(o,e);return r===void 0&&r===t?b4(o,e):wd(t,r,j4|x4)}}function w4(e){return function(t){return t==null?void 0:t[e]}}function k4(e){return function(t){return Kh(t,e)}}function C4(e){return jd(e)?w4(Zl(e)):k4(e)}function S4(e){return typeof e=="function"?e:e==null?ud:typeof e=="object"?Xo(e)?y4(e[0],e[1]):h4(e):C4(e)}function O4(e){return function(t,o,r){for(var a=-1,s=Object(t),i=r(t),l=i.length;l--;){var c=i[++a];if(o(s[c],c,s)===!1)break}return t}}var ig=O4();function E4(e,t){return e&&ig(e,t,md)}function yu(e,t,o){(o!==void 0&&!Pi(e[t],o)||o===void 0&&!(t in e))&&Yl(e,t,o)}function z4(e){return Sr(e)&&Xl(e)}function wu(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function $4(e){return Uh(e,bd(e))}function M4(e,t,o,r,a,s,i){var l=wu(e,o),c=wu(t,o),d=i.get(c);if(d){yu(e,o,d);return}var u=s?s(l,c,o+"",e,t,i):void 0,f=u===void 0;if(f){var h=Xo(c),m=!h&&ji(c),g=!h&&!m&&gd(c);u=c,h||m||g?Xo(l)?u=l:z4(l)?u=fk(l):m?(f=!1,u=Gh(c,!0)):g?(f=!1,u=Zh(c,!0)):u=[]:cC(c)||El(c)?(u=l,El(l)?u=$4(l):(!Er(l)||dd(l))&&(u=eg(c))):f=!1}f&&(i.set(c,u),a(u,c,r,s,i),i.delete(c)),yu(e,o,u)}function lg(e,t,o,r,a){e!==t&&ig(t,function(s,i){if(a||(a=new dr),Er(s))M4(e,t,i,o,lg,r,a);else{var l=r?r(wu(e,i),s,i+"",e,t,a):void 0;l===void 0&&(l=s),yu(e,i,l)}},bd)}var A4=Bh(function(e,t,o,r){lg(e,t,o,r)});function P4(e,t){var o={};return t=S4(t),E4(e,function(r,a,s){Yl(o,t(r,a,s),r)}),o}const R4=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),_4=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),I4=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),q4=/[^\p{L}\d]+/giu,vp="$1\0$2",pp="";function cg(e){let t=e.trim();t=t.replace(R4,vp).replace(_4,vp),t=t.replace(q4,"\0");let o=0,r=t.length;for(;t.charAt(o)==="\0";)o++;if(o===r)return[];for(;t.charAt(r-1)==="\0";)r--;return t.slice(o,r).split(/\0/g)}function T4(e){const t=cg(e);for(let o=0;o<t.length;o++){const r=t[o],a=I4.exec(r);if(a){const s=a.index+(a[1]??a[2]).length;t.splice(o,1,r.slice(0,s),r.slice(s))}}return t}function D4(e,t){const[o,r,a]=F4(e,t),s=N4(void 0),i=U4(void 0),l=B4(s,i);return o+r.map((c,d)=>d===0?s(c):l(c,d)).join("")+a}function N4(e){return t=>t.toLocaleLowerCase(e)}function U4(e){return t=>t.toLocaleUpperCase(e)}function B4(e,t){return(o,r)=>{const a=o[0];return(r>0&&a>="0"&&a<="9"?"_"+a:t(a))+e(o.slice(1))}}function F4(e,t={}){const o=t.split??(t.separateNumbers?T4:cg),r=t.prefixCharacters??pp,a=t.suffixCharacters??pp;let s=0,i=e.length;for(;s<e.length;){const l=e.charAt(s);if(!r.includes(l))break;s++}for(;i>s;){const l=i-1,c=e.charAt(l);if(!a.includes(c))break;i=l}return[e.slice(0,s),o(e.slice(s,i)),e.slice(i)]}const ei=e=>/.+-.+/.test(e)?D4(e):e,L4=e=>Object.prototype.toString.call(e).slice(8,-1)==="Object";function V4(e,t){const o=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)o[r[a]]=!0;return a=>!!o[a]}const W4=V4("String,Number,Boolean,Function,Symbol,BigInt");function H4(e){const t=e==null?void 0:e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function J4(e,t){let o;const r=H4(t);if(W4(r)){const a=typeof e;o=a===r.toLowerCase(),!o&&a==="object"&&(o=e instanceof t)}else r==="Object"?o=Er(e):r==="Array"?o=Array.isArray(e):r==="null"?o=e===null:o=e instanceof t;return{valid:o,expectedType:r}}function K4({prop:e,type:t,validator:o}){if(![void 0,null].includes(e)&&t){let r=!1;const a=Array.isArray(t)?t:[t],s=[];for(let i=0;i<a.length&&!r;i++){const{valid:l,expectedType:c}=J4(e,a[i]);s.push(c||""),r=l}if(!r)throw new TypeError(`Invalid prop: type check failed, expecting [${s.join(", ")}], receiving: ${e}`)}if(o&&!o(e))throw new Error(`Invalid prop: validator check failed, receiving: ${e}`)}function Y4(e,{mergeObject:t,mergeObjectCustomizer:o,mergeFunction:r}){const a=[];for(let i=e.length-1;i>=0;i--)a.push(e[i]);const s=o||(r?(i,l)=>typeof i=="function"&&typeof l=="function"?r==null?void 0:r(l,i):void 0:void 0);return t==="deep"?A4(...a,s):y2(...a,s)}function X4(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function oa(e,t={}){const{type:o,default:r,defaultIsDynamic:a=!1,required:s=!1,validator:i,camelizeObjectKeys:l=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:d=!0}=t;let{mergeObject:u="deep",mergeObjectCustomizer:f,mergeFunction:h=!1}=t;const m=[];let g,b=!1,j=!1;const x=E=>{if(E!==void 0){K4({type:o,prop:E,validator:i});const y=L4(E),S=typeof E=="function";return b=y,j=S,y?(E=_S(E),l?P4(E,(w,_)=>ei(_)):E):E}};for(const E of e)m.push(x(E));if(!a)m.push(x(r));else if(typeof r!="function")throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${r}`);b||(u=!1,j||(h=!1));for(let E=0;E<m.length;E++){const y=m[E];if(y!==void 0){E===m.length-1?g=y:u?g=Y4(c?[y,r]:m,{mergeObject:u,mergeObjectCustomizer:f,mergeFunction:h}):h?g=X4(d?[y,r]:m,{mergeFunction:h}):g=y;break}}if(s&&[void 0,null].includes(g))throw new Error("Missing required prop");return a?oa(e,{...t,default:r(g),defaultIsDynamic:!1}):g}function fp(e){const t=Array.from(ei(e));return t[0]=t[0].toUpperCase(),t.unshift("o","n"),t.join("")}function Q4(e,{props:t=[],camelizePropNames:o=!1}={}){const r={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let a;if(Array.isArray(t))a=o?t.map(s=>ei(s)):t;else if(o){a=[];for(const s in t)a.push(ei(s))}else a=Object.keys(t);for(const s in e)if(s.startsWith("@")){const i=s.substring(1);if(i.startsWith("vue:"))r.hooks[fp(i.replace("vue:","vnode-"))]=e[s];else{if(i.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");r.listeners[fp(i)]=e[s]}}else if(s.startsWith("#")){const i=s.substring(1);i&&(r.slots[i]=e[s])}else{const i=o?ei(s):s;a.includes(i)?r.props[i]=e[s]:r.attrs[s]=e[s]}return r}const hp="JsonEditorVue",ea={},gp={},nl="modelValue",mp="update:modelValue",ol=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],bp={[nl]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(ol.map(e=>[e,{type:Boolean,default:void 0}]))},G4=Na({name:hp,install(e,t){const o=Q4(t||{},{props:bp});Object.assign(ea,o.props),Object.assign(gp,o.attrs),e.component(hp,this)},props:bp,emits:{[mp](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:o,expose:r}){var a;const s=(a=Pg())==null?void 0:a.proxy,i=ca(),l=ca(!1),c=ca();Rg(()=>{var x;c.value=oa([e.mode,ea.mode],{type:String}),(x=i.value)==null||x.updateProps({mode:c.value||io.tree})});const d=x=>{o("update:mode",x)};ea.mode!==void 0&&e.mode===void 0&&d(ea.mode);const u=Ac(()=>oa([e.debounce,ea.debounce,300],{type:Number})),f=Ac(()=>oa([e.stringified,ea.stringified,!0],{type:Boolean}));let h=el;const m=x=>{l.value=!0,!f.value&&x.text&&(i.value&&!i.value.validate()&&(x.json=h(x.text)),x.text=void 0),o(mp,x.text===void 0?x.json:x.text)},g=Tw(m,u.value),b=x=>{c.value==="text"?g(x):m(x)},j=(x,E)=>(...y)=>{x(...y),E(...y)};return r==null||r({jsonEditor:i}),_g(()=>{var x;(x=i.value)==null||x.destroy()}),xp(()=>{const x=oa([e[nl],ea[nl]]),E=Object.fromEntries(Array.from(ol,S=>[S,oa([e[S],ea[S]])]).filter(([,S])=>S!==void 0)),y=oa([E,t,gp],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:S=>{var w;return h=((w=S.parser)==null?void 0:w.parse)||el,{onChange:b,onChangeMode:d,mode:c.value,parser:{parse:dw,stringify:JSON.stringify},...x!==void 0&&{content:{[typeof x=="string"&&c.value==="text"&&f.value?"text":"json"]:x}}}},mergeFunction:j,mergeObject:"shallow",type:Object});i.value=aw({target:s==null?void 0:s.$refs.jsonEditorRef,props:y}),rc(()=>e[nl],S=>{if(l.value){l.value=!1;return}i.value&&i.value.set([void 0,""].includes(S)?{text:""}:{[typeof S=="string"&&c.value==="text"&&f.value?"text":"json"]:S})},{deep:!0}),rc(()=>Array.from(ol,S=>e[S]),S=>{var w;(w=i.value)==null||w.updateProps(Object.fromEntries(Array.from(S,(_,I)=>[ol[I],_]).filter(([,_])=>_!==void 0)))}),rc(()=>t,S=>{var w,_;const I={};(S.onChange||S["on-change"])&&(I.onChange=b),(S.onChangeMode||S["on-change-mode"])&&(I.onChangeMode=d),h=((w=S.parser)==null?void 0:w.parse)||el,(_=i.value)==null||_.updateProps(Object.getOwnPropertyNames(I).length>0?oa([S,I],{camelizeObjectKeys:!0,mergeFunction:j,mergeObject:"shallow",type:Object}):S)},{deep:!0}),r||(r=S=>{for(const w in S)s[w]=ot(S[w])},r({jsonEditor:i}))}),()=>Ig("div",{ref:"jsonEditorRef"})}}),Z4={__name:"JsonEditor",setup(e){const t=qg().isDark;return(o,r)=>(So(),ti(ot(G4),Tg(o.$attrs,{class:{"jse-theme-dark":ot(t)}}),null,16,["class"]))}},eO=["title"],tO=Na({__name:"CopyableText",props:{val:{}},setup(e){const{copy:t}=Up({text:"复制成功"});return(o,r)=>(So(),nr("div",{title:o.val,class:"copiable-text",onClick:r[0]||(r[0]=a=>ot(t)(o.val))},Oa(o.val),9,eO))}}),jp=ku(tO,[["__scopeId","data-v-ac147690"]]),nO={key:0,class:"prj-detail"},oO={class:"prj-meta-wrapper"},rO={class:"prj-meta"},aO={class:"prj-meta"},sO={class:"prj-data-control"},iO={class:"prj-data-wrapper"},lO={class:"edit-data-wrapper"},cO={class:"dialog-footer"};function uO(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Dg(e)}const dO=Na({__name:"mockDetail",setup(e){const{copy:t}=Up({text:"复制成功"}),o=ca(!1),r=yp(Md()),a=[{title:"名称",key:"name",dataKey:"name",width:300,fixed:zd.LEFT},{title:"请求类型",key:"type",dataKey:"type",width:100,align:"center",cellRenderer:({cellData:c})=>St($d,null,uO(c)?c:{default:()=>[c]})},{title:"请求状态",key:"enabled",dataKey:"enabled",width:100,align:"center",cellRenderer:({cellData:c})=>St($d,{type:"success"},{default:()=>[c?"开启":"关闭"]})},{title:"接口地址",key:"path",dataKey:"path",width:300,cellRenderer:({cellData:c})=>St(jp,{val:c},null)},{title:"接口描述",key:"description",dataKey:"description",width:300},{title:"创建时间",key:"createdAt",dataKey:"createdAt",width:200},{title:"操作",key:"operations",fixed:zd.RIGHT,cellRenderer:({rowData:c})=>St(al,null,[St(Js,{size:"small",onClick:()=>t(c.url??"")},{default:()=>[Go("复制")]}),St(Js,{size:"small",onClick:()=>i(c)},{default:()=>[Go("编辑")]}),St(Bp,{title:"确认要删除该数据吗？删除后无法恢复！",onConfirm:()=>mb(c)},{reference:()=>St(Js,{size:"small",type:"danger"},{default:()=>[Go("删除")]})})]),width:200,align:"center"}];function s(){Object.assign(r,Md()),o.value=!0}function i(c){let d;try{d=JSON.parse(c.response)}catch{d=c.response}Object.assign(r,{id:c.id,name:c.name,type:c.type,enabled:c.enabled,path:c.path,description:c.description,delay:c.delay,response:d,projectId:c.projectId}),o.value=!0}async function l(c){let d=c.response;if(!d){Xn.error("请填写接口返回数据");return}if(typeof d!="string")try{d=JSON.stringify(d)}catch{d=d.toString()}else try{d=JSON.stringify(JSON.parse(d))}catch{}let u;c.id>-1?u=await hb({...c,response:d}):u=await gb({...c,response:d}),u&&(o.value=!1)}return(c,d)=>{const u=pb,f=jp,h=Js,m=ab,g=sb,b=kp,j=Dp,x=ob,E=rb,y=nb,S=Np,w=Z4,_=Cp;return So(),nr(al,null,[ot(_o)?(So(),nr("div",nO,[St(u,{onBack:d[0]||(d[0]=I=>ot(Fp)())},{content:Ln(()=>[Go(Oa(ot(_o).name),1)]),_:1}),bn("div",oO,[bn("div",rO,[d[11]||(d[11]=bn("div",{class:"prj-meta-name"}," 接口根地址 ",-1)),St(f,{val:`${ot(qn).$apiBase}/mock/${ot(_o).id}${ot(_o).path}`,class:"prj-meta-content"},null,8,["val"])]),bn("div",aO,[d[12]||(d[12]=bn("div",{class:"prj-meta-name"}," 项目ID ",-1)),St(f,{val:ot(_o).id,class:"prj-meta-content"},null,8,["val"])])]),bn("div",sO,[St(h,{type:"primary",onClick:s},{default:Ln(()=>d[13]||(d[13]=[Go(" 新增接口 ")])),_:1})]),bn("div",iO,[St(g,null,{default:Ln(({height:I,width:q})=>[St(m,{columns:a,data:ot(zu),width:q,height:I,fixed:!0},null,8,["data","width","height"])]),_:1})])])):Za("",!0),St(_,{modelValue:ot(o),"onUpdate:modelValue":d[10]||(d[10]=I=>wp(o)?o.value=I:null),fullscreen:"",title:ot(r).id>-1?"修改接口":"添加接口","destroy-on-close":""},{footer:Ln(()=>[bn("span",cO,[St(h,{onClick:d[8]||(d[8]=I=>o.value=!1)},{default:Ln(()=>d[14]||(d[14]=[Go("取消")])),_:1}),St(h,{type:"primary",onClick:d[9]||(d[9]=I=>l(ot(r)))},{default:Ln(()=>d[15]||(d[15]=[Go(" 提交 ")])),_:1})])]),default:Ln(()=>[bn("div",lO,[St(S,{model:ot(r),class:"edit-data-form"},{default:Ln(()=>[St(j,{label:"接口名","label-width":120,required:!0},{default:Ln(()=>[St(b,{modelValue:ot(r).name,"onUpdate:modelValue":d[1]||(d[1]=I=>ot(r).name=I),autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(j,{label:"类型(method)","label-width":120,required:!0},{default:Ln(()=>[St(E,{modelValue:ot(r).type,"onUpdate:modelValue":d[2]||(d[2]=I=>ot(r).type=I)},{default:Ln(()=>[St(x,{label:"GET",value:"get"}),St(x,{label:"POST",value:"post"}),St(x,{label:"DELETE",value:"delete"}),St(x,{label:"PUT",value:"put"})]),_:1},8,["modelValue"])]),_:1}),St(j,{label:"返回延时(单位毫秒)","label-width":120},{default:Ln(()=>[St(b,{modelValue:ot(r).delay,"onUpdate:modelValue":d[3]||(d[3]=I=>ot(r).delay=I),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(j,{label:"接口","label-width":120,required:!0},{default:Ln(()=>[St(b,{modelValue:ot(r).path,"onUpdate:modelValue":d[4]||(d[4]=I=>ot(r).path=I),autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(j,{label:"接口描述","label-width":120},{default:Ln(()=>[St(b,{modelValue:ot(r).description,"onUpdate:modelValue":d[5]||(d[5]=I=>ot(r).description=I),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(j,{label:"接口状态","label-width":120},{default:Ln(()=>[St(y,{modelValue:ot(r).enabled,"onUpdate:modelValue":d[6]||(d[6]=I=>ot(r).enabled=I),"inline-prompt":"","active-text":"开","inactive-text":"关"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),St(w,{modelValue:ot(r).response,"onUpdate:modelValue":d[7]||(d[7]=I=>ot(r).response=I),class:"edit-data-json",mode:"text"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])],64)}}}),vO=ku(dO,[["__scopeId","data-v-357bf5b6"]]),pO={id:"",name:"",path:"",description:""},kd=ca([]);async function fO(){try{await ec();const e=Ng("prjId");e&&ug(e)}catch{throw new Error("获取项目列表失败")}}function hO(){return{...pO}}function ug(e){if(typeof e=="string"){const t=kd.value.find(o=>o.id===e);if(t)e=t;else{Xn.error("未找到项目");return}}Fp(e).then()}async function gO(e){try{if((await qn.post(`${qn.$apiBase}/mock/api/prj`,{...e,id:void 0}).then(qn.getData)).success)return Xn.success("创建项目成功"),ec().then(),!0;Xn.error("创建项目失败")}catch{Xn.error("创建项目失败")}return!1}async function mO(e){try{if((await qn.put(`${qn.$apiBase}/mock/api/prj/${e.id}`,e).then(qn.getData)).success)return Xn.success("更新项目成功"),ec().then(),!0;Xn.error("更新项目失败")}catch{Xn.error("更新项目失败")}return!1}async function bO(e){try{if((await qn.delete(`${qn.$apiBase}/mock/api/prj/${e.id}`).then(qn.getData)).success)return Xn.success("删除项目成功"),ec().then(),!0;Xn.error("删除项目失败")}catch{Xn.error("删除项目失败")}return!1}async function ec(){try{const e=await qn.get(`${qn.$apiBase}/mock/api/prj/list`).then(qn.getData);e.success?kd.value=e.data||[]:Xn.error("获取项目列表失败")}catch(e){console.log(e),Xn.error("获取项目列表失败")}}const jO={class:"prj-wrapper"},xO={"w-full":"",class:"prj-list"},yO={class:"prj-title"},wO={class:"prj-path"},kO={class:"prj-desc"},CO={class:"prj-control"},SO=["onClick"],OO=["onClick"],EO={class:"dialog-footer"},zO=Na({__name:"mockList",setup(e){const t=ca(!1),o=yp({id:"",name:"",path:"",description:""});function r(){Object.assign(o,hO()),t.value=!0}function a(i){Object.assign(o,{id:i.id??"",name:i.name,path:i.path,description:i.description??""}),t.value=!0}async function s(i){let l;i.id?l=await mO(i):l=await gO(i),l&&(t.value=!1)}return(i,l)=>{const c=Bp,d=kp,u=Dp,f=Np,h=Js,m=Cp;return So(),nr(al,null,[bn("div",jO,[bn("div",xO,[(So(!0),nr(al,null,Ug(ot(kd),(g,b)=>(So(),nr("div",{key:b,class:"prj-item"},[bn("div",yO,Oa(g.name),1),bn("div",wO,Oa(g.path),1),bn("div",kO,Oa(g.description),1),bn("div",CO,[bn("div",{class:"prj-control-btn prj-btn-open",onClick:j=>ot(ug)(g)},l[6]||(l[6]=[bn("i",{class:"i-icon-park-outline-preview-open"},null,-1)]),8,SO),bn("div",{class:"prj-control-btn prj-btn-edit",onClick:j=>a(g)},l[7]||(l[7]=[bn("i",{class:"i-icon-park-outline-edit-two"},null,-1)]),8,OO),St(c,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:j=>ot(bO)(g)},{reference:Ln(()=>l[8]||(l[8]=[bn("div",{class:"prj-control-btn prj-btn-delete"},[bn("i",{class:"i-icon-park-outline-delete"})],-1)])),_:2},1032,["onConfirm"])])]))),128)),bn("div",{class:"prj-add",onClick:r},l[9]||(l[9]=[bn("i",{class:"i-icon-park-outline-plus"},null,-1)]))])]),St(m,{modelValue:ot(t),"onUpdate:modelValue":l[5]||(l[5]=g=>wp(t)?t.value=g:null),title:ot(o).id?"修改项目":"添加项目"},{footer:Ln(()=>[bn("span",EO,[St(h,{onClick:l[3]||(l[3]=g=>t.value=!1)},{default:Ln(()=>l[10]||(l[10]=[Go("取消")])),_:1}),St(h,{type:"primary",onClick:l[4]||(l[4]=g=>s(ot(o)))},{default:Ln(()=>l[11]||(l[11]=[Go(" 提交 ")])),_:1})])]),default:Ln(()=>[St(f,{model:ot(o)},{default:Ln(()=>[St(u,{label:"项目名称","label-width":120,required:!0},{default:Ln(()=>[St(d,{modelValue:ot(o).name,"onUpdate:modelValue":l[0]||(l[0]=g=>ot(o).name=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(u,{label:"接口基础路径","label-width":120,required:!0},{default:Ln(()=>[St(d,{modelValue:ot(o).path,"onUpdate:modelValue":l[1]||(l[1]=g=>ot(o).path=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),St(u,{label:"项目描述","label-width":120},{default:Ln(()=>[St(d,{modelValue:ot(o).description,"onUpdate:modelValue":l[2]||(l[2]=g=>ot(o).description=g),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),$O=ku(zO,[["__scopeId","data-v-ede3387b"]]),iE=Na({__name:"mock",setup(e){return xp(()=>{fO()}),(t,o)=>ot(_o)?(So(),ti(vO,{key:1})):(So(),ti($O,{key:0}))}});export{iE as default};
