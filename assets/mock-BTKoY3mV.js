import{h as Jg,dt as Kg,aR as Yg,_ as Qg,k as as,aS as Xg,u as Gg,E as yo,r as Dr,G as bs,F as Vn,v as Io,x as ot,s as ds,K as Mt,q as zi,w as cr,y as Zg,aN as em,N as go,H as Ha,z as tm,R as Ea,aW as ar,aA as hr,du as nm,dv as rm,ay as om,a_ as El,bx as fu,a8 as am,aa as sm,n as tv,ag as im,a6 as lm,T as np,a7 as qc,bl as cm,aB as um,a0 as ed,a4 as rp,L as bi,Y as $l,W as op,X as ap,a3 as dm,dw as vm,Z as fm}from"./index-CtZEFwD0.js";import{d as pm}from"./dayjs.min-DSakO7ev.js";import{E as sp}from"./el-dialog-DZur9z-J.js";import{f as ip,a as lp,n as wr,c as zt,b as hm,B as Je,I as Cr,l as Ht,i as Rn,p as qo,j as _a,aa as Ei,d as oc,D as Ts,k as on,s as Xo,L as gm,M as mm,W as To,X as $s,Y as cp,Z as up,_ as Ms,r as ka,$ as dp,a0 as vp,a1 as bm,t as Ml,u as Al,a2 as pu,a3 as rl,a4 as ks,a5 as jm,a6 as xm,q as ac,v as fp,w as td,x as nd,K as No,as as ym,C as Ca,H as Mr,al as na,an as wm,a9 as ra,z as km,A as Cm,ac as pp,ai as hp,ak as As,aj as hu,U as Sm,V as ol,ao as Pl,e as rd,g as nv,h as Ns,a7 as gp,a8 as od,y as mp,R as Om,S as zm,m as Xa,at as Em,ah as $m,o as rv,ar as Mm,Q as Am,P as Pm,ap as Rm,N as Im,ag as _m,am as qm,E as Tm,F as Nm,ab as ov,G as Dm,ae as Um,T as Bm,af as Fm,ad as Lm,J as Vm}from"./jse-theme-dark-Dx5cdzsy.js";import{m as $i}from"./memoize-one.esm-BdPwpGay.js";import{H as Wm,t as di,s as bp,V as Hm,g as av,R as Jm,D as Km,E as vs,k as sv,C as vi,l as Ym,a as Qm,h as Xm,b as Gm,f as Zm,d as eb,e as tb,i as nb,j as rb,r as ob,m as ab,n as sb,o as ib,p as fs,q as lb,u as cb,v as ub,w as db,x as vb,z as fb,A as pb,ad as hb,B as Tc,an as iv,L as gb,F as mb,K as bb,G as jb}from"./index-C72vHrzr.js";import{c as xb,a as yb,b as wb,d as kb}from"./index-BwgBnafy.js";import{i as Zt}from"./Router-Cq86EG5d.js";import{m as Cb}from"./map-CDRftoTy.js";import{r as jp}from"./range-BesDXGP-.js";import{a as xp,E as yp}from"./el-form-item-DFfmkc6O.js";import{E as Sb}from"./el-switch-145_1Sy1.js";/* empty css               */import{a as Ob,E as zb}from"./el-select-tFm0nHcB.js";import"./el-popper-BSa__lRE.js";import"./el-empty--AxO6ouT.js";import{F as lv,a as Eb,E as $b}from"./el-table-v2-fvAPEP11.js";import{u as wp}from"./useCopy-C-KDGCt9.js";import{E as Mb}from"./el-divider-BEK5Wy5S.js";import{E as kp}from"./el-popover-CBbKcj2v.js";import{E as cv}from"./index-BHgMpVYd.js";import"./index-Dn9KuULc.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseEach-BB36Sl8r.js";import"./_castFunction-BR2GyVCJ.js";import"./_baseIteratee-PrA0Ksfm.js";import"./toFinite-DybOSJqy.js";import"./castArray-ozngckRu.js";import"./strings-EdR57uIy.js";import"./index-DF-Rzn_f.js";import"./raf-ChjS0Dte.js";const Ab=Jg({icon:{type:Yg,default:()=>Kg},title:String,content:{type:String,default:""}}),Pb={back:()=>!0},Rb=as({name:"ElPageHeader"}),Ib=as({...Rb,props:Ab,emits:Pb,setup(e,{emit:t}){const{t:r}=Xg(),o=Gg("page-header");function a(){t("back")}return(s,i)=>(Dr(),yo("div",{class:Io([ot(o).b(),{[ot(o).m("has-breadcrumb")]:!!s.$slots.breadcrumb,[ot(o).m("has-extra")]:!!s.$slots.extra,[ot(o).is("contentful")]:!!s.$slots.default}])},[s.$slots.breadcrumb?(Dr(),yo("div",{key:0,class:Io(ot(o).e("breadcrumb"))},[ds(s.$slots,"breadcrumb")],2)):bs("v-if",!0),Vn("div",{class:Io(ot(o).e("header"))},[Vn("div",{class:Io(ot(o).e("left"))},[Vn("div",{class:Io(ot(o).e("back")),role:"button",tabindex:"0",onClick:a},[s.icon||s.$slots.icon?(Dr(),yo("div",{key:0,"aria-label":s.title||ot(r)("el.pageHeader.title"),class:Io(ot(o).e("icon"))},[ds(s.$slots,"icon",{},()=>[s.icon?(Dr(),zi(ot(em),{key:0},{default:cr(()=>[(Dr(),zi(Zg(s.icon)))]),_:1})):bs("v-if",!0)])],10,["aria-label"])):bs("v-if",!0),Vn("div",{class:Io(ot(o).e("title"))},[ds(s.$slots,"title",{},()=>[go(Ha(s.title||ot(r)("el.pageHeader.title")),1)])],2)],2),Mt(ot(Mb),{direction:"vertical"}),Vn("div",{class:Io(ot(o).e("content"))},[ds(s.$slots,"content",{},()=>[go(Ha(s.content),1)])],2)],2),s.$slots.extra?(Dr(),yo("div",{key:0,class:Io(ot(o).e("extra"))},[ds(s.$slots,"extra")],2)):bs("v-if",!0)],2),s.$slots.default?(Dr(),yo("div",{key:1,class:Io(ot(o).e("main"))},[ds(s.$slots,"default")],2)):bs("v-if",!0)],2))}});var _b=Qg(Ib,[["__file","page-header.vue"]]);const qb=tm(_b),Tb={id:-1,name:"",type:"get",enabled:!0,path:"",description:"",delay:0,response:"",projectId:""},Zr=Ea(),ad=Ea([]);function uv(){if(!Zr.value)throw new Error("未选择项目");return{...Tb,projectId:Zr.value.id}}async function Cp(e){Zr.value=e,ad.value=[],Zr.value?(nm("prjId",Zr.value.id),await sc()):rm("prjId")}async function Nb(e){try{if((await ar.put(`${ar.$apiBase}/mock/api/data/${e.id}`,{...e,id:void 0,projectId:void 0}).then(ar.getData)).success)return hr.success("修改数据成功"),sc().then(),!0;hr.error("修改数据失败")}catch{hr.error("修改数据失败")}return!1}async function Db(e){var t;try{if((await ar.post(`${ar.$apiBase}/mock/api/data`,{...e,id:void 0,projectId:(t=Zr.value)==null?void 0:t.id}).then(ar.getData)).success)return hr.success("创建数据成功"),sc().then(),!0;hr.error("创建数据失败")}catch{hr.error("创建数据失败")}return!1}async function Ub(e){try{if((await ar.delete(`${ar.$apiBase}/mock/api/data/${e.id}`).then(ar.getData)).success)return hr.success("删除数据成功"),sc().then(),!0;hr.error("删除数据失败")}catch{hr.error("删除数据失败")}return!1}async function sc(){if(!Zr.value){hr.error("未选择项目");return}try{ad.value=await Bb(Zr.value)}catch(e){console.log(e),hr.error("获取数据列表失败")}}async function Bb(e){const t=await ar.get(`${ar.$apiBase}/mock/api/prj/${e.id}/list`).then(ar.getData);if(t.success)return(t.data||[]).map(r=>(r.createdAt=pm(r.createdAt).format("YYYY-MM-DD HH:mm:ss"),r.url=`${ar.$apiBase}/mock/${e.id}${e.path}${r.path}`,r));throw new Error(t.message)}const sd=e=>Array.isArray(e),Fb=e=>typeof e=="string";function Ar(e){return(...t)=>{const r=t.map(s=>to(s)),o=r[0],a=r[1];return r.length===1?s=>e(o(s)):r.length===2?s=>e(o(s),a(s)):s=>e(...r.map(i=>i(s)))}}const Cs={pipe:(...e)=>{const t=e.map(r=>to(r));return r=>t.reduce((o,a)=>a(o),r)},object:e=>{const t=Object.keys(e).map(r=>[r,to(e[r])]);return r=>{const o={};for(const[a,s]of t)o[a]=s(r);return o}},array:(...e)=>{const t=e.map(r=>to(r));return r=>t.map(o=>o(r))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return r=>r==null?void 0:r[t]}return t=>{let r=t;for(const o of e)r=r==null?void 0:r[o];return r}},map:e=>{const t=to(e);return r=>r.map(t)},filter:e=>{const t=to(e);return r=>r.filter(t)},sort:(e=["get"],t)=>{const r=to(e),o=t==="desc"?-1:1;function a(s,i){const l=r(s),c=r(i);return l>c?o:l<c?-o:0}return s=>s.slice().sort(a)},pick:(...e)=>{const t=e.map(([o,...a])=>[a[a.length-1],Cs.get(...a)]),r=(o,a)=>{const s={};for(const[i,l]of a)s[i]=l(o);return s};return o=>sd(o)?o.map(a=>r(a,t)):r(o,t)},groupBy:e=>{const t=to(e);return r=>{const o={};for(const a of r){const s=t(a);o[s]?o[s].push(a):o[s]=[a]}return o}},keyBy:e=>{const t=to(e);return r=>{const o={};for(const a of r){const s=t(a);o[s]=o[s]??a}return o}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(Cs.groupBy(e)(t)).map(r=>r[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,r)=>t*r),sum:()=>e=>e.reduce((t,r)=>t+r),average:()=>e=>Cs.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const r=to(e),o=to(t);return a=>o(a).includes(r(a))},"not in":(e,t)=>{const r=Cs.in(e,t);return o=>!r(o)},regex:(e,t,r)=>{const o=new RegExp(t,r),a=to(e);return s=>o.test(a(s))},and:Ar((e,t)=>e&&t),or:Ar((e,t)=>e||t),not:Ar(e=>!e),exists:Ar(e=>e!==void 0),eq:Ar((e,t)=>e===t),gt:Ar((e,t)=>e>t),gte:Ar((e,t)=>e>=t),lt:Ar((e,t)=>e<t),lte:Ar((e,t)=>e<=t),ne:Ar((e,t)=>e!==t),add:Ar((e,t)=>e+t),subtract:Ar((e,t)=>e-t),multiply:Ar((e,t)=>e*t),divide:Ar((e,t)=>e/t),pow:Ar((e,t)=>e**t),mod:Ar((e,t)=>e%t),abs:Ar(Math.abs),round:Ar((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},al=[];function to(e,t){al.unshift({...Cs,...al[0]});try{const r=sd(e)?Lb(e,al[0]):()=>e;return o=>{try{return r(o)}catch(a){throw a.jsonquery=[{data:o,query:e},...a.jsonquery??[]],a}}}finally{al.shift()}}function Lb(e,t){const[r,...o]=e,a=t[r];if(!a)throw new Error(`Unknown function '${r}'`);return a(...o)}const Sp={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},Vb=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Wb=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Hb=/^"(?:[^"\\]|\\.)*"/,Jb=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Kb=/^(0|[1-9][0-9]*)/,Yb=/^(true|false|null)/,Qb=/^[ \n\t\r]+/;function Op(e,t){const r=()=>{j();const y=o();if(j(),e[O]==="|"){const $=[y];for(;e[O]==="|";)O++,j(),$.push(o());return["pipe",...$]}return y},o=()=>{const y={...Sp},$=a();j();for(const I of Object.keys(y).sort((T,z)=>z.length-T.length)){const T=y[I];if(e.substring(O,O+T.length)===T){O+=T.length,j();const z=a();return[I,$,z]}}return $},a=()=>{if(e[O]==="("){O++;const y=r();return x(")"),y}return s()},s=()=>{const y=[];if(e[O]==="."){for(;e[O]===".";)O++,y.push(u()??d()??p()??S("Property expected"));return["get",...y]}return i()},i=()=>{const y=O,$=d();if(j(),!$||e[O]!=="(")return O=y,l();O++,!Cs[$]&&S(`Unknown function '${$}'`),j();const I=e[O]!==")"?[r()]:[];for(;O<e.length&&e[O]!==")";)j(),x(","),I.push(r());return x(")"),[$,...I]},l=()=>{if(e[O]==="{"){O++,j();const y={};let $=!0;for(;O<e.length&&e[O]!=="}";){$?$=!1:(x(","),j());const I=u()??d()??p()??S("Key expected");j(),x(":"),y[I]=r()}return x("}"),["object",y]}return c()},c=()=>{if(e[O]==="["){O++,j();const y=[];let $=!0;for(;O<e.length&&e[O]!=="]";)$?$=!1:(x(","),j()),y.push(r());return x("]"),["array",...y]}return u()??h()??m()},u=()=>b(Hb,JSON.parse),d=()=>b(Wb,y=>y),h=()=>b(Jb,JSON.parse),p=()=>b(Kb,JSON.parse),m=()=>{const y=b(Yb,JSON.parse);if(y!==void 0)return y;S("Value expected")},g=()=>{j(),O<e.length&&S(`Unexpected part '${e.substring(O)}'`)},b=(y,$)=>{const I=e.substring(O).match(y);if(I)return O+=I[0].length,$(I[0])},j=()=>b(Qb,y=>y),x=y=>{e[O]!==y&&S(`Character '${y}' expected`),O++},S=(y,$=O)=>{throw new SyntaxError(`${y} (pos: ${$})`)};let O=0;const C=r();return g(),C}const Xb=40,Gb="  ",Zb=(e,t)=>{const r=Gb,o=(u,d)=>sd(u)?a(u,d):JSON.stringify(u),a=(u,d)=>{var h;const[p,...m]=u;if(p==="get"&&m.length>0)return i(m);if(p==="pipe"){const x=m.map(S=>o(S,d+r));return c(x,[""," | ",""],["",`
${d+r}| `,""])}if(p==="object")return s(m[0],d);if(p==="array"){const x=m.map(S=>o(S,d));return c(x,["[",", ","]"],[`[
${d+r}`,`,
${d+r}`,`
${d}]`])}const g=((h=void 0)==null?void 0:h[p])??Sp[p];if(g&&m.length===2){const[x,S]=m,O=o(x,d),C=o(S,d);return`(${O} ${g} ${C})`}const b=m.length===1?d:d+r,j=m.map(x=>o(x,b));return m.length===1&&j[0][0]==="("?`${p}${j}`:c(j,[`${p}(`,", ",")"],m.length===1?[`${p}(`,`,
${d}`,")"]:[`${p}(
${b}`,`,
${b}`,`
${d})`])},s=(u,d)=>{const h=d+r,p=Object.entries(u).map(([m,g])=>`${l(m)}: ${o(g,h)}`);return c(p,["{ ",", "," }"],[`{
${h}`,`,
${h}`,`
${d}}`])},i=u=>u.map(d=>`.${l(d)}`).join(""),l=u=>Vb.test(u)?u:JSON.stringify(u),c=(u,[d,h,p],[m,g,b])=>d.length+u.reduce((j,x)=>j+x.length+h.length,0)-h.length+p.length<=Xb?d+u.join(h)+p:m+u.join(g)+b;return o(e,"")};function ej(e,t,r){return to(Fb(t)?Op(t):t)(e)}class tj{add(t,r,o){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][o?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(o){o.call(r&&r.context?r.context:r,r)})}}class nj{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(a=>{if(typeof a!="object"||!a.name||!a.init)throw new Error("Invalid JSEP plugin format");this.registered[a.name]||(a.init(this.jsep),this.registered[a.name]=a)})}}class ee{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+ee.version}static addUnaryOp(t){return ee.max_unop_len=Math.max(t.length,ee.max_unop_len),ee.unary_ops[t]=1,ee}static addBinaryOp(t,r,o){return ee.max_binop_len=Math.max(t.length,ee.max_binop_len),ee.binary_ops[t]=r,o?ee.right_associative.add(t):ee.right_associative.delete(t),ee}static addIdentifierChar(t){return ee.additional_identifier_chars.add(t),ee}static addLiteral(t,r){return ee.literals[t]=r,ee}static removeUnaryOp(t){return delete ee.unary_ops[t],t.length===ee.max_unop_len&&(ee.max_unop_len=ee.getMaxKeyLen(ee.unary_ops)),ee}static removeAllUnaryOps(){return ee.unary_ops={},ee.max_unop_len=0,ee}static removeIdentifierChar(t){return ee.additional_identifier_chars.delete(t),ee}static removeBinaryOp(t){return delete ee.binary_ops[t],t.length===ee.max_binop_len&&(ee.max_binop_len=ee.getMaxKeyLen(ee.binary_ops)),ee.right_associative.delete(t),ee}static removeAllBinaryOps(){return ee.binary_ops={},ee.max_binop_len=0,ee}static removeLiteral(t){return delete ee.literals[t],ee}static removeAllLiterals(){return ee.literals={},ee}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new ee(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return ee.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!ee.binary_ops[String.fromCharCode(t)]||ee.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return ee.isIdentifierStart(t)||ee.isDecimalDigit(t)}throwError(t){const r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=t,r}runHook(t,r){if(ee.hooks[t]){const o={context:this,node:r};return ee.hooks.run(t,o),o.node}return r}searchHook(t){if(ee.hooks[t]){const r={context:this};return ee.hooks[t].find(function(o){return o.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.code;for(;t===ee.SPACE_CODE||t===ee.TAB_CODE||t===ee.LF_CODE||t===ee.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:ee.COMPOUND,body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],o,a;for(;this.index<this.expr.length;)if(o=this.code,o===ee.SEMCOL_CODE||o===ee.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())r.push(a);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,ee.max_binop_len),r=t.length;for(;r>0;){if(ee.binary_ops.hasOwnProperty(t)&&(!ee.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!ee.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,o,a,s,i,l,c,u;if(i=this.gobbleToken(),!i||(r=this.gobbleBinaryOp(),!r))return i;for(s={value:r,prec:ee.binaryPrecedence(r),right_a:ee.right_associative.has(r)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+r),a=[i,s,l];r=this.gobbleBinaryOp();){if(o=ee.binaryPrecedence(r),o===0){this.index-=r.length;break}s={value:r,prec:o,right_a:ee.right_associative.has(r)},u=r;const d=h=>s.right_a&&h.right_a?o>h.prec:o<=h.prec;for(;a.length>2&&d(a[a.length-2]);)l=a.pop(),r=a.pop().value,i=a.pop(),t={type:ee.BINARY_EXP,operator:r,left:i,right:l},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+u),a.push(s,t)}for(c=a.length-1,t=a[c];c>1;)t={type:ee.BINARY_EXP,operator:a[c-1].value,left:a[c-2],right:t},c-=2;return t}gobbleToken(){let t,r,o,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,ee.isDecimalDigit(t)||t===ee.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===ee.SQUOTE_CODE||t===ee.DQUOTE_CODE)a=this.gobbleStringLiteral();else if(t===ee.OBRACK_CODE)a=this.gobbleArray();else{for(r=this.expr.substr(this.index,ee.max_unop_len),o=r.length;o>0;){if(ee.unary_ops.hasOwnProperty(r)&&(!ee.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&!ee.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=o;const s=this.gobbleToken();return s||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:ee.UNARY_EXP,operator:r,argument:s,prefix:!0})}r=r.substr(0,--o)}ee.isIdentifierStart(t)?(a=this.gobbleIdentifier(),ee.literals.hasOwnProperty(a.name)?a={type:ee.LITERAL,value:ee.literals[a.name],raw:a.name}:a.name===ee.this_str&&(a={type:ee.THIS_EXP})):t===ee.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let r=this.code;for(;r===ee.PERIOD_CODE||r===ee.OBRACK_CODE||r===ee.OPAREN_CODE||r===ee.QUMARK_CODE;){let o;if(r===ee.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==ee.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,r===ee.OBRACK_CODE?(t={type:ee.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==ee.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):r===ee.OPAREN_CODE?t={type:ee.CALL_EXP,arguments:this.gobbleArguments(ee.CPAREN_CODE),callee:t}:(r===ee.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:ee.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,o;for(;ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===ee.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r==="+"||r==="-")&&(t+=this.expr.charAt(this.index++));ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);ee.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,ee.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===ee.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===ee.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:ee.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const r=this.index,o=this.expr.charAt(this.index++);let a=!1;for(;this.index<this.expr.length;){let s=this.expr.charAt(this.index++);if(s===o){a=!0;break}else if(s==="\\")switch(s=this.expr.charAt(this.index++),s){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=s}else t+=s}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:ee.LITERAL,value:t,raw:this.expr.substring(r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(ee.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,ee.isIdentifierPart(t));)this.index++;return{type:ee.IDENTIFIER,name:this.expr.slice(r,this.index)}}gobbleArguments(t){const r=[];let o=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let s=this.code;if(s===t){o=!0,this.index++,t===ee.CPAREN_CODE&&a&&a>=r.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(s===ee.COMMA_CODE){if(this.index++,a++,a!==r.length){if(t===ee.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===ee.CBRACK_CODE)for(let i=r.length;i<a;i++)r.push(null)}}else if(r.length!==a&&a!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===ee.COMPOUND)&&this.throwError("Expected comma"),r.push(i)}}return o||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(ee.CPAREN_CODE);if(this.code===ee.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:ee.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:ee.ARRAY_EXP,elements:this.gobbleArguments(ee.CBRACK_CODE)}}}const rj=new tj;Object.assign(ee,{hooks:rj,plugins:new nj(ee),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});ee.max_unop_len=ee.getMaxKeyLen(ee.unary_ops);ee.max_binop_len=ee.getMaxKeyLen(ee.binary_ops);const qa=e=>new ee(e).parse(),oj=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(ee).filter(e=>!oj.includes(e)&&qa[e]===void 0).forEach(e=>{qa[e]=ee[e]});qa.Jsep=ee;const aj="ConditionalExpression";var sj={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===e.QUMARK_CODE){this.index++;const o=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const s=this.gobbleExpression();if(s||this.throwError("Expected expression"),r.node={type:aj,test:o,consequent:a,alternate:s},o.operator&&e.binary_ops[o.operator]<=.9){let i=o;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;r.node.test=i.right,i.right=r.node,r.node=o}}else this.throwError("Expected :")}})}};qa.plugins.register(sj);const dv=47,ij=92;var lj={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===dv){const o=++this.index;let a=!1;for(;this.index<this.expr.length;){if(this.code===dv&&!a){const s=this.expr.slice(o,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(s,i)}catch(c){this.throwError(c.message)}return r.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&(a=!1),this.index+=this.code===ij?2:1}this.throwError("Unclosed Regex")}})}};const Nc=43,cj=45,js={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[Nc,cj],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];js.assignmentOperators.forEach(o=>e.addBinaryOp(o,js.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(a){const s=this.code;js.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,a.node={type:"UpdateExpression",operator:s===Nc?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!a.node.argument||!t.includes(a.node.argument.type))&&this.throwError(`Unexpected ${a.node.operator}`))}),e.hooks.add("after-token",function(a){if(a.node){const s=this.code;js.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(a.node.type)||this.throwError(`Unexpected ${a.node.operator}`),this.index+=2,a.node={type:"UpdateExpression",operator:s===Nc?"++":"--",argument:a.node,prefix:!1})}}),e.hooks.add("after-expression",function(a){a.node&&r(a.node)});function r(o){js.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",r(o.left),r(o.right)):o.operator||Object.values(o).forEach(a=>{a&&typeof a=="object"&&r(a)})}}};qa.plugins.register(lj,js);qa.addUnaryOp("typeof");qa.addLiteral("null",null);qa.addLiteral("undefined",void 0);var vv,uj=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],dj=["mainAxis","crossAxis","limiter"];function zp(e,t){if(e==null)return{};var r,o,a=function(i,l){if(i==null)return{};var c={};for(var u in i)if({}.hasOwnProperty.call(i,u)){if(l.indexOf(u)!==-1)continue;c[u]=i[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function fv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fv(Object(r),!0).forEach(function(o){vj(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fv(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function vj(e,t,r){return(t=function(o){var a=function(s,i){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var c=l.call(s,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}(o,"string");return typeof a=="symbol"?a:a+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pv(e,t,r,o,a,s,i){try{var l=e[s](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(o,a)}function yt(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var s=e.apply(t,r);function i(c){pv(s,o,a,i,l,"next",c)}function l(c){pv(s,o,a,i,l,"throw",c)}i(void 0)})}}typeof window<"u"&&((vv=window).__svelte||(vv.__svelte={v:new Set})).v.add("5");var Js=!1;Js=!0;var Hr=Symbol(),fj=!1,Ji=32,Dc=128,Do=256,gu=512,Yr=1024,Ks=2048,Ys=4096,$a=8192,id=16384,ic=65536,pj=1<<17,hj=1<<20,Ma=Symbol("$state"),Ep=Symbol("legacy props"),gj=Symbol(""),Ki=Array.isArray,mj=Array.prototype.indexOf,mu=Array.from,bj=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,$p=Object.getOwnPropertyDescriptors,jj=Object.prototype,xj=Array.prototype,ld=Object.getPrototypeOf;function fi(e){return typeof e=="function"}function yj(e){return e()}function Rl(e){for(var t=0;t<e.length;t++)e[t]()}var Mi=[],Uc=[];function Mp(){var e=Mi;Mi=[],Rl(e)}function lc(e){Mi.length===0&&queueMicrotask(Mp),Mi.push(e)}function hv(){var e;Mi.length>0&&Mp(),Uc.length>0&&(e=Uc,Uc=[],Rl(e))}function Ap(e){return e===this.v}function cd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wj(e,t){return e!==t}function ud(e){return!cd(e,this.v)}function Gr(e,t){return{f:0,v:e,reactions:null,equals:Ap,rv:0,wv:0}}function dd(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=Gr(e);return o||(a.equals=ud),Js&&$n!==null&&$n.l!==null&&((r=(t=$n.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function M(e){return function(t){return Kn!==null&&!wo&&2&Kn.f&&(Uo===null?Uo=[t]:Uo.push(t)),t}(dd(e,arguments.length>1&&arguments[1]!==void 0&&arguments[1]))}function oo(e,t){return f(e,Lo(()=>n(e))),t}function f(e,t){return Kn!==null&&!wo&&ei()&&18&Kn.f&&(Uo===null||!Uo.includes(e))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),bu(e,t)}function bu(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=Dp(),Pp(e,Ks),ei()&&Zn!==null&&Zn.f&Yr&&!(96&Zn.f)&&(Go===null?function(r){Go=r}([e]):Go.push(e))),t}function gv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return f(e,r),o}function Pp(e,t){var r=e.reactions;if(r!==null)for(var o=ei(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;l&Ks||(o||i!==Zn)&&(Po(i,t),1280&l&&(2&l?Pp(i,Ys):fc(i)))}}function Ai(e){var t=2050,r=Kn!==null&&2&Kn.f?Kn:null;return Zn===null||r!==null&&r.f&Do?t|=Do:Zn.f|=hj,{ctx:$n,deps:null,effects:null,equals:Ap,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??Zn}}function fe(e){var t=Ai(e);return t.equals=ud,t}function Rp(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ca(t[r])}}function Ip(e){var t=function(r){var o,a=Zn;Na(function(s){for(var i=s.parent;i!==null;){if(!(2&i.f))return i;i=i.parent}return null}(r));try{Rp(r),o=Bp(r)}finally{Na(a)}return o}(e);Po(e,(Sa||e.f&Do)&&e.deps!==null?Ys:Yr),e.equals(t)||(e.v=t,e.wv=Dp())}var aa,_p,qp,Tp;function xs(e){if(typeof e!="object"||e===null||Ma in e)return e;var t=ld(e);if(t!==jj&&t!==xj)return e;var r=new Map,o=Ki(e),a=Gr(0);return o&&r.set("length",Gr(e.length)),new Proxy(e,{defineProperty(s,i,l){"value"in l&&l.configurable!==!1&&l.enumerable!==!1&&l.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var c=r.get(i);return c===void 0?(c=Gr(l.value),r.set(i,c)):f(c,xs(l.value)),!0},deleteProperty(s,i){var l=r.get(i);if(l===void 0)i in s&&r.set(i,Gr(Hr));else{if(o&&typeof i=="string"){var c=r.get("length"),u=Number(i);Number.isInteger(u)&&u<c.v&&f(c,u)}f(l,Hr),mv(a)}return!0},get(s,i,l){var c;if(i===Ma)return e;var u=r.get(i),d=i in s;if(u===void 0&&(!d||(c=oa(s,i))!==null&&c!==void 0&&c.writable)&&(u=Gr(xs(d?s[i]:Hr)),r.set(i,u)),u!==void 0){var h=n(u);return h===Hr?void 0:h}return Reflect.get(s,i,l)},getOwnPropertyDescriptor(s,i){var l=Reflect.getOwnPropertyDescriptor(s,i);if(l&&"value"in l){var c=r.get(i);c&&(l.value=n(c))}else if(l===void 0){var u=r.get(i),d=u==null?void 0:u.v;if(u!==void 0&&d!==Hr)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(s,i){var l;if(i===Ma)return!0;var c=r.get(i),u=c!==void 0&&c.v!==Hr||Reflect.has(s,i);return(c!==void 0||Zn!==null&&(!u||(l=oa(s,i))!==null&&l!==void 0&&l.writable))&&(c===void 0&&(c=Gr(u?xs(s[i]):Hr),r.set(i,c)),n(c)===Hr)?!1:u},set(s,i,l,c){var u,d=r.get(i),h=i in s;if(o&&i==="length")for(var p=l;p<d.v;p+=1){var m=r.get(p+"");m!==void 0?f(m,Hr):p in s&&(m=Gr(Hr),r.set(p+"",m))}d===void 0?(!h||(u=oa(s,i))!==null&&u!==void 0&&u.writable)&&(f(d=Gr(void 0),xs(l)),r.set(i,d)):(h=d.v!==Hr,f(d,xs(l)));var g=Reflect.getOwnPropertyDescriptor(s,i);if(g!=null&&g.set&&g.set.call(c,l),!h){if(o&&typeof i=="string"){var b=r.get("length"),j=Number(i);Number.isInteger(j)&&j>=b.v&&f(b,j+1)}mv(a)}return!0},ownKeys(s){n(a);var i=Reflect.ownKeys(s).filter(u=>{var d=r.get(u);return d===void 0||d.v!==Hr});for(var[l,c]of r)c.v===Hr||l in s||i.push(l);return i},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function mv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;f(e,e.v+t)}function cc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function ao(e){return qp.call(e)}function uc(e){return Tp.call(e)}function A(e,t){return ao(e)}function Ne(e,t){var r=ao(e);return r instanceof Comment&&r.data===""?uc(r):r}function N(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=uc(r);return r}var sl=!1,Il=!1,_l=null,xl=!1,vd=!1;function bv(e){vd=e}var ki=[],Kn=null,wo=!1;function Ta(e){Kn=e}var Zn=null;function Na(e){Zn=e}var Uo=null,Jr=null,no=0,Go=null,Np=1,ql=0,Sa=!1;function Dp(){return++Np}function Qs(e){var t=e.f;if(t&Ks)return!0;if(t&Ys){var r=e.deps,o=!!(t&Do);if(r!==null){var a,s,i=!!(t&gu),l=o&&Zn!==null&&!Sa,c=r.length;if(i||l){var u=e,d=u.parent;for(a=0;a<c;a++){var h,p,m;s=r[a],(i||(h=s)===null||h===void 0||(h=h.reactions)===null||h===void 0||!h.includes(u))&&((m=(p=s).reactions)!==null&&m!==void 0?m:p.reactions=[]).push(u)}i&&(u.f^=gu),!l||d===null||d.f&Do||(u.f^=Do)}for(a=0;a<c;a++)if(Qs(s=r[a])&&Ip(s),s.wv>e.wv)return!0}o&&(Zn===null||Sa)||Po(e,Yr)}return!1}function dc(e,t,r,o){if(sl){if(r===null&&(sl=!1),function(a){return!(a.f&id||a.parent!==null&&a.parent.f&Dc)}(t))throw e}else r!==null&&(sl=!0),function(a,s){for(var i=s;i!==null;){if(i.f&Dc)try{return void i.fn(a)}catch{i.f^=Dc}i=i.parent}throw sl=!1,a}(e,t)}function Up(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=e.reactions;if(o!==null)for(var a=0;a<o.length;a++){var s=o[a];2&s.f?Up(s,t,!1):t===s&&(r?Po(s,Ks):s.f&Yr&&Po(s,Ys),fc(s))}}function Bp(e){var t=Jr,r=no,o=Go,a=Kn,s=Sa,i=Uo,l=$n,c=wo,u=e.f;Jr=null,no=0,Go=null,Sa=!!(u&Do)&&(wo||!xl||Kn===null),Kn=96&u?null:e,Uo=null,jv(e.ctx),wo=!1,ql++;try{var d=(0,e.fn)(),h=e.deps;if(Jr!==null){var p;if(Tl(e,no),h!==null&&no>0)for(h.length=no+Jr.length,p=0;p<Jr.length;p++)h[no+p]=Jr[p];else e.deps=h=Jr;if(!Sa)for(p=no;p<h.length;p++){var m,g;((g=(m=h[p]).reactions)!==null&&g!==void 0?g:m.reactions=[]).push(e)}}else h!==null&&no<h.length&&(Tl(e,no),h.length=no);if(ei()&&Go!==null&&!wo&&h!==null&&!(6146&e.f))for(p=0;p<Go.length;p++)Up(Go[p],e);return a!==null&&ql++,d}finally{Jr=t,no=r,Go=o,Kn=a,Sa=s,Uo=i,jv(l),wo=c}}function kj(e,t){var r=t.reactions;if(r!==null){var o=mj.call(r,e);if(o!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[o]=r[a],r.pop())}}r===null&&2&t.f&&(Jr===null||!Jr.includes(t))&&(Po(t,Ys),768&t.f||(t.f^=gu),Rp(t),Tl(t,0))}function Tl(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)kj(e,r[o])}function vc(e){var t=e.f;if(!(t&id)){Po(e,Yr);var r=Zn,o=$n,a=xl;Zn=e,xl=!0;try{16&t?function(i){for(var l=i.first;l!==null;){var c=l.next;l.f&Ji||ca(l),l=c}}(e):Jp(e),Hp(e);var s=Bp(e);e.teardown=typeof s=="function"?s:null,e.wv=Np,e.deps}catch(i){dc(i,e,r,o||e.ctx)}finally{xl=a,Zn=r}}}function Cj(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){if(_l===null)throw e;dc(e,_l,null)}}function Fp(){try{for(var e=0;ki.length>0;){e++>1e3&&Cj();var t=ki,r=t.length;ki=[];for(var o=0;o<r;o++){var a=t[o];a.f&Yr||(a.f^=Yr),Sj(Oj(a))}}}finally{Il=!1,_l=null}}function Sj(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var o=e[r];if(!(24576&o.f))try{Qs(o)&&(vc(o),o.deps===null&&o.first===null&&o.nodes_start===null&&(o.teardown===null?Kp(o):o.fn=null))}catch(a){dc(a,o,null,o.ctx)}}}function fc(e){Il||(Il=!0,queueMicrotask(Fp));for(var t=_l=e;t.parent!==null;){var r=(t=t.parent).f;if(96&r){if(!(r&Yr))return;t.f^=Yr}}ki.push(t)}function Oj(e){for(var t=[],r=e.first;r!==null;){var o=r.f,a=!!(o&Ji);if(!(a&&o&Yr||o&$a)){if(4&o)t.push(r);else if(a)r.f^=Yr;else{var s=Kn;try{Kn=r,Qs(r)&&vc(r)}catch(c){dc(c,r,null,r.ctx)}finally{Kn=s}}var i=r.first;if(i!==null){r=i;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)r=l.next,l=l.parent}return t}function or(e){for(hv();ki.length>0;)Il=!0,Fp(),hv()}function Lp(){return(Lp=yt(function*(){yield Promise.resolve(),or()})).apply(this,arguments)}function n(e){var t=!!(2&e.f);if(Kn===null||wo){if(t&&e.deps===null&&e.effects===null){var r=e,o=r.parent;o===null||o.f&Do||(r.f^=Do)}}else{Uo!==null&&Uo.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var a=Kn.deps;e.rv<ql&&(e.rv=ql,Jr===null&&a!==null&&a[no]===e?no++:Jr===null?Jr=[e]:Sa&&Jr.includes(e)||Jr.push(e))}return t&&Qs(r=e)&&Ip(r),e.v}function Lo(e){var t=wo;try{return wo=!0,e()}finally{wo=t}}var zj=-7169;function Po(e,t){e.f=e.f&zj|t}function E(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(Ma in e)ju(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&Ma in r&&ju(r)}}}function ju(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{ju(e[r],t)}catch{}var o=ld(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var a=$p(o);for(var s in a){var i=a[s].get;if(i)try{i.call(e)}catch{}}}}}function Vp(e){Zn===null&&Kn===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),Kn!==null&&Kn.f&Do&&Zn===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),vd&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Xs(e,t,r){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],a=!!(64&e),s=Zn,i={ctx:$n,deps:null,nodes_start:null,nodes_end:null,f:e|Ks,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r)try{vc(i),i.f|=32768}catch(u){throw ca(i),u}else t!==null&&fc(i);if(!(r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&!(1048704&i.f))&&!a&&o&&(s!==null&&function(u,d){var h=d.last;h===null?d.last=d.first=u:(h.next=u,u.prev=h,d.last=u)}(i,s),Kn!==null&&2&Kn.f)){var l,c=Kn;((l=c.effects)!==null&&l!==void 0?l:c.effects=[]).push(i)}return i}function Wp(e){var t=Xs(8,null,!1);return Po(t,Yr),t.teardown=e,t}function xu(e){if(Vp(),!(Zn!==null&&Zn.f&Ji&&$n!==null&&!$n.m))return Pr(e);var t,r=$n;((t=r.e)!==null&&t!==void 0?t:r.e=[]).push({fn:e,effect:Zn,reaction:Kn})}function Pr(e){return Xs(4,e,!1)}function U(e,t){var r=$n,o={effect:null,ran:!1};r.l.r1.push(o),o.effect=Gs(()=>{e(),o.ran||(o.ran=!0,f(r.l.r2,!0),Lo(t))})}function ln(){var e=$n;Gs(()=>{if(n(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&Yr&&Po(r,Ys),Qs(r)&&vc(r),t.ran=!1}e.l.r2.v=!1}})}function Gs(e){return Xs(8,e,!0)}function we(e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ai,r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).map(t);return Zs(()=>e(...r.map(n)))}function Zs(e){return Xs(24|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Da(e){return Xs(40,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function Hp(e){var t=e.teardown;if(t!==null){var r=vd,o=Kn;bv(!0),Ta(null);try{t.call(null)}finally{bv(r),Ta(o)}}}function Jp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;for(e.first=e.last=null;r!==null;){var o=r.next;ca(r,t),r=o}}function ca(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;if((t||524288&e.f)&&e.nodes_start!==null){for(var o=e.nodes_start,a=e.nodes_end;o!==null;){var s=o===a?null:uc(o);o.remove(),o=s}r=!0}Jp(e,t&&!r),Tl(e,0),Po(e,id);var i=e.transitions;if(i!==null)for(var l of i)l.stop();Hp(e);var c=e.parent;c!==null&&c.first!==null&&Kp(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Kp(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function Ds(e,t){var r=[];fd(e,r,!0),Yp(r,()=>{ca(e),t&&t()})}function Yp(e,t){var r=e.length;if(r>0){var o=()=>--r||t();for(var a of e)a.out(o)}else t()}function fd(e,t,r){if(!(e.f&$a)){if(e.f^=$a,e.transitions!==null)for(var o of e.transitions)(o.is_global||r)&&t.push(o);for(var a=e.first;a!==null;){var s=a.next;fd(a,t,!!(a.f&ic||a.f&Ji)&&r),a=s}}}function Nl(e){Qp(e,!0)}function Qp(e,t){if(e.f&$a){e.f^=$a,e.f&Yr||(e.f^=Yr),Qs(e)&&(Po(e,Ks),fc(e));for(var r=e.first;r!==null;){var o=r.next;Qp(r,!!(r.f&ic||r.f&Ji)&&t),r=o}if(e.transitions!==null)for(var a of e.transitions)(a.is_global||t)&&a.in()}}function Yi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var $n=null;function jv(e){$n=e}function Ba(e){return Xp().get(e)}function lt(e){$n={p:$n,c:null,e:null,m:!1,s:e,x:null,l:null},Js&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])&&($n.l={s:null,u:null,r1:[],r2:Gr(!1)})}function ct(e){var t=$n;if(t!==null){e!==void 0&&(t.x=e);var r=t.e;if(r!==null){var o=Zn,a=Kn;t.e=null;try{for(var s=0;s<r.length;s++){var i=r[s];Na(i.effect),Ta(i.reaction),Pr(i.fn)}}finally{Na(o),Ta(a)}}$n=t.p,t.m=!0}return e||{}}function ei(){return!Js||$n!==null&&$n.l===null}function Xp(e){var t,r;return $n===null&&Yi(),(r=(t=$n).c)!==null&&r!==void 0?r:t.c=new Map(function(o){for(var a=o.p;a!==null;){var s=a.c;if(s!==null)return s;a=a.p}return null}($n)||void 0)}var Ej=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],$j={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},Mj=["touchstart","touchmove"];function Aj(e){return Mj.includes(e)}var xv=!1;function Gp(e){var t=Kn,r=Zn;Ta(null),Na(null);try{return e()}finally{Ta(t),Na(r)}}function Pj(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>Gp(r));var a=e.__on_r;e.__on_r=a?()=>{a(),o(!0)}:()=>o(!0),xv||(xv=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{if(!s.defaultPrevented)for(var i of s.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}var Zp=new Set,yu=new Set;function eh(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function a(s){if(o.capture||ji.call(t,s),!s.cancelBubble)return Gp(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?lc(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function se(e,t,r,o,a){var s={capture:o,passive:a},i=eh(e,t,r,s);t!==document.body&&t!==window&&t!==document||Wp(()=>{t.removeEventListener(e,i,s)})}function ji(e){var t,r=this,o=r.ownerDocument,a=e.type,s=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=s[0]||e.target,l=0,c=e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(r===document||r===window))return void(e.__root=r);var d=s.indexOf(r);if(d===-1)return;u<=d&&(l=u)}if((i=s[l]||e.target)!==r){bj(e,"currentTarget",{configurable:!0,get:()=>i||o});var h=Kn,p=Zn;Ta(null),Na(null);try{for(var m,g=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var j=i["__"+a];if(j!==void 0&&(!i.disabled||e.target===i))if(Ki(j)){var[x,...S]=j;x.apply(i,[e,...S])}else j.call(i,e)}catch(y){m?g.push(y):m=y}if(e.cancelBubble||b===r||b===null)break;i=b}if(m){var O=function(y){queueMicrotask(()=>{throw y})};for(var C of g)O(C);throw m}}finally{e.__root=r,delete e.currentTarget,Ta(h),Na(p)}}}function pd(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ga(e,t){var r=Zn;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function L(e,t){var r,o=!!(1&t),a=!!(2&t),s=!e.startsWith("<!>");return()=>{r===void 0&&(r=pd(s?e:"<!>"+e),o||(r=ao(r)));var i=a||_p?document.importNode(r,!0):r.cloneNode(!0);return o?Ga(ao(i),i.lastChild):Ga(i,i),i}}function Fa(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",a=!e.startsWith("<!>"),s=!!(1&t),i="<".concat(o,">").concat(a?e:"<!>"+e,"</").concat(o,">");return()=>{if(!r){var l=ao(pd(i));if(s)for(r=document.createDocumentFragment();ao(l);)r.appendChild(ao(l));else r=ao(l)}var c=r.cloneNode(!0);return s?Ga(ao(c),c.lastChild):Ga(c,c),c}}function Lr(){var e=cc((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Ga(e,e),e}function Lt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=cc();return e.append(t,r),Ga(t,r),e}function P(e,t){e!==null&&e.before(t)}function gt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function Rj(e,t){return function(r,o){var{target:a,anchor:s,props:i={},events:l,context:c}=o;(function(){if(aa===void 0){aa=window,_p=/Firefox/.test(navigator.userAgent);var m=Element.prototype,g=Node.prototype;qp=oa(g,"firstChild").get,Tp=oa(g,"nextSibling").get,m.__click=void 0,m.__className=void 0,m.__attributes=null,m.__styles=null,m.__e=void 0,Text.prototype.__t=void 0}})();var u=new Set,d=m=>{for(var g=0;g<m.length;g++){var b=m[g];if(!u.has(b)){u.add(b);var j=Aj(b);a.addEventListener(b,ji,{passive:j});var x=ps.get(b);x===void 0?(document.addEventListener(b,ji,{passive:j}),ps.set(b,1)):ps.set(b,x+1)}}};d(mu(Zp)),yu.add(d);var h=void 0,p=function(m){var g=Xs(64,m,!0);return function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(j=>{b.outro?Ds(g,()=>{ca(g),j(void 0)}):(ca(g),j(void 0))})}}(()=>{var m=s??a.appendChild(cc());return Da(()=>{c&&(lt({}),$n.c=c),l&&(i.$$events=l),h=r(m,i)||{},c&&ct()}),()=>{for(var g of u){a.removeEventListener(g,ji);var b=ps.get(g);--b==0?(document.removeEventListener(g,ji),ps.delete(g)):ps.set(g,b)}var j;yu.delete(d),m!==s&&((j=m.parentNode)===null||j===void 0||j.removeChild(m))}});return wu.set(h,p),h}(e,t)}var ps=new Map,wu=new WeakMap;function Y(e,t){var r=e,o=null,a=null,s=Hr,i=!1,l=function(u){i=!0,c(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],u)},c=(u,d)=>{s!==(s=u)&&(s?(o?Nl(o):d&&(o=Da(()=>d(r))),a&&Ds(a,()=>{a=null})):(a?Nl(a):d&&(a=Da(()=>d(r))),o&&Ds(o,()=>{o=null})))};Zs(()=>{i=!1,t(l),i||c(null,null)},arguments.length>2&&arguments[2]!==void 0&&arguments[2]?ic:0)}function th(e,t,r){var o,a=e,s=Hr,i=ei()?wj:cd;Zs(()=>{i(s,s=t())&&(o&&Ds(o),o=Da(()=>r(a)))})}function jr(e,t){return t}function vr(e,t,r,o,a){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l={flags:t,items:new Map,first:null};!(4&t)||(i=e.appendChild(cc()));var c=null,u=!1,d=fe(()=>{var h=r();return Ki(h)?h:h==null?[]:mu(h)});Zs(()=>{var h=n(d),p=h.length;u&&p===0||(u=p===0,function(m,g,b,j,x,S,O){var C,y,$,I,T,z,ne=!!(8&x),Q=!!(3&x),B=m.length,G=g.items,pe=g.first,Z=pe,de=null,Me=[],ue=[];if(ne)for(z=0;z<B;z+=1){var ve;I=S($=m[z],z),(T=G.get(I))!==void 0&&((ve=T.a)===null||ve===void 0||ve.measure(),(y??(y=new Set)).add(T))}for(z=0;z<B;z+=1)if(I=S($=m[z],z),(T=G.get(I))!==void 0){var me;if(Q&&Ij(T,$,z,x),T.e.f&$a&&(Nl(T.e),ne&&((me=T.a)===null||me===void 0||me.unfix(),(y??(y=new Set)).delete(T))),T!==Z){if(C!==void 0&&C.has(T)){if(Me.length<ue.length){var Ce,Ge=ue[0];de=Ge.prev;var re=Me[0],ie=Me[Me.length-1];for(Ce=0;Ce<Me.length;Ce+=1)yv(Me[Ce],Ge,b);for(Ce=0;Ce<ue.length;Ce+=1)C.delete(ue[Ce]);ma(g,re.prev,ie.next),ma(g,de,re),ma(g,ie,Ge),Z=Ge,de=ie,z-=1,Me=[],ue=[]}else C.delete(T),yv(T,Z,b),ma(g,T.prev,T.next),ma(g,T,de===null?g.first:de.next),ma(g,de,T),de=T;continue}for(Me=[],ue=[];Z!==null&&Z.k!==I;)Z.e.f&$a||(C??(C=new Set)).add(Z),ue.push(Z),Z=Z.next;if(Z===null)continue;T=Z}Me.push(T),de=T,Z=T.next}else de=_j(Z?Z.e.nodes_start:b,g,de,de===null?g.first:de.next,$,I,z,j,x,O),G.set(I,de),Me=[],ue=[],Z=de.next;if(Z!==null||C!==void 0){for(var Ee=C===void 0?[]:mu(C);Z!==null;)Z.e.f&$a||Ee.push(Z),Z=Z.next;var At=Ee.length;if(At>0){var te=4&x&&B===0?b:null;if(ne){for(z=0;z<At;z+=1){var q;(q=Ee[z].a)===null||q===void 0||q.measure()}for(z=0;z<At;z+=1){var ae;(ae=Ee[z].a)===null||ae===void 0||ae.fix()}}(function(_,je,Ke,W){for(var V=[],R=je.length,Ze=0;Ze<R;Ze++)fd(je[Ze].e,V,!0);var wt=R>0&&V.length===0&&Ke!==null;if(wt){var et=Ke.parentNode;et.textContent="",et.append(Ke),W.clear(),ma(_,je[0].prev,je[R-1].next)}Yp(V,()=>{for(var Xe=0;Xe<R;Xe++){var De=je[Xe];wt||(W.delete(De.k),ma(_,De.prev,De.next)),ca(De.e,!wt)}})})(g,Ee,te,G)}}ne&&lc(()=>{if(y!==void 0)for(T of y){var _;(_=T.a)===null||_===void 0||_.apply()}}),Zn.first=g.first&&g.first.e,Zn.last=de&&de.e}(h,l,i,a,t,o,r),s!==null&&(p===0?c?Nl(c):c=Da(()=>s(i)):c!==null&&Ds(c,()=>{c=null})),n(d))})}function Ij(e,t,r,o){1&o&&bu(e.v,t),2&o?bu(e.i,r):e.i=r}function _j(e,t,r,o,a,s,i,l,c,u){var d=1&c?16&c?Gr(a):dd(a):a,h=2&c?Gr(i):i,p={i:h,v:d,k:s,a:null,e:null,prev:r,next:o};try{return p.e=Da(()=>l(e,d,h,u),!1),p.e.prev=r&&r.e,p.e.next=o&&o.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),o!==null&&(o.prev=p,o.e.prev=p.e),p}finally{}}function yv(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==o;){var i=uc(s);a.before(s),s=i}}function ma(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function nh(e,t,r,o,a){var s,i=e,l="";Zs(()=>{var c;l!==(l=(c=t())!==null&&c!==void 0?c:"")&&(s!==void 0&&(ca(s),s=void 0),l!==""&&(s=Da(()=>{var u=l+"";r&&(u="<svg>".concat(u,"</svg>"));var d=pd(u);if((r||o)&&(d=ao(d)),Ga(ao(d),d.lastChild),r||o)for(;ao(d);)i.before(ao(d));else i.before(d)})))})}function dr(e,t,r,o,a){var s,i=(s=t.$$slots)===null||s===void 0?void 0:s[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?a!==null&&a(e):i(e,l?()=>o:o)}function rh(e,t,r){var o,a,s=e;Zs(()=>{o!==(o=t())&&(a&&(Ds(a),a=null),o&&(a=Da(()=>r(s,o))))},ic)}function Fr(e,t,r){Pr(()=>{var o=Lo(()=>t(e,r==null?void 0:r())||{});if(r&&o!=null&&o.update){var a=!1,s={};Gs(()=>{var i=r();E(i),a&&cd(s,i)&&(s=i,o.update(i))}),a=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function oh(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=oh(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Ua(e){return typeof e=="object"?function(){for(var t,r,o=0,a="",s=arguments.length;o<s;o++)(t=arguments[o])&&(r=oh(t))&&(a&&(a+=" "),a+=r);return a}(e):e??""}var wv=[...` 	
\r\f \v\uFEFF`];function St(e,t,r,o,a,s){if(e.__className!==r){var i=function(u,d,h){var p=u==null?"":""+u;if(d&&(p=p?p+" "+d:d),h){for(var m in h)if(h[m])p=p?p+" "+m:m;else if(p.length)for(var g=m.length,b=0;(b=p.indexOf(m,b))>=0;){var j=b+g;b!==0&&!wv.includes(p[b-1])||j!==p.length&&!wv.includes(p[j])?b=j:p=(b===0?"":p.substring(0,b))+p.substring(j+1)}}return p===""?null:p}(r,o,s);i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i),e.__className=r}else if(s)for(var l in s){var c=!!s[l];a!=null&&c===!!a[l]||e.classList.toggle(l,c)}return s}var ys=Symbol("class");function Za(e,t){var r,o=(r=e.__attributes)!==null&&r!==void 0?r:e.__attributes={};o.value!==(o.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function vn(e,t,r,o){var a,s=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={};s[t]!==(s[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[gj]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ah(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function yl(e,t,r,o){var a,s=arguments.length>4&&arguments[4]!==void 0&&arguments[4],i=arguments.length>5&&arguments[5]!==void 0&&arguments[5],l=t||{},c=e.tagName==="OPTION";for(var u in t)u in r||(r[u]=null);r.class?r.class=Ua(r.class):(o||r[ys])&&(r.class=null);var d,h,p,m,g,b,j=ah(e),x=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={},S=function(C){var y=r[C];if(c&&C==="value"&&y==null)return e.value=e.__value="",l[C]=y,0;if(C==="class")return d=e.namespaceURI==="http://www.w3.org/1999/xhtml",St(e,d,y,o,t==null?void 0:t[ys],r[ys]),l[C]=y,l[ys]=r[ys],0;if(y===(h=l[C])||(l[C]=y,(p=C[0]+C[1])==="$$"))return 0;if(p==="on"){var $={},I="$$"+C,T=C.slice(2);if(m=function(G){return Ej.includes(G)}(T),function(G){return G.endsWith("capture")&&G!=="gotpointercapture"&&G!=="lostpointercapture"}(T)&&(T=T.slice(0,-7),$.capture=!0),!m&&h){if(y!=null)return 0;e.removeEventListener(T,l[I],$),l[I]=null}if(y!=null)if(m)e["__".concat(T)]=y,function(G){for(var pe=0;pe<G.length;pe++)Zp.add(G[pe]);for(var Z of yu)Z(G)}([T]);else{let G=function(pe){l[C].call(this,pe)};l[I]=eh(T,e,G,$)}else m&&(e["__".concat(T)]=void 0)}else if(C==="style"&&y!=null)e.style.cssText=y+"";else if(C==="autofocus")(function(G,pe){if(pe){var Z=document.body;G.autofocus=!0,lc(()=>{document.activeElement===Z&&G.focus()})}})(e,!!y);else if(i||C!=="__value"&&(C!=="value"||y==null))if(C==="selected"&&c)(function(G,pe){pe?G.hasAttribute("selected")||G.setAttribute("selected",""):G.removeAttribute("selected")})(e,y);else if(g=C,s||(g=function(G){var pe;return G=G.toLowerCase(),(pe=$j[G])!==null&&pe!==void 0?pe:G}(g)),b=g==="defaultValue"||g==="defaultChecked",y!=null||i||b)b||j.includes(g)&&(i||typeof y!="string")?e[g]=y:typeof y!="function"&&vn(e,g,y);else if(x[C]=null,g==="value"||g==="checked"){var z=e,ne=t===void 0;if(g==="value"){var Q=z.defaultValue;z.removeAttribute(g),z.defaultValue=Q,z.value=z.__value=ne?Q:null}else{var B=z.defaultChecked;z.removeAttribute(g),z.defaultChecked=B,z.checked=!!ne&&B}}else e.removeAttribute(C);else e.value=e.__value=y;C==="style"&&"__styles"in e&&(e.__styles={})};for(var O in r)S(O);return l}var kv=new Map;function ah(e){var t,r=kv.get(e.nodeName);if(r)return r;kv.set(e.nodeName,r=[]);for(var o=e,a=Element.prototype;a!==o;){for(var s in t=$p(o))t[s].set&&r.push(s);o=ld(o)}return r}function Ps(e,t,r,o){var a,s=(a=e.__styles)!==null&&a!==void 0?a:e.__styles={};s[t]!==r&&(s[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}function Dl(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=ei();Pj(e,"input",a=>{var s=a?e.defaultValue:e.value;if(s=Bc(e)?Fc(s):s,r(s),o&&s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Lo(t)==null&&e.value&&r(Bc(e)?Fc(e.value):e.value),Gs(()=>{var a=t();Bc(e)&&a===Fc(e.value)||(e.type!=="date"||a||e.value)&&a!==e.value&&(e.value=a??"")})}function Bc(e){var t=e.type;return t==="number"||t==="range"}function Fc(e){return e===""?null:+e}function xt(e,t,r){var o=oa(e,t);o&&o.set&&(e[t]=r,Wp(()=>{e[t]=null}))}function Cv(e,t){return e===t||(e==null?void 0:e[Ma])===t}function Yn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Pr(()=>{var o,a;return Gs(()=>{o=a,a=[],Lo(()=>{e!==r(...a)&&(t(e,...a),o&&Cv(r(...o),e)&&t(null,...o))})}),()=>{lc(()=>{a&&Cv(r(...a),e)&&t(null,...a)})}}),e}function jo(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e==null?void 0:e.apply(this,r)}}function ja(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e==null?void 0:e.apply(this,r)}}function pt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=$n,r=t.l.u;if(r){var o,a=()=>E(t.s);if(e){var s=0,i={},l=Ai(()=>{var c=!1,u=t.s;for(var d in u)u[d]!==i[d]&&(i[d]=u[d],c=!0);return c&&s++,s});a=()=>n(l)}r.b.length&&(o=()=>{Sv(t,a),Rl(r.b)},Vp(),Gs(o)),xu(()=>{var c=Lo(()=>r.m.map(yj));return()=>{for(var u of c)typeof u=="function"&&u()}}),r.a.length&&xu(()=>{Sv(t,a),Rl(r.a)})}}function Sv(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function pc(e){var t=Gr(0);return function(){return arguments.length===1?(f(t,n(t)+1),arguments[0]):(n(t),e())}}function xi(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],a=Ki(o)?o.slice():o==null?[]:[o];for(var s of a)s.call(this,t)}function Tr(e){$n===null&&Yi(),Js&&$n.l!==null?sh($n).m.push(e):xu(()=>{var t=Lo(e);if(typeof t=="function")return t})}function vo(e){$n===null&&Yi(),Tr(()=>()=>Lo(e))}function qj(){var e=$n;return e===null&&Yi(),(t,r,o)=>{var a,s=(a=e.s.$$events)===null||a===void 0?void 0:a[t];if(s){var i=Ki(s)?s.slice():[s],l=function(u,d){var{bubbles:h=!1,cancelable:p=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:h,cancelable:p})}(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function Tj(e){$n===null&&Yi(),$n.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),sh($n).b.push(e)}function sh(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}var il=!1,Nj={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,r)=>(t in e.special||(e.special[t]=v({get[t](){return e.props[t]}},t,4)),e.special[t](r),gv(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),gv(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function ll(e,t){return new Proxy({props:e,exclude:t,special:{},version:Gr(0)},Nj)}var Dj={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var a=e.props[o];fi(a)&&(a=a());var s=oa(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var a=oa(o,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Ma||t===Ep)return!1;for(var r of e.props)if(fi(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)for(var o in fi(r)&&(r=r()),r)t.includes(o)||t.push(o);return t}};function Aa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},Dj)}function v(e,t,r,o){var a,s,i,l=!!(1&r),c=!Js||!!(2&r),u=!!(8&r),d=!!(16&r),h=!1;u?[i,h]=function(T){var z=il;try{return il=!1,[T(),il]}finally{il=z}}(()=>e[t]):i=e[t];var p,m=Ma in e||Ep in e,g=u&&((a=(s=oa(e,t))===null||s===void 0?void 0:s.set)!==null&&a!==void 0?a:m&&t in e&&(T=>e[t]=T))||void 0,b=o,j=!0,x=!1,S=()=>(x=!0,j&&(j=!1,b=d?Lo(o):o),b);if(i===void 0&&o!==void 0&&(g&&c&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i=S(),g&&g(i)),c)p=()=>{var T=e[t];return T===void 0?S():(j=!0,x=!1,T)};else{var O=(l?Ai:fe)(()=>e[t]);O.f|=pj,p=()=>{var T=n(O);return T!==void 0&&(b=void 0),T===void 0?b:T}}if(!(4&r))return p;if(g){var C=e.$$legacy;return function(T,z){return arguments.length>0?(c&&z&&!C&&!h||g(z?p():T),T):p()}}var y=!1,$=dd(i),I=Ai(()=>{var T=p(),z=n($);return y?(y=!1,z):$.v=T});return l||(I.equals=ud),function(T,z){if(arguments.length>0){var ne=z?n(I):c&&u?xs(T):T;return I.equals(ne)||(y=!0,f($,ne),x&&b!==void 0&&(b=ne),Lo(()=>n(I))),T}return n(I)}}function Or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var a=function(s){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[s]}catch{}}("debug");return a!=null&&a.endsWith("*")?o.startsWith(a.slice(0,-1)):o===a}(e);if(!t)return Uj;var r=function(o){for(var a=0,s=0;s<o.length;s++)a=(a<<5)-a+o.charCodeAt(s),a|=0;return Ov[Math.abs(a)%Ov.length]}(e);return function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];console.log("%c".concat(e),"color:".concat(r),...a)}}function Uj(){}var Ov=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],Bj=0;function Ss(){return++Bj}function Rr(e){return parseInt(e,10)}function hd(e){return Fj.test(e)}var Fj=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function yn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function br(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function Lj(e){return e===!0||e===!1}function ku(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return ku(Number(e));try{var t=e&&e.valueOf();if(t!==e)return ku(t)}catch{return!1}return!1}function ih(e){(cl=cl||window.document.createElement("div")).style.color="",cl.style.color=e;var t=cl.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var cl=void 0;function Vj(e){return typeof e=="string"&&e.length<99&&!!ih(e)}function gd(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(yn(e))return"object";var r=t.stringify(e);return r&&hd(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var Wj=/^https?:\/\/\S+$/;function hc(e){return typeof e=="string"&&Wj.test(e)}function ti(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(hd(r)?t.parse(r):e)}var Hj=[];function zv(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!yn(i)||t&&l.length>0)&&(r[zt(l)]=!0),yn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var a=Math.min(e.length,1e4),s=0;s<a;s++)o(e[s],Hj);return Object.keys(r).sort().map(qo)}function lh(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function ch(e,t){return e.length>t?e.slice(0,t):e}function Ev(e){return ge({},e)}function $v(e){return Object.values(e)}function Mv(e,t,r,o){var a=e.slice(0),s=a.splice(t,r);return a.splice.apply(a,[t+o,0,...s]),a}function Jj(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function Qi(e,t){try{return t.parse(e)}catch{return t.parse(To(e))}}function uh(e,t){try{return Qi(e,t)}catch{return}}function gc(e,t){e=e.replace(vh,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function dh(e){e=e.replace(vh,"");try{return To(e)}catch{}try{var t=To("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=To("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var vh=/,\s*$/;function Us(e,t){var r=Pv.exec(t);if(r){var o=Rr(r[2]),a=function(m,g){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,x=0,S=b;S<j;S++)m.charAt(S)===g&&x++;return x}(e,`
`,0,o),s=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:a,column:s,message:t.replace(Pv,()=>"line ".concat(a+1," column ").concat(s+1))}}var i=Xj.exec(t),l=i?Rr(i[1]):void 0,c=l!==void 0?l-1:void 0,u=Gj.exec(t),d=u?Rr(u[1]):void 0,h=d!==void 0?d-1:void 0,p=c!==void 0&&h!==void 0?function(m,g,b){for(var j=m.indexOf(`
`),x=1;x<g&&j!==-1;)j=m.indexOf(`
`,j+1),x++;return j!==-1?j+b+1:void 0}(e,c,h):void 0;return{position:p,line:c,column:h,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function Lc(e){return yn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Pi(e){return yn(e)&&typeof e.text=="string"}function Ri(e){return yn(e)&&e.json!==void 0}function Kj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Pi(e)?e:{text:r.stringify(e.json,null,t)}}function Av(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Ri(e)?e:{json:t.parse(e.text)}}function Su(e,t,r){return Kj(e,t,r).text}function Yj(e,t){return Qj(e,t)>t}function Qj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Pi(e))return e.text.length;var r=e.json,o=0;return function a(s){if(Array.isArray(s)){if((o+=s.length-1+2)>t)return;for(var i=0;i<s.length;i++)if(a(s[i]),o>t)return}else if(yn(s)){var l=Object.keys(s);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=s[u];o+=u.length+2,a(d)}}else o+=typeof s=="string"?s.length+2:String(s).length}(r),o}var Pv=/(position|char) (\d+)/,Xj=/line (\d+)/,Gj=/column (\d+)/;function Zj(e,t){return e.parse===t.parse&&e.stringify===t.stringify}var kr,In,ko,So,Oo,mo,Pa,e0=/[,:]\S/;function md(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?t0:n0:r?r0:o0}(function(e){e.text="text",e.tree="tree",e.table="table"})(kr||(kr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(In||(In={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(ko||(ko={})),function(e){e.info="info",e.warning="warning",e.error="error"}(So||(So={})),function(e){e.key="key",e.value="value"}(Oo||(Oo={})),function(e){e.asc="asc",e.desc="desc"}(mo||(mo={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(Pa||(Pa={}));var t0={escapeValue:e=>fh(gh(String(e))),unescapeValue:e=>mh(ph(e))},n0={escapeValue:e=>gh(String(e)),unescapeValue:e=>mh(e)},r0={escapeValue:e=>fh(String(e)),unescapeValue:e=>ph(e)},o0={escapeValue:e=>String(e),unescapeValue:e=>e};function fh(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function ph(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return hh[r]||r}catch{return t}})}var hh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},a0={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function gh(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>hh[t]||t)}function mh(e){return e.replace(/\\["bfnrt\\]/g,t=>a0[t]||t)}function mc(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function bh(e,t){return ni(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function Oa(e,t,r){return ni(e,o=>function(a,s,i){return typeof a.getAttribute=="function"&&a.getAttribute(s)===i}(o,t,r))}function ni(e,t){return!!bd(e,t)}function bd(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function Xi(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function jd(e){var t=Xi(e),r=t==null?void 0:t.document.activeElement;return!!r&&ni(r,o=>o===e)}function jh(e,t){return bd(e,r=>r.nodeName===t)}function Vc(e){return Oa(e,"data-type","selectable-key")?In.key:Oa(e,"data-type","selectable-value")?In.value:Oa(e,"data-type","insert-selection-area-inside")?In.inside:Oa(e,"data-type","insert-selection-area-after")?In.after:In.multi}function Ou(e){return encodeURIComponent(zt(e))}function xh(e){var t,r=bd(e,a=>!(a==null||!a.hasAttribute)&&a.hasAttribute("data-path")),o=(t=r==null?void 0:r.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?qo(decodeURIComponent(o)):void 0}function s0(e){var{allElements:t,currentElement:r,direction:o,hasPrio:a=()=>!0,margin:s=10}=e,i=Cb(t.filter(function(x){var S=x.getBoundingClientRect();return S.width>0&&S.height>0}),c),l=c(r);function c(x){var S=x.getBoundingClientRect();return{x:S.left+S.width/2,y:S.top+S.height/2,rect:S,element:x}}function u(x,S){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,C=x.x-S.x,y=(x.y-S.y)*O;return Math.sqrt(C*C+y*y)}var d=x=>u(x,l);if(o==="Left"||o==="Right"){var h=o==="Left"?i.filter(x=>{return S=l,x.rect.left+s<S.rect.left;var S}):i.filter(x=>{return S=l,x.rect.right>S.rect.right+s;var S}),p=h.filter(x=>{return S=x,O=l,Math.abs(S.y-O.y)<s;var S,O}),m=ol(p,d)||ol(h,x=>u(x,l,10));return m==null?void 0:m.element}if(o==="Up"||o==="Down"){var g=o==="Up"?i.filter(x=>{return S=l,x.y+s<S.y;var S}):i.filter(x=>{return S=l,x.y>S.y+s;var S}),b=g.filter(x=>a(x.element)),j=ol(b,d)||ol(g,d);return j==null?void 0:j.element}}function xd(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];yd(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:xd)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in i0||r.push(o),r.join(t)}function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xd;return e.ctrlKey||e.metaKey&&t()}var i0={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function bt(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}bt(`.jse-absolute-popup.svelte-1r8q3m8 {
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
}`);var l0=L('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"> <!></div>'),c0=L('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');function u0(e,t){lt(t,!1);var r=v(t,"popup",8),o=v(t,"closeAbsolutePopup",8),a=M(),s=M();function i(h){r().options&&r().options.closeOnOuterClick&&!ni(h.target,p=>p===n(a))&&o()(r().id)}function l(h){ua(h)==="Escape"&&(h.preventDefault(),h.stopPropagation(),o()(r().id))}Tr(function(){n(s)&&n(s).focus()}),pt();var c=c0();se("mousedown",aa,function(h){i(h)},!0),se("keydown",aa,l,!0),se("wheel",aa,function(h){i(h)},!0);var u=A(c),d=h=>{var p=l0(),m=A(p);Yn(m,g=>f(s,g),()=>n(s)),rh(N(m,2),()=>r().component,(g,b)=>{b(g,Aa(()=>r().props))}),we(g=>vn(p,"style",g),[()=>function(g,b){var j=g.getBoundingClientRect(),{left:x,top:S,positionAbove:O,positionLeft:C}=function(){if(b.anchor){var{anchor:y,width:$=0,height:I=0,offsetTop:T=0,offsetLeft:z=0,position:ne}=b,{left:Q,top:B,bottom:G,right:pe}=y.getBoundingClientRect(),Z=ne==="top"||B+I>window.innerHeight&&B>I,de=ne==="left"||Q+$>window.innerWidth&&Q>$;return{left:de?pe-z:Q+z,top:Z?B-T:G+T,positionAbove:Z,positionLeft:de}}if(typeof b.left=="number"&&typeof b.top=="number"){var{left:Me,top:ue,width:ve=0,height:me=0}=b;return{left:Me,top:ue,positionAbove:ue+me>window.innerHeight&&ue>me,positionLeft:Me+ve>window.innerWidth&&Me>ve}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(O?"bottom: ".concat(j.top-S,"px;"):"top: ".concat(S-j.top,"px;"))+(C?"right: ".concat(j.left-x,"px;"):"left: ".concat(x-j.left,"px;"))}(n(a),r().options)],fe),P(h,p)};Y(u,h=>{n(a)&&h(d)}),Yn(c,h=>f(a,h),()=>n(a)),se("mousedown",c,function(h){h.stopPropagation()}),se("keydown",c,l),P(e,c),ct()}var d0=L("<!> <!>",1);function zu(e,t){lt(t,!1);var r,o,a=Or("jsoneditor:AbsolutePopup"),s=M([],!0);function i(u){var d=n(s).findIndex(p=>p.id===u);if(d!==-1){var h=n(s)[d];h.options.onClose&&h.options.onClose(),f(s,n(s).filter(p=>p.id!==u))}}r="absolute-popup",o={openAbsolutePopup:function(u,d,h){a("open...",d,h);var p={id:Ss(),component:u,props:d||{},options:h||{}};return f(s,[...n(s),p]),p.id},closeAbsolutePopup:i},Xp().set(r,o),U(()=>n(s),()=>{a("popups",n(s))}),ln(),pt(!0);var l=d0(),c=Ne(l);vr(c,1,()=>n(s),jr,(u,d)=>{u0(u,{get popup(){return n(d)},closeAbsolutePopup:i})}),dr(N(c,2),t,"default",{},null),P(e,l),ct()}function Gi(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),a=e,s=1;r.has(a);){var i="copy"+(s>1?" "+s:"");a="".concat(o," (").concat(i,")"),s++}return a}function Ii(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function v0(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var f0={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:a}=t,s=[];r&&r.path&&r.relation&&r.value&&s.push(["filter",[(i=r.relation,Op("1 ".concat(i," 1"))[0]),ul(r.path),v0(r.value)]]);var i;return o&&o.path&&o.direction&&s.push(["sort",ul(o.path),o.direction==="desc"?"desc":"asc"]),a&&a.paths&&(a.paths.length>1?s.push(["pick",...a.paths.map(ul)]):s.push(["map",ul(a.paths[0])])),Zb(["pipe",...s])},executeQuery:function(e,t){return t.trim()!==""?ej(e,t):e}};function ul(e){return["get",...e]}var p0=Fa("<g><!></g>");function h0(e,t){lt(t,!1);var r=870711,o=M(""),a=v(t,"data",8);function s(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,h)=>{var p="fa-".concat((r+=1).toString(16));return u[h]=p,' id="'.concat(p,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,h,p,m)=>{var g=h||m;return g&&u[g]?"#".concat(u[g]):d}),c}U(()=>E(a()),()=>{f(o,s(a()))}),ln();var i=p0();nh(A(i),()=>n(o),!0,!1),P(e,i),ct()}bt(`
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
`);var g0=Fa("<svg><!></svg>"),m0=Fa("<path></path>"),b0=Fa("<polygon></polygon>"),j0=Fa("<!><!><!>",1);function en(e,t){var r=ll(t,["children","$$slots","$$events","$$legacy"]),o=ll(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);lt(t,!1);var a=v(t,"class",8,""),s=v(t,"data",8),i=M(),l=v(t,"scale",8,1),c=v(t,"spin",8,!1),u=v(t,"inverse",8,!1),d=v(t,"pulse",8,!1),h=v(t,"flip",8,void 0),p=v(t,"label",8,""),m=v(t,"style",8,""),g=M(10),b=M(10),j=M(),x=M();function S(){var C=1;return l()!==void 0&&(C=Number(l())),isNaN(C)||C<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*C}function O(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}U(()=>(E(s()),E(m()),E(l())),()=>{f(i,function(C){var y;if(C){if(!("definition"in C)){if("iconName"in C&&"icon"in C){C.iconName;var[$,I,,,T]=C.icon;y={width:$,height:I,paths:(Array.isArray(T)?T:[T]).map(z=>({d:z}))}}else y=C[Object.keys(C)[0]];return y}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(s())),m(),l(),f(g,n(i)?n(i).width/O()*S():0),f(b,n(i)?n(i).height/O()*S():0),f(j,function(){var C="";m()!==null&&(C+=m());var y=S();return y===1?C.length===0?"":C:(C===""||C.endsWith(";")||(C+="; "),"".concat(C,"font-size: ").concat(y,"em"))}()),f(x,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(g)," ").concat(n(b)))}),ln(),pt(),function(C,y){var $,I=ll(y,["children","$$slots","$$events","$$legacy"]),T=ll(I,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),z=v(y,"class",8,""),ne=v(y,"width",8),Q=v(y,"height",8),B=v(y,"box",8,"0 0 0 0"),G=v(y,"spin",8,!1),pe=v(y,"inverse",8,!1),Z=v(y,"pulse",8,!1),de=v(y,"flip",8,"none"),Me=v(y,"style",8,""),ue=v(y,"label",8,""),ve=g0();dr(A(ve),y,"default",{},null),we(()=>{var me;return $=yl(ve,$,ge(ge({version:"1.1",class:"fa-icon ".concat((me=z())!==null&&me!==void 0?me:""),width:ne(),height:Q(),"aria-label":ue(),role:ue()?"img":"presentation",viewBox:B(),style:Me()},T),{},{[ys]:{"fa-spin":G(),"fa-pulse":Z(),"fa-inverse":pe(),"fa-flip-horizontal":de()==="horizontal","fa-flip-vertical":de()==="vertical"}}),"svelte-1mc5hvj",!0)}),P(C,ve)}(e,Aa({get label(){return p()},get width(){return n(g)},get height(){return n(b)},get box(){return n(x)},get style(){return n(j)},get spin(){return c()},get flip(){return h()},get inverse(){return u()},get pulse(){return d()},get class(){return a()}},()=>o,{children:(C,y)=>{var $=Lt();dr(Ne($),t,"default",{},I=>{var T=j0(),z=Ne(T);vr(z,1,()=>{var G;return((G=n(i))===null||G===void 0?void 0:G.paths)||[]},jr,(G,pe)=>{var Z,de=m0();we(()=>Z=yl(de,Z,ge({},n(pe)),void 0,!0)),P(G,de)});var ne=N(z);vr(ne,1,()=>{var G;return((G=n(i))===null||G===void 0?void 0:G.polygons)||[]},jr,(G,pe)=>{var Z,de=b0();we(()=>Z=yl(de,Z,ge({},n(pe)),void 0,!0)),P(G,de)});var Q=N(ne),B=G=>{h0(G,{get data(){return n(i)},set data(pe){f(i,pe)},$$legacy:!0})};Y(Q,G=>{var pe;(pe=n(i))!==null&&pe!==void 0&&pe.raw&&G(B)}),P(I,T)}),P(C,$)},$$slots:{default:!0}})),ct()}bt(`/* over all fonts, sizes, and colors */
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

.jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly) {
  cursor: pointer;
}`);var x0=L('<div role="checkbox" tabindex="-1"><!></div>');function y0(e,t){lt(t,!1);var r=v(t,"path",9),o=v(t,"value",9),a=v(t,"readOnly",9),s=v(t,"onPatch",9),i=v(t,"focus",9);pt(!0);var l,c=x0(),u=A(c),d=fe(()=>o()===!0?ip:lp);en(u,{get data(){return n(d)}}),we(()=>{vn(c,"aria-checked",o()===!0),l=St(c,1,"jse-boolean-toggle svelte-1ryp01u",null,l,{"jse-readonly":a()}),vn(c,"title",a()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),se("mousedown",c,function(h){h.stopPropagation(),a()||(s()([{op:"replace",path:zt(r()),value:!o()}]),i()())}),P(e,c),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var w0=L('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');function k0(e,t){lt(t,!1);var r=v(t,"color",8),o=v(t,"onChange",8),a=v(t,"showOnTop",8),s=M(),i=()=>{};Tr(yt(function*(){var c,u=new((c=yield om(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(s),color:r(),popup:a()?"top":"bottom",onDone(d){var h=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(h)}});u.show(),i=()=>{u.destroy()}})),vo(()=>{i()}),pt();var l=w0();Yn(l,c=>f(s,c),()=>n(s)),P(e,l),ct()}bt(`/* over all fonts, sizes, and colors */
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

.jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly) {
  cursor: pointer;
}`);var C0=L('<button type="button"></button>');function S0(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),{openAbsolutePopup:a}=Ba("absolute-popup"),s=v(t,"path",9),i=v(t,"value",9),l=v(t,"readOnly",9),c=v(t,"onPatch",9),u=v(t,"focus",9);function d(g){c()([{op:"replace",path:zt(s()),value:g}]),h()}function h(){u()()}U(()=>E(i()),()=>{f(r,ih(i()))}),U(()=>(E(l()),E(i())),()=>{f(o,l()?"Color ".concat(i()):"Click to open a color picker")}),ln(),pt(!0);var p,m=C0();we(()=>{var g;p=St(m,1,"jse-color-picker-button svelte-xeg9n6",null,p,{"jse-readonly":l()}),vn(m,"style","background: ".concat((g=n(r))!==null&&g!==void 0?g:"")),vn(m,"title",n(o)),vn(m,"aria-label",n(o))}),se("click",m,function(g){var b,j;if(!l()){var x=g.target,S=x.getBoundingClientRect().top,O=((b=(j=Xi(x))===null||j===void 0?void 0:j.innerHeight)!==null&&b!==void 0?b:0)-S<300&&S>300,C={color:i(),onChange:d,showOnTop:O};a(k0,C,{anchor:x,closeOnOuterClick:!0,onClose:h,offsetTop:18,offsetLeft:-8,height:300})}}),P(e,m),ct()}var Wc=1e3,_i=100,Eu=2e4,Rs=[{start:0,end:_i}],O0=1048576,Rv=10485760,Hc="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",wd="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",pi="hover-insert-inside",Jc="hover-insert-after",Iv="hover-collection",Kc="valid",_v="repairable",Zo=336,ea=260,yi=100,qv={[mo.asc]:"ascending",[mo.desc]:"descending"};function yh(e){for(var t=qm(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var a=r.length-1,s=r[a],i=t[o];i.start<=s.end?r[a]={start:Math.min(s.start,i.start),end:Math.max(s.end,i.end)}:r.push(i)}return r}function $u(e){return Ul(e)+_i}function Ul(e){return Math.floor(e/_i)*_i}function wh(e){return!!e&&(e.type==="space"||e.space===!0)}function wl(e){return!!e&&(e.type==="separator"||e.separator===!0)}function z0(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Ci(e){return!!e&&typeof e.onClick=="function"}function Yc(e){return!!e&&e.type==="dropdown-button"&&Ci(e.main)&&Array.isArray(e.items)}function E0(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function $0(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Tv(e){return yn(e)&&yn(e.parseError)}function M0(e){return yn(e)&&Array.isArray(e.validationErrors)}function A0(e){return yn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function P0(e){return yn(e)&&A0(e)&&typeof e.isChildError=="boolean"}function R0(e){return yn(e)&&typeof e.action=="function"&&yn(e.props)}function zo(e){return e!==void 0&&e.type==="object"}function qr(e){return e!==void 0&&e.type==="array"}function kd(e){return e!==void 0&&e.type==="value"}function es(e){return zo(e)||qr(e)}function Nv(e){return e!==void 0&&Array.isArray(e.searchResults)}function Bl(e){return!!e&&e.type==="tree"}function Dv(e){return!!e&&e.type==="text"}function Uv(e){return!!e&&e.type==="mode"}function Mu(e){var{json:t,expand:r}=e,o=function(a){var{json:s,factory:i}=a;return Array.isArray(s)?i.createArrayDocumentState():yn(s)?i.createObjectDocumentState():s!==void 0?i.createValueDocumentState():void 0}({json:t,factory:Od});return r&&o?bo(t,o,[],r):o}function Cd(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:Rs,items:[]}}function Sd(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Od={createObjectDocumentState:Sd,createArrayDocumentState:Cd,createValueDocumentState:function(){return{type:"value"}}};function kh(e,t,r,o){var{createObjectDocumentState:a,createArrayDocumentState:s,createValueDocumentState:i}=o;return function l(c,u,d){if(Array.isArray(c)){var h=qr(u)?u:s();if(d.length===0)return h;var p=Rr(d[0]),m=l(c[p],h.items[p],d.slice(1));return Xo(h,["items",d[0]],m)}if(yn(c)){var g=zo(u)?u:a();if(d.length===0)return g;var b=d[0],j=l(c[b],g.properties[b],d.slice(1));return Xo(g,["properties",b],j)}return kd(u)?u:i()}(e,t,r)}function ro(e,t){return qi(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?qr(o)?o:Cd({expanded:!!es(o)&&o.expanded}):yn(r)?zo(o)?o:Sd({expanded:!!es(o)&&o.expanded}):kd(o)?o:void 0},()=>!0)}function qi(e,t,r,o,a){var s=o(e,t,r);if(Array.isArray(e)&&qr(s)&&a(s)){var i=[];return zd(e,s.visibleSections,c=>{var u=r.concat(String(c)),d=qi(e[c],s.items[c],u,o,a);d!==void 0&&(i[c]=d)}),zv(i,s.items)?s:ge(ge({},s),{},{items:i})}if(yn(e)&&zo(s)&&a(s)){var l={};return Object.keys(e).forEach(c=>{var u=r.concat(c),d=qi(e[c],s.properties[c],u,o,a);d!==void 0&&(l[c]=d)}),zv(Object.values(l),Object.values(s.properties))?s:ge(ge({},s),{},{properties:l})}return s}function zd(e,t,r){t.forEach(o=>{var{start:a,end:s}=o;lh(a,Math.min(e.length,s),r)})}function Ti(e,t){for(var r=e,o=[],a=0;a<t.length;){if(Array.isArray(r)){var s=t[a];o.push("items",s),r=r[Rr(s)]}else{if(!yn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));var i=t[a];o.push("properties",i),r=r[i]}a++}return o}function bo(e,t,r,o){for(var a=t,s=function(l){var c=r.slice(0,l);a=Bs(e,a,c,(u,d)=>{var h=es(d)&&!d.expanded?ge(ge({},d),{},{expanded:!0}):d;return qr(h)?function(p,m){if(function(j,x){return j.some(S=>x>=S.start&&x<S.end)}(p.visibleSections,m))return p;var g=Ul(m),b={start:g,end:$u(g)};return ge(ge({},p),{},{visibleSections:yh(p.visibleSections.concat(b))})}(h,Rr(r[l])):h})},i=0;i<r.length;i++)s(i);return Bs(e,a,r,(l,c)=>function(u,d,h,p){return qi(u,d,h,(m,g,b)=>Array.isArray(m)&&p(b)?qr(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Cd({expanded:!0}):yn(m)&&p(b)?zo(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Sd({expanded:!0}):g,m=>es(m)&&m.expanded)}(l,c,[],o))}function Bv(e,t,r,o){return Bs(e,t,r,(a,s)=>o?function(i,l,c){return qi(i,l,c,(u,d)=>Fv(d),()=>!0)}(a,s,r):Fv(s))}function Fv(e){return qr(e)&&e.expanded?ge(ge({},e),{},{expanded:!1,visibleSections:Rs}):zo(e)&&e.expanded?ge(ge({},e),{},{expanded:!1}):e}function Ch(e,t,r){var o={json:e,documentState:t},a=r.reduce((s,i)=>({json:No(s.json,[i]),documentState:I0(s.json,s.documentState,i)}),o);return{json:a.json,documentState:ro(a.json,a.documentState)}}function I0(e,t,r){if(gp(r))return Lv(e,t,r,void 0);if(hp(r))return Vv(e,t,r);if(od(r)){var o=ra(e,r.path),a=sa(e,t,o);return a?bc(e,t,o,{type:"value",enforceString:a}):t}return hu(r)||As(r)?function(s,i,l){if(As(l)&&l.from===l.path)return i;var c=i,u=ra(s,l.from),d=Ja(s,c,u);return As(l)&&(c=Vv(s,c,{path:l.from})),c=Lv(s,c,{path:l.path},d),c}(e,t,r):t}function Ja(e,t,r){try{return Je(t,Ti(e,r))}catch{return}}function Ed(e,t,r,o,a){var s=kh(e,t,r,a);return ym(s,Ti(e,r),i=>{var l=Je(e,r);return o(l,i)})}function bc(e,t,r,o){return function(a,s,i,l,c){var u=kh(a,s,i,c);return Xo(u,Ti(a,i),l)}(e,t,r,o,Od)}function Bs(e,t,r,o){return Ed(e,t,r,o,Od)}function Lv(e,t,r,o){var a=ra(e,r.path),s=t;return s=Bs(e,s,on(a),(i,l)=>{if(!qr(l))return l;var c=Rr(Ht(a)),{items:u,visibleSections:d}=l;return ge(ge({},l),{},{items:c<u.length?Jj(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:Sh(d,c,1)})}),bc(e,s,a,o)}function Vv(e,t,r){var o=ra(e,r.path),a=on(o),s=Je(e,a);return Array.isArray(s)?Bs(e,t,a,(i,l)=>{if(!qr(l))return l;var c=Rr(Ht(o)),{items:u,visibleSections:d}=l;return ge(ge({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:Sh(d,c,-1)})}):function(i,l,c){var u=Ti(i,c);return Ca(l,u)?Em(l,Ti(i,c)):l}(e,t,o)}function Sh(e,t,r){return function(o){for(var a=o.slice(0),s=1;s<a.length;)a[s-1].end===a[s].start&&(a[s-1]={start:a[s-1].start,end:a[s].end},a.splice(s)),s++;return a}(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function sa(e,t,r){var o,a=Je(e,r),s=Ja(e,t,r),i=kd(s)?s.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=a)=="string"&&typeof ti(o,JSON)!="string"}function Zi(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function $d(e,t){var r=[];return function o(a,s,i){r.push(i),Cr(a)&&qr(s)&&s.expanded&&zd(a,s.visibleSections,l=>{o(a[l],s.items[l],i.concat(String(l)))}),Mr(a)&&zo(s)&&s.expanded&&Object.keys(a).forEach(l=>{o(a[l],s.properties[l],i.concat(l))})}(e,t,[]),r}function Oh(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function a(s,i){o.push({path:i,type:ko.value});var l=Ja(e,t,i);if(s&&es(l)&&l.expanded){if(r&&o.push({path:i,type:ko.inside}),Cr(s)){var c=qr(l)?l.visibleSections:Rs;zd(s,c,u=>{var d=i.concat(String(u));a(s[u],d),r&&o.push({path:d,type:ko.after})})}Mr(s)&&Object.keys(s).forEach(u=>{var d=i.concat(u);o.push({path:d,type:ko.key}),a(s[u],d),r&&o.push({path:d,type:ko.after})})}}(e,[]),o}function Qc(e,t,r){var o=$d(e,t),a=o.map(zt).indexOf(zt(r));if(a!==-1&&a<o.length-1)return o[a+1]}function ts(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return bo(e,t,r,Yj({json:Je(e,r)},o)?wi:Md)}function Xc(e,t,r){var o=Ja(e,t,r);return es(o)&&o.expanded?t:ts(e,t,r)}function wi(e){return e.length===0||e.length===1&&e[0]==="0"}function Wv(e){return e.length===0}function Md(){return!0}function kl(){return!1}function uo(e){return e&&e.type===In.after||!1}function _r(e){return e&&e.type===In.inside||!1}function Sr(e){return e&&e.type===In.key||!1}function En(e){return e&&e.type===In.value||!1}function Jn(e){return e&&e.type===In.multi||!1}function jc(e){return Jn(e)&&Zt(e.focusPath,e.anchorPath)}function Ni(e){return Jn(e)||uo(e)||_r(e)||Sr(e)||En(e)}function Gc(e){return e&&e.type===In.text||!1}function Ra(e,t){var r=[];return function(o,a,s){if(a){var i=Ka(a),l=Qe(a);if(Zt(i,l))return s(i);if(o!==void 0){var c=Eh(i,l);if(i.length===c.length||l.length===c.length)return s(c);var u=Ur(i,l),d=ta(o,u),h=Ia(o,u),p=la(o,u,d),m=la(o,u,h);if(!(p===-1||m===-1)){var g=Je(o,c);if(Mr(g)){for(var b=Object.keys(g),j=p;j<=m;j++){var x=s(c.concat(b[j]));if(x!==void 0)return x}return}if(Cr(g)){for(var S=p;S<=m;S++){var O=s(c.concat(String(S)));if(O!==void 0)return O}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{r.push(o)}),r}function zh(e){return _r(e)?e.path:on(Qe(e))}function ta(e,t){if(!Jn(t))return t.path;var r=la(e,t,t.anchorPath);return la(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function Ia(e,t){if(!Jn(t))return t.path;var r=la(e,t,t.anchorPath);return la(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Hv(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var a=o?Qe(r):ta(e,r),s=function(c,u,d){var h=$d(c,u),p=h.map(zt),m=zt(d),g=p.indexOf(m);if(g!==-1&&g>0)return h[g-1]}(e,t,a);if(o)return _r(r)||uo(r)?s!==void 0?Ur(a,a):void 0:s!==void 0?Ur(Ka(r),s):void 0;if(uo(r)||_r(r))return Yt(a);if(Sr(r)){if(s===void 0||s.length===0)return;var i=on(s),l=Je(e,i);return Array.isArray(l)||Rn(s)?Yt(s):va(s)}return En(r),s!==void 0?Yt(s):void 0}}function Jv(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var a=Oh(e,t,o),s=a.findIndex(i=>Zt(i.path,Qe(r))&&String(i.type)===String(r.type));return{caret:s!==-1?a[s]:void 0,previous:s!==-1&&s>0?a[s-1]:void 0,next:s!==-1&&s<a.length-1?a[s+1]:void 0}}function hs(e,t){for(var r=$d(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var a=r[o];return a===void 0||a.length===0||Array.isArray(Je(e,on(a)))?Yt(a):va(a)}function Fs(e,t){if(t.length===1){var r=na(t);if(r.op==="replace")return Yt(ra(e,r.path))}if(!Rn(t)&&t.every(i=>i.op==="move")){var o=na(t),a=t.slice(1);if((hu(o)||As(o))&&o.from!==o.path&&a.every(i=>(hu(i)||As(i))&&i.from===i.path))return va(ra(e,o.path))}var s=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>ra(e,i.path));if(!Rn(s))return{type:In.multi,anchorPath:na(s),focusPath:Ht(s)}}function Eh(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Fl(e){return Sr(e)||En(e)||jc(e)}function Kv(e,t){return Fl(t)&&br(Je(e,Qe(t)))?Qe(t):on(Qe(t))}function da(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function _o(e){if(Kr(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function va(e){return{type:In.key,path:e}}function Ad(e,t){return{type:In.key,path:e,edit:!0,initialValue:t}}function Yt(e){return{type:In.value,path:e}}function Ll(e,t){return{type:In.value,path:e,edit:!0,initialValue:t}}function fa(e){return{type:In.inside,path:e}}function ia(e){return{type:In.after,path:e}}function Ur(e,t){var r=Eh(e,t),o=e.length>r.length&&t.length>r.length;return{type:In.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function $h(e,t,r,o){if(Sr(t))return String(Ht(t.path));if(En(t)){var a=Je(e,t.path);return typeof a=="string"?a:o.stringify(a,null,r)}if(Jn(t)){if(Rn(t.focusPath))return o.stringify(e,null,r);var s=zh(t),i=Je(e,s);if(Array.isArray(i)){if(jc(t)){var l=Je(e,t.focusPath);return o.stringify(l,null,r)}return Ra(e,t).map(c=>{var u=Je(e,c);return"".concat(o.stringify(u,null,r),",")}).join(`
`)}return Ra(e,t).map(c=>{var u=Ht(c),d=Je(e,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,r),",")}).join(`
`)}}function Kr(e){return(Sr(e)||En(e))&&e.edit===!0}function Os(e){return Sr(e)||En(e)||Jn(e)}function dl(e){return Sr(e)||En(e)||jc(e)}function Au(e){switch(e.type){case ko.key:return va(e.path);case ko.value:return Yt(e.path);case ko.after:return ia(e.path);case ko.inside:return fa(e.path)}}function Yv(e,t){switch(e){case In.key:return va(t);case In.value:return Yt(t);case In.after:return ia(t);case In.inside:return fa(t);case In.multi:case In.text:return Ur(t,t)}}function Qv(e,t,r){if(t)return Di(e,t,r)||da(Jn(t)?on(t.focusPath):t.path,r)?t:void 0}function Di(e,t,r){if(e===void 0||!t)return!1;if(Sr(t)||_r(t)||uo(t))return Zt(t.path,r);if(En(t))return da(r,t.path);if(Jn(t)){var o=ta(e,t),a=Ia(e,t),s=on(t.focusPath);if(!da(r,s)||r.length<=s.length)return!1;var i=la(e,t,o),l=la(e,t,a),c=la(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function la(e,t,r){var o=on(t.focusPath);if(!da(r,o)||r.length<=o.length)return-1;var a=r[o.length],s=Je(e,o);if(Mr(s))return Object.keys(s).indexOf(a);if(Cr(s)){var i=Rr(a);if(i<s.length)return i}return-1}function Qe(e){return Jn(e)?e.focusPath:e.path}function Ka(e){return Jn(e)?e.anchorPath:e.path}function ri(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var a of r)if(typeof a=="string"&&e.push(a),a&&typeof a=="object")for(var s in a)Object.hasOwnProperty.call(a,s)&&a[s]&&e.push(s);return e.join(" ")}function Mh(e,t,r){return ri("jse-value","jse-"+gd(e,r),{"jse-url":hc(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===kr.table})}bt(`/* over all fonts, sizes, and colors */
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
div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var _0=L('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function Ah(e,t){lt(t,!1);var r=Or("jsoneditor:EditableDiv"),o=v(t,"value",9),a=v(t,"initialValue",9),s=v(t,"shortText",9,!1),i=v(t,"label",9),l=v(t,"onChange",9),c=v(t,"onCancel",9),u=v(t,"onFind",9),d=v(t,"onPaste",9,wr),h=v(t,"onValueClass",9,()=>""),p=M(void 0,!0),m=M(void 0,!0),g=!1;function b(){return n(p)?function(S){return S.replace(/\n$/,"")}(n(p).innerText):""}function j(S){n(p)&&oo(p,n(p).innerText=mc(S))}Tr(()=>{r("onMount",{value:o(),initialValue:a()}),j(a()!==void 0?a():o()),n(p)&&function(S){if(S.firstChild!=null){var O=document.createRange(),C=window.getSelection();O.setStart(S,1),O.collapse(!0),C==null||C.removeAllRanges(),C==null||C.addRange(O)}else S.focus()}(n(p))}),vo(()=>{var S=b();r("onDestroy",{closed:g,value:o(),newValue:S}),g||S===o()||l()(S,Pa.no)}),U(()=>(E(h()),E(o())),()=>{f(m,h()(o()))}),ln(),pt(!0);var x=_0();Yn(x,S=>f(p,S),()=>n(p)),we(S=>{vn(x,"aria-label",i()),St(x,1,Ua(S),"svelte-f9kmxj")},[()=>ri("jse-editable-div",n(m),{"jse-short-text":s()})],fe),se("input",x,function(){var S=b();S===""&&j(""),f(m,h()(S))}),se("keydown",x,function(S){S.stopPropagation();var O=ua(S);if(O==="Escape"&&(S.preventDefault(),g=!0,c()()),O==="Enter"||O==="Tab"){S.preventDefault(),g=!0;var C=b();l()(C,Pa.nextInside)}O==="Ctrl+F"&&(S.preventDefault(),u()(!1)),O==="Ctrl+H"&&(S.preventDefault(),u()(!0))}),se("paste",x,function(S){if(S.stopPropagation(),d()&&S.clipboardData){var O=S.clipboardData.getData("text/plain");d()(O)}}),se("blur",x,function(){var S=document.hasFocus(),O=b();r("handleBlur",{hasFocus:S,closed:g,value:o(),newValue:O}),document.hasFocus()&&!g&&(g=!0,O!==o()&&l()(O,Pa.self))}),P(e,x),ct()}function q0(e,t){lt(t,!1);var r=v(t,"path",9),o=v(t,"value",9),a=v(t,"selection",9),s=v(t,"mode",9),i=v(t,"parser",9),l=v(t,"normalization",9),c=v(t,"enforceString",9),u=v(t,"onPatch",9),d=v(t,"onPasteJson",9),h=v(t,"onSelect",9),p=v(t,"onFind",9),m=v(t,"focus",9),g=v(t,"findNextInside",9);function b(O){return c()?O:ti(O,i())}function j(){h()(Yt(r())),m()()}pt(!0);var x=fe(()=>l().escapeValue(o())),S=fe(()=>Kr(a())?a().initialValue:void 0);Ah(e,{get value(){return n(x)},get initialValue(){return n(S)},label:"Edit value",onChange:function(O,C){u()([{op:"replace",path:zt(r()),value:b(l().unescapeValue(O))}],(y,$,I)=>{if(!I||Zt(r(),Qe(I)))return{state:$,selection:C===Pa.nextInside?g()(r()):Yt(r())}}),m()()},onCancel:j,onPaste:function(O){try{var C=i().parse(O);br(C)&&d()({path:r(),contents:C,onPasteAsJson:()=>{j();var y=[{op:"replace",path:zt(r()),value:C}];u()(y,($,I)=>({state:ts($,I,r())}))}})}catch{}},get onFind(){return p()},onValueClass:function(O){return Mh(b(l().unescapeValue(O)),s(),i())}}),ct()}function zs(e,t,r){var o=on(t),a=Je(e,o);if(Cr(a)){var s=Rr(Ht(t));return r.map((u,d)=>({op:"add",path:zt(o.concat(String(s+d))),value:u.value}))}if(Mr(a)){var i=Ht(t),l=Object.keys(a),c=i!==void 0?Zi(l,i,!0):[];return[...r.map(u=>{var d=Gi(u.key,l);return{op:"add",path:zt(o.concat(d)),value:u.value}}),...c.map(u=>ns(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Pu(e,t,r){var o=Je(e,t);if(Array.isArray(o)){var a=o.length;return r.map((s,i)=>({op:"add",path:zt(t.concat(String(a+i))),value:s.value}))}return r.map(s=>{var i=Gi(s.key,Object.keys(o));return{op:"add",path:zt(t.concat(i)),value:s.value}})}function el(e,t,r,o){var a=Gi(o,t.filter(i=>i!==r)),s=Zi(t,r,!1);return[{op:"move",from:zt(e.concat(r)),path:zt(e.concat(a))},...s.map(i=>ns(e,i))]}function Ph(e,t){var r=Ht(t);if(Rn(r))throw new Error("Cannot duplicate root object");var o=on(r),a=Ht(r),s=Je(e,o);if(Cr(s)){var i=Ht(t),l=i?Rr(Ht(i))+1:0;return[...t.map((d,h)=>({op:"copy",from:zt(d),path:zt(o.concat(String(h+l)))}))]}if(Mr(s)){var c=Object.keys(s),u=a!==void 0?Zi(c,a,!1):[];return[...t.map(d=>{var h=Gi(Ht(d),c);return{op:"copy",from:zt(d),path:zt(o.concat(h))}}),...u.map(d=>ns(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function Rh(e,t,r,o){if(Sr(t)){var a=uh(r,o),s=on(t.path),i=Je(e,s);return el(s,Object.keys(i),Ht(t.path),typeof a=="string"?a:r)}if(En(t)||Jn(t)&&Rn(t.focusPath))try{return[{op:"replace",path:zt(Qe(t)),value:gc(r,$=>Qi($,o))}]}catch{return[{op:"replace",path:zt(Qe(t)),value:r}]}if(Jn(t)){var l=Zc(r,o);return function($,I,T){var z=na(I),ne=on(z),Q=Je($,ne);if(Cr(Q)){var B=na(I),G=B?Rr(Ht(B)):0;return[...Vl(I),...T.map((Ce,Ge)=>({op:"add",path:zt(ne.concat(String(Ge+G))),value:Ce.value}))]}if(Mr(Q)){var pe=Ht(I),Z=on(pe),de=Ht(pe),Me=Object.keys(Q),ue=de!==void 0?Zi(Me,de,!1):[],ve=new Set(I.map(Ce=>Ht(Ce))),me=Me.filter(Ce=>!ve.has(Ce));return[...Vl(I),...T.map(Ce=>{var Ge=Gi(Ce.key,me);return{op:"add",path:zt(Z.concat(Ge)),value:Ce.value}}),...ue.map(Ce=>ns(Z,Ce))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,Ra(e,t),l)}if(uo(t)){var c=Zc(r,o),u=t.path,d=on(u),h=Je(e,d);if(Cr(h)){var p=Rr(Ht(u));return zs(e,d.concat(String(p+1)),c)}if(Mr(h)){var m=String(Ht(u)),g=Object.keys(h);if(Rn(g)||Ht(g)===m)return Pu(e,d,c);var b=g.indexOf(m),j=g[b+1];return zs(e,d.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(_r(t)){var x=Zc(r,o),S=t.path,O=Je(e,S);if(Cr(O))return zs(e,S.concat("0"),x);if(Mr(O)){var C=Object.keys(O);if(Rn(C))return Pu(e,S,x);var y=na(C);return zs(e,S.concat(y),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Vl(e){return e.map(t=>({op:"remove",path:zt(t)})).reverse()}function ns(e,t){return{op:"move",from:zt(e.concat(t)),path:zt(e.concat(t))}}function Zc(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),a=uh(e,t),s=a!==void 0?a:gc(e,i=>Qi(i,t));return r&&yn(s)||o&&Array.isArray(s)?[{key:"New item",value:s}]:Array.isArray(s)?s.map((i,l)=>({key:"New item "+l,value:i})):yn(s)?Object.keys(s).map(i=>({key:i,value:s[i]})):[{key:"New item",value:s}]}function Ih(e,t){if(Sr(t)){var r=on(t.path),o=Je(e,r),a=el(r,Object.keys(o),Ht(t.path),"");return{operations:a,newSelection:Fs(e,a)}}if(En(t))return{operations:[{op:"replace",path:zt(t.path),value:""}],newSelection:t};if(Jn(t)){var s=Ra(e,t),i=Vl(s),l=Ht(s);if(Rn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Yt([])};var c=on(l),u=Je(e,c);if(Cr(u)){var d=na(s),h=Rr(Ht(d));return{operations:i,newSelection:h===0?fa(c):ia(c.concat(String(h-1)))}}if(Mr(u)){var p=Object.keys(u),m=na(s),g=Ht(m),b=p.indexOf(g),j=p[b-1];return{operations:i,newSelection:b===0?fa(c):ia(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function _h(e,t){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zt;return r.filter((a,s)=>{for(var i=s+1;i<r.length;i++)if(o(a,r[i]))return!1;return!0})}(pp(e,t,{before:(r,o,a)=>{if(hp(o)){var s=qo(o.path);return{revertOperations:[...a,...eu(r,s)]}}if(As(o)){var i=qo(o.from);return{revertOperations:o.from===o.path?[o,...eu(r,i)]:[...a,...eu(r,i)]}}return{document:r}}}))}function eu(e,t){var r=on(t),o=Ht(t),a=Je(e,r);return Mr(a)?Zi(Object.keys(a),o,!1).map(s=>ns(r,s)):[]}function Xv(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((a,s)=>ge(ge({},a),{},{active:s===t}));return ge(ge({},e),{},{items:o,activeItem:r,activeIndex:t})}function Gv(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.toLowerCase(),s=(r=o==null?void 0:o.maxResults)!==null&&r!==void 0?r:1/0,i=o==null?void 0:o.columns,l=[],c=[];function u(j){l.length>=s||l.push(j)}function d(j,x){if(Cr(x)){var S=c.length;c.push("0");for(var O=0;O<x.length;O++)if(c[S]=String(O),d(j,x[O]),l.length>=s)return;c.pop()}else if(Mr(x)){var C=Object.keys(x),y=c.length;for(var $ of(c.push(""),C))if(c[y]=$,Zv($,j,c,Oo.key,u),d(j,x[$]),l.length>=s)return;c.pop()}else Zv(String(x),j,c,Oo.value,u)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var h=0;h<t.length;h++){c[0]=String(h);for(var p=t[h],m=0;m<i.length;m++){var g=i[m];if(g.length===1)c[1]=g[0];else for(var b=0;b<g.length;b++)c[b+1]=g[b];for(;c.length>g.length+1;)c.pop();d(a,Je(p,g))}if(l.length>=s)break}return l}return d(a,t),l}function Zv(e,t,r,o,a){var s=e.toLowerCase(),i=0,l=-1,c=-1;do(c=s.indexOf(t,l))!==-1&&(l=c+t.length,a({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Ru(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function ef(e,t,r){var o=e;return Rm(r,a=>{o=Ru(o,t,a.start,a.end)}),o}function T0(e,t,r,o,a){var{field:s,path:i,start:l,end:c}=o;if(s===Oo.key){var u=on(i),d=Je(e,u),h=Ht(i),p=el(u,Object.keys(d),h,Ru(h,r,l,c));return{newSelection:Fs(e,p),operations:p}}if(s===Oo.value){var m=Je(e,i);if(m===void 0)throw new Error("Cannot replace: path not found ".concat(zt(i)));var g=typeof m=="string"?m:String(m),b=sa(e,t,i),j=Ru(g,r,l,c),x=[{op:"replace",path:zt(i),value:b?j:ti(j,a)}];return{newSelection:Fs(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(s))}function tf(e){return e.path.concat(e.field,String(e.fieldIndex))}var N0={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function qh(e,t){return t.reduce((r,o)=>function(a,s,i,l){return Ed(a,s,i,l,N0)}(e,r,o.path,(a,s)=>ge(ge({},s),{},{searchResults:s.searchResults?s.searchResults.concat(o):[o]})),void 0)}function Iu(e){var t,r=(t=e==null?void 0:e.searchResults)!==null&&t!==void 0?t:[],o=zo(e)?Object.values(e.properties).flatMap(Iu):qr(e)?e.items.flatMap(Iu):[];return r.concat(o)}bt(`/* over all fonts, sizes, and colors */
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
}`);var D0=L("<span> </span>");function Th(e,t){lt(t,!1);var r=M(),o=v(t,"text",8),a=v(t,"searchResultItems",8);U(()=>(E(o()),E(a())),()=>{f(r,function(i,l){var c=[],u=0;for(var d of l){var h=i.slice(u,d.start);h!==""&&c.push({type:"normal",text:h,active:!1});var p=i.slice(d.start,d.end);c.push({type:"highlight",text:p,active:d.active}),u=d.end}var m=Ht(l);return m&&m.end<i.length&&c.push({type:"normal",text:i.slice(m.end),active:!1}),c}(String(o()),a()))}),ln(),pt();var s=Lt();vr(Ne(s),1,()=>n(r),jr,(i,l)=>{var c=Lt(),u=Ne(c),d=p=>{var m=Lr();we(()=>gt(m,n(l).text)),P(p,m)},h=p=>{var m,g=D0(),b=A(g);we(j=>{m=St(g,1,"jse-highlight svelte-5fb7bl",null,m,{"jse-active":n(l).active}),gt(b,j)},[()=>mc(n(l).text)],fe),P(p,g)};Y(u,p=>{n(l).type==="normal"?p(d):p(h,!1)}),P(i,c)}),P(e,s),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var U0=L('<div role="button" tabindex="-1" data-type="selectable-value"><!></div>');function B0(e,t){lt(t,!1);var r=M(void 0,!0),o=v(t,"path",9),a=v(t,"value",9),s=v(t,"mode",9),i=v(t,"readOnly",9),l=v(t,"normalization",9),c=v(t,"parser",9),u=v(t,"onSelect",9),d=v(t,"searchResultItems",9);U(()=>E(a()),()=>{f(r,hc(a()))}),ln(),pt(!0);var h=U0(),p=A(h),m=b=>{var j=fe(()=>l().escapeValue(a()));Th(b,{get text(){return n(j)},get searchResultItems(){return d()}})},g=b=>{var j=Lr();we(x=>gt(j,x),[()=>mc(l().escapeValue(a()))],fe),P(b,j)};Y(p,b=>{d()?b(m):b(g,!1)}),we(b=>{St(h,1,Ua(b),"svelte-c0g9qz"),vn(h,"title",n(r)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>Mh(a(),s(),c())],fe),se("click",h,function(b){typeof a()=="string"&&n(r)&&yd(b)&&(b.preventDefault(),b.stopPropagation(),window.open(a(),"_blank"))}),se("dblclick",h,function(b){i()||(b.preventDefault(),u()(Ll(o())))}),P(e,h),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var F0=L('<div class="jse-tooltip svelte-14y3y8t"> </div>');function L0(e,t){var r=v(t,"text",8),o=F0(),a=A(o);we(()=>gt(a,r())),P(e,o)}function Ls(e,t){var r,{text:o,openAbsolutePopup:a,closeAbsolutePopup:s}=t;function i(){r=a(L0,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){s(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}bt(`/* over all fonts, sizes, and colors */
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
}`);var V0=L('<div class="jse-timestamp svelte-1jla5ec"><!></div>');function W0(e,t){lt(t,!1);var r=M(void 0,!0),o=Ba("absolute-popup"),a=v(t,"value",9);U(()=>E(a()),()=>{f(r,"Time: ".concat(new Date(a()).toString()))}),ln(),pt(!0);var s=V0();en(A(s),{data:hm}),Fr(s,(i,l)=>Ls==null?void 0:Ls(i,l),()=>ge({text:n(r)},o)),P(e,s),ct()}function H0(e){var t=[];return!e.isEditing&&Lj(e.value)&&t.push({component:y0,props:e}),!e.isEditing&&Vj(e.value)&&t.push({component:S0,props:e}),e.isEditing&&t.push({component:q0,props:e}),e.isEditing||t.push({component:B0,props:e}),!e.isEditing&&ku(e.value)&&t.push({component:W0,props:e}),t}function Co(e){return e.map((t,r)=>K0.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(r>0?".":"")+t).join("")}function J0(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(s=>s==='"',!0)),a('"')):t.push(o(s=>s==="]")),a("]")):t.push(o(s=>s==="."||s==="["));function o(s){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!s(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function a(s){if(e[r]!==s)throw new SyntaxError("Invalid JSON path: ".concat(s," expected at position ").concat(r));r++}return t}function wa(e){return{value:e,label:Rn(e)?"(item root)":Co(e)}}var K0=/^\d+$/,Y0={},Q0={showWizard:!0,showOriginal:!0},Wl=Math.min,Ya=Math.max,Hl=Math.round,vl=Math.floor,Bo=e=>({x:e,y:e}),X0={left:"right",right:"left",bottom:"top",top:"bottom"},G0={start:"end",end:"start"};function nf(e,t,r){return Ya(e,Wl(t,r))}function xc(e,t){return typeof e=="function"?e(t):e}function Qa(e){return e.split("-")[0]}function Jl(e){return e.split("-")[1]}function Nh(e){return e==="x"?"y":"x"}function Dh(e){return e==="y"?"height":"width"}function Vs(e){return["top","bottom"].includes(Qa(e))?"y":"x"}function Uh(e){return Nh(Vs(e))}function tu(e){return e.replace(/start|end/g,t=>G0[t])}function fl(e){return e.replace(/left|right|bottom|top/g,t=>X0[t])}function Z0(e){return typeof e!="number"?function(t){return ge({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Kl(e){var{x:t,y:r,width:o,height:a}=e;return{width:o,height:a,top:r,left:t,right:t+o,bottom:r+a,x:t,y:r}}function rf(e,t,r){var o,{reference:a,floating:s}=e,i=Vs(t),l=Uh(t),c=Dh(l),u=Qa(t),d=i==="y",h=a.x+a.width/2-s.width/2,p=a.y+a.height/2-s.height/2,m=a[c]/2-s[c]/2;switch(u){case"top":o={x:h,y:a.y-s.height};break;case"bottom":o={x:h,y:a.y+a.height};break;case"right":o={x:a.x+a.width,y:p};break;case"left":o={x:a.x-s.width,y:p};break;default:o={x:a.x,y:a.y}}switch(Jl(t)){case"start":o[l]-=m*(r&&d?-1:1);break;case"end":o[l]+=m*(r&&d?-1:1)}return o}var ex=function(){var e=yt(function*(t,r,o){for(var{placement:a="bottom",strategy:s="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(r),d=yield l.getElementRects({reference:t,floating:r,strategy:s}),{x:h,y:p}=rf(d,a,u),m=a,g={},b=0,j=0;j<c.length;j++){var{name:x,fn:S}=c[j],{x:O,y:C,data:y,reset:$}=yield S({x:h,y:p,initialPlacement:a,placement:m,strategy:s,middlewareData:g,rects:d,platform:l,elements:{reference:t,floating:r}});h=O??h,p=C??p,g=ge(ge({},g),{},{[x]:ge(ge({},g[x]),y)}),$&&b<=50&&(b++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(d=$.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:s}):$.rects),{x:h,y:p}=rf(d,m,u)),j=-1)}return{x:h,y:p,placement:m,strategy:s,middlewareData:g}});return function(t,r,o){return e.apply(this,arguments)}}();function Bh(e,t){return _u.apply(this,arguments)}function _u(){return _u=yt(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:a,platform:s,rects:i,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=xc(t,e),g=Z0(m),b=l[p?h==="floating"?"reference":"floating":h],j=Kl(yield s.getClippingRect({element:(r=yield s.isElement==null?void 0:s.isElement(b))==null||r?b:b.contextElement||(yield s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),x=h==="floating"?{x:o,y:a,width:i.floating.width,height:i.floating.height}:i.reference,S=yield s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating),O=(yield s.isElement==null?void 0:s.isElement(S))&&(yield s.getScale==null?void 0:s.getScale(S))||{x:1,y:1},C=Kl(s.convertOffsetParentRelativeRectToViewportRelativeRect?yield s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:S,strategy:c}):x);return{top:(j.top-C.top+g.top)/O.y,bottom:(C.bottom-j.bottom+g.bottom)/O.y,left:(j.left-C.left+g.left)/O.x,right:(C.right-j.right+g.right)/O.x}}),_u.apply(this,arguments)}function qu(){return qu=yt(function*(e,t){var{placement:r,platform:o,elements:a}=e,s=yield o.isRTL==null?void 0:o.isRTL(a.floating),i=Qa(r),l=Jl(r),c=Vs(r)==="y",u=["left","top"].includes(i)?-1:1,d=s&&c?-1:1,h=xc(t,e),{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?-1*g:g),c?{x:m*d,y:p*u}:{x:p*u,y:m*d}}),qu.apply(this,arguments)}function yc(){return typeof window<"u"}function Ws(e){return Fh(e)?(e.nodeName||"").toLowerCase():"#document"}function so(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fo(e){var t;return(t=(Fh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fh(e){return!!yc()&&(e instanceof Node||e instanceof so(e).Node)}function Eo(e){return!!yc()&&(e instanceof Element||e instanceof so(e).Element)}function Vo(e){return!!yc()&&(e instanceof HTMLElement||e instanceof so(e).HTMLElement)}function of(e){return!(!yc()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof so(e).ShadowRoot)}function Ui(e){var{overflow:t,overflowX:r,overflowY:o,display:a}=$o(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(a)}function tx(e){return["table","td","th"].includes(Ws(e))}function Yl(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Tu(e){var t=Pd(),r=Eo(e)?$o(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Pd(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Is(e){return["html","body","#document"].includes(Ws(e))}function $o(e){return so(e).getComputedStyle(e)}function wc(e){return Eo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function za(e){if(Ws(e)==="html")return e;var t=e.assignedSlot||e.parentNode||of(e)&&e.host||Fo(e);return of(t)?t.host:t}function Lh(e){var t=za(e);return Is(t)?e.ownerDocument?e.ownerDocument.body:e.body:Vo(t)&&Ui(t)?t:Lh(t)}function Bi(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var a=Lh(e),s=a===((o=e.ownerDocument)==null?void 0:o.body),i=so(a);if(s){var l=Nu(i);return t.concat(i,i.visualViewport||[],Ui(a)?a:[],l&&r?Bi(l):[])}return t.concat(a,Bi(a,[],r))}function Nu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vh(e){var t=$o(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,a=Vo(e),s=a?e.offsetWidth:r,i=a?e.offsetHeight:o,l=Hl(r)!==s||Hl(o)!==i;return l&&(r=s,o=i),{width:r,height:o,$:l}}function Rd(e){return Eo(e)?e:e.contextElement}function _s(e){var t=Rd(e);if(!Vo(t))return Bo(1);var r=t.getBoundingClientRect(),{width:o,height:a,$:s}=Vh(t),i=(s?Hl(r.width):r.width)/o,l=(s?Hl(r.height):r.height)/a;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var nx=Bo(0);function Wh(e){var t=so(e);return Pd()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:nx}function rs(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),s=Rd(e),i=Bo(1);t&&(o?Eo(o)&&(i=_s(o)):i=_s(e));var l=function(y,$,I){return $===void 0&&($=!1),!(!I||$&&I!==so(y))&&$}(s,r,o)?Wh(s):Bo(0),c=(a.left+l.x)/i.x,u=(a.top+l.y)/i.y,d=a.width/i.x,h=a.height/i.y;if(s)for(var p=so(s),m=o&&Eo(o)?so(o):o,g=p,b=Nu(g);b&&o&&m!==g;){var j=_s(b),x=b.getBoundingClientRect(),S=$o(b),O=x.left+(b.clientLeft+parseFloat(S.paddingLeft))*j.x,C=x.top+(b.clientTop+parseFloat(S.paddingTop))*j.y;c*=j.x,u*=j.y,d*=j.x,h*=j.y,c+=O,u+=C,b=Nu(g=so(b))}return Kl({width:d,height:h,x:c,y:u})}function Id(e,t){var r=wc(e).scrollLeft;return t?t.left+r:rs(Fo(e)).left+r}function Hh(e,t,r){r===void 0&&(r=!1);var o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:Id(e,o)),y:o.top+t.scrollTop}}function af(e,t,r){var o;if(t==="viewport")o=function(s,i){var l=so(s),c=Fo(s),u=l.visualViewport,d=c.clientWidth,h=c.clientHeight,p=0,m=0;if(u){d=u.width,h=u.height;var g=Pd();(!g||g&&i==="fixed")&&(p=u.offsetLeft,m=u.offsetTop)}return{width:d,height:h,x:p,y:m}}(e,r);else if(t==="document")o=function(s){var i=Fo(s),l=wc(s),c=s.ownerDocument.body,u=Ya(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),d=Ya(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),h=-l.scrollLeft+Id(s),p=-l.scrollTop;return $o(c).direction==="rtl"&&(h+=Ya(i.clientWidth,c.clientWidth)-u),{width:u,height:d,x:h,y:p}}(Fo(e));else if(Eo(t))o=function(s,i){var l=rs(s,!0,i==="fixed"),c=l.top+s.clientTop,u=l.left+s.clientLeft,d=Vo(s)?_s(s):Bo(1);return{width:s.clientWidth*d.x,height:s.clientHeight*d.y,x:u*d.x,y:c*d.y}}(t,r);else{var a=Wh(e);o={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Kl(o)}function Jh(e,t){var r=za(e);return!(r===t||!Eo(r)||Is(r))&&($o(r).position==="fixed"||Jh(r,t))}function rx(e,t,r){var o=Vo(t),a=Fo(t),s=r==="fixed",i=rs(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=Bo(0);if(o||!o&&!s)if((Ws(t)!=="body"||Ui(a))&&(l=wc(t)),o){var u=rs(t,!0,s,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else a&&(c.x=Id(a));var d=!a||o||s?Bo(0):Hh(a,l);return{x:i.left+l.scrollLeft-c.x-d.x,y:i.top+l.scrollTop-c.y-d.y,width:i.width,height:i.height}}function nu(e){return $o(e).position==="static"}function sf(e,t){if(!Vo(e)||$o(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return Fo(e)===r&&(r=r.ownerDocument.body),r}function lf(e,t){var r=so(e);if(Yl(e))return r;if(!Vo(e)){for(var o=za(e);o&&!Is(o);){if(Eo(o)&&!nu(o))return o;o=za(o)}return r}for(var a=sf(e,t);a&&tx(a)&&nu(a);)a=sf(a,t);return a&&Is(a)&&nu(a)&&!Tu(a)?r:a||function(s){for(var i=za(s);Vo(i)&&!Is(i);){if(Tu(i))return i;if(Yl(i))return null;i=za(i)}return null}(e)||r}var ox={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:a}=e,s=a==="fixed",i=Fo(o),l=!!t&&Yl(t.floating);if(o===i||l&&s)return r;var c={scrollLeft:0,scrollTop:0},u=Bo(1),d=Bo(0),h=Vo(o);if((h||!h&&!s)&&((Ws(o)!=="body"||Ui(i))&&(c=wc(o)),Vo(o))){var p=rs(o);u=_s(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}var m=!i||h||s?Bo(0):Hh(i,c,!0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+d.x+m.x,y:r.y*u.y-c.scrollTop*u.y+d.y+m.y}},getDocumentElement:Fo,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:a}=e,s=[...r==="clippingAncestors"?Yl(t)?[]:function(c,u){var d=u.get(c);if(d)return d;for(var h=Bi(c,[],!1).filter(x=>Eo(x)&&Ws(x)!=="body"),p=null,m=$o(c).position==="fixed",g=m?za(c):c;Eo(g)&&!Is(g);){var b=$o(g),j=Tu(g);j||b.position!=="fixed"||(p=null),(m?!j&&!p:!j&&b.position==="static"&&p&&["absolute","fixed"].includes(p.position)||Ui(g)&&!j&&Jh(c,g))?h=h.filter(x=>x!==g):p=b,g=za(g)}return u.set(c,h),h}(t,this._c):[].concat(r),o],i=s[0],l=s.reduce((c,u)=>{var d=af(t,u,a);return c.top=Ya(d.top,c.top),c.right=Wl(d.right,c.right),c.bottom=Wl(d.bottom,c.bottom),c.left=Ya(d.left,c.left),c},af(t,i,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:lf,getElementRects:function(){var e=yt(function*(t){var r=this.getOffsetParent||lf,o=this.getDimensions,a=yield o(t.floating);return{reference:rx(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=Vh(e);return{width:t,height:r}},getScale:_s,isElement:Eo,isRTL:function(e){return $o(e).direction==="rtl"}};function cf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ax(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Rd(e),d=a||s?[...u?Bi(u):[],...Bi(t)]:[];d.forEach(j=>{a&&j.addEventListener("scroll",r,{passive:!0}),s&&j.addEventListener("resize",r)});var h,p=u&&l?function(j,x){var S,O=null,C=Fo(j);function y(){var $;clearTimeout(S),($=O)==null||$.disconnect(),O=null}return function $(I,T){I===void 0&&(I=!1),T===void 0&&(T=1),y();var z=j.getBoundingClientRect(),{left:ne,top:Q,width:B,height:G}=z;if(I||x(),B&&G){var pe={rootMargin:-vl(Q)+"px "+-vl(C.clientWidth-(ne+B))+"px "+-vl(C.clientHeight-(Q+G))+"px "+-vl(ne)+"px",threshold:Ya(0,Wl(1,T))||1},Z=!0;try{O=new IntersectionObserver(de,ge(ge({},pe),{},{root:C.ownerDocument}))}catch{O=new IntersectionObserver(de,pe)}O.observe(j)}function de(Me){var ue=Me[0].intersectionRatio;if(ue!==T){if(!Z)return $();ue?$(!1,ue):S=setTimeout(()=>{$(!1,1e-7)},1e3)}ue!==1||cf(z,j.getBoundingClientRect())||$(),Z=!1}}(!0),y}(u,r):null,m=-1,g=null;i&&(g=new ResizeObserver(j=>{var[x]=j;x&&x.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var S;(S=g)==null||S.observe(t)})),r()}),u&&!c&&g.observe(u),g.observe(t));var b=c?rs(e):null;return c&&function j(){var x=rs(e);b&&!cf(b,x)&&r(),b=x,h=requestAnimationFrame(j)}(),r(),()=>{var j;d.forEach(x=>{a&&x.removeEventListener("scroll",r),s&&x.removeEventListener("resize",r)}),p==null||p(),(j=g)==null||j.disconnect(),g=null,c&&cancelAnimationFrame(h)}}var sx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>yt(function*(){var r,o,{x:a,y:s,placement:i,middlewareData:l}=t,c=yield function(u,d){return qu.apply(this,arguments)}(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:a+c.x,y:s+c.y,data:ge(ge({},c),{},{placement:i})}})()}},ix=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>yt(function*(){var{x:r,y:o,placement:a}=t,s=xc(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:O=>{var{x:C,y}=O;return{x:C,y}}}}=s,u=zp(s,dj),d={x:r,y:o},h=yield Bh(t,u),p=Vs(Qa(a)),m=Nh(p),g=d[m],b=d[p];if(i){var j=m==="y"?"bottom":"right";g=nf(g+h[m==="y"?"top":"left"],g,g-h[j])}if(l){var x=p==="y"?"bottom":"right";b=nf(b+h[p==="y"?"top":"left"],b,b-h[x])}var S=c.fn(ge(ge({},t),{},{[m]:g,[p]:b}));return ge(ge({},S),{},{data:{x:S.x-r,y:S.y-o,enabled:{[m]:i,[p]:l}}})})()}},lx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>yt(function*(){var r,o,{placement:a,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:u}=t,d=xc(e,t),{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:j=!0}=d,x=zp(d,uj);if((r=s.arrow)!=null&&r.alignmentOffset)return{};var S=Qa(a),O=Vs(l),C=Qa(l)===l,y=yield c.isRTL==null?void 0:c.isRTL(u.floating),$=m||(C||!j?[fl(l)]:function(me){var Ce=fl(me);return[tu(me),Ce,tu(Ce)]}(l)),I=b!=="none";!m&&I&&$.push(...function(me,Ce,Ge,re){var ie=Jl(me),Ee=function(At,te,q){var ae=["left","right"],_=["right","left"];switch(At){case"top":case"bottom":return q?te?_:ae:te?ae:_;case"left":case"right":return te?["top","bottom"]:["bottom","top"];default:return[]}}(Qa(me),Ge==="start",re);return ie&&(Ee=Ee.map(At=>At+"-"+ie),Ce&&(Ee=Ee.concat(Ee.map(tu)))),Ee}(l,j,b,y));var T=[l,...$],z=yield Bh(t,x),ne=[],Q=((o=s.flip)==null?void 0:o.overflows)||[];if(h&&ne.push(z[S]),p){var B=function(me,Ce,Ge){Ge===void 0&&(Ge=!1);var re=Jl(me),ie=Uh(me),Ee=Dh(ie),At=ie==="x"?re===(Ge?"end":"start")?"right":"left":re==="start"?"bottom":"top";return Ce.reference[Ee]>Ce.floating[Ee]&&(At=fl(At)),[At,fl(At)]}(a,i,y);ne.push(z[B[0]],z[B[1]])}if(Q=[...Q,{placement:a,overflows:ne}],!ne.every(me=>me<=0)){var G,pe,Z=(((G=s.flip)==null?void 0:G.index)||0)+1,de=T[Z];if(de)return{data:{index:Z,overflows:Q},reset:{placement:de}};var Me=(pe=Q.filter(me=>me.overflows[0]<=0).sort((me,Ce)=>me.overflows[1]-Ce.overflows[1])[0])==null?void 0:pe.placement;if(!Me)switch(g){case"bestFit":var ue,ve=(ue=Q.filter(me=>{if(I){var Ce=Vs(me.placement);return Ce===O||Ce==="y"}return!0}).map(me=>[me.placement,me.overflows.filter(Ce=>Ce>0).reduce((Ce,Ge)=>Ce+Ge,0)]).sort((me,Ce)=>me[1]-Ce[1])[0])==null?void 0:ue[0];ve&&(Me=ve);break;case"initialPlacement":Me=l}if(a!==Me)return{reset:{placement:Me}}}return{}})()}};function cx(e){var t,r,o={autoUpdate:!0},a=e,s=c=>ge(ge(ge({},o),e||{}),c||{}),i=c=>{t&&r&&(a=s(c),((u,d,h)=>{var p=new Map,m=ge({platform:ox},h),g=ge(ge({},m.platform),{},{_c:p});return ex(u,d,ge(ge({},m),{},{platform:g}))})(t,r,a).then(u=>{var d;Object.assign(r.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=a)===null||d===void 0)&&d.onComputed&&a.onComputed(u)}))},l=c=>{vo(c.subscribe(u=>{t===void 0?(t=u,i()):(Object.assign(t,u),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,u)=>{var d;r=c,a=s(u),setTimeout(()=>i(u),0),i(u);var h=()=>{d&&(d(),d=void 0)},p=function(){var{autoUpdate:m}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a||{};h(),m!==!1&&function(){return Lp.apply(this,arguments)}().then(()=>ax(t,r,()=>i(a),m===!0?{}:m))};return d=p(),{update(m){i(m),d=p(m)},destroy(){h()}}},i]}function ux(e){var{loadOptions:t,filterText:r,items:o,multiple:a,value:s,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:h,label:p}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var m=o.filter(g=>{var b=u(g[p],r,g);return b&&a&&s!=null&&s.length&&(b=!s.some(j=>!!c&&j[i]===g[i])),b});return l&&(m=h(m)),m}function dx(e){return Kh.apply(this,arguments)}function Kh(){return(Kh=yt(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:a}=e,s=yield r(a).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(s&&!s.cancelled)return s?(s&&s.length>0&&typeof s[0]!="object"&&(s=o(s)),t("loaded",{items:s})):s=[],{filteredItems:s,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}bt(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var vx=Fa(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);bt(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var fx=Fa(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function ru(e){P(e,fx())}bt(`
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
`);var px=Fa('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');bt(`
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

    .svelte-82qwg8:not(.multi) > .value-container:where(.svelte-82qwg8) > input:where(.svelte-82qwg8) {
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

    .item.hover.svelte-82qwg8:not(.active) {
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
`);var hx=L('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div><!></div></div>'),gx=L('<div class="empty svelte-82qwg8">No options</div>'),mx=L('<div role="none"><!> <!> <!></div>'),bx=L('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>',1),jx=L('<div class="multi-item-clear svelte-82qwg8"><!></div>'),xx=L('<div role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>'),yx=L("<div><!></div>"),wx=L('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>'),kx=L('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>'),Cx=L('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>'),Sx=L('<input type="hidden" class="svelte-82qwg8">'),Ox=L('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>'),zx=L('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');function Wa(e,t){var r=function(D){var X={};for(var ke in D.children&&(X.default=!0),D.$$slots)X[ke]=!0;return X}(t);lt(t,!1);var o,a=M(),s=M(),i=M(),l=M(),c=M(),u=M(),d=M(),h=M(),p=M(),m=qj(),g=v(t,"justValue",12,null),b=v(t,"filter",8,ux),j=v(t,"getItems",8,dx),x=v(t,"id",8,null),S=v(t,"name",8,null),O=v(t,"container",12,void 0),C=v(t,"input",12,void 0),y=v(t,"multiple",8,!1),$=v(t,"multiFullItemClearable",8,!1),I=v(t,"disabled",8,!1),T=v(t,"focused",12,!1),z=v(t,"value",12,null),ne=v(t,"filterText",12,""),Q=v(t,"placeholder",8,"Please select"),B=v(t,"placeholderAlwaysShow",8,!1),G=v(t,"items",12,null),pe=v(t,"label",8,"label"),Z=v(t,"itemFilter",8,(D,X,ke)=>"".concat(D).toLowerCase().includes(X.toLowerCase())),de=v(t,"groupBy",8,void 0),Me=v(t,"groupFilter",8,D=>D),ue=v(t,"groupHeaderSelectable",8,!1),ve=v(t,"itemId",8,"value"),me=v(t,"loadOptions",8,void 0),Ce=v(t,"containerStyles",8,""),Ge=v(t,"hasError",8,!1),re=v(t,"filterSelectedItems",8,!0),ie=v(t,"required",8,!1),Ee=v(t,"closeListOnChange",8,!0),At=v(t,"clearFilterTextOnBlur",8,!0),te=v(t,"createGroupHeaderItem",8,(D,X)=>({value:D,[pe()]:D})),q=()=>n(d),ae=v(t,"searchable",8,!0),_=v(t,"inputStyles",8,""),je=v(t,"clearable",8,!0),Ke=v(t,"loading",12,!1),W=v(t,"listOpen",12,!1),V=v(t,"debounce",8,function(D){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(D,X)}),R=v(t,"debounceWait",8,300),Ze=v(t,"hideEmptyState",8,!1),wt=v(t,"inputAttributes",24,()=>({})),et=v(t,"listAutoWidth",8,!0),Xe=v(t,"showChevron",8,!1),De=v(t,"listOffset",8,5),_e=v(t,"hoverItemIndex",12,0),jt=v(t,"floatingConfig",24,()=>({})),_t=v(t,"class",8,""),Be=M(),be=M(),Ue=M(),ut=M(),ze=M();function mt(D){return D.map((X,ke)=>({index:ke,value:X,label:"".concat(X)}))}function tt(D){var X=[],ke={};D.forEach(rn=>{var Kt=de()(rn);X.includes(Kt)||(X.push(Kt),ke[Kt]=[],Kt&&ke[Kt].push(Object.assign(te()(Kt,rn),{id:Kt,groupHeader:!0,selectable:ue()}))),ke[Kt].push(Object.assign({groupItem:!!Kt},rn))});var Et=[];return Me()(X).forEach(rn=>{ke[rn]&&Et.push(...ke[rn])}),Et}function Fe(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,X=arguments.length>1?arguments[1]:void 0;_e(D<0?0:D),!X&&de()&&n(d)[_e()]&&!n(d)[_e()].selectable&&zn(1)}function H(){var D=!0;if(z()){var X=[],ke=[];z().forEach(Et=>{X.includes(Et[ve()])?D=!1:(X.push(Et[ve()]),ke.push(Et))}),D||z(ke)}return D}function Ie(D){var X=D?D[ve()]:z()[ve()];return G().find(ke=>ke[ve()]===X)}function He(D){return Tt.apply(this,arguments)}function Tt(){return(Tt=yt(function*(D){var X=z()[D];z().length===1?z(void 0):z(z().filter(ke=>ke!==X)),m("clear",X)})).apply(this,arguments)}function an(D){if(T())switch(D.stopPropagation(),D.key){case"Escape":D.preventDefault(),Bt();break;case"Enter":if(D.preventDefault(),W()){if(n(d).length===0)break;var X=n(d)[_e()];if(z()&&!y()&&z()[ve()]===X[ve()]){Bt();break}Qt(n(d)[_e()])}break;case"ArrowDown":D.preventDefault(),W()?zn(1):(W(!0),f(Be,void 0));break;case"ArrowUp":D.preventDefault(),W()?zn(-1):(W(!0),f(Be,void 0));break;case"Tab":if(W()&&T()){if(n(d).length===0||z()&&z()[ve()]===n(d)[_e()][ve()])return Bt();D.preventDefault(),Qt(n(d)[_e()]),Bt()}break;case"Backspace":if(!y()||ne().length>0)return;if(y()&&z()&&z().length>0){if(He(n(Be)!==void 0?n(Be):z().length-1),n(Be)===0||n(Be)===void 0)break;f(Be,z().length>n(Be)?n(Be)-1:void 0)}break;case"ArrowLeft":if(!z()||!y()||ne().length>0)return;n(Be)===void 0?f(Be,z().length-1):z().length>n(Be)&&n(Be)!==0&&f(Be,n(Be)-1);break;case"ArrowRight":if(!z()||!y()||ne().length>0||n(Be)===void 0)return;n(Be)===z().length-1?f(Be,void 0):n(Be)<z().length-1&&f(Be,n(Be)+1)}}function Ye(D){var X,ke;T()&&C()===((X=document)===null||X===void 0?void 0:X.activeElement)||(D&&m("focus",D),(ke=C())===null||ke===void 0||ke.focus(),T(!0))}function Vt(D){return Mn.apply(this,arguments)}function Mn(){return(Mn=yt(function*(D){var X;dt||(W()||T())&&(m("blur",D),Bt(),T(!1),f(Be,void 0),(X=C())===null||X===void 0||X.blur())})).apply(this,arguments)}function On(){if(!I())return ne().length>0?W(!0):void W(!W())}function Jt(){m("clear",z()),z(void 0),Bt(),Ye()}function Bt(){At()&&ne(""),W(!1)}Tj(yt(function*(){f(be,z()),f(Ue,ne()),f(ut,y())})),Tr(()=>{W()&&T(!0),T()&&C()&&C().focus()});var fn=v(t,"ariaValues",8,D=>"Option ".concat(D,", selected.")),sr=v(t,"ariaListOpen",8,(D,X)=>"You are currently focused on option ".concat(D,". There are ").concat(X," results available.")),Dn=v(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),cn,Le=M(null);function pn(){clearTimeout(cn),cn=setTimeout(()=>{dt=!1},100)}vo(()=>{var D;(D=n(Le))===null||D===void 0||D.remove()});var dt=!1;function Qt(D){D&&D.selectable!==!1&&function(X){if(X){ne("");var ke=Object.assign({},X);if(ke.groupHeader&&!ke.selectable)return;z(y()?z()?z().concat([ke]):[ke]:z(ke)),setTimeout(()=>{Ee()&&Bt(),f(Be,void 0),m("change",z()),m("select",X)})}}(D)}function bn(D){dt||_e(D)}function zn(D){if(n(d).filter(ke=>!Object.hasOwn(ke,"selectable")||ke.selectable===!0).length===0)return _e(0);D>0&&_e()===n(d).length-1?_e(0):D<0&&_e()===0?_e(n(d).length-1):_e(_e()+D);var X=n(d)[_e()];X&&X.selectable===!1&&(D!==1&&D!==-1||zn(D))}function wn(D,X,ke){if(!y())return X&&X[ke]===D[ke]}var _n=zr,Qn=zr;function zr(D){return{update(X){X.scroll&&(pn(),D.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var er=M({strategy:"absolute",placement:"bottom-start",middleware:[sx(De()),lx(),ix()],autoUpdate:!1}),[gr,xr,fr]=cx(n(er)),Wn=M(!0);U(()=>(E(G()),E(z())),()=>{G(),z()&&function(){if(typeof z()=="string"){var D=(G()||[]).find(X=>X[ve()]===z());z(D||{[ve()]:z(),label:z()})}else y()&&Array.isArray(z())&&z().length>0&&z(z().map(X=>typeof X=="string"?{value:X,label:X}:X))}()}),U(()=>(E(wt()),E(ae())),()=>{!wt()&&ae()||(f(ze,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},wt())),x()&&oo(ze,n(ze).id=x()),ae()||oo(ze,n(ze).readonly=!0))}),U(()=>E(y()),()=>{y()&&z()&&(Array.isArray(z())?z([...z()]):z([z()]))}),U(()=>(n(ut),E(y())),()=>{n(ut)&&!y()&&z()&&z(null)}),U(()=>(E(y()),E(z())),()=>{y()&&z()&&z().length>1&&H()}),U(()=>E(z()),()=>{z()&&(y()?JSON.stringify(z())!==JSON.stringify(n(be))&&H()&&m("input",z()):n(be)&&JSON.stringify(z()[ve()])===JSON.stringify(n(be)[ve()])||m("input",z()))}),U(()=>(E(z()),E(y()),n(be)),()=>{!z()&&y()&&n(be)&&m("input",z())}),U(()=>(E(T()),E(C())),()=>{!T()&&C()&&Bt()}),U(()=>(E(ne()),n(Ue)),()=>{ne()!==n(Ue)&&(me()||ne().length!==0)&&(me()?V()(yt(function*(){Ke(!0);var D=yield j()({dispatch:m,loadOptions:me(),convertStringItemsToObjects:mt,filterText:ne()});D?(Ke(D.loading),W(W()?D.listOpen:ne().length>0),T(W()&&D.focused),G(de()?tt(D.filteredItems):D.filteredItems)):(Ke(!1),T(!0),W(!0))}),R()):(W(!0),y()&&f(Be,void 0)))}),U(()=>(E(b()),E(me()),E(ne()),E(G()),E(y()),E(z()),E(ve()),E(de()),E(pe()),E(re()),E(Z())),()=>{f(d,b()({loadOptions:me(),filterText:ne(),items:G(),multiple:y(),value:z(),itemId:ve(),groupBy:de(),label:pe(),filterSelectedItems:re(),itemFilter:Z(),convertStringItemsToObjects:mt,filterGroupedItems:tt}))}),U(()=>(E(y()),E(W()),E(z()),n(d)),()=>{!y()&&W()&&z()&&n(d)&&Fe(n(d).findIndex(D=>D[ve()]===z()[ve()]),!0)}),U(()=>(E(W()),E(y())),()=>{W()&&y()&&_e(0)}),U(()=>E(ne()),()=>{ne()&&_e(0)}),U(()=>E(_e()),()=>{var D;D=_e(),m("hoverItem",D)}),U(()=>(E(y()),E(z())),()=>{f(a,y()?z()&&z().length>0:z())}),U(()=>(n(a),E(ne())),()=>{f(s,n(a)&&ne().length>0)}),U(()=>(n(a),E(je()),E(I()),E(Ke())),()=>{f(i,n(a)&&je()&&!I()&&!Ke())}),U(()=>(E(B()),E(y()),E(Q()),E(z())),()=>{var D;f(l,B()&&y()||y()&&((D=z())===null||D===void 0?void 0:D.length)===0?Q():z()?"":Q())}),U(()=>(E(z()),E(y())),()=>{var D,X;f(c,z()?(D=y(),X=void 0,X=D&&z().length>0?z().map(ke=>ke[pe()]).join(", "):z()[pe()],fn()(X)):"")}),U(()=>(n(d),E(_e()),E(T()),E(W())),()=>{f(u,function(){if(!n(d)||n(d).length===0)return"";var D=n(d)[_e()];if(W()&&D){var X=n(d)?n(d).length:0;return sr()(D[pe()],X)}return Dn()()}((n(d),_e(),T(),W())))}),U(()=>E(G()),()=>{(function(D){D&&D.length!==0&&!D.some(X=>typeof X!="object")&&z()&&(y()?!z().some(X=>!X||!X[ve()]):z()[ve()])&&(Array.isArray(z())?z(z().map(X=>Ie(X)||X)):z(Ie()||z()))})(G())}),U(()=>(E(y()),E(z()),E(ve())),()=>{g((y(),z(),ve(),y()?z()?z().map(D=>D[ve()]):null:z()?z()[ve()]:z()))}),U(()=>(E(y()),n(be),E(z())),()=>{y()||!n(be)||z()||m("input",z())}),U(()=>(E(W()),n(d),E(y()),E(z())),()=>{W()&&n(d)&&!y()&&!z()&&Fe()}),U(()=>n(d),()=>{(function(D){W()&&m("filter",D)})(n(d))}),U(()=>(E(O()),E(jt()),n(er)),()=>{O()&&jt()&&fr(Object.assign(n(er),jt()))}),U(()=>n(Le),()=>{f(h,!!n(Le))}),U(()=>(n(Le),E(W())),()=>{(function(D,X){if(!D||!X)return f(Wn,!0);setTimeout(()=>{f(Wn,!1)},0)})(n(Le),W())}),U(()=>(E(W()),E(O()),n(Le)),()=>{W()&&O()&&n(Le)&&function(){var{width:D}=O().getBoundingClientRect();oo(Le,n(Le).style.width=et()?D+"px":"auto")}()}),U(()=>E(_e()),()=>{f(p,_e())}),U(()=>(E(C()),E(W()),E(T())),()=>{C()&&W()&&!T()&&Ye()}),U(()=>(E(O()),E(jt())),()=>{var D;O()&&((D=jt())===null||D===void 0?void 0:D.autoUpdate)===void 0&&oo(er,n(er).autoUpdate=!0)}),ln(),pt();var tr,le=zx();se("click",aa,function(D){var X;W()||T()||!O()||O().contains(D.target)||(X=n(Le))!==null&&X!==void 0&&X.contains(D.target)||Vt()}),se("keydown",aa,an);var Nt=A(le),Un=D=>{var X,ke=mx(),Et=A(ke),rn=Te=>{var Tn=Lt();dr(Ne(Tn),t,"list-prepend",{},null),P(Te,Tn)};Y(Et,Te=>{r["list-prepend"]&&Te(rn)});var Kt=N(Et,2),Cn=Te=>{var Tn=Lt();dr(Ne(Tn),t,"list",{get filteredItems(){return n(d)}},null),P(Te,Tn)},Bn=Te=>{var Tn=Lt(),Ft=Ne(Tn),Er=dn=>{var gn=Lt();vr(Ne(gn),1,()=>n(d),jr,(Fn,k,J)=>{var ce,he=hx(),ye=A(he);dr(A(ye),t,"item",{get item(){return n(k)},index:J},Re=>{var Ae=Lr();we(()=>{var We;return gt(Ae,(We=n(k))===null||We===void 0?void 0:We[pe()])}),P(Re,Ae)}),Fr(ye,(Re,Ae)=>_n==null?void 0:_n(Re),()=>({scroll:wn(n(k),z(),ve()),listDom:n(h)})),Fr(ye,(Re,Ae)=>Qn==null?void 0:Qn(Re),()=>({scroll:n(p)===J,listDom:n(h)})),we((Re,Ae)=>{var We;return ce=St(ye,1,"item svelte-82qwg8",null,ce,{"list-group-title":n(k).groupHeader,active:Re,first:Ae,hover:_e()===J,"group-item":n(k).groupItem,"not-selectable":((We=n(k))===null||We===void 0?void 0:We.selectable)===!1})},[()=>wn(n(k),z(),ve()),()=>J===0],fe),se("mouseover",he,()=>bn(J)),se("focus",he,()=>bn(J)),se("click",he,jo(()=>function(Re){var{item:Ae,i:We}=Re;if((Ae==null?void 0:Ae.selectable)!==!1)return z()&&!y()&&z()[ve()]===Ae[ve()]?Bt():void(function(Ot){return Ot.groupHeader&&Ot.selectable||Ot.selectable||!Ot.hasOwnProperty("selectable")}(Ae)&&(_e(We),Qt(Ae)))}({item:n(k),i:J}))),se("keydown",he,ja(jo(function(Re){xi.call(this,t,Re)}))),P(Fn,he)}),P(dn,gn)},ft=dn=>{var gn=Lt(),Fn=Ne(gn),k=J=>{var ce=Lt();dr(Ne(ce),t,"empty",{},he=>{P(he,gx())}),P(J,ce)};Y(Fn,J=>{Ze()||J(k)},!0),P(dn,gn)};Y(Ft,dn=>{n(d).length>0?dn(Er):dn(ft,!1)},!0),P(Te,Tn)};Y(Kt,Te=>{r.list?Te(Cn):Te(Bn,!1)});var An=N(Kt,2),ir=Te=>{var Tn=Lt();dr(Ne(Tn),t,"list-append",{},null),P(Te,Tn)};Y(An,Te=>{r["list-append"]&&Te(ir)}),Fr(ke,Te=>xr==null?void 0:xr(Te)),Yn(ke,Te=>f(Le,Te),()=>n(Le)),Pr(()=>se("scroll",ke,pn)),Pr(()=>se("pointerup",ke,ja(jo(function(Te){xi.call(this,t,Te)})))),Pr(()=>se("mousedown",ke,ja(jo(function(Te){xi.call(this,t,Te)})))),we(()=>X=St(ke,1,"svelte-select-list svelte-82qwg8",null,X,{prefloat:n(Wn)})),P(D,ke)};Y(Nt,D=>{W()&&D(Un)});var K=N(Nt,2),xe=A(K),st=D=>{var X=bx(),ke=Ne(X),Et=A(ke),rn=A(N(ke,2));we(()=>{gt(Et,n(c)),gt(rn,n(u))}),P(D,X)};Y(xe,D=>{T()&&D(st)});var kt=N(K,2);dr(A(kt),t,"prepend",{},null);var nt=N(kt,2),qt=A(nt),tn=D=>{var X=Lt(),ke=Ne(X),Et=Kt=>{var Cn=Lt();vr(Ne(Cn),1,z,jr,(Bn,An,ir)=>{var Te,Tn=xx(),Ft=A(Tn);dr(A(Ft),t,"selection",{get selection(){return n(An)},index:ir},dn=>{var gn=Lr();we(()=>gt(gn,n(An)[pe()])),P(dn,gn)});var Er=N(Ft,2),ft=dn=>{var gn=jx();dr(A(gn),t,"multi-clear-icon",{},Fn=>{ru(Fn)}),se("pointerup",gn,ja(jo(()=>He(ir)))),P(dn,gn)};Y(Er,dn=>{I()||$()||!ru||dn(ft)}),we(()=>Te=St(Tn,1,"multi-item svelte-82qwg8",null,Te,{active:n(Be)===ir,disabled:I()})),se("click",Tn,ja(()=>$()?He(ir):{})),se("keydown",Tn,ja(jo(function(dn){xi.call(this,t,dn)}))),P(Bn,Tn)}),P(Kt,Cn)},rn=Kt=>{var Cn,Bn=yx();dr(A(Bn),t,"selection",{get selection(){return z()}},An=>{var ir=Lr();we(()=>gt(ir,z()[pe()])),P(An,ir)}),we(()=>Cn=St(Bn,1,"selected-item svelte-82qwg8",null,Cn,{"hide-selected-item":n(s)})),P(Kt,Bn)};Y(ke,Kt=>{y()?Kt(Et):Kt(rn,!1)}),P(D,X)};Y(qt,D=>{n(a)&&D(tn)});var Pt,Rt=N(qt,2);Yn(Rt,D=>C(D),()=>C());var rt=N(nt,2),at=A(rt),un=D=>{var X=wx();dr(A(X),t,"loading-icon",{},ke=>{(function(Et){P(Et,px())})(ke)}),P(D,X)};Y(at,D=>{Ke()&&D(un)});var Ct=N(at,2),kn=D=>{var X=kx();dr(A(X),t,"clear-icon",{},ke=>{ru(ke)}),se("click",X,Jt),P(D,X)};Y(Ct,D=>{n(i)&&D(kn)});var nn=N(Ct,2),Dt=D=>{var X=Cx();dr(A(X),t,"chevron-icon",{get listOpen(){return W()}},ke=>{(function(Et){P(Et,vx())})(ke)}),P(D,X)};Y(nn,D=>{Xe()&&D(Dt)});var hn=N(rt,2);dr(hn,t,"input-hidden",{get value(){return z()}},D=>{var X=Sx();we(ke=>{vn(X,"name",S()),Za(X,ke)},[()=>z()?JSON.stringify(z()):null],fe),P(D,X)});var Ut=N(hn,2),nr=D=>{var X=Lt();dr(Ne(X),t,"required",{get value(){return z()}},ke=>{P(ke,Ox())}),P(D,X)};return Y(Ut,D=>{!ie()||z()&&z().length!==0||D(nr)}),Pr(()=>se("pointerup",le,ja(On))),Yn(le,D=>O(D),()=>O()),Fr(le,D=>gr==null?void 0:gr(D)),we(()=>{var D;tr=St(le,1,"svelte-select ".concat((D=_t())!==null&&D!==void 0?D:""),"svelte-82qwg8",tr,{multi:y(),disabled:I(),focused:T(),"list-open":W(),"show-chevron":Xe(),error:Ge()}),vn(le,"style",Ce()),Pt=yl(Rt,Pt,ge(ge({readOnly:!ae()},n(ze)),{},{placeholder:n(l),style:_(),disabled:I()}),"svelte-82qwg8")}),se("keydown",Rt,an),se("blur",Rt,Vt),se("focus",Rt,Ye),Dl(Rt,ne),P(e,le),xt(t,"getFilteredItems",q),xt(t,"handleClear",Jt),ct({getFilteredItems:q,handleClear:Jt})}bt(`/* over all fonts, sizes, and colors */
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
}`);var Ex=L('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');function $x(e,t){var r,o,a,s,i;lt(t,!1);var l=M(void 0,!0),c=M(void 0,!0),u=M(void 0,!0),d=M(void 0,!0),h=M(void 0,!0),p=M(void 0,!0),m=Or("jsoneditor:TransformWizard"),g=v(t,"json",9),b=v(t,"queryOptions",29,()=>({})),j=v(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(re=>({value:re,label:re})),S=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],O=M((r=b())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?wa(b().filter.path):void 0,!0),C=M((o=x.find(re=>{var ie;return re.value===((ie=b().filter)===null||ie===void 0?void 0:ie.relation)}))!==null&&o!==void 0?o:x[0],!0),y=M(((a=b())===null||a===void 0||(a=a.filter)===null||a===void 0?void 0:a.value)||"",!0),$=M((s=b())!==null&&s!==void 0&&(s=s.sort)!==null&&s!==void 0&&s.path?wa(b().sort.path):void 0,!0),I=M((i=S.find(re=>{var ie;return re.value===((ie=b().sort)===null||ie===void 0?void 0:ie.direction)}))!==null&&i!==void 0?i:S[0],!0);U(()=>E(g()),()=>{f(l,Array.isArray(g()))}),U(()=>(n(l),E(g())),()=>{f(c,n(l)?Cu(g()):[])}),U(()=>(n(l),E(g())),()=>{f(u,n(l)?Cu(g(),!0):[])}),U(()=>(n(c),wa),()=>{f(d,n(c).map(wa))}),U(()=>(n(u),wa),()=>{f(h,n(u)?n(u).map(wa):[])}),U(()=>(E(b()),n(h),Zt),()=>{var re;f(p,(re=b())!==null&&re!==void 0&&(re=re.projection)!==null&&re!==void 0&&re.paths&&n(h)?b().projection.paths.map(ie=>n(h).find(Ee=>Zt(Ee.value,ie))).filter(ie=>!!ie):void 0)}),U(()=>n(O),()=>{var re,ie,Ee;ie=(re=n(O))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.filter)===null||Ee===void 0?void 0:Ee.path,ie)||(m("changeFilterPath",ie),b(Xo(b(),["filter","path"],ie,!0)),j()(b()))}),U(()=>n(C),()=>{var re,ie,Ee;ie=(re=n(C))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.filter)===null||Ee===void 0?void 0:Ee.relation,ie)||(m("changeFilterRelation",ie),b(Xo(b(),["filter","relation"],ie,!0)),j()(b()))}),U(()=>n(y),()=>{var re,ie;re=n(y),Zt((ie=b())===null||ie===void 0||(ie=ie.filter)===null||ie===void 0?void 0:ie.value,re)||(m("changeFilterValue",re),b(Xo(b(),["filter","value"],re,!0)),j()(b()))}),U(()=>n($),()=>{var re,ie,Ee;ie=(re=n($))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.sort)===null||Ee===void 0?void 0:Ee.path,ie)||(m("changeSortPath",ie),b(Xo(b(),["sort","path"],ie,!0)),j()(b()))}),U(()=>n(I),()=>{var re,ie,Ee;ie=(re=n(I))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.sort)===null||Ee===void 0?void 0:Ee.direction,ie)||(m("changeSortDirection",ie),b(Xo(b(),["sort","direction"],ie,!0)),j()(b()))}),U(()=>n(p),()=>{(function(re){var ie;Zt((ie=b())===null||ie===void 0||(ie=ie.projection)===null||ie===void 0?void 0:ie.paths,re)||(m("changeProjectionPaths",re),b(Xo(b(),["projection","paths"],re,!0)),j()(b()))})(n(p)?n(p).map(re=>re.value):void 0)}),ln(),pt(!0);var T=Ex(),z=A(T),ne=A(z),Q=N(A(ne)),B=A(Q),G=A(B);Wa(G,{class:"jse-filter-path",showChevron:!0,get items(){return n(d)},get value(){return n(O)},set value(re){f(O,re)},$$legacy:!0});var pe=N(G,2);Wa(pe,{class:"jse-filter-relation",showChevron:!0,clearable:!1,items:x,get value(){return n(C)},set value(re){f(C,re)},$$legacy:!0});var Z=N(pe,2),de=N(ne),Me=N(A(de)),ue=A(Me),ve=A(ue);Wa(ve,{class:"jse-sort-path",showChevron:!0,get items(){return n(d)},get value(){return n($)},set value(re){f($,re)},$$legacy:!0}),Wa(N(ve,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,items:S,get value(){return n(I)},set value(re){f(I,re)},$$legacy:!0});var me=N(de),Ce=N(A(me)),Ge=A(Ce);Wa(A(Ge),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(h)},get value(){return n(p)},set value(re){f(p,re)},$$legacy:!0}),Dl(Z,()=>n(y),re=>f(y,re)),P(e,T),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Mx=L('<button type="button"><!> </button>'),Ax=L('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');function Px(e,t){lt(t,!1);var r=v(t,"queryLanguages",8),o=v(t,"queryLanguageId",12),a=v(t,"onChangeQueryLanguage",8);pt();var s=Ax();vr(A(s),5,r,jr,(i,l)=>{var c,u=Mx(),d=A(u),h=g=>{en(g,{data:ip})},p=g=>{en(g,{data:lp})};Y(d,g=>{n(l).id===o()?g(h):g(p,!1)});var m=N(d);we(()=>{var g;c=St(u,1,"jse-query-language svelte-atm4um",null,c,{selected:n(l).id===o()}),vn(u,"title","Select ".concat(n(l).name," as query language")),gt(m," ".concat((g=n(l).name)!==null&&g!==void 0?g:""))}),se("click",u,()=>{return g=n(l).id,o(g),void a()(g);var g}),P(i,u)}),P(e,s),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Rx=L('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>'),Ix=L('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');function Ql(e,t){lt(t,!1);var r=v(t,"title",9,"Modal"),o=v(t,"fullScreenButton",9,!1),a=v(t,"fullscreen",13,!1),s=v(t,"onClose",9,void 0);pt(!0);var i=Ix(),l=A(i),c=A(l),u=N(l,2);dr(u,t,"actions",{},null);var d=N(u,2),h=m=>{var g=Rx(),b=A(g),j=fe(()=>a()?gm:mm);en(b,{get data(){return n(j)}}),se("click",g,()=>a(!a())),P(m,g)};Y(d,m=>{o()&&m(h)});var p=N(d,2);en(A(p),{data:oc}),we(()=>gt(c,r())),se("click",p,()=>{var m;return(m=s())===null||m===void 0?void 0:m()}),P(e,i),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var _x=L('<button slot="actions" type="button" title="Select a query language"><!></button>'),ou=Or("jsoneditor:AutoScrollHandler");function uf(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function a(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function s(l){r&&l===t||(i(),ou("startAutoScroll",l),t=l,r=setInterval(a,50))}function i(){r&&(ou("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return ou("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:u,bottom:d}=e.getBoundingClientRect();c<u?s(-o(u-c)):c>d?s(o(c-d)):i()}},onDragEnd:function(){i()}}}var qx=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,Yh=()=>{var e,t,r,o,a,s,i,l,c,u,d,h,p;function m(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function g(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function b(j){u||(u=j),g(s(d=j-u,r,l,c)),p=!0,d<c?requestAnimationFrame(b):function(){g(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof h=="function"&&h(),u=0,p=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,a=x.offset||0,h=x.callback,s=x.easing||qx,i=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof j){case"number":t=void 0,i=!1,o=r+j;break;case"object":o=m(t=j);break;case"string":t=document.querySelector(j),o=m(t)}switch(l=o-r+a,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}p?u=0:requestAnimationFrame(b)}};function Es(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var ws=Or("validation"),Tx={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function df(e,t,r,o){return Ed(e,t,r,o,Tx)}function Qh(e,t,r,o){if(ws("validateJSON"),!t)return[];if(r!==o){var a=r.stringify(e);return t(a!==void 0?o.parse(a):void 0)}return t(e)}function Nx(e,t,r,o){if(ws("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:So.info}]};if(e.length!==0)try{var a=Es(()=>r.parse(e),c=>ws("validate: parsed json in ".concat(c," ms")));if(!t)return;var s=r===o?a:Es(()=>o.parse(e),c=>ws("validate: parsed json with the validationParser in ".concat(c," ms"))),i=Es(()=>t(s),c=>ws("validate: validated json in ".concat(c," ms")));return Rn(i)?void 0:{validationErrors:i}}catch(c){var l=Es(()=>function(u,d){if(u.length>O0)return!1;try{return d.parse(To(u)),!0}catch{return!1}}(e,r),u=>ws("validate: checked whether repairable in ".concat(u," ms")));return{parseError:Us(e,c.message||c.toString()),isRepairable:l}}}var pl=Or("jsoneditor:FocusTracker");function _d(e){var t,{onMount:r,onDestroy:o,getWindow:a,hasFocus:s,onFocus:i,onBlur:l}=e,c=!1;function u(){var h=s();h&&(clearTimeout(t),c||(pl("focus"),i(),c=h))}function d(){c&&(clearTimeout(t),t=setTimeout(()=>{s()||(pl("blur"),c=!1,l())}))}r(()=>{pl("mount FocusTracker");var h=a();h&&(h.addEventListener("focusin",u,!0),h.addEventListener("focusout",d,!0))}),o(()=>{pl("destroy FocusTracker");var h=a();h&&(h.removeEventListener("focusin",u,!0),h.removeEventListener("focusout",d,!0))})}bt(`/* over all fonts, sizes, and colors */
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
}`);var Dx=L('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>'),Ux=L('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');function Mo(e,t){lt(t,!1);var r=v(t,"type",9,"success"),o=v(t,"icon",9,void 0),a=v(t,"message",9,void 0),s=v(t,"actions",25,()=>[]),i=v(t,"onClick",9,void 0),l=v(t,"onClose",9,void 0);l()&&vo(l()),pt(!0);var c,u=Ux(),d=A(u),h=A(d),p=A(h),m=b=>{en(b,{get data(){return o()}})};Y(p,b=>{o()&&b(m)});var g=N(p);vr(N(d,2),5,s,jr,(b,j)=>{var x=Dx(),S=A(x),O=y=>{en(y,{get data(){return n(j).icon}})};Y(S,y=>{n(j).icon&&y(O)});var C=N(S);we(()=>{var y;vn(x,"title",n(j).title),x.disabled=n(j).disabled,gt(C," ".concat((y=n(j).text)!==null&&y!==void 0?y:""))}),se("click",x,()=>{n(j).onClick&&n(j).onClick()}),se("mousedown",x,()=>{n(j).onMouseDown&&n(j).onMouseDown()}),P(b,x)}),we(()=>{var b,j;St(u,1,"jse-message jse-".concat((b=r())!==null&&b!==void 0?b:""),"svelte-czprfx"),c=St(d,1,"jse-text svelte-czprfx",null,c,{"jse-clickable":!!i()}),gt(g," ".concat((j=a())!==null&&j!==void 0?j:""))}),se("click",d,function(){i()&&i()()}),P(e,u),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Bx=L('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>'),Fx=L('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>'),Lx=L('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>'),Vx=L('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>'),Wx=L('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>'),Hx=L('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');function qd(e,t){lt(t,!1);var r=M(void 0,!0),o=v(t,"validationErrors",9),a=v(t,"selectError",9),s=M(!0,!0);function i(){f(s,!1)}function l(){f(s,!0)}U(()=>E(o()),()=>{f(r,o().length)}),ln(),pt(!0);var c=Lt(),u=Ne(c),d=h=>{var p=Hx(),m=A(p),g=j=>{var x=Vx(),S=A(x),O=A(S);vr(O,1,()=>ch(o(),100),jr,($,I,T)=>{var z=Fx(),ne=A(z);en(A(ne),{data:Xa});var Q=N(ne),B=A(Q),G=N(Q),pe=A(G),Z=A(N(G)),de=Me=>{var ue=Bx();en(A(ue),{data:Mm}),se("click",ue,jo(i)),P(Me,ue)};Y(Z,Me=>{T===0&&o().length>1&&Me(de)}),we(Me=>{var ue;St(z,1,"jse-validation-".concat((ue=n(I).severity)!==null&&ue!==void 0?ue:""),"svelte-1uindol"),gt(B,Me),gt(pe,n(I).message)},[()=>Co(n(I).path)],fe),se("click",z,()=>{setTimeout(()=>a()(n(I)))}),P($,z)});var C=N(O),y=$=>{var I=Lx(),T=N(A(I),2),z=A(T);we(()=>gt(z,"(and ".concat(n(r)-100," more errors)"))),P($,I)};Y(C,$=>{n(r)>100&&$(y)}),P(j,x)},b=j=>{var x=Wx(),S=A(x),O=A(S),C=A(O);en(A(C),{data:Xa});var y=A(N(C));en(A(N(y)),{data:mp}),we($=>{var I;St(O,1,"jse-validation-".concat($??""),"svelte-1uindol"),gt(y,"".concat((I=n(r))!==null&&I!==void 0?I:""," validation errors "))},[()=>{return $=o(),[So.error,So.warning,So.info].find(I=>$.some(T=>T.severity===I));var $}],fe),se("click",O,l),P(j,x)};Y(m,j=>{n(s)||n(r)===1?j(g):j(b,!1)}),P(h,p)};Y(u,h=>{Rn(o())||h(d)}),P(e,c),ct()}function Xl(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}bt(`/* over all fonts, sizes, and colors */
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
}`);var Jx=L('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');function Fi(e,t){lt(t,!1);var r=v(t,"className",8,void 0),o=v(t,"fullscreen",8,!1),a=v(t,"onClose",8),s=M();function i(){a()()}Tr(()=>n(s).showModal()),vo(()=>n(s).close()),pt();var l,c=Jx(),u=A(c);dr(A(u),t,"default",{},null),Yn(c,d=>f(s,d),()=>n(s)),Pr(()=>se("close",c,i)),Pr(()=>{return se("pointerdown",c,(d=i,function(){for(var h=arguments.length,p=new Array(h),m=0;m<h;m++)p[m]=arguments[m];p[0].target===this&&(d==null||d.apply(this,p))}));var d}),Pr(()=>se("cancel",c,ja(function(d){xi.call(this,t,d)}))),Fr(c,(d,h)=>Xl==null?void 0:Xl(d,h),()=>i),we(d=>l=St(c,1,Ua(d),"svelte-1s9c2ql",l,{"jse-fullscreen":o()}),[()=>ri("jse-modal",r())],fe),P(e,c),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Kx=L('<!> <div class="jse-modal-contents svelte-189qksl"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>',1);function Xh(e,t){lt(t,!1);var r=v(t,"onClose",9),o=xd()?"⌘":"Ctrl";pt(!0),Fi(e,{get onClose(){return r()},className:"jse-copy-paste",children:(a,s)=>{var i=Kx(),l=Ne(i);Ql(l,{title:"Copying and pasting",get onClose(){return r()}});var c=N(l,2),u=N(A(c),2),d=A(u);A(d).textContent="".concat(o??"","+C");var h=N(d,2);A(h).textContent="".concat(o??"","+X"),A(N(h,2)).textContent="".concat(o??"","+V"),se("click",A(N(u,2)),function(){for(var p,m=arguments.length,g=new Array(m),b=0;b<m;b++)g[b]=arguments[b];(p=r())===null||p===void 0||p.apply(this,g)}),P(a,i)},$$slots:{default:!0}}),ct()}bt(`/* over all fonts, sizes, and colors */
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
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last) {
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
}`);var Yx=L('<div class="jse-separator svelte-pf7s2l"></div>'),Qx=L('<div class="jse-space svelte-pf7s2l"></div>'),Xx=L('<button type="button"><!> <!></button>'),Gx=L('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');function kc(e,t){lt(t,!1);var r=v(t,"items",25,()=>[]);pt(!0);var o=Gx(),a=A(o);dr(a,t,"left",{},null);var s=N(a,2);vr(s,1,r,jr,(i,l)=>{var c=Lt(),u=Ne(c),d=p=>{P(p,Yx())},h=p=>{var m=Lt(),g=Ne(m),b=x=>{P(x,Qx())},j=x=>{var S=Lt(),O=Ne(S),C=$=>{var I=Xx(),T=A(I),z=B=>{en(B,{get data(){return n(l).icon}})};Y(T,B=>{n(l).icon&&B(z)});var ne=N(T,2),Q=B=>{var G=Lr();we(()=>gt(G,n(l).text)),P(B,G)};Y(ne,B=>{n(l).text&&B(Q)}),we(()=>{var B;St(I,1,"jse-button ".concat((B=n(l).className)!==null&&B!==void 0?B:""),"svelte-pf7s2l"),vn(I,"title",n(l).title),I.disabled=n(l).disabled||!1}),se("click",I,function(){for(var B,G=arguments.length,pe=new Array(G),Z=0;Z<G;Z++)pe[Z]=arguments[Z];(B=n(l).onClick)===null||B===void 0||B.apply(this,pe)}),P($,I)},y=$=>{var I=Lr();we(T=>gt(I,T),[()=>function(T){return console.error("Unknown type of menu item",T),"???"}(n(l))],fe),P($,I)};Y(O,$=>{Ci(n(l))?$(C):$(y,!1)},!0),P(x,S)};Y(g,x=>{wh(n(l))?x(b):x(j,!1)},!0),P(p,m)};Y(u,p=>{wl(n(l))?p(d):p(h,!1)}),P(i,c)}),dr(N(s,2),t,"right",{},null),P(e,o),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Zx=L('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>'),ey=L('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function ty(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=M(void 0,!0),c=v(t,"text",13,""),u=v(t,"readOnly",9,!1),d=v(t,"onParse",9),h=v(t,"onRepair",9),p=v(t,"onChange",9,void 0),m=v(t,"onApply",9),g=v(t,"onCancel",9),b=Or("jsoneditor:JSONRepair"),j=M(void 0,!0);function x(){if(n(j)&&n(r)){var Q=n(r).position!==void 0?n(r).position:0;n(j).setSelectionRange(Q,Q),n(j).focus()}}function S(){m()(c())}function O(){try{c(h()(c())),p()&&p()(c())}catch{}}var C=M(void 0,!0);U(()=>E(c()),()=>{f(r,function(Q){try{return void d()(Q)}catch(B){return Us(Q,B.message)}}(c()))}),U(()=>E(c()),()=>{f(o,function(Q){try{return h()(Q),!0}catch{return!1}}(c()))}),U(()=>n(r),()=>{b("error",n(r))}),U(()=>E(g()),()=>{f(C,[{type:"space"},{type:"button",icon:oc,title:"Cancel repair",className:"jse-cancel",onClick:g()}])}),U(()=>nv,()=>{f(a,{icon:nv,text:"Show me",title:"Scroll to the error location",onClick:x})}),U(()=>Ns,()=>{f(s,{icon:Ns,text:"Auto repair",title:"Automatically repair JSON",onClick:O})}),U(()=>(n(o),n(a),n(s)),()=>{f(i,n(o)?[n(a),n(s)]:[n(a)])}),U(()=>E(u()),()=>{f(l,[{icon:rd,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:S}])}),ln(),pt(!0);var y=ey(),$=A(y);kc($,{get items(){return n(C)},$$slots:{left:(Q,B)=>{P(Q,Zx())}}});var I=N($,2),T=Q=>{var B=fe(()=>"Cannot parse JSON: ".concat(n(r).message));Mo(Q,{type:"error",icon:Xa,get message(){return n(B)},get actions(){return n(i)}})},z=Q=>{Mo(Q,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};Y(I,Q=>{n(r)?Q(T):Q(z,!1)});var ne=N(I,2);Yn(ne,Q=>f(j,Q),()=>n(j)),we(()=>{ne.readOnly=u(),Za(ne,c())}),se("input",ne,function(Q){b("handleChange");var B=Q.target.value;c()!==B&&(c(B),p()&&p()(c()))}),P(e,y),ct()}function Gh(e,t){lt(t,!1);var r=v(t,"text",13),o=v(t,"onParse",9),a=v(t,"onRepair",9),s=v(t,"onApply",9),i=v(t,"onClose",9);function l(u){s()(u),i()()}function c(){i()()}pt(!0),Fi(e,{get onClose(){return i()},className:"jse-repair-modal",children:(u,d)=>{ty(u,{get onParse(){return o()},get onRepair(){return a()},onApply:l,onCancel:c,get text(){return r()},set text(h){r(h)},$$legacy:!0})},$$slots:{default:!0}}),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var ny=L('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>'),ry=L('<div role="none"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');function oy(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=v(t,"visibleSections",9),c=v(t,"sectionIndex",9),u=v(t,"total",9),d=v(t,"path",9),h=v(t,"selection",9),p=v(t,"onExpandSection",9),m=v(t,"context",9);U(()=>(E(l()),E(c())),()=>{f(r,l()[c()])}),U(()=>n(r),()=>{f(o,n(r).end)}),U(()=>(E(l()),E(c()),E(u())),()=>{f(a,l()[c()+1]?l()[c()+1].start:u())}),U(()=>(E(m()),E(h()),E(d()),n(o)),()=>{f(s,Di(m().getJson(),h(),d().concat(String(n(o)))))}),U(()=>(n(o),n(a)),()=>{f(i,function(O,C){var y={start:O,end:Math.min($u(O),C)},$=Math.max(Ul((O+C)/2),O),I={start:$,end:Math.min($u($),C)},T=Ul(C),z=T===C?T-_i:T,ne={start:Math.max(z,O),end:C},Q=[y],B=I.start>=y.end&&I.end<=ne.start;return B&&Q.push(I),ne.start>=(B?I.end:y.end)&&Q.push(ne),Q}(n(o),n(a)))}),ln(),pt(!0);var g,b=ry(),j=A(b),x=A(j),S=A(x);vr(N(x,2),1,()=>n(i),jr,(O,C)=>{var y=ny(),$=A(y);we(()=>{var I,T;return gt($,"show ".concat((I=n(C).start)!==null&&I!==void 0?I:"","-").concat((T=n(C).end)!==null&&T!==void 0?T:""))}),se("click",y,()=>p()(d(),n(C))),P(O,y)}),we(()=>{var O,C;g=St(b,1,"jse-collapsed-items svelte-1h6hzoq",null,g,{"jse-selected":n(s)}),Ps(b,"--level",d().length+2),gt(S,"Items ".concat((O=n(o))!==null&&O!==void 0?O:"","-").concat((C=n(a))!==null&&C!==void 0?C:""))}),se("mousemove",b,function(O){O.stopPropagation()}),P(e,b),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var ay=L('<button type="button"><!></button>');function xa(e,t){lt(t,!1);var r=v(t,"root",9,!1),o=v(t,"insert",9,!1),a=v(t,"selected",9),s=v(t,"onContextMenu",9);pt(!0);var i,l=ay();vn(l,"title",wd),en(A(l),{data:_a}),we(()=>i=St(l,1,"jse-context-menu-pointer svelte-137iwnw",null,i,{"jse-root":r(),"jse-insert":o(),"jse-selected":a()})),se("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&s()({anchor:u,left:0,top:0,width:ea,height:Zo,offsetTop:2,offsetLeft:0,showTip:!0})}),P(e,l),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var sy=L('<div role="none" data-type="selectable-key"><!></div>'),iy=L("<!> <!>",1),ly=L('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function Zh(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"path",9),s=v(t,"value",9),i=v(t,"context",9),l=v(t,"enforceString",9),c=v(t,"selection",9),u=v(t,"searchResultItems",9);U(()=>(E(c()),Kr),()=>{f(r,En(c())&&Kr(c()))}),U(()=>(E(i()),E(a()),E(s()),E(l()),n(r),E(c()),E(u())),()=>{f(o,i().onRenderValue({path:a(),value:s(),mode:i().mode,readOnly:i().readOnly,enforceString:l(),isEditing:n(r),parser:i().parser,normalization:i().normalization,selection:c(),searchResultItems:u(),onPatch:i().onPatch,onPasteJson:i().onPasteJson,onSelect:i().onSelect,onFind:i().onFind,findNextInside:i().findNextInside,focus:i().focus}))}),ln(),pt(!0);var d=Lt();vr(Ne(d),1,()=>n(o),jr,(h,p)=>{var m=Lt(),g=Ne(m),b=x=>{var S=ly(),O=fe(()=>n(p).action);Fr(S,(C,y)=>{var $;return($=n(O))===null||$===void 0?void 0:$(C,y)},()=>n(p).props),P(x,S)},j=x=>{var S=Lt();rh(Ne(S),()=>n(p).component,(O,C)=>{C(O,Aa(()=>n(p).props))}),P(x,S)};Y(g,x=>{R0(n(p))?x(b):x(j,!1)}),P(h,m)}),P(e,d),ct()}var cy={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function au(e){var{json:t,selection:r,deltaY:o,items:a}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var s=o<0?function(d){for(var{json:h,items:p,selection:m,deltaY:g}=d,b=ta(h,m),j=p.findIndex($=>Zt($.path,b)),x=()=>{var $;return($=p[S-1])===null||$===void 0?void 0:$.height},S=j,O=0;x()!==void 0&&Math.abs(g)>O+x()/2;)O+=x(),S-=1;var C=p[S].path,y=S-j;return S!==j&&p[S]!==void 0?{beforePath:C,offset:y}:void 0}({json:t,selection:r,deltaY:o,items:a}):function(d){for(var h,{json:p,items:m,selection:g,deltaY:b}=d,j=Ia(p,g),x=m.findIndex(ne=>Zt(ne.path,j)),S=0,O=x,C=()=>{var ne;return(ne=m[O+1])===null||ne===void 0?void 0:ne.height};C()!==void 0&&Math.abs(b)>S+C()/2;)S+=C(),O+=1;var y=on(j),$=Je(p,y),I=Array.isArray($)?O:O+1,T=(h=m[I])===null||h===void 0?void 0:h.path,z=O-x;return T?{beforePath:T,offset:z}:{append:!0,offset:z}}({json:t,selection:r,deltaY:o,items:a});if(!s||s.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(d,h,p){if(!h)return[];var m="beforePath"in p?p.beforePath:void 0,g="append"in p?p.append:void 0,b=on(Qe(h)),j=Je(d,b);if(!(g||m&&da(m,b)&&m.length>b.length))return[];var x=ta(d,h),S=Ia(d,h),O=Ht(x),C=Ht(S),y=m?m[b.length]:void 0;if(!Mr(j)){if(Cr(j)){var $=Rr(O),I=Rr(C),T=y!==void 0?Rr(y):j.length;return Pm(I-$+1,T<$?G=>({op:"move",from:zt(b.concat(String($+G))),path:zt(b.concat(String(T+G)))}):()=>({op:"move",from:zt(b.concat(String($))),path:zt(b.concat(String(T)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var z=Object.keys(j),ne=z.indexOf(O),Q=z.indexOf(C),B=g?z.length:y!==void 0?z.indexOf(y):-1;return ne!==-1&&Q!==-1&&B!==-1?B>ne?[...z.slice(ne,Q+1),...z.slice(B,z.length)].map(G=>ns(b,G)):[...z.slice(B,ne),...z.slice(Q+1,z.length)].map(G=>ns(b,G)):[]}(t,r,s),l=on(ta(t,r)),c=Je(t,l);if(Array.isArray(c)){var u=function(d){var h,p,{items:m,json:g,selection:b,offset:j}=d,x=ta(g,b),S=Ia(g,b),O=m.findIndex(I=>Zt(I.path,x)),C=m.findIndex(I=>Zt(I.path,S)),y=(h=m[O+j])===null||h===void 0?void 0:h.path,$=(p=m[C+j])===null||p===void 0?void 0:p.path;return Ur(y,$)}({items:a,json:t,selection:r,offset:s.offset});return{operations:i,updatedSelection:u,offset:s.offset}}return{operations:i,updatedSelection:void 0,offset:s.offset}}bt(`/* over all fonts, sizes, and colors */
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
}`);var uy=L('<button type="button"><!></button>');function qs(e,t){lt(t,!1);var r=M(),o=Ba("absolute-popup"),a=v(t,"validationError",8),s=v(t,"onExpand",8);U(()=>E(a()),()=>{f(r,P0(a())&&a().isChildError?"Contains invalid data":a().message)}),ln(),pt();var i=uy();en(A(i),{data:Xa}),Pr(()=>se("click",i,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=s())===null||l===void 0||l.apply(this,u)})),Fr(i,(l,c)=>Ls==null?void 0:Ls(l,c),()=>ge({text:n(r)},o)),we(()=>{var l;return St(i,1,"jse-validation-".concat((l=a().severity)!==null&&l!==void 0?l:""),"svelte-1a8aobl")}),P(e,i),ct()}bt(`/* over all fonts, sizes, and colors */
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
.jse-json-node.jse-root.svelte-wovgt4 > .jse-contents-outer:where(.svelte-wovgt4) > .jse-contents:where(.svelte-wovgt4) {
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
.jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4) .jse-meta:where(.svelte-wovgt4) > .jse-meta-inner:where(.svelte-wovgt4) {
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
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
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
}`);var Hn=pc(()=>cy),dy=L('<div class="jse-separator svelte-wovgt4">:</div>'),vy=L('<div class="jse-bracket svelte-wovgt4">[</div> <span class="jse-tag jse-expanded svelte-wovgt4"> </span> &nbsp;',1),fy=L('<div class="jse-bracket svelte-wovgt4">[</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">]</div>',1),py=L('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),hy=L('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),gy=L('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),my=L('<div data-type="insert-selection-area-inside"><!></div>'),by=L('<div slot="identifier" class="jse-identifier svelte-wovgt4"><div class="jse-index svelte-wovgt4"> </div></div>'),jy=L("<!> <!>",1),xy=L('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),yy=L('<div class="jse-items svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><span class="jse-bracket svelte-wovgt4">]</span></div> <!></div>',1),wy=L('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4"><div class="jse-meta-inner svelte-wovgt4" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),ky=L('<div class="jse-separator svelte-wovgt4">:</div>'),Cy=L('<div class="jse-bracket jse-expanded svelte-wovgt4">&lbrace;</div>'),Sy=L('<div class="jse-bracket svelte-wovgt4">&lbrace;</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">&rbrace;</div>',1),Oy=L('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),zy=L('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),Ey=L('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),$y=L('<div data-type="insert-selection-area-inside"><!></div>'),My=L('<div slot="identifier"><!></div>'),Ay=L('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Py=L('<div class="jse-props svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><div class="jse-bracket svelte-wovgt4">&rbrace;</div></div> <!></div>',1),Ry=L('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4" data-type="selectable-value"><div class="jse-meta-inner svelte-wovgt4"><!></div></div> <!></div> <!> <!></div> <!>',1),Iy=L('<div class="jse-separator svelte-wovgt4">:</div>'),_y=L('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),qy=L('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Ty=L('<div class="jse-contents-outer svelte-wovgt4"><div class="jse-contents svelte-wovgt4"><!> <!> <div class="jse-value-outer svelte-wovgt4"><!></div> <!></div> <!> <!></div>'),Ny=L('<div data-type="insert-selection-area-after"><!></div>'),Dy=L('<div role="treeitem" tabindex="-1"><!> <!></div>');function Du(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"pointer",9),s=v(t,"value",9),i=v(t,"state",9),l=v(t,"validationErrors",9),c=v(t,"searchResults",9),u=v(t,"selection",9),d=v(t,"context",9),h=v(t,"onDragSelectionStart",9),p=Or("jsoneditor:JSONNode"),m=M(void 0,!0),g=void 0,b=M(void 0,!0),j=M(void 0,!0),x=M(void 0,!0),S=M(void 0,!0),O=M(void 0,!0),C=M(void 0,!0),y=M(void 0,!0);function $(te){te.stopPropagation();var q=yd(te);d().onExpand(n(j),!n(x),q)}function I(te){te.stopPropagation(),d().onExpand(n(j),!0)}function T(te,q){var ae=el(n(j),Object.keys(s()),te,q);return d().onPatch(ae),Ht(qo(ae[0].path))}function z(te){d().onDrag(te)}function ne(te){Hn().selecting&&(Hn(Hn().selecting=!1),te.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",z,!0),document.removeEventListener("mouseup",ne)}function Q(){var te;return((te=d().findElement([]))===null||te===void 0||(te=te.getBoundingClientRect())===null||te===void 0?void 0:te.top)||0}function B(te,q){var ae=Q()-te.initialContentTop;return q.clientY-te.initialClientY-ae}function G(te){if(!d().readOnly&&u()){var q=on(Qe(u()));if(Zt(n(j),q)){var ae=function(V,R){var Ze=[];function wt(Ue){var ut=n(j).concat(Ue),ze=d().findElement(ut);ze!==void 0&&Ze.push({path:ut,height:ze.clientHeight})}if(Array.isArray(s())){var et=d().getJson();if(et===void 0)return;var Xe=ta(et,V),De=Ia(et,V),_e=parseInt(Ht(Xe),10),jt=parseInt(Ht(De),10),_t=R.find(Ue=>_e>=Ue.start&&jt<=Ue.end);if(!_t)return;var{start:Be,end:be}=_t;lh(Be,Math.min(s().length,be),Ue=>wt(String(Ue)))}else Object.keys(s()).forEach(wt);return Ze}(u(),n(O)||Rs);if(p("dragSelectionStart",{selection:u(),items:ae}),ae){var _=d().getJson();if(_!==void 0){var je=ta(_,u()),Ke=ae.findIndex(V=>Zt(V.path,je)),{offset:W}=au({json:_,selection:d().getSelection(),deltaY:0,items:ae});f(b,{initialTarget:te.target,initialClientY:te.clientY,initialContentTop:Q(),selectionStartIndex:Ke,selectionItemsCount:Ra(_,u()).length,items:ae,offset:W,didMoveItems:!1}),Hn(Hn().dragging=!0),document.addEventListener("mousemove",pe,!0),document.addEventListener("mouseup",Z)}}else p("Cannot drag the current selection (probably spread over multiple sections)")}else h()(te)}}function pe(te){if(n(b)){var q=d().getJson();if(q===void 0)return;var ae=B(n(b),te),{offset:_}=au({json:q,selection:d().getSelection(),deltaY:ae,items:n(b).items});_!==n(b).offset&&(p("drag selection",_,ae),f(b,ge(ge({},n(b)),{},{offset:_,didMoveItems:!0})))}}function Z(te){if(n(b)){var q=d().getJson();if(q===void 0)return;var ae=B(n(b),te),{operations:_,updatedSelection:je}=au({json:q,selection:d().getSelection(),deltaY:ae,items:n(b).items});if(_)d().onPatch(_,(V,R)=>({state:R,selection:je??u()}));else if(te.target===n(b).initialTarget&&!n(b).didMoveItems){var Ke=Vc(te.target),W=xh(te.target);W&&d().onSelect(Yv(Ke,W))}f(b,void 0),Hn(Hn().dragging=!1),document.removeEventListener("mousemove",pe,!0),document.removeEventListener("mouseup",Z)}}function de(te){te.shiftKey||(te.stopPropagation(),te.preventDefault(),d().onSelect(fa(n(j))))}function Me(te){te.shiftKey||(te.stopPropagation(),te.preventDefault(),d().onSelect(ia(n(j))))}function ue(te){d().onSelect(fa(n(j))),d().onContextMenu(te)}function ve(te){d().onSelect(ia(n(j))),d().onContextMenu(te)}U(()=>E(a()),()=>{f(j,qo(a()))}),U(()=>E(a()),()=>{f(r,encodeURIComponent(a()))}),U(()=>E(i()),()=>{f(x,!!es(i())&&i().expanded)}),U(()=>(E(s()),E(i())),()=>{f(S,sa(s(),i(),[]))}),U(()=>E(i()),()=>{f(O,qr(i())?i().visibleSections:void 0)}),U(()=>E(l()),()=>{var te;f(C,(te=l())===null||te===void 0?void 0:te.validationError)}),U(()=>(E(d()),E(u()),n(j)),()=>{f(y,Di(d().getJson(),u(),n(j)))}),U(()=>n(j),()=>{f(o,n(j).length===0)}),ln(),pt(!0);var me,Ce=Dy(),Ge=A(Ce),re=te=>{var q=wy(),ae=Ne(q),_=A(ae),je=A(_),Ke=A(je),W=H=>{en(H,{data:_a})},V=H=>{en(H,{data:Ei})};Y(Ke,H=>{n(x)?H(W):H(V,!1)});var R=N(je,2);dr(R,t,"identifier",{},null);var Ze=N(R,2),wt=H=>{P(H,dy())};Y(Ze,H=>{n(o)||H(wt)});var et=N(Ze,2),Xe=A(et),De=A(Xe),_e=H=>{var Ie=vy(),He=A(N(Ne(Ie),2));we(()=>{var Tt,an;return gt(He,"".concat((Tt=s().length)!==null&&Tt!==void 0?Tt:"",`
                `).concat((an=s().length===1?"item":"items")!==null&&an!==void 0?an:""))}),P(H,Ie)},jt=H=>{var Ie=fy(),He=N(Ne(Ie),2),Tt=A(He);we(()=>{var an,Ye;return gt(Tt,"".concat((an=s().length)!==null&&an!==void 0?an:"",`
                `).concat((Ye=s().length===1?"item":"items")!==null&&Ye!==void 0?Ye:""))}),se("click",He,I),P(H,Ie)};Y(De,H=>{n(x)?H(_e):H(jt,!1)});var _t=N(et,2),Be=H=>{var Ie=py();xa(A(Ie),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(H,Ie)};Y(_t,H=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Kr(u())&&Zt(Qe(u()),n(j))&&H(Be)});var be=N(_,2),Ue=H=>{qs(H,{get validationError(){return n(C)},onExpand:I})};Y(be,H=>{!n(C)||n(x)&&n(C).isChildError||H(Ue)});var ut=N(be,2),ze=H=>{var Ie=hy();se("click",Ie,de),P(H,Ie)},mt=H=>{var Ie=gy();se("click",Ie,Me),P(H,Ie)};Y(ut,H=>{n(x)?H(ze):H(mt,!1)});var tt=N(ae,2),Fe=H=>{var Ie=yy(),He=Ne(Ie),Tt=A(He),an=On=>{var Jt,Bt=my();vn(Bt,"title",Hc);var fn=A(Bt),sr=fe(()=>n(y)&&_r(u()));xa(fn,{insert:!0,get selected(){return n(sr)},onContextMenu:ue}),we(Dn=>{Jt=St(Bt,1,"jse-insert-area jse-inside svelte-wovgt4",null,Jt,{"jse-hovered":n(m)===pi,"jse-selected":Dn}),Ps(Bt,"--level",n(j).length+1)},[()=>n(y)&&_r(u())],fe),P(On,Bt)};Y(Tt,On=>{!d().readOnly&&(n(m)===pi||n(y)&&_r(u()))&&On(an)}),vr(N(Tt,2),1,()=>n(O)||Rs,jr,(On,Jt,Bt)=>{var fn=jy(),sr=Ne(fn);vr(sr,1,()=>function(Le,pn,dt){var Qt=pn.start,bn=Math.min(pn.end,Le.length),zn=jp(Qt,bn);return dt&&dt.offset!==0?Mv(zn,dt.selectionStartIndex,dt.selectionItemsCount,dt.offset).map((wn,_n)=>({index:wn,gutterIndex:_n})):zn.map(wn=>({index:wn,gutterIndex:wn}))}(s(),n(Jt),n(b)),Le=>Le.index,(Le,pn)=>{var dt=Lt(),Qt=fe(()=>qr(l())?l().items[n(pn).index]:void 0),bn=fe(()=>Qv(d().getJson(),u(),n(j).concat(String(n(pn).index)))),zn=Ne(dt),wn=fe(()=>rv(a(),n(pn).index)),_n=fe(()=>qr(i())?i().items[n(pn).index]:void 0),Qn=fe(()=>qr(c())?c().items[n(pn).index]:void 0);Du(zn,{get value(){return s()[n(pn).index]},get pointer(){return n(wn)},get state(){return n(_n)},get validationErrors(){return n(Qt)},get searchResults(){return n(Qn)},get selection(){return n(bn)},get context(){return d()},onDragSelectionStart:G,$$slots:{identifier:(zr,er)=>{var gr=by(),xr=A(gr),fr=A(xr);we(()=>gt(fr,n(pn).gutterIndex)),P(zr,gr)}}}),P(Le,dt)});var Dn=N(sr,2),cn=Le=>{var pn=fe(()=>n(O)||Rs);oy(Le,{get visibleSections(){return n(pn)},sectionIndex:Bt,get total(){return s().length},get path(){return n(j)},get onExpandSection(){return d().onExpandSection},get selection(){return u()},get context(){return d()}})};Y(Dn,Le=>{n(Jt).end<s().length&&Le(cn)}),P(On,fn)});var Ye=N(He,2),Vt=N(A(Ye),2),Mn=On=>{var Jt=xy();se("click",Jt,Me),P(On,Jt)};Y(Vt,On=>{n(o)||On(Mn)}),P(H,Ie)};Y(tt,H=>{n(x)&&H(Fe)}),se("click",je,$),P(te,q)},ie=te=>{var q=Lt(),ae=Ne(q),_=Ke=>{var W=Ry(),V=Ne(W),R=A(V),Ze=A(R),wt=A(Ze),et=Ye=>{en(Ye,{data:_a})},Xe=Ye=>{en(Ye,{data:Ei})};Y(wt,Ye=>{n(x)?Ye(et):Ye(Xe,!1)});var De=N(Ze,2);dr(De,t,"identifier",{},null);var _e=N(De,2),jt=Ye=>{P(Ye,ky())};Y(_e,Ye=>{n(o)||Ye(jt)});var _t=N(_e,2),Be=A(_t),be=A(Be),Ue=Ye=>{P(Ye,Cy())},ut=Ye=>{var Vt=Sy(),Mn=N(Ne(Vt),2),On=A(Mn);we((Jt,Bt)=>gt(On,"".concat(Jt??"",`
                `).concat(Bt??"")),[()=>Object.keys(s()).length,()=>Object.keys(s()).length===1?"prop":"props"],fe),se("click",Mn,I),P(Ye,Vt)};Y(be,Ye=>{n(x)?Ye(Ue):Ye(ut,!1)});var ze=N(_t,2),mt=Ye=>{var Vt=Oy();xa(A(Vt),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(Ye,Vt)};Y(ze,Ye=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Kr(u())&&Zt(Qe(u()),n(j))&&Ye(mt)});var tt=N(R,2),Fe=Ye=>{qs(Ye,{get validationError(){return n(C)},onExpand:I})};Y(tt,Ye=>{!n(C)||n(x)&&n(C).isChildError||Ye(Fe)});var H=N(tt,2),Ie=Ye=>{var Vt=zy();se("click",Vt,de),P(Ye,Vt)},He=Ye=>{var Vt=Lt(),Mn=Ne(Vt),On=Jt=>{var Bt=Ey();se("click",Bt,Me),P(Jt,Bt)};Y(Mn,Jt=>{n(o)||Jt(On)},!0),P(Ye,Vt)};Y(H,Ye=>{n(x)?Ye(Ie):Ye(He,!1)});var Tt=N(V,2),an=Ye=>{var Vt=Py(),Mn=Ne(Vt),On=A(Mn),Jt=Dn=>{var cn,Le=$y();vn(Le,"title",Hc);var pn=A(Le),dt=fe(()=>n(y)&&_r(u()));xa(pn,{insert:!0,get selected(){return n(dt)},onContextMenu:ue}),we(Qt=>{cn=St(Le,1,"jse-insert-area jse-inside svelte-wovgt4",null,cn,{"jse-hovered":n(m)===pi,"jse-selected":Qt}),Ps(Le,"--level",n(j).length+1)},[()=>n(y)&&_r(u())],fe),P(Dn,Le)};Y(On,Dn=>{!d().readOnly&&(n(m)===pi||n(y)&&_r(u()))&&Dn(Jt)}),vr(N(On,2),1,()=>function(Dn,cn){var Le=Object.keys(Dn);return cn&&cn.offset!==0?Mv(Le,cn.selectionStartIndex,cn.selectionItemsCount,cn.offset):Le}(s(),n(b)),jr,(Dn,cn)=>{var Le=Lt(),pn=fe(()=>rv(a(),n(cn))),dt=fe(()=>zo(c())?c().properties[n(cn)]:void 0),Qt=fe(()=>zo(l())?l().properties[n(cn)]:void 0),bn=fe(()=>n(j).concat(n(cn))),zn=fe(()=>Qv(d().getJson(),u(),n(bn))),wn=Ne(Le),_n=fe(()=>zo(i())?i().properties[n(cn)]:void 0);Du(wn,{get value(){return s()[n(cn)]},get pointer(){return n(pn)},get state(){return n(_n)},get validationErrors(){return n(Qt)},get searchResults(){return n(dt)},get selection(){return n(zn)},get context(){return d()},onDragSelectionStart:G,$$slots:{identifier:(Qn,zr)=>{var er,gr=My(),xr=A(gr),fr=fe(()=>{return Wn=n(dt),(tr=Nv(Wn)?Wn.searchResults.filter(le=>le.field===Oo.key):void 0)&&tr.length>0?tr:void 0;var Wn,tr});(function(Wn,tr){lt(tr,!1);var le=M(void 0,!0),Nt=M(void 0,!0),Un=v(tr,"pointer",9),K=v(tr,"key",9),xe=v(tr,"selection",9),st=v(tr,"searchResultItems",9),kt=v(tr,"onUpdateKey",9),nt=v(tr,"context",9),qt=M(void 0,!0);function tn(Dt){n(Nt)||nt().readOnly||(Dt.preventDefault(),nt().onSelect(Ad(n(qt))))}function Pt(Dt,hn){var Ut=kt()(K(),nt().normalization.unescapeValue(Dt)),nr=on(n(qt)).concat(Ut);nt().onSelect(hn===Pa.nextInside?Yt(nr):va(nr)),hn!==Pa.self&&nt().focus()}function Rt(){nt().onSelect(va(n(qt))),nt().focus()}U(()=>E(Un()),()=>{f(qt,qo(Un()))}),U(()=>(E(xe()),n(qt)),()=>{f(le,Sr(xe())&&Zt(xe().path,n(qt)))}),U(()=>(n(le),E(xe())),()=>{f(Nt,n(le)&&Kr(xe()))}),ln(),pt(!0);var rt=iy(),at=Ne(rt),un=Dt=>{var hn=fe(()=>nt().normalization.escapeValue(K())),Ut=fe(()=>Kr(xe())?xe().initialValue:void 0);Ah(Dt,{get value(){return n(hn)},get initialValue(){return n(Ut)},label:"Edit key",shortText:!0,onChange:Pt,onCancel:Rt,get onFind(){return nt().onFind}})},Ct=Dt=>{var hn,Ut=sy(),nr=A(Ut),D=ke=>{var Et=fe(()=>nt().normalization.escapeValue(K()));Th(ke,{get text(){return n(Et)},get searchResultItems(){return st()}})},X=ke=>{var Et=Lr();we(rn=>gt(Et,rn),[()=>mc(nt().normalization.escapeValue(K()))],fe),P(ke,Et)};Y(nr,ke=>{st()?ke(D):ke(X,!1)}),we(()=>hn=St(Ut,1,"jse-key svelte-2iqnqn",null,hn,{"jse-empty":K()===""})),se("dblclick",Ut,tn),P(Dt,Ut)};Y(at,Dt=>{!nt().readOnly&&n(Nt)?Dt(un):Dt(Ct,!1)});var kn=N(at,2),nn=Dt=>{xa(Dt,{selected:!0,get onContextMenu(){return nt().onContextMenu}})};Y(kn,Dt=>{nt().readOnly||!n(le)||n(Nt)||Dt(nn)}),P(Wn,rt),ct()})(xr,{get pointer(){return n(pn)},get key(){return n(cn)},get selection(){return n(zn)},get searchResultItems(){return n(fr)},get context(){return d()},onUpdateKey:T}),we(Wn=>er=St(gr,1,"jse-key-outer svelte-wovgt4",null,er,{"jse-selected-key":Wn}),[()=>Sr(n(zn))&&Zt(n(zn).path,n(bn))],fe),P(Qn,gr)}}}),P(Dn,Le)});var Bt=N(Mn,2),fn=N(A(Bt),2),sr=Dn=>{var cn=Ay();se("click",cn,Me),P(Dn,cn)};Y(fn,Dn=>{n(o)||Dn(sr)}),P(Ye,Vt)};Y(Tt,Ye=>{n(x)&&Ye(an)}),se("click",Ze,$),P(Ke,W)},je=Ke=>{var W=Ty(),V=A(W),R=A(V);dr(R,t,"identifier",{},null);var Ze=N(R,2),wt=ze=>{P(ze,Iy())};Y(Ze,ze=>{n(o)||ze(wt)});var et=N(Ze,2),Xe=A(et),De=fe(()=>n(y)?u():void 0),_e=fe(()=>{return ze=c(),(mt=Nv(ze)?ze.searchResults.filter(tt=>tt.field===Oo.value):void 0)&&mt.length>0?mt:void 0;var ze,mt});Zh(Xe,{get path(){return n(j)},get value(){return s()},get enforceString(){return n(S)},get selection(){return n(De)},get searchResultItems(){return n(_e)},get context(){return d()}});var jt=N(et,2),_t=ze=>{var mt=_y();xa(A(mt),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(ze,mt)};Y(jt,ze=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Kr(u())&&Zt(Qe(u()),n(j))&&ze(_t)});var Be=N(V,2),be=ze=>{qs(ze,{get validationError(){return n(C)},onExpand:I})};Y(Be,ze=>{n(C)&&ze(be)});var Ue=N(Be,2),ut=ze=>{var mt=qy();se("click",mt,Me),P(ze,mt)};Y(Ue,ze=>{n(o)||ze(ut)}),P(Ke,W)};Y(ae,Ke=>{yn(s())?Ke(_):Ke(je,!1)},!0),P(te,q)};Y(Ge,te=>{Array.isArray(s())?te(re):te(ie,!1)});var Ee=N(Ge,2),At=te=>{var q,ae=Ny();vn(ae,"title",Hc);var _=A(ae),je=fe(()=>n(y)&&uo(u()));xa(_,{insert:!0,get selected(){return n(je)},onContextMenu:ve}),we(Ke=>q=St(ae,1,"jse-insert-area jse-after svelte-wovgt4",null,q,{"jse-hovered":n(m)===Jc,"jse-selected":Ke}),[()=>n(y)&&uo(u())],fe),P(te,ae)};Y(Ee,te=>{!d().readOnly&&(n(m)===Jc||n(y)&&uo(u()))&&te(At)}),we((te,q,ae)=>{me=St(Ce,1,Ua(te),"svelte-wovgt4",me,{"jse-root":n(o),"jse-selected":q,"jse-selected-value":ae,"jse-readonly":d().readOnly,"jse-hovered":n(m)===Iv}),vn(Ce,"data-path",n(r)),vn(Ce,"aria-selected",n(y)),Ps(Ce,"--level",n(j).length)},[()=>ri("jse-json-node",{"jse-expanded":n(x)},d().onClassName(n(j),s())),()=>n(y)&&Jn(u()),()=>n(y)&&En(u())],fe),se("mousedown",Ce,function(te){if((te.buttons===1||te.buttons===2)&&!((q=te.target).nodeName==="DIV"&&q.contentEditable==="true"||te.buttons===1&&bh(te.target,"BUTTON"))){var q;te.stopPropagation(),te.preventDefault(),d().focus(),document.addEventListener("mousemove",z,!0),document.addEventListener("mouseup",ne);var ae=Vc(te.target),_=d().getJson(),je=d().getDocumentState();if(!u()||ae===In.after||ae===In.inside||u().type!==ae&&u().type!==In.multi||!Di(_,u(),n(j)))if(Hn(Hn().selecting=!0),Hn(Hn().selectionAnchor=n(j)),Hn(Hn().selectionAnchorType=ae),Hn(Hn().selectionFocus=n(j)),te.shiftKey){var Ke=d().getSelection();Ke&&d().onSelect(Ur(Ka(Ke),n(j)))}else if(ae===In.multi)if(n(o)&&te.target.hasAttribute("data-path")){var W=Ht(Oh(s(),je));d().onSelect(Au(W))}else d().onSelect(Ur(n(j),n(j)));else _!==void 0&&d().onSelect(Yv(ae,n(j)));else te.button===0&&h()(te)}}),se("mousemove",Ce,function(te){if(Hn().selecting){te.preventDefault(),te.stopPropagation(),Hn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var q=Vc(te.target);Zt(n(j),Hn().selectionFocus)&&q===Hn().selectionAnchorType||(Hn(Hn().selectionFocus=n(j)),Hn(Hn().selectionAnchorType=q),d().onSelect(Ur(Hn().selectionAnchor||Hn().selectionFocus,Hn().selectionFocus)))}}),se("mouseover",Ce,function(te){Hn().selecting||Hn().dragging||(te.stopPropagation(),Oa(te.target,"data-type","selectable-value")?f(m,Iv):Oa(te.target,"data-type","selectable-key")?f(m,void 0):Oa(te.target,"data-type","insert-selection-area-inside")?f(m,pi):Oa(te.target,"data-type","insert-selection-area-after")&&f(m,Jc),clearTimeout(g))}),se("mouseout",Ce,function(te){te.stopPropagation(),g=window.setTimeout(()=>f(m,void 0))}),P(e,Ce),ct()}var Uy={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},By={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},vf={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},Fy={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};bt(`/* over all fonts, sizes, and colors */
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
}`);var Ly=L('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>',1),Vy=L('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');function Uu(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Am(r,o)}function eg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=Je(e,t);if(Cr(a)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=function(h,p){return function(m,g){var b=Je(m,h),j=Je(g,h);return b===void 0?p:j===void 0?-p:typeof b!="string"&&typeof j!="string"?b>j?p:b<j?-p:0:p*Uu(b,j)}}(l,c),d=Je(s,i);return[{op:"replace",path:zt(i),value:d.slice(0).sort(u)}]}(e,t,r,o)}if(yn(a))return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Je(s,i),u=Object.keys(c).slice();u.sort((h,p)=>l*Uu(h,p));var d={};return u.forEach(h=>d[h]=c[h]),[{op:"replace",path:zt(i),value:d}]}(e,t,o);throw new Error("Cannot sort: no array or object")}bt(`/* over all fonts, sizes, and colors */
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
}`);var Wy=L('<button type="button"> </button>'),Hy=L('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>'),Jy=L('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');function Ky(e,t){lt(t,!1);var r=v(t,"items",9),o=v(t,"selectedItem",9),a=v(t,"onSelect",9);pt(!0);var s=Jy(),i=A(s);vr(i,1,()=>ch(r(),100),u=>u,(u,d)=>{var h,p=Wy(),m=A(p);we((g,b)=>{h=St(p,1,"jse-navigation-bar-dropdown-item svelte-2nnd2m",null,h,{"jse-selected":n(d)===o()}),vn(p,"title",g),gt(m,b)},[()=>n(d).toString(),()=>Ii(n(d).toString(),30)],fe),se("click",p,jo(()=>a()(n(d)))),P(u,p)});var l=N(i,2),c=u=>{var d=Hy();vn(d,"title","Limited to ".concat(100," items")),P(u,d)};Y(l,u=>{r().length>100&&u(c)}),P(e,s),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Yy=L('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>'),Qy=L('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button"><!></button> <!></div>');function ff(e,t){lt(t,!1);var r,o=M(void 0,!0),a=M(void 0,!0),{openAbsolutePopup:s,closeAbsolutePopup:i}=Ba("absolute-popup"),l=v(t,"path",9),c=v(t,"index",9),u=v(t,"onSelect",9),d=v(t,"getItems",9),h=M(void 0,!0),p=M(!1,!0);function m(O){i(r),u()(n(o).concat(O))}U(()=>(E(l()),E(c())),()=>{f(o,l().slice(0,c()))}),U(()=>(E(l()),E(c())),()=>{f(a,l()[c()])}),ln(),pt(!0);var g,b=Qy(),j=A(b);en(A(j),{data:mp});var x=N(j,2),S=O=>{var C=Yy(),y=A(C);we(()=>gt(y,n(a))),se("click",C,()=>m(n(a))),P(O,C)};Y(x,O=>{n(a)!==void 0&&O(S)}),Yn(b,O=>f(h,O),()=>n(h)),we(()=>g=St(j,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1",null,g,{"jse-open":n(p)})),se("click",j,function(){if(n(h)){f(p,!0);var O={items:d()(n(o)),selectedItem:n(a),onSelect:m};r=s(Ky,O,{anchor:n(h),closeOnOuterClick:!0,onClose:()=>{f(p,!1)}})}}),P(e,b),ct()}function Td(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}bt(`/* over all fonts, sizes, and colors */
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
}`);var Xy=L('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>'),Gy=L('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>'),Zy=L('<div><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function e1(e,t){lt(t,!1);var r=M(),o=Ba("absolute-popup"),a=v(t,"path",8),s=v(t,"pathParser",8),i=v(t,"onChange",8),l=v(t,"onClose",8),c=v(t,"onError",8),u=v(t,"pathExists",8),d=M(),h=M(),p=M(!1),m=void 0,g=M(!1);function b(){n(d).focus()}function j(ne){try{var Q=s().parse(ne);return function(B){if(!u()(B))throw new Error("Path does not exist in current document")}(Q),{path:Q,error:void 0}}catch(B){return{path:void 0,error:B}}}Tr(()=>{b()}),vo(()=>{clearTimeout(m)}),U(()=>(E(s()),E(a())),()=>{f(h,s().stringify(a()))}),U(()=>(n(p),n(h)),()=>{f(r,n(p)?j(n(h)).error:void 0)}),ln(),pt();var x,S=Zy(),O=A(S);Yn(O,ne=>f(d,ne),()=>n(d));var C=N(O,2),y=ne=>{var Q=Xy();en(A(Q),{data:Xa}),Fr(Q,(B,G)=>Ls==null?void 0:Ls(B,G),()=>ge({text:String(n(r)||"")},o)),P(ne,Q)};Y(C,ne=>{n(r)&&ne(y)});var $=N(C,2),I=ne=>{P(ne,Gy())};Y($,ne=>{n(g)&&ne(I)});var T,z=N($,2);en(A(z),{data:ka}),we(()=>{x=St(S,1,"jse-navigation-bar-path-editor svelte-zc2wx7",null,x,{error:n(r)}),Za(O,n(h)),T=St(z,1,"jse-navigation-bar-copy svelte-zc2wx7",null,T,{copied:n(g)})}),se("keydown",O,jo(function(ne){var Q=ua(ne);if(Q==="Escape"&&(ne.preventDefault(),l()()),Q==="Enter"){ne.preventDefault(),f(p,!0);var B=j(n(h));B.path!==void 0?i()(B.path):c()(B.error)}})),se("input",O,function(ne){f(h,ne.currentTarget.value)}),se("click",z,function(){Td(n(h)),f(g,!0),m=window.setTimeout(()=>f(g,!1),1e3),b()}),P(e,S),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var t1=L("<!> <!>",1),n1=L('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');function r1(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=Or("jsoneditor:NavigationBar"),s=v(t,"json",9),i=v(t,"selection",9),l=v(t,"onSelect",9),c=v(t,"onError",9),u=v(t,"pathParser",9),d=M(void 0,!0),h=M(!1,!0);function p(Q){a("get items for path",Q);var B=Je(s(),Q);if(Array.isArray(B))return jp(0,B.length).map(String);if(yn(B)){var G=Object.keys(B).slice(0);return G.sort(Uu),G}return[]}function m(Q){return Ca(s(),Q)}function g(Q){a("select path",JSON.stringify(Q)),l()(Ur(Q,Q))}function b(){f(h,!1)}function j(Q){b(),g(Q)}U(()=>(E(i()),Qe),()=>{f(r,i()?Qe(i()):[])}),U(()=>(E(s()),n(r)),()=>{f(o,br(Je(s(),n(r))))}),U(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(d)&&n(d).scrollTo){var Q=n(d).scrollWidth-n(d).clientWidth;Q>0&&(a("scrollTo ",Q),n(d).scrollTo({left:Q,behavior:"smooth"}))}})}),ln(),pt(!0);var x=n1(),S=A(x),O=Q=>{var B=t1(),G=Ne(B);vr(G,1,()=>n(r),jr,(de,Me,ue)=>{ff(de,{getItems:p,get path(){return n(r)},index:ue,onSelect:g})});var pe=N(G,2),Z=de=>{ff(de,{getItems:p,get path(){return n(r)},get index(){return n(r).length},onSelect:g})};Y(pe,de=>{n(o)&&de(Z)}),P(Q,B)},C=Q=>{e1(Q,{get path(){return n(r)},onClose:b,onChange:j,get onError(){return c()},pathExists:m,get pathParser(){return u()}})};Y(S,Q=>{n(h)?Q(C,!1):Q(O)});var y,$=N(S,2),I=A($),T=A(I),z=N(I,2),ne=fe(()=>n(h)?km:Cm);en(z,{get data(){return n(ne)}}),Yn(x,Q=>f(d,Q),()=>n(d)),we(Q=>{y=St($,1,"jse-navigation-bar-edit svelte-xs03gj",null,y,{flex:!n(h),editing:n(h)}),vn($,"title",n(h)?"Cancel editing the selected path":"Edit the selected path"),gt(T,Q)},[()=>br(s())||n(h)?" ":"Navigation bar"],fe),se("click",$,function(){f(h,!n(h))}),P(e,x),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var o1=L('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),a1=L('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>'),s1=L('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"></label> <div> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function tg(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=Or("jsoneditor:SearchBox"),i=v(t,"json",9),l=v(t,"documentState",9),c=v(t,"parser",9),u=v(t,"showSearch",9),d=v(t,"showReplace",13),h=v(t,"readOnly",9),p=v(t,"columns",9),m=v(t,"onSearch",9),g=v(t,"onFocus",9),b=v(t,"onPatch",9),j=v(t,"onClose",9),x=M("",!0),S="",O=M("",!0),C=M(!1,!0),y=M(void 0,!0),$=El(function(W){return Ee.apply(this,arguments)},300),I=El(function(W){return At.apply(this,arguments)},300);function T(){d(!d()&&!h())}function z(W){W.stopPropagation();var V=ua(W);V==="Enter"&&(W.preventDefault(),n(x)!==S?$.flush():ue()),V==="Shift+Enter"&&(W.preventDefault(),me()),V==="Ctrl+Enter"&&(W.preventDefault(),d()?G():ue()),V==="Ctrl+H"&&(W.preventDefault(),T()),V==="Escape"&&(W.preventDefault(),ae())}function ne(W){ua(W)==="Enter"&&(W.preventDefault(),W.stopPropagation(),G())}function Q(){return B.apply(this,arguments)}function B(){return(B=yt(function*(){or(),yield $.flush()})).apply(this,arguments)}function G(){return pe.apply(this,arguments)}function pe(){return(pe=yt(function*(){var W;if(!h()){var V=(W=n(y))===null||W===void 0?void 0:W.activeItem;if(s("handleReplace",{replaceText:n(O),activeItem:V}),n(y)&&V&&i()!==void 0){f(y,ge(ge({},Xv(n(y))),{},{activeIndex:n(o)}));var{operations:R,newSelection:Ze}=T0(i(),l(),n(O),V,c());b()(R,(wt,et)=>({state:et,selection:Ze})),or(),yield I.flush(),yield Ge()}}})).apply(this,arguments)}function Z(){return de.apply(this,arguments)}function de(){return(de=yt(function*(){if(!h()){s("handleReplaceAll",{text:n(x),replaceText:n(O)});var{operations:W,newSelection:V}=function(R,Ze,wt,et,Xe){for(var De=Gv(wt,R,{maxResults:1/0}),_e=[],jt=0;jt<De.length;jt++){var _t=De[jt-1],Be=De[jt];jt!==0&&Be.field===_t.field&&Zt(Be.path,_t.path)?Ht(_e).items.push(Be):_e.push({path:Be.path,field:Be.field,items:[Be]})}_e.sort((ut,ze)=>ut.field!==ze.field?ut.field===Oo.key?1:-1:ze.path.length-ut.path.length);var be,Ue=[];return _e.forEach(ut=>{var{field:ze,path:mt,items:tt}=ut;if(ze===Oo.key){var Fe=on(mt),H=Je(R,Fe),Ie=Ht(mt),He=el(Fe,Object.keys(H),Ie,ef(Ie,et,tt));Ue=Ue.concat(He),be=Fs(R,He)}else{if(ze!==Oo.value)throw new Error("Cannot replace: unknown type of search result field ".concat(ze));var Tt=Je(R,mt);if(Tt===void 0)throw new Error("Cannot replace: path not found ".concat(zt(mt)));var an=typeof Tt=="string"?Tt:String(Tt),Ye=sa(R,Ze,mt),Vt=ef(an,et,tt),Mn=[{op:"replace",path:zt(mt),value:Ye?Vt:ti(Vt,Xe)}];Ue=Ue.concat(Mn),be=Fs(R,Mn)}}),{operations:Ue,newSelection:be}}(i(),l(),n(x),n(O),c());b()(W,(R,Ze)=>({state:Ze,selection:V})),yield Ge()}})).apply(this,arguments)}function Me(W){W.select()}function ue(){return ve.apply(this,arguments)}function ve(){return(ve=yt(function*(){f(y,n(y)?Xv(n(y)):void 0),yield Ge()})).apply(this,arguments)}function me(){return Ce.apply(this,arguments)}function Ce(){return Ce=yt(function*(){f(y,n(y)?function(W){var V=W.activeIndex>0?W.activeIndex-1:W.items.length-1,R=W.items[V],Ze=W.items.map((wt,et)=>ge(ge({},wt),{},{active:et===V}));return ge(ge({},W),{},{items:Ze,activeItem:R,activeIndex:V})}(n(y)):void 0),yield Ge()}),Ce.apply(this,arguments)}function Ge(){return re.apply(this,arguments)}function re(){return(re=yt(function*(){var W;s("handleFocus",n(y));var V=(W=n(y))===null||W===void 0?void 0:W.activeItem;V&&i()!==void 0&&(yield g()(V.path))})).apply(this,arguments)}function ie(){return ie=yt(function*(W){yield te(W,n(x),i())}),ie.apply(this,arguments)}function Ee(){return Ee=yt(function*(W){yield te(u(),W,i()),yield Ge()}),Ee.apply(this,arguments)}function At(){return At=yt(function*(W){yield te(u(),n(x),W)}),At.apply(this,arguments)}function te(W,V,R){return q.apply(this,arguments)}function q(){return q=yt(function*(W,V,R){return W?(s("applySearch",{showSearch:W,text:V}),V===""?(s("clearing search result"),n(y)!==void 0&&f(y,void 0),Promise.resolve()):(S=V,f(C,!0),new Promise(Ze=>{setTimeout(()=>{var wt=Gv(V,R,{maxResults:Wc,columns:p()});f(y,function(et,Xe){var De=Xe!=null&&Xe.activeItem?tf(Xe.activeItem):void 0,_e=et.findIndex(Be=>Zt(De,tf(Be))),jt=_e!==-1?_e:(Xe==null?void 0:Xe.activeIndex)!==void 0&&(Xe==null?void 0:Xe.activeIndex)<et.length?Xe==null?void 0:Xe.activeIndex:et.length>0?0:-1,_t=et.map((Be,be)=>ge(ge({},Be),{},{active:be===jt}));return{items:_t,activeItem:_t[jt],activeIndex:jt}}(wt,n(y))),f(C,!1),Ze()})}))):(n(y)&&f(y,void 0),Promise.resolve())}),q.apply(this,arguments)}function ae(){s("handleClose"),$.cancel(),I.cancel(),te(!1,n(x),i()),j()()}U(()=>n(y),()=>{var W;f(r,((W=n(y))===null||W===void 0||(W=W.items)===null||W===void 0?void 0:W.length)||0)}),U(()=>n(y),()=>{var W;f(o,((W=n(y))===null||W===void 0?void 0:W.activeIndex)||0)}),U(()=>(n(r),Wc),()=>{f(a,n(r)>=Wc?"".concat(999,"+"):String(n(r)))}),U(()=>(E(m()),n(y)),()=>{m()(n(y))}),U(()=>E(u()),()=>{(function(W){ie.apply(this,arguments)})(u())}),U(()=>n(x),()=>{$(n(x))}),U(()=>E(i()),()=>{I(i())}),ln(),pt(!0);var _=Lt(),je=Ne(_),Ke=W=>{var V=s1(),R=A(V),Ze=A(R),wt=Ie=>{var He=o1(),Tt=A(He),an=fe(()=>d()?_a:Ei);en(Tt,{get data(){return n(an)}}),se("click",He,T),P(Ie,He)};Y(Ze,Ie=>{h()||Ie(wt)});var et=A(N(Ze,2)),Xe=A(et),De=A(Xe),_e=Ie=>{en(Ie,{data:$m,spin:!0})},jt=Ie=>{en(Ie,{data:ac})};Y(De,Ie=>{n(C)?Ie(_e):Ie(jt,!1)});var _t=N(Xe,2),Be=A(_t);Pr(()=>Dl(Be,()=>n(x),Ie=>f(x,Ie))),Fr(Be,Ie=>Me==null?void 0:Me(Ie)),Pr(()=>se("paste",Be,Q));var be,Ue=N(_t,2),ut=A(Ue),ze=N(Ue,2);en(A(ze),{data:Om});var mt=N(ze,2);en(A(mt),{data:zm});var tt=N(mt,2);en(A(tt),{data:oc});var Fe=N(et,2),H=Ie=>{var He=a1(),Tt=A(He),an=N(Tt,2),Ye=N(an,2);Dl(Tt,()=>n(O),Vt=>f(O,Vt)),se("keydown",Tt,ne),se("click",an,G),se("click",Ye,Z),P(Ie,He)};Y(Fe,Ie=>{d()&&!h()&&Ie(H)}),we(()=>{var Ie,He;be=St(Ue,1,"jse-search-count svelte-1mxl2uo",null,be,{"jse-visible":n(x)!==""}),gt(ut,"".concat((Ie=n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"")!==null&&Ie!==void 0?Ie:"").concat((He=n(a))!==null&&He!==void 0?He:""))}),se("click",ze,ue),se("click",mt,me),se("click",tt,ae),se("keydown",R,z),P(W,V)};Y(je,W=>{u()&&W(Ke)}),P(e,_),ct()}var Li=Symbol("path");function i1(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(s,i,l){if(s.length<i)s.forEach(l);else for(var c=i>1?(s.length-1)/(i-1):s.length,u=0;u<i;u++){var d=Math.floor(u*c);l(s[d],d,s)}}(e,r,s=>{yn(s)?ng(s,o,t):o[Li]=!0});var a=[];return Li in o&&a.push([]),rg(o,[],a,t),a}function ng(e,t,r){for(var o in e){var a=e[o],s=t[o]||(t[o]={});yn(a)&&r?ng(a,s,r):s[Li]===void 0&&(s[Li]=!0)}}function rg(e,t,r,o){for(var a in e){var s=t.concat(a),i=e[a];i&&i[Li]===!0&&r.push(s),Mr(i)&&o&&rg(i,s,r,o)}}function l1(e,t,r,o,a,s){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=Cr(r)?r.length:0,c=function(S,O){var C=Object.values(S);if(Rn(C))return O;var y=($,I)=>$+I;return C.reduce(y)/C.length}(o,a),u=e-i,d=t+2*i,h=S=>o[S]||a,p=0,m=s;m<u&&p<l;)m+=h(p),p++;p>0&&(m-=h(--p));for(var g=p,b=0;b<d&&g<l;)b+=h(g),g++;for(var j=0,x=g;x<l;x++)j+=h(x);return{startIndex:p,endIndex:g,startHeight:m,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:Cr(r)?r.slice(p,g):[]}}function pf(e,t,r,o){for(var{rowIndex:a}=lo(e,t),s=0,i=0;i<a;i++)s+=r[i]||o;return s}function lo(e,t){var[r,...o]=e,a=parseInt(r,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(s=>da(o,s))}}function Va(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function c1(e,t){var[r,o]=Um(e,i=>hd(i.path[0])),a=Bm(r,u1),s=Fm(a,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var u=function(d,h){var p=lo(d.path,h);return p.columnIndex!==-1?p.columnIndex:-1}(c,t);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:s}}function su(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>Co(r.path)+" "+r.message).join(", "),severity:So.warning}}function u1(e){return parseInt(e.path[0],10)}function d1(e,t,r){var o=t.some(a=>function(s,i,l){if(!s)return!1;if(i.op==="replace"){var c=qo(i.path),{rowIndex:u,columnIndex:d}=lo(c,l),h=l.findIndex(p=>Zt(p,s.path));if(u!==-1&&d!==-1&&d!==h)return!1}return!0}(e,a,r));return o?void 0:e}function hf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=[];return function o(a,s){Mr(a)&&s.length<t&&Object.keys(a).forEach(i=>{o(a[i],s.concat(i))}),Cr(a)&&r.push(s)}(e,[]),r}var Br=Or("jsoneditor:actions");function og(e){return Bu.apply(this,arguments)}function Bu(){return Bu=yt(function*(e){var{json:t,selection:r,indentation:o,readOnly:a,parser:s,onPatch:i}=e;if(!a&&t!==void 0&&r&&Os(r)){var l=$h(t,r,o,s);if(l!==void 0){Br("cut",{selection:r,clipboard:l,indentation:o}),yield Td(l);var{operations:c,newSelection:u}=Ih(t,r);i(c,(d,h)=>({state:h,selection:u}))}}}),Bu.apply(this,arguments)}function ag(e){return Fu.apply(this,arguments)}function Fu(){return Fu=yt(function*(e){var{json:t,selection:r,indentation:o,parser:a}=e,s=$h(t,r,o,a);s!==void 0&&(Br("copy",{clipboard:s,indentation:o}),yield Td(s))}),Fu.apply(this,arguments)}function sg(e){var{clipboardText:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onChangeText:l,openRepairModal:c}=e;if(!a)try{u(t)}catch{c(t,h=>{Br("repaired pasted text: ",h),u(h)})}function u(d){if(r!==void 0){var h=o||Yt([]),p=Rh(r,h,d,s);Br("paste",{pastedText:d,operations:p,ensureSelection:h}),i(p,(m,g)=>{var b=g;return p.filter(j=>(gp(j)||od(j))&&br(j.value)).forEach(j=>{var x=ra(r,j.path);b=ts(m,b,x)}),{state:b}})}else Br("paste text",{pastedText:d}),l(t,(m,g)=>{if(m)return{state:ts(m,g,[])}})}}function ig(e){var{json:t,text:r,selection:o,keepSelection:a,readOnly:s,onChange:i,onPatch:l}=e;if(!s&&o){var c=t!==void 0&&(Sr(o)||En(o))?Ur(o.path,o.path):o;if(Rn(Qe(o)))Br("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:u,newSelection:d}=Ih(t,c);Br("remove",{operations:u,selection:o,newSelection:d}),l(u,(h,p)=>({state:p,selection:a?o:d}))}}}function Gl(e){var{insertType:t,selectInside:r,initialValue:o,json:a,selection:s,readOnly:i,parser:l,onPatch:c,onReplaceJson:u}=e;if(!i){var d=function(b,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&b!==void 0){var S=j?zh(j):[],O=Je(b,S);if(Array.isArray(O)&&!Rn(O)){var C=na(O);return br(C)?wm(C,y=>Array.isArray(y)?[]:yn(y)?void 0:""):""}}return""}(a,s,t);if(a!==void 0){var h=l.stringify(d),p=Rh(a,s,h,l);Br("onInsert",{insertType:t,operations:p,newValue:d,data:h});var m=Ht(p.filter(b=>b.op==="add"||b.op==="replace"));c(p,(b,j,x)=>{if(m){var S=ra(b,m.path);if(br(d))return{state:bo(b,j,S,Md),selection:r?fa(S):x};if(d===""){var O=Rn(S)?void 0:Je(b,on(S));return{state:bo(b,j,S,kl),selection:yn(O)?Ad(S,o):Ll(S,o)}}}}),Br("after patch")}else{Br("onInsert",{insertType:t,newValue:d});var g=[];u(d,(b,j)=>({state:ts(b,j,g),selection:br(d)?fa(g):Ll(g)}))}}}function lg(e){return Lu.apply(this,arguments)}function Lu(){return Lu=yt(function*(e){var{char:t,selectInside:r,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c,onSelect:u}=e;s||(Sr(a)?u(ge(ge({},a),{},{edit:!0,initialValue:t})):t==="{"?Gl({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):t==="["?Gl({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):En(a)&&o!==void 0?br(Je(o,a.path))||u(ge(ge({},a),{},{edit:!0,initialValue:t})):(Br("onInsertValueWithCharacter",{char:t}),yield function(d){return Vu.apply(this,arguments)}({char:t,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c})))}),Lu.apply(this,arguments)}function Vu(){return Vu=yt(function*(e){var{char:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onReplaceJson:l}=e;a||Gl({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onReplaceJson:l})}),Vu.apply(this,arguments)}bt(`/* over all fonts, sizes, and colors */
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
}`);var v1=L('<div class="jse-json-preview svelte-1vjn89h"> </div>');function cg(e,t){lt(t,!1);var r=M(),o=M(),a=v(t,"text",8),s=v(t,"json",8),i=v(t,"indentation",8),l=v(t,"parser",8);U(()=>(E(s()),E(a())),()=>{f(r,s()!==void 0?{json:s()}:{text:a()||""})}),U(()=>(n(r),E(i()),E(l()),Eu),()=>{f(o,Ii(Su(n(r),i(),l()),Eu))}),ln(),pt();var c=v1(),u=A(c);we(()=>gt(u,n(o))),P(e,c),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var f1=L('<button type="button"><!> <!></button>');function iu(e,t){lt(t,!1);var r=v(t,"item",8),o=v(t,"className",8,void 0),a=v(t,"onRequestClose",8);pt();var s=f1(),i=A(s),l=d=>{en(d,{get data(){return r().icon}})};Y(i,d=>{r().icon&&d(l)});var c=N(i,2),u=d=>{var h=Lr();we(()=>gt(h,r().text)),P(d,h)};Y(c,d=>{r().text&&d(u)}),we(d=>{St(s,1,Ua(d),"svelte-1idfykj"),vn(s,"title",r().title),s.disabled=r().disabled||!1},[()=>ri("jse-context-menu-button",o(),r().className)],fe),se("click",s,d=>{a()(),r().onClick(d)}),P(e,s),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);var p1=L('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>'),h1=L('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-11rxb2m"></ul></div></div>');bt(`/* over all fonts, sizes, and colors */
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
}`);var g1=L('<button type="button" slot="defaultItem"><!> </button>');function lu(e,t){lt(t,!1);var r=M(),o=v(t,"item",8),a=v(t,"className",8,void 0),s=v(t,"onRequestClose",8);U(()=>(E(o()),E(s())),()=>{f(r,o().items.map(i=>ge(ge({},i),{},{onClick:l=>{s()(),i.onClick(l)}})))}),ln(),pt(),function(i,l){lt(l,!1);var c=M(void 0,!0),u=v(l,"items",25,()=>[]),d=v(l,"title",9,void 0),h=v(l,"width",9,"120px"),p=M(!1,!0);function m(){f(p,!1)}function g(y){ua(y)==="Escape"&&(y.preventDefault(),f(p,!1))}Tr(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),vo(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)}),U(()=>E(u()),()=>{f(c,u().every(y=>y.disabled===!0))}),ln(),pt(!0);var b=h1(),j=A(b);dr(j,l,"defaultItem",{},null);var x,S=N(j,2);en(A(S),{data:_a});var O,C=N(S,2);vr(A(C),5,u,jr,(y,$)=>{var I=p1(),T=A(I),z=A(T),ne=B=>{en(B,{get data(){return n($).icon}})};Y(z,B=>{n($).icon&&B(ne)});var Q=N(z);we(()=>{var B;vn(T,"title",n($).title),T.disabled=n($).disabled,St(T,1,Ua(n($).className),"svelte-11rxb2m"),gt(Q," ".concat((B=n($).text)!==null&&B!==void 0?B:""))}),se("click",T,B=>n($).onClick(B)),P(y,I)}),we(()=>{var y;vn(b,"title",d()),x=St(S,1,"jse-open-dropdown svelte-11rxb2m",null,x,{"jse-visible":n(p)}),S.disabled=n(c),O=St(C,1,"jse-dropdown-items svelte-11rxb2m",null,O,{"jse-visible":n(p)}),vn(C,"style","width: ".concat((y=h())!==null&&y!==void 0?y:"",";"))}),se("click",S,function(){var y=n(p);setTimeout(()=>f(p,!y))}),se("click",b,m),P(i,b),ct()}(e,{get width(){return o().width},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=g1(),u=A(c),d=p=>{en(p,{get data(){return o().main.icon}})};Y(u,p=>{o().main.icon&&p(d)});var h=N(u);we(p=>{var m;St(c,1,Ua(p),"svelte-1idfykj"),vn(c,"title",o().main.title),c.disabled=o().main.disabled||!1,gt(h," ".concat((m=o().main.text)!==null&&m!==void 0?m:""))},[()=>ri("jse-context-menu-button",a(),o().main.className)],fe),se("click",c,p=>{s()(),o().main.onClick(p)}),P(i,c)}}}),ct()}bt(`/* over all fonts, sizes, and colors */
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
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var m1=L('<div class="jse-separator svelte-12z7bz1"></div>'),b1=L('<div class="jse-label svelte-12z7bz1"> </div>'),j1=L('<div class="jse-column svelte-12z7bz1"></div>'),x1=L('<div class="jse-separator svelte-12z7bz1"></div>'),y1=L('<div class="jse-row svelte-12z7bz1"></div>'),w1=L('<div class="jse-separator svelte-12z7bz1"></div>'),k1=L('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>'),C1=L('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');function ug(e,t){lt(t,!1);var r=v(t,"items",9),o=v(t,"onRequestClose",9),a=v(t,"tip",9),s=M(void 0,!0);Tr(()=>{var p=Array.from(n(s).querySelectorAll("button")).find(m=>!m.disabled);p&&p.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(p){return console.error("Unknown type of context menu item",p),"???"}pt(!0);var c=C1(),u=A(c);vr(u,1,r,jr,(p,m)=>{var g=Lt(),b=Ne(g),j=S=>{iu(S,{get item(){return n(m)},get onRequestClose(){return o()}})},x=S=>{var O=Lt(),C=Ne(O),y=I=>{lu(I,{get item(){return n(m)},get onRequestClose(){return o()}})},$=I=>{var T=Lt(),z=Ne(T),ne=B=>{var G=y1();vr(G,5,()=>n(m).items,jr,(pe,Z)=>{var de=Lt(),Me=Ne(de),ue=me=>{iu(me,{get item(){return n(Z)},get onRequestClose(){return o()}})},ve=me=>{var Ce=Lt(),Ge=Ne(Ce),re=Ee=>{lu(Ee,{get item(){return n(Z)},get onRequestClose(){return o()}})},ie=Ee=>{var At=Lt(),te=Ne(At),q=_=>{var je=j1();vr(je,5,()=>n(Z).items,jr,(Ke,W)=>{var V=Lt(),R=Ne(V),Ze=et=>{iu(et,{className:"left",get item(){return n(W)},get onRequestClose(){return o()}})},wt=et=>{var Xe=Lt(),De=Ne(Xe),_e=_t=>{lu(_t,{className:"left",get item(){return n(W)},get onRequestClose(){return o()}})},jt=_t=>{var Be=Lt(),be=Ne(Be),Ue=ze=>{P(ze,m1())},ut=ze=>{var mt=Lt(),tt=Ne(mt),Fe=Ie=>{var He=b1(),Tt=A(He);we(()=>gt(Tt,n(W).text)),P(Ie,He)},H=Ie=>{var He=Lr();we(Tt=>gt(He,Tt),[()=>l(n(W))],fe),P(Ie,He)};Y(tt,Ie=>{z0(n(W))?Ie(Fe):Ie(H,!1)},!0),P(ze,mt)};Y(be,ze=>{wl(n(W))?ze(Ue):ze(ut,!1)},!0),P(_t,Be)};Y(De,_t=>{Yc(n(W))?_t(_e):_t(jt,!1)},!0),P(et,Xe)};Y(R,et=>{Ci(n(W))?et(Ze):et(wt,!1)}),P(Ke,V)}),P(_,je)},ae=_=>{var je=Lt(),Ke=Ne(je),W=R=>{P(R,x1())},V=R=>{var Ze=Lr();we(wt=>gt(Ze,wt),[()=>l(n(Z))],fe),P(R,Ze)};Y(Ke,R=>{wl(n(Z))?R(W):R(V,!1)},!0),P(_,je)};Y(te,_=>{$0(n(Z))?_(q):_(ae,!1)},!0),P(Ee,At)};Y(Ge,Ee=>{Yc(n(Z))?Ee(re):Ee(ie,!1)},!0),P(me,Ce)};Y(Me,me=>{Ci(n(Z))?me(ue):me(ve,!1)}),P(pe,de)}),P(B,G)},Q=B=>{var G=Lt(),pe=Ne(G),Z=Me=>{P(Me,w1())},de=Me=>{var ue=Lr();we(ve=>gt(ue,ve),[()=>l(n(m))],fe),P(Me,ue)};Y(pe,Me=>{wl(n(m))?Me(Z):Me(de,!1)},!0),P(B,G)};Y(z,B=>{E0(n(m))?B(ne):B(Q,!1)},!0),P(I,T)};Y(C,I=>{Yc(n(m))?I(y):I($,!1)},!0),P(S,O)};Y(b,S=>{Ci(n(m))?S(j):S(x,!1)}),P(p,g)});var d=N(u,2),h=p=>{var m=k1(),g=A(m),b=A(g);en(A(b),{data:Sm});var j=A(N(b,2));we(()=>gt(j,a())),P(p,m)};Y(d,p=>{a()&&p(h)}),Yn(c,p=>f(s,p),()=>n(s)),se("keydown",c,function(p){var m=ua(p),g=i[m];if(g&&p.target){p.preventDefault();var b=s0({allElements:Array.from(n(s).querySelectorAll("button:not([disabled])")),currentElement:p.target,direction:g,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});b&&b.focus()}}),P(e,c),ct()}bt(`/* over all fonts, sizes, and colors */
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
}`);L("<option> </option>");L("<select></select>");var hl,gl;function ml(e,t){return hl||(gl=new WeakMap,hl=new ResizeObserver(r=>{for(var o of r){var a=gl.get(o.target);a&&a(o.target)}})),gl.set(e,t),hl.observe(e),{destroy:()=>{gl.delete(e),hl.unobserve(e)}}}bt(`/* over all fonts, sizes, and colors */
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
}`);var S1=L("<!> <!>",1),O1=L('<div class="jse-search-box-background svelte-vrx1dr"></div>'),z1=L('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!>',1),E1=L('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"></label> <!>',1),$1=L('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>'),M1=L('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function Wu(e,t){lt(t,!1);var r=M(void 0,!0),o=Or("jsoneditor:TreeMode"),a=typeof window>"u";o("isSSR:",a);var s=Ts(),i=Ts(),{openAbsolutePopup:l,closeAbsolutePopup:c}=Ba("absolute-popup"),u=M(void 0,!0),d=M(void 0,!0),h=M(void 0,!0),p=!1,m=Yh(),g=v(t,"readOnly",9),b=v(t,"externalContent",9),j=v(t,"externalSelection",9),x=v(t,"history",9),S=v(t,"mainMenuBar",9),O=v(t,"navigationBar",9),C=v(t,"escapeControlCharacters",9),y=v(t,"escapeUnicodeCharacters",9),$=v(t,"parser",9),I=v(t,"parseMemoizeOne",9),T=v(t,"validator",9),z=v(t,"validationParser",9),ne=v(t,"pathParser",9),Q=v(t,"indentation",9),B=v(t,"onError",9),G=v(t,"onChange",9),pe=v(t,"onChangeMode",9),Z=v(t,"onSelect",9),de=v(t,"onUndo",9),Me=v(t,"onRedo",9),ue=v(t,"onRenderValue",9),ve=v(t,"onRenderMenu",9),me=v(t,"onRenderContextMenu",9),Ce=v(t,"onClassName",9),Ge=v(t,"onFocus",9),re=v(t,"onBlur",9),ie=v(t,"onSortModal",9),Ee=v(t,"onTransformModal",9),At=v(t,"onJSONEditorModal",9),te=!1,q=M(!1,!0),ae=M(void 0,!0);_d({onMount:Tr,onDestroy:vo,getWindow:()=>Xi(n(h)),hasFocus:()=>te&&document.hasFocus()||jd(n(h)),onFocus:()=>{p=!0,Ge()&&Ge()()},onBlur:()=>{p=!1,re()&&re()()}});var _=M(void 0,!0),je=M(void 0,!0),Ke=void 0,W=!1,V=M(Mu({json:n(_)}),!0),R=M(Ni(j())?j():void 0,!0);function Ze(w){f(R,w)}Tr(()=>{if(n(R)){var w=Qe(n(R));f(V,bo(n(_),n(V),w,kl)),setTimeout(()=>Ct(w))}});var wt,et=M(void 0,!0),Xe=M(void 0,!0),De=M(void 0,!0),_e=M(!1,!0),jt=M(!1,!0);function _t(w){f(De,(wt=w)?qh(n(_),wt.items):void 0)}function Be(w){return be.apply(this,arguments)}function be(){return(be=yt(function*(w){f(V,bo(n(_),n(V),w,kl)),yield rt(w)})).apply(this,arguments)}function Ue(){f(_e,!1),f(jt,!1),Ft()}function ut(w){o("select validation error",w),f(R,Yt(w.path)),rt(w.path)}function ze(w){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wv;o("expand"),f(V,bo(n(_),n(V),w,F))}function mt(w,F){f(V,Bv(n(_),n(V),w,F)),n(R)&&function(oe,qe){return da(Qe(oe),qe)&&(Qe(oe).length>qe.length||_r(oe))}(n(R),w)&&f(R,void 0)}var tt=M(!1,!0),Fe=M([],!0),H=M(void 0,!0),Ie=$i(Qh);function He(w,F,oe,qe){Es(()=>{var $e;try{$e=Ie(w,F,oe,qe)}catch(Se){$e=[{path:[],message:"Failed to validate: "+Se.message,severity:So.warning}]}Zt($e,n(Fe))||(o("validationErrors changed:",$e),f(Fe,$e),f(H,function(Se,Oe){var Ve;return Oe.forEach(vt=>{Ve=df(Se,Ve,vt.path,(sn,Wt)=>ge(ge({},Wt),{},{validationError:vt}))}),Oe.forEach(vt=>{for(var sn=vt.path;sn.length>0;)sn=on(sn),Ve=df(Se,Ve,sn,(Wt,Pn)=>Pn.validationError?Pn:ge(ge({},Pn),{},{validationError:{isChildError:!0,path:sn,message:"Contains invalid data",severity:So.warning}}))}),Ve}(w,n(Fe))))},$e=>o("validationErrors updated in ".concat($e," ms")))}function Tt(){return o("validate"),Ke?{parseError:Ke,isRepairable:!1}:(He(n(_),T(),$(),z()),Rn(n(Fe))?void 0:{validationErrors:n(Fe)})}function an(){return n(_)}function Ye(){return n(V)}function Vt(){return n(R)}function Mn(w){o("applyExternalContent",{updatedContent:w}),Ri(w)?function(F){if(F!==void 0){var oe=!Zt(n(_),F);if(o("update external json",{isChanged:oe,currentlyText:n(_)===void 0}),!!oe){var qe={documentState:n(V),selection:n(R),json:n(_),text:n(je),textIsRepaired:n(tt)};f(_,F),f(V,ro(F,n(V))),On(n(_)),f(je,void 0),f(tt,!1),Ke=void 0,Jt(n(_)),Bt(qe)}}}(w.json):Pi(w)&&function(F){if(!(F===void 0||Ri(b()))){var oe=F!==n(je);if(o("update external text",{isChanged:oe}),!!oe){var qe={documentState:n(V),selection:n(R),json:n(_),text:n(je),textIsRepaired:n(tt)};try{f(_,I()(F)),f(V,ro(n(_),n(V))),On(n(_)),f(je,F),f(tt,!1),Ke=void 0}catch($e){try{f(_,I()(To(F))),f(V,ro(n(_),n(V))),On(n(_)),f(je,F),f(tt,!0),Ke=void 0,Jt(n(_))}catch{f(_,void 0),f(V,void 0),f(je,b().text),f(tt,!1),Ke=n(je)!==void 0&&n(je)!==""?Us(n(je),$e.message||String($e)):void 0}}Jt(n(_)),Bt(qe)}}}(w.text)}function On(w){W||(W=!0,f(V,ts(w,n(V),[])))}function Jt(w){n(R)&&(Ca(w,Ka(n(R)))&&Ca(w,Qe(n(R)))||(o("clearing selection: path does not exist anymore",n(R)),f(R,hs(w,n(V)))))}function Bt(w){if(w.json!==void 0||w.text!==void 0){var F=n(_)!==void 0&&w.json!==void 0;x().add({type:"tree",undo:{patch:F?[{op:"replace",path:"",value:w.json}]:void 0,json:w.json,text:w.text,documentState:w.documentState,textIsRepaired:w.textIsRepaired,selection:_o(w.selection),sortedColumn:void 0},redo:{patch:F?[{op:"replace",path:"",value:n(_)}]:void 0,json:n(_),text:n(je),documentState:n(V),textIsRepaired:n(tt),selection:_o(n(R)),sortedColumn:void 0}})}}function fn(w,F){var oe;if(o("patch",w,F),n(_)===void 0)throw new Error("Cannot apply patch: no JSON");var qe=n(_),$e={json:void 0,text:n(je),documentState:n(V),selection:_o(n(R)),textIsRepaired:n(tt),sortedColumn:void 0},Se=_h(n(_),w),Oe=Ch(n(_),n(V),w),Ve=(oe=Fs(n(_),w))!==null&&oe!==void 0?oe:n(R),vt=typeof F=="function"?F(Oe.json,Oe.documentState,Ve):void 0;return f(_,(vt==null?void 0:vt.json)!==void 0?vt.json:Oe.json),f(V,(vt==null?void 0:vt.state)!==void 0?vt.state:Oe.documentState),f(R,(vt==null?void 0:vt.selection)!==void 0?vt.selection:Ve),f(je,void 0),f(tt,!1),f(Xe,void 0),Ke=void 0,Jt(n(_)),x().add({type:"tree",undo:ge({patch:Se},$e),redo:{patch:w,json:void 0,text:n(je),documentState:n(V),selection:_o(n(R)),sortedColumn:void 0,textIsRepaired:n(tt)}}),{json:n(_),previousJson:qe,undo:Se,redo:w}}function sr(){!g()&&n(R)&&f(R,Ad(Qe(n(R))))}function Dn(){if(!g()&&n(R)){var w=Qe(n(R)),F=Je(n(_),w);br(F)?function(oe,qe){o("openJSONEditorModal",{path:oe,value:qe}),te=!0,At()({content:{json:qe},path:oe,onPatch:n(gn).onPatch,onClose:()=>{te=!1,setTimeout(Ft)}})}(w,F):f(R,Ll(w))}}function cn(){if(!g()&&En(n(R))){var w=Qe(n(R)),F=zt(w),oe=Je(n(_),w),qe=!sa(n(_),n(V),w),$e=qe?String(oe):ti(String(oe),$());o("handleToggleEnforceString",{enforceString:qe,value:oe,updatedValue:$e}),nn([{op:"replace",path:F,value:$e}],(Se,Oe)=>({state:bc(n(_),Oe,w,{type:"value",enforceString:qe})}))}}function Le(){return n(tt)&&n(_)!==void 0&&Dt(n(_)),n(_)!==void 0?{json:n(_)}:{text:n(je)||""}}function pn(){return dt.apply(this,arguments)}function dt(){return dt=yt(function*(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield og({json:n(_),selection:n(R),indentation:w?Q():void 0,readOnly:g(),parser:$(),onPatch:nn})}),dt.apply(this,arguments)}function Qt(){return bn.apply(this,arguments)}function bn(){return bn=yt(function*(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(_)!==void 0&&(yield ag({json:n(_),selection:n(R),indentation:w?Q():void 0,parser:$()}))}),bn.apply(this,arguments)}function zn(w){var F;w.preventDefault(),Qn((F=w.clipboardData)===null||F===void 0?void 0:F.getData("text/plain"))}function wn(){return _n.apply(this,arguments)}function _n(){return(_n=yt(function*(){try{Qn(yield navigator.clipboard.readText())}catch(w){console.error(w),f(q,!0)}})).apply(this,arguments)}function Qn(w){w!==void 0&&sg({clipboardText:w,json:n(_),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onChangeText:hn,openRepairModal:zr})}function zr(w,F){f(ae,{text:w,onParse:oe=>gc(oe,qe=>Qi(qe,$())),onRepair:dh,onApply:F,onClose:Ft})}function er(){ig({json:n(_),text:n(je),selection:n(R),keepSelection:!1,readOnly:g(),onChange:G(),onPatch:nn})}function gr(){!g()&&n(_)!==void 0&&n(R)&&Os&&!Rn(Qe(n(R)))&&(o("duplicate",{selection:n(R)}),nn(Ph(n(_),Ra(n(_),n(R)))))}function xr(){if(!g()&&n(R)&&(Jn(n(R))||En(n(R)))&&!Rn(Qe(n(R)))){o("extract",{selection:n(R)});var w=function(F,oe){if(En(oe))return[{op:"move",from:zt(oe.path),path:""}];if(!Jn(oe))throw new Error("Cannot create extract operations: parent must be an Object or Array");var qe=on(oe.focusPath),$e=Je(F,qe);if(Cr($e)){var Se=Ra(F,oe).map(Ve=>{var vt=Rr(Ht(Ve));return $e[vt]});return[{op:"replace",path:"",value:Se}]}if(Mr($e)){var Oe={};return Ra(F,oe).forEach(Ve=>{var vt=String(Ht(Ve));Oe[vt]=$e[vt]}),[{op:"replace",path:"",value:Oe}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(oe))}(n(_),n(R));nn(w,(F,oe)=>{if(br(F))return{state:Xc(F,oe,[])}})}}function fr(w){Gl({insertType:w,selectInside:!0,initialValue:void 0,json:n(_),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onReplaceJson:Dt})}function Wn(w){Sr(n(R))&&f(R,Yt(n(R).path)),n(R)||f(R,hs(n(_),n(V))),fr(w)}function tr(w){if(!g()&&n(R))if(dl(n(R)))try{var F=Ka(n(R)),oe=Je(n(_),F),qe=function(Se,Oe,Ve){if(Oe==="array"){if(Array.isArray(Se))return Se;if(yn(Se))return $v(Se);if(typeof Se=="string")try{var vt=Ve.parse(Se);if(Array.isArray(vt))return vt;if(yn(vt))return $v(vt)}catch{return[Se]}return[Se]}if(Oe==="object"){if(Array.isArray(Se))return Ev(Se);if(yn(Se))return Se;if(typeof Se=="string")try{var sn=Ve.parse(Se);if(yn(sn))return sn;if(Array.isArray(sn))return Ev(sn)}catch{return{value:Se}}return{value:Se}}if(Oe==="value")return br(Se)?Ve.stringify(Se):Se;throw new Error("Cannot convert ".concat(gd(Se,Ve)," to ").concat(Oe))}(oe,w,$());if(qe===oe)return;var $e=[{op:"replace",path:zt(F),value:qe}];o("handleConvert",{selection:n(R),path:F,type:w,operations:$e}),nn($e,(Se,Oe)=>({state:n(R)?ts(Se,Oe,Qe(n(R))):n(V)}))}catch(Se){B()(Se)}else B()(new Error("Cannot convert current selection to ".concat(w)))}function le(){if(n(R)){var w=Hv(n(_),n(V),n(R),!1),F=on(Qe(n(R)));w&&!Rn(Qe(w))&&Zt(F,on(Qe(w)))?f(R,ia(Qe(w))):f(R,fa(F)),o("insert before",{selection:n(R),selectionBefore:w,parentPath:F}),or(),Kt()}}function Nt(){if(n(R)){var w=Ia(n(_),n(R));o("insert after",w),f(R,ia(w)),or(),Kt()}}function Un(w){return K.apply(this,arguments)}function K(){return(K=yt(function*(w){yield lg({char:w,selectInside:!0,json:n(_),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onReplaceJson:Dt,onSelect:Ze})})).apply(this,arguments)}function xe(){if(!g()&&x().canUndo){var w=x().undo();if(Bl(w)){var F={json:n(_),text:n(je)};f(_,w.undo.patch?No(n(_),w.undo.patch):w.undo.json),f(V,w.undo.documentState),f(R,w.undo.selection),f(je,w.undo.text),f(tt,w.undo.textIsRepaired),Ke=void 0,o("undo",{item:w,json:n(_),documentState:n(V),selection:n(R)}),kn(F,w.undo.patch&&w.redo.patch?{json:n(_),previousJson:F.json,redo:w.undo.patch,undo:w.redo.patch}:void 0),Ft(),n(R)&&rt(Qe(n(R)),!1)}else de()(w)}}function st(){if(!g()&&x().canRedo){var w=x().redo();if(Bl(w)){var F={json:n(_),text:n(je)};f(_,w.redo.patch?No(n(_),w.redo.patch):w.redo.json),f(V,w.redo.documentState),f(R,w.redo.selection),f(je,w.redo.text),f(tt,w.redo.textIsRepaired),Ke=void 0,o("redo",{item:w,json:n(_),documentState:n(V),selection:n(R)}),kn(F,w.undo.patch&&w.redo.patch?{json:n(_),previousJson:F.json,redo:w.redo.patch,undo:w.undo.patch}:void 0),Ft(),n(R)&&rt(Qe(n(R)),!1)}else Me()(w)}}function kt(w){var F;g()||n(_)===void 0||(te=!0,ie()({id:s,json:n(_),rootPath:w,onSort:(F=yt(function*(oe){var{operations:qe}=oe;o("onSort",w,qe),nn(qe,($e,Se)=>({state:Xc($e,Se,w),selection:Yt(w)}))}),function(oe){return F.apply(this,arguments)}),onClose:()=>{te=!1,setTimeout(Ft)}}))}function nt(){n(R)&&kt(Kv(n(_),n(R)))}function qt(){kt([])}function tn(w){if(n(_)!==void 0){var{id:F,onTransform:oe,onClose:qe}=w,$e=w.rootPath||[];te=!0,Ee()({id:F||i,json:n(_),rootPath:$e,onTransform:Se=>{oe?oe({operations:Se,json:n(_),transformedJson:No(n(_),Se)}):(o("onTransform",$e,Se),nn(Se,(Oe,Ve)=>({state:Xc(Oe,Ve,$e),selection:Yt($e)})))},onClose:()=>{te=!1,setTimeout(Ft),qe&&qe()}})}}function Pt(){n(R)&&tn({rootPath:Kv(n(_),n(R))})}function Rt(){tn({rootPath:[]})}function rt(w){return at.apply(this,arguments)}function at(){return at=yt(function*(w){var F=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];f(V,bo(n(_),n(V),w,kl));var oe=un(w);if(o("scrollTo",{path:w,elem:oe,refContents:n(u)}),!oe||!n(u))return Promise.resolve();var qe=n(u).getBoundingClientRect(),$e=oe.getBoundingClientRect();if(!F&&$e.bottom>qe.top&&$e.top<qe.bottom)return Promise.resolve();var Se=-qe.height/4;return new Promise(Oe=>{m(oe,{container:n(u),offset:Se,duration:300,callback:()=>Oe()})})}),at.apply(this,arguments)}function un(w){var F,oe;return or(),(F=(oe=n(u))===null||oe===void 0?void 0:oe.querySelector('div[data-path="'.concat(Ou(w),'"]')))!==null&&F!==void 0?F:void 0}function Ct(w){var F=un(w);if(F&&n(u)){var oe=n(u).getBoundingClientRect(),qe=F.getBoundingClientRect(),$e=br(Je(n(_),w))?20:qe.height;qe.top<oe.top+20?m(F,{container:n(u),offset:-20,duration:0}):qe.top+$e>oe.bottom-20&&m(F,{container:n(u),offset:-(oe.height-$e-20),duration:0})}}function kn(w,F){if(w.json!==void 0||(w==null?void 0:w.text)!==void 0){if(n(je)!==void 0){var oe,qe={text:n(je),json:void 0};(oe=G())===null||oe===void 0||oe(qe,w,{contentErrors:Tt(),patchResult:F})}else if(n(_)!==void 0){var $e,Se={text:void 0,json:n(_)};($e=G())===null||$e===void 0||$e(Se,w,{contentErrors:Tt(),patchResult:F})}}}function nn(w,F){o("handlePatch",w,F);var oe={json:n(_),text:n(je)},qe=fn(w,F);return kn(oe,qe),qe}function Dt(w,F){var oe={json:n(_),text:n(je)},qe={documentState:n(V),selection:n(R),json:n(_),text:n(je),textIsRepaired:n(tt)},$e=bo(n(_),ro(w,n(V)),[],wi),Se=typeof F=="function"?F(w,$e,n(R)):void 0;f(_,(Se==null?void 0:Se.json)!==void 0?Se.json:w),f(V,(Se==null?void 0:Se.state)!==void 0?Se.state:$e),f(R,(Se==null?void 0:Se.selection)!==void 0?Se.selection:n(R)),f(je,void 0),f(tt,!1),Ke=void 0,Jt(n(_)),Bt(qe),kn(oe,void 0)}function hn(w,F){o("handleChangeText");var oe={json:n(_),text:n(je)},qe={documentState:n(V),selection:n(R),json:n(_),text:n(je),textIsRepaired:n(tt)};try{f(_,I()(w)),f(V,bo(n(_),ro(n(_),n(V)),[],wi)),f(je,void 0),f(tt,!1),Ke=void 0}catch(Se){try{f(_,I()(To(w))),f(V,bo(n(_),ro(n(_),n(V)),[],wi)),f(je,w),f(tt,!0),Ke=void 0}catch{f(_,void 0),f(V,Mu({json:n(_),expand:wi})),f(je,w),f(tt,!1),Ke=n(je)!==""?Us(n(je),Se.message||String(Se)):void 0}}if(typeof F=="function"){var $e=F(n(_),n(V),n(R));f(_,($e==null?void 0:$e.json)!==void 0?$e.json:n(_)),f(V,($e==null?void 0:$e.state)!==void 0?$e.state:n(V)),f(R,($e==null?void 0:$e.selection)!==void 0?$e.selection:n(R))}Jt(n(_)),Bt(qe),kn(oe,void 0)}function Ut(w,F){var oe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:w,expanded:F,recursive:oe}),F?ze(w,oe?Md:Wv):mt(w,oe),Ft()}function nr(){Ut([],!0,!0)}function D(){Ut([],!1,!0)}function X(w){o("openFind",{findAndReplace:w}),f(_e,!1),f(jt,!1),or(),f(_e,!0),f(jt,w)}function ke(w,F){o("handleExpandSection",w,F),f(V,function(oe,qe,$e,Se){return Bs(oe,qe,$e,(Oe,Ve)=>{if(!qr(Ve))return Ve;var vt=yh(Ve.visibleSections.concat(Se));return ge(ge({},Ve),{},{visibleSections:vt})})}(n(_),n(V),w,F))}function Et(w){o("pasted json as text",w),f(Xe,w)}function rn(w){var F,{anchor:oe,left:qe,top:$e,width:Se,height:Oe,offsetTop:Ve,offsetLeft:vt,showTip:sn}=w,Wt=function(qn){var{json:Xn,documentState:it,selection:Pe,readOnly:$t,onEditKey:pr,onEditValue:Sn,onToggleEnforceString:mn,onCut:Nn,onCopy:mr,onPaste:It,onRemove:Ln,onDuplicate:Ir,onExtract:po,onInsertBefore:Nr,onInsert:Vr,onConvert:Yo,onInsertAfter:cs,onSort:ga,onTransform:$r}=qn,Gn=Xn!==void 0,Wr=!!Pe,eo=!!Pe&&Rn(Qe(Pe)),ho=Pe?Je(Xn,Qe(Pe)):void 0,oi=Array.isArray(ho)?"Edit array":yn(ho)?"Edit object":"Edit value",Qr=Gn&&(Jn(Pe)||Sr(Pe)||En(Pe)),ai=Pe&&!eo?Je(Xn,on(Qe(Pe))):void 0,Mc=!$t&&Gn&&Fl(Pe)&&!eo&&!Array.isArray(ai),si=!$t&&Gn&&Pe!==void 0&&Fl(Pe),Ac=si&&!br(ho),ii=!$t&&Qr,li=Qr,Pc=!$t&&Wr,yr=!$t&&Gn&&Qr&&!eo,Ro=!$t&&Gn&&Pe!==void 0&&(Jn(Pe)||En(Pe))&&!eo,io=Qr,Qo=io?"Convert to:":"Insert:",La=!$t&&(_r(Pe)&&Array.isArray(ho)||uo(Pe)&&Array.isArray(ai)),Xr=!$t&&(io?dl(Pe)&&!yn(ho):Wr),Rc=!$t&&(io?dl(Pe)&&!Array.isArray(ho):Wr),Ic=!$t&&(io?dl(Pe)&&br(ho):Wr),_c=Pe!==void 0&&sa(Xn,it,Qe(Pe));function us(ci){Qr?ci!=="structure"&&Yo(ci):Vr(ci)}return[{type:"row",items:[{type:"button",onClick:()=>pr(),icon:$s,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Mc},{type:"dropdown-button",main:{type:"button",onClick:()=>Sn(),icon:$s,text:oi,title:"Edit the value (Double-click on the value)",disabled:!si},width:"11em",items:[{type:"button",icon:$s,text:oi,title:"Edit the value (Double-click on the value)",onClick:()=>Sn(),disabled:!si},{type:"button",icon:_c?cp:up,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>mn(),disabled:!Ac}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>Nn(!0),icon:Ms,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ii},width:"10em",items:[{type:"button",icon:Ms,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>Nn(!0),disabled:!ii},{type:"button",icon:Ms,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>Nn(!1),disabled:!ii}]},{type:"dropdown-button",main:{type:"button",onClick:()=>mr(!0),icon:ka,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!li},width:"12em",items:[{type:"button",icon:ka,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>mr(!0),disabled:!li},{type:"button",icon:ka,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>mr(!1),disabled:!li}]},{type:"button",onClick:()=>It(),icon:dp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Pc}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Ir(),icon:vp,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!yr},{type:"button",onClick:()=>po(),icon:bm,text:"Extract",title:"Extract selected contents",disabled:!Ro},{type:"button",onClick:()=>ga(),icon:Ml,text:"Sort",title:"Sort array or object contents",disabled:$t||!Qr},{type:"button",onClick:()=>$r(),icon:Al,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:$t||!Qr},{type:"button",onClick:()=>Ln(),icon:pu,text:"Remove",title:"Remove selected contents (Delete)",disabled:$t||!Qr}]},{type:"column",items:[{type:"label",text:Qo},{type:"button",onClick:()=>us("structure"),icon:io?rl:ks,text:"Structure",title:Qo+" structure like the first item in the array",disabled:!La},{type:"button",onClick:()=>us("object"),icon:io?rl:ks,text:"Object",title:Qo+" object",disabled:!Xr},{type:"button",onClick:()=>us("array"),icon:io?rl:ks,text:"Array",title:Qo+" array",disabled:!Rc},{type:"button",onClick:()=>us("value"),icon:io?rl:ks,text:"Value",title:Qo+" value",disabled:!Ic}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>Nr(),icon:jm,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:$t||!Qr||eo},{type:"button",onClick:()=>cs(),icon:xm,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:$t||!Qr||eo}]}]}({json:n(_),documentState:n(V),selection:n(R),readOnly:g(),onEditKey:sr,onEditValue:Dn,onToggleEnforceString:cn,onCut:pn,onCopy:Qt,onPaste:wn,onRemove:er,onDuplicate:gr,onExtract:xr,onInsertBefore:le,onInsert:Wn,onInsertAfter:Nt,onConvert:tr,onSort:nt,onTransform:Pt}),Pn=(F=me()(Wt))!==null&&F!==void 0?F:Wt;if(Pn!==!1){var ht={left:qe,top:$e,offsetTop:Ve,offsetLeft:vt,width:Se,height:Oe,anchor:oe,closeOnOuterClick:!0,onClose:()=>{te=!1,Ft()}};te=!0;var lr=l(ug,{tip:sn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Pn,onRequestClose:()=>c(lr)},ht)}}function Kt(w){if(!Kr(n(R)))if(w&&(w.stopPropagation(),w.preventDefault()),w&&w.type==="contextmenu"&&w.target!==n(d))rn({left:w.clientX,top:w.clientY,width:ea,height:Zo,showTip:!1});else{var F,oe=(F=n(u))===null||F===void 0?void 0:F.querySelector(".jse-context-menu-pointer.jse-selected");if(oe)rn({anchor:oe,offsetTop:2,width:ea,height:Zo,showTip:!1});else{var qe,$e=(qe=n(u))===null||qe===void 0?void 0:qe.getBoundingClientRect();$e&&rn({top:$e.top+2,left:$e.left+2,width:ea,height:Zo,showTip:!1})}}}function Cn(w){rn({anchor:jh(w.target,"BUTTON"),offsetTop:0,width:ea,height:Zo,showTip:!0})}function Bn(){return An.apply(this,arguments)}function An(){return(An=yt(function*(){if(o("apply pasted json",n(Xe)),n(Xe)){var{onPasteAsJson:w}=n(Xe);f(Xe,void 0),w(),setTimeout(Ft)}})).apply(this,arguments)}function ir(){o("clear pasted json"),f(Xe,void 0),Ft()}function Te(){pe()(kr.text)}function Tn(w){f(R,w),Ft(),rt(Qe(w))}function Ft(){o("focus"),n(d)&&(n(d).focus(),n(d).select())}function Er(w){return function(F,oe,qe){var $e=on(qe),Se=[Ht(qe)],Oe=Je(F,$e),Ve=Oe?Qc(Oe,oe,Se):void 0;return Ve?Yt($e.concat(Ve)):ia(qe)}(n(_),n(V),w)}function ft(w){n(r)&&n(r).onDrag(w)}function dn(){n(r)&&n(r).onDragEnd()}var gn=M(void 0,!0);U(()=>n(R),()=>{var w;w=n(R),Zt(w,j())||(o("onSelect",w),Z()(w))}),U(()=>(E(C()),E(y())),()=>{f(et,md({escapeControlCharacters:C(),escapeUnicodeCharacters:y()}))}),U(()=>n(_e),()=>{(function(w){n(u)&&w&&n(u).scrollTop===0&&(oo(u,n(u).style.overflowAnchor="none"),oo(u,n(u).scrollTop+=yi),setTimeout(()=>{n(u)&&oo(u,n(u).style.overflowAnchor="")}))})(n(_e))}),U(()=>E(b()),()=>{Mn(b())}),U(()=>E(j()),()=>{(function(w){Zt(n(R),w)||(o("applyExternalSelection",{selection:n(R),externalSelection:w}),Ni(w)&&f(R,w))})(j())}),U(()=>(n(_),E(T()),E($()),E(z())),()=>{He(n(_),T(),$(),z())}),U(()=>(n(u),uf),()=>{f(r,n(u)?uf(n(u)):void 0)}),U(()=>(E(g()),E($()),n(et),E(ue()),E(Ce())),()=>{f(gn,{mode:kr.tree,readOnly:g(),parser:$(),normalization:n(et),getJson:an,getDocumentState:Ye,getSelection:Vt,findElement:un,findNextInside:Er,focus:Ft,onPatch:nn,onInsert:fr,onExpand:Ut,onSelect:Ze,onFind:X,onExpandSection:ke,onPasteJson:Et,onRenderValue:ue(),onContextMenu:rn,onClassName:Ce()||(()=>{}),onDrag:ft,onDragEnd:dn})}),U(()=>n(gn),()=>{o("context changed",n(gn))}),ln(),pt(!0);var Fn=M1();se("mousedown",aa,function(w){!ni(w.target,F=>F===n(h))&&Kr(n(R))&&(o("click outside the editor, exit edit mode"),f(R,_o(n(R))),p&&n(d)&&(n(d).focus(),n(d).blur()),o("blur (outside editor)"),n(d)&&n(d).blur())});var k,J=Ne(Fn),ce=A(J),he=w=>{(function(F,oe){lt(oe,!1);var qe=M(void 0,!0),$e=M(void 0,!0),Se=M(void 0,!0),Oe=v(oe,"json",9),Ve=v(oe,"selection",9),vt=v(oe,"readOnly",9),sn=v(oe,"showSearch",13,!1),Wt=v(oe,"history",9),Pn=v(oe,"onExpandAll",9),ht=v(oe,"onCollapseAll",9),lr=v(oe,"onUndo",9),qn=v(oe,"onRedo",9),Xn=v(oe,"onSort",9),it=v(oe,"onTransform",9),Pe=v(oe,"onContextMenu",9),$t=v(oe,"onCopy",9),pr=v(oe,"onRenderMenu",9);function Sn(){sn(!sn())}var mn=M(void 0,!0),Nn=M(void 0,!0),mr=M(void 0,!0),It=M(void 0,!0);U(()=>E(Oe()),()=>{f(qe,Oe()!==void 0)}),U(()=>(n(qe),E(Ve()),En),()=>{f($e,n(qe)&&(Jn(Ve())||Sr(Ve())||En(Ve())))}),U(()=>(E(Pn()),E(Oe())),()=>{f(mn,{type:"button",icon:Uy,title:"Expand all",className:"jse-expand-all",onClick:Pn(),disabled:!br(Oe())})}),U(()=>(E(ht()),E(Oe())),()=>{f(Nn,{type:"button",icon:By,title:"Collapse all",className:"jse-collapse-all",onClick:ht(),disabled:!br(Oe())})}),U(()=>E(Oe()),()=>{f(mr,{type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:Sn,disabled:Oe()===void 0})}),U(()=>(E(vt()),n(mn),n(Nn),E(Xn()),E(Oe()),E(it()),n(mr),E(Pe()),E(lr()),E(Wt()),E(qn()),E($t()),n($e)),()=>{f(It,vt()?[n(mn),n(Nn),{type:"separator"},{type:"button",icon:ka,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:$t(),disabled:!n($e)},{type:"separator"},n(mr),{type:"space"}]:[n(mn),n(Nn),{type:"separator"},{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:Xn(),disabled:vt()||Oe()===void 0},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:it(),disabled:vt()||Oe()===void 0},n(mr),{type:"button",icon:fp,title:wd,className:"jse-contextmenu",onClick:Pe()},{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:lr(),disabled:!Wt().canUndo},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:qn(),disabled:!Wt().canRedo},{type:"space"}])}),U(()=>(E(pr()),n(It)),()=>{f(Se,pr()(n(It))||n(It))}),ln(),pt(!0),kc(F,{get items(){return n(Se)}}),ct()})(w,{get json(){return n(_)},get selection(){return n(R)},get readOnly(){return g()},get history(){return x()},onExpandAll:nr,onCollapseAll:D,onUndo:xe,onRedo:st,onSort:qt,onTransform:Rt,onContextMenu:Cn,onCopy:Qt,get onRenderMenu(){return ve()},get showSearch(){return n(_e)},set showSearch(F){f(_e,F)},$$legacy:!0})};Y(ce,w=>{S()&&w(he)});var ye=N(ce,2),Re=w=>{r1(w,{get json(){return n(_)},get selection(){return n(R)},onSelect:Tn,get onError(){return B()},get pathParser(){return ne()}})};Y(ye,w=>{O()&&w(Re)});var Ae=N(ye,2),We=w=>{var F=E1(),oe=Ne(F),qe=A(oe);qe.readOnly=!0,Yn(qe,Ve=>f(d,Ve),()=>n(d));var $e=N(oe,2),Se=Ve=>{var vt=Lt(),sn=Ne(vt),Wt=ht=>{(function(lr,qn){lt(qn,!1);var Xn=v(qn,"readOnly",9),it=v(qn,"onCreateArray",9),Pe=v(qn,"onCreateObject",9),$t=v(qn,"onClick",9);pt(!0);var pr=Vy(),Sn=N(A(pr),2),mn=N(A(Sn),2),Nn=mr=>{var It=Ly(),Ln=N(Ne(It),2);vn(Ln,"title","Create an empty JSON object (press '{')");var Ir=N(Ln,2);vn(Ir,"title","Create an empty JSON array (press '[')"),se("click",Ln,jo(()=>Pe()())),se("click",Ir,jo(()=>it()())),P(mr,It)};Y(mn,mr=>{Xn()||mr(Nn)}),se("click",pr,()=>$t()()),P(lr,pr),ct()})(ht,{get readOnly(){return g()},onCreateObject:()=>{Ft(),Un("{")},onCreateArray:()=>{Ft(),Un("[")},onClick:()=>{Ft()}})},Pn=ht=>{var lr=S1(),qn=Ne(lr),Xn=fe(()=>g()?[]:[{icon:Pl,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Te}]);Mo(qn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Xn)}}),cg(N(qn,2),{get text(){return n(je)},get json(){return n(_)},get indentation(){return Q()},get parser(){return $()}}),P(ht,lr)};Y(sn,ht=>{n(je)===""||n(je)===void 0?ht(Wt):ht(Pn,!1)}),P(Ve,vt)},Oe=Ve=>{var vt=z1(),sn=Ne(vt);tg(A(sn),{get json(){return n(_)},get documentState(){return n(V)},get parser(){return $()},get showSearch(){return n(_e)},get showReplace(){return n(jt)},get readOnly(){return g()},columns:void 0,onSearch:_t,onFocus:Be,onPatch:nn,onClose:Ue});var Wt=N(sn,2);vn(Wt,"data-jsoneditor-scrollable-contents",!0);var Pn=A(Wt),ht=Pe=>{P(Pe,O1())};Y(Pn,Pe=>{n(_e)&&Pe(ht)}),Du(N(Pn,2),{get value(){return n(_)},pointer:"",get state(){return n(V)},get validationErrors(){return n(H)},get searchResults(){return n(De)},get selection(){return n(R)},get context(){return n(gn)},onDragSelectionStart:wr}),Yn(Wt,Pe=>f(u,Pe),()=>n(u));var lr=N(Wt,2),qn=Pe=>{var $t=fe(()=>"You pasted a JSON ".concat(Array.isArray(n(Xe).contents)?"array":"object"," as text"));Mo(Pe,{type:"info",get message(){return n($t)},actions:[{icon:Ns,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Bn},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:ir}]})};Y(lr,Pe=>{n(Xe)&&Pe(qn)});var Xn=N(lr,2),it=Pe=>{var $t=fe(()=>g()?[]:[{icon:rd,text:"Ok",title:"Accept the repaired document",onClick:Le},{icon:Pl,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Te}]);Mo(Pe,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n($t)},onClose:Ft})};Y(Xn,Pe=>{n(tt)&&Pe(it)}),qd(N(Xn,2),{get validationErrors(){return n(Fe)},selectError:ut}),P(Ve,vt)};Y($e,Ve=>{n(_)===void 0?Ve(Se):Ve(Oe,!1)}),se("paste",qe,zn),P(w,F)},Ot=w=>{P(w,$1())};Y(Ae,w=>{a?w(Ot,!1):w(We)}),Yn(J,w=>f(h,w),()=>n(h));var Xt=N(J,2),Gt=w=>{Xh(w,{onClose:()=>f(q,!1)})};Y(Xt,w=>{n(q)&&w(Gt)});var jn=N(Xt,2),xn=w=>{Gh(w,Aa(()=>n(ae),{onClose:()=>{var F;(F=n(ae))===null||F===void 0||F.onClose(),f(ae,void 0)}}))};return Y(jn,w=>{n(ae)&&w(xn)}),we(()=>k=St(J,1,"jse-tree-mode svelte-vrx1dr",null,k,{"no-main-menu":!S()})),se("keydown",J,function(w){var F=ua(w),oe=w.shiftKey;if(o("keydown",{combo:F,key:w.key}),F==="Ctrl+X"&&(w.preventDefault(),pn(!0)),F==="Ctrl+Shift+X"&&(w.preventDefault(),pn(!1)),F==="Ctrl+C"&&(w.preventDefault(),Qt(!0)),F==="Ctrl+Shift+C"&&(w.preventDefault(),Qt(!1)),F==="Ctrl+D"&&(w.preventDefault(),gr()),F!=="Delete"&&F!=="Backspace"||(w.preventDefault(),er()),F==="Insert"&&(w.preventDefault(),fr("structure")),F==="Ctrl+A"&&(w.preventDefault(),f(R,Yt([]))),F==="Ctrl+Q"&&Kt(w),F==="ArrowUp"||F==="Shift+ArrowUp"){w.preventDefault();var qe=n(R)?Hv(n(_),n(V),n(R),oe)||n(R):hs(n(_),n(V));f(R,qe),Ct(Qe(qe))}if(F==="ArrowDown"||F==="Shift+ArrowDown"){w.preventDefault();var $e=n(R)?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(ht){var qn=lr?Qe(ht):Ia(Wt,ht),Xn=br(Je(Wt,qn))?Bv(Wt,Pn,qn,!0):Pn,it=Qc(Wt,Pn,qn),Pe=Qc(Wt,Xn,qn);if(lr)return _r(ht)?it!==void 0?Ur(it,it):void 0:uo(ht)?Pe!==void 0?Ur(Pe,Pe):void 0:Pe!==void 0?Ur(Ka(ht),Pe):void 0;if(uo(ht))return Pe!==void 0?Yt(Pe):void 0;if(_r(ht)||En(ht))return it!==void 0?Yt(it):void 0;if(Sr(ht)){if(it===void 0||it.length===0)return;var $t=on(it),pr=Je(Wt,$t);return Array.isArray(pr)?Yt(it):va(it)}return Jn(ht)?Pe!==void 0?Yt(Pe):it!==void 0?Yt(it):void 0:void 0}}(n(_),n(V),n(R),oe)||n(R):hs(n(_),n(V));f(R,$e),Ct(Qe($e))}if(F==="ArrowLeft"||F==="Shift+ArrowLeft"){w.preventDefault();var Se=n(R)?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],qn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ht){var{caret:Xn,previous:it}=Jv(Wt,Pn,ht,qn);if(lr)return Jn(ht)?void 0:Ur(ht.path,ht.path);if(Xn&&it)return Au(it);var Pe=on(Qe(ht)),$t=Je(Wt,Pe);return En(ht)&&Array.isArray($t)?Ur(ht.path,ht.path):Jn(ht)&&!Array.isArray($t)?va(ht.focusPath):void 0}}(n(_),n(V),n(R),oe,!g())||n(R):hs(n(_),n(V));f(R,Se),Ct(Qe(Se))}if(F==="ArrowRight"||F==="Shift+ArrowRight"){w.preventDefault();var Oe=n(R)&&n(_)!==void 0?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],qn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ht){var{caret:Xn,next:it}=Jv(Wt,Pn,ht,qn);return lr?Jn(ht)?void 0:Ur(ht.path,ht.path):Xn&&it?Au(it):Jn(ht)?Yt(ht.focusPath):void 0}}(n(_),n(V),n(R),oe,!g())||n(R):hs(n(_),n(V));f(R,Oe),Ct(Qe(Oe))}if(F==="Enter"&&n(R)){if(jc(n(R))){var Ve=n(R).focusPath,vt=Je(n(_),on(Ve));Array.isArray(vt)&&(w.preventDefault(),f(R,Yt(Ve)))}Sr(n(R))&&(w.preventDefault(),f(R,ge(ge({},n(R)),{},{edit:!0}))),En(n(R))&&(w.preventDefault(),br(Je(n(_),n(R).path))?Ut(n(R).path,!0):f(R,ge(ge({},n(R)),{},{edit:!0})))}if(F.replace(/^Shift\+/,"").length===1&&n(R))return w.preventDefault(),void Un(w.key);if(F==="Enter"&&(uo(n(R))||_r(n(R))))return w.preventDefault(),void Un("");if(F==="Ctrl+Enter"&&En(n(R))){var sn=Je(n(_),n(R).path);hc(sn)&&window.open(String(sn),"_blank")}F==="Escape"&&n(R)&&(w.preventDefault(),f(R,void 0)),F==="Ctrl+F"&&(w.preventDefault(),X(!1)),F==="Ctrl+H"&&(w.preventDefault(),X(!0)),F==="Ctrl+Z"&&(w.preventDefault(),xe()),F==="Ctrl+Shift+Z"&&(w.preventDefault(),st())}),se("mousedown",J,function(w){o("handleMouseDown",w);var F=w.target;bh(F,"BUTTON")||F.isContentEditable||(Ft(),n(R)||n(_)!==void 0||n(je)!==""&&n(je)!==void 0||(o("createDefaultSelection"),f(R,Yt([]))))}),se("contextmenu",J,Kt),P(e,Fn),xt(t,"expand",ze),xt(t,"collapse",mt),xt(t,"validate",Tt),xt(t,"getJson",an),xt(t,"patch",fn),xt(t,"acceptAutoRepair",Le),xt(t,"openTransformModal",tn),xt(t,"scrollTo",rt),xt(t,"findElement",un),xt(t,"focus",Ft),ct({expand:ze,collapse:mt,validate:Tt,getJson:an,patch:fn,acceptAutoRepair:Le,openTransformModal:tn,scrollTo:rt,findElement:un,focus:Ft})}function dg(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,a)=>dg(Reflect.get(r,o,a)),set:()=>!1,deleteProperty:()=>!1});var t}var bl=Or("jsoneditor:History");function vg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function a(){return o<r.length}function s(){return o>0}function i(){return{canUndo:a(),canRedo:s(),items:()=>r.slice().reverse(),add:c,undo:d,redo:h,clear:u}}function l(){e.onChange&&e.onChange(i())}function c(p){bl("add",p),r=[p].concat(r.slice(o)).slice(0,t),o=0,l()}function u(){bl("clear"),r=[],o=0,l()}function d(){if(a()){var p=r[o];return o+=1,bl("undo",p),l(),p}}function h(){if(s())return bl("redo",r[o-=1]),l(),r[o]}return{get:i}}bt(`/* over all fonts, sizes, and colors */
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
}`);var hi=pc(()=>Y0),gs=pc(()=>Q0),A1=L('<div class="query-error svelte-rrrjnb"> </div>'),P1=L("<!> <!>",1),R1=L('<div class="jse-preview jse-error svelte-rrrjnb"> </div>'),I1=L('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>',1),_1=L('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');function q1(e,t){var r,o,a;lt(t,!1);var s=Or("jsoneditor:TransformModal"),i=v(t,"id",25,()=>"transform-modal-"+Ss()),l=v(t,"json",9),c=v(t,"rootPath",25,()=>[]),u=v(t,"indentation",9),d=v(t,"escapeControlCharacters",9),h=v(t,"escapeUnicodeCharacters",9),p=v(t,"parser",9),m=v(t,"parseMemoizeOne",9),g=v(t,"validationParser",9),b=v(t,"pathParser",9),j=v(t,"queryLanguages",9),x=v(t,"queryLanguageId",13),S=v(t,"onChangeQueryLanguage",9),O=v(t,"onRenderValue",9),C=v(t,"onRenderMenu",9),y=v(t,"onRenderContextMenu",9),$=v(t,"onClassName",9),I=v(t,"onTransform",9),T=v(t,"onClose",9),z=M(void 0,!0),ne=M(vg({onChange:V=>f(ne,V)}).get(),!0),Q=M(void 0,!0),B=M(void 0,!0),G=M(!1,!0),pe="".concat(i(),":").concat(zt(c())),Z=(r=hi()[pe])!==null&&r!==void 0?r:{},de=M(gs().showWizard!==!1,!0),Me=M(gs().showOriginal!==!1,!0),ue=M((o=Z.queryOptions)!==null&&o!==void 0?o:{},!0),ve=M(x()===Z.queryLanguageId&&Z.query?Z.query:"",!0),me=M((a=Z.isManual)!==null&&a!==void 0&&a,!0),Ce=M(void 0,!0),Ge=M(void 0,!0),re=M({text:""},!0);function ie(V){var R;return(R=j().find(Ze=>Ze.id===V))!==null&&R!==void 0?R:j()[0]}function Ee(V){try{f(ue,V),f(ve,ie(x()).createQuery(n(Q),V)),f(Ce,void 0),f(me,!1),s("updateQueryByWizard",{queryOptions:n(ue),query:n(ve),isManual:n(me)})}catch(R){f(Ce,String(R))}}function At(V){f(ve,V.target.value),f(me,!0),s("handleChangeQuery",{query:n(ve),isManual:n(me)})}n(me)||Ee(n(ue)),Tr(()=>{var V;(V=n(z))===null||V===void 0||V.focus()});var te=El(function(V,R){if(V===void 0)return f(re,{text:""}),void f(Ge,"Error: No JSON");if(R.trim()!=="")try{s("previewTransform",{query:R});var Ze=ie(x()).executeQuery(V,R,p());f(re,{json:Ze}),f(Ge,void 0)}catch(wt){f(re,{text:""}),f(Ge,String(wt))}else f(re,{json:V})},300);function q(){if(n(Q)===void 0)return f(re,{text:""}),void f(Ge,"Error: No JSON");try{s("handleTransform",{query:n(ve)});var V=ie(x()).executeQuery(n(Q),n(ve),p());I()([{op:"replace",path:zt(c()),value:V}]),T()()}catch(R){console.error(R),f(re,{text:""}),f(Ge,String(R))}}function ae(){f(de,!n(de)),gs(gs().showWizard=n(de))}function _(){f(Me,!n(Me)),gs(gs().showOriginal=n(Me))}function je(V){V.focus()}function Ke(V){s("handleChangeQueryLanguage",V),x(V),S()(V),Ee(n(ue))}function W(){n(G)?f(G,!n(G)):T()()}U(()=>(E(l()),E(c())),()=>{f(Q,dg(Je(l(),c())))}),U(()=>n(Q),()=>{f(B,n(Q)?{json:n(Q)}:{text:""})}),U(()=>(n(Q),n(ve)),()=>{te(n(Q),n(ve))}),U(()=>(hi(),n(ue),n(ve),E(x()),n(me)),()=>{hi(hi()[pe]={queryOptions:n(ue),query:n(ve),queryLanguageId:x(),isManual:n(me)}),s("store state in memory",pe,hi()[pe])}),ln(),pt(!0),Fi(e,{get onClose(){return T()},className:"jse-transform-modal",get fullscreen(){return n(G)},children:(V,R)=>{var Ze=_1();zu(A(Ze),{children:(wt,et)=>{var Xe=I1(),De=Ne(Xe);(function(dt,Qt){lt(Qt,!1);var bn,zn=v(Qt,"queryLanguages",9),wn=v(Qt,"queryLanguageId",9),_n=v(Qt,"fullscreen",13),Qn=v(Qt,"onChangeQueryLanguage",9),zr=v(Qt,"onClose",9),er=M(void 0,!0),{openAbsolutePopup:gr,closeAbsolutePopup:xr}=Ba("absolute-popup");function fr(){var Wn={queryLanguages:zn(),queryLanguageId:wn(),onChangeQueryLanguage:tr=>{xr(bn),Qn()(tr)}};bn=gr(Px,Wn,{offsetTop:-2,offsetLeft:0,anchor:n(er),closeOnOuterClick:!0})}pt(!0),Ql(dt,{title:"Transform",fullScreenButton:!0,get onClose(){return zr()},get fullscreen(){return _n()},set fullscreen(Wn){_n(Wn)},$$slots:{actions:(Wn,tr)=>{var le,Nt=_x();en(A(Nt),{data:Im}),Yn(Nt,Un=>f(er,Un),()=>n(er)),we(()=>le=St(Nt,1,"jse-config svelte-1kpylsp",null,le,{hide:zn().length<=1})),se("click",Nt,fr),P(Wn,Nt)}},$$legacy:!0}),ct()})(De,{get queryLanguages(){return j()},get queryLanguageId(){return x()},onChangeQueryLanguage:Ke,get onClose(){return T()},get fullscreen(){return n(G)},set fullscreen(dt){f(G,dt)},$$legacy:!0});var _e=A(N(De,2)),jt=A(_e),_t=N(A(jt),2);nh(A(_t),()=>ie(x()).description,!1,!1);var Be=N(_t,4),be=N(Be,2),Ue=A(be),ut=A(Ue),ze=A(ut),mt=fe(()=>n(de)?_a:Ei);en(ze,{get data(){return n(mt)}});var tt=N(be,2),Fe=dt=>{var Qt=Lt(),bn=Ne(Qt),zn=_n=>{var Qn=P1(),zr=Ne(Qn);$x(zr,{get queryOptions(){return n(ue)},get json(){return n(Q)},onChange:Ee});var er=N(zr,2),gr=xr=>{var fr=A1(),Wn=A(fr);we(()=>gt(Wn,n(Ce))),P(xr,fr)};Y(er,xr=>{n(Ce)&&xr(gr)}),P(_n,Qn)},wn=_n=>{P(_n,Lr("(Only available for arrays, not for objects)"))};Y(bn,_n=>{Array.isArray(n(Q))?_n(zn):_n(wn,!1)}),P(dt,Qt)};Y(tt,dt=>{n(de)&&dt(Fe)});var H=N(tt,4);Yn(H,dt=>f(z,dt),()=>n(z));var Ie,He,Tt=N(jt,2),an=A(Tt),Ye=A(an),Vt=A(Ye),Mn=A(Vt),On=A(Mn),Jt=fe(()=>n(Me)?_a:Ei);en(On,{get data(){return n(Jt)}});var Bt=N(Ye,2),fn=dt=>{Wu(dt,{get externalContent(){return n(B)},externalSelection:void 0,get history(){return n(ne)},readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return p()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return C()},get onRenderContextMenu(){return y()},onError:console.error,onChange:wr,onChangeMode:wr,onSelect:wr,onUndo:wr,onRedo:wr,onFocus:wr,onBlur:wr,onSortModal:wr,onTransformModal:wr,onJSONEditorModal:wr,get onClassName(){return $()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})};Y(Bt,dt=>{n(Me)&&dt(fn)});var sr=N(an,2),Dn=N(A(sr),2),cn=dt=>{Wu(dt,{get externalContent(){return n(re)},externalSelection:void 0,get history(){return n(ne)},readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return p()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return C()},get onRenderContextMenu(){return y()},onError:console.error,onChange:wr,onChangeMode:wr,onSelect:wr,onUndo:wr,onRedo:wr,onFocus:wr,onBlur:wr,onSortModal:wr,onTransformModal:wr,onJSONEditorModal:wr,get onClassName(){return $()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})},Le=dt=>{var Qt=R1(),bn=A(Qt);we(()=>gt(bn,n(Ge))),P(dt,Qt)};Y(Dn,dt=>{n(Ge)?dt(Le,!1):dt(cn)});var pn=A(N(_e,2));Pr(()=>se("click",pn,q)),Fr(pn,dt=>je==null?void 0:je(dt)),we(dt=>{Za(Be,dt),Za(H,n(ve)),Ie=St(Tt,1,"jse-data-contents svelte-rrrjnb",null,Ie,{"jse-hide-original-data":!n(Me)}),He=St(an,1,"jse-original-data svelte-rrrjnb",null,He,{"jse-hide":!n(Me)}),pn.disabled=!!n(Ge)},[()=>Rn(c())?"(document root)":Co(c())],fe),se("click",ut,ae),se("input",H,At),se("click",Mn,_),P(wt,Xe)},$$slots:{default:!0}}),Fr(Ze,(wt,et)=>Xl==null?void 0:Xl(wt,et),()=>W),P(V,Ze)},$$slots:{default:!0}}),ct()}function co(){}function gf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<.9*t)return e.toFixed()+" B";var r=e/t;if(r<.9*t)return r.toFixed(1)+" KB";var o=r/t;if(o<.9*t)return o.toFixed(1)+" MB";var a=o/t;return a<.9*t?a.toFixed(1)+" GB":(a/t).toFixed(1)+" TB"}bt(`/* over all fonts, sizes, and colors */
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
}`);var T1=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),N1=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),D1=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),U1=L('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>'),Nd=Wm.define([{tag:di.propertyName,color:"var(--internal-key-color)"},{tag:di.number,color:"var(--internal-value-color-number)"},{tag:di.bool,color:"var(--internal-value-color-boolean)"},{tag:di.string,color:"var(--internal-value-color-string)"},{tag:di.keyword,color:"var(--internal-value-color-null)"}]),B1=bp(Nd),F1=Nd.style;Nd.style=e=>F1(e||[]);var L1=[Hm.fromClass(class{constructor(e){this.view=e,this.indentUnit=av(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=av(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new Jm;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var a of o){var{numColumns:s,containsTab:i}=this.numColumns(a.text,t.tabSize),l="calc(".concat(s+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(s+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(s+this.indentUnit,"ch");e.add(a.from,a.from,Km.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:a}of this.view.visibleRanges)for(var s=o;s<=a;){var i=e.doc.lineAt(s);r!==i&&(t.add(i),r=i),s=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var a=0;a<e.length;a++)switch(e[a]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];bt(`/* over all fonts, sizes, and colors */
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
}`);var V1=L('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>',1),W1=L("<!> <!> <!> <!>",1),H1=L("<div></div> <!> <!>",1),J1=L('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>'),K1=L("<div><!> <!></div>");function Y1(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"readOnly",9),s=v(t,"mainMenuBar",9),i=v(t,"statusBar",9),l=v(t,"askToFormat",9),c=v(t,"externalContent",9),u=v(t,"externalSelection",9),d=v(t,"history",9),h=v(t,"indentation",9),p=v(t,"tabSize",9),m=v(t,"escapeUnicodeCharacters",9),g=v(t,"parser",9),b=v(t,"validator",9),j=v(t,"validationParser",9),x=v(t,"onChange",9),S=v(t,"onChangeMode",9),O=v(t,"onSelect",9),C=v(t,"onUndo",9),y=v(t,"onRedo",9),$=v(t,"onError",9),I=v(t,"onFocus",9),T=v(t,"onBlur",9),z=v(t,"onRenderMenu",9),ne=v(t,"onSortModal",9),Q=v(t,"onTransformModal",9),B=Or("jsoneditor:TextMode"),G={key:"Mod-i",run:Xe,shift:De,preventDefault:!0},pe=typeof window>"u";B("isSSR:",pe);var Z,de=M(void 0,!0),Me=M(void 0,!0),ue=M(void 0,!0),ve=M(!1,!0),me=M(l(),!0),Ce=M([],!0),Ge=new vi,re=new vi,ie=new vi,Ee=new vi,At=new vi,te=c(),q=M(Su(te,h(),g()),!0),ae=hb.define(),_=null;function je(){if(!_||_.length===0)return!1;var K=_[0].startState,xe=_[_.length-1].state,st=_.map(nt=>nt.changes).reduce((nt,qt)=>nt.compose(qt)),kt={type:"text",undo:{changes:st.invert(K.doc).toJSON(),selection:Qt(K.selection)},redo:{changes:st.toJSON(),selection:Qt(xe.selection)}};return B("add history item",kt),d().add(kt),_=null,!0}var Ke=M(m(),!0);Tr(yt(function*(){if(!pe)try{Z=function(K){var{target:xe,initialText:st,readOnly:kt,indentation:nt}=K;B("Create CodeMirror editor",{readOnly:kt,indentation:nt});var qt=function(Pt,Rt){return Gc(Pt)?Pt.ranges.every(rt=>rt.anchor<Rt.length&&rt.head<Rt.length):!1}(u(),st)?On(u()):void 0,tn=vs.create({doc:st,selection:qt,extensions:[sv.of([cb,G]),Ge.of(He()),Ym(),Qm(),Xm(),Gm(),Zm(),eb(),tb(),vs.allowMultipleSelections.of(!0),nb(),bp(ub,{fallback:!0}),rb(),xb(),yb(),ob(),ab(),sb(),ib(),sv.of([...wb,...db,...vb,{key:"Mod-z",run:Ue,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:ut,preventDefault:!0},{key:"Ctrl-Shift-z",run:ut,preventDefault:!0},...fb,...kb,...pb]),B1,Tm({hideFirstIndent:!0}),fs.domEventHandlers({dblclick:Ie}),fs.updateListener.of(Pt=>{f(ue,Pt.state),Pt.docChanged&&(Pt.transactions.some(Rt=>!!Rt.annotation(ae))||(_=[..._??[],Pt]),cn()),Pt.selectionSet&&dt()}),Nm(),lb({top:!0}),fs.lineWrapping,re.of(vs.readOnly.of(kt)),Ee.of(vs.tabSize.of(p())),ie.of(Dn(nt)),At.of(fs.theme({},{dark:Tt()}))]});return Z=new fs({state:tn,parent:xe}),qt&&Z.dispatch(Z.state.update({selection:qt.main,scrollIntoView:!0})),Z}({target:n(de),initialText:bn(n(q),n(ve))?"":n(r).escapeValue(n(q)),readOnly:a(),indentation:h()})}catch(K){console.error(K)}})),vo(()=>{Le(),Z&&(B("Destroy CodeMirror editor"),Z.destroy())});var W=Ts(),V=Ts();function R(){Z&&(B("focus"),Z.focus())}var Ze=!1;function wt(K){return et(K,!1)}function et(K,xe){B("handlePatch",K,xe);var st=g().parse(n(q)),kt=No(st,K),nt=pp(st,K);return Mn({text:g().stringify(kt,null,h())},xe,!1),{json:kt,previousJson:st,undo:nt,redo:K}}function Xe(){if(B("format"),a())return!1;try{var K=g().parse(n(q));return Mn({text:g().stringify(K,null,h())},!0,!1),f(me,l()),!0}catch(xe){$()(xe)}return!1}function De(){if(B("compact"),a())return!1;try{var K=g().parse(n(q));return Mn({text:g().stringify(K)},!0,!1),f(me,!1),!0}catch(xe){$()(xe)}return!1}function _e(){if(B("repair"),!a())try{Mn({text:To(n(q))},!0,!1),f(zn,Kc),f(wn,void 0)}catch(K){$()(K)}}function jt(){var K;if(!a())try{var xe=g().parse(n(q));Ze=!0,ne()({id:W,json:xe,rootPath:[],onSort:(K=yt(function*(st){var{operations:kt}=st;B("onSort",kt),et(kt,!0)}),function(st){return K.apply(this,arguments)}),onClose:()=>{Ze=!1,R()}})}catch(st){$()(st)}}function _t(K){var{id:xe,rootPath:st,onTransform:kt,onClose:nt}=K;try{var qt=g().parse(n(q));Ze=!0,Q()({id:xe||V,json:qt,rootPath:st||[],onTransform:tn=>{kt?kt({operations:tn,json:qt,transformedJson:No(qt,tn)}):(B("onTransform",tn),et(tn,!0))},onClose:()=>{Ze=!1,R(),nt&&nt()}})}catch(tn){$()(tn)}}function Be(){a()||_t({rootPath:[]})}function be(){Z&&(n(de)&&n(de).querySelector(".cm-search")?bb(Z):jb(Z))}function Ue(){if(a())return!1;Le();var K=d().undo();return B("undo",K),Dv(K)?(Z.dispatch({annotations:ae.of("undo"),changes:iv.fromJSON(K.undo.changes),selection:Tc.fromJSON(K.undo.selection),scrollIntoView:!0}),!0):(C()(K),!1)}function ut(){if(a())return!1;Le();var K=d().redo();return B("redo",K),Dv(K)?(Z.dispatch({annotations:ae.of("redo"),changes:iv.fromJSON(K.redo.changes),selection:Tc.fromJSON(K.redo.selection),scrollIntoView:!0}),!0):(y()(K),!1)}function ze(){f(ve,!0),Mn(c(),!0,!0)}function mt(){S()(kr.tree)}function tt(){fn()}function Fe(K){B("select validation error",K);var{from:xe,to:st}=an(K);xe!==void 0&&st!==void 0&&(H(xe,st),R())}function H(K,xe){B("setSelection",{anchor:K,head:xe}),Z&&Z.dispatch(Z.state.update({selection:{anchor:K,head:xe},scrollIntoView:!0}))}function Ie(K,xe){if(xe.state.selection.ranges.length===1){var st=xe.state.selection.ranges[0],kt=n(q).slice(st.from,st.to);if(kt==="{"||kt==="["){var nt=ov.parse(n(q)),qt=Object.keys(nt.pointers).find(Pt=>{var Rt;return((Rt=nt.pointers[Pt].value)===null||Rt===void 0?void 0:Rt.pos)===st.from}),tn=nt.pointers[qt];qt&&tn&&tn.value&&tn.valueEnd&&(B("pointer found, selecting inner contents of path:",qt,tn),H(tn.value.pos+1,tn.valueEnd.pos-1))}}}function He(){return gb(_n,{delay:300})}function Tt(){return!!n(de)&&getComputedStyle(n(de)).getPropertyValue("--jse-theme").includes("dark")}function an(K){var{path:xe,message:st,severity:kt}=K,{line:nt,column:qt,from:tn,to:Pt}=function(Rt,rt){try{var at=ov.parse(Rt),un=zt(rt),Ct=at.pointers[un];if(Ct)return{path:rt,line:Ct.key?Ct.key.line:Ct.value?Ct.value.line:0,column:Ct.key?Ct.key.column:Ct.value?Ct.value.column:0,from:Ct.key?Ct.key.pos:Ct.value?Ct.value.pos:0,to:Ct.keyEnd?Ct.keyEnd.pos:Ct.valueEnd?Ct.valueEnd.pos:0}}catch(kn){console.error(kn)}return{path:rt,line:0,column:0,from:0,to:0}}(n(r).escapeValue(n(q)),xe);return{path:xe,line:nt,column:qt,from:tn,to:Pt,message:st,severity:kt,actions:[]}}function Ye(K,xe){var{line:st,column:kt,position:nt,message:qt}=K;return{path:[],line:st,column:kt,from:nt,to:nt,severity:So.error,message:qt,actions:xe&&!a()?[{name:"Auto repair",apply:()=>_e()}]:void 0}}function Vt(K){return{from:K.from||0,to:K.to||0,message:K.message||"",actions:K.actions,severity:K.severity}}function Mn(K,xe,st){var kt=Su(K,h(),g()),nt=!Zt(K,te),qt=te;B("setCodeMirrorContent",{isChanged:nt,emitChange:xe,forceUpdate:st}),Z&&(nt||st)&&(te=K,f(q,kt),bn(n(q),n(ve))||Z.dispatch({changes:{from:0,to:Z.state.doc.length,insert:n(r).escapeValue(n(q))}}),je(),nt&&xe&&pn(te,qt))}function On(K){return Gc(K)?Tc.fromJSON(K):void 0}function Jt(){return Bt.apply(this,arguments)}function Bt(){return Bt=yt(function*(){B("refresh"),yield function(){return sr.apply(this,arguments)}()}),Bt.apply(this,arguments)}function fn(){if(Z){var K=Z?n(r).unescapeValue(Z.state.doc.toString()):"",xe=K!==n(q);if(B("onChangeCodeMirrorValue",{isChanged:xe}),xe){var st=te;f(q,K),te={text:n(q)},je(),pn(te,st),or(),dt()}}}function sr(){return(sr=yt(function*(){if(or(),Z){var K=Tt();return B("updateTheme",{dark:K}),Z.dispatch({effects:[At.reconfigure(fs.theme({},{dark:K}))]}),new Promise(xe=>setTimeout(xe))}return Promise.resolve()})).apply(this,arguments)}function Dn(K){var xe=mb.of(typeof K=="number"?" ".repeat(K):K);return K==="	"?[xe]:[xe,L1]}_d({onMount:Tr,onDestroy:vo,getWindow:()=>Xi(n(Me)),hasFocus:()=>Ze&&document.hasFocus()||jd(n(Me)),onFocus:I(),onBlur:()=>{Le(),T()()}});var cn=El(fn,300);function Le(){cn.flush()}function pn(K,xe){x()&&x()(K,xe,{contentErrors:Qn(),patchResult:void 0})}function dt(){O()(Qt(n(ue).selection))}function Qt(K){return ge({type:In.text},K.toJSON())}function bn(K,xe){return!!K&&K.length>Rv&&!xe}var zn=M(Kc,!0),wn=M(void 0,!0);function _n(){if(bn(n(q),n(ve)))return[];var K=Qn();if(Tv(K)){var{parseError:xe,isRepairable:st}=K;return[Vt(Ye(xe,st))]}return M0(K)?K.validationErrors.map(an).map(Vt):[]}function Qn(){B("validate:start"),Le();var K=zr(n(r).escapeValue(n(q)),b(),g(),j());return Tv(K)?(f(zn,K.isRepairable?_v:"invalid"),f(wn,K.parseError),f(Ce,[])):(f(zn,Kc),f(wn,void 0),f(Ce,(K==null?void 0:K.validationErrors)||[])),B("validate:end"),K}var zr=$i(Nx);function er(){n(wn)&&function(K){B("select parse error",K);var xe=Ye(K,!1);H(xe.from!=null?xe.from:0,xe.to!=null?xe.to:0),R()}(n(wn))}var gr={icon:Dm,text:"Show me",title:"Move to the parse error location",onClick:er};U(()=>E(m()),()=>{f(r,md({escapeControlCharacters:!1,escapeUnicodeCharacters:m()}))}),U(()=>E(c()),()=>{Mn(c(),!1,!1)}),U(()=>E(u()),()=>{(function(K){if(Gc(K)){var xe=On(K);!Z||!xe||n(ue)&&n(ue).selection.eq(xe)||(B("applyExternalSelection",xe),Z.dispatch({selection:xe}))}})(u())}),U(()=>E(b()),()=>{(function(K){B("updateLinter",K),Z&&Z.dispatch({effects:Ge.reconfigure(He())})})(b())}),U(()=>E(h()),()=>{(function(K){Z&&(B("updateIndentation",K),Z.dispatch({effects:ie.reconfigure(Dn(K))}))})(h())}),U(()=>E(p()),()=>{(function(K){Z&&(B("updateTabSize",K),Z.dispatch({effects:Ee.reconfigure(vs.tabSize.of(K))}))})(p())}),U(()=>E(a()),()=>{(function(K){Z&&(B("updateReadOnly",K),Z.dispatch({effects:[re.reconfigure(vs.readOnly.of(K))]}))})(a())}),U(()=>(n(Ke),E(m())),()=>{n(Ke)!==m()&&(f(Ke,m()),B("forceUpdateText",{escapeUnicodeCharacters:m()}),Z&&Z.dispatch({changes:{from:0,to:Z.state.doc.length,insert:n(r).escapeValue(n(q))}}))}),U(()=>(n(zn),E(a()),Ns),()=>{f(o,n(zn)!==_v||a()?[gr]:[{icon:Ns,text:"Auto repair",title:"Automatically repair JSON",onClick:_e},gr])}),ln(),pt(!0);var xr,fr=K1(),Wn=A(fr),tr=K=>{var xe=fe(()=>n(q).length===0),st=fe(()=>!n(xe)),kt=fe(()=>!n(xe)),nt=fe(()=>!n(xe)),qt=fe(()=>!n(xe));(function(tn,Pt){lt(Pt,!1);var Rt=M(void 0,!0),rt=v(Pt,"readOnly",9,!1),at=v(Pt,"onFormat",9),un=v(Pt,"onCompact",9),Ct=v(Pt,"onSort",9),kn=v(Pt,"onTransform",9),nn=v(Pt,"onToggleSearch",9),Dt=v(Pt,"onUndo",9),hn=v(Pt,"onRedo",9),Ut=v(Pt,"canUndo",9),nr=v(Pt,"canRedo",9),D=v(Pt,"canFormat",9),X=v(Pt,"canCompact",9),ke=v(Pt,"canSort",9),Et=v(Pt,"canTransform",9),rn=v(Pt,"onRenderMenu",9),Kt={type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:nn()},Cn=M(void 0,!0);U(()=>(E(rt()),E(at()),E(D()),E(un()),E(X()),E(Ct()),E(ke()),E(kn()),E(Et()),E(Dt()),E(Ut()),E(hn()),E(nr())),()=>{f(Cn,rt()?[Kt,{type:"space"}]:[{type:"button",icon:vf,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:at(),disabled:rt()||!D()},{type:"button",icon:Fy,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:un(),disabled:rt()||!X()},{type:"separator"},{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:Ct(),disabled:rt()||!ke()},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:kn(),disabled:rt()||!Et()},Kt,{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Dt(),disabled:!Ut()},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:hn(),disabled:!nr()},{type:"space"}])}),U(()=>(E(rn()),n(Cn)),()=>{f(Rt,rn()(n(Cn))||n(Cn))}),ln(),pt(!0),kc(tn,{get items(){return n(Rt)}}),ct()})(K,{get readOnly(){return a()},onFormat:Xe,onCompact:De,onSort:jt,onTransform:Be,onToggleSearch:be,onUndo:Ue,onRedo:ut,get canFormat(){return n(st)},get canCompact(){return n(kt)},get canSort(){return n(nt)},get canTransform(){return n(qt)},get canUndo(){return d().canUndo},get canRedo(){return d().canRedo},get onRenderMenu(){return z()}})};Y(Wn,K=>{s()&&K(tr)});var le=N(Wn,2),Nt=K=>{var xe,st=H1(),kt=fe(()=>bn(n(q),n(ve))),nt=Ne(st);Yn(nt,rt=>f(de,rt),()=>n(de));var qt=N(nt,2),tn=rt=>{var at=V1(),un=Ne(at),Ct=fe(()=>"The JSON document is larger than ".concat(gf(Rv,1024),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(gf(n(q).length,1024),"."));Mo(un,{icon:Xa,type:"error",get message(){return n(Ct)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:ze},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:mt},{text:"Cancel",title:"Cancel opening this large document.",onClick:tt}],onClose:R});var kn=A(N(un,2));we(nn=>gt(kn,nn),[()=>Ii(n(q)||"",Eu)],fe),P(rt,at)};Y(qt,rt=>{n(kt)&&rt(tn)});var Pt=N(qt,2),Rt=rt=>{var at=W1(),un=Ne(at),Ct=Ut=>{(function(nr,D){lt(D,!1);var X=v(D,"editorState",8),ke=M(),Et=M(),rn=M(),Kt=M(),Cn=M();U(()=>E(X()),()=>{var ft;f(ke,(ft=X())===null||ft===void 0||(ft=ft.selection)===null||ft===void 0||(ft=ft.main)===null||ft===void 0?void 0:ft.head)}),U(()=>(n(ke),E(X())),()=>{var ft;f(Et,n(ke)!==void 0?(ft=X())===null||ft===void 0||(ft=ft.doc)===null||ft===void 0?void 0:ft.lineAt(n(ke)):void 0)}),U(()=>n(Et),()=>{f(rn,n(Et)!==void 0?n(Et).number:void 0)}),U(()=>(n(Et),n(ke)),()=>{f(Kt,n(Et)!==void 0&&n(ke)!==void 0?n(ke)-n(Et).from+1:void 0)}),U(()=>E(X()),()=>{var ft;f(Cn,(ft=X())===null||ft===void 0||(ft=ft.selection)===null||ft===void 0||(ft=ft.ranges)===null||ft===void 0?void 0:ft.reduce((dn,gn)=>dn+gn.to-gn.from,0))}),ln(),pt();var Bn=U1(),An=A(Bn),ir=ft=>{var dn=T1(),gn=A(dn);we(()=>{var Fn;return gt(gn,"Line: ".concat((Fn=n(rn))!==null&&Fn!==void 0?Fn:""))}),P(ft,dn)};Y(An,ft=>{n(rn)!==void 0&&ft(ir)});var Te=N(An,2),Tn=ft=>{var dn=N1(),gn=A(dn);we(()=>{var Fn;return gt(gn,"Column: ".concat((Fn=n(Kt))!==null&&Fn!==void 0?Fn:""))}),P(ft,dn)};Y(Te,ft=>{n(Kt)!==void 0&&ft(Tn)});var Ft=N(Te,2),Er=ft=>{var dn=D1(),gn=A(dn);we(()=>{var Fn;return gt(gn,"Selection: ".concat((Fn=n(Cn))!==null&&Fn!==void 0?Fn:""," characters"))}),P(ft,dn)};Y(Ft,ft=>{n(Cn)!==void 0&&n(Cn)>0&&ft(Er)}),P(nr,Bn),ct()})(Ut,{get editorState(){return n(ue)}})};Y(un,Ut=>{i()&&Ut(Ct)});var kn=N(un,2),nn=Ut=>{Mo(Ut,{type:"error",icon:Xa,get message(){return n(wn).message},get actions(){return n(o)},onClick:er,onClose:R})};Y(kn,Ut=>{n(wn)&&Ut(nn)});var Dt=N(kn,2),hn=Ut=>{Mo(Ut,{type:"success",message:"Do you want to format the JSON?",actions:[{icon:vf,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Xe},{icon:oc,text:"No thanks",title:"Close this message",onClick:()=>f(me,!1)}],onClose:R})};Y(Dt,Ut=>{var nr,D;!n(wn)&&n(me)&&(nr=n(q),!(D=nr.substring(0,999).trim()).includes(`
`)&&e0.test(D))&&Ut(hn)}),qd(N(Dt,2),{get validationErrors(){return n(Ce)},selectError:Fe}),P(rt,at)};Y(Pt,rt=>{n(kt)||rt(Rt)}),we(()=>xe=St(nt,1,"jse-contents svelte-xt61xw",null,xe,{"jse-hidden":n(kt)})),P(K,st)},Un=K=>{P(K,J1())};return Y(le,K=>{pe?K(Un,!1):K(Nt)}),Yn(fr,K=>f(Me,K),()=>n(Me)),we(()=>xr=St(fr,1,"jse-text-mode svelte-xt61xw",null,xr,{"no-main-menu":!s()})),P(e,fr),xt(t,"focus",R),xt(t,"patch",wt),xt(t,"handlePatch",et),xt(t,"openTransformModal",_t),xt(t,"refresh",Jt),xt(t,"flush",Le),xt(t,"validate",Qn),ct({focus:R,patch:wt,handlePatch:et,openTransformModal:_t,refresh:Jt,flush:Le,validate:Qn})}bt(`/* over all fonts, sizes, and colors */
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
}`);var Q1=L('<button type="button"> </button>');bt(`/* over all fonts, sizes, and colors */
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
.jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
  height: 1em;
}`);var X1=L('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>'),G1=L('<button type="button"><span class="jse-column-name"> </span> <!></button>');bt(`/* over all fonts, sizes, and colors */
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
}`);var Z1=L("You can open the document in tree mode instead, or paste a JSON Array using <b>Ctrl+V</b>.",1),ew=L('<button type="button" class="jse-nested-array-action svelte-1q0ce0e"> <span class="jse-nested-array-count svelte-1q0ce0e"> </span></button>'),tw=L('<div class="jse-table-mode-welcome svelte-1q0ce0e" role="none"><div class="jse-space jse-before svelte-1q0ce0e"></div> <div class="jse-nested-arrays svelte-1q0ce0e"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1q0ce0e"><!> <!></div> <!> <button type="button" class="jse-nested-array-action svelte-1q0ce0e"> </button></div> <div class="jse-space jse-after svelte-1q0ce0e"></div></div>');function nw(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=v(t,"text",9),l=v(t,"json",9),c=v(t,"readOnly",9),u=v(t,"parser",9),d=v(t,"openJSONEditorModal",9),h=v(t,"onChangeMode",9),p=v(t,"onClick",9),m=M(void 0,!0);U(()=>E(c()),()=>{f(r,c()?"View":"Edit")}),U(()=>(E(l()),hf),()=>{f(m,l()?hf(l()).slice(0,99).filter(B=>B.length>0):[])}),U(()=>n(m),()=>{f(o,!Rn(n(m)))}),U(()=>(E(l()),E(i())),()=>{f(a,l()===void 0&&(i()===""||i()===void 0))}),U(()=>(n(o),n(a),E(l()),E(u())),()=>{f(s,n(o)?"Object with nested arrays":n(a)?"An empty document":Mr(l())?"An object":Cr(l())?"An empty array":"A ".concat(gd(l(),u())))}),ln(),pt(!0);var g=tw(),b=N(A(g),2),j=A(b),x=A(j),S=N(j,2),O=A(S),C=B=>{P(B,Lr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},y=B=>{var G=Lr();we(()=>{var pe;return gt(G,"".concat((pe=n(s))!==null&&pe!==void 0?pe:""," cannot be opened in table mode."))}),P(B,G)};Y(O,B=>{n(o)?B(C):B(y,!1)});var $=N(O,2),I=B=>{P(B,Z1())},T=B=>{P(B,Lr("You can open the document in tree mode instead."))};Y($,B=>{n(a)&&!c()?B(I):B(T,!1)});var z=N(S,2);vr(z,1,()=>n(m),jr,(B,G)=>{var pe=ew(),Z=fe(()=>function(ue){return Je(l(),ue).length}(n(G))),de=A(pe),Me=A(N(de));we(ue=>{var ve,me,Ce;gt(de,"".concat((ve=n(r))!==null&&ve!==void 0?ve:"",' "').concat(ue??"",'" ')),gt(Me,"(".concat((me=n(Z))!==null&&me!==void 0?me:""," ").concat((Ce=n(Z)!==1?"items":"item")!==null&&Ce!==void 0?Ce:"",")"))},[()=>Co(n(G))],fe),se("click",pe,()=>d()(n(G))),P(B,pe)});var ne=N(z,2),Q=A(ne);we(()=>{var B;gt(x,n(s)),gt(Q,"".concat((B=n(r))!==null&&B!==void 0?B:""," in tree mode"))}),se("click",ne,()=>h()(kr.tree)),se("click",g,()=>p()()),P(e,g),ct()}bt(`/* over all fonts, sizes, and colors */
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
.jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var rw=L('<button type="button"><!></button>');bt(`/* over all fonts, sizes, and colors */
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
}`);var ow=L('<div class="jse-table-root-error svelte-u14cgx"><!></div>'),aw=L('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),sw=L('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),iw=L('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>'),lw=L('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>'),cw=L('<td class="jse-table-cell svelte-u14cgx"><div><!><!></div> <!></td>'),uw=L('<td class="jse-table-cell svelte-u14cgx"></td>'),dw=L('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>'),vw=L('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!>',1),fw=L("<!> <!>",1),pw=L('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"></label> <!>',1),hw=L('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>'),gw=L('<div role="table"><!> <!></div> <!> <!>',1);function mw(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=Or("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=Ba("absolute-popup"),c=Yh(),u=Ts(),d=Ts(),h=typeof window>"u";s("isSSR:",h);var p=v(t,"readOnly",9),m=v(t,"externalContent",9),g=v(t,"externalSelection",9),b=v(t,"history",9),j=v(t,"mainMenuBar",9),x=v(t,"escapeControlCharacters",9),S=v(t,"escapeUnicodeCharacters",9),O=v(t,"flattenColumns",9),C=v(t,"parser",9),y=v(t,"parseMemoizeOne",9),$=v(t,"validator",9),I=v(t,"validationParser",9),T=v(t,"indentation",9),z=v(t,"onChange",9),ne=v(t,"onChangeMode",9),Q=v(t,"onSelect",9),B=v(t,"onUndo",9),G=v(t,"onRedo",9),pe=v(t,"onRenderValue",9),Z=v(t,"onRenderMenu",9),de=v(t,"onRenderContextMenu",9),Me=v(t,"onFocus",9),ue=v(t,"onBlur",9),ve=v(t,"onSortModal",9),me=v(t,"onTransformModal",9),Ce=v(t,"onJSONEditorModal",9),Ge=M(void 0,!0),re=M(void 0,!0),ie=M(void 0,!0),Ee=M(void 0,!0),At=M(void 0,!0);_d({onMount:Tr,onDestroy:vo,getWindow:()=>Xi(n(re)),hasFocus:()=>jt&&document.hasFocus()||jd(n(re)),onFocus:()=>{_t=!0,Me()&&Me()()},onBlur:()=>{_t=!1,ue()&&ue()()}});var te,q=M(void 0,!0),ae=M(void 0,!0),_=M(void 0,!0),je=M(void 0,!0),Ke=M(void 0,!0),W=M(!1,!0),V=M(!1,!0);function R(k){f(Ke,(te=k)?qh(n(q),te.items):void 0)}function Ze(k){return wt.apply(this,arguments)}function wt(){return(wt=yt(function*(k){f(H,void 0),yield bn(k)})).apply(this,arguments)}function et(){f(W,!1),f(V,!1),Le()}var Xe=M(1e4,!0),De=M([],!0),_e=M(void 0,!0),jt=!1,_t=!1,Be=M(!1,!0),be=M({},!0),Ue=M(600,!0),ut=M(0,!0),ze=18;function mt(k){f(H,k)}function tt(k){n(H)&&k!==void 0&&(Ca(k,Ka(n(H)))&&Ca(k,Qe(n(H)))||(s("clearing selection: path does not exist anymore",n(H)),f(H,void 0)))}var Fe=M(n(q)!==void 0?Mu({json:n(q)}):void 0,!0),H=M(Ni(g())?g():void 0,!0),Ie=M(void 0,!0),He=M(!1,!0);function Tt(k){if(!p()){s("onSortByHeader",k);var J=k.sortDirection===mo.desc?-1:1;fn(eg(n(q),[],k.path,J),(ce,he)=>({state:he,sortedColumn:k}))}}Tr(()=>{n(H)&&wn(Qe(n(H)))});var an=M(void 0,!0);function Ye(k){if(k.json!==void 0||k.text!==void 0){var J=n(q)!==void 0&&k.json!==void 0;b().add({type:"tree",undo:{patch:J?[{op:"replace",path:"",value:k.json}]:void 0,json:k.json,text:k.text,documentState:k.documentState,textIsRepaired:k.textIsRepaired,selection:_o(k.selection),sortedColumn:k.sortedColumn},redo:{patch:J?[{op:"replace",path:"",value:n(q)}]:void 0,json:n(q),text:n(ae),documentState:n(Fe),textIsRepaired:n(He),selection:_o(n(H)),sortedColumn:n(Ie)}})}}var Vt=M([],!0),Mn=$i(Qh);function On(k,J,ce,he){Es(()=>{var ye;try{ye=Mn(k,J,ce,he)}catch(Re){ye=[{path:[],message:"Failed to validate: "+Re.message,severity:So.warning}]}Zt(ye,n(Vt))||(s("validationErrors changed:",ye),f(Vt,ye))},ye=>s("validationErrors updated in ".concat(ye," ms")))}function Jt(){return s("validate"),n(_)?{parseError:n(_),isRepairable:!1}:(On(n(q),$(),C(),I()),Rn(n(Vt))?void 0:{validationErrors:n(Vt)})}function Bt(k,J){if(s("patch",k,J),n(q)===void 0)throw new Error("Cannot apply patch: no JSON");var ce=n(q),he={json:void 0,text:n(ae),documentState:n(Fe),selection:_o(n(H)),sortedColumn:n(Ie),textIsRepaired:n(He)},ye=_h(n(q),k),Re=Ch(n(q),n(Fe),k),Ae=d1(n(Ie),k,n(De)),We=typeof J=="function"?J(Re.json,Re.documentState,n(H)):void 0;return f(q,(We==null?void 0:We.json)!==void 0?We.json:Re.json),f(Fe,(We==null?void 0:We.state)!==void 0?We.state:Re.documentState),f(H,(We==null?void 0:We.selection)!==void 0?We.selection:n(H)),f(Ie,(We==null?void 0:We.sortedColumn)!==void 0?We.sortedColumn:Ae),f(ae,void 0),f(He,!1),f(je,void 0),f(_,void 0),b().add({type:"tree",undo:ge({patch:ye},he),redo:{patch:k,json:void 0,text:void 0,documentState:n(Fe),selection:_o(n(H)),sortedColumn:n(Ie),textIsRepaired:n(He)}}),{json:n(q),previousJson:ce,undo:ye,redo:k}}function fn(k,J){s("handlePatch",k,J);var ce={json:n(q),text:n(ae)},he=Bt(k,J);return sr(ce,he),he}function sr(k,J){if((k.json!==void 0||(k==null?void 0:k.text)!==void 0)&&z()){if(n(ae)!==void 0){var ce={text:n(ae),json:void 0};z()(ce,k,{contentErrors:Jt(),patchResult:J})}else if(n(q)!==void 0){var he={text:void 0,json:n(q)};z()(he,k,{contentErrors:Jt(),patchResult:J})}}}function Dn(k){s("pasted json as text",k),f(je,k)}function cn(k){var J=parseInt(k[0],10),ce=[String(J+1),...k.slice(1)];return Ca(n(q),ce)?Yt(ce):Yt(k)}function Le(){s("focus"),n(Ee)&&(n(Ee).focus(),n(Ee).select())}function pn(k){f(ut,k.target.scrollTop)}function dt(){n(H)||f(H,function(){if(Cr(n(q))&&!Rn(n(q))&&!Rn(n(De)))return Yt(["0",...n(De)[0]])}())}function Qt(){if(n(He)&&n(q)!==void 0){var k={json:n(q),text:n(ae)},J={json:n(q),documentState:n(Fe),selection:n(H),sortedColumn:n(Ie),text:n(ae),textIsRepaired:n(He)};f(ae,void 0),f(He,!1),tt(n(q)),Ye(J),sr(k,void 0)}return{json:n(q),text:n(ae)}}function bn(k){var J=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ce=n(W)?yi:0,he=pf(k,n(De),be,ze),ye=he-n(ut)+ce+ze,Re=_n(k);if(s("scrollTo",{path:k,top:he,scrollTop:n(ut),elem:Re}),!n(ie))return Promise.resolve();var Ae=n(ie).getBoundingClientRect();if(Re&&!J){var We=Re.getBoundingClientRect();if(We.bottom>Ae.top&&We.top<Ae.bottom)return Promise.resolve()}var Ot=-Math.max(ce+2*ze,Ae.height/4);return new Promise(Re?Xt=>{c(Re,{container:n(ie),offset:Ot,duration:300,callback:()=>{zn(k),Xt()}})}:Xt=>{c(ye,{container:n(ie),offset:Ot,duration:300,callback:()=>{or(),zn(k),Xt()}})})}function zn(k){var J=_n(k);if(J&&n(ie)){var ce=n(ie).getBoundingClientRect(),he=J.getBoundingClientRect();if(he.right>ce.right){var ye=he.right-ce.right;oo(ie,n(ie).scrollLeft+=ye)}if(he.left<ce.left){var Re=ce.left-he.left;oo(ie,n(ie).scrollLeft-=Re)}}}function wn(k){(function(J){if(n(ie)){var{rowIndex:ce}=lo(J,n(De)),he=pf(J,n(De),be,ze),ye=he+(be[ce]||ze),Re=ze,Ae=n(ie).getBoundingClientRect(),We=n(ut),Ot=n(ut)+Ae.height-Re;if(ye>Ot){var Xt=ye-Ot;oo(ie,n(ie).scrollTop+=Xt)}if(he<We){var Gt=We-he;oo(ie,n(ie).scrollTop-=Gt)}}})(k),zn(k)}function _n(k){var J,ce,he=n(De).find(Re=>da(k.slice(1),Re)),ye=he?k.slice(0,1).concat(he):k;return(J=(ce=n(ie))===null||ce===void 0?void 0:ce.querySelector('td[data-path="'.concat(Ou(ye),'"]')))!==null&&J!==void 0?J:void 0}function Qn(k){var J,{anchor:ce,left:he,top:ye,width:Re,height:Ae,offsetTop:We,offsetLeft:Ot,showTip:Xt}=k,Gt=function(F){var{json:oe,documentState:qe,selection:$e,readOnly:Se,onEditValue:Oe,onEditRow:Ve,onToggleEnforceString:vt,onCut:sn,onCopy:Wt,onPaste:Pn,onRemove:ht,onDuplicateRow:lr,onInsertBeforeRow:qn,onInsertAfterRow:Xn,onRemoveRow:it}=F,Pe=oe!==void 0,$t=!!$e,pr=oe!==void 0&&$e?Je(oe,Qe($e)):void 0,Sn=Pe&&(Jn($e)||Sr($e)||En($e)),mn=!Se&&Pe&&$e!==void 0&&Fl($e),Nn=mn&&!br(pr),mr=!Se&&Sn,It=$e!==void 0&&sa(oe,qe,Qe($e));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>Oe(),icon:$s,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!mn},width:"11em",items:[{type:"button",icon:$s,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>Oe(),disabled:!mn},{type:"button",icon:It?cp:up,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>vt(),disabled:!Nn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>sn(!0),icon:Ms,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!mr},width:"10em",items:[{type:"button",icon:Ms,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>sn(!0),disabled:Se||!Sn},{type:"button",icon:Ms,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>sn(!1),disabled:Se||!Sn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Wt(!0),icon:ka,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Sn},width:"12em",items:[{type:"button",icon:ka,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Wt(!1),disabled:!Sn},{type:"button",icon:ka,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Wt(!1),disabled:!Sn}]},{type:"button",onClick:()=>Pn(),icon:dp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Se||!$t},{type:"button",onClick:()=>ht(),icon:pu,text:"Remove",title:"Remove selected contents (Delete)",disabled:Se||!Sn}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Ve(),icon:$s,text:"Edit row",title:"Edit the current row",disabled:Se||!$t||!Pe},{type:"button",onClick:()=>lr(),icon:vp,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Se||!$t||!Pe},{type:"button",onClick:()=>qn(),icon:ks,text:"Insert before",title:"Insert a row before the current row",disabled:Se||!$t||!Pe},{type:"button",onClick:()=>Xn(),icon:ks,text:"Insert after",title:"Insert a row after the current row",disabled:Se||!$t||!Pe},{type:"button",onClick:()=>it(),icon:pu,text:"Remove row",title:"Remove current row",disabled:Se||!$t||!Pe}]}]}]}({json:n(q),documentState:n(Fe),selection:n(H),readOnly:p(),onEditValue:gr,onEditRow:xr,onToggleEnforceString:fr,onCut:xe,onCopy:kt,onPaste:le,onRemove:qt,onDuplicateRow:tn,onInsertBeforeRow:Pt,onInsertAfterRow:Rt,onRemoveRow:rt}),jn=(J=de()(Gt))!==null&&J!==void 0?J:Gt;if(jn!==!1){var xn={left:he,top:ye,offsetTop:We,offsetLeft:Ot,width:Re,height:Ae,anchor:ce,closeOnOuterClick:!0,onClose:()=>{jt=!1,Le()}};jt=!0;var w=i(ug,{tip:Xt?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:jn,onRequestClose(){l(w),Le()}},xn)}}function zr(k){if(!Kr(n(H)))if(k&&(k.stopPropagation(),k.preventDefault()),k&&k.type==="contextmenu"&&k.target!==n(Ee))Qn({left:k.clientX,top:k.clientY,width:ea,height:Zo,showTip:!1});else{var J,ce=(J=n(ie))===null||J===void 0?void 0:J.querySelector(".jse-table-cell.jse-selected-value");if(ce)Qn({anchor:ce,offsetTop:2,width:ea,height:Zo,showTip:!1});else{var he,ye=(he=n(ie))===null||he===void 0?void 0:he.getBoundingClientRect();ye&&Qn({top:ye.top+2,left:ye.left+2,width:ea,height:Zo,showTip:!1})}}}function er(k){Qn({anchor:jh(k.target,"BUTTON"),offsetTop:0,width:ea,height:Zo,showTip:!0})}function gr(){if(!p()&&n(H)){var k=Qe(n(H));br(Je(n(q),k))?Ut(k):f(H,Yt(k))}}function xr(){!p()&&n(H)&&Ut(Qe(n(H)).slice(0,1))}function fr(){if(!p()&&En(n(H))){var k=n(H).path,J=zt(k),ce=Je(n(q),k),he=!sa(n(q),n(Fe),k),ye=he?String(ce):ti(String(ce),C());s("handleToggleEnforceString",{enforceString:he,value:ce,updatedValue:ye}),fn([{op:"replace",path:J,value:ye}],(Re,Ae)=>({state:bc(n(q),Ae,k,{type:"value",enforceString:he})}))}}function Wn(){return tr.apply(this,arguments)}function tr(){return(tr=yt(function*(){if(s("apply pasted json",n(je)),n(je)){var{onPasteAsJson:k}=n(je);k(),setTimeout(Le)}})).apply(this,arguments)}function le(){return Nt.apply(this,arguments)}function Nt(){return(Nt=yt(function*(){try{Ct(yield navigator.clipboard.readText())}catch(k){console.error(k),f(Be,!0)}})).apply(this,arguments)}function Un(){s("clear pasted json"),f(je,void 0),Le()}function K(){ne()(kr.text)}function xe(k){return st.apply(this,arguments)}function st(){return(st=yt(function*(k){yield og({json:n(q),selection:n(H),indentation:k?T():void 0,readOnly:p(),parser:C(),onPatch:fn})})).apply(this,arguments)}function kt(){return nt.apply(this,arguments)}function nt(){return nt=yt(function*(){var k=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(q)!==void 0&&(yield ag({json:n(q),selection:n(H),indentation:k?T():void 0,parser:C()}))}),nt.apply(this,arguments)}function qt(){ig({json:n(q),text:n(ae),selection:n(H),keepSelection:!0,readOnly:p(),onChange:z(),onPatch:fn})}function tn(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=lo(Qe(ce),he);Br("duplicate row",{rowIndex:Ae});var Ot=[String(Ae)];Re(Ph(J,[Ot]),(Xt,Gt)=>({state:Gt,selection:Yt(Va({rowIndex:Ae<J.length?Ae+1:Ae,columnIndex:We},he))}))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function Pt(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae}=lo(Qe(ce),he);Br("insert before row",{rowIndex:Ae}),Re(zs(J,[String(Ae)],[{key:"",value:Mr(J[0])?{}:""}]))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function Rt(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=lo(Qe(ce),he);Br("insert after row",{rowIndex:Ae});var Ot=Ae+1,Xt=[String(Ot)],Gt=[{key:"",value:Mr(J[0])?{}:""}];Re(Ot<J.length?zs(J,Xt,Gt):Pu(J,[],Gt),(jn,xn)=>({state:xn,selection:Yt(Va({rowIndex:Ot,columnIndex:We},he))}))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function rt(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=lo(Qe(ce),he);Br("remove row",{rowIndex:Ae}),Re(Vl([[String(Ae)]]),(Ot,Xt)=>{var Gt=Ae<Ot.length?Ae:Ae>0?Ae-1:void 0,jn=Gt!==void 0?Yt(Va({rowIndex:Gt,columnIndex:We},he)):void 0;return Br("remove row new selection",{rowIndex:Ae,newRowIndex:Gt,newSelection:jn}),{state:Xt,selection:jn}})}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function at(){return(at=yt(function*(k){yield lg({char:k,selectInside:!1,json:n(q),selection:n(H),readOnly:p(),parser:C(),onPatch:fn,onReplaceJson:kn,onSelect:mt})})).apply(this,arguments)}function un(k){var J;k.preventDefault(),Ct((J=k.clipboardData)===null||J===void 0?void 0:J.getData("text/plain"))}function Ct(k){k!==void 0&&sg({clipboardText:k,json:n(q),selection:n(H),readOnly:p(),parser:C(),onPatch:fn,onChangeText:nn,openRepairModal:nr})}function kn(k,J){var ce={json:n(q),text:n(ae)},he={json:n(q),documentState:n(Fe),selection:n(H),sortedColumn:n(Ie),text:n(ae),textIsRepaired:n(He)},ye=ro(k,n(Fe)),Re=typeof J=="function"?J(k,ye,n(H)):void 0;f(q,(Re==null?void 0:Re.json)!==void 0?Re.json:k),f(Fe,(Re==null?void 0:Re.state)!==void 0?Re.state:ye),f(H,(Re==null?void 0:Re.selection)!==void 0?Re.selection:n(H)),f(Ie,void 0),f(ae,void 0),f(He,!1),f(_,void 0),tt(n(q)),Ye(he),sr(ce,void 0)}function nn(k,J){s("handleChangeText");var ce={json:n(q),text:n(ae)},he={json:n(q),documentState:n(Fe),selection:n(H),sortedColumn:n(Ie),text:n(ae),textIsRepaired:n(He)};try{f(q,y()(k)),f(Fe,ro(n(q),n(Fe))),f(ae,void 0),f(He,!1),f(_,void 0)}catch(Re){try{f(q,y()(To(k))),f(Fe,ro(n(q),n(Fe))),f(ae,k),f(He,!0),f(_,void 0)}catch{f(q,void 0),f(Fe,void 0),f(ae,k),f(He,!1),f(_,n(ae)!==""?Us(n(ae),Re.message||String(Re)):void 0)}}if(typeof J=="function"){var ye=J(n(q),n(Fe),n(H));f(q,(ye==null?void 0:ye.json)!==void 0?ye.json:n(q)),f(Fe,(ye==null?void 0:ye.state)!==void 0?ye.state:n(Fe)),f(H,(ye==null?void 0:ye.selection)!==void 0?ye.selection:n(H))}tt(n(q)),Ye(he),sr(ce,void 0)}function Dt(k){s("select validation error",k),f(H,Yt(k.path)),bn(k.path)}function hn(k){if(n(q)!==void 0){var{id:J,onTransform:ce,onClose:he}=k,ye=k.rootPath||[];jt=!0,me()({id:J||d,json:n(q),rootPath:ye||[],onTransform:Re=>{ce?ce({operations:Re,json:n(q),transformedJson:No(n(q),Re)}):(s("onTransform",ye,Re),fn(Re))},onClose:()=>{jt=!1,setTimeout(Le),he&&he()}})}}function Ut(k){s("openJSONEditorModal",{path:k}),jt=!0,Ce()({content:{json:Je(n(q),k)},path:k,onPatch:fn,onClose:()=>{jt=!1,setTimeout(Le)}})}function nr(k,J){f(At,{text:k,onParse:ce=>gc(ce,he=>Qi(he,C())),onRepair:dh,onApply:J,onClose:Le})}function D(){(function(k){p()||n(q)===void 0||(jt=!0,ve()({id:u,json:n(q),rootPath:k,onSort:J=>{var{operations:ce,itemPath:he,direction:ye}=J;s("onSort",ce,k,he,ye),fn(ce,(Re,Ae)=>({state:Ae,sortedColumn:{path:he,sortDirection:ye===-1?mo.desc:mo.asc}}))},onClose:()=>{jt=!1,setTimeout(Le)}}))})([])}function X(){hn({rootPath:[]})}function ke(k){s("openFind",{findAndReplace:k}),f(W,!1),f(V,!1),or(),f(W,!0),f(V,k)}function Et(){if(!p()&&b().canUndo){var k=b().undo();if(Bl(k)){var J={json:n(q),text:n(ae)};f(q,k.undo.patch?No(n(q),k.undo.patch):k.undo.json),f(Fe,k.undo.documentState),f(H,k.undo.selection),f(Ie,k.undo.sortedColumn),f(ae,k.undo.text),f(He,k.undo.textIsRepaired),f(_,void 0),s("undo",{item:k,json:n(q)}),sr(J,k.undo.patch&&k.redo.patch?{json:n(q),previousJson:J.json,redo:k.undo.patch,undo:k.redo.patch}:void 0),Le(),n(H)&&bn(Qe(n(H)),!1)}else B()(k)}}function rn(){if(!p()&&b().canRedo){var k=b().redo();if(Bl(k)){var J={json:n(q),text:n(ae)};f(q,k.redo.patch?No(n(q),k.redo.patch):k.redo.json),f(Fe,k.redo.documentState),f(H,k.redo.selection),f(Ie,k.redo.sortedColumn),f(ae,k.redo.text),f(He,k.redo.textIsRepaired),f(_,void 0),s("redo",{item:k,json:n(q)}),sr(J,k.undo.patch&&k.redo.patch?{json:n(q),previousJson:J.json,redo:k.redo.patch,undo:k.undo.patch}:void 0),Le(),n(H)&&bn(Qe(n(H)),!1)}else G()(k)}}function Kt(k){f(Ue,k.getBoundingClientRect().height)}U(()=>(E(x()),E(S())),()=>{f(Ge,md({escapeControlCharacters:x(),escapeUnicodeCharacters:S()}))}),U(()=>n(W),()=>{(function(k){if(n(ie)){var J=k?yi:-100;n(ie).scrollTo({top:oo(ie,n(ie).scrollTop+=J),left:n(ie).scrollLeft})}})(n(W))}),U(()=>E(m()),()=>{(function(k){var J={json:n(q)},ce=Pi(k)?k.text!==n(ae):!Zt(J.json,k.json);if(s("update external content",{isChanged:ce}),ce){var he={json:n(q),documentState:n(Fe),selection:n(H),sortedColumn:n(Ie),text:n(ae),textIsRepaired:n(He)};if(Pi(k))try{f(q,y()(k.text)),f(Fe,ro(n(q),n(Fe))),f(ae,k.text),f(He,!1),f(_,void 0)}catch(ye){try{f(q,y()(To(k.text))),f(Fe,ro(n(q),n(Fe))),f(ae,k.text),f(He,!0),f(_,void 0)}catch{f(q,void 0),f(Fe,void 0),f(ae,k.text),f(He,!1),f(_,n(ae)!==""?Us(n(ae),ye.message||String(ye)):void 0)}}else f(q,k.json),f(Fe,ro(n(q),n(Fe))),f(ae,void 0),f(He,!1),f(_,void 0);tt(n(q)),f(Ie,void 0),Ye(he)}})(m())}),U(()=>E(g()),()=>{(function(k){Zt(n(H),k)||(s("applyExternalSelection",{selection:n(H),externalSelection:k}),Ni(k)&&f(H,k))})(g())}),U(()=>(n(De),n(q),E(O()),n(Xe)),()=>{f(De,Cr(n(q))?function(k,J){var ce=new Set(J.map(zt)),he=new Set(k.map(zt));for(var ye of ce)he.has(ye)||ce.delete(ye);for(var Re of he)ce.has(Re)||ce.add(Re);return[...ce].map(qo)}(i1(n(q),O(),n(Xe)),n(De)):[])}),U(()=>(n(q),n(De)),()=>{f(_e,!(!n(q)||Rn(n(De))))}),U(()=>(n(q),n(Xe)),()=>{f(r,Array.isArray(n(q))&&n(q).length>n(Xe))}),U(()=>(n(ut),n(Ue),n(q),n(W),yi),()=>{f(o,l1(n(ut),n(Ue),n(q),be,ze,n(W)?yi:0))}),U(()=>n(q),()=>{n(q),n(ie)&&n(ie).scrollTo({top:n(ie).scrollTop,left:n(ie).scrollLeft})}),U(()=>n(H),()=>{var k;k=n(H),Zt(k,g())||(s("onSelect",k),Q()(k))}),U(()=>(E(p()),E(C()),n(Ge),n(q),n(Fe),E(pe())),()=>{f(an,{mode:kr.table,readOnly:p(),parser:C(),normalization:n(Ge),getJson:()=>n(q),getDocumentState:()=>n(Fe),findElement:_n,findNextInside:cn,focus:Le,onPatch:(k,J)=>fn(function(ce,he){return ce.flatMap(ye=>{if(od(ye)){var Re=qo(ye.path);if(Re.length>0){for(var Ae=[ye],We=on(Re);We.length>0&&!Ca(he,We);)Ae.unshift({op:"add",path:zt(We),value:{}}),We=on(We);return Ae}}return ye})}(k,n(q)),J),onSelect:mt,onFind:ke,onPasteJson:Dn,onRenderValue:pe()})}),U(()=>(n(q),E($()),E(C()),E(I())),()=>{On(n(q),$(),C(),I())}),U(()=>(n(Vt),n(De)),()=>{f(a,c1(n(Vt),n(De)))}),ln(),pt(!0);var Cn=gw();se("mousedown",aa,function(k){!ni(k.target,J=>J===n(re))&&Kr(n(H))&&(s("click outside the editor, exit edit mode"),f(H,_o(n(H))),_t&&n(Ee)&&(n(Ee).focus(),n(Ee).blur()),s("blur (outside editor)"),n(Ee)&&n(Ee).blur())});var Bn,An=Ne(Cn),ir=A(An),Te=k=>{(function(J,ce){lt(ce,!1);var he=v(ce,"containsValidArray",9),ye=v(ce,"readOnly",9),Re=v(ce,"showSearch",13,!1),Ae=v(ce,"history",9),We=v(ce,"onSort",9),Ot=v(ce,"onTransform",9),Xt=v(ce,"onContextMenu",9),Gt=v(ce,"onUndo",9),jn=v(ce,"onRedo",9),xn=v(ce,"onRenderMenu",9);function w(){Re(!Re())}var F=M(void 0,!0),oe=M(void 0,!0);U(()=>(E(ye()),E(We()),E(he()),E(Ot()),E(Xt()),E(Gt()),E(Ae()),E(jn())),()=>{f(F,ye()?[{type:"space"}]:[{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:We(),disabled:ye()||!he()},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Ot(),disabled:ye()||!he()},{type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:w,disabled:!he()},{type:"button",icon:fp,title:wd,className:"jse-contextmenu",onClick:Xt()},{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Gt(),disabled:!Ae().canUndo},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:jn(),disabled:!Ae().canRedo},{type:"space"}])}),U(()=>(E(xn()),n(F)),()=>{f(oe,xn()(n(F))||n(F))}),ln(),pt(!0),kc(J,{get items(){return n(oe)}}),ct()})(k,{get containsValidArray(){return n(_e)},get readOnly(){return p()},get history(){return b()},onSort:D,onTransform:X,onUndo:Et,onRedo:rn,onContextMenu:er,get onRenderMenu(){return Z()},get showSearch(){return n(W)},set showSearch(J){f(W,J)},$$legacy:!0})};Y(ir,k=>{j()&&k(Te)});var Tn=N(ir,2),Ft=k=>{var J=pw(),ce=Ne(J),he=A(ce);he.readOnly=!0,Yn(he,We=>f(Ee,We),()=>n(Ee));var ye=N(ce,2),Re=We=>{var Ot=vw(),Xt=Ne(Ot);tg(A(Xt),{get json(){return n(q)},get documentState(){return n(Fe)},get parser(){return C()},get showSearch(){return n(W)},get showReplace(){return n(V)},get readOnly(){return p()},get columns(){return n(De)},onSearch:R,onFocus:Ze,onPatch:fn,onClose:et});var Gt=N(Xt,2),jn=A(Gt),xn=A(jn),w=A(xn),F=A(w),oe=A(F),qe=it=>{var Pe=Lt(),$t=fe(()=>{var mn;return su([],(mn=n(a))===null||mn===void 0?void 0:mn.root)}),pr=Ne(Pe),Sn=mn=>{var Nn=ow();qs(A(Nn),{get validationError(){return n($t)},onExpand:co}),P(mn,Nn)};Y(pr,mn=>{n($t)&&mn(Sn)}),P(it,Pe)};Y(oe,it=>{var Pe;Rn((Pe=n(a))===null||Pe===void 0?void 0:Pe.root)||it(qe)});var $e=N(F);vr($e,1,()=>n(De),jr,(it,Pe)=>{var $t=aw();(function(pr,Sn){lt(Sn,!1);var mn=M(void 0,!0),Nn=M(void 0,!0),mr=M(void 0,!0),It=v(Sn,"path",9),Ln=v(Sn,"sortedColumn",9),Ir=v(Sn,"readOnly",9),po=v(Sn,"onSort",9);U(()=>(E(It()),Co),()=>{f(mn,Rn(It())?"values":Co(It()))}),U(()=>(E(Ln()),E(It())),()=>{var Gn;f(Nn,Ln()&&Zt(It(),(Gn=Ln())===null||Gn===void 0?void 0:Gn.path)?Ln().sortDirection:void 0)}),U(()=>(n(Nn),qv),()=>{f(mr,n(Nn)?qv[n(Nn)]:void 0)}),ln(),pt(!0);var Nr,Vr=G1(),Yo=A(Vr),cs=A(Yo),ga=N(Yo,2),$r=Gn=>{var Wr=X1(),eo=A(Wr),ho=fe(()=>n(Nn)===mo.asc?_a:Lm);en(eo,{get data(){return n(ho)}}),we(()=>vn(Wr,"title","Currently sorted in ".concat(n(mr)," order"))),P(Gn,Wr)};Y(ga,Gn=>{n(Nn)!==void 0&&Gn($r)}),we(Gn=>{Nr=St(Vr,1,"jse-column-header svelte-2i3vdx",null,Nr,{"jse-readonly":Ir()}),vn(Vr,"title",Ir()?n(mn):n(mn)+" (Click to sort the data by this column)"),gt(cs,Gn)},[()=>Ii(n(mn),50)],fe),se("click",Vr,function(){Ir()||po()({path:It(),sortDirection:n(Nn)===mo.asc?mo.desc:mo.asc})}),P(pr,Vr),ct()})(A($t),{get path(){return n(Pe)},get sortedColumn(){return n(Ie)},get readOnly(){return p()},onSort:Tt}),P(it,$t)});var Se=N($e),Oe=it=>{var Pe=sw(),$t=A(Pe),pr=fe(()=>Array.isArray(n(q))?n(q).length:0);(function(Sn,mn){lt(mn,!1);var Nn=v(mn,"count",9),mr=v(mn,"maxSampleCount",9),It=v(mn,"readOnly",9),Ln=v(mn,"onRefresh",9);pt(!0);var Ir,po=rw();en(A(po),{data:Vm}),we(()=>{Ir=St(po,1,"jse-column-header svelte-fzj761",null,Ir,{"jse-readonly":It()}),vn(po,"title","The Columns are created by sampling ".concat(mr()," items out of ").concat(Nn(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),se("click",po,()=>Ln()()),P(Sn,po),ct()})($t,{get count(){return n(pr)},get maxSampleCount(){return n(Xe)},get readOnly(){return p()},onRefresh:()=>f(Xe,1/0)}),P(it,Pe)};Y(Se,it=>{n(r)&&it(Oe)});var Ve,vt=N(w),sn=A(vt),Wt=N(vt);vr(Wt,1,()=>n(o).visibleItems,jr,(it,Pe,$t)=>{var pr=dw(),Sn=fe(()=>n(o).startIndex+$t),mn=fe(()=>n(a).rows[n(Sn)]),Nn=fe(()=>{var Nr;return su([String(n(Sn))],(Nr=n(mn))===null||Nr===void 0?void 0:Nr.row)}),mr=fe(()=>Ja(n(q),n(Ke),[String(n(Sn))])),It=A(pr);th(It,()=>n(Sn),Nr=>{var Vr=iw(),Yo=A(Vr),cs=N(Yo),ga=$r=>{qs($r,{get validationError(){return n(Nn)},onExpand:co})};Y(cs,$r=>{n(Nn)&&$r(ga)}),Fr(Vr,($r,Gn)=>ml==null?void 0:ml($r,Gn),()=>$r=>function(Gn,Wr){be[Wr]=Gn.getBoundingClientRect().height}($r,n(Sn))),we(()=>{var $r;return gt(Yo,"".concat(($r=n(Sn))!==null&&$r!==void 0?$r:""," "))}),P(Nr,Vr)});var Ln=N(It);vr(Ln,1,()=>n(De),jr,(Nr,Vr,Yo,cs)=>{var ga,$r=cw(),Gn=fe(()=>[String(n(Sn))].concat(n(Vr))),Wr=fe(()=>Je(n(Pe),n(Vr))),eo=fe(()=>En(n(H))&&da(n(H).path,n(Gn))),ho=fe(()=>{var yr;return(yr=n(mn))===null||yr===void 0?void 0:yr.columns[Yo]}),oi=fe(()=>su(n(Gn),n(ho))),Qr=A($r),ai=A(Qr),Mc=yr=>{var Ro=fe(()=>Iu(Ja(n(Pe),n(mr),n(Vr)))),io=fe(()=>!!n(Ro)&&n(Ro).some(La=>La.active)),Qo=fe(()=>!Rn(n(Ro)));(function(La,Xr){lt(Xr,!1);var Rc=v(Xr,"path",9),Ic=v(Xr,"value",9),_c=v(Xr,"parser",9),us=v(Xr,"isSelected",9),ci=v(Xr,"containsSearchResult",9),Vg=v(Xr,"containsActiveSearchResult",9),Wg=v(Xr,"onEdit",9);pt(!0);var ev,nl=Q1(),Hg=A(nl);we(ui=>{ev=St(nl,1,"jse-inline-value svelte-h57m0p",null,ev,{"jse-selected":us(),"jse-highlight":ci(),"jse-active":Vg()}),gt(Hg,ui)},[()=>{var ui;return Ii((ui=_c().stringify(Ic()))!==null&&ui!==void 0?ui:"",50)}],fe),se("dblclick",nl,()=>Wg()(Rc())),P(La,nl),ct()})(yr,{get path(){return n(Gn)},get value(){return n(Wr)},get parser(){return C()},get isSelected(){return n(eo)},get containsSearchResult(){return n(Qo)},get containsActiveSearchResult(){return n(io)},onEdit:Ut})},si=yr=>{var Ro=fe(()=>{var Xr;return(Xr=Ja(n(q),n(Ke),n(Gn)))===null||Xr===void 0?void 0:Xr.searchResults}),io=fe(()=>n(Wr)!==void 0?n(Wr):""),Qo=fe(()=>sa(n(q),n(Fe),n(Gn))),La=fe(()=>n(eo)?n(H):void 0);Zh(yr,{get path(){return n(Gn)},get value(){return n(io)},get enforceString(){return n(Qo)},get selection(){return n(La)},get searchResultItems(){return n(Ro)},get context(){return n(an)}})};Y(ai,yr=>{br(n(Wr))?yr(Mc):yr(si,!1)});var Ac=N(ai),ii=yr=>{var Ro=lw();xa(A(Ro),{selected:!0,onContextMenu:Qn}),P(yr,Ro)};Y(Ac,yr=>{p()||!n(eo)||Kr(n(H))||yr(ii)});var li=N(Qr,2),Pc=yr=>{qs(yr,{get validationError(){return n(oi)},onExpand:co})};Y(li,yr=>{n(oi)&&yr(Pc)}),we(yr=>{vn($r,"data-path",yr),ga=St(Qr,1,"jse-value-outer svelte-u14cgx",null,ga,{"jse-selected-value":n(eo)})},[()=>Ou(n(Gn))],fe),P(Nr,$r)});var Ir=N(Ln),po=Nr=>{P(Nr,uw())};Y(Ir,Nr=>{n(r)&&Nr(po)}),P(it,pr)});var Pn=A(N(Wt));Yn(Gt,it=>f(ie,it),()=>n(ie)),Fr(Gt,(it,Pe)=>ml==null?void 0:ml(it,Pe),()=>Kt),Pr(()=>se("scroll",Gt,pn));var ht=N(Gt,2),lr=it=>{var Pe=fe(()=>"You pasted a JSON ".concat(Array.isArray(n(je).contents)?"array":"object"," as text"));Mo(it,{type:"info",get message(){return n(Pe)},actions:[{icon:Ns,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Wn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Un}]})};Y(ht,it=>{n(je)&&it(lr)});var qn=N(ht,2),Xn=it=>{var Pe=fe(()=>p()?[]:[{icon:rd,text:"Ok",title:"Accept the repaired document",onClick:Qt},{icon:Pl,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:K}]);Mo(it,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Pe)},onClose:Le})};Y(qn,it=>{n(He)&&it(Xn)}),qd(N(qn,2),{get validationErrors(){return n(Vt)},selectError:Dt}),we(()=>{Ve=St(vt,1,"jse-table-invisible-start-section svelte-u14cgx",null,Ve,{"jse-search-box-background":n(W)}),vn(sn,"colspan",n(De).length),Ps(sn,"height",n(o).startHeight+"px"),vn(Pn,"colspan",n(De).length),Ps(Pn,"height",n(o).endHeight+"px")}),P(We,Ot)},Ae=We=>{var Ot=Lt(),Xt=Ne(Ot),Gt=xn=>{var w=fw(),F=Ne(w),oe=fe(()=>p()?[]:[{icon:Pl,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:K}]);Mo(F,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(oe)}}),cg(N(F,2),{get text(){return n(ae)},get json(){return n(q)},get indentation(){return T()},get parser(){return C()}}),P(xn,w)},jn=xn=>{nw(xn,{get text(){return n(ae)},get json(){return n(q)},get readOnly(){return p()},get parser(){return C()},openJSONEditorModal:Ut,get onChangeMode(){return ne()},onClick:()=>{Le()}})};Y(Xt,xn=>{n(_)&&n(ae)!==void 0&&n(ae)!==""?xn(Gt):xn(jn,!1)},!0),P(We,Ot)};Y(ye,We=>{n(_e)?We(Re):We(Ae,!1)}),se("paste",he,un),P(k,J)},Er=k=>{P(k,hw())};Y(Tn,k=>{h?k(Er,!1):k(Ft)}),Yn(An,k=>f(re,k),()=>n(re));var ft=N(An,2),dn=k=>{Xh(k,{onClose:()=>f(Be,!1)})};Y(ft,k=>{n(Be)&&k(dn)});var gn=N(ft,2),Fn=k=>{Gh(k,Aa(()=>n(At),{onClose:()=>{var J;(J=n(At))===null||J===void 0||J.onClose(),f(At,void 0)}}))};return Y(gn,k=>{n(At)&&k(Fn)}),we(()=>Bn=St(An,1,"jse-table-mode svelte-u14cgx",null,Bn,{"no-main-menu":!j()})),se("mousedown",An,function(k){if(k.buttons===1||k.buttons===2){var J=k.target;J.isContentEditable||Le();var ce=xh(J);if(ce){if(Kr(n(H))&&Di(n(q),n(H),ce))return;f(H,Yt(ce)),k.preventDefault()}}}),se("keydown",An,function(k){var J=ua(k);if(s("keydown",{combo:J,key:k.key}),J==="Ctrl+X"&&(k.preventDefault(),xe(!0)),J==="Ctrl+Shift+X"&&(k.preventDefault(),xe(!1)),J==="Ctrl+C"&&(k.preventDefault(),kt(!0)),J==="Ctrl+Shift+C"&&(k.preventDefault(),kt(!1)),J==="Ctrl+D"&&(k.preventDefault(),tn()),J!=="Delete"&&J!=="Backspace"||(k.preventDefault(),qt()),J==="Insert"&&k.preventDefault(),J==="Ctrl+A"&&k.preventDefault(),J==="Ctrl+Q"&&zr(k),J==="ArrowLeft"&&(k.preventDefault(),dt(),n(H))){var ce=function(Ot,Xt){var{rowIndex:Gt,columnIndex:jn}=lo(Qe(Xt),Ot);return jn>0?Yt(Va({rowIndex:Gt,columnIndex:jn-1},Ot)):Xt}(n(De),n(H));f(H,ce),wn(Qe(ce))}if(J==="ArrowRight"&&(k.preventDefault(),dt(),n(H))){var he=function(Ot,Xt){var{rowIndex:Gt,columnIndex:jn}=lo(Qe(Xt),Ot);return jn<Ot.length-1?Yt(Va({rowIndex:Gt,columnIndex:jn+1},Ot)):Xt}(n(De),n(H));f(H,he),wn(Qe(he))}if(J==="ArrowUp"&&(k.preventDefault(),dt(),n(H))){var ye=function(Ot,Xt){var{rowIndex:Gt,columnIndex:jn}=lo(Qe(Xt),Ot);return Gt>0?Yt(Va({rowIndex:Gt-1,columnIndex:jn},Ot)):Xt}(n(De),n(H));f(H,ye),wn(Qe(ye))}if(J==="ArrowDown"&&(k.preventDefault(),dt(),n(H))){var Re=function(Ot,Xt,Gt){var{rowIndex:jn,columnIndex:xn}=lo(Qe(Gt),Xt);return jn<Ot.length-1?Yt(Va({rowIndex:jn+1,columnIndex:xn},Xt)):Gt}(n(q),n(De),n(H));f(H,Re),wn(Qe(Re))}if(J==="Enter"&&n(H)&&En(n(H))){k.preventDefault();var Ae=n(H).path;br(Je(n(q),Ae))?Ut(Ae):p()||f(H,ge(ge({},n(H)),{},{edit:!0}))}if(J.replace(/^Shift\+/,"").length===1&&n(H))return k.preventDefault(),void function(Ot){at.apply(this,arguments)}(k.key);if(J==="Ctrl+Enter"&&En(n(H))){k.preventDefault();var We=Je(n(q),n(H).path);hc(We)&&window.open(String(We),"_blank")}J==="Escape"&&n(H)&&(k.preventDefault(),f(H,void 0)),J==="Ctrl+F"&&(k.preventDefault(),ke(!1)),J==="Ctrl+H"&&(k.preventDefault(),ke(!0)),J==="Ctrl+Z"&&(k.preventDefault(),Et()),J==="Ctrl+Shift+Z"&&(k.preventDefault(),rn())}),se("contextmenu",An,zr),P(e,Cn),xt(t,"validate",Jt),xt(t,"patch",Bt),xt(t,"focus",Le),xt(t,"acceptAutoRepair",Qt),xt(t,"scrollTo",bn),xt(t,"findElement",_n),xt(t,"openTransformModal",hn),ct({validate:Jt,patch:Bt,focus:Le,acceptAutoRepair:Qt,scrollTo:bn,findElement:_n,openTransformModal:hn})}function mf(e,t){lt(t,!1);var r=v(t,"content",8),o=v(t,"selection",12),a=v(t,"readOnly",8),s=v(t,"indentation",8),i=v(t,"tabSize",8),l=v(t,"externalMode",8),c=v(t,"mainMenuBar",8),u=v(t,"navigationBar",8),d=v(t,"statusBar",8),h=v(t,"askToFormat",8),p=v(t,"escapeControlCharacters",8),m=v(t,"escapeUnicodeCharacters",8),g=v(t,"flattenColumns",8),b=v(t,"parser",8),j=v(t,"parseMemoizeOne",8),x=v(t,"validator",8),S=v(t,"validationParser",8),O=v(t,"pathParser",8),C=v(t,"insideModal",8),y=v(t,"onChange",8),$=v(t,"onChangeMode",8),I=v(t,"onSelect",8),T=v(t,"onRenderValue",8),z=v(t,"onClassName",8),ne=v(t,"onRenderMenu",8),Q=v(t,"onRenderContextMenu",8),B=v(t,"onError",8),G=v(t,"onFocus",8),pe=v(t,"onBlur",8),Z=v(t,"onSortModal",8),de=v(t,"onTransformModal",8),Me=v(t,"onJSONEditorModal",8),ue=M(),ve=M(),me=M(),Ce=Or("jsoneditor:JSONEditorRoot"),Ge=M(vg({onChange:be=>f(Ge,be)}).get()),re=M(l());function ie(be){if(Uv(be)){f(re,be.undo.mode);var Ue=n(Ge).items(),ut=Ue.findIndex(mt=>mt===be),ze=ut!==-1?Ue[ut-1]:void 0;Ce("handleUndo",{index:ut,item:be,items:Ue,prevItem:ze}),ze&&o(ze.redo.selection),$()(n(re))}}function Ee(be){if(Uv(be)){f(re,be.redo.mode);var Ue=n(Ge).items(),ut=Ue.findIndex(mt=>mt===be),ze=ut!==-1?Ue[ut+1]:void 0;Ce("handleRedo",{index:ut,item:be,items:Ue,nextItem:ze}),ze&&o(ze.undo.selection),$()(n(re))}}var At=M(),te={type:"separator"},q=M(),ae=M();function _(be){if(n(ue))return n(ue).patch(be);if(n(ve))return n(ve).patch(be);if(n(me))return n(me).patch(be);throw new Error('Method patch is not available in mode "'.concat(n(re),'"'))}function je(be,Ue){if(n(ue))return n(ue).expand(be,Ue);throw new Error('Method expand is not available in mode "'.concat(n(re),'"'))}function Ke(be,Ue){if(n(ue))return n(ue).collapse(be,Ue);throw new Error('Method collapse is not available in mode "'.concat(n(re),'"'))}function W(be){if(n(me))n(me).openTransformModal(be);else if(n(ue))n(ue).openTransformModal(be);else{if(!n(ve))throw new Error('Method transform is not available in mode "'.concat(n(re),'"'));n(ve).openTransformModal(be)}}function V(){if(n(me))return n(me).validate();if(n(ue))return n(ue).validate();if(n(ve))return n(ve).validate();throw new Error('Method validate is not available in mode "'.concat(n(re),'"'))}function R(){return n(ue)?n(ue).acceptAutoRepair():r()}function Ze(be){if(n(ue))return n(ue).scrollTo(be);if(n(ve))return n(ve).scrollTo(be);throw new Error('Method scrollTo is not available in mode "'.concat(n(re),'"'))}function wt(be){if(n(ue))return n(ue).findElement(be);if(n(ve))return n(ve).findElement(be);throw new Error('Method findElement is not available in mode "'.concat(n(re),'"'))}function et(){n(me)?n(me).focus():n(ue)?n(ue).focus():n(ve)&&n(ve).focus()}function Xe(){return De.apply(this,arguments)}function De(){return(De=yt(function*(){n(me)&&(yield n(me).refresh())})).apply(this,arguments)}U(()=>E(l()),()=>{(function(be){if(be!==n(re)){var Ue={type:"mode",undo:{mode:n(re),selection:void 0},redo:{mode:be,selection:void 0}};n(re)==="text"&&n(me)&&n(me).flush(),Ce("add history item",Ue),n(Ge).add(Ue),f(re,be)}})(l())}),U(()=>(n(re),E($())),()=>{f(At,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-first"+(n(re)===kr.text?" jse-selected":""),onClick:()=>$()(kr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(re),")"),className:"jse-group-button "+(n(re)===kr.tree?" jse-selected":""),onClick:()=>$()(kr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-last"+(n(re)===kr.table?" jse-selected":""),onClick:()=>$()(kr.table)}])}),U(()=>(n(At),E(ne()),n(re),E(C()),E(a())),()=>{f(q,be=>{var Ue=wh(be[0])?n(At).concat(be):n(At).concat(te,be),ut=fu(Ue);return ne()(Ue,{mode:n(re),modal:C(),readOnly:a()})||ut})}),U(()=>(E(Q()),n(re),E(C()),E(a()),E(o())),()=>{f(ae,be=>{var Ue,ut=fu(be);return(Ue=Q()(be,{mode:n(re),modal:C(),readOnly:a(),selection:o()}))!==null&&Ue!==void 0?Ue:!a()&&ut})}),ln(),pt();var _e=Lt(),jt=Ne(_e),_t=be=>{Yn(Y1(be,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ge)},get readOnly(){return a()},get indentation(){return s()},get tabSize(){return i()},get mainMenuBar(){return c()},get statusBar(){return d()},get askToFormat(){return h()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get validator(){return x()},get validationParser(){return S()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return I()},onUndo:ie,onRedo:Ee,get onError(){return B()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onSortModal(){return Z()},get onTransformModal(){return de()},$$legacy:!0}),Ue=>f(me,Ue),()=>n(me))},Be=be=>{var Ue=Lt(),ut=Ne(Ue),ze=tt=>{Yn(mw(tt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ge)},get readOnly(){return a()},get mainMenuBar(){return c()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return g()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return S()},get indentation(){return s()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return I()},onUndo:ie,onRedo:Ee,get onRenderValue(){return T()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onRenderContextMenu(){return n(ae)},get onSortModal(){return Z()},get onTransformModal(){return de()},get onJSONEditorModal(){return Me()},$$legacy:!0}),Fe=>f(ve,Fe),()=>n(ve))},mt=tt=>{Yn(Wu(tt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ge)},get readOnly(){return a()},get indentation(){return s()},get mainMenuBar(){return c()},get navigationBar(){return u()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return S()},get pathParser(){return O()},get onError(){return B()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return I()},onUndo:ie,onRedo:Ee,get onRenderValue(){return T()},get onClassName(){return z()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onRenderContextMenu(){return n(ae)},get onSortModal(){return Z()},get onTransformModal(){return de()},get onJSONEditorModal(){return Me()},$$legacy:!0}),Fe=>f(ue,Fe),()=>n(ue))};Y(ut,tt=>{n(re)===kr.table?tt(ze):tt(mt,!1)},!0),P(be,Ue)};return Y(jt,be=>{n(re)===kr.text||String(n(re))==="code"?be(_t):be(Be,!1)}),P(e,_e),xt(t,"patch",_),xt(t,"expand",je),xt(t,"collapse",Ke),xt(t,"transform",W),xt(t,"validate",V),xt(t,"acceptAutoRepair",R),xt(t,"scrollTo",Ze),xt(t,"findElement",wt),xt(t,"focus",et),xt(t,"refresh",Xe),ct({patch:_,expand:je,collapse:Ke,transform:W,validate:V,acceptAutoRepair:R,scrollTo:Ze,findElement:wt,focus:et,refresh:Xe})}bt(`/* over all fonts, sizes, and colors */
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
}`);var bw=L('<div class="jse-error svelte-v0el4e"> </div>'),jw=L('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>'),xw=L('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>'),yw=L('<button type="button" class="jse-primary svelte-v0el4e">Close</button>'),ww=L('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>',1),kw=L('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>'),Cw={};bt(`/* over all fonts, sizes, and colors */
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
}`);var ms=pc(()=>Cw),Sw=L('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>'),Ow=L('<div class="jse-error svelte-1v9c92j"> </div>'),zw=L('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"><col width="75%"></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>',1);bt(`/* over all fonts, sizes, and colors */
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
.jse-main.svelte-57bmz4:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var Ew=L('<div role="none"><!></div> <!> <!> <!>',1);function $w(e,t){lt(t,!1);var r=M(void 0,!0),o=Or("jsoneditor:JSONEditor"),a={text:""},s=void 0,i=!1,l=kr.tree,c=!0,u=!0,d=!0,h=!0,p=!1,m=!1,g=!0,b=JSON,j=void 0,x=JSON,S={parse:J0,stringify:Co},O=[f0],C=O[0].id,y=co,$=void 0,I=void 0,T=H0,z=co,ne=co,Q=co,B=co,G=le=>{console.error(le),alert(le.toString())},pe=co,Z=co,de=v(t,"content",13,a),Me=v(t,"selection",13,s),ue=v(t,"readOnly",13,i),ve=v(t,"indentation",13,2),me=v(t,"tabSize",13,4),Ce=v(t,"mode",13,l),Ge=v(t,"mainMenuBar",13,c),re=v(t,"navigationBar",13,u),ie=v(t,"statusBar",13,d),Ee=v(t,"askToFormat",13,h),At=v(t,"escapeControlCharacters",13,p),te=v(t,"escapeUnicodeCharacters",13,m),q=v(t,"flattenColumns",13,g),ae=v(t,"parser",13,b),_=v(t,"validator",13,j),je=v(t,"validationParser",13,x),Ke=v(t,"pathParser",13,S),W=v(t,"queryLanguages",13,O),V=v(t,"queryLanguageId",13,C),R=v(t,"onChangeQueryLanguage",13,y),Ze=v(t,"onChange",13,$),wt=v(t,"onSelect",13,I),et=v(t,"onRenderValue",13,T),Xe=v(t,"onClassName",13,z),De=v(t,"onRenderMenu",13,ne),_e=v(t,"onRenderContextMenu",13,Q),jt=v(t,"onChangeMode",13,B),_t=v(t,"onError",13,G),Be=v(t,"onFocus",13,pe),be=v(t,"onBlur",13,Z),Ue=M(Ss(),!0),ut=M(!1,!0),ze=M(void 0,!0),mt=M(void 0,!0),tt=M(void 0,!0),Fe=M(void 0,!0),H=M(ae(),!0);function Ie(){return de()}function He(le){o("set");var Nt=Lc(le);if(Nt)throw new Error(Nt);f(Ue,Ss()),de(le),or()}function Tt(le){o("update");var Nt=Lc(le);if(Nt)throw new Error(Nt);de(le),or()}function an(le){var Nt=n(ze).patch(le);return or(),Nt}function Ye(le){Me(le),or()}function Vt(le,Nt){n(ze).expand(le,Nt),or()}function Mn(le){var Nt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(ze).collapse(le,Nt),or()}function On(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(ze).transform(le),or()}function Jt(){return n(ze).validate()}function Bt(){var le=n(ze).acceptAutoRepair();return or(),le}function fn(le){return sr.apply(this,arguments)}function sr(){return(sr=yt(function*(le){yield n(ze).scrollTo(le)})).apply(this,arguments)}function Dn(le){return n(ze).findElement(le)}function cn(){n(ze).focus(),or()}function Le(){return pn.apply(this,arguments)}function pn(){return(pn=yt(function*(){yield n(ze).refresh()})).apply(this,arguments)}function dt(le){var Nt,Un,K,xe,st,kt,nt,qt,tn,Pt,Rt,rt,at,un,Ct,kn,nn,Dt,hn,Ut,nr,D,X,ke,Et,rn,Kt,Cn,Bn,An,ir=Object.keys(le);for(var Te of ir)switch(Te){case"content":de((Nt=le[Te])!==null&&Nt!==void 0?Nt:a);break;case"selection":Me((Un=le[Te])!==null&&Un!==void 0?Un:s);break;case"readOnly":ue((K=le[Te])!==null&&K!==void 0?K:i);break;case"indentation":ve((xe=le[Te])!==null&&xe!==void 0?xe:2);break;case"tabSize":me((st=le[Te])!==null&&st!==void 0?st:4);break;case"mode":Ce((kt=le[Te])!==null&&kt!==void 0?kt:l);break;case"mainMenuBar":Ge((nt=le[Te])!==null&&nt!==void 0?nt:c);break;case"navigationBar":re((qt=le[Te])!==null&&qt!==void 0?qt:u);break;case"statusBar":ie((tn=le[Te])!==null&&tn!==void 0?tn:d);break;case"askToFormat":Ee((Pt=le[Te])!==null&&Pt!==void 0?Pt:h);break;case"escapeControlCharacters":At((Rt=le[Te])!==null&&Rt!==void 0?Rt:p);break;case"escapeUnicodeCharacters":te((rt=le[Te])!==null&&rt!==void 0?rt:m);break;case"flattenColumns":q((at=le[Te])!==null&&at!==void 0?at:g);break;case"parser":ae((un=le[Te])!==null&&un!==void 0?un:b);break;case"validator":_((Ct=le[Te])!==null&&Ct!==void 0?Ct:j);break;case"validationParser":je((kn=le[Te])!==null&&kn!==void 0?kn:x);break;case"pathParser":Ke((nn=le[Te])!==null&&nn!==void 0?nn:S);break;case"queryLanguages":W((Dt=le[Te])!==null&&Dt!==void 0?Dt:O);break;case"queryLanguageId":V((hn=le[Te])!==null&&hn!==void 0?hn:C);break;case"onChangeQueryLanguage":R((Ut=le[Te])!==null&&Ut!==void 0?Ut:y);break;case"onChange":Ze((nr=le[Te])!==null&&nr!==void 0?nr:$);break;case"onRenderValue":et((D=le[Te])!==null&&D!==void 0?D:T);break;case"onClassName":Xe((X=le[Te])!==null&&X!==void 0?X:z);break;case"onRenderMenu":De((ke=le[Te])!==null&&ke!==void 0?ke:ne);break;case"onRenderContextMenu":_e((Et=le[Te])!==null&&Et!==void 0?Et:Q);break;case"onChangeMode":jt((rn=le[Te])!==null&&rn!==void 0?rn:B);break;case"onSelect":wt((Kt=le[Te])!==null&&Kt!==void 0?Kt:I);break;case"onError":_t((Cn=le[Te])!==null&&Cn!==void 0?Cn:G);break;case"onFocus":Be((Bn=le[Te])!==null&&Bn!==void 0?Bn:pe);break;case"onBlur":be((An=le[Te])!==null&&An!==void 0?An:Z);break;default:Tn(Te)}function Tn(Ft){o('Unknown property "'.concat(Ft,'"'))}W().some(Ft=>Ft.id===V())||V(W()[0].id),or()}function Qt(){return bn.apply(this,arguments)}function bn(){return(bn=yt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function zn(le,Nt,Un){de(le),Ze()&&Ze()(le,Nt,Un)}function wn(le){Me(le),wt()&&wt()(fu(le))}function _n(){f(ut,!0),Be()&&Be()()}function Qn(){f(ut,!1),be()&&be()()}function zr(le){return er.apply(this,arguments)}function er(){return(er=yt(function*(le){Ce()!==le&&(Ce(le),or(),cn(),jt()(le))})).apply(this,arguments)}function gr(le){o("handleChangeQueryLanguage",le),V(le),R()(le)}function xr(le){var{id:Nt,json:Un,rootPath:K,onTransform:xe,onClose:st}=le;ue()||f(Fe,{id:Nt,json:Un,rootPath:K,indentation:ve(),escapeControlCharacters:At(),escapeUnicodeCharacters:te(),parser:ae(),parseMemoizeOne:n(r),validationParser:je(),pathParser:Ke(),queryLanguages:W(),queryLanguageId:V(),onChangeQueryLanguage:gr,onRenderValue:et(),onRenderMenu:kt=>De()(kt,{mode:Ce(),modal:!0,readOnly:ue()}),onRenderContextMenu:kt=>_e()(kt,{mode:Ce(),modal:!0,readOnly:ue(),selection:Me()}),onClassName:Xe(),onTransform:xe,onClose:st})}function fr(le){ue()||f(tt,le)}function Wn(le){var{content:Nt,path:Un,onPatch:K,onClose:xe}=le;o("onJSONEditorModal",{content:Nt,path:Un}),f(mt,{content:Nt,path:Un,onPatch:K,readOnly:ue(),indentation:ve(),tabSize:me(),mainMenuBar:Ge(),navigationBar:re(),statusBar:ie(),askToFormat:Ee(),escapeControlCharacters:At(),escapeUnicodeCharacters:te(),flattenColumns:q(),parser:ae(),validator:void 0,validationParser:je(),pathParser:Ke(),onRenderValue:et(),onClassName:Xe(),onRenderMenu:De(),onRenderContextMenu:_e(),onSortModal:fr,onTransformModal:xr,onClose:xe})}function tr(le){le.stopPropagation()}return U(()=>(E(ae()),n(H),E(de()),Ss),()=>{if(!Zj(ae(),n(H))){if(o("parser changed, recreate editor"),Ri(de())){var le=n(H).stringify(de().json);de({json:le!==void 0?ae().parse(le):void 0})}f(H,ae()),f(Ue,Ss())}}),U(()=>E(de()),()=>{var le=Lc(de());le&&console.error("Error: "+le)}),U(()=>E(Me()),()=>{Me()===null&&console.warn("selection is invalid: it is null but should be undefined")}),U(()=>E(ae()),()=>{f(r,$i(ae().parse))}),U(()=>E(Ce()),()=>{o("mode changed to",Ce())}),ln(),pt(!0),zu(e,{children:(le,Nt)=>{var Un,K=Ew(),xe=Ne(K);th(A(xe),()=>n(Ue),Rt=>{Yn(mf(Rt,{get externalMode(){return Ce()},get content(){return de()},get selection(){return Me()},get readOnly(){return ue()},get indentation(){return ve()},get tabSize(){return me()},get statusBar(){return ie()},get askToFormat(){return Ee()},get mainMenuBar(){return Ge()},get navigationBar(){return re()},get escapeControlCharacters(){return At()},get escapeUnicodeCharacters(){return te()},get flattenColumns(){return q()},get parser(){return ae()},get parseMemoizeOne(){return n(r)},get validator(){return _()},get validationParser(){return je()},get pathParser(){return Ke()},insideModal:!1,get onError(){return _t()},onChange:zn,onChangeMode:zr,onSelect:wn,get onRenderValue(){return et()},get onClassName(){return Xe()},onFocus:_n,onBlur:Qn,get onRenderMenu(){return De()},get onRenderContextMenu(){return _e()},onSortModal:fr,onTransformModal:xr,onJSONEditorModal:Wn,$$legacy:!0}),rt=>f(ze,rt),()=>n(ze))});var st=N(xe,2),kt=Rt=>{(function(rt,at){var un,Ct;lt(at,!1);var kn=M(void 0,!0),nn=M(void 0,!0),Dt=M(void 0,!0),hn=M(void 0,!0),Ut=Or("jsoneditor:SortModal"),nr=v(at,"id",9),D=v(at,"json",9),X=v(at,"rootPath",9),ke=v(at,"onSort",9),Et=v(at,"onClose",9),rn={value:1,label:"ascending"},Kt=[rn,{value:-1,label:"descending"}],Cn="".concat(nr(),":").concat(zt(X())),Bn=M((un=ms()[Cn])===null||un===void 0?void 0:un.selectedProperty,!0),An=M(((Ct=ms()[Cn])===null||Ct===void 0?void 0:Ct.selectedDirection)||rn,!0),ir=M(void 0,!0);function Te(){try{var Ft,Er,ft;f(ir,void 0);var dn=((Ft=n(Bn))===null||Ft===void 0?void 0:Ft.value)||((Er=n(hn))===null||Er===void 0||(Er=Er[0])===null||Er===void 0?void 0:Er.value)||[],gn=(ft=n(An))===null||ft===void 0?void 0:ft.value,Fn=eg(D(),X(),dn,gn);ke()!==void 0&&X()!==void 0&&ke()({operations:Fn,rootPath:X(),itemPath:dn,direction:gn}),Et()()}catch(k){f(ir,String(k))}}function Tn(Ft){Ft.focus()}U(()=>(E(D()),E(X())),()=>{f(kn,Je(D(),X()))}),U(()=>n(kn),()=>{f(nn,Array.isArray(n(kn)))}),U(()=>(n(nn),n(kn)),()=>{f(Dt,n(nn)?Cu(n(kn)):void 0)}),U(()=>(n(Dt),wa),()=>{f(hn,n(Dt)?n(Dt).map(wa):void 0)}),U(()=>(ms(),n(Bn),n(An)),()=>{ms(ms()[Cn]={selectedProperty:n(Bn),selectedDirection:n(An)}),Ut("store state in memory",Cn,ms()[Cn])}),ln(),pt(!0),Fi(rt,{get onClose(){return Et()},className:"jse-sort-modal",children:(Ft,Er)=>{var ft=zw(),dn=Ne(ft),gn=fe(()=>n(nn)?"Sort array items":"Sort object keys");Ql(dn,{get title(){return n(gn)},get onClose(){return Et()}});var Fn=A(N(dn,2)),k=N(A(Fn)),J=A(k),ce=N(A(J)),he=A(ce),ye=N(J),Re=xn=>{var w=Sw(),F=N(A(w));Wa(A(F),{showChevron:!0,get items(){return n(hn)},get value(){return n(Bn)},set value(oe){f(Bn,oe)},$$legacy:!0}),P(xn,w)};Y(ye,xn=>{var w;n(nn)&&(n(hn)&&((w=n(hn))===null||w===void 0?void 0:w.length)>1||n(Bn)===void 0)&&xn(Re)});var Ae=N(ye),We=N(A(Ae));Wa(A(We),{showChevron:!0,clearable:!1,items:Kt,get value(){return n(An)},set value(xn){f(An,xn)},$$legacy:!0});var Ot=N(Fn,2),Xt=A(Ot),Gt=xn=>{var w=Ow(),F=A(w);we(()=>gt(F,n(ir))),P(xn,w)};Y(Xt,xn=>{n(ir)&&xn(Gt)});var jn=A(N(Ot,2));Pr(()=>se("click",jn,Te)),Fr(jn,xn=>Tn==null?void 0:Tn(xn)),we(xn=>{var w;Za(he,xn),jn.disabled=!!(n(nn)&&n(hn)&&((w=n(hn))===null||w===void 0?void 0:w.length)>1)&&!n(Bn)},[()=>X()&&!Rn(X())?Co(X()):"(document root)"],fe),P(Ft,ft)},$$slots:{default:!0}}),ct()})(Rt,Aa(()=>n(tt),{onClose:()=>{var rt;(rt=n(tt))===null||rt===void 0||rt.onClose(),f(tt,void 0)}}))};Y(st,Rt=>{n(tt)&&Rt(kt)});var nt=N(st,2),qt=Rt=>{q1(Rt,Aa(()=>n(Fe),{onClose:()=>{var rt;(rt=n(Fe))===null||rt===void 0||rt.onClose(),f(Fe,void 0)}}))};Y(nt,Rt=>{n(Fe)&&Rt(qt)});var tn=N(nt,2),Pt=Rt=>{(function(rt,at){lt(at,!1);var un=M(void 0,!0),Ct=M(void 0,!0),kn=M(void 0,!0),nn=M(void 0,!0),Dt=Or("jsoneditor:JSONEditorModal"),hn=v(at,"content",9),Ut=v(at,"path",9),nr=v(at,"onPatch",9),D=v(at,"readOnly",9),X=v(at,"indentation",9),ke=v(at,"tabSize",9),Et=v(at,"mainMenuBar",9),rn=v(at,"navigationBar",9),Kt=v(at,"statusBar",9),Cn=v(at,"askToFormat",9),Bn=v(at,"escapeControlCharacters",9),An=v(at,"escapeUnicodeCharacters",9),ir=v(at,"flattenColumns",9),Te=v(at,"parser",9),Tn=v(at,"validator",9),Ft=v(at,"validationParser",9),Er=v(at,"pathParser",9),ft=v(at,"onRenderValue",9),dn=v(at,"onClassName",9),gn=v(at,"onRenderMenu",9),Fn=v(at,"onRenderContextMenu",9),k=v(at,"onSortModal",9),J=v(at,"onTransformModal",9),ce=v(at,"onClose",9),he=M(void 0,!0),ye=M(void 0,!0),Re={mode:Ot(hn()),content:hn(),selection:void 0,relativePath:Ut()},Ae=M([Re],!0),We=M(void 0,!0);function Ot(Oe){return Ri(Oe)&&Cr(Oe.json)?kr.table:kr.tree}function Xt(){var Oe,Ve=(Oe=Ht(n(Ae)))===null||Oe===void 0?void 0:Oe.selection;Ni(Ve)&&n(he).scrollTo(Qe(Ve))}function Gt(){if(Dt("handleApply"),!D())try{f(We,void 0);var Oe=n(un).relativePath,Ve=n(un).content,vt=[{op:"replace",path:zt(Oe),value:Av(Ve,Te()).json}];if(n(Ae).length>1){var sn=Av(n(Ae)[n(Ae).length-2].content,Te()).json,Wt={json:No(sn,vt)},Pn=ge(ge({},n(Ae)[n(Ae).length-2]||Re),{},{content:Wt});f(Ae,[...n(Ae).slice(0,n(Ae).length-2),Pn]),or(),Xt()}else nr()(vt),ce()()}catch(ht){f(We,String(ht))}}function jn(){if(Dt("handleClose"),n(ye))f(ye,!1);else if(n(Ae).length>1){var Oe;f(Ae,on(n(Ae))),or(),(Oe=n(he))===null||Oe===void 0||Oe.focus(),Xt(),f(We,void 0)}else ce()()}function xn(Oe){Dt("handleChange",Oe),oe(Ve=>ge(ge({},Ve),{},{content:Oe}))}function w(Oe){Dt("handleChangeSelection",Oe),oe(Ve=>ge(ge({},Ve),{},{selection:Oe}))}function F(Oe){Dt("handleChangeMode",Oe),oe(Ve=>ge(ge({},Ve),{},{mode:Oe}))}function oe(Oe){var Ve=Oe(Ht(n(Ae)));f(Ae,[...on(n(Ae)),Ve])}function qe(Oe){f(We,Oe.toString()),console.error(Oe)}function $e(Oe){var Ve,{content:vt,path:sn}=Oe;Dt("handleJSONEditorModal",{content:vt,path:sn});var Wt={mode:Ot(vt),content:vt,selection:void 0,relativePath:sn};f(Ae,[...n(Ae),Wt]),or(),(Ve=n(he))===null||Ve===void 0||Ve.focus()}function Se(Oe){Oe.focus()}Tr(()=>{var Oe;(Oe=n(he))===null||Oe===void 0||Oe.focus()}),U(()=>n(Ae),()=>{f(un,Ht(n(Ae))||Re)}),U(()=>n(Ae),()=>{f(Ct,n(Ae).flatMap(Oe=>Oe.relativePath))}),U(()=>(n(Ct),Co),()=>{f(kn,Rn(n(Ct))?"(document root)":Co(n(Ct)))}),U(()=>E(Te()),()=>{f(nn,$i(Te().parse))}),ln(),pt(!0),Fi(rt,{onClose:jn,className:"jse-jsoneditor-modal",get fullscreen(){return n(ye)},children:(Oe,Ve)=>{var vt=kw();zu(A(vt),{children:(sn,Wt)=>{var Pn=ww(),ht=Ne(Pn),lr=fe(()=>n(Ae).length>1?" (".concat(n(Ae).length,")"):"");Ql(ht,{get title(){var It;return"Edit nested content ".concat((It=n(lr))!==null&&It!==void 0?It:"")},fullScreenButton:!0,onClose:jn,get fullscreen(){return n(ye)},set fullscreen(It){f(ye,It)},$$legacy:!0});var qn=N(ht,2),Xn=N(A(qn),2),it=N(Xn,4);Yn(mf(A(it),{get externalMode(){return n(un).mode},get content(){return n(un).content},get selection(){return n(un).selection},get readOnly(){return D()},get indentation(){return X()},get tabSize(){return ke()},get statusBar(){return Kt()},get askToFormat(){return Cn()},get mainMenuBar(){return Et()},get navigationBar(){return rn()},get escapeControlCharacters(){return Bn()},get escapeUnicodeCharacters(){return An()},get flattenColumns(){return ir()},get parser(){return Te()},get parseMemoizeOne(){return n(nn)},get validator(){return Tn()},get validationParser(){return Ft()},get pathParser(){return Er()},insideModal:!0,onError:qe,onChange:xn,onChangeMode:F,onSelect:w,get onRenderValue(){return ft()},get onClassName(){return dn()},onFocus:co,onBlur:co,get onRenderMenu(){return gn()},get onRenderContextMenu(){return Fn()},get onSortModal(){return k()},get onTransformModal(){return J()},onJSONEditorModal:$e,$$legacy:!0}),It=>f(he,It),()=>n(he));var Pe=A(N(it,2)),$t=It=>{var Ln=bw(),Ir=A(Ln);we(()=>gt(Ir,n(We))),P(It,Ln)};Y(Pe,It=>{n(We)&&It($t)});var pr=N(Pe,2),Sn=It=>{var Ln=jw();en(A(Ln),{data:_m}),se("click",Ln,jn),P(It,Ln)};Y(pr,It=>{n(Ae).length>1&&It(Sn)});var mn=N(pr,2),Nn=It=>{var Ln=xw();Pr(()=>se("click",Ln,Gt)),Fr(Ln,Ir=>Se==null?void 0:Se(Ir)),P(It,Ln)},mr=It=>{var Ln=yw();se("click",Ln,jn),P(It,Ln)};Y(mn,It=>{D()?It(mr,!1):It(Nn)}),we(()=>Za(Xn,n(kn))),P(sn,Pn)},$$slots:{default:!0}}),P(Oe,vt)},$$slots:{default:!0}}),ct()})(Rt,Aa(()=>n(mt),{onClose:()=>{var rt;(rt=n(mt))===null||rt===void 0||rt.onClose(),f(mt,void 0)}}))};Y(tn,Rt=>{n(mt)&&Rt(Pt)}),we(()=>Un=St(xe,1,"jse-main svelte-57bmz4",null,Un,{"jse-focus":n(ut)})),se("keydown",xe,tr),P(le,K)},$$slots:{default:!0}}),xt(t,"get",Ie),xt(t,"set",He),xt(t,"update",Tt),xt(t,"patch",an),xt(t,"select",Ye),xt(t,"expand",Vt),xt(t,"collapse",Mn),xt(t,"transform",On),xt(t,"validate",Jt),xt(t,"acceptAutoRepair",Bt),xt(t,"scrollTo",fn),xt(t,"findElement",Dn),xt(t,"focus",cn),xt(t,"refresh",Le),xt(t,"updateProps",dt),xt(t,"destroy",Qt),ct({get:Ie,set:He,update:Tt,patch:an,select:Ye,expand:Vt,collapse:Mn,transform:On,validate:Jt,acceptAutoRepair:Bt,scrollTo:fn,findElement:Dn,focus:cn,refresh:Le,updateProps:dt,destroy:Qt})}function Mw(e){var{target:t,props:r}=e,o=Rj($w,{target:t,props:r});return o.destroy=yt(function*(){return function(a,s){var i=wu.get(a);return i?(wu.delete(a),i(s)):Promise.resolve()}(o)}),or(),o}const Aw=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Pw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Rw=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Iw(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){_w(e);return}return t}function _w(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Cl(e,t={}){if(typeof e!="string")return e;const r=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const o=r.toLowerCase();if(o==="true")return!0;if(o==="false")return!1;if(o==="undefined")return;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o==="-infinity")return Number.NEGATIVE_INFINITY}if(!Rw.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Aw.test(e)||Pw.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Iw)}return JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}function qw(e,t={}){return Cl(e,{...t,strict:!0})}var Tw=typeof global=="object"&&global&&global.Object===Object&&global,Nw=typeof self=="object"&&self&&self.Object===Object&&self,fg=Tw||Nw||Function("return this")(),Zl=fg.Symbol,pg=Object.prototype,Dw=pg.hasOwnProperty,Uw=pg.toString,gi=Zl?Zl.toStringTag:void 0;function Bw(e){var t=Dw.call(e,gi),r=e[gi];try{e[gi]=void 0;var o=!0}catch{}var a=Uw.call(e);return o&&(t?e[gi]=r:delete e[gi]),a}var Fw=Object.prototype,Lw=Fw.toString;function Vw(e){return Lw.call(e)}var Ww="[object Null]",Hw="[object Undefined]",bf=Zl?Zl.toStringTag:void 0;function Jw(e){return e==null?e===void 0?Hw:Ww:bf&&bf in Object(e)?Bw(e):Vw(e)}function Kw(e){return e!=null&&typeof e=="object"}var Yw="[object Symbol]";function Qw(e){return typeof e=="symbol"||Kw(e)&&Jw(e)==Yw}var Xw=/\s/;function Gw(e){for(var t=e.length;t--&&Xw.test(e.charAt(t)););return t}var Zw=/^\s+/;function ek(e){return e&&e.slice(0,Gw(e)+1).replace(Zw,"")}function Hu(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var jf=NaN,tk=/^[-+]0x[0-9a-f]+$/i,nk=/^0b[01]+$/i,rk=/^0o[0-7]+$/i,ok=parseInt;function xf(e){if(typeof e=="number")return e;if(Qw(e))return jf;if(Hu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Hu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ek(e);var r=nk.test(e);return r||rk.test(e)?ok(e.slice(2),r?2:8):tk.test(e)?jf:+e}var cu=function(){return fg.Date.now()},ak="Expected a function",sk=Math.max,ik=Math.min;function lk(e,t,r){var o,a,s,i,l,c,u=0,d=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(ak);t=xf(t)||0,Hu(r)&&(d=!!r.leading,h="maxWait"in r,s=h?sk(xf(r.maxWait)||0,t):s,p="trailing"in r?!!r.trailing:p);function m($){var I=o,T=a;return o=a=void 0,u=$,i=e.apply(T,I),i}function g($){return u=$,l=setTimeout(x,t),d?m($):i}function b($){var I=$-c,T=$-u,z=t-I;return h?ik(z,s-T):z}function j($){var I=$-c,T=$-u;return c===void 0||I>=t||I<0||h&&T>=s}function x(){var $=cu();if(j($))return S($);l=setTimeout(x,b($))}function S($){return l=void 0,p&&o?m($):(o=a=void 0,i)}function O(){l!==void 0&&clearTimeout(l),u=0,o=c=a=l=void 0}function C(){return l===void 0?i:S(cu())}function y(){var $=cu(),I=j($);if(o=arguments,a=this,c=$,I){if(l===void 0)return g(c);if(h)return clearTimeout(l),l=setTimeout(x,t),m(c)}return l===void 0&&(l=setTimeout(x,t)),i}return y.cancel=O,y.flush=C,y}var hg=typeof global=="object"&&global&&global.Object===Object&&global,ck=typeof self=="object"&&self&&self.Object===Object&&self,Jo=hg||ck||Function("return this")(),Wo=Jo.Symbol,gg=Object.prototype,uk=gg.hasOwnProperty,dk=gg.toString,mi=Wo?Wo.toStringTag:void 0;function vk(e){var t=uk.call(e,mi),r=e[mi];try{e[mi]=void 0;var o=!0}catch{}var a=dk.call(e);return o&&(t?e[mi]=r:delete e[mi]),a}var fk=Object.prototype,pk=fk.toString;function hk(e){return pk.call(e)}var gk="[object Null]",mk="[object Undefined]",yf=Wo?Wo.toStringTag:void 0;function ss(e){return e==null?e===void 0?mk:gk:yf&&yf in Object(e)?vk(e):hk(e)}function Ho(e){return e!=null&&typeof e=="object"}var bk="[object Symbol]";function Dd(e){return typeof e=="symbol"||Ho(e)&&ss(e)==bk}function jk(e,t){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=t(e[r],r,e);return a}var fo=Array.isArray,wf=Wo?Wo.prototype:void 0,kf=wf?wf.toString:void 0;function mg(e){if(typeof e=="string")return e;if(fo(e))return jk(e,mg)+"";if(Dd(e))return kf?kf.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Ko(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ud(e){return e}var xk="[object AsyncFunction]",yk="[object Function]",wk="[object GeneratorFunction]",kk="[object Proxy]";function Bd(e){if(!Ko(e))return!1;var t=ss(e);return t==yk||t==wk||t==xk||t==kk}var uu=Jo["__core-js_shared__"],Cf=function(){var e=/[^.]+$/.exec(uu&&uu.keys&&uu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ck(e){return!!Cf&&Cf in e}var Sk=Function.prototype,Ok=Sk.toString;function is(e){if(e!=null){try{return Ok.call(e)}catch{}try{return e+""}catch{}}return""}var zk=/[\\^$.*+?()[\]{}|]/g,Ek=/^\[object .+?Constructor\]$/,$k=Function.prototype,Mk=Object.prototype,Ak=$k.toString,Pk=Mk.hasOwnProperty,Rk=RegExp("^"+Ak.call(Pk).replace(zk,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ik(e){if(!Ko(e)||Ck(e))return!1;var t=Bd(e)?Rk:Ek;return t.test(is(e))}function _k(e,t){return e==null?void 0:e[t]}function ls(e,t){var r=_k(e,t);return Ik(r)?r:void 0}var Ju=ls(Jo,"WeakMap"),Sf=Object.create,qk=function(){function e(){}return function(t){if(!Ko(t))return{};if(Sf)return Sf(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Tk(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Nk(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Dk=800,Uk=16,Bk=Date.now;function Fk(e){var t=0,r=0;return function(){var o=Bk(),a=Uk-(o-r);if(r=o,a>0){if(++t>=Dk)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Lk(e){return function(){return e}}var ec=function(){try{var e=ls(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Vk=ec?function(e,t){return ec(e,"toString",{configurable:!0,enumerable:!1,value:Lk(t),writable:!0})}:Ud,Wk=Fk(Vk);function Hk(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}var Jk=9007199254740991,Kk=/^(?:0|[1-9]\d*)$/;function Fd(e,t){var r=typeof e;return t=t??Jk,!!t&&(r=="number"||r!="symbol"&&Kk.test(e))&&e>-1&&e%1==0&&e<t}function Cc(e,t,r){t=="__proto__"&&ec?ec(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function tl(e,t){return e===t||e!==e&&t!==t}var Yk=Object.prototype,Qk=Yk.hasOwnProperty;function bg(e,t,r){var o=e[t];(!(Qk.call(e,t)&&tl(o,r))||r===void 0&&!(t in e))&&Cc(e,t,r)}function jg(e,t,r,o){var a=!r;r||(r={});for(var s=-1,i=t.length;++s<i;){var l=t[s],c=o?o(r[l],e[l],l,r,e):void 0;c===void 0&&(c=e[l]),a?Cc(r,l,c):bg(r,l,c)}return r}var Of=Math.max;function Xk(e,t,r){return t=Of(t===void 0?e.length-1:t,0),function(){for(var o=arguments,a=-1,s=Of(o.length-t,0),i=Array(s);++a<s;)i[a]=o[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=o[a];return l[t]=r(i),Tk(e,this,l)}}function Gk(e,t){return Wk(Xk(e,t,Ud),e+"")}var Zk=9007199254740991;function Ld(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Zk}function Sc(e){return e!=null&&Ld(e.length)&&!Bd(e)}function e2(e,t,r){if(!Ko(r))return!1;var o=typeof t;return(o=="number"?Sc(r)&&Fd(t,r.length):o=="string"&&t in r)?tl(r[t],e):!1}function xg(e){return Gk(function(t,r){var o=-1,a=r.length,s=a>1?r[a-1]:void 0,i=a>2?r[2]:void 0;for(s=e.length>3&&typeof s=="function"?(a--,s):void 0,i&&e2(r[0],r[1],i)&&(s=a<3?void 0:s,a=1),t=Object(t);++o<a;){var l=r[o];l&&e(t,l,o,s)}return t})}var t2=Object.prototype;function Vd(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||t2;return e===r}function n2(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var r2="[object Arguments]";function zf(e){return Ho(e)&&ss(e)==r2}var yg=Object.prototype,o2=yg.hasOwnProperty,a2=yg.propertyIsEnumerable,tc=zf(function(){return arguments}())?zf:function(e){return Ho(e)&&o2.call(e,"callee")&&!a2.call(e,"callee")};function s2(){return!1}var wg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ef=wg&&typeof module=="object"&&module&&!module.nodeType&&module,i2=Ef&&Ef.exports===wg,$f=i2?Jo.Buffer:void 0,l2=$f?$f.isBuffer:void 0,Vi=l2||s2,c2="[object Arguments]",u2="[object Array]",d2="[object Boolean]",v2="[object Date]",f2="[object Error]",p2="[object Function]",h2="[object Map]",g2="[object Number]",m2="[object Object]",b2="[object RegExp]",j2="[object Set]",x2="[object String]",y2="[object WeakMap]",w2="[object ArrayBuffer]",k2="[object DataView]",C2="[object Float32Array]",S2="[object Float64Array]",O2="[object Int8Array]",z2="[object Int16Array]",E2="[object Int32Array]",$2="[object Uint8Array]",M2="[object Uint8ClampedArray]",A2="[object Uint16Array]",P2="[object Uint32Array]",ur={};ur[C2]=ur[S2]=ur[O2]=ur[z2]=ur[E2]=ur[$2]=ur[M2]=ur[A2]=ur[P2]=!0;ur[c2]=ur[u2]=ur[w2]=ur[d2]=ur[k2]=ur[v2]=ur[f2]=ur[p2]=ur[h2]=ur[g2]=ur[m2]=ur[b2]=ur[j2]=ur[x2]=ur[y2]=!1;function R2(e){return Ho(e)&&Ld(e.length)&&!!ur[ss(e)]}function Wd(e){return function(t){return e(t)}}var kg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Si=kg&&typeof module=="object"&&module&&!module.nodeType&&module,I2=Si&&Si.exports===kg,du=I2&&hg.process,Hs=function(){try{var e=Si&&Si.require&&Si.require("util").types;return e||du&&du.binding&&du.binding("util")}catch{}}(),Mf=Hs&&Hs.isTypedArray,Hd=Mf?Wd(Mf):R2,_2=Object.prototype,q2=_2.hasOwnProperty;function Cg(e,t){var r=fo(e),o=!r&&tc(e),a=!r&&!o&&Vi(e),s=!r&&!o&&!a&&Hd(e),i=r||o||a||s,l=i?n2(e.length,String):[],c=l.length;for(var u in e)(t||q2.call(e,u))&&!(i&&(u=="length"||a&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Fd(u,c)))&&l.push(u);return l}function Sg(e,t){return function(r){return e(t(r))}}var T2=Sg(Object.keys,Object),N2=Object.prototype,D2=N2.hasOwnProperty;function U2(e){if(!Vd(e))return T2(e);var t=[];for(var r in Object(e))D2.call(e,r)&&r!="constructor"&&t.push(r);return t}function Jd(e){return Sc(e)?Cg(e):U2(e)}function B2(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var F2=Object.prototype,L2=F2.hasOwnProperty;function V2(e){if(!Ko(e))return B2(e);var t=Vd(e),r=[];for(var o in e)o=="constructor"&&(t||!L2.call(e,o))||r.push(o);return r}function Kd(e){return Sc(e)?Cg(e,!0):V2(e)}var W2=xg(function(e,t,r,o){jg(t,Kd(t),e,o)}),H2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J2=/^\w*$/;function Yd(e,t){if(fo(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Dd(e)?!0:J2.test(e)||!H2.test(e)||t!=null&&e in Object(t)}var Wi=ls(Object,"create");function K2(){this.__data__=Wi?Wi(null):{},this.size=0}function Y2(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Q2="__lodash_hash_undefined__",X2=Object.prototype,G2=X2.hasOwnProperty;function Z2(e){var t=this.__data__;if(Wi){var r=t[e];return r===Q2?void 0:r}return G2.call(t,e)?t[e]:void 0}var eC=Object.prototype,tC=eC.hasOwnProperty;function nC(e){var t=this.__data__;return Wi?t[e]!==void 0:tC.call(t,e)}var rC="__lodash_hash_undefined__";function oC(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Wi&&t===void 0?rC:t,this}function os(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}os.prototype.clear=K2;os.prototype.delete=Y2;os.prototype.get=Z2;os.prototype.has=nC;os.prototype.set=oC;function aC(){this.__data__=[],this.size=0}function Oc(e,t){for(var r=e.length;r--;)if(tl(e[r][0],t))return r;return-1}var sC=Array.prototype,iC=sC.splice;function lC(e){var t=this.__data__,r=Oc(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():iC.call(t,r,1),--this.size,!0}function cC(e){var t=this.__data__,r=Oc(t,e);return r<0?void 0:t[r][1]}function uC(e){return Oc(this.__data__,e)>-1}function dC(e,t){var r=this.__data__,o=Oc(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}function pa(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}pa.prototype.clear=aC;pa.prototype.delete=lC;pa.prototype.get=cC;pa.prototype.has=uC;pa.prototype.set=dC;var Hi=ls(Jo,"Map");function vC(){this.size=0,this.__data__={hash:new os,map:new(Hi||pa),string:new os}}function fC(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zc(e,t){var r=e.__data__;return fC(t)?r[typeof t=="string"?"string":"hash"]:r.map}function pC(e){var t=zc(this,e).delete(e);return this.size-=t?1:0,t}function hC(e){return zc(this,e).get(e)}function gC(e){return zc(this,e).has(e)}function mC(e,t){var r=zc(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}function ha(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}ha.prototype.clear=vC;ha.prototype.delete=pC;ha.prototype.get=hC;ha.prototype.has=gC;ha.prototype.set=mC;var bC="Expected a function";function Qd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(bC);var r=function(){var o=arguments,a=t?t.apply(this,o):o[0],s=r.cache;if(s.has(a))return s.get(a);var i=e.apply(this,o);return r.cache=s.set(a,i)||s,i};return r.cache=new(Qd.Cache||ha),r}Qd.Cache=ha;var jC=500;function xC(e){var t=Qd(e,function(o){return r.size===jC&&r.clear(),o}),r=t.cache;return t}var yC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wC=/\\(\\)?/g,kC=xC(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(yC,function(r,o,a,s){t.push(a?s.replace(wC,"$1"):o||r)}),t});function CC(e){return e==null?"":mg(e)}function Og(e,t){return fo(e)?e:Yd(e,t)?[e]:kC(CC(e))}function Ec(e){if(typeof e=="string"||Dd(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function zg(e,t){t=Og(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[Ec(t[r++])];return r&&r==o?e:void 0}function SC(e,t,r){var o=e==null?void 0:zg(e,t);return o===void 0?r:o}function OC(e,t){for(var r=-1,o=t.length,a=e.length;++r<o;)e[a+r]=t[r];return e}var Eg=Sg(Object.getPrototypeOf,Object),zC="[object Object]",EC=Function.prototype,$C=Object.prototype,$g=EC.toString,MC=$C.hasOwnProperty,AC=$g.call(Object);function PC(e){if(!Ho(e)||ss(e)!=zC)return!1;var t=Eg(e);if(t===null)return!0;var r=MC.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&$g.call(r)==AC}function RC(){this.__data__=new pa,this.size=0}function IC(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function _C(e){return this.__data__.get(e)}function qC(e){return this.__data__.has(e)}var TC=200;function NC(e,t){var r=this.__data__;if(r instanceof pa){var o=r.__data__;if(!Hi||o.length<TC-1)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new ha(o)}return r.set(e,t),this.size=r.size,this}function Ao(e){var t=this.__data__=new pa(e);this.size=t.size}Ao.prototype.clear=RC;Ao.prototype.delete=IC;Ao.prototype.get=_C;Ao.prototype.has=qC;Ao.prototype.set=NC;var Mg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Af=Mg&&typeof module=="object"&&module&&!module.nodeType&&module,DC=Af&&Af.exports===Mg,Pf=DC?Jo.Buffer:void 0,Rf=Pf?Pf.allocUnsafe:void 0;function Ag(e,t){if(t)return e.slice();var r=e.length,o=Rf?Rf(r):new e.constructor(r);return e.copy(o),o}function UC(e,t){for(var r=-1,o=e==null?0:e.length,a=0,s=[];++r<o;){var i=e[r];t(i,r,e)&&(s[a++]=i)}return s}function BC(){return[]}var FC=Object.prototype,LC=FC.propertyIsEnumerable,If=Object.getOwnPropertySymbols,VC=If?function(e){return e==null?[]:(e=Object(e),UC(If(e),function(t){return LC.call(e,t)}))}:BC;function WC(e,t,r){var o=t(e);return fo(e)?o:OC(o,r(e))}function Ku(e){return WC(e,Jd,VC)}var Yu=ls(Jo,"DataView"),Qu=ls(Jo,"Promise"),Xu=ls(Jo,"Set"),_f="[object Map]",HC="[object Object]",qf="[object Promise]",Tf="[object Set]",Nf="[object WeakMap]",Df="[object DataView]",JC=is(Yu),KC=is(Hi),YC=is(Qu),QC=is(Xu),XC=is(Ju),xo=ss;(Yu&&xo(new Yu(new ArrayBuffer(1)))!=Df||Hi&&xo(new Hi)!=_f||Qu&&xo(Qu.resolve())!=qf||Xu&&xo(new Xu)!=Tf||Ju&&xo(new Ju)!=Nf)&&(xo=function(e){var t=ss(e),r=t==HC?e.constructor:void 0,o=r?is(r):"";if(o)switch(o){case JC:return Df;case KC:return _f;case YC:return qf;case QC:return Tf;case XC:return Nf}return t});var GC=Object.prototype,ZC=GC.hasOwnProperty;function eS(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&ZC.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var nc=Jo.Uint8Array;function Xd(e){var t=new e.constructor(e.byteLength);return new nc(t).set(new nc(e)),t}function tS(e,t){var r=Xd(e.buffer);return new e.constructor(r,e.byteOffset,e.byteLength)}var nS=/\w*$/;function rS(e){var t=new e.constructor(e.source,nS.exec(e));return t.lastIndex=e.lastIndex,t}var Uf=Wo?Wo.prototype:void 0,Bf=Uf?Uf.valueOf:void 0;function oS(e){return Bf?Object(Bf.call(e)):{}}function Pg(e,t){var r=t?Xd(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var aS="[object Boolean]",sS="[object Date]",iS="[object Map]",lS="[object Number]",cS="[object RegExp]",uS="[object Set]",dS="[object String]",vS="[object Symbol]",fS="[object ArrayBuffer]",pS="[object DataView]",hS="[object Float32Array]",gS="[object Float64Array]",mS="[object Int8Array]",bS="[object Int16Array]",jS="[object Int32Array]",xS="[object Uint8Array]",yS="[object Uint8ClampedArray]",wS="[object Uint16Array]",kS="[object Uint32Array]";function CS(e,t,r){var o=e.constructor;switch(t){case fS:return Xd(e);case aS:case sS:return new o(+e);case pS:return tS(e);case hS:case gS:case mS:case bS:case jS:case xS:case yS:case wS:case kS:return Pg(e,r);case iS:return new o;case lS:case dS:return new o(e);case cS:return rS(e);case uS:return new o;case vS:return oS(e)}}function Rg(e){return typeof e.constructor=="function"&&!Vd(e)?qk(Eg(e)):{}}var SS="[object Map]";function OS(e){return Ho(e)&&xo(e)==SS}var Ff=Hs&&Hs.isMap,zS=Ff?Wd(Ff):OS,ES="[object Set]";function $S(e){return Ho(e)&&xo(e)==ES}var Lf=Hs&&Hs.isSet,MS=Lf?Wd(Lf):$S,AS=1,Ig="[object Arguments]",PS="[object Array]",RS="[object Boolean]",IS="[object Date]",_S="[object Error]",_g="[object Function]",qS="[object GeneratorFunction]",TS="[object Map]",NS="[object Number]",qg="[object Object]",DS="[object RegExp]",US="[object Set]",BS="[object String]",FS="[object Symbol]",LS="[object WeakMap]",VS="[object ArrayBuffer]",WS="[object DataView]",HS="[object Float32Array]",JS="[object Float64Array]",KS="[object Int8Array]",YS="[object Int16Array]",QS="[object Int32Array]",XS="[object Uint8Array]",GS="[object Uint8ClampedArray]",ZS="[object Uint16Array]",eO="[object Uint32Array]",rr={};rr[Ig]=rr[PS]=rr[VS]=rr[WS]=rr[RS]=rr[IS]=rr[HS]=rr[JS]=rr[KS]=rr[YS]=rr[QS]=rr[TS]=rr[NS]=rr[qg]=rr[DS]=rr[US]=rr[BS]=rr[FS]=rr[XS]=rr[GS]=rr[ZS]=rr[eO]=!0;rr[_S]=rr[_g]=rr[LS]=!1;function Sl(e,t,r,o,a,s){var i,l=t&AS;if(i!==void 0)return i;if(!Ko(e))return e;var c=fo(e);if(c)i=eS(e);else{var u=xo(e),d=u==_g||u==qS;if(Vi(e))return Ag(e,l);if(u==qg||u==Ig||d&&!a)i=d?{}:Rg(e);else{if(!rr[u])return a?e:{};i=CS(e,u,l)}}s||(s=new Ao);var h=s.get(e);if(h)return h;s.set(e,i),MS(e)?e.forEach(function(g){i.add(Sl(g,t,r,g,e,s))}):zS(e)&&e.forEach(function(g,b){i.set(b,Sl(g,t,r,b,e,s))});var p=Ku,m=c?void 0:p(e);return Hk(m||e,function(g,b){m&&(b=g,g=e[b]),bg(i,b,Sl(g,t,r,b,e,s))}),i}var tO=1,nO=4;function rO(e){return Sl(e,tO|nO)}var oO="__lodash_hash_undefined__";function aO(e){return this.__data__.set(e,oO),this}function sO(e){return this.__data__.has(e)}function rc(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new ha;++t<r;)this.add(e[t])}rc.prototype.add=rc.prototype.push=aO;rc.prototype.has=sO;function iO(e,t){for(var r=-1,o=e==null?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}function lO(e,t){return e.has(t)}var cO=1,uO=2;function Tg(e,t,r,o,a,s){var i=r&cO,l=e.length,c=t.length;if(l!=c&&!(i&&c>l))return!1;var u=s.get(e),d=s.get(t);if(u&&d)return u==t&&d==e;var h=-1,p=!0,m=r&uO?new rc:void 0;for(s.set(e,t),s.set(t,e);++h<l;){var g=e[h],b=t[h];if(o)var j=i?o(b,g,h,t,e,s):o(g,b,h,e,t,s);if(j!==void 0){if(j)continue;p=!1;break}if(m){if(!iO(t,function(x,S){if(!lO(m,S)&&(g===x||a(g,x,r,o,s)))return m.push(S)})){p=!1;break}}else if(!(g===b||a(g,b,r,o,s))){p=!1;break}}return s.delete(e),s.delete(t),p}function dO(e){var t=-1,r=Array(e.size);return e.forEach(function(o,a){r[++t]=[a,o]}),r}function vO(e){var t=-1,r=Array(e.size);return e.forEach(function(o){r[++t]=o}),r}var fO=1,pO=2,hO="[object Boolean]",gO="[object Date]",mO="[object Error]",bO="[object Map]",jO="[object Number]",xO="[object RegExp]",yO="[object Set]",wO="[object String]",kO="[object Symbol]",CO="[object ArrayBuffer]",SO="[object DataView]",Vf=Wo?Wo.prototype:void 0,vu=Vf?Vf.valueOf:void 0;function OO(e,t,r,o,a,s,i){switch(r){case SO:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case CO:return!(e.byteLength!=t.byteLength||!s(new nc(e),new nc(t)));case hO:case gO:case jO:return tl(+e,+t);case mO:return e.name==t.name&&e.message==t.message;case xO:case wO:return e==t+"";case bO:var l=dO;case yO:var c=o&fO;if(l||(l=vO),e.size!=t.size&&!c)return!1;var u=i.get(e);if(u)return u==t;o|=pO,i.set(e,t);var d=Tg(l(e),l(t),o,a,s,i);return i.delete(e),d;case kO:if(vu)return vu.call(e)==vu.call(t)}return!1}var zO=1,EO=Object.prototype,$O=EO.hasOwnProperty;function MO(e,t,r,o,a,s){var i=r&zO,l=Ku(e),c=l.length,u=Ku(t),d=u.length;if(c!=d&&!i)return!1;for(var h=c;h--;){var p=l[h];if(!(i?p in t:$O.call(t,p)))return!1}var m=s.get(e),g=s.get(t);if(m&&g)return m==t&&g==e;var b=!0;s.set(e,t),s.set(t,e);for(var j=i;++h<c;){p=l[h];var x=e[p],S=t[p];if(o)var O=i?o(S,x,p,t,e,s):o(x,S,p,e,t,s);if(!(O===void 0?x===S||a(x,S,r,o,s):O)){b=!1;break}j||(j=p=="constructor")}if(b&&!j){var C=e.constructor,y=t.constructor;C!=y&&"constructor"in e&&"constructor"in t&&!(typeof C=="function"&&C instanceof C&&typeof y=="function"&&y instanceof y)&&(b=!1)}return s.delete(e),s.delete(t),b}var AO=1,Wf="[object Arguments]",Hf="[object Array]",jl="[object Object]",PO=Object.prototype,Jf=PO.hasOwnProperty;function RO(e,t,r,o,a,s){var i=fo(e),l=fo(t),c=i?Hf:xo(e),u=l?Hf:xo(t);c=c==Wf?jl:c,u=u==Wf?jl:u;var d=c==jl,h=u==jl,p=c==u;if(p&&Vi(e)){if(!Vi(t))return!1;i=!0,d=!1}if(p&&!d)return s||(s=new Ao),i||Hd(e)?Tg(e,t,r,o,a,s):OO(e,t,c,r,o,a,s);if(!(r&AO)){var m=d&&Jf.call(e,"__wrapped__"),g=h&&Jf.call(t,"__wrapped__");if(m||g){var b=m?e.value():e,j=g?t.value():t;return s||(s=new Ao),a(b,j,r,o,s)}}return p?(s||(s=new Ao),MO(e,t,r,o,a,s)):!1}function Gd(e,t,r,o,a){return e===t?!0:e==null||t==null||!Ho(e)&&!Ho(t)?e!==e&&t!==t:RO(e,t,r,o,Gd,a)}var IO=1,_O=2;function qO(e,t,r,o){var a=r.length,s=a;if(e==null)return!s;for(e=Object(e);a--;){var i=r[a];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<s;){i=r[a];var l=i[0],c=e[l],u=i[1];if(i[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Ao,h;if(!(h===void 0?Gd(u,c,IO|_O,o,d):h))return!1}}return!0}function Ng(e){return e===e&&!Ko(e)}function TO(e){for(var t=Jd(e),r=t.length;r--;){var o=t[r],a=e[o];t[r]=[o,a,Ng(a)]}return t}function Dg(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function NO(e){var t=TO(e);return t.length==1&&t[0][2]?Dg(t[0][0],t[0][1]):function(r){return r===e||qO(r,e,t)}}function DO(e,t){return e!=null&&t in Object(e)}function UO(e,t,r){t=Og(t,e);for(var o=-1,a=t.length,s=!1;++o<a;){var i=Ec(t[o]);if(!(s=e!=null&&r(e,i)))break;e=e[i]}return s||++o!=a?s:(a=e==null?0:e.length,!!a&&Ld(a)&&Fd(i,a)&&(fo(e)||tc(e)))}function BO(e,t){return e!=null&&UO(e,t,DO)}var FO=1,LO=2;function VO(e,t){return Yd(e)&&Ng(t)?Dg(Ec(e),t):function(r){var o=SC(r,e);return o===void 0&&o===t?BO(r,e):Gd(t,o,FO|LO)}}function WO(e){return function(t){return t==null?void 0:t[e]}}function HO(e){return function(t){return zg(t,e)}}function JO(e){return Yd(e)?WO(Ec(e)):HO(e)}function KO(e){return typeof e=="function"?e:e==null?Ud:typeof e=="object"?fo(e)?VO(e[0],e[1]):NO(e):JO(e)}function YO(e){return function(t,r,o){for(var a=-1,s=Object(t),i=o(t),l=i.length;l--;){var c=i[++a];if(r(s[c],c,s)===!1)break}return t}}var Ug=YO();function QO(e,t){return e&&Ug(e,t,Jd)}function Gu(e,t,r){(r!==void 0&&!tl(e[t],r)||r===void 0&&!(t in e))&&Cc(e,t,r)}function XO(e){return Ho(e)&&Sc(e)}function Zu(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function GO(e){return jg(e,Kd(e))}function ZO(e,t,r,o,a,s,i){var l=Zu(e,r),c=Zu(t,r),u=i.get(c);if(u){Gu(e,r,u);return}var d=s?s(l,c,r+"",e,t,i):void 0,h=d===void 0;if(h){var p=fo(c),m=!p&&Vi(c),g=!p&&!m&&Hd(c);d=c,p||m||g?fo(l)?d=l:XO(l)?d=Nk(l):m?(h=!1,d=Ag(c,!0)):g?(h=!1,d=Pg(c,!0)):d=[]:PC(c)||tc(c)?(d=l,tc(l)?d=GO(l):(!Ko(l)||Bd(l))&&(d=Rg(c))):h=!1}h&&(i.set(c,d),a(d,c,o,s,i),i.delete(c)),Gu(e,r,d)}function Bg(e,t,r,o,a){e!==t&&Ug(t,function(s,i){if(a||(a=new Ao),Ko(s))ZO(e,t,i,r,Bg,o,a);else{var l=o?o(Zu(e,i),s,i+"",e,t,a):void 0;l===void 0&&(l=s),Gu(e,i,l)}},Kd)}var e4=xg(function(e,t,r,o){Bg(e,t,r,o)});function t4(e,t){var r={};return t=KO(t),QO(e,function(o,a,s){Cc(r,t(o,a,s),o)}),r}const n4=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),r4=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),o4=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),a4=/[^\p{L}\d]+/giu,Kf="$1\0$2",Yf="";function Fg(e){let t=e.trim();t=t.replace(n4,Kf).replace(r4,Kf),t=t.replace(a4,"\0");let r=0,o=t.length;for(;t.charAt(r)==="\0";)r++;if(r===o)return[];for(;t.charAt(o-1)==="\0";)o--;return t.slice(r,o).split(/\0/g)}function s4(e){const t=Fg(e);for(let r=0;r<t.length;r++){const o=t[r],a=o4.exec(o);if(a){const s=a.index+(a[1]??a[2]).length;t.splice(r,1,o.slice(0,s),o.slice(s))}}return t}function i4(e,t){const[r,o,a]=d4(e,t),s=l4(void 0),i=c4(void 0),l=u4(s,i);return r+o.map((c,u)=>u===0?s(c):l(c,u)).join("")+a}function l4(e){return t=>t.toLocaleLowerCase(e)}function c4(e){return t=>t.toLocaleUpperCase(e)}function u4(e,t){return(r,o)=>{const a=r[0];return(o>0&&a>="0"&&a<="9"?"_"+a:t(a))+e(r.slice(1))}}function d4(e,t={}){const r=t.split??(t.separateNumbers?s4:Fg),o=t.prefixCharacters??Yf,a=t.suffixCharacters??Yf;let s=0,i=e.length;for(;s<e.length;){const l=e.charAt(s);if(!o.includes(l))break;s++}for(;i>s;){const l=i-1,c=e.charAt(l);if(!a.includes(c))break;i=l}return[e.slice(0,s),r(e.slice(s,i)),e.slice(i)]}const Oi=e=>/.+-.+/.test(e)?i4(e):e,v4=e=>Object.prototype.toString.call(e).slice(8,-1)==="Object";function f4(e,t){const r=Object.create(null),o=e.split(",");for(let a=0;a<o.length;a++)r[o[a]]=!0;return a=>!!r[a]}const p4=f4("String,Number,Boolean,Function,Symbol,BigInt");function h4(e){const t=e==null?void 0:e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function g4(e,t){let r;const o=h4(t);if(p4(o)){const a=typeof e;r=a===o.toLowerCase(),!r&&a==="object"&&(r=e instanceof t)}else o==="Object"?r=Ko(e):o==="Array"?r=Array.isArray(e):o==="null"?r=e===null:r=e instanceof t;return{valid:r,expectedType:o}}function m4({prop:e,type:t,validator:r}){if(![void 0,null].includes(e)&&t){let o=!1;const a=Array.isArray(t)?t:[t],s=[];for(let i=0;i<a.length&&!o;i++){const{valid:l,expectedType:c}=g4(e,a[i]);s.push(c||""),o=l}if(!o)throw new TypeError(`Invalid prop: type check failed, expecting [${s.join(", ")}], receiving: ${e}`)}if(r&&!r(e))throw new Error(`Invalid prop: validator check failed, receiving: ${e}`)}function b4(e,{mergeObject:t,mergeObjectCustomizer:r,mergeFunction:o}){const a=[];for(let i=e.length-1;i>=0;i--)a.push(e[i]);const s=r||(o?(i,l)=>typeof i=="function"&&typeof l=="function"?o==null?void 0:o(l,i):void 0:void 0);return t==="deep"?e4(...a,s):W2(...a,s)}function j4(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function ya(e,t={}){const{type:r,default:o,defaultIsDynamic:a=!1,required:s=!1,validator:i,camelizeObjectKeys:l=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:u=!0}=t;let{mergeObject:d="deep",mergeObjectCustomizer:h,mergeFunction:p=!1}=t;const m=[];let g,b=!1,j=!1;const x=S=>{if(S!==void 0){m4({type:r,prop:S,validator:i});const O=v4(S),C=typeof S=="function";return b=O,j=C,O?(S=rO(S),l?t4(S,(y,$)=>Oi($)):S):S}};for(const S of e)m.push(x(S));if(!a)m.push(x(o));else if(typeof o!="function")throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${o}`);b||(d=!1,j||(p=!1));for(let S=0;S<m.length;S++){const O=m[S];if(O!==void 0){S===m.length-1?g=O:d?g=b4(c?[O,o]:m,{mergeObject:d,mergeObjectCustomizer:h,mergeFunction:p}):p?g=j4(u?[O,o]:m,{mergeFunction:p}):g=O;break}}if(s&&[void 0,null].includes(g))throw new Error("Missing required prop");return a?ya(e,{...t,default:o(g),defaultIsDynamic:!1}):g}function Qf(e){const t=Array.from(Oi(e));return t[0]=t[0].toUpperCase(),t.unshift("o","n"),t.join("")}function x4(e,{props:t=[],camelizePropNames:r=!1}={}){const o={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let a;if(Array.isArray(t))a=r?t.map(s=>Oi(s)):t;else if(r){a=[];for(const s in t)a.push(Oi(s))}else a=Object.keys(t);for(const s in e)if(s.startsWith("@")){const i=s.substring(1);if(i.startsWith("vue:"))o.hooks[Qf(i.replace("vue:","vnode-"))]=e[s];else{if(i.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");o.listeners[Qf(i)]=e[s]}}else if(s.startsWith("#")){const i=s.substring(1);i&&(o.slots[i]=e[s])}else{const i=r?Oi(s):s;a.includes(i)?o.props[i]=e[s]:o.attrs[s]=e[s]}return o}const Xf="JsonEditorVue",Ol=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],ba={},Gf={},zl="modelValue",Zf="update:modelValue",ep={[zl]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(Ol.map(e=>[e,{type:Boolean,default:void 0}]))},y4=as({name:Xf,install(e,t){const r=x4(t||{},{props:ep});Object.assign(ba,r.props),Object.assign(Gf,r.attrs),e.component(Xf,this)},props:ep,emits:{[Zf](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:r,expose:o}){var a;const s=(a=am())==null?void 0:a.proxy,i=Ea(),l=Ea(!1),c=Ea();sm(()=>{var x;c.value=ya([e.mode,ba.mode],{type:String}),(x=i.value)==null||x.updateProps({mode:c.value||kr.tree})});const u=x=>{r("update:mode",x)};ba.mode!==void 0&&e.mode===void 0&&u(ba.mode);const d=tv(()=>ya([e.debounce,ba.debounce,300],{type:Number})),h=tv(()=>ya([e.stringified,ba.stringified,!0],{type:Boolean}));let p=Cl;const m=x=>{l.value=!0,!h.value&&x.text&&(i.value&&!i.value.validate()&&(x.json=p(x.text)),x.text=void 0),r(Zf,x.text===void 0?x.json:x.text)},g=lk(m,d.value),b=x=>{c.value==="text"?g(x):m(x)},j=(x,S)=>(...O)=>{x(...O),S(...O)};return o==null||o({jsonEditor:i}),lm(()=>{var x;(x=i.value)==null||x.destroy()}),np(()=>{const x=ya([e[zl],ba[zl]]),S=Object.fromEntries(Array.from(Ol,C=>[C,ya([e[C],ba[C]])]).filter(([,C])=>C!==void 0)),O=ya([S,t,Gf],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:C=>{var y;return p=((y=C.parser)==null?void 0:y.parse)||Cl,{onChange:b,onChangeMode:u,mode:c.value,parser:{parse:qw,stringify:JSON.stringify},...x!==void 0&&{content:{[typeof x=="string"&&c.value==="text"&&h.value?"text":"json"]:x}}}},mergeFunction:j,mergeObject:"shallow",type:Object});i.value=Mw({target:s==null?void 0:s.$refs.jsonEditorRef,props:O}),qc(()=>e[zl],C=>{if(l.value){l.value=!1;return}i.value&&i.value.set([void 0,""].includes(C)?{text:""}:{[typeof C=="string"&&c.value==="text"&&h.value?"text":"json"]:C})},{deep:!0}),qc(()=>Array.from(Ol,C=>e[C]),C=>{var y;(y=i.value)==null||y.updateProps(Object.fromEntries(Array.from(C,($,I)=>[Ol[I],$]).filter(([,$])=>$!==void 0)))}),qc(()=>t,C=>{var y,$;const I={};(C.onChange||C["on-change"])&&(I.onChange=b),(C.onChangeMode||C["on-change-mode"])&&(I.onChangeMode=u),p=((y=C.parser)==null?void 0:y.parse)||Cl,($=i.value)==null||$.updateProps(Object.getOwnPropertyNames(I).length>0?ya([C,I],{camelizeObjectKeys:!0,mergeFunction:j,mergeObject:"shallow",type:Object}):C)},{deep:!0}),o||(o=C=>{for(const y in C)s[y]=ot(C[y])},o({jsonEditor:i}))}),()=>im("div",{ref:"jsonEditorRef"})}}),w4={__name:"JsonEditor",setup(e){const t=cm().isDark;return(r,o)=>(Dr(),zi(ot(y4),um(r.$attrs,{class:{"jse-theme-dark":ot(t)}}),null,16,["class"]))}},k4=["title"],C4=as({__name:"CopyableText",props:{val:{}},setup(e){const{copy:t}=wp({text:"复制成功"});return(r,o)=>(Dr(),yo("div",{title:r.val,class:"copiable-text",onClick:o[0]||(o[0]=a=>ot(t)(r.val))},Ha(r.val),9,k4))}}),tp=ed(C4,[["__scopeId","data-v-ac147690"]]),S4={key:0,class:"prj-detail"},O4={class:"prj-meta-wrapper"},z4={class:"prj-meta"},E4={class:"prj-meta"},$4={class:"prj-data-control"},M4={class:"prj-data-wrapper"},A4={class:"edit-data-wrapper"},P4={class:"dialog-footer"};function R4(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!dm(e)}const I4=as({__name:"mockDetail",setup(e){const{copy:t}=wp({text:"复制成功"}),r=Ea(!1),o=rp(uv()),a=[{title:"名称",key:"name",dataKey:"name",width:300,fixed:lv.LEFT},{title:"请求类型",key:"type",dataKey:"type",width:100,align:"center",cellRenderer:({cellData:c})=>Mt(cv,null,R4(c)?c:{default:()=>[c]})},{title:"请求状态",key:"enabled",dataKey:"enabled",width:100,align:"center",cellRenderer:({cellData:c})=>Mt(cv,{type:"success"},{default:()=>[c?"开启":"关闭"]})},{title:"接口地址",key:"path",dataKey:"path",width:300,cellRenderer:({cellData:c})=>Mt(tp,{val:c},null)},{title:"接口描述",key:"description",dataKey:"description",width:300},{title:"创建时间",key:"createdAt",dataKey:"createdAt",width:200},{title:"操作",key:"operations",fixed:lv.RIGHT,cellRenderer:({rowData:c})=>Mt($l,null,[Mt(bi,{size:"small",onClick:()=>t(c.url??"")},{default:()=>[go("复制")]}),Mt(bi,{size:"small",onClick:()=>i(c)},{default:()=>[go("编辑")]}),Mt(kp,{title:"确认要删除该数据吗？删除后无法恢复！",onConfirm:()=>Ub(c)},{reference:()=>Mt(bi,{size:"small",type:"danger"},{default:()=>[go("删除")]})})]),width:200,align:"center"}];function s(){Object.assign(o,uv()),r.value=!0}function i(c){let u;try{u=JSON.parse(c.response)}catch{u=c.response}Object.assign(o,{id:c.id,name:c.name,type:c.type,enabled:c.enabled,path:c.path,description:c.description,delay:c.delay,response:u,projectId:c.projectId}),r.value=!0}async function l(c){let u=c.response;if(!u){hr.error("请填写接口返回数据");return}if(typeof u!="string")try{u=JSON.stringify(u)}catch{u=u.toString()}else try{u=JSON.stringify(JSON.parse(u))}catch{}let d;c.id>-1?d=await Nb({...c,response:u}):d=await Db({...c,response:u}),d&&(r.value=!1)}return(c,u)=>{const d=qb,h=tp,p=bi,m=Eb,g=$b,b=op,j=yp,x=zb,S=Ob,O=Sb,C=xp,y=w4,$=sp;return Dr(),yo($l,null,[ot(Zr)?(Dr(),yo("div",S4,[Mt(d,{onBack:u[0]||(u[0]=I=>ot(Cp)())},{content:cr(()=>[go(Ha(ot(Zr).name),1)]),_:1}),Vn("div",O4,[Vn("div",z4,[u[11]||(u[11]=Vn("div",{class:"prj-meta-name"}," 接口根地址 ",-1)),Mt(h,{val:`${ot(ar).$apiBase}/mock/${ot(Zr).id}${ot(Zr).path}`,class:"prj-meta-content"},null,8,["val"])]),Vn("div",E4,[u[12]||(u[12]=Vn("div",{class:"prj-meta-name"}," 项目ID ",-1)),Mt(h,{val:ot(Zr).id,class:"prj-meta-content"},null,8,["val"])])]),Vn("div",$4,[Mt(p,{type:"primary",onClick:s},{default:cr(()=>u[13]||(u[13]=[go(" 新增接口 ")])),_:1})]),Vn("div",M4,[Mt(g,null,{default:cr(({height:I,width:T})=>[Mt(m,{columns:a,data:ot(ad),width:T,height:I,fixed:!0},null,8,["data","width","height"])]),_:1})])])):bs("",!0),Mt($,{modelValue:ot(r),"onUpdate:modelValue":u[10]||(u[10]=I=>ap(r)?r.value=I:null),fullscreen:"",title:ot(o).id>-1?"修改接口":"添加接口","destroy-on-close":""},{footer:cr(()=>[Vn("span",P4,[Mt(p,{onClick:u[8]||(u[8]=I=>r.value=!1)},{default:cr(()=>u[14]||(u[14]=[go("取消")])),_:1}),Mt(p,{type:"primary",onClick:u[9]||(u[9]=I=>l(ot(o)))},{default:cr(()=>u[15]||(u[15]=[go(" 提交 ")])),_:1})])]),default:cr(()=>[Vn("div",A4,[Mt(C,{model:ot(o),class:"edit-data-form"},{default:cr(()=>[Mt(j,{label:"接口名","label-width":120,required:!0},{default:cr(()=>[Mt(b,{modelValue:ot(o).name,"onUpdate:modelValue":u[1]||(u[1]=I=>ot(o).name=I),autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(j,{label:"类型(method)","label-width":120,required:!0},{default:cr(()=>[Mt(S,{modelValue:ot(o).type,"onUpdate:modelValue":u[2]||(u[2]=I=>ot(o).type=I)},{default:cr(()=>[Mt(x,{label:"GET",value:"get"}),Mt(x,{label:"POST",value:"post"}),Mt(x,{label:"DELETE",value:"delete"}),Mt(x,{label:"PUT",value:"put"})]),_:1},8,["modelValue"])]),_:1}),Mt(j,{label:"返回延时(单位毫秒)","label-width":120},{default:cr(()=>[Mt(b,{modelValue:ot(o).delay,"onUpdate:modelValue":u[3]||(u[3]=I=>ot(o).delay=I),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(j,{label:"接口","label-width":120,required:!0},{default:cr(()=>[Mt(b,{modelValue:ot(o).path,"onUpdate:modelValue":u[4]||(u[4]=I=>ot(o).path=I),autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(j,{label:"接口描述","label-width":120},{default:cr(()=>[Mt(b,{modelValue:ot(o).description,"onUpdate:modelValue":u[5]||(u[5]=I=>ot(o).description=I),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(j,{label:"接口状态","label-width":120},{default:cr(()=>[Mt(O,{modelValue:ot(o).enabled,"onUpdate:modelValue":u[6]||(u[6]=I=>ot(o).enabled=I),"inline-prompt":"","active-text":"开","inactive-text":"关"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),Mt(y,{modelValue:ot(o).response,"onUpdate:modelValue":u[7]||(u[7]=I=>ot(o).response=I),class:"edit-data-json",mode:"text"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])],64)}}}),_4=ed(I4,[["__scopeId","data-v-357bf5b6"]]),q4={id:"",name:"",path:"",description:""},Zd=Ea([]);async function T4(){try{await $c();const e=vm("prjId");e&&Lg(e)}catch{throw new Error("获取项目列表失败")}}function N4(){return{...q4}}function Lg(e){if(typeof e=="string"){const t=Zd.value.find(r=>r.id===e);if(t)e=t;else{hr.error("未找到项目");return}}Cp(e).then()}async function D4(e){try{if((await ar.post(`${ar.$apiBase}/mock/api/prj`,{...e,id:void 0}).then(ar.getData)).success)return hr.success("创建项目成功"),$c().then(),!0;hr.error("创建项目失败")}catch{hr.error("创建项目失败")}return!1}async function U4(e){try{if((await ar.put(`${ar.$apiBase}/mock/api/prj/${e.id}`,e).then(ar.getData)).success)return hr.success("更新项目成功"),$c().then(),!0;hr.error("更新项目失败")}catch{hr.error("更新项目失败")}return!1}async function B4(e){try{if((await ar.delete(`${ar.$apiBase}/mock/api/prj/${e.id}`).then(ar.getData)).success)return hr.success("删除项目成功"),$c().then(),!0;hr.error("删除项目失败")}catch{hr.error("删除项目失败")}return!1}async function $c(){try{const e=await ar.get(`${ar.$apiBase}/mock/api/prj/list`).then(ar.getData);e.success?Zd.value=e.data||[]:hr.error("获取项目列表失败")}catch(e){console.log(e),hr.error("获取项目列表失败")}}const F4={class:"prj-wrapper"},L4={"w-full":"",class:"prj-list"},V4={class:"prj-title"},W4={class:"prj-path"},H4={class:"prj-desc"},J4={class:"prj-control"},K4=["onClick"],Y4=["onClick"],Q4={class:"dialog-footer"},X4=as({__name:"mockList",setup(e){const t=Ea(!1),r=rp({id:"",name:"",path:"",description:""});function o(){Object.assign(r,N4()),t.value=!0}function a(i){Object.assign(r,{id:i.id??"",name:i.name,path:i.path,description:i.description??""}),t.value=!0}async function s(i){let l;i.id?l=await U4(i):l=await D4(i),l&&(t.value=!1)}return(i,l)=>{const c=kp,u=op,d=yp,h=xp,p=bi,m=sp;return Dr(),yo($l,null,[Vn("div",F4,[Vn("div",L4,[(Dr(!0),yo($l,null,fm(ot(Zd),(g,b)=>(Dr(),yo("div",{key:b,class:"prj-item"},[Vn("div",V4,Ha(g.name),1),Vn("div",W4,Ha(g.path),1),Vn("div",H4,Ha(g.description),1),Vn("div",J4,[Vn("div",{class:"prj-control-btn prj-btn-open",onClick:j=>ot(Lg)(g)},l[6]||(l[6]=[Vn("i",{class:"i-icon-park-outline-preview-open"},null,-1)]),8,K4),Vn("div",{class:"prj-control-btn prj-btn-edit",onClick:j=>a(g)},l[7]||(l[7]=[Vn("i",{class:"i-icon-park-outline-edit-two"},null,-1)]),8,Y4),Mt(c,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:j=>ot(B4)(g)},{reference:cr(()=>l[8]||(l[8]=[Vn("div",{class:"prj-control-btn prj-btn-delete"},[Vn("i",{class:"i-icon-park-outline-delete"})],-1)])),_:2},1032,["onConfirm"])])]))),128)),Vn("div",{class:"prj-add",onClick:o},l[9]||(l[9]=[Vn("i",{class:"i-icon-park-outline-plus"},null,-1)]))])]),Mt(m,{modelValue:ot(t),"onUpdate:modelValue":l[5]||(l[5]=g=>ap(t)?t.value=g:null),title:ot(r).id?"修改项目":"添加项目"},{footer:cr(()=>[Vn("span",Q4,[Mt(p,{onClick:l[3]||(l[3]=g=>t.value=!1)},{default:cr(()=>l[10]||(l[10]=[go("取消")])),_:1}),Mt(p,{type:"primary",onClick:l[4]||(l[4]=g=>s(ot(r)))},{default:cr(()=>l[11]||(l[11]=[go(" 提交 ")])),_:1})])]),default:cr(()=>[Mt(h,{model:ot(r)},{default:cr(()=>[Mt(d,{label:"项目名称","label-width":120,required:!0},{default:cr(()=>[Mt(u,{modelValue:ot(r).name,"onUpdate:modelValue":l[0]||(l[0]=g=>ot(r).name=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(d,{label:"接口基础路径","label-width":120,required:!0},{default:cr(()=>[Mt(u,{modelValue:ot(r).path,"onUpdate:modelValue":l[1]||(l[1]=g=>ot(r).path=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),Mt(d,{label:"项目描述","label-width":120},{default:cr(()=>[Mt(u,{modelValue:ot(r).description,"onUpdate:modelValue":l[2]||(l[2]=g=>ot(r).description=g),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),G4=ed(X4,[["__scopeId","data-v-ede3387b"]]),Az=as({__name:"mock",setup(e){return np(()=>{T4()}),(t,r)=>ot(Zr)?(Dr(),zi(_4,{key:1})):(Dr(),zi(G4,{key:0}))}});export{Az as default};
