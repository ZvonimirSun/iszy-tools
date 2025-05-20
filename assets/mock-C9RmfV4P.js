import{h as Kg,bB as Yg,aR as Qg,_ as Xg,k as as,aS as Gg,u as Zg,E as xo,r as Nr,G as bs,F as Vn,v as Ro,x as Ge,s as ds,K as bt,q as zi,w as Zn,y as em,aN as tm,N as ho,H as Ha,z as nm,R as za,bn as Ua,aA as Cr,bC as rm,bD as om,bm as am,ax as np,ay as sm,a_ as El,bz as fu,a8 as im,aa as lm,n as tv,ag as cm,a6 as um,T as rp,a7 as qc,bl as dm,aB as vm,a0 as ed,a4 as op,L as bi,Y as $l,W as ap,X as sp,a3 as fm,bE as pm,Z as hm}from"./index-D2wiBBrc.js";import{E as ip}from"./el-dialog-DctGanM3.js";import{f as lp,a as cp,n as xr,c as Et,b as gm,B as Je,I as wr,l as Ht,i as Rn,p as Io,j as _a,aa as Ei,d as oc,D as Ts,k as on,s as Qo,L as mm,M as bm,W as qo,X as $s,Y as up,Z as dp,_ as Ms,r as wa,$ as vp,a0 as fp,a1 as jm,t as Ml,u as Al,a2 as pu,a3 as rl,a4 as ks,a5 as xm,a6 as ym,q as ac,v as pp,w as td,x as nd,K as To,as as wm,C as ka,H as $r,al as ta,an as km,a9 as na,z as Cm,A as Sm,ac as hp,ai as gp,ak as As,aj as hu,U as Om,V as ol,ao as Pl,e as rd,g as nv,h as Ns,a7 as mp,a8 as od,y as bp,R as zm,S as Em,m as Xa,at as $m,ah as Mm,o as rv,ar as Am,Q as Pm,P as Rm,ap as _m,N as Im,ag as qm,am as Tm,E as Nm,F as Dm,ab as ov,G as Um,ae as Bm,T as Lm,af as Fm,ad as Vm,J as Wm}from"./jse-theme-dark-_hj5hbhx.js";import{m as $i}from"./memoize-one.esm-BdPwpGay.js";import{H as Hm,t as di,s as jp,V as Jm,g as av,R as Km,D as Ym,E as vs,k as sv,C as vi,l as Qm,a as Xm,h as Gm,b as Zm,f as eb,d as tb,e as nb,i as rb,j as ob,r as ab,m as sb,n as ib,o as lb,p as fs,q as cb,u as ub,v as db,w as vb,x as fb,z as pb,A as hb,O as gb,B as Tc,P as iv,L as mb,F as bb,K as jb,G as xb}from"./index-CbPy1rKS.js";import{c as yb,a as wb,b as kb,d as Cb}from"./index-DeCwUm3i.js";import{i as Zt}from"./Router-CMKHmha1.js";import{m as Sb}from"./map-BTQJV20G.js";import{r as xp}from"./range-EXrqUViH.js";import{a as yp,E as wp}from"./el-form-item-C50ES_Q_.js";import{E as Ob}from"./el-switch-B7665ymh.js";/* empty css               */import{a as zb,E as Eb}from"./el-select-Dw6s0Juu.js";import"./el-popper-CUIcCJ_g.js";import"./el-empty-91JV7Db-.js";import{F as lv,a as $b,E as Mb}from"./el-table-v2-CQFmqgvd.js";import{u as kp}from"./useCopy-_ZzCisYk.js";import{E as Ab}from"./el-divider-DX0QoSf3.js";import{E as Cp}from"./el-popover-Cqdm27be.js";import{E as cv}from"./index-DNskDLWc.js";import"./index-Dgl0LScg.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseEach-DG_D7BC8.js";import"./_castFunction-BL6F4tdu.js";import"./_baseIteratee-BJp2AaE-.js";import"./toFinite-DIigin8m.js";import"./index-Vcq4gwWv.js";import"./castArray-CYH9HJEJ.js";import"./clone-wTdvh42v.js";import"./strings-B9ncu-kX.js";import"./index-DQ002-1P.js";import"./raf-C1HmfcYk.js";const Pb=Kg({icon:{type:Qg,default:()=>Yg},title:String,content:{type:String,default:""}}),Rb={back:()=>!0},_b=as({name:"ElPageHeader"}),Ib=as({..._b,props:Pb,emits:Rb,setup(e,{emit:t}){const{t:r}=Gg(),o=Zg("page-header");function a(){t("back")}return(s,i)=>(Nr(),xo("div",{class:Ro([Ge(o).b(),{[Ge(o).m("has-breadcrumb")]:!!s.$slots.breadcrumb,[Ge(o).m("has-extra")]:!!s.$slots.extra,[Ge(o).is("contentful")]:!!s.$slots.default}])},[s.$slots.breadcrumb?(Nr(),xo("div",{key:0,class:Ro(Ge(o).e("breadcrumb"))},[ds(s.$slots,"breadcrumb")],2)):bs("v-if",!0),Vn("div",{class:Ro(Ge(o).e("header"))},[Vn("div",{class:Ro(Ge(o).e("left"))},[Vn("div",{class:Ro(Ge(o).e("back")),role:"button",tabindex:"0",onClick:a},[s.icon||s.$slots.icon?(Nr(),xo("div",{key:0,"aria-label":s.title||Ge(r)("el.pageHeader.title"),class:Ro(Ge(o).e("icon"))},[ds(s.$slots,"icon",{},()=>[s.icon?(Nr(),zi(Ge(tm),{key:0},{default:Zn(()=>[(Nr(),zi(em(s.icon)))]),_:1})):bs("v-if",!0)])],10,["aria-label"])):bs("v-if",!0),Vn("div",{class:Ro(Ge(o).e("title"))},[ds(s.$slots,"title",{},()=>[ho(Ha(s.title||Ge(r)("el.pageHeader.title")),1)])],2)],2),bt(Ge(Ab),{direction:"vertical"}),Vn("div",{class:Ro(Ge(o).e("content"))},[ds(s.$slots,"content",{},()=>[ho(Ha(s.content),1)])],2)],2),s.$slots.extra?(Nr(),xo("div",{key:0,class:Ro(Ge(o).e("extra"))},[ds(s.$slots,"extra")],2)):bs("v-if",!0)],2),s.$slots.default?(Nr(),xo("div",{key:1,class:Ro(Ge(o).e("main"))},[ds(s.$slots,"default")],2)):bs("v-if",!0)],2))}});var qb=Xg(Ib,[["__file","page-header.vue"]]);const Tb=nm(qb),Nb={id:-1,name:"",type:"all",enabled:!0,path:"",description:"",delay:0,contentType:"",response:"",projectId:""},Gr=za(),ad=za([]);function uv(){if(!Gr.value)throw new Error("未选择项目");return{...Nb,projectId:Gr.value.id}}async function Sp(e){Gr.value=e,ad.value=[],Gr.value?(rm("prjId",Gr.value.id),await sc()):om("prjId")}async function Db(e){try{if((await Ua.put(`/mock/api/data/${e.id}`,{...e,id:void 0,projectId:void 0})).success)return Cr.success("修改数据成功"),sc().then(),!0;Cr.error("修改数据失败")}catch{Cr.error("修改数据失败")}return!1}async function Ub(e){var t;try{if((await Ua.post("/mock/api/data",{...e,id:void 0,projectId:(t=Gr.value)==null?void 0:t.id})).success)return Cr.success("创建数据成功"),sc().then(),!0;Cr.error("创建数据失败")}catch{Cr.error("创建数据失败")}return!1}async function Bb(e){try{if((await Ua.delete(`/mock/api/data/${e.id}`)).success)return Cr.success("删除数据成功"),sc().then(),!0;Cr.error("删除数据失败")}catch{Cr.error("删除数据失败")}return!1}async function sc(){if(!Gr.value){Cr.error("未选择项目");return}try{ad.value=await Lb(Gr.value)}catch(e){console.log(e),Cr.error("获取数据列表失败")}}async function Lb(e){const t=await Ua.get(`/mock/api/prj/${e.id}/list`);if(t.success)return(t.data||[]).map(r=>(r.createdAt=am(r.createdAt).format("YYYY-MM-DD HH:mm:ss"),r.url=`${np.apiBaseUrl}/mock/${e.id}${e.path}${r.path}`,r));throw new Error(t.message)}const sd=e=>Array.isArray(e),Fb=e=>typeof e=="string";function Mr(e){return(...t)=>{const r=t.map(s=>eo(s)),o=r[0],a=r[1];return r.length===1?s=>e(o(s)):r.length===2?s=>e(o(s),a(s)):s=>e(...r.map(i=>i(s)))}}const Cs={pipe:(...e)=>{const t=e.map(r=>eo(r));return r=>t.reduce((o,a)=>a(o),r)},object:e=>{const t=Object.keys(e).map(r=>[r,eo(e[r])]);return r=>{const o={};for(const[a,s]of t)o[a]=s(r);return o}},array:(...e)=>{const t=e.map(r=>eo(r));return r=>t.map(o=>o(r))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return r=>r==null?void 0:r[t]}return t=>{let r=t;for(const o of e)r=r==null?void 0:r[o];return r}},map:e=>{const t=eo(e);return r=>r.map(t)},filter:e=>{const t=eo(e);return r=>r.filter(t)},sort:(e=["get"],t)=>{const r=eo(e),o=t==="desc"?-1:1;function a(s,i){const l=r(s),c=r(i);return l>c?o:l<c?-o:0}return s=>s.slice().sort(a)},pick:(...e)=>{const t=e.map(([o,...a])=>[a[a.length-1],Cs.get(...a)]),r=(o,a)=>{const s={};for(const[i,l]of a)s[i]=l(o);return s};return o=>sd(o)?o.map(a=>r(a,t)):r(o,t)},groupBy:e=>{const t=eo(e);return r=>{const o={};for(const a of r){const s=t(a);o[s]?o[s].push(a):o[s]=[a]}return o}},keyBy:e=>{const t=eo(e);return r=>{const o={};for(const a of r){const s=t(a);o[s]=o[s]??a}return o}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(Cs.groupBy(e)(t)).map(r=>r[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,r)=>t*r),sum:()=>e=>e.reduce((t,r)=>t+r),average:()=>e=>Cs.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const r=eo(e),o=eo(t);return a=>o(a).includes(r(a))},"not in":(e,t)=>{const r=Cs.in(e,t);return o=>!r(o)},regex:(e,t,r)=>{const o=new RegExp(t,r),a=eo(e);return s=>o.test(a(s))},and:Mr((e,t)=>e&&t),or:Mr((e,t)=>e||t),not:Mr(e=>!e),exists:Mr(e=>e!==void 0),eq:Mr((e,t)=>e===t),gt:Mr((e,t)=>e>t),gte:Mr((e,t)=>e>=t),lt:Mr((e,t)=>e<t),lte:Mr((e,t)=>e<=t),ne:Mr((e,t)=>e!==t),add:Mr((e,t)=>e+t),subtract:Mr((e,t)=>e-t),multiply:Mr((e,t)=>e*t),divide:Mr((e,t)=>e/t),pow:Mr((e,t)=>e**t),mod:Mr((e,t)=>e%t),abs:Mr(Math.abs),round:Mr((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},al=[];function eo(e,t){al.unshift({...Cs,...al[0]});try{const r=sd(e)?Vb(e,al[0]):()=>e;return o=>{try{return r(o)}catch(a){throw a.jsonquery=[{data:o,query:e},...a.jsonquery??[]],a}}}finally{al.shift()}}function Vb(e,t){const[r,...o]=e,a=t[r];if(!a)throw new Error(`Unknown function '${r}'`);return a(...o)}const Op={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},Wb=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Hb=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Jb=/^"(?:[^"\\]|\\.)*"/,Kb=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Yb=/^(0|[1-9][0-9]*)/,Qb=/^(true|false|null)/,Xb=/^[ \n\t\r]+/;function zp(e,t){const r=()=>{j();const y=o();if(j(),e[O]==="|"){const $=[y];for(;e[O]==="|";)O++,j(),$.push(o());return["pipe",...$]}return y},o=()=>{const y={...Op},$=a();j();for(const _ of Object.keys(y).sort((T,z)=>z.length-T.length)){const T=y[_];if(e.substring(O,O+T.length)===T){O+=T.length,j();const z=a();return[_,$,z]}}return $},a=()=>{if(e[O]==="("){O++;const y=r();return x(")"),y}return s()},s=()=>{const y=[];if(e[O]==="."){for(;e[O]===".";)O++,y.push(u()??d()??p()??S("Property expected"));return["get",...y]}return i()},i=()=>{const y=O,$=d();if(j(),!$||e[O]!=="(")return O=y,l();O++,!Cs[$]&&S(`Unknown function '${$}'`),j();const _=e[O]!==")"?[r()]:[];for(;O<e.length&&e[O]!==")";)j(),x(","),_.push(r());return x(")"),[$,..._]},l=()=>{if(e[O]==="{"){O++,j();const y={};let $=!0;for(;O<e.length&&e[O]!=="}";){$?$=!1:(x(","),j());const _=u()??d()??p()??S("Key expected");j(),x(":"),y[_]=r()}return x("}"),["object",y]}return c()},c=()=>{if(e[O]==="["){O++,j();const y=[];let $=!0;for(;O<e.length&&e[O]!=="]";)$?$=!1:(x(","),j()),y.push(r());return x("]"),["array",...y]}return u()??h()??m()},u=()=>b(Jb,JSON.parse),d=()=>b(Hb,y=>y),h=()=>b(Kb,JSON.parse),p=()=>b(Yb,JSON.parse),m=()=>{const y=b(Qb,JSON.parse);if(y!==void 0)return y;S("Value expected")},g=()=>{j(),O<e.length&&S(`Unexpected part '${e.substring(O)}'`)},b=(y,$)=>{const _=e.substring(O).match(y);if(_)return O+=_[0].length,$(_[0])},j=()=>b(Xb,y=>y),x=y=>{e[O]!==y&&S(`Character '${y}' expected`),O++},S=(y,$=O)=>{throw new SyntaxError(`${y} (pos: ${$})`)};let O=0;const C=r();return g(),C}const Gb=40,Zb="  ",ej=(e,t)=>{const r=Zb,o=(u,d)=>sd(u)?a(u,d):JSON.stringify(u),a=(u,d)=>{var h;const[p,...m]=u;if(p==="get"&&m.length>0)return i(m);if(p==="pipe"){const x=m.map(S=>o(S,d+r));return c(x,[""," | ",""],["",`
${d+r}| `,""])}if(p==="object")return s(m[0],d);if(p==="array"){const x=m.map(S=>o(S,d));return c(x,["[",", ","]"],[`[
${d+r}`,`,
${d+r}`,`
${d}]`])}const g=((h=void 0)==null?void 0:h[p])??Op[p];if(g&&m.length===2){const[x,S]=m,O=o(x,d),C=o(S,d);return`(${O} ${g} ${C})`}const b=m.length===1?d:d+r,j=m.map(x=>o(x,b));return m.length===1&&j[0][0]==="("?`${p}${j}`:c(j,[`${p}(`,", ",")"],m.length===1?[`${p}(`,`,
${d}`,")"]:[`${p}(
${b}`,`,
${b}`,`
${d})`])},s=(u,d)=>{const h=d+r,p=Object.entries(u).map(([m,g])=>`${l(m)}: ${o(g,h)}`);return c(p,["{ ",", "," }"],[`{
${h}`,`,
${h}`,`
${d}}`])},i=u=>u.map(d=>`.${l(d)}`).join(""),l=u=>Wb.test(u)?u:JSON.stringify(u),c=(u,[d,h,p],[m,g,b])=>d.length+u.reduce((j,x)=>j+x.length+h.length,0)-h.length+p.length<=Gb?d+u.join(h)+p:m+u.join(g)+b;return o(e,"")};function tj(e,t,r){return eo(Fb(t)?zp(t):t)(e)}class nj{add(t,r,o){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][o?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(o){o.call(r&&r.context?r.context:r,r)})}}class rj{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(a=>{if(typeof a!="object"||!a.name||!a.init)throw new Error("Invalid JSEP plugin format");this.registered[a.name]||(a.init(this.jsep),this.registered[a.name]=a)})}}class ee{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+ee.version}static addUnaryOp(t){return ee.max_unop_len=Math.max(t.length,ee.max_unop_len),ee.unary_ops[t]=1,ee}static addBinaryOp(t,r,o){return ee.max_binop_len=Math.max(t.length,ee.max_binop_len),ee.binary_ops[t]=r,o?ee.right_associative.add(t):ee.right_associative.delete(t),ee}static addIdentifierChar(t){return ee.additional_identifier_chars.add(t),ee}static addLiteral(t,r){return ee.literals[t]=r,ee}static removeUnaryOp(t){return delete ee.unary_ops[t],t.length===ee.max_unop_len&&(ee.max_unop_len=ee.getMaxKeyLen(ee.unary_ops)),ee}static removeAllUnaryOps(){return ee.unary_ops={},ee.max_unop_len=0,ee}static removeIdentifierChar(t){return ee.additional_identifier_chars.delete(t),ee}static removeBinaryOp(t){return delete ee.binary_ops[t],t.length===ee.max_binop_len&&(ee.max_binop_len=ee.getMaxKeyLen(ee.binary_ops)),ee.right_associative.delete(t),ee}static removeAllBinaryOps(){return ee.binary_ops={},ee.max_binop_len=0,ee}static removeLiteral(t){return delete ee.literals[t],ee}static removeAllLiterals(){return ee.literals={},ee}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new ee(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return ee.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!ee.binary_ops[String.fromCharCode(t)]||ee.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return ee.isIdentifierStart(t)||ee.isDecimalDigit(t)}throwError(t){const r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=t,r}runHook(t,r){if(ee.hooks[t]){const o={context:this,node:r};return ee.hooks.run(t,o),o.node}return r}searchHook(t){if(ee.hooks[t]){const r={context:this};return ee.hooks[t].find(function(o){return o.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.code;for(;t===ee.SPACE_CODE||t===ee.TAB_CODE||t===ee.LF_CODE||t===ee.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:ee.COMPOUND,body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],o,a;for(;this.index<this.expr.length;)if(o=this.code,o===ee.SEMCOL_CODE||o===ee.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())r.push(a);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,ee.max_binop_len),r=t.length;for(;r>0;){if(ee.binary_ops.hasOwnProperty(t)&&(!ee.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!ee.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,o,a,s,i,l,c,u;if(i=this.gobbleToken(),!i||(r=this.gobbleBinaryOp(),!r))return i;for(s={value:r,prec:ee.binaryPrecedence(r),right_a:ee.right_associative.has(r)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+r),a=[i,s,l];r=this.gobbleBinaryOp();){if(o=ee.binaryPrecedence(r),o===0){this.index-=r.length;break}s={value:r,prec:o,right_a:ee.right_associative.has(r)},u=r;const d=h=>s.right_a&&h.right_a?o>h.prec:o<=h.prec;for(;a.length>2&&d(a[a.length-2]);)l=a.pop(),r=a.pop().value,i=a.pop(),t={type:ee.BINARY_EXP,operator:r,left:i,right:l},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+u),a.push(s,t)}for(c=a.length-1,t=a[c];c>1;)t={type:ee.BINARY_EXP,operator:a[c-1].value,left:a[c-2],right:t},c-=2;return t}gobbleToken(){let t,r,o,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,ee.isDecimalDigit(t)||t===ee.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===ee.SQUOTE_CODE||t===ee.DQUOTE_CODE)a=this.gobbleStringLiteral();else if(t===ee.OBRACK_CODE)a=this.gobbleArray();else{for(r=this.expr.substr(this.index,ee.max_unop_len),o=r.length;o>0;){if(ee.unary_ops.hasOwnProperty(r)&&(!ee.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&!ee.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=o;const s=this.gobbleToken();return s||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:ee.UNARY_EXP,operator:r,argument:s,prefix:!0})}r=r.substr(0,--o)}ee.isIdentifierStart(t)?(a=this.gobbleIdentifier(),ee.literals.hasOwnProperty(a.name)?a={type:ee.LITERAL,value:ee.literals[a.name],raw:a.name}:a.name===ee.this_str&&(a={type:ee.THIS_EXP})):t===ee.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let r=this.code;for(;r===ee.PERIOD_CODE||r===ee.OBRACK_CODE||r===ee.OPAREN_CODE||r===ee.QUMARK_CODE;){let o;if(r===ee.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==ee.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,r===ee.OBRACK_CODE?(t={type:ee.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==ee.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):r===ee.OPAREN_CODE?t={type:ee.CALL_EXP,arguments:this.gobbleArguments(ee.CPAREN_CODE),callee:t}:(r===ee.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:ee.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,o;for(;ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===ee.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r==="+"||r==="-")&&(t+=this.expr.charAt(this.index++));ee.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);ee.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,ee.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===ee.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===ee.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:ee.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const r=this.index,o=this.expr.charAt(this.index++);let a=!1;for(;this.index<this.expr.length;){let s=this.expr.charAt(this.index++);if(s===o){a=!0;break}else if(s==="\\")switch(s=this.expr.charAt(this.index++),s){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=s}else t+=s}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:ee.LITERAL,value:t,raw:this.expr.substring(r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(ee.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,ee.isIdentifierPart(t));)this.index++;return{type:ee.IDENTIFIER,name:this.expr.slice(r,this.index)}}gobbleArguments(t){const r=[];let o=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let s=this.code;if(s===t){o=!0,this.index++,t===ee.CPAREN_CODE&&a&&a>=r.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(s===ee.COMMA_CODE){if(this.index++,a++,a!==r.length){if(t===ee.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===ee.CBRACK_CODE)for(let i=r.length;i<a;i++)r.push(null)}}else if(r.length!==a&&a!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===ee.COMPOUND)&&this.throwError("Expected comma"),r.push(i)}}return o||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(ee.CPAREN_CODE);if(this.code===ee.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:ee.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:ee.ARRAY_EXP,elements:this.gobbleArguments(ee.CBRACK_CODE)}}}const oj=new nj;Object.assign(ee,{hooks:oj,plugins:new rj(ee),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});ee.max_unop_len=ee.getMaxKeyLen(ee.unary_ops);ee.max_binop_len=ee.getMaxKeyLen(ee.binary_ops);const Ia=e=>new ee(e).parse(),aj=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(ee).filter(e=>!aj.includes(e)&&Ia[e]===void 0).forEach(e=>{Ia[e]=ee[e]});Ia.Jsep=ee;const sj="ConditionalExpression";var ij={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===e.QUMARK_CODE){this.index++;const o=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const s=this.gobbleExpression();if(s||this.throwError("Expected expression"),r.node={type:sj,test:o,consequent:a,alternate:s},o.operator&&e.binary_ops[o.operator]<=.9){let i=o;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;r.node.test=i.right,i.right=r.node,r.node=o}}else this.throwError("Expected :")}})}};Ia.plugins.register(ij);const dv=47,lj=92;var cj={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===dv){const o=++this.index;let a=!1;for(;this.index<this.expr.length;){if(this.code===dv&&!a){const s=this.expr.slice(o,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(s,i)}catch(c){this.throwError(c.message)}return r.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&(a=!1),this.index+=this.code===lj?2:1}this.throwError("Unclosed Regex")}})}};const Nc=43,uj=45,js={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[Nc,uj],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];js.assignmentOperators.forEach(o=>e.addBinaryOp(o,js.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(a){const s=this.code;js.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,a.node={type:"UpdateExpression",operator:s===Nc?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!a.node.argument||!t.includes(a.node.argument.type))&&this.throwError(`Unexpected ${a.node.operator}`))}),e.hooks.add("after-token",function(a){if(a.node){const s=this.code;js.updateOperators.some(i=>i===s&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(a.node.type)||this.throwError(`Unexpected ${a.node.operator}`),this.index+=2,a.node={type:"UpdateExpression",operator:s===Nc?"++":"--",argument:a.node,prefix:!1})}}),e.hooks.add("after-expression",function(a){a.node&&r(a.node)});function r(o){js.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",r(o.left),r(o.right)):o.operator||Object.values(o).forEach(a=>{a&&typeof a=="object"&&r(a)})}}};Ia.plugins.register(cj,js);Ia.addUnaryOp("typeof");Ia.addLiteral("null",null);Ia.addLiteral("undefined",void 0);var vv,dj=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],vj=["mainAxis","crossAxis","limiter"];function Ep(e,t){if(e==null)return{};var r,o,a=function(i,l){if(i==null)return{};var c={};for(var u in i)if({}.hasOwnProperty.call(i,u)){if(l.indexOf(u)!==-1)continue;c[u]=i[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function fv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fv(Object(r),!0).forEach(function(o){fj(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fv(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function fj(e,t,r){return(t=function(o){var a=function(s,i){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var c=l.call(s,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}(o,"string");return typeof a=="symbol"?a:a+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pv(e,t,r,o,a,s,i){try{var l=e[s](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(o,a)}function wt(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var s=e.apply(t,r);function i(c){pv(s,o,a,i,l,"next",c)}function l(c){pv(s,o,a,i,l,"throw",c)}i(void 0)})}}typeof window<"u"&&((vv=window).__svelte||(vv.__svelte={v:new Set})).v.add("5");var Js=!1;Js=!0;var Wr=Symbol(),pj=!1,Ji=32,Dc=128,No=256,gu=512,Kr=1024,Ks=2048,Ys=4096,Ea=8192,id=16384,ic=65536,hj=1<<17,gj=1<<20,$a=Symbol("$state"),$p=Symbol("legacy props"),mj=Symbol(""),Ki=Array.isArray,bj=Array.prototype.indexOf,mu=Array.from,jj=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,Mp=Object.getOwnPropertyDescriptors,xj=Object.prototype,yj=Array.prototype,ld=Object.getPrototypeOf;function fi(e){return typeof e=="function"}function wj(e){return e()}function Rl(e){for(var t=0;t<e.length;t++)e[t]()}var Mi=[],Uc=[];function Ap(){var e=Mi;Mi=[],Rl(e)}function lc(e){Mi.length===0&&queueMicrotask(Ap),Mi.push(e)}function hv(){var e;Mi.length>0&&Ap(),Uc.length>0&&(e=Uc,Uc=[],Rl(e))}function Pp(e){return e===this.v}function cd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function kj(e,t){return e!==t}function ud(e){return!cd(e,this.v)}function Xr(e,t){return{f:0,v:e,reactions:null,equals:Pp,rv:0,wv:0}}function dd(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=Xr(e);return o||(a.equals=ud),Js&&$n!==null&&$n.l!==null&&((r=(t=$n.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function M(e){return function(t){return Kn!==null&&!yo&&2&Kn.f&&(Do===null?Do=[t]:Do.push(t)),t}(dd(e,arguments.length>1&&arguments[1]!==void 0&&arguments[1]))}function ro(e,t){return f(e,Lo(()=>n(e))),t}function f(e,t){return Kn!==null&&!yo&&ei()&&18&Kn.f&&(Do===null||!Do.includes(e))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),bu(e,t)}function bu(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=Up(),Rp(e,Ks),ei()&&er!==null&&er.f&Kr&&!(96&er.f)&&(Xo===null?function(r){Xo=r}([e]):Xo.push(e))),t}function gv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return f(e,r),o}function Rp(e,t){var r=e.reactions;if(r!==null)for(var o=ei(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;l&Ks||(o||i!==er)&&(Ao(i,t),1280&l&&(2&l?Rp(i,Ys):fc(i)))}}function Ai(e){var t=2050,r=Kn!==null&&2&Kn.f?Kn:null;return er===null||r!==null&&r.f&No?t|=No:er.f|=gj,{ctx:$n,deps:null,effects:null,equals:Pp,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??er}}function fe(e){var t=Ai(e);return t.equals=ud,t}function _p(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)la(t[r])}}function Ip(e){var t=function(r){var o,a=er;Ta(function(s){for(var i=s.parent;i!==null;){if(!(2&i.f))return i;i=i.parent}return null}(r));try{_p(r),o=Lp(r)}finally{Ta(a)}return o}(e);Ao(e,(Ca||e.f&No)&&e.deps!==null?Ys:Kr),e.equals(t)||(e.v=t,e.wv=Up())}var oa,qp,Tp,Np;function xs(e){if(typeof e!="object"||e===null||$a in e)return e;var t=ld(e);if(t!==xj&&t!==yj)return e;var r=new Map,o=Ki(e),a=Xr(0);return o&&r.set("length",Xr(e.length)),new Proxy(e,{defineProperty(s,i,l){"value"in l&&l.configurable!==!1&&l.enumerable!==!1&&l.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var c=r.get(i);return c===void 0?(c=Xr(l.value),r.set(i,c)):f(c,xs(l.value)),!0},deleteProperty(s,i){var l=r.get(i);if(l===void 0)i in s&&r.set(i,Xr(Wr));else{if(o&&typeof i=="string"){var c=r.get("length"),u=Number(i);Number.isInteger(u)&&u<c.v&&f(c,u)}f(l,Wr),mv(a)}return!0},get(s,i,l){var c;if(i===$a)return e;var u=r.get(i),d=i in s;if(u===void 0&&(!d||(c=ra(s,i))!==null&&c!==void 0&&c.writable)&&(u=Xr(xs(d?s[i]:Wr)),r.set(i,u)),u!==void 0){var h=n(u);return h===Wr?void 0:h}return Reflect.get(s,i,l)},getOwnPropertyDescriptor(s,i){var l=Reflect.getOwnPropertyDescriptor(s,i);if(l&&"value"in l){var c=r.get(i);c&&(l.value=n(c))}else if(l===void 0){var u=r.get(i),d=u==null?void 0:u.v;if(u!==void 0&&d!==Wr)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(s,i){var l;if(i===$a)return!0;var c=r.get(i),u=c!==void 0&&c.v!==Wr||Reflect.has(s,i);return(c!==void 0||er!==null&&(!u||(l=ra(s,i))!==null&&l!==void 0&&l.writable))&&(c===void 0&&(c=Xr(u?xs(s[i]):Wr),r.set(i,c)),n(c)===Wr)?!1:u},set(s,i,l,c){var u,d=r.get(i),h=i in s;if(o&&i==="length")for(var p=l;p<d.v;p+=1){var m=r.get(p+"");m!==void 0?f(m,Wr):p in s&&(m=Xr(Wr),r.set(p+"",m))}d===void 0?(!h||(u=ra(s,i))!==null&&u!==void 0&&u.writable)&&(f(d=Xr(void 0),xs(l)),r.set(i,d)):(h=d.v!==Wr,f(d,xs(l)));var g=Reflect.getOwnPropertyDescriptor(s,i);if(g!=null&&g.set&&g.set.call(c,l),!h){if(o&&typeof i=="string"){var b=r.get("length"),j=Number(i);Number.isInteger(j)&&j>=b.v&&f(b,j+1)}mv(a)}return!0},ownKeys(s){n(a);var i=Reflect.ownKeys(s).filter(u=>{var d=r.get(u);return d===void 0||d.v!==Wr});for(var[l,c]of r)c.v===Wr||l in s||i.push(l);return i},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function mv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;f(e,e.v+t)}function cc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function oo(e){return Tp.call(e)}function uc(e){return Np.call(e)}function A(e,t){return oo(e)}function Ne(e,t){var r=oo(e);return r instanceof Comment&&r.data===""?uc(r):r}function N(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=uc(r);return r}var sl=!1,_l=!1,Il=null,xl=!1,vd=!1;function bv(e){vd=e}var ki=[],Kn=null,yo=!1;function qa(e){Kn=e}var er=null;function Ta(e){er=e}var Do=null,Hr=null,to=0,Xo=null,Dp=1,ql=0,Ca=!1;function Up(){return++Dp}function Qs(e){var t=e.f;if(t&Ks)return!0;if(t&Ys){var r=e.deps,o=!!(t&No);if(r!==null){var a,s,i=!!(t&gu),l=o&&er!==null&&!Ca,c=r.length;if(i||l){var u=e,d=u.parent;for(a=0;a<c;a++){var h,p,m;s=r[a],(i||(h=s)===null||h===void 0||(h=h.reactions)===null||h===void 0||!h.includes(u))&&((m=(p=s).reactions)!==null&&m!==void 0?m:p.reactions=[]).push(u)}i&&(u.f^=gu),!l||d===null||d.f&No||(u.f^=No)}for(a=0;a<c;a++)if(Qs(s=r[a])&&Ip(s),s.wv>e.wv)return!0}o&&(er===null||Ca)||Ao(e,Kr)}return!1}function dc(e,t,r,o){if(sl){if(r===null&&(sl=!1),function(a){return!(a.f&id||a.parent!==null&&a.parent.f&Dc)}(t))throw e}else r!==null&&(sl=!0),function(a,s){for(var i=s;i!==null;){if(i.f&Dc)try{return void i.fn(a)}catch{i.f^=Dc}i=i.parent}throw sl=!1,a}(e,t)}function Bp(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=e.reactions;if(o!==null)for(var a=0;a<o.length;a++){var s=o[a];2&s.f?Bp(s,t,!1):t===s&&(r?Ao(s,Ks):s.f&Kr&&Ao(s,Ys),fc(s))}}function Lp(e){var t=Hr,r=to,o=Xo,a=Kn,s=Ca,i=Do,l=$n,c=yo,u=e.f;Hr=null,to=0,Xo=null,Ca=!!(u&No)&&(yo||!xl||Kn===null),Kn=96&u?null:e,Do=null,jv(e.ctx),yo=!1,ql++;try{var d=(0,e.fn)(),h=e.deps;if(Hr!==null){var p;if(Tl(e,to),h!==null&&to>0)for(h.length=to+Hr.length,p=0;p<Hr.length;p++)h[to+p]=Hr[p];else e.deps=h=Hr;if(!Ca)for(p=to;p<h.length;p++){var m,g;((g=(m=h[p]).reactions)!==null&&g!==void 0?g:m.reactions=[]).push(e)}}else h!==null&&to<h.length&&(Tl(e,to),h.length=to);if(ei()&&Xo!==null&&!yo&&h!==null&&!(6146&e.f))for(p=0;p<Xo.length;p++)Bp(Xo[p],e);return a!==null&&ql++,d}finally{Hr=t,to=r,Xo=o,Kn=a,Ca=s,Do=i,jv(l),yo=c}}function Cj(e,t){var r=t.reactions;if(r!==null){var o=bj.call(r,e);if(o!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[o]=r[a],r.pop())}}r===null&&2&t.f&&(Hr===null||!Hr.includes(t))&&(Ao(t,Ys),768&t.f||(t.f^=gu),_p(t),Tl(t,0))}function Tl(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)Cj(e,r[o])}function vc(e){var t=e.f;if(!(t&id)){Ao(e,Kr);var r=er,o=$n,a=xl;er=e,xl=!0;try{16&t?function(i){for(var l=i.first;l!==null;){var c=l.next;l.f&Ji||la(l),l=c}}(e):Kp(e),Jp(e);var s=Lp(e);e.teardown=typeof s=="function"?s:null,e.wv=Dp,e.deps}catch(i){dc(i,e,r,o||e.ctx)}finally{xl=a,er=r}}}function Sj(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){if(Il===null)throw e;dc(e,Il,null)}}function Fp(){try{for(var e=0;ki.length>0;){e++>1e3&&Sj();var t=ki,r=t.length;ki=[];for(var o=0;o<r;o++){var a=t[o];a.f&Kr||(a.f^=Kr),Oj(zj(a))}}}finally{_l=!1,Il=null}}function Oj(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var o=e[r];if(!(24576&o.f))try{Qs(o)&&(vc(o),o.deps===null&&o.first===null&&o.nodes_start===null&&(o.teardown===null?Yp(o):o.fn=null))}catch(a){dc(a,o,null,o.ctx)}}}function fc(e){_l||(_l=!0,queueMicrotask(Fp));for(var t=Il=e;t.parent!==null;){var r=(t=t.parent).f;if(96&r){if(!(r&Kr))return;t.f^=Kr}}ki.push(t)}function zj(e){for(var t=[],r=e.first;r!==null;){var o=r.f,a=!!(o&Ji);if(!(a&&o&Kr||o&Ea)){if(4&o)t.push(r);else if(a)r.f^=Kr;else{var s=Kn;try{Kn=r,Qs(r)&&vc(r)}catch(c){dc(c,r,null,r.ctx)}finally{Kn=s}}var i=r.first;if(i!==null){r=i;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)r=l.next,l=l.parent}return t}function ar(e){for(hv();ki.length>0;)_l=!0,Fp(),hv()}function Vp(){return(Vp=wt(function*(){yield Promise.resolve(),ar()})).apply(this,arguments)}function n(e){var t=!!(2&e.f);if(Kn===null||yo){if(t&&e.deps===null&&e.effects===null){var r=e,o=r.parent;o===null||o.f&No||(r.f^=No)}}else{Do!==null&&Do.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var a=Kn.deps;e.rv<ql&&(e.rv=ql,Hr===null&&a!==null&&a[to]===e?to++:Hr===null?Hr=[e]:Ca&&Hr.includes(e)||Hr.push(e))}return t&&Qs(r=e)&&Ip(r),e.v}function Lo(e){var t=yo;try{return yo=!0,e()}finally{yo=t}}var Ej=-7169;function Ao(e,t){e.f=e.f&Ej|t}function E(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if($a in e)ju(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&$a in r&&ju(r)}}}function ju(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{ju(e[r],t)}catch{}var o=ld(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var a=Mp(o);for(var s in a){var i=a[s].get;if(i)try{i.call(e)}catch{}}}}}function Wp(e){er===null&&Kn===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),Kn!==null&&Kn.f&No&&er===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),vd&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Xs(e,t,r){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],a=!!(64&e),s=er,i={ctx:$n,deps:null,nodes_start:null,nodes_end:null,f:e|Ks,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r)try{vc(i),i.f|=32768}catch(u){throw la(i),u}else t!==null&&fc(i);if(!(r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&!(1048704&i.f))&&!a&&o&&(s!==null&&function(u,d){var h=d.last;h===null?d.last=d.first=u:(h.next=u,u.prev=h,d.last=u)}(i,s),Kn!==null&&2&Kn.f)){var l,c=Kn;((l=c.effects)!==null&&l!==void 0?l:c.effects=[]).push(i)}return i}function Hp(e){var t=Xs(8,null,!1);return Ao(t,Kr),t.teardown=e,t}function xu(e){if(Wp(),!(er!==null&&er.f&Ji&&$n!==null&&!$n.m))return Ar(e);var t,r=$n;((t=r.e)!==null&&t!==void 0?t:r.e=[]).push({fn:e,effect:er,reaction:Kn})}function Ar(e){return Xs(4,e,!1)}function U(e,t){var r=$n,o={effect:null,ran:!1};r.l.r1.push(o),o.effect=Gs(()=>{e(),o.ran||(o.ran=!0,f(r.l.r2,!0),Lo(t))})}function ln(){var e=$n;Gs(()=>{if(n(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&Kr&&Ao(r,Ys),Qs(r)&&vc(r),t.ran=!1}e.l.r2.v=!1}})}function Gs(e){return Xs(8,e,!0)}function we(e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ai,r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).map(t);return Zs(()=>e(...r.map(n)))}function Zs(e){return Xs(24|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Na(e){return Xs(40,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function Jp(e){var t=e.teardown;if(t!==null){var r=vd,o=Kn;bv(!0),qa(null);try{t.call(null)}finally{bv(r),qa(o)}}}function Kp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;for(e.first=e.last=null;r!==null;){var o=r.next;la(r,t),r=o}}function la(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;if((t||524288&e.f)&&e.nodes_start!==null){for(var o=e.nodes_start,a=e.nodes_end;o!==null;){var s=o===a?null:uc(o);o.remove(),o=s}r=!0}Kp(e,t&&!r),Tl(e,0),Ao(e,id);var i=e.transitions;if(i!==null)for(var l of i)l.stop();Jp(e);var c=e.parent;c!==null&&c.first!==null&&Yp(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Yp(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function Ds(e,t){var r=[];fd(e,r,!0),Qp(r,()=>{la(e),t&&t()})}function Qp(e,t){var r=e.length;if(r>0){var o=()=>--r||t();for(var a of e)a.out(o)}else t()}function fd(e,t,r){if(!(e.f&Ea)){if(e.f^=Ea,e.transitions!==null)for(var o of e.transitions)(o.is_global||r)&&t.push(o);for(var a=e.first;a!==null;){var s=a.next;fd(a,t,!!(a.f&ic||a.f&Ji)&&r),a=s}}}function Nl(e){Xp(e,!0)}function Xp(e,t){if(e.f&Ea){e.f^=Ea,e.f&Kr||(e.f^=Kr),Qs(e)&&(Ao(e,Ks),fc(e));for(var r=e.first;r!==null;){var o=r.next;Xp(r,!!(r.f&ic||r.f&Ji)&&t),r=o}if(e.transitions!==null)for(var a of e.transitions)(a.is_global||t)&&a.in()}}function Yi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var $n=null;function jv(e){$n=e}function Ba(e){return Gp().get(e)}function lt(e){$n={p:$n,c:null,e:null,m:!1,s:e,x:null,l:null},Js&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])&&($n.l={s:null,u:null,r1:[],r2:Xr(!1)})}function ct(e){var t=$n;if(t!==null){e!==void 0&&(t.x=e);var r=t.e;if(r!==null){var o=er,a=Kn;t.e=null;try{for(var s=0;s<r.length;s++){var i=r[s];Ta(i.effect),qa(i.reaction),Ar(i.fn)}}finally{Ta(o),qa(a)}}$n=t.p,t.m=!0}return e||{}}function ei(){return!Js||$n!==null&&$n.l===null}function Gp(e){var t,r;return $n===null&&Yi(),(r=(t=$n).c)!==null&&r!==void 0?r:t.c=new Map(function(o){for(var a=o.p;a!==null;){var s=a.c;if(s!==null)return s;a=a.p}return null}($n)||void 0)}var $j=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Mj={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},Aj=["touchstart","touchmove"];function Pj(e){return Aj.includes(e)}var xv=!1;function Zp(e){var t=Kn,r=er;qa(null),Ta(null);try{return e()}finally{qa(t),Ta(r)}}function Rj(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>Zp(r));var a=e.__on_r;e.__on_r=a?()=>{a(),o(!0)}:()=>o(!0),xv||(xv=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{if(!s.defaultPrevented)for(var i of s.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}var eh=new Set,yu=new Set;function th(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function a(s){if(o.capture||ji.call(t,s),!s.cancelBubble)return Zp(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?lc(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function se(e,t,r,o,a){var s={capture:o,passive:a},i=th(e,t,r,s);t!==document.body&&t!==window&&t!==document||Hp(()=>{t.removeEventListener(e,i,s)})}function ji(e){var t,r=this,o=r.ownerDocument,a=e.type,s=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=s[0]||e.target,l=0,c=e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(r===document||r===window))return void(e.__root=r);var d=s.indexOf(r);if(d===-1)return;u<=d&&(l=u)}if((i=s[l]||e.target)!==r){jj(e,"currentTarget",{configurable:!0,get:()=>i||o});var h=Kn,p=er;qa(null),Ta(null);try{for(var m,g=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var j=i["__"+a];if(j!==void 0&&(!i.disabled||e.target===i))if(Ki(j)){var[x,...S]=j;x.apply(i,[e,...S])}else j.call(i,e)}catch(y){m?g.push(y):m=y}if(e.cancelBubble||b===r||b===null)break;i=b}if(m){var O=function(y){queueMicrotask(()=>{throw y})};for(var C of g)O(C);throw m}}finally{e.__root=r,delete e.currentTarget,qa(h),Ta(p)}}}function pd(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ga(e,t){var r=er;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function F(e,t){var r,o=!!(1&t),a=!!(2&t),s=!e.startsWith("<!>");return()=>{r===void 0&&(r=pd(s?e:"<!>"+e),o||(r=oo(r)));var i=a||qp?document.importNode(r,!0):r.cloneNode(!0);return o?Ga(oo(i),i.lastChild):Ga(i,i),i}}function La(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",a=!e.startsWith("<!>"),s=!!(1&t),i="<".concat(o,">").concat(a?e:"<!>"+e,"</").concat(o,">");return()=>{if(!r){var l=oo(pd(i));if(s)for(r=document.createDocumentFragment();oo(l);)r.appendChild(oo(l));else r=oo(l)}var c=r.cloneNode(!0);return s?Ga(oo(c),c.lastChild):Ga(c,c),c}}function Lr(){var e=cc((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Ga(e,e),e}function Ft(){var e=document.createDocumentFragment(),t=document.createComment(""),r=cc();return e.append(t,r),Ga(t,r),e}function P(e,t){e!==null&&e.before(t)}function gt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function _j(e,t){return function(r,o){var{target:a,anchor:s,props:i={},events:l,context:c}=o;(function(){if(oa===void 0){oa=window,qp=/Firefox/.test(navigator.userAgent);var m=Element.prototype,g=Node.prototype;Tp=ra(g,"firstChild").get,Np=ra(g,"nextSibling").get,m.__click=void 0,m.__className=void 0,m.__attributes=null,m.__styles=null,m.__e=void 0,Text.prototype.__t=void 0}})();var u=new Set,d=m=>{for(var g=0;g<m.length;g++){var b=m[g];if(!u.has(b)){u.add(b);var j=Pj(b);a.addEventListener(b,ji,{passive:j});var x=ps.get(b);x===void 0?(document.addEventListener(b,ji,{passive:j}),ps.set(b,1)):ps.set(b,x+1)}}};d(mu(eh)),yu.add(d);var h=void 0,p=function(m){var g=Xs(64,m,!0);return function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(j=>{b.outro?Ds(g,()=>{la(g),j(void 0)}):(la(g),j(void 0))})}}(()=>{var m=s??a.appendChild(cc());return Na(()=>{c&&(lt({}),$n.c=c),l&&(i.$$events=l),h=r(m,i)||{},c&&ct()}),()=>{for(var g of u){a.removeEventListener(g,ji);var b=ps.get(g);--b==0?(document.removeEventListener(g,ji),ps.delete(g)):ps.set(g,b)}var j;yu.delete(d),m!==s&&((j=m.parentNode)===null||j===void 0||j.removeChild(m))}});return wu.set(h,p),h}(e,t)}var ps=new Map,wu=new WeakMap;function Y(e,t){var r=e,o=null,a=null,s=Wr,i=!1,l=function(u){i=!0,c(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],u)},c=(u,d)=>{s!==(s=u)&&(s?(o?Nl(o):d&&(o=Na(()=>d(r))),a&&Ds(a,()=>{a=null})):(a?Nl(a):d&&(a=Na(()=>d(r))),o&&Ds(o,()=>{o=null})))};Zs(()=>{i=!1,t(l),i||c(null,null)},arguments.length>2&&arguments[2]!==void 0&&arguments[2]?ic:0)}function nh(e,t,r){var o,a=e,s=Wr,i=ei()?kj:cd;Zs(()=>{i(s,s=t())&&(o&&Ds(o),o=Na(()=>r(a)))})}function mr(e,t){return t}function dr(e,t,r,o,a){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l={flags:t,items:new Map,first:null};!(4&t)||(i=e.appendChild(cc()));var c=null,u=!1,d=fe(()=>{var h=r();return Ki(h)?h:h==null?[]:mu(h)});Zs(()=>{var h=n(d),p=h.length;u&&p===0||(u=p===0,function(m,g,b,j,x,S,O){var C,y,$,_,T,z,ne=!!(8&x),Q=!!(3&x),B=m.length,G=g.items,pe=g.first,Z=pe,de=null,Me=[],ue=[];if(ne)for(z=0;z<B;z+=1){var ve;_=S($=m[z],z),(T=G.get(_))!==void 0&&((ve=T.a)===null||ve===void 0||ve.measure(),(y??(y=new Set)).add(T))}for(z=0;z<B;z+=1)if(_=S($=m[z],z),(T=G.get(_))!==void 0){var me;if(Q&&Ij(T,$,z,x),T.e.f&Ea&&(Nl(T.e),ne&&((me=T.a)===null||me===void 0||me.unfix(),(y??(y=new Set)).delete(T))),T!==Z){if(C!==void 0&&C.has(T)){if(Me.length<ue.length){var Ce,Ze=ue[0];de=Ze.prev;var re=Me[0],ie=Me[Me.length-1];for(Ce=0;Ce<Me.length;Ce+=1)yv(Me[Ce],Ze,b);for(Ce=0;Ce<ue.length;Ce+=1)C.delete(ue[Ce]);ga(g,re.prev,ie.next),ga(g,de,re),ga(g,ie,Ze),Z=Ze,de=ie,z-=1,Me=[],ue=[]}else C.delete(T),yv(T,Z,b),ga(g,T.prev,T.next),ga(g,T,de===null?g.first:de.next),ga(g,de,T),de=T;continue}for(Me=[],ue=[];Z!==null&&Z.k!==_;)Z.e.f&Ea||(C??(C=new Set)).add(Z),ue.push(Z),Z=Z.next;if(Z===null)continue;T=Z}Me.push(T),de=T,Z=T.next}else de=qj(Z?Z.e.nodes_start:b,g,de,de===null?g.first:de.next,$,_,z,j,x,O),G.set(_,de),Me=[],ue=[],Z=de.next;if(Z!==null||C!==void 0){for(var Ee=C===void 0?[]:mu(C);Z!==null;)Z.e.f&Ea||Ee.push(Z),Z=Z.next;var At=Ee.length;if(At>0){var te=4&x&&B===0?b:null;if(ne){for(z=0;z<At;z+=1){var q;(q=Ee[z].a)===null||q===void 0||q.measure()}for(z=0;z<At;z+=1){var ae;(ae=Ee[z].a)===null||ae===void 0||ae.fix()}}(function(I,je,Ke,W){for(var V=[],R=je.length,et=0;et<R;et++)fd(je[et].e,V,!0);var kt=R>0&&V.length===0&&Ke!==null;if(kt){var tt=Ke.parentNode;tt.textContent="",tt.append(Ke),W.clear(),ga(I,je[0].prev,je[R-1].next)}Qp(V,()=>{for(var Xe=0;Xe<R;Xe++){var De=je[Xe];kt||(W.delete(De.k),ga(I,De.prev,De.next)),la(De.e,!kt)}})})(g,Ee,te,G)}}ne&&lc(()=>{if(y!==void 0)for(T of y){var I;(I=T.a)===null||I===void 0||I.apply()}}),er.first=g.first&&g.first.e,er.last=de&&de.e}(h,l,i,a,t,o,r),s!==null&&(p===0?c?Nl(c):c=Na(()=>s(i)):c!==null&&Ds(c,()=>{c=null})),n(d))})}function Ij(e,t,r,o){1&o&&bu(e.v,t),2&o?bu(e.i,r):e.i=r}function qj(e,t,r,o,a,s,i,l,c,u){var d=1&c?16&c?Xr(a):dd(a):a,h=2&c?Xr(i):i,p={i:h,v:d,k:s,a:null,e:null,prev:r,next:o};try{return p.e=Na(()=>l(e,d,h,u),!1),p.e.prev=r&&r.e,p.e.next=o&&o.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),o!==null&&(o.prev=p,o.e.prev=p.e),p}finally{}}function yv(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==o;){var i=uc(s);a.before(s),s=i}}function ga(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function rh(e,t,r,o,a){var s,i=e,l="";Zs(()=>{var c;l!==(l=(c=t())!==null&&c!==void 0?c:"")&&(s!==void 0&&(la(s),s=void 0),l!==""&&(s=Na(()=>{var u=l+"";r&&(u="<svg>".concat(u,"</svg>"));var d=pd(u);if((r||o)&&(d=oo(d)),Ga(oo(d),d.lastChild),r||o)for(;oo(d);)i.before(oo(d));else i.before(d)})))})}function ur(e,t,r,o,a){var s,i=(s=t.$$slots)===null||s===void 0?void 0:s[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?a!==null&&a(e):i(e,l?()=>o:o)}function oh(e,t,r){var o,a,s=e;Zs(()=>{o!==(o=t())&&(a&&(Ds(a),a=null),o&&(a=Na(()=>r(s,o))))},ic)}function Br(e,t,r){Ar(()=>{var o=Lo(()=>t(e,r==null?void 0:r())||{});if(r&&o!=null&&o.update){var a=!1,s={};Gs(()=>{var i=r();E(i),a&&cd(s,i)&&(s=i,o.update(i))}),a=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function ah(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=ah(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Da(e){return typeof e=="object"?function(){for(var t,r,o=0,a="",s=arguments.length;o<s;o++)(t=arguments[o])&&(r=ah(t))&&(a&&(a+=" "),a+=r);return a}(e):e??""}var wv=[...` 	
\r\f \v\uFEFF`];function Ot(e,t,r,o,a,s){if(e.__className!==r){var i=function(u,d,h){var p=u==null?"":""+u;if(d&&(p=p?p+" "+d:d),h){for(var m in h)if(h[m])p=p?p+" "+m:m;else if(p.length)for(var g=m.length,b=0;(b=p.indexOf(m,b))>=0;){var j=b+g;b!==0&&!wv.includes(p[b-1])||j!==p.length&&!wv.includes(p[j])?b=j:p=(b===0?"":p.substring(0,b))+p.substring(j+1)}}return p===""?null:p}(r,o,s);i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i),e.__className=r}else if(s)for(var l in s){var c=!!s[l];a!=null&&c===!!a[l]||e.classList.toggle(l,c)}return s}var ys=Symbol("class");function Za(e,t){var r,o=(r=e.__attributes)!==null&&r!==void 0?r:e.__attributes={};o.value!==(o.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function vn(e,t,r,o){var a,s=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={};s[t]!==(s[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[mj]=r),r==null?e.removeAttribute(t):typeof r!="string"&&sh(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function yl(e,t,r,o){var a,s=arguments.length>4&&arguments[4]!==void 0&&arguments[4],i=arguments.length>5&&arguments[5]!==void 0&&arguments[5],l=t||{},c=e.tagName==="OPTION";for(var u in t)u in r||(r[u]=null);r.class?r.class=Da(r.class):(o||r[ys])&&(r.class=null);var d,h,p,m,g,b,j=sh(e),x=(a=e.__attributes)!==null&&a!==void 0?a:e.__attributes={},S=function(C){var y=r[C];if(c&&C==="value"&&y==null)return e.value=e.__value="",l[C]=y,0;if(C==="class")return d=e.namespaceURI==="http://www.w3.org/1999/xhtml",Ot(e,d,y,o,t==null?void 0:t[ys],r[ys]),l[C]=y,l[ys]=r[ys],0;if(y===(h=l[C])||(l[C]=y,(p=C[0]+C[1])==="$$"))return 0;if(p==="on"){var $={},_="$$"+C,T=C.slice(2);if(m=function(G){return $j.includes(G)}(T),function(G){return G.endsWith("capture")&&G!=="gotpointercapture"&&G!=="lostpointercapture"}(T)&&(T=T.slice(0,-7),$.capture=!0),!m&&h){if(y!=null)return 0;e.removeEventListener(T,l[_],$),l[_]=null}if(y!=null)if(m)e["__".concat(T)]=y,function(G){for(var pe=0;pe<G.length;pe++)eh.add(G[pe]);for(var Z of yu)Z(G)}([T]);else{let G=function(pe){l[C].call(this,pe)};l[_]=th(T,e,G,$)}else m&&(e["__".concat(T)]=void 0)}else if(C==="style"&&y!=null)e.style.cssText=y+"";else if(C==="autofocus")(function(G,pe){if(pe){var Z=document.body;G.autofocus=!0,lc(()=>{document.activeElement===Z&&G.focus()})}})(e,!!y);else if(i||C!=="__value"&&(C!=="value"||y==null))if(C==="selected"&&c)(function(G,pe){pe?G.hasAttribute("selected")||G.setAttribute("selected",""):G.removeAttribute("selected")})(e,y);else if(g=C,s||(g=function(G){var pe;return G=G.toLowerCase(),(pe=Mj[G])!==null&&pe!==void 0?pe:G}(g)),b=g==="defaultValue"||g==="defaultChecked",y!=null||i||b)b||j.includes(g)&&(i||typeof y!="string")?e[g]=y:typeof y!="function"&&vn(e,g,y);else if(x[C]=null,g==="value"||g==="checked"){var z=e,ne=t===void 0;if(g==="value"){var Q=z.defaultValue;z.removeAttribute(g),z.defaultValue=Q,z.value=z.__value=ne?Q:null}else{var B=z.defaultChecked;z.removeAttribute(g),z.defaultChecked=B,z.checked=!!ne&&B}}else e.removeAttribute(C);else e.value=e.__value=y;C==="style"&&"__styles"in e&&(e.__styles={})};for(var O in r)S(O);return l}var kv=new Map;function sh(e){var t,r=kv.get(e.nodeName);if(r)return r;kv.set(e.nodeName,r=[]);for(var o=e,a=Element.prototype;a!==o;){for(var s in t=Mp(o))t[s].set&&r.push(s);o=ld(o)}return r}function Ps(e,t,r,o){var a,s=(a=e.__styles)!==null&&a!==void 0?a:e.__styles={};s[t]!==r&&(s[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}function Dl(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=ei();Rj(e,"input",a=>{var s=a?e.defaultValue:e.value;if(s=Bc(e)?Lc(s):s,r(s),o&&s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Lo(t)==null&&e.value&&r(Bc(e)?Lc(e.value):e.value),Gs(()=>{var a=t();Bc(e)&&a===Lc(e.value)||(e.type!=="date"||a||e.value)&&a!==e.value&&(e.value=a??"")})}function Bc(e){var t=e.type;return t==="number"||t==="range"}function Lc(e){return e===""?null:+e}function yt(e,t,r){var o=ra(e,t);o&&o.set&&(e[t]=r,Hp(()=>{e[t]=null}))}function Cv(e,t){return e===t||(e==null?void 0:e[$a])===t}function Yn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Ar(()=>{var o,a;return Gs(()=>{o=a,a=[],Lo(()=>{e!==r(...a)&&(t(e,...a),o&&Cv(r(...o),e)&&t(null,...o))})}),()=>{lc(()=>{a&&Cv(r(...a),e)&&t(null,...a)})}}),e}function bo(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e==null?void 0:e.apply(this,r)}}function ba(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e==null?void 0:e.apply(this,r)}}function pt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=$n,r=t.l.u;if(r){var o,a=()=>E(t.s);if(e){var s=0,i={},l=Ai(()=>{var c=!1,u=t.s;for(var d in u)u[d]!==i[d]&&(i[d]=u[d],c=!0);return c&&s++,s});a=()=>n(l)}r.b.length&&(o=()=>{Sv(t,a),Rl(r.b)},Wp(),Gs(o)),xu(()=>{var c=Lo(()=>r.m.map(wj));return()=>{for(var u of c)typeof u=="function"&&u()}}),r.a.length&&xu(()=>{Sv(t,a),Rl(r.a)})}}function Sv(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function pc(e){var t=Xr(0);return function(){return arguments.length===1?(f(t,n(t)+1),arguments[0]):(n(t),e())}}function xi(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],a=Ki(o)?o.slice():o==null?[]:[o];for(var s of a)s.call(this,t)}function qr(e){$n===null&&Yi(),Js&&$n.l!==null?ih($n).m.push(e):xu(()=>{var t=Lo(e);if(typeof t=="function")return t})}function uo(e){$n===null&&Yi(),qr(()=>()=>Lo(e))}function Tj(){var e=$n;return e===null&&Yi(),(t,r,o)=>{var a,s=(a=e.s.$$events)===null||a===void 0?void 0:a[t];if(s){var i=Ki(s)?s.slice():[s],l=function(u,d){var{bubbles:h=!1,cancelable:p=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:h,cancelable:p})}(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function Nj(e){$n===null&&Yi(),$n.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),ih($n).b.push(e)}function ih(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}var il=!1,Dj={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,r)=>(t in e.special||(e.special[t]=v({get[t](){return e.props[t]}},t,4)),e.special[t](r),gv(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),gv(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function ll(e,t){return new Proxy({props:e,exclude:t,special:{},version:Xr(0)},Dj)}var Uj={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var a=e.props[o];fi(a)&&(a=a());var s=ra(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var a=ra(o,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===$a||t===$p)return!1;for(var r of e.props)if(fi(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)for(var o in fi(r)&&(r=r()),r)t.includes(o)||t.push(o);return t}};function Ma(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},Uj)}function v(e,t,r,o){var a,s,i,l=!!(1&r),c=!Js||!!(2&r),u=!!(8&r),d=!!(16&r),h=!1;u?[i,h]=function(T){var z=il;try{return il=!1,[T(),il]}finally{il=z}}(()=>e[t]):i=e[t];var p,m=$a in e||$p in e,g=u&&((a=(s=ra(e,t))===null||s===void 0?void 0:s.set)!==null&&a!==void 0?a:m&&t in e&&(T=>e[t]=T))||void 0,b=o,j=!0,x=!1,S=()=>(x=!0,j&&(j=!1,b=d?Lo(o):o),b);if(i===void 0&&o!==void 0&&(g&&c&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i=S(),g&&g(i)),c)p=()=>{var T=e[t];return T===void 0?S():(j=!0,x=!1,T)};else{var O=(l?Ai:fe)(()=>e[t]);O.f|=hj,p=()=>{var T=n(O);return T!==void 0&&(b=void 0),T===void 0?b:T}}if(!(4&r))return p;if(g){var C=e.$$legacy;return function(T,z){return arguments.length>0?(c&&z&&!C&&!h||g(z?p():T),T):p()}}var y=!1,$=dd(i),_=Ai(()=>{var T=p(),z=n($);return y?(y=!1,z):$.v=T});return l||(_.equals=ud),function(T,z){if(arguments.length>0){var ne=z?n(_):c&&u?xs(T):T;return _.equals(ne)||(y=!0,f($,ne),x&&b!==void 0&&(b=ne),Lo(()=>n(_))),T}return n(_)}}function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var a=function(s){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[s]}catch{}}("debug");return a!=null&&a.endsWith("*")?o.startsWith(a.slice(0,-1)):o===a}(e);if(!t)return Bj;var r=function(o){for(var a=0,s=0;s<o.length;s++)a=(a<<5)-a+o.charCodeAt(s),a|=0;return Ov[Math.abs(a)%Ov.length]}(e);return function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];console.log("%c".concat(e),"color:".concat(r),...a)}}function Bj(){}var Ov=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],Lj=0;function Ss(){return++Lj}function Pr(e){return parseInt(e,10)}function hd(e){return Fj.test(e)}var Fj=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function yn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function gr(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function Vj(e){return e===!0||e===!1}function ku(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return ku(Number(e));try{var t=e&&e.valueOf();if(t!==e)return ku(t)}catch{return!1}return!1}function lh(e){(cl=cl||window.document.createElement("div")).style.color="",cl.style.color=e;var t=cl.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var cl=void 0;function Wj(e){return typeof e=="string"&&e.length<99&&!!lh(e)}function gd(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(yn(e))return"object";var r=t.stringify(e);return r&&hd(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var Hj=/^https?:\/\/\S+$/;function hc(e){return typeof e=="string"&&Hj.test(e)}function ti(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(hd(r)?t.parse(r):e)}var Jj=[];function zv(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!yn(i)||t&&l.length>0)&&(r[Et(l)]=!0),yn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var a=Math.min(e.length,1e4),s=0;s<a;s++)o(e[s],Jj);return Object.keys(r).sort().map(Io)}function ch(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function uh(e,t){return e.length>t?e.slice(0,t):e}function Ev(e){return ge({},e)}function $v(e){return Object.values(e)}function Mv(e,t,r,o){var a=e.slice(0),s=a.splice(t,r);return a.splice.apply(a,[t+o,0,...s]),a}function Kj(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function Qi(e,t){try{return t.parse(e)}catch{return t.parse(qo(e))}}function dh(e,t){try{return Qi(e,t)}catch{return}}function gc(e,t){e=e.replace(fh,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function vh(e){e=e.replace(fh,"");try{return qo(e)}catch{}try{var t=qo("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=qo("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var fh=/,\s*$/;function Us(e,t){var r=Pv.exec(t);if(r){var o=Pr(r[2]),a=function(m,g){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,x=0,S=b;S<j;S++)m.charAt(S)===g&&x++;return x}(e,`
`,0,o),s=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:a,column:s,message:t.replace(Pv,()=>"line ".concat(a+1," column ").concat(s+1))}}var i=Gj.exec(t),l=i?Pr(i[1]):void 0,c=l!==void 0?l-1:void 0,u=Zj.exec(t),d=u?Pr(u[1]):void 0,h=d!==void 0?d-1:void 0,p=c!==void 0&&h!==void 0?function(m,g,b){for(var j=m.indexOf(`
`),x=1;x<g&&j!==-1;)j=m.indexOf(`
`,j+1),x++;return j!==-1?j+b+1:void 0}(e,c,h):void 0;return{position:p,line:c,column:h,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function Fc(e){return yn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Pi(e){return yn(e)&&typeof e.text=="string"}function Ri(e){return yn(e)&&e.json!==void 0}function Yj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Pi(e)?e:{text:r.stringify(e.json,null,t)}}function Av(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Ri(e)?e:{json:t.parse(e.text)}}function Su(e,t,r){return Yj(e,t,r).text}function Qj(e,t){return Xj(e,t)>t}function Xj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Pi(e))return e.text.length;var r=e.json,o=0;return function a(s){if(Array.isArray(s)){if((o+=s.length-1+2)>t)return;for(var i=0;i<s.length;i++)if(a(s[i]),o>t)return}else if(yn(s)){var l=Object.keys(s);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=s[u];o+=u.length+2,a(d)}}else o+=typeof s=="string"?s.length+2:String(s).length}(r),o}var Pv=/(position|char) (\d+)/,Gj=/line (\d+)/,Zj=/column (\d+)/;function e0(e,t){return e.parse===t.parse&&e.stringify===t.stringify}var yr,_n,wo,Co,So,go,Aa,t0=/[,:]\S/;function md(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?n0:r0:r?o0:a0}(function(e){e.text="text",e.tree="tree",e.table="table"})(yr||(yr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(_n||(_n={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(wo||(wo={})),function(e){e.info="info",e.warning="warning",e.error="error"}(Co||(Co={})),function(e){e.key="key",e.value="value"}(So||(So={})),function(e){e.asc="asc",e.desc="desc"}(go||(go={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(Aa||(Aa={}));var n0={escapeValue:e=>ph(mh(String(e))),unescapeValue:e=>bh(hh(e))},r0={escapeValue:e=>mh(String(e)),unescapeValue:e=>bh(e)},o0={escapeValue:e=>ph(String(e)),unescapeValue:e=>hh(e)},a0={escapeValue:e=>String(e),unescapeValue:e=>e};function ph(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function hh(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return gh[r]||r}catch{return t}})}var gh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},s0={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function mh(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>gh[t]||t)}function bh(e){return e.replace(/\\["bfnrt\\]/g,t=>s0[t]||t)}function mc(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function jh(e,t){return ni(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function Sa(e,t,r){return ni(e,o=>function(a,s,i){return typeof a.getAttribute=="function"&&a.getAttribute(s)===i}(o,t,r))}function ni(e,t){return!!bd(e,t)}function bd(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function Xi(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function jd(e){var t=Xi(e),r=t==null?void 0:t.document.activeElement;return!!r&&ni(r,o=>o===e)}function xh(e,t){return bd(e,r=>r.nodeName===t)}function Vc(e){return Sa(e,"data-type","selectable-key")?_n.key:Sa(e,"data-type","selectable-value")?_n.value:Sa(e,"data-type","insert-selection-area-inside")?_n.inside:Sa(e,"data-type","insert-selection-area-after")?_n.after:_n.multi}function Ou(e){return encodeURIComponent(Et(e))}function yh(e){var t,r=bd(e,a=>!(a==null||!a.hasAttribute)&&a.hasAttribute("data-path")),o=(t=r==null?void 0:r.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?Io(decodeURIComponent(o)):void 0}function i0(e){var{allElements:t,currentElement:r,direction:o,hasPrio:a=()=>!0,margin:s=10}=e,i=Sb(t.filter(function(x){var S=x.getBoundingClientRect();return S.width>0&&S.height>0}),c),l=c(r);function c(x){var S=x.getBoundingClientRect();return{x:S.left+S.width/2,y:S.top+S.height/2,rect:S,element:x}}function u(x,S){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,C=x.x-S.x,y=(x.y-S.y)*O;return Math.sqrt(C*C+y*y)}var d=x=>u(x,l);if(o==="Left"||o==="Right"){var h=o==="Left"?i.filter(x=>{return S=l,x.rect.left+s<S.rect.left;var S}):i.filter(x=>{return S=l,x.rect.right>S.rect.right+s;var S}),p=h.filter(x=>{return S=x,O=l,Math.abs(S.y-O.y)<s;var S,O}),m=ol(p,d)||ol(h,x=>u(x,l,10));return m==null?void 0:m.element}if(o==="Up"||o==="Down"){var g=o==="Up"?i.filter(x=>{return S=l,x.y+s<S.y;var S}):i.filter(x=>{return S=l,x.y>S.y+s;var S}),b=g.filter(x=>a(x.element)),j=ol(b,d)||ol(g,d);return j==null?void 0:j.element}}function xd(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];yd(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:xd)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in l0||r.push(o),r.join(t)}function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xd;return e.ctrlKey||e.metaKey&&t()}var l0={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function jt(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}jt(`.jse-absolute-popup.svelte-1r8q3m8 {
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
}`);var c0=F('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"> <!></div>'),u0=F('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');function d0(e,t){lt(t,!1);var r=v(t,"popup",8),o=v(t,"closeAbsolutePopup",8),a=M(),s=M();function i(h){r().options&&r().options.closeOnOuterClick&&!ni(h.target,p=>p===n(a))&&o()(r().id)}function l(h){ca(h)==="Escape"&&(h.preventDefault(),h.stopPropagation(),o()(r().id))}qr(function(){n(s)&&n(s).focus()}),pt();var c=u0();se("mousedown",oa,function(h){i(h)},!0),se("keydown",oa,l,!0),se("wheel",oa,function(h){i(h)},!0);var u=A(c),d=h=>{var p=c0(),m=A(p);Yn(m,g=>f(s,g),()=>n(s)),oh(N(m,2),()=>r().component,(g,b)=>{b(g,Ma(()=>r().props))}),we(g=>vn(p,"style",g),[()=>function(g,b){var j=g.getBoundingClientRect(),{left:x,top:S,positionAbove:O,positionLeft:C}=function(){if(b.anchor){var{anchor:y,width:$=0,height:_=0,offsetTop:T=0,offsetLeft:z=0,position:ne}=b,{left:Q,top:B,bottom:G,right:pe}=y.getBoundingClientRect(),Z=ne==="top"||B+_>window.innerHeight&&B>_,de=ne==="left"||Q+$>window.innerWidth&&Q>$;return{left:de?pe-z:Q+z,top:Z?B-T:G+T,positionAbove:Z,positionLeft:de}}if(typeof b.left=="number"&&typeof b.top=="number"){var{left:Me,top:ue,width:ve=0,height:me=0}=b;return{left:Me,top:ue,positionAbove:ue+me>window.innerHeight&&ue>me,positionLeft:Me+ve>window.innerWidth&&Me>ve}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(O?"bottom: ".concat(j.top-S,"px;"):"top: ".concat(S-j.top,"px;"))+(C?"right: ".concat(j.left-x,"px;"):"left: ".concat(x-j.left,"px;"))}(n(a),r().options)],fe),P(h,p)};Y(u,h=>{n(a)&&h(d)}),Yn(c,h=>f(a,h),()=>n(a)),se("mousedown",c,function(h){h.stopPropagation()}),se("keydown",c,l),P(e,c),ct()}var v0=F("<!> <!>",1);function zu(e,t){lt(t,!1);var r,o,a=Sr("jsoneditor:AbsolutePopup"),s=M([],!0);function i(u){var d=n(s).findIndex(p=>p.id===u);if(d!==-1){var h=n(s)[d];h.options.onClose&&h.options.onClose(),f(s,n(s).filter(p=>p.id!==u))}}r="absolute-popup",o={openAbsolutePopup:function(u,d,h){a("open...",d,h);var p={id:Ss(),component:u,props:d||{},options:h||{}};return f(s,[...n(s),p]),p.id},closeAbsolutePopup:i},Gp().set(r,o),U(()=>n(s),()=>{a("popups",n(s))}),ln(),pt(!0);var l=v0(),c=Ne(l);dr(c,1,()=>n(s),mr,(u,d)=>{d0(u,{get popup(){return n(d)},closeAbsolutePopup:i})}),ur(N(c,2),t,"default",{},null),P(e,l),ct()}function Gi(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),a=e,s=1;r.has(a);){var i="copy"+(s>1?" "+s:"");a="".concat(o," (").concat(i,")"),s++}return a}function _i(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function f0(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var p0={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:a}=t,s=[];r&&r.path&&r.relation&&r.value&&s.push(["filter",[(i=r.relation,zp("1 ".concat(i," 1"))[0]),ul(r.path),f0(r.value)]]);var i;return o&&o.path&&o.direction&&s.push(["sort",ul(o.path),o.direction==="desc"?"desc":"asc"]),a&&a.paths&&(a.paths.length>1?s.push(["pick",...a.paths.map(ul)]):s.push(["map",ul(a.paths[0])])),ej(["pipe",...s])},executeQuery:function(e,t){return t.trim()!==""?tj(e,t):e}};function ul(e){return["get",...e]}var h0=La("<g><!></g>");function g0(e,t){lt(t,!1);var r=870711,o=M(""),a=v(t,"data",8);function s(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,h)=>{var p="fa-".concat((r+=1).toString(16));return u[h]=p,' id="'.concat(p,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,h,p,m)=>{var g=h||m;return g&&u[g]?"#".concat(u[g]):d}),c}U(()=>E(a()),()=>{f(o,s(a()))}),ln();var i=h0();rh(A(i),()=>n(o),!0,!1),P(e,i),ct()}jt(`
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
`);var m0=La("<svg><!></svg>"),b0=La("<path></path>"),j0=La("<polygon></polygon>"),x0=La("<!><!><!>",1);function en(e,t){var r=ll(t,["children","$$slots","$$events","$$legacy"]),o=ll(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);lt(t,!1);var a=v(t,"class",8,""),s=v(t,"data",8),i=M(),l=v(t,"scale",8,1),c=v(t,"spin",8,!1),u=v(t,"inverse",8,!1),d=v(t,"pulse",8,!1),h=v(t,"flip",8,void 0),p=v(t,"label",8,""),m=v(t,"style",8,""),g=M(10),b=M(10),j=M(),x=M();function S(){var C=1;return l()!==void 0&&(C=Number(l())),isNaN(C)||C<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*C}function O(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}U(()=>(E(s()),E(m()),E(l())),()=>{f(i,function(C){var y;if(C){if(!("definition"in C)){if("iconName"in C&&"icon"in C){C.iconName;var[$,_,,,T]=C.icon;y={width:$,height:_,paths:(Array.isArray(T)?T:[T]).map(z=>({d:z}))}}else y=C[Object.keys(C)[0]];return y}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(s())),m(),l(),f(g,n(i)?n(i).width/O()*S():0),f(b,n(i)?n(i).height/O()*S():0),f(j,function(){var C="";m()!==null&&(C+=m());var y=S();return y===1?C.length===0?"":C:(C===""||C.endsWith(";")||(C+="; "),"".concat(C,"font-size: ").concat(y,"em"))}()),f(x,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(g)," ").concat(n(b)))}),ln(),pt(),function(C,y){var $,_=ll(y,["children","$$slots","$$events","$$legacy"]),T=ll(_,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),z=v(y,"class",8,""),ne=v(y,"width",8),Q=v(y,"height",8),B=v(y,"box",8,"0 0 0 0"),G=v(y,"spin",8,!1),pe=v(y,"inverse",8,!1),Z=v(y,"pulse",8,!1),de=v(y,"flip",8,"none"),Me=v(y,"style",8,""),ue=v(y,"label",8,""),ve=m0();ur(A(ve),y,"default",{},null),we(()=>{var me;return $=yl(ve,$,ge(ge({version:"1.1",class:"fa-icon ".concat((me=z())!==null&&me!==void 0?me:""),width:ne(),height:Q(),"aria-label":ue(),role:ue()?"img":"presentation",viewBox:B(),style:Me()},T),{},{[ys]:{"fa-spin":G(),"fa-pulse":Z(),"fa-inverse":pe(),"fa-flip-horizontal":de()==="horizontal","fa-flip-vertical":de()==="vertical"}}),"svelte-1mc5hvj",!0)}),P(C,ve)}(e,Ma({get label(){return p()},get width(){return n(g)},get height(){return n(b)},get box(){return n(x)},get style(){return n(j)},get spin(){return c()},get flip(){return h()},get inverse(){return u()},get pulse(){return d()},get class(){return a()}},()=>o,{children:(C,y)=>{var $=Ft();ur(Ne($),t,"default",{},_=>{var T=x0(),z=Ne(T);dr(z,1,()=>{var G;return((G=n(i))===null||G===void 0?void 0:G.paths)||[]},mr,(G,pe)=>{var Z,de=b0();we(()=>Z=yl(de,Z,ge({},n(pe)),void 0,!0)),P(G,de)});var ne=N(z);dr(ne,1,()=>{var G;return((G=n(i))===null||G===void 0?void 0:G.polygons)||[]},mr,(G,pe)=>{var Z,de=j0();we(()=>Z=yl(de,Z,ge({},n(pe)),void 0,!0)),P(G,de)});var Q=N(ne),B=G=>{g0(G,{get data(){return n(i)},set data(pe){f(i,pe)},$$legacy:!0})};Y(Q,G=>{var pe;(pe=n(i))!==null&&pe!==void 0&&pe.raw&&G(B)}),P(_,T)}),P(C,$)},$$slots:{default:!0}})),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var y0=F('<div role="checkbox" tabindex="-1"><!></div>');function w0(e,t){lt(t,!1);var r=v(t,"path",9),o=v(t,"value",9),a=v(t,"readOnly",9),s=v(t,"onPatch",9),i=v(t,"focus",9);pt(!0);var l,c=y0(),u=A(c),d=fe(()=>o()===!0?lp:cp);en(u,{get data(){return n(d)}}),we(()=>{vn(c,"aria-checked",o()===!0),l=Ot(c,1,"jse-boolean-toggle svelte-1ryp01u",null,l,{"jse-readonly":a()}),vn(c,"title",a()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),se("mousedown",c,function(h){h.stopPropagation(),a()||(s()([{op:"replace",path:Et(r()),value:!o()}]),i()())}),P(e,c),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var k0=F('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');function C0(e,t){lt(t,!1);var r=v(t,"color",8),o=v(t,"onChange",8),a=v(t,"showOnTop",8),s=M(),i=()=>{};qr(wt(function*(){var c,u=new((c=yield sm(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(s),color:r(),popup:a()?"top":"bottom",onDone(d){var h=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(h)}});u.show(),i=()=>{u.destroy()}})),uo(()=>{i()}),pt();var l=k0();Yn(l,c=>f(s,c),()=>n(s)),P(e,l),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var S0=F('<button type="button"></button>');function O0(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),{openAbsolutePopup:a}=Ba("absolute-popup"),s=v(t,"path",9),i=v(t,"value",9),l=v(t,"readOnly",9),c=v(t,"onPatch",9),u=v(t,"focus",9);function d(g){c()([{op:"replace",path:Et(s()),value:g}]),h()}function h(){u()()}U(()=>E(i()),()=>{f(r,lh(i()))}),U(()=>(E(l()),E(i())),()=>{f(o,l()?"Color ".concat(i()):"Click to open a color picker")}),ln(),pt(!0);var p,m=S0();we(()=>{var g;p=Ot(m,1,"jse-color-picker-button svelte-xeg9n6",null,p,{"jse-readonly":l()}),vn(m,"style","background: ".concat((g=n(r))!==null&&g!==void 0?g:"")),vn(m,"title",n(o)),vn(m,"aria-label",n(o))}),se("click",m,function(g){var b,j;if(!l()){var x=g.target,S=x.getBoundingClientRect().top,O=((b=(j=Xi(x))===null||j===void 0?void 0:j.innerHeight)!==null&&b!==void 0?b:0)-S<300&&S>300,C={color:i(),onChange:d,showOnTop:O};a(C0,C,{anchor:x,closeOnOuterClick:!0,onClose:h,offsetTop:18,offsetLeft:-8,height:300})}}),P(e,m),ct()}var Wc=1e3,Ii=100,Eu=2e4,Rs=[{start:0,end:Ii}],z0=1048576,Rv=10485760,Hc="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",wd="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",pi="hover-insert-inside",Jc="hover-insert-after",_v="hover-collection",Kc="valid",Iv="repairable",Go=336,Zo=260,yi=100,qv={[go.asc]:"ascending",[go.desc]:"descending"};function wh(e){for(var t=Tm(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var a=r.length-1,s=r[a],i=t[o];i.start<=s.end?r[a]={start:Math.min(s.start,i.start),end:Math.max(s.end,i.end)}:r.push(i)}return r}function $u(e){return Ul(e)+Ii}function Ul(e){return Math.floor(e/Ii)*Ii}function kh(e){return!!e&&(e.type==="space"||e.space===!0)}function wl(e){return!!e&&(e.type==="separator"||e.separator===!0)}function E0(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Ci(e){return!!e&&typeof e.onClick=="function"}function Yc(e){return!!e&&e.type==="dropdown-button"&&Ci(e.main)&&Array.isArray(e.items)}function $0(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function M0(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Tv(e){return yn(e)&&yn(e.parseError)}function A0(e){return yn(e)&&Array.isArray(e.validationErrors)}function P0(e){return yn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function R0(e){return yn(e)&&P0(e)&&typeof e.isChildError=="boolean"}function _0(e){return yn(e)&&typeof e.action=="function"&&yn(e.props)}function Oo(e){return e!==void 0&&e.type==="object"}function Ir(e){return e!==void 0&&e.type==="array"}function kd(e){return e!==void 0&&e.type==="value"}function es(e){return Oo(e)||Ir(e)}function Nv(e){return e!==void 0&&Array.isArray(e.searchResults)}function Bl(e){return!!e&&e.type==="tree"}function Dv(e){return!!e&&e.type==="text"}function Uv(e){return!!e&&e.type==="mode"}function Mu(e){var{json:t,expand:r}=e,o=function(a){var{json:s,factory:i}=a;return Array.isArray(s)?i.createArrayDocumentState():yn(s)?i.createObjectDocumentState():s!==void 0?i.createValueDocumentState():void 0}({json:t,factory:Od});return r&&o?mo(t,o,[],r):o}function Cd(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:Rs,items:[]}}function Sd(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Od={createObjectDocumentState:Sd,createArrayDocumentState:Cd,createValueDocumentState:function(){return{type:"value"}}};function Ch(e,t,r,o){var{createObjectDocumentState:a,createArrayDocumentState:s,createValueDocumentState:i}=o;return function l(c,u,d){if(Array.isArray(c)){var h=Ir(u)?u:s();if(d.length===0)return h;var p=Pr(d[0]),m=l(c[p],h.items[p],d.slice(1));return Qo(h,["items",d[0]],m)}if(yn(c)){var g=Oo(u)?u:a();if(d.length===0)return g;var b=d[0],j=l(c[b],g.properties[b],d.slice(1));return Qo(g,["properties",b],j)}return kd(u)?u:i()}(e,t,r)}function no(e,t){return qi(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Ir(o)?o:Cd({expanded:!!es(o)&&o.expanded}):yn(r)?Oo(o)?o:Sd({expanded:!!es(o)&&o.expanded}):kd(o)?o:void 0},()=>!0)}function qi(e,t,r,o,a){var s=o(e,t,r);if(Array.isArray(e)&&Ir(s)&&a(s)){var i=[];return zd(e,s.visibleSections,c=>{var u=r.concat(String(c)),d=qi(e[c],s.items[c],u,o,a);d!==void 0&&(i[c]=d)}),zv(i,s.items)?s:ge(ge({},s),{},{items:i})}if(yn(e)&&Oo(s)&&a(s)){var l={};return Object.keys(e).forEach(c=>{var u=r.concat(c),d=qi(e[c],s.properties[c],u,o,a);d!==void 0&&(l[c]=d)}),zv(Object.values(l),Object.values(s.properties))?s:ge(ge({},s),{},{properties:l})}return s}function zd(e,t,r){t.forEach(o=>{var{start:a,end:s}=o;ch(a,Math.min(e.length,s),r)})}function Ti(e,t){for(var r=e,o=[],a=0;a<t.length;){if(Array.isArray(r)){var s=t[a];o.push("items",s),r=r[Pr(s)]}else{if(!yn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));var i=t[a];o.push("properties",i),r=r[i]}a++}return o}function mo(e,t,r,o){for(var a=t,s=function(l){var c=r.slice(0,l);a=Bs(e,a,c,(u,d)=>{var h=es(d)&&!d.expanded?ge(ge({},d),{},{expanded:!0}):d;return Ir(h)?function(p,m){if(function(j,x){return j.some(S=>x>=S.start&&x<S.end)}(p.visibleSections,m))return p;var g=Ul(m),b={start:g,end:$u(g)};return ge(ge({},p),{},{visibleSections:wh(p.visibleSections.concat(b))})}(h,Pr(r[l])):h})},i=0;i<r.length;i++)s(i);return Bs(e,a,r,(l,c)=>function(u,d,h,p){return qi(u,d,h,(m,g,b)=>Array.isArray(m)&&p(b)?Ir(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Cd({expanded:!0}):yn(m)&&p(b)?Oo(g)?g.expanded?g:ge(ge({},g),{},{expanded:!0}):Sd({expanded:!0}):g,m=>es(m)&&m.expanded)}(l,c,[],o))}function Bv(e,t,r,o){return Bs(e,t,r,(a,s)=>o?function(i,l,c){return qi(i,l,c,(u,d)=>Lv(d),()=>!0)}(a,s,r):Lv(s))}function Lv(e){return Ir(e)&&e.expanded?ge(ge({},e),{},{expanded:!1,visibleSections:Rs}):Oo(e)&&e.expanded?ge(ge({},e),{},{expanded:!1}):e}function Sh(e,t,r){var o={json:e,documentState:t},a=r.reduce((s,i)=>({json:To(s.json,[i]),documentState:I0(s.json,s.documentState,i)}),o);return{json:a.json,documentState:no(a.json,a.documentState)}}function I0(e,t,r){if(mp(r))return Fv(e,t,r,void 0);if(gp(r))return Vv(e,t,r);if(od(r)){var o=na(e,r.path),a=aa(e,t,o);return a?bc(e,t,o,{type:"value",enforceString:a}):t}return hu(r)||As(r)?function(s,i,l){if(As(l)&&l.from===l.path)return i;var c=i,u=na(s,l.from),d=Ja(s,c,u);return As(l)&&(c=Vv(s,c,{path:l.from})),c=Fv(s,c,{path:l.path},d),c}(e,t,r):t}function Ja(e,t,r){try{return Je(t,Ti(e,r))}catch{return}}function Ed(e,t,r,o,a){var s=Ch(e,t,r,a);return wm(s,Ti(e,r),i=>{var l=Je(e,r);return o(l,i)})}function bc(e,t,r,o){return function(a,s,i,l,c){var u=Ch(a,s,i,c);return Qo(u,Ti(a,i),l)}(e,t,r,o,Od)}function Bs(e,t,r,o){return Ed(e,t,r,o,Od)}function Fv(e,t,r,o){var a=na(e,r.path),s=t;return s=Bs(e,s,on(a),(i,l)=>{if(!Ir(l))return l;var c=Pr(Ht(a)),{items:u,visibleSections:d}=l;return ge(ge({},l),{},{items:c<u.length?Kj(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:Oh(d,c,1)})}),bc(e,s,a,o)}function Vv(e,t,r){var o=na(e,r.path),a=on(o),s=Je(e,a);return Array.isArray(s)?Bs(e,t,a,(i,l)=>{if(!Ir(l))return l;var c=Pr(Ht(o)),{items:u,visibleSections:d}=l;return ge(ge({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:Oh(d,c,-1)})}):function(i,l,c){var u=Ti(i,c);return ka(l,u)?$m(l,Ti(i,c)):l}(e,t,o)}function Oh(e,t,r){return function(o){for(var a=o.slice(0),s=1;s<a.length;)a[s-1].end===a[s].start&&(a[s-1]={start:a[s-1].start,end:a[s].end},a.splice(s)),s++;return a}(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function aa(e,t,r){var o,a=Je(e,r),s=Ja(e,t,r),i=kd(s)?s.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=a)=="string"&&typeof ti(o,JSON)!="string"}function Zi(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function $d(e,t){var r=[];return function o(a,s,i){r.push(i),wr(a)&&Ir(s)&&s.expanded&&zd(a,s.visibleSections,l=>{o(a[l],s.items[l],i.concat(String(l)))}),$r(a)&&Oo(s)&&s.expanded&&Object.keys(a).forEach(l=>{o(a[l],s.properties[l],i.concat(l))})}(e,t,[]),r}function zh(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function a(s,i){o.push({path:i,type:wo.value});var l=Ja(e,t,i);if(s&&es(l)&&l.expanded){if(r&&o.push({path:i,type:wo.inside}),wr(s)){var c=Ir(l)?l.visibleSections:Rs;zd(s,c,u=>{var d=i.concat(String(u));a(s[u],d),r&&o.push({path:d,type:wo.after})})}$r(s)&&Object.keys(s).forEach(u=>{var d=i.concat(u);o.push({path:d,type:wo.key}),a(s[u],d),r&&o.push({path:d,type:wo.after})})}}(e,[]),o}function Qc(e,t,r){var o=$d(e,t),a=o.map(Et).indexOf(Et(r));if(a!==-1&&a<o.length-1)return o[a+1]}function ts(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return mo(e,t,r,Qj({json:Je(e,r)},o)?wi:Md)}function Xc(e,t,r){var o=Ja(e,t,r);return es(o)&&o.expanded?t:ts(e,t,r)}function wi(e){return e.length===0||e.length===1&&e[0]==="0"}function Wv(e){return e.length===0}function Md(){return!0}function kl(){return!1}function co(e){return e&&e.type===_n.after||!1}function _r(e){return e&&e.type===_n.inside||!1}function kr(e){return e&&e.type===_n.key||!1}function En(e){return e&&e.type===_n.value||!1}function Jn(e){return e&&e.type===_n.multi||!1}function jc(e){return Jn(e)&&Zt(e.focusPath,e.anchorPath)}function Ni(e){return Jn(e)||co(e)||_r(e)||kr(e)||En(e)}function Gc(e){return e&&e.type===_n.text||!1}function Pa(e,t){var r=[];return function(o,a,s){if(a){var i=Ka(a),l=Qe(a);if(Zt(i,l))return s(i);if(o!==void 0){var c=$h(i,l);if(i.length===c.length||l.length===c.length)return s(c);var u=Dr(i,l),d=ea(o,u),h=Ra(o,u),p=ia(o,u,d),m=ia(o,u,h);if(!(p===-1||m===-1)){var g=Je(o,c);if($r(g)){for(var b=Object.keys(g),j=p;j<=m;j++){var x=s(c.concat(b[j]));if(x!==void 0)return x}return}if(wr(g)){for(var S=p;S<=m;S++){var O=s(c.concat(String(S)));if(O!==void 0)return O}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{r.push(o)}),r}function Eh(e){return _r(e)?e.path:on(Qe(e))}function ea(e,t){if(!Jn(t))return t.path;var r=ia(e,t,t.anchorPath);return ia(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function Ra(e,t){if(!Jn(t))return t.path;var r=ia(e,t,t.anchorPath);return ia(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Hv(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var a=o?Qe(r):ea(e,r),s=function(c,u,d){var h=$d(c,u),p=h.map(Et),m=Et(d),g=p.indexOf(m);if(g!==-1&&g>0)return h[g-1]}(e,t,a);if(o)return _r(r)||co(r)?s!==void 0?Dr(a,a):void 0:s!==void 0?Dr(Ka(r),s):void 0;if(co(r)||_r(r))return Yt(a);if(kr(r)){if(s===void 0||s.length===0)return;var i=on(s),l=Je(e,i);return Array.isArray(l)||Rn(s)?Yt(s):da(s)}return En(r),s!==void 0?Yt(s):void 0}}function Jv(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var a=zh(e,t,o),s=a.findIndex(i=>Zt(i.path,Qe(r))&&String(i.type)===String(r.type));return{caret:s!==-1?a[s]:void 0,previous:s!==-1&&s>0?a[s-1]:void 0,next:s!==-1&&s<a.length-1?a[s+1]:void 0}}function hs(e,t){for(var r=$d(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var a=r[o];return a===void 0||a.length===0||Array.isArray(Je(e,on(a)))?Yt(a):da(a)}function Ls(e,t){if(t.length===1){var r=ta(t);if(r.op==="replace")return Yt(na(e,r.path))}if(!Rn(t)&&t.every(i=>i.op==="move")){var o=ta(t),a=t.slice(1);if((hu(o)||As(o))&&o.from!==o.path&&a.every(i=>(hu(i)||As(i))&&i.from===i.path))return da(na(e,o.path))}var s=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>na(e,i.path));if(!Rn(s))return{type:_n.multi,anchorPath:ta(s),focusPath:Ht(s)}}function $h(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Ll(e){return kr(e)||En(e)||jc(e)}function Kv(e,t){return Ll(t)&&gr(Je(e,Qe(t)))?Qe(t):on(Qe(t))}function ua(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function _o(e){if(Jr(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function da(e){return{type:_n.key,path:e}}function Ad(e,t){return{type:_n.key,path:e,edit:!0,initialValue:t}}function Yt(e){return{type:_n.value,path:e}}function Fl(e,t){return{type:_n.value,path:e,edit:!0,initialValue:t}}function va(e){return{type:_n.inside,path:e}}function sa(e){return{type:_n.after,path:e}}function Dr(e,t){var r=$h(e,t),o=e.length>r.length&&t.length>r.length;return{type:_n.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function Mh(e,t,r,o){if(kr(t))return String(Ht(t.path));if(En(t)){var a=Je(e,t.path);return typeof a=="string"?a:o.stringify(a,null,r)}if(Jn(t)){if(Rn(t.focusPath))return o.stringify(e,null,r);var s=Eh(t),i=Je(e,s);if(Array.isArray(i)){if(jc(t)){var l=Je(e,t.focusPath);return o.stringify(l,null,r)}return Pa(e,t).map(c=>{var u=Je(e,c);return"".concat(o.stringify(u,null,r),",")}).join(`
`)}return Pa(e,t).map(c=>{var u=Ht(c),d=Je(e,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,r),",")}).join(`
`)}}function Jr(e){return(kr(e)||En(e))&&e.edit===!0}function Os(e){return kr(e)||En(e)||Jn(e)}function dl(e){return kr(e)||En(e)||jc(e)}function Au(e){switch(e.type){case wo.key:return da(e.path);case wo.value:return Yt(e.path);case wo.after:return sa(e.path);case wo.inside:return va(e.path)}}function Yv(e,t){switch(e){case _n.key:return da(t);case _n.value:return Yt(t);case _n.after:return sa(t);case _n.inside:return va(t);case _n.multi:case _n.text:return Dr(t,t)}}function Qv(e,t,r){if(t)return Di(e,t,r)||ua(Jn(t)?on(t.focusPath):t.path,r)?t:void 0}function Di(e,t,r){if(e===void 0||!t)return!1;if(kr(t)||_r(t)||co(t))return Zt(t.path,r);if(En(t))return ua(r,t.path);if(Jn(t)){var o=ea(e,t),a=Ra(e,t),s=on(t.focusPath);if(!ua(r,s)||r.length<=s.length)return!1;var i=ia(e,t,o),l=ia(e,t,a),c=ia(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function ia(e,t,r){var o=on(t.focusPath);if(!ua(r,o)||r.length<=o.length)return-1;var a=r[o.length],s=Je(e,o);if($r(s))return Object.keys(s).indexOf(a);if(wr(s)){var i=Pr(a);if(i<s.length)return i}return-1}function Qe(e){return Jn(e)?e.focusPath:e.path}function Ka(e){return Jn(e)?e.anchorPath:e.path}function ri(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var a of r)if(typeof a=="string"&&e.push(a),a&&typeof a=="object")for(var s in a)Object.hasOwnProperty.call(a,s)&&a[s]&&e.push(s);return e.join(" ")}function Ah(e,t,r){return ri("jse-value","jse-"+gd(e,r),{"jse-url":hc(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===yr.table})}jt(`/* over all fonts, sizes, and colors */
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
}`);var q0=F('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function Ph(e,t){lt(t,!1);var r=Sr("jsoneditor:EditableDiv"),o=v(t,"value",9),a=v(t,"initialValue",9),s=v(t,"shortText",9,!1),i=v(t,"label",9),l=v(t,"onChange",9),c=v(t,"onCancel",9),u=v(t,"onFind",9),d=v(t,"onPaste",9,xr),h=v(t,"onValueClass",9,()=>""),p=M(void 0,!0),m=M(void 0,!0),g=!1;function b(){return n(p)?function(S){return S.replace(/\n$/,"")}(n(p).innerText):""}function j(S){n(p)&&ro(p,n(p).innerText=mc(S))}qr(()=>{r("onMount",{value:o(),initialValue:a()}),j(a()!==void 0?a():o()),n(p)&&function(S){if(S.firstChild!=null){var O=document.createRange(),C=window.getSelection();O.setStart(S,1),O.collapse(!0),C==null||C.removeAllRanges(),C==null||C.addRange(O)}else S.focus()}(n(p))}),uo(()=>{var S=b();r("onDestroy",{closed:g,value:o(),newValue:S}),g||S===o()||l()(S,Aa.no)}),U(()=>(E(h()),E(o())),()=>{f(m,h()(o()))}),ln(),pt(!0);var x=q0();Yn(x,S=>f(p,S),()=>n(p)),we(S=>{vn(x,"aria-label",i()),Ot(x,1,Da(S),"svelte-f9kmxj")},[()=>ri("jse-editable-div",n(m),{"jse-short-text":s()})],fe),se("input",x,function(){var S=b();S===""&&j(""),f(m,h()(S))}),se("keydown",x,function(S){S.stopPropagation();var O=ca(S);if(O==="Escape"&&(S.preventDefault(),g=!0,c()()),O==="Enter"||O==="Tab"){S.preventDefault(),g=!0;var C=b();l()(C,Aa.nextInside)}O==="Ctrl+F"&&(S.preventDefault(),u()(!1)),O==="Ctrl+H"&&(S.preventDefault(),u()(!0))}),se("paste",x,function(S){if(S.stopPropagation(),d()&&S.clipboardData){var O=S.clipboardData.getData("text/plain");d()(O)}}),se("blur",x,function(){var S=document.hasFocus(),O=b();r("handleBlur",{hasFocus:S,closed:g,value:o(),newValue:O}),document.hasFocus()&&!g&&(g=!0,O!==o()&&l()(O,Aa.self))}),P(e,x),ct()}function T0(e,t){lt(t,!1);var r=v(t,"path",9),o=v(t,"value",9),a=v(t,"selection",9),s=v(t,"mode",9),i=v(t,"parser",9),l=v(t,"normalization",9),c=v(t,"enforceString",9),u=v(t,"onPatch",9),d=v(t,"onPasteJson",9),h=v(t,"onSelect",9),p=v(t,"onFind",9),m=v(t,"focus",9),g=v(t,"findNextInside",9);function b(O){return c()?O:ti(O,i())}function j(){h()(Yt(r())),m()()}pt(!0);var x=fe(()=>l().escapeValue(o())),S=fe(()=>Jr(a())?a().initialValue:void 0);Ph(e,{get value(){return n(x)},get initialValue(){return n(S)},label:"Edit value",onChange:function(O,C){u()([{op:"replace",path:Et(r()),value:b(l().unescapeValue(O))}],(y,$,_)=>{if(!_||Zt(r(),Qe(_)))return{state:$,selection:C===Aa.nextInside?g()(r()):Yt(r())}}),m()()},onCancel:j,onPaste:function(O){try{var C=i().parse(O);gr(C)&&d()({path:r(),contents:C,onPasteAsJson:()=>{j();var y=[{op:"replace",path:Et(r()),value:C}];u()(y,($,_)=>({state:ts($,_,r())}))}})}catch{}},get onFind(){return p()},onValueClass:function(O){return Ah(b(l().unescapeValue(O)),s(),i())}}),ct()}function zs(e,t,r){var o=on(t),a=Je(e,o);if(wr(a)){var s=Pr(Ht(t));return r.map((u,d)=>({op:"add",path:Et(o.concat(String(s+d))),value:u.value}))}if($r(a)){var i=Ht(t),l=Object.keys(a),c=i!==void 0?Zi(l,i,!0):[];return[...r.map(u=>{var d=Gi(u.key,l);return{op:"add",path:Et(o.concat(d)),value:u.value}}),...c.map(u=>ns(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Pu(e,t,r){var o=Je(e,t);if(Array.isArray(o)){var a=o.length;return r.map((s,i)=>({op:"add",path:Et(t.concat(String(a+i))),value:s.value}))}return r.map(s=>{var i=Gi(s.key,Object.keys(o));return{op:"add",path:Et(t.concat(i)),value:s.value}})}function el(e,t,r,o){var a=Gi(o,t.filter(i=>i!==r)),s=Zi(t,r,!1);return[{op:"move",from:Et(e.concat(r)),path:Et(e.concat(a))},...s.map(i=>ns(e,i))]}function Rh(e,t){var r=Ht(t);if(Rn(r))throw new Error("Cannot duplicate root object");var o=on(r),a=Ht(r),s=Je(e,o);if(wr(s)){var i=Ht(t),l=i?Pr(Ht(i))+1:0;return[...t.map((d,h)=>({op:"copy",from:Et(d),path:Et(o.concat(String(h+l)))}))]}if($r(s)){var c=Object.keys(s),u=a!==void 0?Zi(c,a,!1):[];return[...t.map(d=>{var h=Gi(Ht(d),c);return{op:"copy",from:Et(d),path:Et(o.concat(h))}}),...u.map(d=>ns(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function _h(e,t,r,o){if(kr(t)){var a=dh(r,o),s=on(t.path),i=Je(e,s);return el(s,Object.keys(i),Ht(t.path),typeof a=="string"?a:r)}if(En(t)||Jn(t)&&Rn(t.focusPath))try{return[{op:"replace",path:Et(Qe(t)),value:gc(r,$=>Qi($,o))}]}catch{return[{op:"replace",path:Et(Qe(t)),value:r}]}if(Jn(t)){var l=Zc(r,o);return function($,_,T){var z=ta(_),ne=on(z),Q=Je($,ne);if(wr(Q)){var B=ta(_),G=B?Pr(Ht(B)):0;return[...Vl(_),...T.map((Ce,Ze)=>({op:"add",path:Et(ne.concat(String(Ze+G))),value:Ce.value}))]}if($r(Q)){var pe=Ht(_),Z=on(pe),de=Ht(pe),Me=Object.keys(Q),ue=de!==void 0?Zi(Me,de,!1):[],ve=new Set(_.map(Ce=>Ht(Ce))),me=Me.filter(Ce=>!ve.has(Ce));return[...Vl(_),...T.map(Ce=>{var Ze=Gi(Ce.key,me);return{op:"add",path:Et(Z.concat(Ze)),value:Ce.value}}),...ue.map(Ce=>ns(Z,Ce))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,Pa(e,t),l)}if(co(t)){var c=Zc(r,o),u=t.path,d=on(u),h=Je(e,d);if(wr(h)){var p=Pr(Ht(u));return zs(e,d.concat(String(p+1)),c)}if($r(h)){var m=String(Ht(u)),g=Object.keys(h);if(Rn(g)||Ht(g)===m)return Pu(e,d,c);var b=g.indexOf(m),j=g[b+1];return zs(e,d.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(_r(t)){var x=Zc(r,o),S=t.path,O=Je(e,S);if(wr(O))return zs(e,S.concat("0"),x);if($r(O)){var C=Object.keys(O);if(Rn(C))return Pu(e,S,x);var y=ta(C);return zs(e,S.concat(y),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Vl(e){return e.map(t=>({op:"remove",path:Et(t)})).reverse()}function ns(e,t){return{op:"move",from:Et(e.concat(t)),path:Et(e.concat(t))}}function Zc(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),a=dh(e,t),s=a!==void 0?a:gc(e,i=>Qi(i,t));return r&&yn(s)||o&&Array.isArray(s)?[{key:"New item",value:s}]:Array.isArray(s)?s.map((i,l)=>({key:"New item "+l,value:i})):yn(s)?Object.keys(s).map(i=>({key:i,value:s[i]})):[{key:"New item",value:s}]}function Ih(e,t){if(kr(t)){var r=on(t.path),o=Je(e,r),a=el(r,Object.keys(o),Ht(t.path),"");return{operations:a,newSelection:Ls(e,a)}}if(En(t))return{operations:[{op:"replace",path:Et(t.path),value:""}],newSelection:t};if(Jn(t)){var s=Pa(e,t),i=Vl(s),l=Ht(s);if(Rn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Yt([])};var c=on(l),u=Je(e,c);if(wr(u)){var d=ta(s),h=Pr(Ht(d));return{operations:i,newSelection:h===0?va(c):sa(c.concat(String(h-1)))}}if($r(u)){var p=Object.keys(u),m=ta(s),g=Ht(m),b=p.indexOf(g),j=p[b-1];return{operations:i,newSelection:b===0?va(c):sa(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function qh(e,t){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zt;return r.filter((a,s)=>{for(var i=s+1;i<r.length;i++)if(o(a,r[i]))return!1;return!0})}(hp(e,t,{before:(r,o,a)=>{if(gp(o)){var s=Io(o.path);return{revertOperations:[...a,...eu(r,s)]}}if(As(o)){var i=Io(o.from);return{revertOperations:o.from===o.path?[o,...eu(r,i)]:[...a,...eu(r,i)]}}return{document:r}}}))}function eu(e,t){var r=on(t),o=Ht(t),a=Je(e,r);return $r(a)?Zi(Object.keys(a),o,!1).map(s=>ns(r,s)):[]}function Xv(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((a,s)=>ge(ge({},a),{},{active:s===t}));return ge(ge({},e),{},{items:o,activeItem:r,activeIndex:t})}function Gv(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.toLowerCase(),s=(r=o==null?void 0:o.maxResults)!==null&&r!==void 0?r:1/0,i=o==null?void 0:o.columns,l=[],c=[];function u(j){l.length>=s||l.push(j)}function d(j,x){if(wr(x)){var S=c.length;c.push("0");for(var O=0;O<x.length;O++)if(c[S]=String(O),d(j,x[O]),l.length>=s)return;c.pop()}else if($r(x)){var C=Object.keys(x),y=c.length;for(var $ of(c.push(""),C))if(c[y]=$,Zv($,j,c,So.key,u),d(j,x[$]),l.length>=s)return;c.pop()}else Zv(String(x),j,c,So.value,u)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var h=0;h<t.length;h++){c[0]=String(h);for(var p=t[h],m=0;m<i.length;m++){var g=i[m];if(g.length===1)c[1]=g[0];else for(var b=0;b<g.length;b++)c[b+1]=g[b];for(;c.length>g.length+1;)c.pop();d(a,Je(p,g))}if(l.length>=s)break}return l}return d(a,t),l}function Zv(e,t,r,o,a){var s=e.toLowerCase(),i=0,l=-1,c=-1;do(c=s.indexOf(t,l))!==-1&&(l=c+t.length,a({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Ru(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function ef(e,t,r){var o=e;return _m(r,a=>{o=Ru(o,t,a.start,a.end)}),o}function N0(e,t,r,o,a){var{field:s,path:i,start:l,end:c}=o;if(s===So.key){var u=on(i),d=Je(e,u),h=Ht(i),p=el(u,Object.keys(d),h,Ru(h,r,l,c));return{newSelection:Ls(e,p),operations:p}}if(s===So.value){var m=Je(e,i);if(m===void 0)throw new Error("Cannot replace: path not found ".concat(Et(i)));var g=typeof m=="string"?m:String(m),b=aa(e,t,i),j=Ru(g,r,l,c),x=[{op:"replace",path:Et(i),value:b?j:ti(j,a)}];return{newSelection:Ls(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(s))}function tf(e){return e.path.concat(e.field,String(e.fieldIndex))}var D0={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Th(e,t){return t.reduce((r,o)=>function(a,s,i,l){return Ed(a,s,i,l,D0)}(e,r,o.path,(a,s)=>ge(ge({},s),{},{searchResults:s.searchResults?s.searchResults.concat(o):[o]})),void 0)}function _u(e){var t,r=(t=e==null?void 0:e.searchResults)!==null&&t!==void 0?t:[],o=Oo(e)?Object.values(e.properties).flatMap(_u):Ir(e)?e.items.flatMap(_u):[];return r.concat(o)}jt(`/* over all fonts, sizes, and colors */
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
}`);var U0=F("<span> </span>");function Nh(e,t){lt(t,!1);var r=M(),o=v(t,"text",8),a=v(t,"searchResultItems",8);U(()=>(E(o()),E(a())),()=>{f(r,function(i,l){var c=[],u=0;for(var d of l){var h=i.slice(u,d.start);h!==""&&c.push({type:"normal",text:h,active:!1});var p=i.slice(d.start,d.end);c.push({type:"highlight",text:p,active:d.active}),u=d.end}var m=Ht(l);return m&&m.end<i.length&&c.push({type:"normal",text:i.slice(m.end),active:!1}),c}(String(o()),a()))}),ln(),pt();var s=Ft();dr(Ne(s),1,()=>n(r),mr,(i,l)=>{var c=Ft(),u=Ne(c),d=p=>{var m=Lr();we(()=>gt(m,n(l).text)),P(p,m)},h=p=>{var m,g=U0(),b=A(g);we(j=>{m=Ot(g,1,"jse-highlight svelte-5fb7bl",null,m,{"jse-active":n(l).active}),gt(b,j)},[()=>mc(n(l).text)],fe),P(p,g)};Y(u,p=>{n(l).type==="normal"?p(d):p(h,!1)}),P(i,c)}),P(e,s),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var B0=F('<div role="button" tabindex="-1" data-type="selectable-value"><!></div>');function L0(e,t){lt(t,!1);var r=M(void 0,!0),o=v(t,"path",9),a=v(t,"value",9),s=v(t,"mode",9),i=v(t,"readOnly",9),l=v(t,"normalization",9),c=v(t,"parser",9),u=v(t,"onSelect",9),d=v(t,"searchResultItems",9);U(()=>E(a()),()=>{f(r,hc(a()))}),ln(),pt(!0);var h=B0(),p=A(h),m=b=>{var j=fe(()=>l().escapeValue(a()));Nh(b,{get text(){return n(j)},get searchResultItems(){return d()}})},g=b=>{var j=Lr();we(x=>gt(j,x),[()=>mc(l().escapeValue(a()))],fe),P(b,j)};Y(p,b=>{d()?b(m):b(g,!1)}),we(b=>{Ot(h,1,Da(b),"svelte-c0g9qz"),vn(h,"title",n(r)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>Ah(a(),s(),c())],fe),se("click",h,function(b){typeof a()=="string"&&n(r)&&yd(b)&&(b.preventDefault(),b.stopPropagation(),window.open(a(),"_blank"))}),se("dblclick",h,function(b){i()||(b.preventDefault(),u()(Fl(o())))}),P(e,h),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var F0=F('<div class="jse-tooltip svelte-14y3y8t"> </div>');function V0(e,t){var r=v(t,"text",8),o=F0(),a=A(o);we(()=>gt(a,r())),P(e,o)}function Fs(e,t){var r,{text:o,openAbsolutePopup:a,closeAbsolutePopup:s}=t;function i(){r=a(V0,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){s(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}jt(`/* over all fonts, sizes, and colors */
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
}`);var W0=F('<div class="jse-timestamp svelte-1jla5ec"><!></div>');function H0(e,t){lt(t,!1);var r=M(void 0,!0),o=Ba("absolute-popup"),a=v(t,"value",9);U(()=>E(a()),()=>{f(r,"Time: ".concat(new Date(a()).toString()))}),ln(),pt(!0);var s=W0();en(A(s),{data:gm}),Br(s,(i,l)=>Fs==null?void 0:Fs(i,l),()=>ge({text:n(r)},o)),P(e,s),ct()}function J0(e){var t=[];return!e.isEditing&&Vj(e.value)&&t.push({component:w0,props:e}),!e.isEditing&&Wj(e.value)&&t.push({component:O0,props:e}),e.isEditing&&t.push({component:T0,props:e}),e.isEditing||t.push({component:L0,props:e}),!e.isEditing&&ku(e.value)&&t.push({component:H0,props:e}),t}function ko(e){return e.map((t,r)=>Y0.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(r>0?".":"")+t).join("")}function K0(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(s=>s==='"',!0)),a('"')):t.push(o(s=>s==="]")),a("]")):t.push(o(s=>s==="."||s==="["));function o(s){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!s(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function a(s){if(e[r]!==s)throw new SyntaxError("Invalid JSON path: ".concat(s," expected at position ").concat(r));r++}return t}function ya(e){return{value:e,label:Rn(e)?"(item root)":ko(e)}}var Y0=/^\d+$/,Q0={},X0={showWizard:!0,showOriginal:!0},Wl=Math.min,Ya=Math.max,Hl=Math.round,vl=Math.floor,Uo=e=>({x:e,y:e}),G0={left:"right",right:"left",bottom:"top",top:"bottom"},Z0={start:"end",end:"start"};function nf(e,t,r){return Ya(e,Wl(t,r))}function xc(e,t){return typeof e=="function"?e(t):e}function Qa(e){return e.split("-")[0]}function Jl(e){return e.split("-")[1]}function Dh(e){return e==="x"?"y":"x"}function Uh(e){return e==="y"?"height":"width"}function Vs(e){return["top","bottom"].includes(Qa(e))?"y":"x"}function Bh(e){return Dh(Vs(e))}function tu(e){return e.replace(/start|end/g,t=>Z0[t])}function fl(e){return e.replace(/left|right|bottom|top/g,t=>G0[t])}function ex(e){return typeof e!="number"?function(t){return ge({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Kl(e){var{x:t,y:r,width:o,height:a}=e;return{width:o,height:a,top:r,left:t,right:t+o,bottom:r+a,x:t,y:r}}function rf(e,t,r){var o,{reference:a,floating:s}=e,i=Vs(t),l=Bh(t),c=Uh(l),u=Qa(t),d=i==="y",h=a.x+a.width/2-s.width/2,p=a.y+a.height/2-s.height/2,m=a[c]/2-s[c]/2;switch(u){case"top":o={x:h,y:a.y-s.height};break;case"bottom":o={x:h,y:a.y+a.height};break;case"right":o={x:a.x+a.width,y:p};break;case"left":o={x:a.x-s.width,y:p};break;default:o={x:a.x,y:a.y}}switch(Jl(t)){case"start":o[l]-=m*(r&&d?-1:1);break;case"end":o[l]+=m*(r&&d?-1:1)}return o}var tx=function(){var e=wt(function*(t,r,o){for(var{placement:a="bottom",strategy:s="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(r),d=yield l.getElementRects({reference:t,floating:r,strategy:s}),{x:h,y:p}=rf(d,a,u),m=a,g={},b=0,j=0;j<c.length;j++){var{name:x,fn:S}=c[j],{x:O,y:C,data:y,reset:$}=yield S({x:h,y:p,initialPlacement:a,placement:m,strategy:s,middlewareData:g,rects:d,platform:l,elements:{reference:t,floating:r}});h=O??h,p=C??p,g=ge(ge({},g),{},{[x]:ge(ge({},g[x]),y)}),$&&b<=50&&(b++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(d=$.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:s}):$.rects),{x:h,y:p}=rf(d,m,u)),j=-1)}return{x:h,y:p,placement:m,strategy:s,middlewareData:g}});return function(t,r,o){return e.apply(this,arguments)}}();function Lh(e,t){return Iu.apply(this,arguments)}function Iu(){return Iu=wt(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:a,platform:s,rects:i,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=xc(t,e),g=ex(m),b=l[p?h==="floating"?"reference":"floating":h],j=Kl(yield s.getClippingRect({element:(r=yield s.isElement==null?void 0:s.isElement(b))==null||r?b:b.contextElement||(yield s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),x=h==="floating"?{x:o,y:a,width:i.floating.width,height:i.floating.height}:i.reference,S=yield s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating),O=(yield s.isElement==null?void 0:s.isElement(S))&&(yield s.getScale==null?void 0:s.getScale(S))||{x:1,y:1},C=Kl(s.convertOffsetParentRelativeRectToViewportRelativeRect?yield s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:S,strategy:c}):x);return{top:(j.top-C.top+g.top)/O.y,bottom:(C.bottom-j.bottom+g.bottom)/O.y,left:(j.left-C.left+g.left)/O.x,right:(C.right-j.right+g.right)/O.x}}),Iu.apply(this,arguments)}function qu(){return qu=wt(function*(e,t){var{placement:r,platform:o,elements:a}=e,s=yield o.isRTL==null?void 0:o.isRTL(a.floating),i=Qa(r),l=Jl(r),c=Vs(r)==="y",u=["left","top"].includes(i)?-1:1,d=s&&c?-1:1,h=xc(t,e),{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?-1*g:g),c?{x:m*d,y:p*u}:{x:p*u,y:m*d}}),qu.apply(this,arguments)}function yc(){return typeof window<"u"}function Ws(e){return Fh(e)?(e.nodeName||"").toLowerCase():"#document"}function ao(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bo(e){var t;return(t=(Fh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fh(e){return!!yc()&&(e instanceof Node||e instanceof ao(e).Node)}function zo(e){return!!yc()&&(e instanceof Element||e instanceof ao(e).Element)}function Fo(e){return!!yc()&&(e instanceof HTMLElement||e instanceof ao(e).HTMLElement)}function of(e){return!(!yc()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof ao(e).ShadowRoot)}function Ui(e){var{overflow:t,overflowX:r,overflowY:o,display:a}=Eo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(a)}function nx(e){return["table","td","th"].includes(Ws(e))}function Yl(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Tu(e){var t=Pd(),r=zo(e)?Eo(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Pd(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function _s(e){return["html","body","#document"].includes(Ws(e))}function Eo(e){return ao(e).getComputedStyle(e)}function wc(e){return zo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Oa(e){if(Ws(e)==="html")return e;var t=e.assignedSlot||e.parentNode||of(e)&&e.host||Bo(e);return of(t)?t.host:t}function Vh(e){var t=Oa(e);return _s(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fo(t)&&Ui(t)?t:Vh(t)}function Bi(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var a=Vh(e),s=a===((o=e.ownerDocument)==null?void 0:o.body),i=ao(a);if(s){var l=Nu(i);return t.concat(i,i.visualViewport||[],Ui(a)?a:[],l&&r?Bi(l):[])}return t.concat(a,Bi(a,[],r))}function Nu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wh(e){var t=Eo(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,a=Fo(e),s=a?e.offsetWidth:r,i=a?e.offsetHeight:o,l=Hl(r)!==s||Hl(o)!==i;return l&&(r=s,o=i),{width:r,height:o,$:l}}function Rd(e){return zo(e)?e:e.contextElement}function Is(e){var t=Rd(e);if(!Fo(t))return Uo(1);var r=t.getBoundingClientRect(),{width:o,height:a,$:s}=Wh(t),i=(s?Hl(r.width):r.width)/o,l=(s?Hl(r.height):r.height)/a;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var rx=Uo(0);function Hh(e){var t=ao(e);return Pd()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rx}function rs(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),s=Rd(e),i=Uo(1);t&&(o?zo(o)&&(i=Is(o)):i=Is(e));var l=function(y,$,_){return $===void 0&&($=!1),!(!_||$&&_!==ao(y))&&$}(s,r,o)?Hh(s):Uo(0),c=(a.left+l.x)/i.x,u=(a.top+l.y)/i.y,d=a.width/i.x,h=a.height/i.y;if(s)for(var p=ao(s),m=o&&zo(o)?ao(o):o,g=p,b=Nu(g);b&&o&&m!==g;){var j=Is(b),x=b.getBoundingClientRect(),S=Eo(b),O=x.left+(b.clientLeft+parseFloat(S.paddingLeft))*j.x,C=x.top+(b.clientTop+parseFloat(S.paddingTop))*j.y;c*=j.x,u*=j.y,d*=j.x,h*=j.y,c+=O,u+=C,b=Nu(g=ao(b))}return Kl({width:d,height:h,x:c,y:u})}function _d(e,t){var r=wc(e).scrollLeft;return t?t.left+r:rs(Bo(e)).left+r}function Jh(e,t,r){r===void 0&&(r=!1);var o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:_d(e,o)),y:o.top+t.scrollTop}}function af(e,t,r){var o;if(t==="viewport")o=function(s,i){var l=ao(s),c=Bo(s),u=l.visualViewport,d=c.clientWidth,h=c.clientHeight,p=0,m=0;if(u){d=u.width,h=u.height;var g=Pd();(!g||g&&i==="fixed")&&(p=u.offsetLeft,m=u.offsetTop)}return{width:d,height:h,x:p,y:m}}(e,r);else if(t==="document")o=function(s){var i=Bo(s),l=wc(s),c=s.ownerDocument.body,u=Ya(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),d=Ya(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),h=-l.scrollLeft+_d(s),p=-l.scrollTop;return Eo(c).direction==="rtl"&&(h+=Ya(i.clientWidth,c.clientWidth)-u),{width:u,height:d,x:h,y:p}}(Bo(e));else if(zo(t))o=function(s,i){var l=rs(s,!0,i==="fixed"),c=l.top+s.clientTop,u=l.left+s.clientLeft,d=Fo(s)?Is(s):Uo(1);return{width:s.clientWidth*d.x,height:s.clientHeight*d.y,x:u*d.x,y:c*d.y}}(t,r);else{var a=Hh(e);o={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Kl(o)}function Kh(e,t){var r=Oa(e);return!(r===t||!zo(r)||_s(r))&&(Eo(r).position==="fixed"||Kh(r,t))}function ox(e,t,r){var o=Fo(t),a=Bo(t),s=r==="fixed",i=rs(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=Uo(0);if(o||!o&&!s)if((Ws(t)!=="body"||Ui(a))&&(l=wc(t)),o){var u=rs(t,!0,s,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else a&&(c.x=_d(a));var d=!a||o||s?Uo(0):Jh(a,l);return{x:i.left+l.scrollLeft-c.x-d.x,y:i.top+l.scrollTop-c.y-d.y,width:i.width,height:i.height}}function nu(e){return Eo(e).position==="static"}function sf(e,t){if(!Fo(e)||Eo(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return Bo(e)===r&&(r=r.ownerDocument.body),r}function lf(e,t){var r=ao(e);if(Yl(e))return r;if(!Fo(e)){for(var o=Oa(e);o&&!_s(o);){if(zo(o)&&!nu(o))return o;o=Oa(o)}return r}for(var a=sf(e,t);a&&nx(a)&&nu(a);)a=sf(a,t);return a&&_s(a)&&nu(a)&&!Tu(a)?r:a||function(s){for(var i=Oa(s);Fo(i)&&!_s(i);){if(Tu(i))return i;if(Yl(i))return null;i=Oa(i)}return null}(e)||r}var ax={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:a}=e,s=a==="fixed",i=Bo(o),l=!!t&&Yl(t.floating);if(o===i||l&&s)return r;var c={scrollLeft:0,scrollTop:0},u=Uo(1),d=Uo(0),h=Fo(o);if((h||!h&&!s)&&((Ws(o)!=="body"||Ui(i))&&(c=wc(o)),Fo(o))){var p=rs(o);u=Is(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}var m=!i||h||s?Uo(0):Jh(i,c,!0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+d.x+m.x,y:r.y*u.y-c.scrollTop*u.y+d.y+m.y}},getDocumentElement:Bo,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:a}=e,s=[...r==="clippingAncestors"?Yl(t)?[]:function(c,u){var d=u.get(c);if(d)return d;for(var h=Bi(c,[],!1).filter(x=>zo(x)&&Ws(x)!=="body"),p=null,m=Eo(c).position==="fixed",g=m?Oa(c):c;zo(g)&&!_s(g);){var b=Eo(g),j=Tu(g);j||b.position!=="fixed"||(p=null),(m?!j&&!p:!j&&b.position==="static"&&p&&["absolute","fixed"].includes(p.position)||Ui(g)&&!j&&Kh(c,g))?h=h.filter(x=>x!==g):p=b,g=Oa(g)}return u.set(c,h),h}(t,this._c):[].concat(r),o],i=s[0],l=s.reduce((c,u)=>{var d=af(t,u,a);return c.top=Ya(d.top,c.top),c.right=Wl(d.right,c.right),c.bottom=Wl(d.bottom,c.bottom),c.left=Ya(d.left,c.left),c},af(t,i,a));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:lf,getElementRects:function(){var e=wt(function*(t){var r=this.getOffsetParent||lf,o=this.getDimensions,a=yield o(t.floating);return{reference:ox(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=Wh(e);return{width:t,height:r}},getScale:Is,isElement:zo,isRTL:function(e){return Eo(e).direction==="rtl"}};function cf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function sx(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Rd(e),d=a||s?[...u?Bi(u):[],...Bi(t)]:[];d.forEach(j=>{a&&j.addEventListener("scroll",r,{passive:!0}),s&&j.addEventListener("resize",r)});var h,p=u&&l?function(j,x){var S,O=null,C=Bo(j);function y(){var $;clearTimeout(S),($=O)==null||$.disconnect(),O=null}return function $(_,T){_===void 0&&(_=!1),T===void 0&&(T=1),y();var z=j.getBoundingClientRect(),{left:ne,top:Q,width:B,height:G}=z;if(_||x(),B&&G){var pe={rootMargin:-vl(Q)+"px "+-vl(C.clientWidth-(ne+B))+"px "+-vl(C.clientHeight-(Q+G))+"px "+-vl(ne)+"px",threshold:Ya(0,Wl(1,T))||1},Z=!0;try{O=new IntersectionObserver(de,ge(ge({},pe),{},{root:C.ownerDocument}))}catch{O=new IntersectionObserver(de,pe)}O.observe(j)}function de(Me){var ue=Me[0].intersectionRatio;if(ue!==T){if(!Z)return $();ue?$(!1,ue):S=setTimeout(()=>{$(!1,1e-7)},1e3)}ue!==1||cf(z,j.getBoundingClientRect())||$(),Z=!1}}(!0),y}(u,r):null,m=-1,g=null;i&&(g=new ResizeObserver(j=>{var[x]=j;x&&x.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var S;(S=g)==null||S.observe(t)})),r()}),u&&!c&&g.observe(u),g.observe(t));var b=c?rs(e):null;return c&&function j(){var x=rs(e);b&&!cf(b,x)&&r(),b=x,h=requestAnimationFrame(j)}(),r(),()=>{var j;d.forEach(x=>{a&&x.removeEventListener("scroll",r),s&&x.removeEventListener("resize",r)}),p==null||p(),(j=g)==null||j.disconnect(),g=null,c&&cancelAnimationFrame(h)}}var ix=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>wt(function*(){var r,o,{x:a,y:s,placement:i,middlewareData:l}=t,c=yield function(u,d){return qu.apply(this,arguments)}(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:a+c.x,y:s+c.y,data:ge(ge({},c),{},{placement:i})}})()}},lx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>wt(function*(){var{x:r,y:o,placement:a}=t,s=xc(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:O=>{var{x:C,y}=O;return{x:C,y}}}}=s,u=Ep(s,vj),d={x:r,y:o},h=yield Lh(t,u),p=Vs(Qa(a)),m=Dh(p),g=d[m],b=d[p];if(i){var j=m==="y"?"bottom":"right";g=nf(g+h[m==="y"?"top":"left"],g,g-h[j])}if(l){var x=p==="y"?"bottom":"right";b=nf(b+h[p==="y"?"top":"left"],b,b-h[x])}var S=c.fn(ge(ge({},t),{},{[m]:g,[p]:b}));return ge(ge({},S),{},{data:{x:S.x-r,y:S.y-o,enabled:{[m]:i,[p]:l}}})})()}},cx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>wt(function*(){var r,o,{placement:a,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:u}=t,d=xc(e,t),{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:j=!0}=d,x=Ep(d,dj);if((r=s.arrow)!=null&&r.alignmentOffset)return{};var S=Qa(a),O=Vs(l),C=Qa(l)===l,y=yield c.isRTL==null?void 0:c.isRTL(u.floating),$=m||(C||!j?[fl(l)]:function(me){var Ce=fl(me);return[tu(me),Ce,tu(Ce)]}(l)),_=b!=="none";!m&&_&&$.push(...function(me,Ce,Ze,re){var ie=Jl(me),Ee=function(At,te,q){var ae=["left","right"],I=["right","left"];switch(At){case"top":case"bottom":return q?te?I:ae:te?ae:I;case"left":case"right":return te?["top","bottom"]:["bottom","top"];default:return[]}}(Qa(me),Ze==="start",re);return ie&&(Ee=Ee.map(At=>At+"-"+ie),Ce&&(Ee=Ee.concat(Ee.map(tu)))),Ee}(l,j,b,y));var T=[l,...$],z=yield Lh(t,x),ne=[],Q=((o=s.flip)==null?void 0:o.overflows)||[];if(h&&ne.push(z[S]),p){var B=function(me,Ce,Ze){Ze===void 0&&(Ze=!1);var re=Jl(me),ie=Bh(me),Ee=Uh(ie),At=ie==="x"?re===(Ze?"end":"start")?"right":"left":re==="start"?"bottom":"top";return Ce.reference[Ee]>Ce.floating[Ee]&&(At=fl(At)),[At,fl(At)]}(a,i,y);ne.push(z[B[0]],z[B[1]])}if(Q=[...Q,{placement:a,overflows:ne}],!ne.every(me=>me<=0)){var G,pe,Z=(((G=s.flip)==null?void 0:G.index)||0)+1,de=T[Z];if(de)return{data:{index:Z,overflows:Q},reset:{placement:de}};var Me=(pe=Q.filter(me=>me.overflows[0]<=0).sort((me,Ce)=>me.overflows[1]-Ce.overflows[1])[0])==null?void 0:pe.placement;if(!Me)switch(g){case"bestFit":var ue,ve=(ue=Q.filter(me=>{if(_){var Ce=Vs(me.placement);return Ce===O||Ce==="y"}return!0}).map(me=>[me.placement,me.overflows.filter(Ce=>Ce>0).reduce((Ce,Ze)=>Ce+Ze,0)]).sort((me,Ce)=>me[1]-Ce[1])[0])==null?void 0:ue[0];ve&&(Me=ve);break;case"initialPlacement":Me=l}if(a!==Me)return{reset:{placement:Me}}}return{}})()}};function ux(e){var t,r,o={autoUpdate:!0},a=e,s=c=>ge(ge(ge({},o),e||{}),c||{}),i=c=>{t&&r&&(a=s(c),((u,d,h)=>{var p=new Map,m=ge({platform:ax},h),g=ge(ge({},m.platform),{},{_c:p});return tx(u,d,ge(ge({},m),{},{platform:g}))})(t,r,a).then(u=>{var d;Object.assign(r.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=a)===null||d===void 0)&&d.onComputed&&a.onComputed(u)}))},l=c=>{uo(c.subscribe(u=>{t===void 0?(t=u,i()):(Object.assign(t,u),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,u)=>{var d;r=c,a=s(u),setTimeout(()=>i(u),0),i(u);var h=()=>{d&&(d(),d=void 0)},p=function(){var{autoUpdate:m}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a||{};h(),m!==!1&&function(){return Vp.apply(this,arguments)}().then(()=>sx(t,r,()=>i(a),m===!0?{}:m))};return d=p(),{update(m){i(m),d=p(m)},destroy(){h()}}},i]}function dx(e){var{loadOptions:t,filterText:r,items:o,multiple:a,value:s,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:h,label:p}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var m=o.filter(g=>{var b=u(g[p],r,g);return b&&a&&s!=null&&s.length&&(b=!s.some(j=>!!c&&j[i]===g[i])),b});return l&&(m=h(m)),m}function vx(e){return Yh.apply(this,arguments)}function Yh(){return(Yh=wt(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:a}=e,s=yield r(a).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(s&&!s.cancelled)return s?(s&&s.length>0&&typeof s[0]!="object"&&(s=o(s)),t("loaded",{items:s})):s=[],{filteredItems:s,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}jt(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var fx=La(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);jt(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var px=La(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function ru(e){P(e,px())}jt(`
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
`);var hx=La('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');jt(`
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
`);var gx=F('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div><!></div></div>'),mx=F('<div class="empty svelte-82qwg8">No options</div>'),bx=F('<div role="none"><!> <!> <!></div>'),jx=F('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>',1),xx=F('<div class="multi-item-clear svelte-82qwg8"><!></div>'),yx=F('<div role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>'),wx=F("<div><!></div>"),kx=F('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>'),Cx=F('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>'),Sx=F('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>'),Ox=F('<input type="hidden" class="svelte-82qwg8">'),zx=F('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>'),Ex=F('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');function Wa(e,t){var r=function(D){var X={};for(var ke in D.children&&(X.default=!0),D.$$slots)X[ke]=!0;return X}(t);lt(t,!1);var o,a=M(),s=M(),i=M(),l=M(),c=M(),u=M(),d=M(),h=M(),p=M(),m=Tj(),g=v(t,"justValue",12,null),b=v(t,"filter",8,dx),j=v(t,"getItems",8,vx),x=v(t,"id",8,null),S=v(t,"name",8,null),O=v(t,"container",12,void 0),C=v(t,"input",12,void 0),y=v(t,"multiple",8,!1),$=v(t,"multiFullItemClearable",8,!1),_=v(t,"disabled",8,!1),T=v(t,"focused",12,!1),z=v(t,"value",12,null),ne=v(t,"filterText",12,""),Q=v(t,"placeholder",8,"Please select"),B=v(t,"placeholderAlwaysShow",8,!1),G=v(t,"items",12,null),pe=v(t,"label",8,"label"),Z=v(t,"itemFilter",8,(D,X,ke)=>"".concat(D).toLowerCase().includes(X.toLowerCase())),de=v(t,"groupBy",8,void 0),Me=v(t,"groupFilter",8,D=>D),ue=v(t,"groupHeaderSelectable",8,!1),ve=v(t,"itemId",8,"value"),me=v(t,"loadOptions",8,void 0),Ce=v(t,"containerStyles",8,""),Ze=v(t,"hasError",8,!1),re=v(t,"filterSelectedItems",8,!0),ie=v(t,"required",8,!1),Ee=v(t,"closeListOnChange",8,!0),At=v(t,"clearFilterTextOnBlur",8,!0),te=v(t,"createGroupHeaderItem",8,(D,X)=>({value:D,[pe()]:D})),q=()=>n(d),ae=v(t,"searchable",8,!0),I=v(t,"inputStyles",8,""),je=v(t,"clearable",8,!0),Ke=v(t,"loading",12,!1),W=v(t,"listOpen",12,!1),V=v(t,"debounce",8,function(D){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(D,X)}),R=v(t,"debounceWait",8,300),et=v(t,"hideEmptyState",8,!1),kt=v(t,"inputAttributes",24,()=>({})),tt=v(t,"listAutoWidth",8,!0),Xe=v(t,"showChevron",8,!1),De=v(t,"listOffset",8,5),Ie=v(t,"hoverItemIndex",12,0),xt=v(t,"floatingConfig",24,()=>({})),It=v(t,"class",8,""),Be=M(),be=M(),Ue=M(),ut=M(),ze=M();function mt(D){return D.map((X,ke)=>({index:ke,value:X,label:"".concat(X)}))}function nt(D){var X=[],ke={};D.forEach(rn=>{var Kt=de()(rn);X.includes(Kt)||(X.push(Kt),ke[Kt]=[],Kt&&ke[Kt].push(Object.assign(te()(Kt,rn),{id:Kt,groupHeader:!0,selectable:ue()}))),ke[Kt].push(Object.assign({groupItem:!!Kt},rn))});var $t=[];return Me()(X).forEach(rn=>{ke[rn]&&$t.push(...ke[rn])}),$t}function Le(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,X=arguments.length>1?arguments[1]:void 0;Ie(D<0?0:D),!X&&de()&&n(d)[Ie()]&&!n(d)[Ie()].selectable&&zn(1)}function H(){var D=!0;if(z()){var X=[],ke=[];z().forEach($t=>{X.includes($t[ve()])?D=!1:(X.push($t[ve()]),ke.push($t))}),D||z(ke)}return D}function _e(D){var X=D?D[ve()]:z()[ve()];return G().find(ke=>ke[ve()]===X)}function He(D){return Tt.apply(this,arguments)}function Tt(){return(Tt=wt(function*(D){var X=z()[D];z().length===1?z(void 0):z(z().filter(ke=>ke!==X)),m("clear",X)})).apply(this,arguments)}function an(D){if(T())switch(D.stopPropagation(),D.key){case"Escape":D.preventDefault(),Bt();break;case"Enter":if(D.preventDefault(),W()){if(n(d).length===0)break;var X=n(d)[Ie()];if(z()&&!y()&&z()[ve()]===X[ve()]){Bt();break}Qt(n(d)[Ie()])}break;case"ArrowDown":D.preventDefault(),W()?zn(1):(W(!0),f(Be,void 0));break;case"ArrowUp":D.preventDefault(),W()?zn(-1):(W(!0),f(Be,void 0));break;case"Tab":if(W()&&T()){if(n(d).length===0||z()&&z()[ve()]===n(d)[Ie()][ve()])return Bt();D.preventDefault(),Qt(n(d)[Ie()]),Bt()}break;case"Backspace":if(!y()||ne().length>0)return;if(y()&&z()&&z().length>0){if(He(n(Be)!==void 0?n(Be):z().length-1),n(Be)===0||n(Be)===void 0)break;f(Be,z().length>n(Be)?n(Be)-1:void 0)}break;case"ArrowLeft":if(!z()||!y()||ne().length>0)return;n(Be)===void 0?f(Be,z().length-1):z().length>n(Be)&&n(Be)!==0&&f(Be,n(Be)-1);break;case"ArrowRight":if(!z()||!y()||ne().length>0||n(Be)===void 0)return;n(Be)===z().length-1?f(Be,void 0):n(Be)<z().length-1&&f(Be,n(Be)+1)}}function Ye(D){var X,ke;T()&&C()===((X=document)===null||X===void 0?void 0:X.activeElement)||(D&&m("focus",D),(ke=C())===null||ke===void 0||ke.focus(),T(!0))}function Vt(D){return Mn.apply(this,arguments)}function Mn(){return(Mn=wt(function*(D){var X;dt||(W()||T())&&(m("blur",D),Bt(),T(!1),f(Be,void 0),(X=C())===null||X===void 0||X.blur())})).apply(this,arguments)}function On(){if(!_())return ne().length>0?W(!0):void W(!W())}function Jt(){m("clear",z()),z(void 0),Bt(),Ye()}function Bt(){At()&&ne(""),W(!1)}Nj(wt(function*(){f(be,z()),f(Ue,ne()),f(ut,y())})),qr(()=>{W()&&T(!0),T()&&C()&&C().focus()});var fn=v(t,"ariaValues",8,D=>"Option ".concat(D,", selected.")),sr=v(t,"ariaListOpen",8,(D,X)=>"You are currently focused on option ".concat(D,". There are ").concat(X," results available.")),Dn=v(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),cn,Fe=M(null);function pn(){clearTimeout(cn),cn=setTimeout(()=>{dt=!1},100)}uo(()=>{var D;(D=n(Fe))===null||D===void 0||D.remove()});var dt=!1;function Qt(D){D&&D.selectable!==!1&&function(X){if(X){ne("");var ke=Object.assign({},X);if(ke.groupHeader&&!ke.selectable)return;z(y()?z()?z().concat([ke]):[ke]:z(ke)),setTimeout(()=>{Ee()&&Bt(),f(Be,void 0),m("change",z()),m("select",X)})}}(D)}function bn(D){dt||Ie(D)}function zn(D){if(n(d).filter(ke=>!Object.hasOwn(ke,"selectable")||ke.selectable===!0).length===0)return Ie(0);D>0&&Ie()===n(d).length-1?Ie(0):D<0&&Ie()===0?Ie(n(d).length-1):Ie(Ie()+D);var X=n(d)[Ie()];X&&X.selectable===!1&&(D!==1&&D!==-1||zn(D))}function wn(D,X,ke){if(!y())return X&&X[ke]===D[ke]}var In=Or,Qn=Or;function Or(D){return{update(X){X.scroll&&(pn(),D.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var tr=M({strategy:"absolute",placement:"bottom-start",middleware:[ix(De()),cx(),lx()],autoUpdate:!1}),[pr,br,vr]=ux(n(tr)),Wn=M(!0);U(()=>(E(G()),E(z())),()=>{G(),z()&&function(){if(typeof z()=="string"){var D=(G()||[]).find(X=>X[ve()]===z());z(D||{[ve()]:z(),label:z()})}else y()&&Array.isArray(z())&&z().length>0&&z(z().map(X=>typeof X=="string"?{value:X,label:X}:X))}()}),U(()=>(E(kt()),E(ae())),()=>{!kt()&&ae()||(f(ze,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},kt())),x()&&ro(ze,n(ze).id=x()),ae()||ro(ze,n(ze).readonly=!0))}),U(()=>E(y()),()=>{y()&&z()&&(Array.isArray(z())?z([...z()]):z([z()]))}),U(()=>(n(ut),E(y())),()=>{n(ut)&&!y()&&z()&&z(null)}),U(()=>(E(y()),E(z())),()=>{y()&&z()&&z().length>1&&H()}),U(()=>E(z()),()=>{z()&&(y()?JSON.stringify(z())!==JSON.stringify(n(be))&&H()&&m("input",z()):n(be)&&JSON.stringify(z()[ve()])===JSON.stringify(n(be)[ve()])||m("input",z()))}),U(()=>(E(z()),E(y()),n(be)),()=>{!z()&&y()&&n(be)&&m("input",z())}),U(()=>(E(T()),E(C())),()=>{!T()&&C()&&Bt()}),U(()=>(E(ne()),n(Ue)),()=>{ne()!==n(Ue)&&(me()||ne().length!==0)&&(me()?V()(wt(function*(){Ke(!0);var D=yield j()({dispatch:m,loadOptions:me(),convertStringItemsToObjects:mt,filterText:ne()});D?(Ke(D.loading),W(W()?D.listOpen:ne().length>0),T(W()&&D.focused),G(de()?nt(D.filteredItems):D.filteredItems)):(Ke(!1),T(!0),W(!0))}),R()):(W(!0),y()&&f(Be,void 0)))}),U(()=>(E(b()),E(me()),E(ne()),E(G()),E(y()),E(z()),E(ve()),E(de()),E(pe()),E(re()),E(Z())),()=>{f(d,b()({loadOptions:me(),filterText:ne(),items:G(),multiple:y(),value:z(),itemId:ve(),groupBy:de(),label:pe(),filterSelectedItems:re(),itemFilter:Z(),convertStringItemsToObjects:mt,filterGroupedItems:nt}))}),U(()=>(E(y()),E(W()),E(z()),n(d)),()=>{!y()&&W()&&z()&&n(d)&&Le(n(d).findIndex(D=>D[ve()]===z()[ve()]),!0)}),U(()=>(E(W()),E(y())),()=>{W()&&y()&&Ie(0)}),U(()=>E(ne()),()=>{ne()&&Ie(0)}),U(()=>E(Ie()),()=>{var D;D=Ie(),m("hoverItem",D)}),U(()=>(E(y()),E(z())),()=>{f(a,y()?z()&&z().length>0:z())}),U(()=>(n(a),E(ne())),()=>{f(s,n(a)&&ne().length>0)}),U(()=>(n(a),E(je()),E(_()),E(Ke())),()=>{f(i,n(a)&&je()&&!_()&&!Ke())}),U(()=>(E(B()),E(y()),E(Q()),E(z())),()=>{var D;f(l,B()&&y()||y()&&((D=z())===null||D===void 0?void 0:D.length)===0?Q():z()?"":Q())}),U(()=>(E(z()),E(y())),()=>{var D,X;f(c,z()?(D=y(),X=void 0,X=D&&z().length>0?z().map(ke=>ke[pe()]).join(", "):z()[pe()],fn()(X)):"")}),U(()=>(n(d),E(Ie()),E(T()),E(W())),()=>{f(u,function(){if(!n(d)||n(d).length===0)return"";var D=n(d)[Ie()];if(W()&&D){var X=n(d)?n(d).length:0;return sr()(D[pe()],X)}return Dn()()}((n(d),Ie(),T(),W())))}),U(()=>E(G()),()=>{(function(D){D&&D.length!==0&&!D.some(X=>typeof X!="object")&&z()&&(y()?!z().some(X=>!X||!X[ve()]):z()[ve()])&&(Array.isArray(z())?z(z().map(X=>_e(X)||X)):z(_e()||z()))})(G())}),U(()=>(E(y()),E(z()),E(ve())),()=>{g((y(),z(),ve(),y()?z()?z().map(D=>D[ve()]):null:z()?z()[ve()]:z()))}),U(()=>(E(y()),n(be),E(z())),()=>{y()||!n(be)||z()||m("input",z())}),U(()=>(E(W()),n(d),E(y()),E(z())),()=>{W()&&n(d)&&!y()&&!z()&&Le()}),U(()=>n(d),()=>{(function(D){W()&&m("filter",D)})(n(d))}),U(()=>(E(O()),E(xt()),n(tr)),()=>{O()&&xt()&&vr(Object.assign(n(tr),xt()))}),U(()=>n(Fe),()=>{f(h,!!n(Fe))}),U(()=>(n(Fe),E(W())),()=>{(function(D,X){if(!D||!X)return f(Wn,!0);setTimeout(()=>{f(Wn,!1)},0)})(n(Fe),W())}),U(()=>(E(W()),E(O()),n(Fe)),()=>{W()&&O()&&n(Fe)&&function(){var{width:D}=O().getBoundingClientRect();ro(Fe,n(Fe).style.width=tt()?D+"px":"auto")}()}),U(()=>E(Ie()),()=>{f(p,Ie())}),U(()=>(E(C()),E(W()),E(T())),()=>{C()&&W()&&!T()&&Ye()}),U(()=>(E(O()),E(xt())),()=>{var D;O()&&((D=xt())===null||D===void 0?void 0:D.autoUpdate)===void 0&&ro(tr,n(tr).autoUpdate=!0)}),ln(),pt();var nr,le=Ex();se("click",oa,function(D){var X;W()||T()||!O()||O().contains(D.target)||(X=n(Fe))!==null&&X!==void 0&&X.contains(D.target)||Vt()}),se("keydown",oa,an);var Nt=A(le),Un=D=>{var X,ke=bx(),$t=A(ke),rn=Te=>{var Tn=Ft();ur(Ne(Tn),t,"list-prepend",{},null),P(Te,Tn)};Y($t,Te=>{r["list-prepend"]&&Te(rn)});var Kt=N($t,2),Cn=Te=>{var Tn=Ft();ur(Ne(Tn),t,"list",{get filteredItems(){return n(d)}},null),P(Te,Tn)},Bn=Te=>{var Tn=Ft(),Lt=Ne(Tn),zr=dn=>{var gn=Ft();dr(Ne(gn),1,()=>n(d),mr,(Ln,k,J)=>{var ce,he=gx(),ye=A(he);ur(A(ye),t,"item",{get item(){return n(k)},index:J},Re=>{var Ae=Lr();we(()=>{var We;return gt(Ae,(We=n(k))===null||We===void 0?void 0:We[pe()])}),P(Re,Ae)}),Br(ye,(Re,Ae)=>In==null?void 0:In(Re),()=>({scroll:wn(n(k),z(),ve()),listDom:n(h)})),Br(ye,(Re,Ae)=>Qn==null?void 0:Qn(Re),()=>({scroll:n(p)===J,listDom:n(h)})),we((Re,Ae)=>{var We;return ce=Ot(ye,1,"item svelte-82qwg8",null,ce,{"list-group-title":n(k).groupHeader,active:Re,first:Ae,hover:Ie()===J,"group-item":n(k).groupItem,"not-selectable":((We=n(k))===null||We===void 0?void 0:We.selectable)===!1})},[()=>wn(n(k),z(),ve()),()=>J===0],fe),se("mouseover",he,()=>bn(J)),se("focus",he,()=>bn(J)),se("click",he,bo(()=>function(Re){var{item:Ae,i:We}=Re;if((Ae==null?void 0:Ae.selectable)!==!1)return z()&&!y()&&z()[ve()]===Ae[ve()]?Bt():void(function(zt){return zt.groupHeader&&zt.selectable||zt.selectable||!zt.hasOwnProperty("selectable")}(Ae)&&(Ie(We),Qt(Ae)))}({item:n(k),i:J}))),se("keydown",he,ba(bo(function(Re){xi.call(this,t,Re)}))),P(Ln,he)}),P(dn,gn)},ft=dn=>{var gn=Ft(),Ln=Ne(gn),k=J=>{var ce=Ft();ur(Ne(ce),t,"empty",{},he=>{P(he,mx())}),P(J,ce)};Y(Ln,J=>{et()||J(k)},!0),P(dn,gn)};Y(Lt,dn=>{n(d).length>0?dn(zr):dn(ft,!1)},!0),P(Te,Tn)};Y(Kt,Te=>{r.list?Te(Cn):Te(Bn,!1)});var An=N(Kt,2),ir=Te=>{var Tn=Ft();ur(Ne(Tn),t,"list-append",{},null),P(Te,Tn)};Y(An,Te=>{r["list-append"]&&Te(ir)}),Br(ke,Te=>br==null?void 0:br(Te)),Yn(ke,Te=>f(Fe,Te),()=>n(Fe)),Ar(()=>se("scroll",ke,pn)),Ar(()=>se("pointerup",ke,ba(bo(function(Te){xi.call(this,t,Te)})))),Ar(()=>se("mousedown",ke,ba(bo(function(Te){xi.call(this,t,Te)})))),we(()=>X=Ot(ke,1,"svelte-select-list svelte-82qwg8",null,X,{prefloat:n(Wn)})),P(D,ke)};Y(Nt,D=>{W()&&D(Un)});var K=N(Nt,2),xe=A(K),st=D=>{var X=jx(),ke=Ne(X),$t=A(ke),rn=A(N(ke,2));we(()=>{gt($t,n(c)),gt(rn,n(u))}),P(D,X)};Y(xe,D=>{T()&&D(st)});var Ct=N(K,2);ur(A(Ct),t,"prepend",{},null);var rt=N(Ct,2),qt=A(rt),tn=D=>{var X=Ft(),ke=Ne(X),$t=Kt=>{var Cn=Ft();dr(Ne(Cn),1,z,mr,(Bn,An,ir)=>{var Te,Tn=yx(),Lt=A(Tn);ur(A(Lt),t,"selection",{get selection(){return n(An)},index:ir},dn=>{var gn=Lr();we(()=>gt(gn,n(An)[pe()])),P(dn,gn)});var zr=N(Lt,2),ft=dn=>{var gn=xx();ur(A(gn),t,"multi-clear-icon",{},Ln=>{ru(Ln)}),se("pointerup",gn,ba(bo(()=>He(ir)))),P(dn,gn)};Y(zr,dn=>{_()||$()||!ru||dn(ft)}),we(()=>Te=Ot(Tn,1,"multi-item svelte-82qwg8",null,Te,{active:n(Be)===ir,disabled:_()})),se("click",Tn,ba(()=>$()?He(ir):{})),se("keydown",Tn,ba(bo(function(dn){xi.call(this,t,dn)}))),P(Bn,Tn)}),P(Kt,Cn)},rn=Kt=>{var Cn,Bn=wx();ur(A(Bn),t,"selection",{get selection(){return z()}},An=>{var ir=Lr();we(()=>gt(ir,z()[pe()])),P(An,ir)}),we(()=>Cn=Ot(Bn,1,"selected-item svelte-82qwg8",null,Cn,{"hide-selected-item":n(s)})),P(Kt,Bn)};Y(ke,Kt=>{y()?Kt($t):Kt(rn,!1)}),P(D,X)};Y(qt,D=>{n(a)&&D(tn)});var Pt,Rt=N(qt,2);Yn(Rt,D=>C(D),()=>C());var ot=N(rt,2),at=A(ot),un=D=>{var X=kx();ur(A(X),t,"loading-icon",{},ke=>{(function($t){P($t,hx())})(ke)}),P(D,X)};Y(at,D=>{Ke()&&D(un)});var St=N(at,2),kn=D=>{var X=Cx();ur(A(X),t,"clear-icon",{},ke=>{ru(ke)}),se("click",X,Jt),P(D,X)};Y(St,D=>{n(i)&&D(kn)});var nn=N(St,2),Dt=D=>{var X=Sx();ur(A(X),t,"chevron-icon",{get listOpen(){return W()}},ke=>{(function($t){P($t,fx())})(ke)}),P(D,X)};Y(nn,D=>{Xe()&&D(Dt)});var hn=N(ot,2);ur(hn,t,"input-hidden",{get value(){return z()}},D=>{var X=Ox();we(ke=>{vn(X,"name",S()),Za(X,ke)},[()=>z()?JSON.stringify(z()):null],fe),P(D,X)});var Ut=N(hn,2),rr=D=>{var X=Ft();ur(Ne(X),t,"required",{get value(){return z()}},ke=>{P(ke,zx())}),P(D,X)};return Y(Ut,D=>{!ie()||z()&&z().length!==0||D(rr)}),Ar(()=>se("pointerup",le,ba(On))),Yn(le,D=>O(D),()=>O()),Br(le,D=>pr==null?void 0:pr(D)),we(()=>{var D;nr=Ot(le,1,"svelte-select ".concat((D=It())!==null&&D!==void 0?D:""),"svelte-82qwg8",nr,{multi:y(),disabled:_(),focused:T(),"list-open":W(),"show-chevron":Xe(),error:Ze()}),vn(le,"style",Ce()),Pt=yl(Rt,Pt,ge(ge({readOnly:!ae()},n(ze)),{},{placeholder:n(l),style:I(),disabled:_()}),"svelte-82qwg8")}),se("keydown",Rt,an),se("blur",Rt,Vt),se("focus",Rt,Ye),Dl(Rt,ne),P(e,le),yt(t,"getFilteredItems",q),yt(t,"handleClear",Jt),ct({getFilteredItems:q,handleClear:Jt})}jt(`/* over all fonts, sizes, and colors */
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
}`);var $x=F('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');function Mx(e,t){var r,o,a,s,i;lt(t,!1);var l=M(void 0,!0),c=M(void 0,!0),u=M(void 0,!0),d=M(void 0,!0),h=M(void 0,!0),p=M(void 0,!0),m=Sr("jsoneditor:TransformWizard"),g=v(t,"json",9),b=v(t,"queryOptions",29,()=>({})),j=v(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(re=>({value:re,label:re})),S=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],O=M((r=b())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?ya(b().filter.path):void 0,!0),C=M((o=x.find(re=>{var ie;return re.value===((ie=b().filter)===null||ie===void 0?void 0:ie.relation)}))!==null&&o!==void 0?o:x[0],!0),y=M(((a=b())===null||a===void 0||(a=a.filter)===null||a===void 0?void 0:a.value)||"",!0),$=M((s=b())!==null&&s!==void 0&&(s=s.sort)!==null&&s!==void 0&&s.path?ya(b().sort.path):void 0,!0),_=M((i=S.find(re=>{var ie;return re.value===((ie=b().sort)===null||ie===void 0?void 0:ie.direction)}))!==null&&i!==void 0?i:S[0],!0);U(()=>E(g()),()=>{f(l,Array.isArray(g()))}),U(()=>(n(l),E(g())),()=>{f(c,n(l)?Cu(g()):[])}),U(()=>(n(l),E(g())),()=>{f(u,n(l)?Cu(g(),!0):[])}),U(()=>(n(c),ya),()=>{f(d,n(c).map(ya))}),U(()=>(n(u),ya),()=>{f(h,n(u)?n(u).map(ya):[])}),U(()=>(E(b()),n(h),Zt),()=>{var re;f(p,(re=b())!==null&&re!==void 0&&(re=re.projection)!==null&&re!==void 0&&re.paths&&n(h)?b().projection.paths.map(ie=>n(h).find(Ee=>Zt(Ee.value,ie))).filter(ie=>!!ie):void 0)}),U(()=>n(O),()=>{var re,ie,Ee;ie=(re=n(O))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.filter)===null||Ee===void 0?void 0:Ee.path,ie)||(m("changeFilterPath",ie),b(Qo(b(),["filter","path"],ie,!0)),j()(b()))}),U(()=>n(C),()=>{var re,ie,Ee;ie=(re=n(C))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.filter)===null||Ee===void 0?void 0:Ee.relation,ie)||(m("changeFilterRelation",ie),b(Qo(b(),["filter","relation"],ie,!0)),j()(b()))}),U(()=>n(y),()=>{var re,ie;re=n(y),Zt((ie=b())===null||ie===void 0||(ie=ie.filter)===null||ie===void 0?void 0:ie.value,re)||(m("changeFilterValue",re),b(Qo(b(),["filter","value"],re,!0)),j()(b()))}),U(()=>n($),()=>{var re,ie,Ee;ie=(re=n($))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.sort)===null||Ee===void 0?void 0:Ee.path,ie)||(m("changeSortPath",ie),b(Qo(b(),["sort","path"],ie,!0)),j()(b()))}),U(()=>n(_),()=>{var re,ie,Ee;ie=(re=n(_))===null||re===void 0?void 0:re.value,Zt((Ee=b())===null||Ee===void 0||(Ee=Ee.sort)===null||Ee===void 0?void 0:Ee.direction,ie)||(m("changeSortDirection",ie),b(Qo(b(),["sort","direction"],ie,!0)),j()(b()))}),U(()=>n(p),()=>{(function(re){var ie;Zt((ie=b())===null||ie===void 0||(ie=ie.projection)===null||ie===void 0?void 0:ie.paths,re)||(m("changeProjectionPaths",re),b(Qo(b(),["projection","paths"],re,!0)),j()(b()))})(n(p)?n(p).map(re=>re.value):void 0)}),ln(),pt(!0);var T=$x(),z=A(T),ne=A(z),Q=N(A(ne)),B=A(Q),G=A(B);Wa(G,{class:"jse-filter-path",showChevron:!0,get items(){return n(d)},get value(){return n(O)},set value(re){f(O,re)},$$legacy:!0});var pe=N(G,2);Wa(pe,{class:"jse-filter-relation",showChevron:!0,clearable:!1,items:x,get value(){return n(C)},set value(re){f(C,re)},$$legacy:!0});var Z=N(pe,2),de=N(ne),Me=N(A(de)),ue=A(Me),ve=A(ue);Wa(ve,{class:"jse-sort-path",showChevron:!0,get items(){return n(d)},get value(){return n($)},set value(re){f($,re)},$$legacy:!0}),Wa(N(ve,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,items:S,get value(){return n(_)},set value(re){f(_,re)},$$legacy:!0});var me=N(de),Ce=N(A(me)),Ze=A(Ce);Wa(A(Ze),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(h)},get value(){return n(p)},set value(re){f(p,re)},$$legacy:!0}),Dl(Z,()=>n(y),re=>f(y,re)),P(e,T),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Ax=F('<button type="button"><!> </button>'),Px=F('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');function Rx(e,t){lt(t,!1);var r=v(t,"queryLanguages",8),o=v(t,"queryLanguageId",12),a=v(t,"onChangeQueryLanguage",8);pt();var s=Px();dr(A(s),5,r,mr,(i,l)=>{var c,u=Ax(),d=A(u),h=g=>{en(g,{data:lp})},p=g=>{en(g,{data:cp})};Y(d,g=>{n(l).id===o()?g(h):g(p,!1)});var m=N(d);we(()=>{var g;c=Ot(u,1,"jse-query-language svelte-atm4um",null,c,{selected:n(l).id===o()}),vn(u,"title","Select ".concat(n(l).name," as query language")),gt(m," ".concat((g=n(l).name)!==null&&g!==void 0?g:""))}),se("click",u,()=>{return g=n(l).id,o(g),void a()(g);var g}),P(i,u)}),P(e,s),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var _x=F('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>'),Ix=F('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');function Ql(e,t){lt(t,!1);var r=v(t,"title",9,"Modal"),o=v(t,"fullScreenButton",9,!1),a=v(t,"fullscreen",13,!1),s=v(t,"onClose",9,void 0);pt(!0);var i=Ix(),l=A(i),c=A(l),u=N(l,2);ur(u,t,"actions",{},null);var d=N(u,2),h=m=>{var g=_x(),b=A(g),j=fe(()=>a()?mm:bm);en(b,{get data(){return n(j)}}),se("click",g,()=>a(!a())),P(m,g)};Y(d,m=>{o()&&m(h)});var p=N(d,2);en(A(p),{data:oc}),we(()=>gt(c,r())),se("click",p,()=>{var m;return(m=s())===null||m===void 0?void 0:m()}),P(e,i),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var qx=F('<button slot="actions" type="button" title="Select a query language"><!></button>'),ou=Sr("jsoneditor:AutoScrollHandler");function uf(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function a(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function s(l){r&&l===t||(i(),ou("startAutoScroll",l),t=l,r=setInterval(a,50))}function i(){r&&(ou("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return ou("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:u,bottom:d}=e.getBoundingClientRect();c<u?s(-o(u-c)):c>d?s(o(c-d)):i()}},onDragEnd:function(){i()}}}var Tx=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,Qh=()=>{var e,t,r,o,a,s,i,l,c,u,d,h,p;function m(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function g(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function b(j){u||(u=j),g(s(d=j-u,r,l,c)),p=!0,d<c?requestAnimationFrame(b):function(){g(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof h=="function"&&h(),u=0,p=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,a=x.offset||0,h=x.callback,s=x.easing||Tx,i=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof j){case"number":t=void 0,i=!1,o=r+j;break;case"object":o=m(t=j);break;case"string":t=document.querySelector(j),o=m(t)}switch(l=o-r+a,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}p?u=0:requestAnimationFrame(b)}};function Es(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var ws=Sr("validation"),Nx={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function df(e,t,r,o){return Ed(e,t,r,o,Nx)}function Xh(e,t,r,o){if(ws("validateJSON"),!t)return[];if(r!==o){var a=r.stringify(e);return t(a!==void 0?o.parse(a):void 0)}return t(e)}function Dx(e,t,r,o){if(ws("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Co.info}]};if(e.length!==0)try{var a=Es(()=>r.parse(e),c=>ws("validate: parsed json in ".concat(c," ms")));if(!t)return;var s=r===o?a:Es(()=>o.parse(e),c=>ws("validate: parsed json with the validationParser in ".concat(c," ms"))),i=Es(()=>t(s),c=>ws("validate: validated json in ".concat(c," ms")));return Rn(i)?void 0:{validationErrors:i}}catch(c){var l=Es(()=>function(u,d){if(u.length>z0)return!1;try{return d.parse(qo(u)),!0}catch{return!1}}(e,r),u=>ws("validate: checked whether repairable in ".concat(u," ms")));return{parseError:Us(e,c.message||c.toString()),isRepairable:l}}}var pl=Sr("jsoneditor:FocusTracker");function Id(e){var t,{onMount:r,onDestroy:o,getWindow:a,hasFocus:s,onFocus:i,onBlur:l}=e,c=!1;function u(){var h=s();h&&(clearTimeout(t),c||(pl("focus"),i(),c=h))}function d(){c&&(clearTimeout(t),t=setTimeout(()=>{s()||(pl("blur"),c=!1,l())}))}r(()=>{pl("mount FocusTracker");var h=a();h&&(h.addEventListener("focusin",u,!0),h.addEventListener("focusout",d,!0))}),o(()=>{pl("destroy FocusTracker");var h=a();h&&(h.removeEventListener("focusin",u,!0),h.removeEventListener("focusout",d,!0))})}jt(`/* over all fonts, sizes, and colors */
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
}`);var Ux=F('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>'),Bx=F('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');function $o(e,t){lt(t,!1);var r=v(t,"type",9,"success"),o=v(t,"icon",9,void 0),a=v(t,"message",9,void 0),s=v(t,"actions",25,()=>[]),i=v(t,"onClick",9,void 0),l=v(t,"onClose",9,void 0);l()&&uo(l()),pt(!0);var c,u=Bx(),d=A(u),h=A(d),p=A(h),m=b=>{en(b,{get data(){return o()}})};Y(p,b=>{o()&&b(m)});var g=N(p);dr(N(d,2),5,s,mr,(b,j)=>{var x=Ux(),S=A(x),O=y=>{en(y,{get data(){return n(j).icon}})};Y(S,y=>{n(j).icon&&y(O)});var C=N(S);we(()=>{var y;vn(x,"title",n(j).title),x.disabled=n(j).disabled,gt(C," ".concat((y=n(j).text)!==null&&y!==void 0?y:""))}),se("click",x,()=>{n(j).onClick&&n(j).onClick()}),se("mousedown",x,()=>{n(j).onMouseDown&&n(j).onMouseDown()}),P(b,x)}),we(()=>{var b,j;Ot(u,1,"jse-message jse-".concat((b=r())!==null&&b!==void 0?b:""),"svelte-czprfx"),c=Ot(d,1,"jse-text svelte-czprfx",null,c,{"jse-clickable":!!i()}),gt(g," ".concat((j=a())!==null&&j!==void 0?j:""))}),se("click",d,function(){i()&&i()()}),P(e,u),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Lx=F('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>'),Fx=F('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>'),Vx=F('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>'),Wx=F('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>'),Hx=F('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>'),Jx=F('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');function qd(e,t){lt(t,!1);var r=M(void 0,!0),o=v(t,"validationErrors",9),a=v(t,"selectError",9),s=M(!0,!0);function i(){f(s,!1)}function l(){f(s,!0)}U(()=>E(o()),()=>{f(r,o().length)}),ln(),pt(!0);var c=Ft(),u=Ne(c),d=h=>{var p=Jx(),m=A(p),g=j=>{var x=Wx(),S=A(x),O=A(S);dr(O,1,()=>uh(o(),100),mr,($,_,T)=>{var z=Fx(),ne=A(z);en(A(ne),{data:Xa});var Q=N(ne),B=A(Q),G=N(Q),pe=A(G),Z=A(N(G)),de=Me=>{var ue=Lx();en(A(ue),{data:Am}),se("click",ue,bo(i)),P(Me,ue)};Y(Z,Me=>{T===0&&o().length>1&&Me(de)}),we(Me=>{var ue;Ot(z,1,"jse-validation-".concat((ue=n(_).severity)!==null&&ue!==void 0?ue:""),"svelte-1uindol"),gt(B,Me),gt(pe,n(_).message)},[()=>ko(n(_).path)],fe),se("click",z,()=>{setTimeout(()=>a()(n(_)))}),P($,z)});var C=N(O),y=$=>{var _=Vx(),T=N(A(_),2),z=A(T);we(()=>gt(z,"(and ".concat(n(r)-100," more errors)"))),P($,_)};Y(C,$=>{n(r)>100&&$(y)}),P(j,x)},b=j=>{var x=Hx(),S=A(x),O=A(S),C=A(O);en(A(C),{data:Xa});var y=A(N(C));en(A(N(y)),{data:bp}),we($=>{var _;Ot(O,1,"jse-validation-".concat($??""),"svelte-1uindol"),gt(y,"".concat((_=n(r))!==null&&_!==void 0?_:""," validation errors "))},[()=>{return $=o(),[Co.error,Co.warning,Co.info].find(_=>$.some(T=>T.severity===_));var $}],fe),se("click",O,l),P(j,x)};Y(m,j=>{n(s)||n(r)===1?j(g):j(b,!1)}),P(h,p)};Y(u,h=>{Rn(o())||h(d)}),P(e,c),ct()}function Xl(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}jt(`/* over all fonts, sizes, and colors */
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
}`);var Kx=F('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');function Li(e,t){lt(t,!1);var r=v(t,"className",8,void 0),o=v(t,"fullscreen",8,!1),a=v(t,"onClose",8),s=M();function i(){a()()}qr(()=>n(s).showModal()),uo(()=>n(s).close()),pt();var l,c=Kx(),u=A(c);ur(A(u),t,"default",{},null),Yn(c,d=>f(s,d),()=>n(s)),Ar(()=>se("close",c,i)),Ar(()=>{return se("pointerdown",c,(d=i,function(){for(var h=arguments.length,p=new Array(h),m=0;m<h;m++)p[m]=arguments[m];p[0].target===this&&(d==null||d.apply(this,p))}));var d}),Ar(()=>se("cancel",c,ba(function(d){xi.call(this,t,d)}))),Br(c,(d,h)=>Xl==null?void 0:Xl(d,h),()=>i),we(d=>l=Ot(c,1,Da(d),"svelte-1s9c2ql",l,{"jse-fullscreen":o()}),[()=>ri("jse-modal",r())],fe),P(e,c),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Yx=F('<!> <div class="jse-modal-contents svelte-189qksl"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>',1);function Gh(e,t){lt(t,!1);var r=v(t,"onClose",9),o=xd()?"⌘":"Ctrl";pt(!0),Li(e,{get onClose(){return r()},className:"jse-copy-paste",children:(a,s)=>{var i=Yx(),l=Ne(i);Ql(l,{title:"Copying and pasting",get onClose(){return r()}});var c=N(l,2),u=N(A(c),2),d=A(u);A(d).textContent="".concat(o??"","+C");var h=N(d,2);A(h).textContent="".concat(o??"","+X"),A(N(h,2)).textContent="".concat(o??"","+V"),se("click",A(N(u,2)),function(){for(var p,m=arguments.length,g=new Array(m),b=0;b<m;b++)g[b]=arguments[b];(p=r())===null||p===void 0||p.apply(this,g)}),P(a,i)},$$slots:{default:!0}}),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Qx=F('<div class="jse-separator svelte-pf7s2l"></div>'),Xx=F('<div class="jse-space svelte-pf7s2l"></div>'),Gx=F('<button type="button"><!> <!></button>'),Zx=F('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');function kc(e,t){lt(t,!1);var r=v(t,"items",25,()=>[]);pt(!0);var o=Zx(),a=A(o);ur(a,t,"left",{},null);var s=N(a,2);dr(s,1,r,mr,(i,l)=>{var c=Ft(),u=Ne(c),d=p=>{P(p,Qx())},h=p=>{var m=Ft(),g=Ne(m),b=x=>{P(x,Xx())},j=x=>{var S=Ft(),O=Ne(S),C=$=>{var _=Gx(),T=A(_),z=B=>{en(B,{get data(){return n(l).icon}})};Y(T,B=>{n(l).icon&&B(z)});var ne=N(T,2),Q=B=>{var G=Lr();we(()=>gt(G,n(l).text)),P(B,G)};Y(ne,B=>{n(l).text&&B(Q)}),we(()=>{var B;Ot(_,1,"jse-button ".concat((B=n(l).className)!==null&&B!==void 0?B:""),"svelte-pf7s2l"),vn(_,"title",n(l).title),_.disabled=n(l).disabled||!1}),se("click",_,function(){for(var B,G=arguments.length,pe=new Array(G),Z=0;Z<G;Z++)pe[Z]=arguments[Z];(B=n(l).onClick)===null||B===void 0||B.apply(this,pe)}),P($,_)},y=$=>{var _=Lr();we(T=>gt(_,T),[()=>function(T){return console.error("Unknown type of menu item",T),"???"}(n(l))],fe),P($,_)};Y(O,$=>{Ci(n(l))?$(C):$(y,!1)},!0),P(x,S)};Y(g,x=>{kh(n(l))?x(b):x(j,!1)},!0),P(p,m)};Y(u,p=>{wl(n(l))?p(d):p(h,!1)}),P(i,c)}),ur(N(s,2),t,"right",{},null),P(e,o),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var ey=F('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>'),ty=F('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function ny(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=M(void 0,!0),c=v(t,"text",13,""),u=v(t,"readOnly",9,!1),d=v(t,"onParse",9),h=v(t,"onRepair",9),p=v(t,"onChange",9,void 0),m=v(t,"onApply",9),g=v(t,"onCancel",9),b=Sr("jsoneditor:JSONRepair"),j=M(void 0,!0);function x(){if(n(j)&&n(r)){var Q=n(r).position!==void 0?n(r).position:0;n(j).setSelectionRange(Q,Q),n(j).focus()}}function S(){m()(c())}function O(){try{c(h()(c())),p()&&p()(c())}catch{}}var C=M(void 0,!0);U(()=>E(c()),()=>{f(r,function(Q){try{return void d()(Q)}catch(B){return Us(Q,B.message)}}(c()))}),U(()=>E(c()),()=>{f(o,function(Q){try{return h()(Q),!0}catch{return!1}}(c()))}),U(()=>n(r),()=>{b("error",n(r))}),U(()=>E(g()),()=>{f(C,[{type:"space"},{type:"button",icon:oc,title:"Cancel repair",className:"jse-cancel",onClick:g()}])}),U(()=>nv,()=>{f(a,{icon:nv,text:"Show me",title:"Scroll to the error location",onClick:x})}),U(()=>Ns,()=>{f(s,{icon:Ns,text:"Auto repair",title:"Automatically repair JSON",onClick:O})}),U(()=>(n(o),n(a),n(s)),()=>{f(i,n(o)?[n(a),n(s)]:[n(a)])}),U(()=>E(u()),()=>{f(l,[{icon:rd,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:S}])}),ln(),pt(!0);var y=ty(),$=A(y);kc($,{get items(){return n(C)},$$slots:{left:(Q,B)=>{P(Q,ey())}}});var _=N($,2),T=Q=>{var B=fe(()=>"Cannot parse JSON: ".concat(n(r).message));$o(Q,{type:"error",icon:Xa,get message(){return n(B)},get actions(){return n(i)}})},z=Q=>{$o(Q,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};Y(_,Q=>{n(r)?Q(T):Q(z,!1)});var ne=N(_,2);Yn(ne,Q=>f(j,Q),()=>n(j)),we(()=>{ne.readOnly=u(),Za(ne,c())}),se("input",ne,function(Q){b("handleChange");var B=Q.target.value;c()!==B&&(c(B),p()&&p()(c()))}),P(e,y),ct()}function Zh(e,t){lt(t,!1);var r=v(t,"text",13),o=v(t,"onParse",9),a=v(t,"onRepair",9),s=v(t,"onApply",9),i=v(t,"onClose",9);function l(u){s()(u),i()()}function c(){i()()}pt(!0),Li(e,{get onClose(){return i()},className:"jse-repair-modal",children:(u,d)=>{ny(u,{get onParse(){return o()},get onRepair(){return a()},onApply:l,onCancel:c,get text(){return r()},set text(h){r(h)},$$legacy:!0})},$$slots:{default:!0}}),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var ry=F('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>'),oy=F('<div role="none"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');function ay(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=M(void 0,!0),l=v(t,"visibleSections",9),c=v(t,"sectionIndex",9),u=v(t,"total",9),d=v(t,"path",9),h=v(t,"selection",9),p=v(t,"onExpandSection",9),m=v(t,"context",9);U(()=>(E(l()),E(c())),()=>{f(r,l()[c()])}),U(()=>n(r),()=>{f(o,n(r).end)}),U(()=>(E(l()),E(c()),E(u())),()=>{f(a,l()[c()+1]?l()[c()+1].start:u())}),U(()=>(E(m()),E(h()),E(d()),n(o)),()=>{f(s,Di(m().getJson(),h(),d().concat(String(n(o)))))}),U(()=>(n(o),n(a)),()=>{f(i,function(O,C){var y={start:O,end:Math.min($u(O),C)},$=Math.max(Ul((O+C)/2),O),_={start:$,end:Math.min($u($),C)},T=Ul(C),z=T===C?T-Ii:T,ne={start:Math.max(z,O),end:C},Q=[y],B=_.start>=y.end&&_.end<=ne.start;return B&&Q.push(_),ne.start>=(B?_.end:y.end)&&Q.push(ne),Q}(n(o),n(a)))}),ln(),pt(!0);var g,b=oy(),j=A(b),x=A(j),S=A(x);dr(N(x,2),1,()=>n(i),mr,(O,C)=>{var y=ry(),$=A(y);we(()=>{var _,T;return gt($,"show ".concat((_=n(C).start)!==null&&_!==void 0?_:"","-").concat((T=n(C).end)!==null&&T!==void 0?T:""))}),se("click",y,()=>p()(d(),n(C))),P(O,y)}),we(()=>{var O,C;g=Ot(b,1,"jse-collapsed-items svelte-1h6hzoq",null,g,{"jse-selected":n(s)}),Ps(b,"--level",d().length+2),gt(S,"Items ".concat((O=n(o))!==null&&O!==void 0?O:"","-").concat((C=n(a))!==null&&C!==void 0?C:""))}),se("mousemove",b,function(O){O.stopPropagation()}),P(e,b),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var sy=F('<button type="button"><!></button>');function ja(e,t){lt(t,!1);var r=v(t,"root",9,!1),o=v(t,"insert",9,!1),a=v(t,"selected",9),s=v(t,"onContextMenu",9);pt(!0);var i,l=sy();vn(l,"title",wd),en(A(l),{data:_a}),we(()=>i=Ot(l,1,"jse-context-menu-pointer svelte-137iwnw",null,i,{"jse-root":r(),"jse-insert":o(),"jse-selected":a()})),se("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&s()({anchor:u,left:0,top:0,width:Zo,height:Go,offsetTop:2,offsetLeft:0,showTip:!0})}),P(e,l),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var iy=F('<div role="none" data-type="selectable-key"><!></div>'),ly=F("<!> <!>",1),cy=F('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function eg(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"path",9),s=v(t,"value",9),i=v(t,"context",9),l=v(t,"enforceString",9),c=v(t,"selection",9),u=v(t,"searchResultItems",9);U(()=>(E(c()),Jr),()=>{f(r,En(c())&&Jr(c()))}),U(()=>(E(i()),E(a()),E(s()),E(l()),n(r),E(c()),E(u())),()=>{f(o,i().onRenderValue({path:a(),value:s(),mode:i().mode,readOnly:i().readOnly,enforceString:l(),isEditing:n(r),parser:i().parser,normalization:i().normalization,selection:c(),searchResultItems:u(),onPatch:i().onPatch,onPasteJson:i().onPasteJson,onSelect:i().onSelect,onFind:i().onFind,findNextInside:i().findNextInside,focus:i().focus}))}),ln(),pt(!0);var d=Ft();dr(Ne(d),1,()=>n(o),mr,(h,p)=>{var m=Ft(),g=Ne(m),b=x=>{var S=cy(),O=fe(()=>n(p).action);Br(S,(C,y)=>{var $;return($=n(O))===null||$===void 0?void 0:$(C,y)},()=>n(p).props),P(x,S)},j=x=>{var S=Ft();oh(Ne(S),()=>n(p).component,(O,C)=>{C(O,Ma(()=>n(p).props))}),P(x,S)};Y(g,x=>{_0(n(p))?x(b):x(j,!1)}),P(h,m)}),P(e,d),ct()}var uy={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function au(e){var{json:t,selection:r,deltaY:o,items:a}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var s=o<0?function(d){for(var{json:h,items:p,selection:m,deltaY:g}=d,b=ea(h,m),j=p.findIndex($=>Zt($.path,b)),x=()=>{var $;return($=p[S-1])===null||$===void 0?void 0:$.height},S=j,O=0;x()!==void 0&&Math.abs(g)>O+x()/2;)O+=x(),S-=1;var C=p[S].path,y=S-j;return S!==j&&p[S]!==void 0?{beforePath:C,offset:y}:void 0}({json:t,selection:r,deltaY:o,items:a}):function(d){for(var h,{json:p,items:m,selection:g,deltaY:b}=d,j=Ra(p,g),x=m.findIndex(ne=>Zt(ne.path,j)),S=0,O=x,C=()=>{var ne;return(ne=m[O+1])===null||ne===void 0?void 0:ne.height};C()!==void 0&&Math.abs(b)>S+C()/2;)S+=C(),O+=1;var y=on(j),$=Je(p,y),_=Array.isArray($)?O:O+1,T=(h=m[_])===null||h===void 0?void 0:h.path,z=O-x;return T?{beforePath:T,offset:z}:{append:!0,offset:z}}({json:t,selection:r,deltaY:o,items:a});if(!s||s.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(d,h,p){if(!h)return[];var m="beforePath"in p?p.beforePath:void 0,g="append"in p?p.append:void 0,b=on(Qe(h)),j=Je(d,b);if(!(g||m&&ua(m,b)&&m.length>b.length))return[];var x=ea(d,h),S=Ra(d,h),O=Ht(x),C=Ht(S),y=m?m[b.length]:void 0;if(!$r(j)){if(wr(j)){var $=Pr(O),_=Pr(C),T=y!==void 0?Pr(y):j.length;return Rm(_-$+1,T<$?G=>({op:"move",from:Et(b.concat(String($+G))),path:Et(b.concat(String(T+G)))}):()=>({op:"move",from:Et(b.concat(String($))),path:Et(b.concat(String(T)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var z=Object.keys(j),ne=z.indexOf(O),Q=z.indexOf(C),B=g?z.length:y!==void 0?z.indexOf(y):-1;return ne!==-1&&Q!==-1&&B!==-1?B>ne?[...z.slice(ne,Q+1),...z.slice(B,z.length)].map(G=>ns(b,G)):[...z.slice(B,ne),...z.slice(Q+1,z.length)].map(G=>ns(b,G)):[]}(t,r,s),l=on(ea(t,r)),c=Je(t,l);if(Array.isArray(c)){var u=function(d){var h,p,{items:m,json:g,selection:b,offset:j}=d,x=ea(g,b),S=Ra(g,b),O=m.findIndex(_=>Zt(_.path,x)),C=m.findIndex(_=>Zt(_.path,S)),y=(h=m[O+j])===null||h===void 0?void 0:h.path,$=(p=m[C+j])===null||p===void 0?void 0:p.path;return Dr(y,$)}({items:a,json:t,selection:r,offset:s.offset});return{operations:i,updatedSelection:u,offset:s.offset}}return{operations:i,updatedSelection:void 0,offset:s.offset}}jt(`/* over all fonts, sizes, and colors */
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
}`);var dy=F('<button type="button"><!></button>');function qs(e,t){lt(t,!1);var r=M(),o=Ba("absolute-popup"),a=v(t,"validationError",8),s=v(t,"onExpand",8);U(()=>E(a()),()=>{f(r,R0(a())&&a().isChildError?"Contains invalid data":a().message)}),ln(),pt();var i=dy();en(A(i),{data:Xa}),Ar(()=>se("click",i,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=s())===null||l===void 0||l.apply(this,u)})),Br(i,(l,c)=>Fs==null?void 0:Fs(l,c),()=>ge({text:n(r)},o)),we(()=>{var l;return Ot(i,1,"jse-validation-".concat((l=a().severity)!==null&&l!==void 0?l:""),"svelte-1a8aobl")}),P(e,i),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Hn=pc(()=>uy),vy=F('<div class="jse-separator svelte-wovgt4">:</div>'),fy=F('<div class="jse-bracket svelte-wovgt4">[</div> <span class="jse-tag jse-expanded svelte-wovgt4"> </span> &nbsp;',1),py=F('<div class="jse-bracket svelte-wovgt4">[</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">]</div>',1),hy=F('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),gy=F('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),my=F('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),by=F('<div data-type="insert-selection-area-inside"><!></div>'),jy=F('<div slot="identifier" class="jse-identifier svelte-wovgt4"><div class="jse-index svelte-wovgt4"> </div></div>'),xy=F("<!> <!>",1),yy=F('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),wy=F('<div class="jse-items svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><span class="jse-bracket svelte-wovgt4">]</span></div> <!></div>',1),ky=F('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4"><div class="jse-meta-inner svelte-wovgt4" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),Cy=F('<div class="jse-separator svelte-wovgt4">:</div>'),Sy=F('<div class="jse-bracket jse-expanded svelte-wovgt4">&lbrace;</div>'),Oy=F('<div class="jse-bracket svelte-wovgt4">&lbrace;</div> <button type="button" class="jse-tag svelte-wovgt4"> </button> <div class="jse-bracket svelte-wovgt4">&rbrace;</div>',1),zy=F('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),Ey=F('<div role="none" class="jse-insert-selection-area jse-inside svelte-wovgt4" data-type="insert-selection-area-inside"></div>'),$y=F('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),My=F('<div data-type="insert-selection-area-inside"><!></div>'),Ay=F('<div slot="identifier"><!></div>'),Py=F('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Ry=F('<div class="jse-props svelte-wovgt4"><!> <!></div> <div class="jse-footer-outer svelte-wovgt4"><div data-type="selectable-value" class="jse-footer svelte-wovgt4"><div class="jse-bracket svelte-wovgt4">&rbrace;</div></div> <!></div>',1),_y=F('<div class="jse-header-outer svelte-wovgt4"><div class="jse-header svelte-wovgt4"><button type="button" class="jse-expand svelte-wovgt4" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-wovgt4" data-type="selectable-value"><div class="jse-meta-inner svelte-wovgt4"><!></div></div> <!></div> <!> <!></div> <!>',1),Iy=F('<div class="jse-separator svelte-wovgt4">:</div>'),qy=F('<div class="jse-context-menu-pointer-anchor svelte-wovgt4"><!></div>'),Ty=F('<div role="none" class="jse-insert-selection-area jse-after svelte-wovgt4" data-type="insert-selection-area-after"></div>'),Ny=F('<div class="jse-contents-outer svelte-wovgt4"><div class="jse-contents svelte-wovgt4"><!> <!> <div class="jse-value-outer svelte-wovgt4"><!></div> <!></div> <!> <!></div>'),Dy=F('<div data-type="insert-selection-area-after"><!></div>'),Uy=F('<div role="treeitem" tabindex="-1"><!> <!></div>');function Du(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"pointer",9),s=v(t,"value",9),i=v(t,"state",9),l=v(t,"validationErrors",9),c=v(t,"searchResults",9),u=v(t,"selection",9),d=v(t,"context",9),h=v(t,"onDragSelectionStart",9),p=Sr("jsoneditor:JSONNode"),m=M(void 0,!0),g=void 0,b=M(void 0,!0),j=M(void 0,!0),x=M(void 0,!0),S=M(void 0,!0),O=M(void 0,!0),C=M(void 0,!0),y=M(void 0,!0);function $(te){te.stopPropagation();var q=yd(te);d().onExpand(n(j),!n(x),q)}function _(te){te.stopPropagation(),d().onExpand(n(j),!0)}function T(te,q){var ae=el(n(j),Object.keys(s()),te,q);return d().onPatch(ae),Ht(Io(ae[0].path))}function z(te){d().onDrag(te)}function ne(te){Hn().selecting&&(Hn(Hn().selecting=!1),te.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",z,!0),document.removeEventListener("mouseup",ne)}function Q(){var te;return((te=d().findElement([]))===null||te===void 0||(te=te.getBoundingClientRect())===null||te===void 0?void 0:te.top)||0}function B(te,q){var ae=Q()-te.initialContentTop;return q.clientY-te.initialClientY-ae}function G(te){if(!d().readOnly&&u()){var q=on(Qe(u()));if(Zt(n(j),q)){var ae=function(V,R){var et=[];function kt(Ue){var ut=n(j).concat(Ue),ze=d().findElement(ut);ze!==void 0&&et.push({path:ut,height:ze.clientHeight})}if(Array.isArray(s())){var tt=d().getJson();if(tt===void 0)return;var Xe=ea(tt,V),De=Ra(tt,V),Ie=parseInt(Ht(Xe),10),xt=parseInt(Ht(De),10),It=R.find(Ue=>Ie>=Ue.start&&xt<=Ue.end);if(!It)return;var{start:Be,end:be}=It;ch(Be,Math.min(s().length,be),Ue=>kt(String(Ue)))}else Object.keys(s()).forEach(kt);return et}(u(),n(O)||Rs);if(p("dragSelectionStart",{selection:u(),items:ae}),ae){var I=d().getJson();if(I!==void 0){var je=ea(I,u()),Ke=ae.findIndex(V=>Zt(V.path,je)),{offset:W}=au({json:I,selection:d().getSelection(),deltaY:0,items:ae});f(b,{initialTarget:te.target,initialClientY:te.clientY,initialContentTop:Q(),selectionStartIndex:Ke,selectionItemsCount:Pa(I,u()).length,items:ae,offset:W,didMoveItems:!1}),Hn(Hn().dragging=!0),document.addEventListener("mousemove",pe,!0),document.addEventListener("mouseup",Z)}}else p("Cannot drag the current selection (probably spread over multiple sections)")}else h()(te)}}function pe(te){if(n(b)){var q=d().getJson();if(q===void 0)return;var ae=B(n(b),te),{offset:I}=au({json:q,selection:d().getSelection(),deltaY:ae,items:n(b).items});I!==n(b).offset&&(p("drag selection",I,ae),f(b,ge(ge({},n(b)),{},{offset:I,didMoveItems:!0})))}}function Z(te){if(n(b)){var q=d().getJson();if(q===void 0)return;var ae=B(n(b),te),{operations:I,updatedSelection:je}=au({json:q,selection:d().getSelection(),deltaY:ae,items:n(b).items});if(I)d().onPatch(I,(V,R)=>({state:R,selection:je??u()}));else if(te.target===n(b).initialTarget&&!n(b).didMoveItems){var Ke=Vc(te.target),W=yh(te.target);W&&d().onSelect(Yv(Ke,W))}f(b,void 0),Hn(Hn().dragging=!1),document.removeEventListener("mousemove",pe,!0),document.removeEventListener("mouseup",Z)}}function de(te){te.shiftKey||(te.stopPropagation(),te.preventDefault(),d().onSelect(va(n(j))))}function Me(te){te.shiftKey||(te.stopPropagation(),te.preventDefault(),d().onSelect(sa(n(j))))}function ue(te){d().onSelect(va(n(j))),d().onContextMenu(te)}function ve(te){d().onSelect(sa(n(j))),d().onContextMenu(te)}U(()=>E(a()),()=>{f(j,Io(a()))}),U(()=>E(a()),()=>{f(r,encodeURIComponent(a()))}),U(()=>E(i()),()=>{f(x,!!es(i())&&i().expanded)}),U(()=>(E(s()),E(i())),()=>{f(S,aa(s(),i(),[]))}),U(()=>E(i()),()=>{f(O,Ir(i())?i().visibleSections:void 0)}),U(()=>E(l()),()=>{var te;f(C,(te=l())===null||te===void 0?void 0:te.validationError)}),U(()=>(E(d()),E(u()),n(j)),()=>{f(y,Di(d().getJson(),u(),n(j)))}),U(()=>n(j),()=>{f(o,n(j).length===0)}),ln(),pt(!0);var me,Ce=Uy(),Ze=A(Ce),re=te=>{var q=ky(),ae=Ne(q),I=A(ae),je=A(I),Ke=A(je),W=H=>{en(H,{data:_a})},V=H=>{en(H,{data:Ei})};Y(Ke,H=>{n(x)?H(W):H(V,!1)});var R=N(je,2);ur(R,t,"identifier",{},null);var et=N(R,2),kt=H=>{P(H,vy())};Y(et,H=>{n(o)||H(kt)});var tt=N(et,2),Xe=A(tt),De=A(Xe),Ie=H=>{var _e=fy(),He=A(N(Ne(_e),2));we(()=>{var Tt,an;return gt(He,"".concat((Tt=s().length)!==null&&Tt!==void 0?Tt:"",`
                `).concat((an=s().length===1?"item":"items")!==null&&an!==void 0?an:""))}),P(H,_e)},xt=H=>{var _e=py(),He=N(Ne(_e),2),Tt=A(He);we(()=>{var an,Ye;return gt(Tt,"".concat((an=s().length)!==null&&an!==void 0?an:"",`
                `).concat((Ye=s().length===1?"item":"items")!==null&&Ye!==void 0?Ye:""))}),se("click",He,_),P(H,_e)};Y(De,H=>{n(x)?H(Ie):H(xt,!1)});var It=N(tt,2),Be=H=>{var _e=hy();ja(A(_e),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(H,_e)};Y(It,H=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Jr(u())&&Zt(Qe(u()),n(j))&&H(Be)});var be=N(I,2),Ue=H=>{qs(H,{get validationError(){return n(C)},onExpand:_})};Y(be,H=>{!n(C)||n(x)&&n(C).isChildError||H(Ue)});var ut=N(be,2),ze=H=>{var _e=gy();se("click",_e,de),P(H,_e)},mt=H=>{var _e=my();se("click",_e,Me),P(H,_e)};Y(ut,H=>{n(x)?H(ze):H(mt,!1)});var nt=N(ae,2),Le=H=>{var _e=wy(),He=Ne(_e),Tt=A(He),an=On=>{var Jt,Bt=by();vn(Bt,"title",Hc);var fn=A(Bt),sr=fe(()=>n(y)&&_r(u()));ja(fn,{insert:!0,get selected(){return n(sr)},onContextMenu:ue}),we(Dn=>{Jt=Ot(Bt,1,"jse-insert-area jse-inside svelte-wovgt4",null,Jt,{"jse-hovered":n(m)===pi,"jse-selected":Dn}),Ps(Bt,"--level",n(j).length+1)},[()=>n(y)&&_r(u())],fe),P(On,Bt)};Y(Tt,On=>{!d().readOnly&&(n(m)===pi||n(y)&&_r(u()))&&On(an)}),dr(N(Tt,2),1,()=>n(O)||Rs,mr,(On,Jt,Bt)=>{var fn=xy(),sr=Ne(fn);dr(sr,1,()=>function(Fe,pn,dt){var Qt=pn.start,bn=Math.min(pn.end,Fe.length),zn=xp(Qt,bn);return dt&&dt.offset!==0?Mv(zn,dt.selectionStartIndex,dt.selectionItemsCount,dt.offset).map((wn,In)=>({index:wn,gutterIndex:In})):zn.map(wn=>({index:wn,gutterIndex:wn}))}(s(),n(Jt),n(b)),Fe=>Fe.index,(Fe,pn)=>{var dt=Ft(),Qt=fe(()=>Ir(l())?l().items[n(pn).index]:void 0),bn=fe(()=>Qv(d().getJson(),u(),n(j).concat(String(n(pn).index)))),zn=Ne(dt),wn=fe(()=>rv(a(),n(pn).index)),In=fe(()=>Ir(i())?i().items[n(pn).index]:void 0),Qn=fe(()=>Ir(c())?c().items[n(pn).index]:void 0);Du(zn,{get value(){return s()[n(pn).index]},get pointer(){return n(wn)},get state(){return n(In)},get validationErrors(){return n(Qt)},get searchResults(){return n(Qn)},get selection(){return n(bn)},get context(){return d()},onDragSelectionStart:G,$$slots:{identifier:(Or,tr)=>{var pr=jy(),br=A(pr),vr=A(br);we(()=>gt(vr,n(pn).gutterIndex)),P(Or,pr)}}}),P(Fe,dt)});var Dn=N(sr,2),cn=Fe=>{var pn=fe(()=>n(O)||Rs);ay(Fe,{get visibleSections(){return n(pn)},sectionIndex:Bt,get total(){return s().length},get path(){return n(j)},get onExpandSection(){return d().onExpandSection},get selection(){return u()},get context(){return d()}})};Y(Dn,Fe=>{n(Jt).end<s().length&&Fe(cn)}),P(On,fn)});var Ye=N(He,2),Vt=N(A(Ye),2),Mn=On=>{var Jt=yy();se("click",Jt,Me),P(On,Jt)};Y(Vt,On=>{n(o)||On(Mn)}),P(H,_e)};Y(nt,H=>{n(x)&&H(Le)}),se("click",je,$),P(te,q)},ie=te=>{var q=Ft(),ae=Ne(q),I=Ke=>{var W=_y(),V=Ne(W),R=A(V),et=A(R),kt=A(et),tt=Ye=>{en(Ye,{data:_a})},Xe=Ye=>{en(Ye,{data:Ei})};Y(kt,Ye=>{n(x)?Ye(tt):Ye(Xe,!1)});var De=N(et,2);ur(De,t,"identifier",{},null);var Ie=N(De,2),xt=Ye=>{P(Ye,Cy())};Y(Ie,Ye=>{n(o)||Ye(xt)});var It=N(Ie,2),Be=A(It),be=A(Be),Ue=Ye=>{P(Ye,Sy())},ut=Ye=>{var Vt=Oy(),Mn=N(Ne(Vt),2),On=A(Mn);we((Jt,Bt)=>gt(On,"".concat(Jt??"",`
                `).concat(Bt??"")),[()=>Object.keys(s()).length,()=>Object.keys(s()).length===1?"prop":"props"],fe),se("click",Mn,_),P(Ye,Vt)};Y(be,Ye=>{n(x)?Ye(Ue):Ye(ut,!1)});var ze=N(It,2),mt=Ye=>{var Vt=zy();ja(A(Vt),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(Ye,Vt)};Y(ze,Ye=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Jr(u())&&Zt(Qe(u()),n(j))&&Ye(mt)});var nt=N(R,2),Le=Ye=>{qs(Ye,{get validationError(){return n(C)},onExpand:_})};Y(nt,Ye=>{!n(C)||n(x)&&n(C).isChildError||Ye(Le)});var H=N(nt,2),_e=Ye=>{var Vt=Ey();se("click",Vt,de),P(Ye,Vt)},He=Ye=>{var Vt=Ft(),Mn=Ne(Vt),On=Jt=>{var Bt=$y();se("click",Bt,Me),P(Jt,Bt)};Y(Mn,Jt=>{n(o)||Jt(On)},!0),P(Ye,Vt)};Y(H,Ye=>{n(x)?Ye(_e):Ye(He,!1)});var Tt=N(V,2),an=Ye=>{var Vt=Ry(),Mn=Ne(Vt),On=A(Mn),Jt=Dn=>{var cn,Fe=My();vn(Fe,"title",Hc);var pn=A(Fe),dt=fe(()=>n(y)&&_r(u()));ja(pn,{insert:!0,get selected(){return n(dt)},onContextMenu:ue}),we(Qt=>{cn=Ot(Fe,1,"jse-insert-area jse-inside svelte-wovgt4",null,cn,{"jse-hovered":n(m)===pi,"jse-selected":Qt}),Ps(Fe,"--level",n(j).length+1)},[()=>n(y)&&_r(u())],fe),P(Dn,Fe)};Y(On,Dn=>{!d().readOnly&&(n(m)===pi||n(y)&&_r(u()))&&Dn(Jt)}),dr(N(On,2),1,()=>function(Dn,cn){var Fe=Object.keys(Dn);return cn&&cn.offset!==0?Mv(Fe,cn.selectionStartIndex,cn.selectionItemsCount,cn.offset):Fe}(s(),n(b)),mr,(Dn,cn)=>{var Fe=Ft(),pn=fe(()=>rv(a(),n(cn))),dt=fe(()=>Oo(c())?c().properties[n(cn)]:void 0),Qt=fe(()=>Oo(l())?l().properties[n(cn)]:void 0),bn=fe(()=>n(j).concat(n(cn))),zn=fe(()=>Qv(d().getJson(),u(),n(bn))),wn=Ne(Fe),In=fe(()=>Oo(i())?i().properties[n(cn)]:void 0);Du(wn,{get value(){return s()[n(cn)]},get pointer(){return n(pn)},get state(){return n(In)},get validationErrors(){return n(Qt)},get searchResults(){return n(dt)},get selection(){return n(zn)},get context(){return d()},onDragSelectionStart:G,$$slots:{identifier:(Qn,Or)=>{var tr,pr=Ay(),br=A(pr),vr=fe(()=>{return Wn=n(dt),(nr=Nv(Wn)?Wn.searchResults.filter(le=>le.field===So.key):void 0)&&nr.length>0?nr:void 0;var Wn,nr});(function(Wn,nr){lt(nr,!1);var le=M(void 0,!0),Nt=M(void 0,!0),Un=v(nr,"pointer",9),K=v(nr,"key",9),xe=v(nr,"selection",9),st=v(nr,"searchResultItems",9),Ct=v(nr,"onUpdateKey",9),rt=v(nr,"context",9),qt=M(void 0,!0);function tn(Dt){n(Nt)||rt().readOnly||(Dt.preventDefault(),rt().onSelect(Ad(n(qt))))}function Pt(Dt,hn){var Ut=Ct()(K(),rt().normalization.unescapeValue(Dt)),rr=on(n(qt)).concat(Ut);rt().onSelect(hn===Aa.nextInside?Yt(rr):da(rr)),hn!==Aa.self&&rt().focus()}function Rt(){rt().onSelect(da(n(qt))),rt().focus()}U(()=>E(Un()),()=>{f(qt,Io(Un()))}),U(()=>(E(xe()),n(qt)),()=>{f(le,kr(xe())&&Zt(xe().path,n(qt)))}),U(()=>(n(le),E(xe())),()=>{f(Nt,n(le)&&Jr(xe()))}),ln(),pt(!0);var ot=ly(),at=Ne(ot),un=Dt=>{var hn=fe(()=>rt().normalization.escapeValue(K())),Ut=fe(()=>Jr(xe())?xe().initialValue:void 0);Ph(Dt,{get value(){return n(hn)},get initialValue(){return n(Ut)},label:"Edit key",shortText:!0,onChange:Pt,onCancel:Rt,get onFind(){return rt().onFind}})},St=Dt=>{var hn,Ut=iy(),rr=A(Ut),D=ke=>{var $t=fe(()=>rt().normalization.escapeValue(K()));Nh(ke,{get text(){return n($t)},get searchResultItems(){return st()}})},X=ke=>{var $t=Lr();we(rn=>gt($t,rn),[()=>mc(rt().normalization.escapeValue(K()))],fe),P(ke,$t)};Y(rr,ke=>{st()?ke(D):ke(X,!1)}),we(()=>hn=Ot(Ut,1,"jse-key svelte-2iqnqn",null,hn,{"jse-empty":K()===""})),se("dblclick",Ut,tn),P(Dt,Ut)};Y(at,Dt=>{!rt().readOnly&&n(Nt)?Dt(un):Dt(St,!1)});var kn=N(at,2),nn=Dt=>{ja(Dt,{selected:!0,get onContextMenu(){return rt().onContextMenu}})};Y(kn,Dt=>{rt().readOnly||!n(le)||n(Nt)||Dt(nn)}),P(Wn,ot),ct()})(br,{get pointer(){return n(pn)},get key(){return n(cn)},get selection(){return n(zn)},get searchResultItems(){return n(vr)},get context(){return d()},onUpdateKey:T}),we(Wn=>tr=Ot(pr,1,"jse-key-outer svelte-wovgt4",null,tr,{"jse-selected-key":Wn}),[()=>kr(n(zn))&&Zt(n(zn).path,n(bn))],fe),P(Qn,pr)}}}),P(Dn,Fe)});var Bt=N(Mn,2),fn=N(A(Bt),2),sr=Dn=>{var cn=Py();se("click",cn,Me),P(Dn,cn)};Y(fn,Dn=>{n(o)||Dn(sr)}),P(Ye,Vt)};Y(Tt,Ye=>{n(x)&&Ye(an)}),se("click",et,$),P(Ke,W)},je=Ke=>{var W=Ny(),V=A(W),R=A(V);ur(R,t,"identifier",{},null);var et=N(R,2),kt=ze=>{P(ze,Iy())};Y(et,ze=>{n(o)||ze(kt)});var tt=N(et,2),Xe=A(tt),De=fe(()=>n(y)?u():void 0),Ie=fe(()=>{return ze=c(),(mt=Nv(ze)?ze.searchResults.filter(nt=>nt.field===So.value):void 0)&&mt.length>0?mt:void 0;var ze,mt});eg(Xe,{get path(){return n(j)},get value(){return s()},get enforceString(){return n(S)},get selection(){return n(De)},get searchResultItems(){return n(Ie)},get context(){return d()}});var xt=N(tt,2),It=ze=>{var mt=qy();ja(A(mt),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),P(ze,mt)};Y(xt,ze=>{!d().readOnly&&n(y)&&u()&&(En(u())||Jn(u()))&&!Jr(u())&&Zt(Qe(u()),n(j))&&ze(It)});var Be=N(V,2),be=ze=>{qs(ze,{get validationError(){return n(C)},onExpand:_})};Y(Be,ze=>{n(C)&&ze(be)});var Ue=N(Be,2),ut=ze=>{var mt=Ty();se("click",mt,Me),P(ze,mt)};Y(Ue,ze=>{n(o)||ze(ut)}),P(Ke,W)};Y(ae,Ke=>{yn(s())?Ke(I):Ke(je,!1)},!0),P(te,q)};Y(Ze,te=>{Array.isArray(s())?te(re):te(ie,!1)});var Ee=N(Ze,2),At=te=>{var q,ae=Dy();vn(ae,"title",Hc);var I=A(ae),je=fe(()=>n(y)&&co(u()));ja(I,{insert:!0,get selected(){return n(je)},onContextMenu:ve}),we(Ke=>q=Ot(ae,1,"jse-insert-area jse-after svelte-wovgt4",null,q,{"jse-hovered":n(m)===Jc,"jse-selected":Ke}),[()=>n(y)&&co(u())],fe),P(te,ae)};Y(Ee,te=>{!d().readOnly&&(n(m)===Jc||n(y)&&co(u()))&&te(At)}),we((te,q,ae)=>{me=Ot(Ce,1,Da(te),"svelte-wovgt4",me,{"jse-root":n(o),"jse-selected":q,"jse-selected-value":ae,"jse-readonly":d().readOnly,"jse-hovered":n(m)===_v}),vn(Ce,"data-path",n(r)),vn(Ce,"aria-selected",n(y)),Ps(Ce,"--level",n(j).length)},[()=>ri("jse-json-node",{"jse-expanded":n(x)},d().onClassName(n(j),s())),()=>n(y)&&Jn(u()),()=>n(y)&&En(u())],fe),se("mousedown",Ce,function(te){if((te.buttons===1||te.buttons===2)&&!((q=te.target).nodeName==="DIV"&&q.contentEditable==="true"||te.buttons===1&&jh(te.target,"BUTTON"))){var q;te.stopPropagation(),te.preventDefault(),d().focus(),document.addEventListener("mousemove",z,!0),document.addEventListener("mouseup",ne);var ae=Vc(te.target),I=d().getJson(),je=d().getDocumentState();if(!u()||ae===_n.after||ae===_n.inside||u().type!==ae&&u().type!==_n.multi||!Di(I,u(),n(j)))if(Hn(Hn().selecting=!0),Hn(Hn().selectionAnchor=n(j)),Hn(Hn().selectionAnchorType=ae),Hn(Hn().selectionFocus=n(j)),te.shiftKey){var Ke=d().getSelection();Ke&&d().onSelect(Dr(Ka(Ke),n(j)))}else if(ae===_n.multi)if(n(o)&&te.target.hasAttribute("data-path")){var W=Ht(zh(s(),je));d().onSelect(Au(W))}else d().onSelect(Dr(n(j),n(j)));else I!==void 0&&d().onSelect(Yv(ae,n(j)));else te.button===0&&h()(te)}}),se("mousemove",Ce,function(te){if(Hn().selecting){te.preventDefault(),te.stopPropagation(),Hn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var q=Vc(te.target);Zt(n(j),Hn().selectionFocus)&&q===Hn().selectionAnchorType||(Hn(Hn().selectionFocus=n(j)),Hn(Hn().selectionAnchorType=q),d().onSelect(Dr(Hn().selectionAnchor||Hn().selectionFocus,Hn().selectionFocus)))}}),se("mouseover",Ce,function(te){Hn().selecting||Hn().dragging||(te.stopPropagation(),Sa(te.target,"data-type","selectable-value")?f(m,_v):Sa(te.target,"data-type","selectable-key")?f(m,void 0):Sa(te.target,"data-type","insert-selection-area-inside")?f(m,pi):Sa(te.target,"data-type","insert-selection-area-after")&&f(m,Jc),clearTimeout(g))}),se("mouseout",Ce,function(te){te.stopPropagation(),g=window.setTimeout(()=>f(m,void 0))}),P(e,Ce),ct()}var By={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Ly={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},vf={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},Fy={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};jt(`/* over all fonts, sizes, and colors */
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
}`);var Vy=F('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>',1),Wy=F('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');function Uu(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Pm(r,o)}function tg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=Je(e,t);if(wr(a)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=function(h,p){return function(m,g){var b=Je(m,h),j=Je(g,h);return b===void 0?p:j===void 0?-p:typeof b!="string"&&typeof j!="string"?b>j?p:b<j?-p:0:p*Uu(b,j)}}(l,c),d=Je(s,i);return[{op:"replace",path:Et(i),value:d.slice(0).sort(u)}]}(e,t,r,o)}if(yn(a))return function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Je(s,i),u=Object.keys(c).slice();u.sort((h,p)=>l*Uu(h,p));var d={};return u.forEach(h=>d[h]=c[h]),[{op:"replace",path:Et(i),value:d}]}(e,t,o);throw new Error("Cannot sort: no array or object")}jt(`/* over all fonts, sizes, and colors */
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
}`);var Hy=F('<button type="button"> </button>'),Jy=F('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>'),Ky=F('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');function Yy(e,t){lt(t,!1);var r=v(t,"items",9),o=v(t,"selectedItem",9),a=v(t,"onSelect",9);pt(!0);var s=Ky(),i=A(s);dr(i,1,()=>uh(r(),100),u=>u,(u,d)=>{var h,p=Hy(),m=A(p);we((g,b)=>{h=Ot(p,1,"jse-navigation-bar-dropdown-item svelte-2nnd2m",null,h,{"jse-selected":n(d)===o()}),vn(p,"title",g),gt(m,b)},[()=>n(d).toString(),()=>_i(n(d).toString(),30)],fe),se("click",p,bo(()=>a()(n(d)))),P(u,p)});var l=N(i,2),c=u=>{var d=Jy();vn(d,"title","Limited to ".concat(100," items")),P(u,d)};Y(l,u=>{r().length>100&&u(c)}),P(e,s),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Qy=F('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>'),Xy=F('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button"><!></button> <!></div>');function ff(e,t){lt(t,!1);var r,o=M(void 0,!0),a=M(void 0,!0),{openAbsolutePopup:s,closeAbsolutePopup:i}=Ba("absolute-popup"),l=v(t,"path",9),c=v(t,"index",9),u=v(t,"onSelect",9),d=v(t,"getItems",9),h=M(void 0,!0),p=M(!1,!0);function m(O){i(r),u()(n(o).concat(O))}U(()=>(E(l()),E(c())),()=>{f(o,l().slice(0,c()))}),U(()=>(E(l()),E(c())),()=>{f(a,l()[c()])}),ln(),pt(!0);var g,b=Xy(),j=A(b);en(A(j),{data:bp});var x=N(j,2),S=O=>{var C=Qy(),y=A(C);we(()=>gt(y,n(a))),se("click",C,()=>m(n(a))),P(O,C)};Y(x,O=>{n(a)!==void 0&&O(S)}),Yn(b,O=>f(h,O),()=>n(h)),we(()=>g=Ot(j,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1",null,g,{"jse-open":n(p)})),se("click",j,function(){if(n(h)){f(p,!0);var O={items:d()(n(o)),selectedItem:n(a),onSelect:m};r=s(Yy,O,{anchor:n(h),closeOnOuterClick:!0,onClose:()=>{f(p,!1)}})}}),P(e,b),ct()}function Td(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}jt(`/* over all fonts, sizes, and colors */
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
}`);var Gy=F('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>'),Zy=F('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>'),e1=F('<div><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function t1(e,t){lt(t,!1);var r=M(),o=Ba("absolute-popup"),a=v(t,"path",8),s=v(t,"pathParser",8),i=v(t,"onChange",8),l=v(t,"onClose",8),c=v(t,"onError",8),u=v(t,"pathExists",8),d=M(),h=M(),p=M(!1),m=void 0,g=M(!1);function b(){n(d).focus()}function j(ne){try{var Q=s().parse(ne);return function(B){if(!u()(B))throw new Error("Path does not exist in current document")}(Q),{path:Q,error:void 0}}catch(B){return{path:void 0,error:B}}}qr(()=>{b()}),uo(()=>{clearTimeout(m)}),U(()=>(E(s()),E(a())),()=>{f(h,s().stringify(a()))}),U(()=>(n(p),n(h)),()=>{f(r,n(p)?j(n(h)).error:void 0)}),ln(),pt();var x,S=e1(),O=A(S);Yn(O,ne=>f(d,ne),()=>n(d));var C=N(O,2),y=ne=>{var Q=Gy();en(A(Q),{data:Xa}),Br(Q,(B,G)=>Fs==null?void 0:Fs(B,G),()=>ge({text:String(n(r)||"")},o)),P(ne,Q)};Y(C,ne=>{n(r)&&ne(y)});var $=N(C,2),_=ne=>{P(ne,Zy())};Y($,ne=>{n(g)&&ne(_)});var T,z=N($,2);en(A(z),{data:wa}),we(()=>{x=Ot(S,1,"jse-navigation-bar-path-editor svelte-zc2wx7",null,x,{error:n(r)}),Za(O,n(h)),T=Ot(z,1,"jse-navigation-bar-copy svelte-zc2wx7",null,T,{copied:n(g)})}),se("keydown",O,bo(function(ne){var Q=ca(ne);if(Q==="Escape"&&(ne.preventDefault(),l()()),Q==="Enter"){ne.preventDefault(),f(p,!0);var B=j(n(h));B.path!==void 0?i()(B.path):c()(B.error)}})),se("input",O,function(ne){f(h,ne.currentTarget.value)}),se("click",z,function(){Td(n(h)),f(g,!0),m=window.setTimeout(()=>f(g,!1),1e3),b()}),P(e,S),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var n1=F("<!> <!>",1),r1=F('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');function o1(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=Sr("jsoneditor:NavigationBar"),s=v(t,"json",9),i=v(t,"selection",9),l=v(t,"onSelect",9),c=v(t,"onError",9),u=v(t,"pathParser",9),d=M(void 0,!0),h=M(!1,!0);function p(Q){a("get items for path",Q);var B=Je(s(),Q);if(Array.isArray(B))return xp(0,B.length).map(String);if(yn(B)){var G=Object.keys(B).slice(0);return G.sort(Uu),G}return[]}function m(Q){return ka(s(),Q)}function g(Q){a("select path",JSON.stringify(Q)),l()(Dr(Q,Q))}function b(){f(h,!1)}function j(Q){b(),g(Q)}U(()=>(E(i()),Qe),()=>{f(r,i()?Qe(i()):[])}),U(()=>(E(s()),n(r)),()=>{f(o,gr(Je(s(),n(r))))}),U(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(d)&&n(d).scrollTo){var Q=n(d).scrollWidth-n(d).clientWidth;Q>0&&(a("scrollTo ",Q),n(d).scrollTo({left:Q,behavior:"smooth"}))}})}),ln(),pt(!0);var x=r1(),S=A(x),O=Q=>{var B=n1(),G=Ne(B);dr(G,1,()=>n(r),mr,(de,Me,ue)=>{ff(de,{getItems:p,get path(){return n(r)},index:ue,onSelect:g})});var pe=N(G,2),Z=de=>{ff(de,{getItems:p,get path(){return n(r)},get index(){return n(r).length},onSelect:g})};Y(pe,de=>{n(o)&&de(Z)}),P(Q,B)},C=Q=>{t1(Q,{get path(){return n(r)},onClose:b,onChange:j,get onError(){return c()},pathExists:m,get pathParser(){return u()}})};Y(S,Q=>{n(h)?Q(C,!1):Q(O)});var y,$=N(S,2),_=A($),T=A(_),z=N(_,2),ne=fe(()=>n(h)?Cm:Sm);en(z,{get data(){return n(ne)}}),Yn(x,Q=>f(d,Q),()=>n(d)),we(Q=>{y=Ot($,1,"jse-navigation-bar-edit svelte-xs03gj",null,y,{flex:!n(h),editing:n(h)}),vn($,"title",n(h)?"Cancel editing the selected path":"Edit the selected path"),gt(T,Q)},[()=>gr(s())||n(h)?" ":"Navigation bar"],fe),se("click",$,function(){f(h,!n(h))}),P(e,x),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var a1=F('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),s1=F('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>'),i1=F('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"></label> <div> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function ng(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=Sr("jsoneditor:SearchBox"),i=v(t,"json",9),l=v(t,"documentState",9),c=v(t,"parser",9),u=v(t,"showSearch",9),d=v(t,"showReplace",13),h=v(t,"readOnly",9),p=v(t,"columns",9),m=v(t,"onSearch",9),g=v(t,"onFocus",9),b=v(t,"onPatch",9),j=v(t,"onClose",9),x=M("",!0),S="",O=M("",!0),C=M(!1,!0),y=M(void 0,!0),$=El(function(W){return Ee.apply(this,arguments)},300),_=El(function(W){return At.apply(this,arguments)},300);function T(){d(!d()&&!h())}function z(W){W.stopPropagation();var V=ca(W);V==="Enter"&&(W.preventDefault(),n(x)!==S?$.flush():ue()),V==="Shift+Enter"&&(W.preventDefault(),me()),V==="Ctrl+Enter"&&(W.preventDefault(),d()?G():ue()),V==="Ctrl+H"&&(W.preventDefault(),T()),V==="Escape"&&(W.preventDefault(),ae())}function ne(W){ca(W)==="Enter"&&(W.preventDefault(),W.stopPropagation(),G())}function Q(){return B.apply(this,arguments)}function B(){return(B=wt(function*(){ar(),yield $.flush()})).apply(this,arguments)}function G(){return pe.apply(this,arguments)}function pe(){return(pe=wt(function*(){var W;if(!h()){var V=(W=n(y))===null||W===void 0?void 0:W.activeItem;if(s("handleReplace",{replaceText:n(O),activeItem:V}),n(y)&&V&&i()!==void 0){f(y,ge(ge({},Xv(n(y))),{},{activeIndex:n(o)}));var{operations:R,newSelection:et}=N0(i(),l(),n(O),V,c());b()(R,(kt,tt)=>({state:tt,selection:et})),ar(),yield _.flush(),yield Ze()}}})).apply(this,arguments)}function Z(){return de.apply(this,arguments)}function de(){return(de=wt(function*(){if(!h()){s("handleReplaceAll",{text:n(x),replaceText:n(O)});var{operations:W,newSelection:V}=function(R,et,kt,tt,Xe){for(var De=Gv(kt,R,{maxResults:1/0}),Ie=[],xt=0;xt<De.length;xt++){var It=De[xt-1],Be=De[xt];xt!==0&&Be.field===It.field&&Zt(Be.path,It.path)?Ht(Ie).items.push(Be):Ie.push({path:Be.path,field:Be.field,items:[Be]})}Ie.sort((ut,ze)=>ut.field!==ze.field?ut.field===So.key?1:-1:ze.path.length-ut.path.length);var be,Ue=[];return Ie.forEach(ut=>{var{field:ze,path:mt,items:nt}=ut;if(ze===So.key){var Le=on(mt),H=Je(R,Le),_e=Ht(mt),He=el(Le,Object.keys(H),_e,ef(_e,tt,nt));Ue=Ue.concat(He),be=Ls(R,He)}else{if(ze!==So.value)throw new Error("Cannot replace: unknown type of search result field ".concat(ze));var Tt=Je(R,mt);if(Tt===void 0)throw new Error("Cannot replace: path not found ".concat(Et(mt)));var an=typeof Tt=="string"?Tt:String(Tt),Ye=aa(R,et,mt),Vt=ef(an,tt,nt),Mn=[{op:"replace",path:Et(mt),value:Ye?Vt:ti(Vt,Xe)}];Ue=Ue.concat(Mn),be=Ls(R,Mn)}}),{operations:Ue,newSelection:be}}(i(),l(),n(x),n(O),c());b()(W,(R,et)=>({state:et,selection:V})),yield Ze()}})).apply(this,arguments)}function Me(W){W.select()}function ue(){return ve.apply(this,arguments)}function ve(){return(ve=wt(function*(){f(y,n(y)?Xv(n(y)):void 0),yield Ze()})).apply(this,arguments)}function me(){return Ce.apply(this,arguments)}function Ce(){return Ce=wt(function*(){f(y,n(y)?function(W){var V=W.activeIndex>0?W.activeIndex-1:W.items.length-1,R=W.items[V],et=W.items.map((kt,tt)=>ge(ge({},kt),{},{active:tt===V}));return ge(ge({},W),{},{items:et,activeItem:R,activeIndex:V})}(n(y)):void 0),yield Ze()}),Ce.apply(this,arguments)}function Ze(){return re.apply(this,arguments)}function re(){return(re=wt(function*(){var W;s("handleFocus",n(y));var V=(W=n(y))===null||W===void 0?void 0:W.activeItem;V&&i()!==void 0&&(yield g()(V.path))})).apply(this,arguments)}function ie(){return ie=wt(function*(W){yield te(W,n(x),i())}),ie.apply(this,arguments)}function Ee(){return Ee=wt(function*(W){yield te(u(),W,i()),yield Ze()}),Ee.apply(this,arguments)}function At(){return At=wt(function*(W){yield te(u(),n(x),W)}),At.apply(this,arguments)}function te(W,V,R){return q.apply(this,arguments)}function q(){return q=wt(function*(W,V,R){return W?(s("applySearch",{showSearch:W,text:V}),V===""?(s("clearing search result"),n(y)!==void 0&&f(y,void 0),Promise.resolve()):(S=V,f(C,!0),new Promise(et=>{setTimeout(()=>{var kt=Gv(V,R,{maxResults:Wc,columns:p()});f(y,function(tt,Xe){var De=Xe!=null&&Xe.activeItem?tf(Xe.activeItem):void 0,Ie=tt.findIndex(Be=>Zt(De,tf(Be))),xt=Ie!==-1?Ie:(Xe==null?void 0:Xe.activeIndex)!==void 0&&(Xe==null?void 0:Xe.activeIndex)<tt.length?Xe==null?void 0:Xe.activeIndex:tt.length>0?0:-1,It=tt.map((Be,be)=>ge(ge({},Be),{},{active:be===xt}));return{items:It,activeItem:It[xt],activeIndex:xt}}(kt,n(y))),f(C,!1),et()})}))):(n(y)&&f(y,void 0),Promise.resolve())}),q.apply(this,arguments)}function ae(){s("handleClose"),$.cancel(),_.cancel(),te(!1,n(x),i()),j()()}U(()=>n(y),()=>{var W;f(r,((W=n(y))===null||W===void 0||(W=W.items)===null||W===void 0?void 0:W.length)||0)}),U(()=>n(y),()=>{var W;f(o,((W=n(y))===null||W===void 0?void 0:W.activeIndex)||0)}),U(()=>(n(r),Wc),()=>{f(a,n(r)>=Wc?"".concat(999,"+"):String(n(r)))}),U(()=>(E(m()),n(y)),()=>{m()(n(y))}),U(()=>E(u()),()=>{(function(W){ie.apply(this,arguments)})(u())}),U(()=>n(x),()=>{$(n(x))}),U(()=>E(i()),()=>{_(i())}),ln(),pt(!0);var I=Ft(),je=Ne(I),Ke=W=>{var V=i1(),R=A(V),et=A(R),kt=_e=>{var He=a1(),Tt=A(He),an=fe(()=>d()?_a:Ei);en(Tt,{get data(){return n(an)}}),se("click",He,T),P(_e,He)};Y(et,_e=>{h()||_e(kt)});var tt=A(N(et,2)),Xe=A(tt),De=A(Xe),Ie=_e=>{en(_e,{data:Mm,spin:!0})},xt=_e=>{en(_e,{data:ac})};Y(De,_e=>{n(C)?_e(Ie):_e(xt,!1)});var It=N(Xe,2),Be=A(It);Ar(()=>Dl(Be,()=>n(x),_e=>f(x,_e))),Br(Be,_e=>Me==null?void 0:Me(_e)),Ar(()=>se("paste",Be,Q));var be,Ue=N(It,2),ut=A(Ue),ze=N(Ue,2);en(A(ze),{data:zm});var mt=N(ze,2);en(A(mt),{data:Em});var nt=N(mt,2);en(A(nt),{data:oc});var Le=N(tt,2),H=_e=>{var He=s1(),Tt=A(He),an=N(Tt,2),Ye=N(an,2);Dl(Tt,()=>n(O),Vt=>f(O,Vt)),se("keydown",Tt,ne),se("click",an,G),se("click",Ye,Z),P(_e,He)};Y(Le,_e=>{d()&&!h()&&_e(H)}),we(()=>{var _e,He;be=Ot(Ue,1,"jse-search-count svelte-1mxl2uo",null,be,{"jse-visible":n(x)!==""}),gt(ut,"".concat((_e=n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"")!==null&&_e!==void 0?_e:"").concat((He=n(a))!==null&&He!==void 0?He:""))}),se("click",ze,ue),se("click",mt,me),se("click",nt,ae),se("keydown",R,z),P(W,V)};Y(je,W=>{u()&&W(Ke)}),P(e,I),ct()}var Fi=Symbol("path");function l1(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(s,i,l){if(s.length<i)s.forEach(l);else for(var c=i>1?(s.length-1)/(i-1):s.length,u=0;u<i;u++){var d=Math.floor(u*c);l(s[d],d,s)}}(e,r,s=>{yn(s)?rg(s,o,t):o[Fi]=!0});var a=[];return Fi in o&&a.push([]),og(o,[],a,t),a}function rg(e,t,r){for(var o in e){var a=e[o],s=t[o]||(t[o]={});yn(a)&&r?rg(a,s,r):s[Fi]===void 0&&(s[Fi]=!0)}}function og(e,t,r,o){for(var a in e){var s=t.concat(a),i=e[a];i&&i[Fi]===!0&&r.push(s),$r(i)&&o&&og(i,s,r,o)}}function c1(e,t,r,o,a,s){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=wr(r)?r.length:0,c=function(S,O){var C=Object.values(S);if(Rn(C))return O;var y=($,_)=>$+_;return C.reduce(y)/C.length}(o,a),u=e-i,d=t+2*i,h=S=>o[S]||a,p=0,m=s;m<u&&p<l;)m+=h(p),p++;p>0&&(m-=h(--p));for(var g=p,b=0;b<d&&g<l;)b+=h(g),g++;for(var j=0,x=g;x<l;x++)j+=h(x);return{startIndex:p,endIndex:g,startHeight:m,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:wr(r)?r.slice(p,g):[]}}function pf(e,t,r,o){for(var{rowIndex:a}=io(e,t),s=0,i=0;i<a;i++)s+=r[i]||o;return s}function io(e,t){var[r,...o]=e,a=parseInt(r,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(s=>ua(o,s))}}function Va(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function u1(e,t){var[r,o]=Bm(e,i=>hd(i.path[0])),a=Lm(r,d1),s=Fm(a,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var u=function(d,h){var p=io(d.path,h);return p.columnIndex!==-1?p.columnIndex:-1}(c,t);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:s}}function su(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>ko(r.path)+" "+r.message).join(", "),severity:Co.warning}}function d1(e){return parseInt(e.path[0],10)}function v1(e,t,r){var o=t.some(a=>function(s,i,l){if(!s)return!1;if(i.op==="replace"){var c=Io(i.path),{rowIndex:u,columnIndex:d}=io(c,l),h=l.findIndex(p=>Zt(p,s.path));if(u!==-1&&d!==-1&&d!==h)return!1}return!0}(e,a,r));return o?void 0:e}function hf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=[];return function o(a,s){$r(a)&&s.length<t&&Object.keys(a).forEach(i=>{o(a[i],s.concat(i))}),wr(a)&&r.push(s)}(e,[]),r}var Ur=Sr("jsoneditor:actions");function ag(e){return Bu.apply(this,arguments)}function Bu(){return Bu=wt(function*(e){var{json:t,selection:r,indentation:o,readOnly:a,parser:s,onPatch:i}=e;if(!a&&t!==void 0&&r&&Os(r)){var l=Mh(t,r,o,s);if(l!==void 0){Ur("cut",{selection:r,clipboard:l,indentation:o}),yield Td(l);var{operations:c,newSelection:u}=Ih(t,r);i(c,(d,h)=>({state:h,selection:u}))}}}),Bu.apply(this,arguments)}function sg(e){return Lu.apply(this,arguments)}function Lu(){return Lu=wt(function*(e){var{json:t,selection:r,indentation:o,parser:a}=e,s=Mh(t,r,o,a);s!==void 0&&(Ur("copy",{clipboard:s,indentation:o}),yield Td(s))}),Lu.apply(this,arguments)}function ig(e){var{clipboardText:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onChangeText:l,openRepairModal:c}=e;if(!a)try{u(t)}catch{c(t,h=>{Ur("repaired pasted text: ",h),u(h)})}function u(d){if(r!==void 0){var h=o||Yt([]),p=_h(r,h,d,s);Ur("paste",{pastedText:d,operations:p,ensureSelection:h}),i(p,(m,g)=>{var b=g;return p.filter(j=>(mp(j)||od(j))&&gr(j.value)).forEach(j=>{var x=na(r,j.path);b=ts(m,b,x)}),{state:b}})}else Ur("paste text",{pastedText:d}),l(t,(m,g)=>{if(m)return{state:ts(m,g,[])}})}}function lg(e){var{json:t,text:r,selection:o,keepSelection:a,readOnly:s,onChange:i,onPatch:l}=e;if(!s&&o){var c=t!==void 0&&(kr(o)||En(o))?Dr(o.path,o.path):o;if(Rn(Qe(o)))Ur("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:u,newSelection:d}=Ih(t,c);Ur("remove",{operations:u,selection:o,newSelection:d}),l(u,(h,p)=>({state:p,selection:a?o:d}))}}}function Gl(e){var{insertType:t,selectInside:r,initialValue:o,json:a,selection:s,readOnly:i,parser:l,onPatch:c,onReplaceJson:u}=e;if(!i){var d=function(b,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&b!==void 0){var S=j?Eh(j):[],O=Je(b,S);if(Array.isArray(O)&&!Rn(O)){var C=ta(O);return gr(C)?km(C,y=>Array.isArray(y)?[]:yn(y)?void 0:""):""}}return""}(a,s,t);if(a!==void 0){var h=l.stringify(d),p=_h(a,s,h,l);Ur("onInsert",{insertType:t,operations:p,newValue:d,data:h});var m=Ht(p.filter(b=>b.op==="add"||b.op==="replace"));c(p,(b,j,x)=>{if(m){var S=na(b,m.path);if(gr(d))return{state:mo(b,j,S,Md),selection:r?va(S):x};if(d===""){var O=Rn(S)?void 0:Je(b,on(S));return{state:mo(b,j,S,kl),selection:yn(O)?Ad(S,o):Fl(S,o)}}}}),Ur("after patch")}else{Ur("onInsert",{insertType:t,newValue:d});var g=[];u(d,(b,j)=>({state:ts(b,j,g),selection:gr(d)?va(g):Fl(g)}))}}}function cg(e){return Fu.apply(this,arguments)}function Fu(){return Fu=wt(function*(e){var{char:t,selectInside:r,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c,onSelect:u}=e;s||(kr(a)?u(ge(ge({},a),{},{edit:!0,initialValue:t})):t==="{"?Gl({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):t==="["?Gl({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c}):En(a)&&o!==void 0?gr(Je(o,a.path))||u(ge(ge({},a),{},{edit:!0,initialValue:t})):(Ur("onInsertValueWithCharacter",{char:t}),yield function(d){return Vu.apply(this,arguments)}({char:t,json:o,selection:a,readOnly:s,parser:i,onPatch:l,onReplaceJson:c})))}),Fu.apply(this,arguments)}function Vu(){return Vu=wt(function*(e){var{char:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onReplaceJson:l}=e;a||Gl({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:a,parser:s,onPatch:i,onReplaceJson:l})}),Vu.apply(this,arguments)}jt(`/* over all fonts, sizes, and colors */
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
}`);var f1=F('<div class="jse-json-preview svelte-1vjn89h"> </div>');function ug(e,t){lt(t,!1);var r=M(),o=M(),a=v(t,"text",8),s=v(t,"json",8),i=v(t,"indentation",8),l=v(t,"parser",8);U(()=>(E(s()),E(a())),()=>{f(r,s()!==void 0?{json:s()}:{text:a()||""})}),U(()=>(n(r),E(i()),E(l()),Eu),()=>{f(o,_i(Su(n(r),i(),l()),Eu))}),ln(),pt();var c=f1(),u=A(c);we(()=>gt(u,n(o))),P(e,c),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var p1=F('<button type="button"><!> <!></button>');function iu(e,t){lt(t,!1);var r=v(t,"item",8),o=v(t,"className",8,void 0),a=v(t,"onRequestClose",8);pt();var s=p1(),i=A(s),l=d=>{en(d,{get data(){return r().icon}})};Y(i,d=>{r().icon&&d(l)});var c=N(i,2),u=d=>{var h=Lr();we(()=>gt(h,r().text)),P(d,h)};Y(c,d=>{r().text&&d(u)}),we(d=>{Ot(s,1,Da(d),"svelte-1idfykj"),vn(s,"title",r().title),s.disabled=r().disabled||!1},[()=>ri("jse-context-menu-button",o(),r().className)],fe),se("click",s,d=>{a()(),r().onClick(d)}),P(e,s),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var h1=F('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>'),g1=F('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-11rxb2m"></ul></div></div>');jt(`/* over all fonts, sizes, and colors */
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
}`);var m1=F('<button type="button" slot="defaultItem"><!> </button>');function lu(e,t){lt(t,!1);var r=M(),o=v(t,"item",8),a=v(t,"className",8,void 0),s=v(t,"onRequestClose",8);U(()=>(E(o()),E(s())),()=>{f(r,o().items.map(i=>ge(ge({},i),{},{onClick:l=>{s()(),i.onClick(l)}})))}),ln(),pt(),function(i,l){lt(l,!1);var c=M(void 0,!0),u=v(l,"items",25,()=>[]),d=v(l,"title",9,void 0),h=v(l,"width",9,"120px"),p=M(!1,!0);function m(){f(p,!1)}function g(y){ca(y)==="Escape"&&(y.preventDefault(),f(p,!1))}qr(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),uo(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)}),U(()=>E(u()),()=>{f(c,u().every(y=>y.disabled===!0))}),ln(),pt(!0);var b=g1(),j=A(b);ur(j,l,"defaultItem",{},null);var x,S=N(j,2);en(A(S),{data:_a});var O,C=N(S,2);dr(A(C),5,u,mr,(y,$)=>{var _=h1(),T=A(_),z=A(T),ne=B=>{en(B,{get data(){return n($).icon}})};Y(z,B=>{n($).icon&&B(ne)});var Q=N(z);we(()=>{var B;vn(T,"title",n($).title),T.disabled=n($).disabled,Ot(T,1,Da(n($).className),"svelte-11rxb2m"),gt(Q," ".concat((B=n($).text)!==null&&B!==void 0?B:""))}),se("click",T,B=>n($).onClick(B)),P(y,_)}),we(()=>{var y;vn(b,"title",d()),x=Ot(S,1,"jse-open-dropdown svelte-11rxb2m",null,x,{"jse-visible":n(p)}),S.disabled=n(c),O=Ot(C,1,"jse-dropdown-items svelte-11rxb2m",null,O,{"jse-visible":n(p)}),vn(C,"style","width: ".concat((y=h())!==null&&y!==void 0?y:"",";"))}),se("click",S,function(){var y=n(p);setTimeout(()=>f(p,!y))}),se("click",b,m),P(i,b),ct()}(e,{get width(){return o().width},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=m1(),u=A(c),d=p=>{en(p,{get data(){return o().main.icon}})};Y(u,p=>{o().main.icon&&p(d)});var h=N(u);we(p=>{var m;Ot(c,1,Da(p),"svelte-1idfykj"),vn(c,"title",o().main.title),c.disabled=o().main.disabled||!1,gt(h," ".concat((m=o().main.text)!==null&&m!==void 0?m:""))},[()=>ri("jse-context-menu-button",a(),o().main.className)],fe),se("click",c,p=>{s()(),o().main.onClick(p)}),P(i,c)}}}),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var b1=F('<div class="jse-separator svelte-12z7bz1"></div>'),j1=F('<div class="jse-label svelte-12z7bz1"> </div>'),x1=F('<div class="jse-column svelte-12z7bz1"></div>'),y1=F('<div class="jse-separator svelte-12z7bz1"></div>'),w1=F('<div class="jse-row svelte-12z7bz1"></div>'),k1=F('<div class="jse-separator svelte-12z7bz1"></div>'),C1=F('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>'),S1=F('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');function dg(e,t){lt(t,!1);var r=v(t,"items",9),o=v(t,"onRequestClose",9),a=v(t,"tip",9),s=M(void 0,!0);qr(()=>{var p=Array.from(n(s).querySelectorAll("button")).find(m=>!m.disabled);p&&p.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(p){return console.error("Unknown type of context menu item",p),"???"}pt(!0);var c=S1(),u=A(c);dr(u,1,r,mr,(p,m)=>{var g=Ft(),b=Ne(g),j=S=>{iu(S,{get item(){return n(m)},get onRequestClose(){return o()}})},x=S=>{var O=Ft(),C=Ne(O),y=_=>{lu(_,{get item(){return n(m)},get onRequestClose(){return o()}})},$=_=>{var T=Ft(),z=Ne(T),ne=B=>{var G=w1();dr(G,5,()=>n(m).items,mr,(pe,Z)=>{var de=Ft(),Me=Ne(de),ue=me=>{iu(me,{get item(){return n(Z)},get onRequestClose(){return o()}})},ve=me=>{var Ce=Ft(),Ze=Ne(Ce),re=Ee=>{lu(Ee,{get item(){return n(Z)},get onRequestClose(){return o()}})},ie=Ee=>{var At=Ft(),te=Ne(At),q=I=>{var je=x1();dr(je,5,()=>n(Z).items,mr,(Ke,W)=>{var V=Ft(),R=Ne(V),et=tt=>{iu(tt,{className:"left",get item(){return n(W)},get onRequestClose(){return o()}})},kt=tt=>{var Xe=Ft(),De=Ne(Xe),Ie=It=>{lu(It,{className:"left",get item(){return n(W)},get onRequestClose(){return o()}})},xt=It=>{var Be=Ft(),be=Ne(Be),Ue=ze=>{P(ze,b1())},ut=ze=>{var mt=Ft(),nt=Ne(mt),Le=_e=>{var He=j1(),Tt=A(He);we(()=>gt(Tt,n(W).text)),P(_e,He)},H=_e=>{var He=Lr();we(Tt=>gt(He,Tt),[()=>l(n(W))],fe),P(_e,He)};Y(nt,_e=>{E0(n(W))?_e(Le):_e(H,!1)},!0),P(ze,mt)};Y(be,ze=>{wl(n(W))?ze(Ue):ze(ut,!1)},!0),P(It,Be)};Y(De,It=>{Yc(n(W))?It(Ie):It(xt,!1)},!0),P(tt,Xe)};Y(R,tt=>{Ci(n(W))?tt(et):tt(kt,!1)}),P(Ke,V)}),P(I,je)},ae=I=>{var je=Ft(),Ke=Ne(je),W=R=>{P(R,y1())},V=R=>{var et=Lr();we(kt=>gt(et,kt),[()=>l(n(Z))],fe),P(R,et)};Y(Ke,R=>{wl(n(Z))?R(W):R(V,!1)},!0),P(I,je)};Y(te,I=>{M0(n(Z))?I(q):I(ae,!1)},!0),P(Ee,At)};Y(Ze,Ee=>{Yc(n(Z))?Ee(re):Ee(ie,!1)},!0),P(me,Ce)};Y(Me,me=>{Ci(n(Z))?me(ue):me(ve,!1)}),P(pe,de)}),P(B,G)},Q=B=>{var G=Ft(),pe=Ne(G),Z=Me=>{P(Me,k1())},de=Me=>{var ue=Lr();we(ve=>gt(ue,ve),[()=>l(n(m))],fe),P(Me,ue)};Y(pe,Me=>{wl(n(m))?Me(Z):Me(de,!1)},!0),P(B,G)};Y(z,B=>{$0(n(m))?B(ne):B(Q,!1)},!0),P(_,T)};Y(C,_=>{Yc(n(m))?_(y):_($,!1)},!0),P(S,O)};Y(b,S=>{Ci(n(m))?S(j):S(x,!1)}),P(p,g)});var d=N(u,2),h=p=>{var m=C1(),g=A(m),b=A(g);en(A(b),{data:Om});var j=A(N(b,2));we(()=>gt(j,a())),P(p,m)};Y(d,p=>{a()&&p(h)}),Yn(c,p=>f(s,p),()=>n(s)),se("keydown",c,function(p){var m=ca(p),g=i[m];if(g&&p.target){p.preventDefault();var b=i0({allElements:Array.from(n(s).querySelectorAll("button:not([disabled])")),currentElement:p.target,direction:g,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});b&&b.focus()}}),P(e,c),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);F("<option> </option>");F("<select></select>");var hl,gl;function ml(e,t){return hl||(gl=new WeakMap,hl=new ResizeObserver(r=>{for(var o of r){var a=gl.get(o.target);a&&a(o.target)}})),gl.set(e,t),hl.observe(e),{destroy:()=>{gl.delete(e),hl.unobserve(e)}}}jt(`/* over all fonts, sizes, and colors */
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
}`);var O1=F("<!> <!>",1),z1=F('<div class="jse-search-box-background svelte-vrx1dr"></div>'),E1=F('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!>',1),$1=F('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"></label> <!>',1),M1=F('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>'),A1=F('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function Wu(e,t){lt(t,!1);var r=M(void 0,!0),o=Sr("jsoneditor:TreeMode"),a=typeof window>"u";o("isSSR:",a);var s=Ts(),i=Ts(),{openAbsolutePopup:l,closeAbsolutePopup:c}=Ba("absolute-popup"),u=M(void 0,!0),d=M(void 0,!0),h=M(void 0,!0),p=!1,m=Qh(),g=v(t,"readOnly",9),b=v(t,"externalContent",9),j=v(t,"externalSelection",9),x=v(t,"history",9),S=v(t,"mainMenuBar",9),O=v(t,"navigationBar",9),C=v(t,"escapeControlCharacters",9),y=v(t,"escapeUnicodeCharacters",9),$=v(t,"parser",9),_=v(t,"parseMemoizeOne",9),T=v(t,"validator",9),z=v(t,"validationParser",9),ne=v(t,"pathParser",9),Q=v(t,"indentation",9),B=v(t,"onError",9),G=v(t,"onChange",9),pe=v(t,"onChangeMode",9),Z=v(t,"onSelect",9),de=v(t,"onUndo",9),Me=v(t,"onRedo",9),ue=v(t,"onRenderValue",9),ve=v(t,"onRenderMenu",9),me=v(t,"onRenderContextMenu",9),Ce=v(t,"onClassName",9),Ze=v(t,"onFocus",9),re=v(t,"onBlur",9),ie=v(t,"onSortModal",9),Ee=v(t,"onTransformModal",9),At=v(t,"onJSONEditorModal",9),te=!1,q=M(!1,!0),ae=M(void 0,!0);Id({onMount:qr,onDestroy:uo,getWindow:()=>Xi(n(h)),hasFocus:()=>te&&document.hasFocus()||jd(n(h)),onFocus:()=>{p=!0,Ze()&&Ze()()},onBlur:()=>{p=!1,re()&&re()()}});var I=M(void 0,!0),je=M(void 0,!0),Ke=void 0,W=!1,V=M(Mu({json:n(I)}),!0),R=M(Ni(j())?j():void 0,!0);function et(w){f(R,w)}qr(()=>{if(n(R)){var w=Qe(n(R));f(V,mo(n(I),n(V),w,kl)),setTimeout(()=>St(w))}});var kt,tt=M(void 0,!0),Xe=M(void 0,!0),De=M(void 0,!0),Ie=M(!1,!0),xt=M(!1,!0);function It(w){f(De,(kt=w)?Th(n(I),kt.items):void 0)}function Be(w){return be.apply(this,arguments)}function be(){return(be=wt(function*(w){f(V,mo(n(I),n(V),w,kl)),yield ot(w)})).apply(this,arguments)}function Ue(){f(Ie,!1),f(xt,!1),Lt()}function ut(w){o("select validation error",w),f(R,Yt(w.path)),ot(w.path)}function ze(w){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wv;o("expand"),f(V,mo(n(I),n(V),w,L))}function mt(w,L){f(V,Bv(n(I),n(V),w,L)),n(R)&&function(oe,qe){return ua(Qe(oe),qe)&&(Qe(oe).length>qe.length||_r(oe))}(n(R),w)&&f(R,void 0)}var nt=M(!1,!0),Le=M([],!0),H=M(void 0,!0),_e=$i(Xh);function He(w,L,oe,qe){Es(()=>{var $e;try{$e=_e(w,L,oe,qe)}catch(Se){$e=[{path:[],message:"Failed to validate: "+Se.message,severity:Co.warning}]}Zt($e,n(Le))||(o("validationErrors changed:",$e),f(Le,$e),f(H,function(Se,Oe){var Ve;return Oe.forEach(vt=>{Ve=df(Se,Ve,vt.path,(sn,Wt)=>ge(ge({},Wt),{},{validationError:vt}))}),Oe.forEach(vt=>{for(var sn=vt.path;sn.length>0;)sn=on(sn),Ve=df(Se,Ve,sn,(Wt,Pn)=>Pn.validationError?Pn:ge(ge({},Pn),{},{validationError:{isChildError:!0,path:sn,message:"Contains invalid data",severity:Co.warning}}))}),Ve}(w,n(Le))))},$e=>o("validationErrors updated in ".concat($e," ms")))}function Tt(){return o("validate"),Ke?{parseError:Ke,isRepairable:!1}:(He(n(I),T(),$(),z()),Rn(n(Le))?void 0:{validationErrors:n(Le)})}function an(){return n(I)}function Ye(){return n(V)}function Vt(){return n(R)}function Mn(w){o("applyExternalContent",{updatedContent:w}),Ri(w)?function(L){if(L!==void 0){var oe=!Zt(n(I),L);if(o("update external json",{isChanged:oe,currentlyText:n(I)===void 0}),!!oe){var qe={documentState:n(V),selection:n(R),json:n(I),text:n(je),textIsRepaired:n(nt)};f(I,L),f(V,no(L,n(V))),On(n(I)),f(je,void 0),f(nt,!1),Ke=void 0,Jt(n(I)),Bt(qe)}}}(w.json):Pi(w)&&function(L){if(!(L===void 0||Ri(b()))){var oe=L!==n(je);if(o("update external text",{isChanged:oe}),!!oe){var qe={documentState:n(V),selection:n(R),json:n(I),text:n(je),textIsRepaired:n(nt)};try{f(I,_()(L)),f(V,no(n(I),n(V))),On(n(I)),f(je,L),f(nt,!1),Ke=void 0}catch($e){try{f(I,_()(qo(L))),f(V,no(n(I),n(V))),On(n(I)),f(je,L),f(nt,!0),Ke=void 0,Jt(n(I))}catch{f(I,void 0),f(V,void 0),f(je,b().text),f(nt,!1),Ke=n(je)!==void 0&&n(je)!==""?Us(n(je),$e.message||String($e)):void 0}}Jt(n(I)),Bt(qe)}}}(w.text)}function On(w){W||(W=!0,f(V,ts(w,n(V),[])))}function Jt(w){n(R)&&(ka(w,Ka(n(R)))&&ka(w,Qe(n(R)))||(o("clearing selection: path does not exist anymore",n(R)),f(R,hs(w,n(V)))))}function Bt(w){if(w.json!==void 0||w.text!==void 0){var L=n(I)!==void 0&&w.json!==void 0;x().add({type:"tree",undo:{patch:L?[{op:"replace",path:"",value:w.json}]:void 0,json:w.json,text:w.text,documentState:w.documentState,textIsRepaired:w.textIsRepaired,selection:_o(w.selection),sortedColumn:void 0},redo:{patch:L?[{op:"replace",path:"",value:n(I)}]:void 0,json:n(I),text:n(je),documentState:n(V),textIsRepaired:n(nt),selection:_o(n(R)),sortedColumn:void 0}})}}function fn(w,L){var oe;if(o("patch",w,L),n(I)===void 0)throw new Error("Cannot apply patch: no JSON");var qe=n(I),$e={json:void 0,text:n(je),documentState:n(V),selection:_o(n(R)),textIsRepaired:n(nt),sortedColumn:void 0},Se=qh(n(I),w),Oe=Sh(n(I),n(V),w),Ve=(oe=Ls(n(I),w))!==null&&oe!==void 0?oe:n(R),vt=typeof L=="function"?L(Oe.json,Oe.documentState,Ve):void 0;return f(I,(vt==null?void 0:vt.json)!==void 0?vt.json:Oe.json),f(V,(vt==null?void 0:vt.state)!==void 0?vt.state:Oe.documentState),f(R,(vt==null?void 0:vt.selection)!==void 0?vt.selection:Ve),f(je,void 0),f(nt,!1),f(Xe,void 0),Ke=void 0,Jt(n(I)),x().add({type:"tree",undo:ge({patch:Se},$e),redo:{patch:w,json:void 0,text:n(je),documentState:n(V),selection:_o(n(R)),sortedColumn:void 0,textIsRepaired:n(nt)}}),{json:n(I),previousJson:qe,undo:Se,redo:w}}function sr(){!g()&&n(R)&&f(R,Ad(Qe(n(R))))}function Dn(){if(!g()&&n(R)){var w=Qe(n(R)),L=Je(n(I),w);gr(L)?function(oe,qe){o("openJSONEditorModal",{path:oe,value:qe}),te=!0,At()({content:{json:qe},path:oe,onPatch:n(gn).onPatch,onClose:()=>{te=!1,setTimeout(Lt)}})}(w,L):f(R,Fl(w))}}function cn(){if(!g()&&En(n(R))){var w=Qe(n(R)),L=Et(w),oe=Je(n(I),w),qe=!aa(n(I),n(V),w),$e=qe?String(oe):ti(String(oe),$());o("handleToggleEnforceString",{enforceString:qe,value:oe,updatedValue:$e}),nn([{op:"replace",path:L,value:$e}],(Se,Oe)=>({state:bc(n(I),Oe,w,{type:"value",enforceString:qe})}))}}function Fe(){return n(nt)&&n(I)!==void 0&&Dt(n(I)),n(I)!==void 0?{json:n(I)}:{text:n(je)||""}}function pn(){return dt.apply(this,arguments)}function dt(){return dt=wt(function*(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield ag({json:n(I),selection:n(R),indentation:w?Q():void 0,readOnly:g(),parser:$(),onPatch:nn})}),dt.apply(this,arguments)}function Qt(){return bn.apply(this,arguments)}function bn(){return bn=wt(function*(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(I)!==void 0&&(yield sg({json:n(I),selection:n(R),indentation:w?Q():void 0,parser:$()}))}),bn.apply(this,arguments)}function zn(w){var L;w.preventDefault(),Qn((L=w.clipboardData)===null||L===void 0?void 0:L.getData("text/plain"))}function wn(){return In.apply(this,arguments)}function In(){return(In=wt(function*(){try{Qn(yield navigator.clipboard.readText())}catch(w){console.error(w),f(q,!0)}})).apply(this,arguments)}function Qn(w){w!==void 0&&ig({clipboardText:w,json:n(I),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onChangeText:hn,openRepairModal:Or})}function Or(w,L){f(ae,{text:w,onParse:oe=>gc(oe,qe=>Qi(qe,$())),onRepair:vh,onApply:L,onClose:Lt})}function tr(){lg({json:n(I),text:n(je),selection:n(R),keepSelection:!1,readOnly:g(),onChange:G(),onPatch:nn})}function pr(){!g()&&n(I)!==void 0&&n(R)&&Os&&!Rn(Qe(n(R)))&&(o("duplicate",{selection:n(R)}),nn(Rh(n(I),Pa(n(I),n(R)))))}function br(){if(!g()&&n(R)&&(Jn(n(R))||En(n(R)))&&!Rn(Qe(n(R)))){o("extract",{selection:n(R)});var w=function(L,oe){if(En(oe))return[{op:"move",from:Et(oe.path),path:""}];if(!Jn(oe))throw new Error("Cannot create extract operations: parent must be an Object or Array");var qe=on(oe.focusPath),$e=Je(L,qe);if(wr($e)){var Se=Pa(L,oe).map(Ve=>{var vt=Pr(Ht(Ve));return $e[vt]});return[{op:"replace",path:"",value:Se}]}if($r($e)){var Oe={};return Pa(L,oe).forEach(Ve=>{var vt=String(Ht(Ve));Oe[vt]=$e[vt]}),[{op:"replace",path:"",value:Oe}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(oe))}(n(I),n(R));nn(w,(L,oe)=>{if(gr(L))return{state:Xc(L,oe,[])}})}}function vr(w){Gl({insertType:w,selectInside:!0,initialValue:void 0,json:n(I),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onReplaceJson:Dt})}function Wn(w){kr(n(R))&&f(R,Yt(n(R).path)),n(R)||f(R,hs(n(I),n(V))),vr(w)}function nr(w){if(!g()&&n(R))if(dl(n(R)))try{var L=Ka(n(R)),oe=Je(n(I),L),qe=function(Se,Oe,Ve){if(Oe==="array"){if(Array.isArray(Se))return Se;if(yn(Se))return $v(Se);if(typeof Se=="string")try{var vt=Ve.parse(Se);if(Array.isArray(vt))return vt;if(yn(vt))return $v(vt)}catch{return[Se]}return[Se]}if(Oe==="object"){if(Array.isArray(Se))return Ev(Se);if(yn(Se))return Se;if(typeof Se=="string")try{var sn=Ve.parse(Se);if(yn(sn))return sn;if(Array.isArray(sn))return Ev(sn)}catch{return{value:Se}}return{value:Se}}if(Oe==="value")return gr(Se)?Ve.stringify(Se):Se;throw new Error("Cannot convert ".concat(gd(Se,Ve)," to ").concat(Oe))}(oe,w,$());if(qe===oe)return;var $e=[{op:"replace",path:Et(L),value:qe}];o("handleConvert",{selection:n(R),path:L,type:w,operations:$e}),nn($e,(Se,Oe)=>({state:n(R)?ts(Se,Oe,Qe(n(R))):n(V)}))}catch(Se){B()(Se)}else B()(new Error("Cannot convert current selection to ".concat(w)))}function le(){if(n(R)){var w=Hv(n(I),n(V),n(R),!1),L=on(Qe(n(R)));w&&!Rn(Qe(w))&&Zt(L,on(Qe(w)))?f(R,sa(Qe(w))):f(R,va(L)),o("insert before",{selection:n(R),selectionBefore:w,parentPath:L}),ar(),Kt()}}function Nt(){if(n(R)){var w=Ra(n(I),n(R));o("insert after",w),f(R,sa(w)),ar(),Kt()}}function Un(w){return K.apply(this,arguments)}function K(){return(K=wt(function*(w){yield cg({char:w,selectInside:!0,json:n(I),selection:n(R),readOnly:g(),parser:$(),onPatch:nn,onReplaceJson:Dt,onSelect:et})})).apply(this,arguments)}function xe(){if(!g()&&x().canUndo){var w=x().undo();if(Bl(w)){var L={json:n(I),text:n(je)};f(I,w.undo.patch?To(n(I),w.undo.patch):w.undo.json),f(V,w.undo.documentState),f(R,w.undo.selection),f(je,w.undo.text),f(nt,w.undo.textIsRepaired),Ke=void 0,o("undo",{item:w,json:n(I),documentState:n(V),selection:n(R)}),kn(L,w.undo.patch&&w.redo.patch?{json:n(I),previousJson:L.json,redo:w.undo.patch,undo:w.redo.patch}:void 0),Lt(),n(R)&&ot(Qe(n(R)),!1)}else de()(w)}}function st(){if(!g()&&x().canRedo){var w=x().redo();if(Bl(w)){var L={json:n(I),text:n(je)};f(I,w.redo.patch?To(n(I),w.redo.patch):w.redo.json),f(V,w.redo.documentState),f(R,w.redo.selection),f(je,w.redo.text),f(nt,w.redo.textIsRepaired),Ke=void 0,o("redo",{item:w,json:n(I),documentState:n(V),selection:n(R)}),kn(L,w.undo.patch&&w.redo.patch?{json:n(I),previousJson:L.json,redo:w.redo.patch,undo:w.undo.patch}:void 0),Lt(),n(R)&&ot(Qe(n(R)),!1)}else Me()(w)}}function Ct(w){var L;g()||n(I)===void 0||(te=!0,ie()({id:s,json:n(I),rootPath:w,onSort:(L=wt(function*(oe){var{operations:qe}=oe;o("onSort",w,qe),nn(qe,($e,Se)=>({state:Xc($e,Se,w),selection:Yt(w)}))}),function(oe){return L.apply(this,arguments)}),onClose:()=>{te=!1,setTimeout(Lt)}}))}function rt(){n(R)&&Ct(Kv(n(I),n(R)))}function qt(){Ct([])}function tn(w){if(n(I)!==void 0){var{id:L,onTransform:oe,onClose:qe}=w,$e=w.rootPath||[];te=!0,Ee()({id:L||i,json:n(I),rootPath:$e,onTransform:Se=>{oe?oe({operations:Se,json:n(I),transformedJson:To(n(I),Se)}):(o("onTransform",$e,Se),nn(Se,(Oe,Ve)=>({state:Xc(Oe,Ve,$e),selection:Yt($e)})))},onClose:()=>{te=!1,setTimeout(Lt),qe&&qe()}})}}function Pt(){n(R)&&tn({rootPath:Kv(n(I),n(R))})}function Rt(){tn({rootPath:[]})}function ot(w){return at.apply(this,arguments)}function at(){return at=wt(function*(w){var L=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];f(V,mo(n(I),n(V),w,kl));var oe=un(w);if(o("scrollTo",{path:w,elem:oe,refContents:n(u)}),!oe||!n(u))return Promise.resolve();var qe=n(u).getBoundingClientRect(),$e=oe.getBoundingClientRect();if(!L&&$e.bottom>qe.top&&$e.top<qe.bottom)return Promise.resolve();var Se=-qe.height/4;return new Promise(Oe=>{m(oe,{container:n(u),offset:Se,duration:300,callback:()=>Oe()})})}),at.apply(this,arguments)}function un(w){var L,oe;return ar(),(L=(oe=n(u))===null||oe===void 0?void 0:oe.querySelector('div[data-path="'.concat(Ou(w),'"]')))!==null&&L!==void 0?L:void 0}function St(w){var L=un(w);if(L&&n(u)){var oe=n(u).getBoundingClientRect(),qe=L.getBoundingClientRect(),$e=gr(Je(n(I),w))?20:qe.height;qe.top<oe.top+20?m(L,{container:n(u),offset:-20,duration:0}):qe.top+$e>oe.bottom-20&&m(L,{container:n(u),offset:-(oe.height-$e-20),duration:0})}}function kn(w,L){if(w.json!==void 0||(w==null?void 0:w.text)!==void 0){if(n(je)!==void 0){var oe,qe={text:n(je),json:void 0};(oe=G())===null||oe===void 0||oe(qe,w,{contentErrors:Tt(),patchResult:L})}else if(n(I)!==void 0){var $e,Se={text:void 0,json:n(I)};($e=G())===null||$e===void 0||$e(Se,w,{contentErrors:Tt(),patchResult:L})}}}function nn(w,L){o("handlePatch",w,L);var oe={json:n(I),text:n(je)},qe=fn(w,L);return kn(oe,qe),qe}function Dt(w,L){var oe={json:n(I),text:n(je)},qe={documentState:n(V),selection:n(R),json:n(I),text:n(je),textIsRepaired:n(nt)},$e=mo(n(I),no(w,n(V)),[],wi),Se=typeof L=="function"?L(w,$e,n(R)):void 0;f(I,(Se==null?void 0:Se.json)!==void 0?Se.json:w),f(V,(Se==null?void 0:Se.state)!==void 0?Se.state:$e),f(R,(Se==null?void 0:Se.selection)!==void 0?Se.selection:n(R)),f(je,void 0),f(nt,!1),Ke=void 0,Jt(n(I)),Bt(qe),kn(oe,void 0)}function hn(w,L){o("handleChangeText");var oe={json:n(I),text:n(je)},qe={documentState:n(V),selection:n(R),json:n(I),text:n(je),textIsRepaired:n(nt)};try{f(I,_()(w)),f(V,mo(n(I),no(n(I),n(V)),[],wi)),f(je,void 0),f(nt,!1),Ke=void 0}catch(Se){try{f(I,_()(qo(w))),f(V,mo(n(I),no(n(I),n(V)),[],wi)),f(je,w),f(nt,!0),Ke=void 0}catch{f(I,void 0),f(V,Mu({json:n(I),expand:wi})),f(je,w),f(nt,!1),Ke=n(je)!==""?Us(n(je),Se.message||String(Se)):void 0}}if(typeof L=="function"){var $e=L(n(I),n(V),n(R));f(I,($e==null?void 0:$e.json)!==void 0?$e.json:n(I)),f(V,($e==null?void 0:$e.state)!==void 0?$e.state:n(V)),f(R,($e==null?void 0:$e.selection)!==void 0?$e.selection:n(R))}Jt(n(I)),Bt(qe),kn(oe,void 0)}function Ut(w,L){var oe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:w,expanded:L,recursive:oe}),L?ze(w,oe?Md:Wv):mt(w,oe),Lt()}function rr(){Ut([],!0,!0)}function D(){Ut([],!1,!0)}function X(w){o("openFind",{findAndReplace:w}),f(Ie,!1),f(xt,!1),ar(),f(Ie,!0),f(xt,w)}function ke(w,L){o("handleExpandSection",w,L),f(V,function(oe,qe,$e,Se){return Bs(oe,qe,$e,(Oe,Ve)=>{if(!Ir(Ve))return Ve;var vt=wh(Ve.visibleSections.concat(Se));return ge(ge({},Ve),{},{visibleSections:vt})})}(n(I),n(V),w,L))}function $t(w){o("pasted json as text",w),f(Xe,w)}function rn(w){var L,{anchor:oe,left:qe,top:$e,width:Se,height:Oe,offsetTop:Ve,offsetLeft:vt,showTip:sn}=w,Wt=function(qn){var{json:Xn,documentState:it,selection:Pe,readOnly:Mt,onEditKey:fr,onEditValue:Sn,onToggleEnforceString:mn,onCut:Nn,onCopy:hr,onPaste:_t,onRemove:Fn,onDuplicate:Rr,onExtract:fo,onInsertBefore:Tr,onInsert:Fr,onConvert:Ko,onInsertAfter:cs,onSort:ha,onTransform:Er}=qn,Gn=Xn!==void 0,Vr=!!Pe,Zr=!!Pe&&Rn(Qe(Pe)),po=Pe?Je(Xn,Qe(Pe)):void 0,oi=Array.isArray(po)?"Edit array":yn(po)?"Edit object":"Edit value",Yr=Gn&&(Jn(Pe)||kr(Pe)||En(Pe)),ai=Pe&&!Zr?Je(Xn,on(Qe(Pe))):void 0,Mc=!Mt&&Gn&&Ll(Pe)&&!Zr&&!Array.isArray(ai),si=!Mt&&Gn&&Pe!==void 0&&Ll(Pe),Ac=si&&!gr(po),ii=!Mt&&Yr,li=Yr,Pc=!Mt&&Vr,jr=!Mt&&Gn&&Yr&&!Zr,Po=!Mt&&Gn&&Pe!==void 0&&(Jn(Pe)||En(Pe))&&!Zr,so=Yr,Yo=so?"Convert to:":"Insert:",Fa=!Mt&&(_r(Pe)&&Array.isArray(po)||co(Pe)&&Array.isArray(ai)),Qr=!Mt&&(so?dl(Pe)&&!yn(po):Vr),Rc=!Mt&&(so?dl(Pe)&&!Array.isArray(po):Vr),_c=!Mt&&(so?dl(Pe)&&gr(po):Vr),Ic=Pe!==void 0&&aa(Xn,it,Qe(Pe));function us(ci){Yr?ci!=="structure"&&Ko(ci):Fr(ci)}return[{type:"row",items:[{type:"button",onClick:()=>fr(),icon:$s,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Mc},{type:"dropdown-button",main:{type:"button",onClick:()=>Sn(),icon:$s,text:oi,title:"Edit the value (Double-click on the value)",disabled:!si},width:"11em",items:[{type:"button",icon:$s,text:oi,title:"Edit the value (Double-click on the value)",onClick:()=>Sn(),disabled:!si},{type:"button",icon:Ic?up:dp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>mn(),disabled:!Ac}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>Nn(!0),icon:Ms,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ii},width:"10em",items:[{type:"button",icon:Ms,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>Nn(!0),disabled:!ii},{type:"button",icon:Ms,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>Nn(!1),disabled:!ii}]},{type:"dropdown-button",main:{type:"button",onClick:()=>hr(!0),icon:wa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!li},width:"12em",items:[{type:"button",icon:wa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>hr(!0),disabled:!li},{type:"button",icon:wa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>hr(!1),disabled:!li}]},{type:"button",onClick:()=>_t(),icon:vp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Pc}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Rr(),icon:fp,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!jr},{type:"button",onClick:()=>fo(),icon:jm,text:"Extract",title:"Extract selected contents",disabled:!Po},{type:"button",onClick:()=>ha(),icon:Ml,text:"Sort",title:"Sort array or object contents",disabled:Mt||!Yr},{type:"button",onClick:()=>Er(),icon:Al,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:Mt||!Yr},{type:"button",onClick:()=>Fn(),icon:pu,text:"Remove",title:"Remove selected contents (Delete)",disabled:Mt||!Yr}]},{type:"column",items:[{type:"label",text:Yo},{type:"button",onClick:()=>us("structure"),icon:so?rl:ks,text:"Structure",title:Yo+" structure like the first item in the array",disabled:!Fa},{type:"button",onClick:()=>us("object"),icon:so?rl:ks,text:"Object",title:Yo+" object",disabled:!Qr},{type:"button",onClick:()=>us("array"),icon:so?rl:ks,text:"Array",title:Yo+" array",disabled:!Rc},{type:"button",onClick:()=>us("value"),icon:so?rl:ks,text:"Value",title:Yo+" value",disabled:!_c}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>Tr(),icon:xm,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:Mt||!Yr||Zr},{type:"button",onClick:()=>cs(),icon:ym,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:Mt||!Yr||Zr}]}]}({json:n(I),documentState:n(V),selection:n(R),readOnly:g(),onEditKey:sr,onEditValue:Dn,onToggleEnforceString:cn,onCut:pn,onCopy:Qt,onPaste:wn,onRemove:tr,onDuplicate:pr,onExtract:br,onInsertBefore:le,onInsert:Wn,onInsertAfter:Nt,onConvert:nr,onSort:rt,onTransform:Pt}),Pn=(L=me()(Wt))!==null&&L!==void 0?L:Wt;if(Pn!==!1){var ht={left:qe,top:$e,offsetTop:Ve,offsetLeft:vt,width:Se,height:Oe,anchor:oe,closeOnOuterClick:!0,onClose:()=>{te=!1,Lt()}};te=!0;var lr=l(dg,{tip:sn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Pn,onRequestClose:()=>c(lr)},ht)}}function Kt(w){if(!Jr(n(R)))if(w&&(w.stopPropagation(),w.preventDefault()),w&&w.type==="contextmenu"&&w.target!==n(d))rn({left:w.clientX,top:w.clientY,width:Zo,height:Go,showTip:!1});else{var L,oe=(L=n(u))===null||L===void 0?void 0:L.querySelector(".jse-context-menu-pointer.jse-selected");if(oe)rn({anchor:oe,offsetTop:2,width:Zo,height:Go,showTip:!1});else{var qe,$e=(qe=n(u))===null||qe===void 0?void 0:qe.getBoundingClientRect();$e&&rn({top:$e.top+2,left:$e.left+2,width:Zo,height:Go,showTip:!1})}}}function Cn(w){rn({anchor:xh(w.target,"BUTTON"),offsetTop:0,width:Zo,height:Go,showTip:!0})}function Bn(){return An.apply(this,arguments)}function An(){return(An=wt(function*(){if(o("apply pasted json",n(Xe)),n(Xe)){var{onPasteAsJson:w}=n(Xe);f(Xe,void 0),w(),setTimeout(Lt)}})).apply(this,arguments)}function ir(){o("clear pasted json"),f(Xe,void 0),Lt()}function Te(){pe()(yr.text)}function Tn(w){f(R,w),Lt(),ot(Qe(w))}function Lt(){o("focus"),n(d)&&(n(d).focus(),n(d).select())}function zr(w){return function(L,oe,qe){var $e=on(qe),Se=[Ht(qe)],Oe=Je(L,$e),Ve=Oe?Qc(Oe,oe,Se):void 0;return Ve?Yt($e.concat(Ve)):sa(qe)}(n(I),n(V),w)}function ft(w){n(r)&&n(r).onDrag(w)}function dn(){n(r)&&n(r).onDragEnd()}var gn=M(void 0,!0);U(()=>n(R),()=>{var w;w=n(R),Zt(w,j())||(o("onSelect",w),Z()(w))}),U(()=>(E(C()),E(y())),()=>{f(tt,md({escapeControlCharacters:C(),escapeUnicodeCharacters:y()}))}),U(()=>n(Ie),()=>{(function(w){n(u)&&w&&n(u).scrollTop===0&&(ro(u,n(u).style.overflowAnchor="none"),ro(u,n(u).scrollTop+=yi),setTimeout(()=>{n(u)&&ro(u,n(u).style.overflowAnchor="")}))})(n(Ie))}),U(()=>E(b()),()=>{Mn(b())}),U(()=>E(j()),()=>{(function(w){Zt(n(R),w)||(o("applyExternalSelection",{selection:n(R),externalSelection:w}),Ni(w)&&f(R,w))})(j())}),U(()=>(n(I),E(T()),E($()),E(z())),()=>{He(n(I),T(),$(),z())}),U(()=>(n(u),uf),()=>{f(r,n(u)?uf(n(u)):void 0)}),U(()=>(E(g()),E($()),n(tt),E(ue()),E(Ce())),()=>{f(gn,{mode:yr.tree,readOnly:g(),parser:$(),normalization:n(tt),getJson:an,getDocumentState:Ye,getSelection:Vt,findElement:un,findNextInside:zr,focus:Lt,onPatch:nn,onInsert:vr,onExpand:Ut,onSelect:et,onFind:X,onExpandSection:ke,onPasteJson:$t,onRenderValue:ue(),onContextMenu:rn,onClassName:Ce()||(()=>{}),onDrag:ft,onDragEnd:dn})}),U(()=>n(gn),()=>{o("context changed",n(gn))}),ln(),pt(!0);var Ln=A1();se("mousedown",oa,function(w){!ni(w.target,L=>L===n(h))&&Jr(n(R))&&(o("click outside the editor, exit edit mode"),f(R,_o(n(R))),p&&n(d)&&(n(d).focus(),n(d).blur()),o("blur (outside editor)"),n(d)&&n(d).blur())});var k,J=Ne(Ln),ce=A(J),he=w=>{(function(L,oe){lt(oe,!1);var qe=M(void 0,!0),$e=M(void 0,!0),Se=M(void 0,!0),Oe=v(oe,"json",9),Ve=v(oe,"selection",9),vt=v(oe,"readOnly",9),sn=v(oe,"showSearch",13,!1),Wt=v(oe,"history",9),Pn=v(oe,"onExpandAll",9),ht=v(oe,"onCollapseAll",9),lr=v(oe,"onUndo",9),qn=v(oe,"onRedo",9),Xn=v(oe,"onSort",9),it=v(oe,"onTransform",9),Pe=v(oe,"onContextMenu",9),Mt=v(oe,"onCopy",9),fr=v(oe,"onRenderMenu",9);function Sn(){sn(!sn())}var mn=M(void 0,!0),Nn=M(void 0,!0),hr=M(void 0,!0),_t=M(void 0,!0);U(()=>E(Oe()),()=>{f(qe,Oe()!==void 0)}),U(()=>(n(qe),E(Ve()),En),()=>{f($e,n(qe)&&(Jn(Ve())||kr(Ve())||En(Ve())))}),U(()=>(E(Pn()),E(Oe())),()=>{f(mn,{type:"button",icon:By,title:"Expand all",className:"jse-expand-all",onClick:Pn(),disabled:!gr(Oe())})}),U(()=>(E(ht()),E(Oe())),()=>{f(Nn,{type:"button",icon:Ly,title:"Collapse all",className:"jse-collapse-all",onClick:ht(),disabled:!gr(Oe())})}),U(()=>E(Oe()),()=>{f(hr,{type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:Sn,disabled:Oe()===void 0})}),U(()=>(E(vt()),n(mn),n(Nn),E(Xn()),E(Oe()),E(it()),n(hr),E(Pe()),E(lr()),E(Wt()),E(qn()),E(Mt()),n($e)),()=>{f(_t,vt()?[n(mn),n(Nn),{type:"separator"},{type:"button",icon:wa,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:Mt(),disabled:!n($e)},{type:"separator"},n(hr),{type:"space"}]:[n(mn),n(Nn),{type:"separator"},{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:Xn(),disabled:vt()||Oe()===void 0},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:it(),disabled:vt()||Oe()===void 0},n(hr),{type:"button",icon:pp,title:wd,className:"jse-contextmenu",onClick:Pe()},{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:lr(),disabled:!Wt().canUndo},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:qn(),disabled:!Wt().canRedo},{type:"space"}])}),U(()=>(E(fr()),n(_t)),()=>{f(Se,fr()(n(_t))||n(_t))}),ln(),pt(!0),kc(L,{get items(){return n(Se)}}),ct()})(w,{get json(){return n(I)},get selection(){return n(R)},get readOnly(){return g()},get history(){return x()},onExpandAll:rr,onCollapseAll:D,onUndo:xe,onRedo:st,onSort:qt,onTransform:Rt,onContextMenu:Cn,onCopy:Qt,get onRenderMenu(){return ve()},get showSearch(){return n(Ie)},set showSearch(L){f(Ie,L)},$$legacy:!0})};Y(ce,w=>{S()&&w(he)});var ye=N(ce,2),Re=w=>{o1(w,{get json(){return n(I)},get selection(){return n(R)},onSelect:Tn,get onError(){return B()},get pathParser(){return ne()}})};Y(ye,w=>{O()&&w(Re)});var Ae=N(ye,2),We=w=>{var L=$1(),oe=Ne(L),qe=A(oe);qe.readOnly=!0,Yn(qe,Ve=>f(d,Ve),()=>n(d));var $e=N(oe,2),Se=Ve=>{var vt=Ft(),sn=Ne(vt),Wt=ht=>{(function(lr,qn){lt(qn,!1);var Xn=v(qn,"readOnly",9),it=v(qn,"onCreateArray",9),Pe=v(qn,"onCreateObject",9),Mt=v(qn,"onClick",9);pt(!0);var fr=Wy(),Sn=N(A(fr),2),mn=N(A(Sn),2),Nn=hr=>{var _t=Vy(),Fn=N(Ne(_t),2);vn(Fn,"title","Create an empty JSON object (press '{')");var Rr=N(Fn,2);vn(Rr,"title","Create an empty JSON array (press '[')"),se("click",Fn,bo(()=>Pe()())),se("click",Rr,bo(()=>it()())),P(hr,_t)};Y(mn,hr=>{Xn()||hr(Nn)}),se("click",fr,()=>Mt()()),P(lr,fr),ct()})(ht,{get readOnly(){return g()},onCreateObject:()=>{Lt(),Un("{")},onCreateArray:()=>{Lt(),Un("[")},onClick:()=>{Lt()}})},Pn=ht=>{var lr=O1(),qn=Ne(lr),Xn=fe(()=>g()?[]:[{icon:Pl,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Te}]);$o(qn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Xn)}}),ug(N(qn,2),{get text(){return n(je)},get json(){return n(I)},get indentation(){return Q()},get parser(){return $()}}),P(ht,lr)};Y(sn,ht=>{n(je)===""||n(je)===void 0?ht(Wt):ht(Pn,!1)}),P(Ve,vt)},Oe=Ve=>{var vt=E1(),sn=Ne(vt);ng(A(sn),{get json(){return n(I)},get documentState(){return n(V)},get parser(){return $()},get showSearch(){return n(Ie)},get showReplace(){return n(xt)},get readOnly(){return g()},columns:void 0,onSearch:It,onFocus:Be,onPatch:nn,onClose:Ue});var Wt=N(sn,2);vn(Wt,"data-jsoneditor-scrollable-contents",!0);var Pn=A(Wt),ht=Pe=>{P(Pe,z1())};Y(Pn,Pe=>{n(Ie)&&Pe(ht)}),Du(N(Pn,2),{get value(){return n(I)},pointer:"",get state(){return n(V)},get validationErrors(){return n(H)},get searchResults(){return n(De)},get selection(){return n(R)},get context(){return n(gn)},onDragSelectionStart:xr}),Yn(Wt,Pe=>f(u,Pe),()=>n(u));var lr=N(Wt,2),qn=Pe=>{var Mt=fe(()=>"You pasted a JSON ".concat(Array.isArray(n(Xe).contents)?"array":"object"," as text"));$o(Pe,{type:"info",get message(){return n(Mt)},actions:[{icon:Ns,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Bn},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:ir}]})};Y(lr,Pe=>{n(Xe)&&Pe(qn)});var Xn=N(lr,2),it=Pe=>{var Mt=fe(()=>g()?[]:[{icon:rd,text:"Ok",title:"Accept the repaired document",onClick:Fe},{icon:Pl,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Te}]);$o(Pe,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Mt)},onClose:Lt})};Y(Xn,Pe=>{n(nt)&&Pe(it)}),qd(N(Xn,2),{get validationErrors(){return n(Le)},selectError:ut}),P(Ve,vt)};Y($e,Ve=>{n(I)===void 0?Ve(Se):Ve(Oe,!1)}),se("paste",qe,zn),P(w,L)},zt=w=>{P(w,M1())};Y(Ae,w=>{a?w(zt,!1):w(We)}),Yn(J,w=>f(h,w),()=>n(h));var Xt=N(J,2),Gt=w=>{Gh(w,{onClose:()=>f(q,!1)})};Y(Xt,w=>{n(q)&&w(Gt)});var jn=N(Xt,2),xn=w=>{Zh(w,Ma(()=>n(ae),{onClose:()=>{var L;(L=n(ae))===null||L===void 0||L.onClose(),f(ae,void 0)}}))};return Y(jn,w=>{n(ae)&&w(xn)}),we(()=>k=Ot(J,1,"jse-tree-mode svelte-vrx1dr",null,k,{"no-main-menu":!S()})),se("keydown",J,function(w){var L=ca(w),oe=w.shiftKey;if(o("keydown",{combo:L,key:w.key}),L==="Ctrl+X"&&(w.preventDefault(),pn(!0)),L==="Ctrl+Shift+X"&&(w.preventDefault(),pn(!1)),L==="Ctrl+C"&&(w.preventDefault(),Qt(!0)),L==="Ctrl+Shift+C"&&(w.preventDefault(),Qt(!1)),L==="Ctrl+D"&&(w.preventDefault(),pr()),L!=="Delete"&&L!=="Backspace"||(w.preventDefault(),tr()),L==="Insert"&&(w.preventDefault(),vr("structure")),L==="Ctrl+A"&&(w.preventDefault(),f(R,Yt([]))),L==="Ctrl+Q"&&Kt(w),L==="ArrowUp"||L==="Shift+ArrowUp"){w.preventDefault();var qe=n(R)?Hv(n(I),n(V),n(R),oe)||n(R):hs(n(I),n(V));f(R,qe),St(Qe(qe))}if(L==="ArrowDown"||L==="Shift+ArrowDown"){w.preventDefault();var $e=n(R)?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(ht){var qn=lr?Qe(ht):Ra(Wt,ht),Xn=gr(Je(Wt,qn))?Bv(Wt,Pn,qn,!0):Pn,it=Qc(Wt,Pn,qn),Pe=Qc(Wt,Xn,qn);if(lr)return _r(ht)?it!==void 0?Dr(it,it):void 0:co(ht)?Pe!==void 0?Dr(Pe,Pe):void 0:Pe!==void 0?Dr(Ka(ht),Pe):void 0;if(co(ht))return Pe!==void 0?Yt(Pe):void 0;if(_r(ht)||En(ht))return it!==void 0?Yt(it):void 0;if(kr(ht)){if(it===void 0||it.length===0)return;var Mt=on(it),fr=Je(Wt,Mt);return Array.isArray(fr)?Yt(it):da(it)}return Jn(ht)?Pe!==void 0?Yt(Pe):it!==void 0?Yt(it):void 0:void 0}}(n(I),n(V),n(R),oe)||n(R):hs(n(I),n(V));f(R,$e),St(Qe($e))}if(L==="ArrowLeft"||L==="Shift+ArrowLeft"){w.preventDefault();var Se=n(R)?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],qn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ht){var{caret:Xn,previous:it}=Jv(Wt,Pn,ht,qn);if(lr)return Jn(ht)?void 0:Dr(ht.path,ht.path);if(Xn&&it)return Au(it);var Pe=on(Qe(ht)),Mt=Je(Wt,Pe);return En(ht)&&Array.isArray(Mt)?Dr(ht.path,ht.path):Jn(ht)&&!Array.isArray(Mt)?da(ht.focusPath):void 0}}(n(I),n(V),n(R),oe,!g())||n(R):hs(n(I),n(V));f(R,Se),St(Qe(Se))}if(L==="ArrowRight"||L==="Shift+ArrowRight"){w.preventDefault();var Oe=n(R)&&n(I)!==void 0?function(Wt,Pn,ht){var lr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],qn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ht){var{caret:Xn,next:it}=Jv(Wt,Pn,ht,qn);return lr?Jn(ht)?void 0:Dr(ht.path,ht.path):Xn&&it?Au(it):Jn(ht)?Yt(ht.focusPath):void 0}}(n(I),n(V),n(R),oe,!g())||n(R):hs(n(I),n(V));f(R,Oe),St(Qe(Oe))}if(L==="Enter"&&n(R)){if(jc(n(R))){var Ve=n(R).focusPath,vt=Je(n(I),on(Ve));Array.isArray(vt)&&(w.preventDefault(),f(R,Yt(Ve)))}kr(n(R))&&(w.preventDefault(),f(R,ge(ge({},n(R)),{},{edit:!0}))),En(n(R))&&(w.preventDefault(),gr(Je(n(I),n(R).path))?Ut(n(R).path,!0):f(R,ge(ge({},n(R)),{},{edit:!0})))}if(L.replace(/^Shift\+/,"").length===1&&n(R))return w.preventDefault(),void Un(w.key);if(L==="Enter"&&(co(n(R))||_r(n(R))))return w.preventDefault(),void Un("");if(L==="Ctrl+Enter"&&En(n(R))){var sn=Je(n(I),n(R).path);hc(sn)&&window.open(String(sn),"_blank")}L==="Escape"&&n(R)&&(w.preventDefault(),f(R,void 0)),L==="Ctrl+F"&&(w.preventDefault(),X(!1)),L==="Ctrl+H"&&(w.preventDefault(),X(!0)),L==="Ctrl+Z"&&(w.preventDefault(),xe()),L==="Ctrl+Shift+Z"&&(w.preventDefault(),st())}),se("mousedown",J,function(w){o("handleMouseDown",w);var L=w.target;jh(L,"BUTTON")||L.isContentEditable||(Lt(),n(R)||n(I)!==void 0||n(je)!==""&&n(je)!==void 0||(o("createDefaultSelection"),f(R,Yt([]))))}),se("contextmenu",J,Kt),P(e,Ln),yt(t,"expand",ze),yt(t,"collapse",mt),yt(t,"validate",Tt),yt(t,"getJson",an),yt(t,"patch",fn),yt(t,"acceptAutoRepair",Fe),yt(t,"openTransformModal",tn),yt(t,"scrollTo",ot),yt(t,"findElement",un),yt(t,"focus",Lt),ct({expand:ze,collapse:mt,validate:Tt,getJson:an,patch:fn,acceptAutoRepair:Fe,openTransformModal:tn,scrollTo:ot,findElement:un,focus:Lt})}function vg(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,a)=>vg(Reflect.get(r,o,a)),set:()=>!1,deleteProperty:()=>!1});var t}var bl=Sr("jsoneditor:History");function fg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function a(){return o<r.length}function s(){return o>0}function i(){return{canUndo:a(),canRedo:s(),items:()=>r.slice().reverse(),add:c,undo:d,redo:h,clear:u}}function l(){e.onChange&&e.onChange(i())}function c(p){bl("add",p),r=[p].concat(r.slice(o)).slice(0,t),o=0,l()}function u(){bl("clear"),r=[],o=0,l()}function d(){if(a()){var p=r[o];return o+=1,bl("undo",p),l(),p}}function h(){if(s())return bl("redo",r[o-=1]),l(),r[o]}return{get:i}}jt(`/* over all fonts, sizes, and colors */
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
}`);var hi=pc(()=>Q0),gs=pc(()=>X0),P1=F('<div class="query-error svelte-rrrjnb"> </div>'),R1=F("<!> <!>",1),_1=F('<div class="jse-preview jse-error svelte-rrrjnb"> </div>'),I1=F('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>',1),q1=F('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');function T1(e,t){var r,o,a;lt(t,!1);var s=Sr("jsoneditor:TransformModal"),i=v(t,"id",25,()=>"transform-modal-"+Ss()),l=v(t,"json",9),c=v(t,"rootPath",25,()=>[]),u=v(t,"indentation",9),d=v(t,"escapeControlCharacters",9),h=v(t,"escapeUnicodeCharacters",9),p=v(t,"parser",9),m=v(t,"parseMemoizeOne",9),g=v(t,"validationParser",9),b=v(t,"pathParser",9),j=v(t,"queryLanguages",9),x=v(t,"queryLanguageId",13),S=v(t,"onChangeQueryLanguage",9),O=v(t,"onRenderValue",9),C=v(t,"onRenderMenu",9),y=v(t,"onRenderContextMenu",9),$=v(t,"onClassName",9),_=v(t,"onTransform",9),T=v(t,"onClose",9),z=M(void 0,!0),ne=M(fg({onChange:V=>f(ne,V)}).get(),!0),Q=M(void 0,!0),B=M(void 0,!0),G=M(!1,!0),pe="".concat(i(),":").concat(Et(c())),Z=(r=hi()[pe])!==null&&r!==void 0?r:{},de=M(gs().showWizard!==!1,!0),Me=M(gs().showOriginal!==!1,!0),ue=M((o=Z.queryOptions)!==null&&o!==void 0?o:{},!0),ve=M(x()===Z.queryLanguageId&&Z.query?Z.query:"",!0),me=M((a=Z.isManual)!==null&&a!==void 0&&a,!0),Ce=M(void 0,!0),Ze=M(void 0,!0),re=M({text:""},!0);function ie(V){var R;return(R=j().find(et=>et.id===V))!==null&&R!==void 0?R:j()[0]}function Ee(V){try{f(ue,V),f(ve,ie(x()).createQuery(n(Q),V)),f(Ce,void 0),f(me,!1),s("updateQueryByWizard",{queryOptions:n(ue),query:n(ve),isManual:n(me)})}catch(R){f(Ce,String(R))}}function At(V){f(ve,V.target.value),f(me,!0),s("handleChangeQuery",{query:n(ve),isManual:n(me)})}n(me)||Ee(n(ue)),qr(()=>{var V;(V=n(z))===null||V===void 0||V.focus()});var te=El(function(V,R){if(V===void 0)return f(re,{text:""}),void f(Ze,"Error: No JSON");if(R.trim()!=="")try{s("previewTransform",{query:R});var et=ie(x()).executeQuery(V,R,p());f(re,{json:et}),f(Ze,void 0)}catch(kt){f(re,{text:""}),f(Ze,String(kt))}else f(re,{json:V})},300);function q(){if(n(Q)===void 0)return f(re,{text:""}),void f(Ze,"Error: No JSON");try{s("handleTransform",{query:n(ve)});var V=ie(x()).executeQuery(n(Q),n(ve),p());_()([{op:"replace",path:Et(c()),value:V}]),T()()}catch(R){console.error(R),f(re,{text:""}),f(Ze,String(R))}}function ae(){f(de,!n(de)),gs(gs().showWizard=n(de))}function I(){f(Me,!n(Me)),gs(gs().showOriginal=n(Me))}function je(V){V.focus()}function Ke(V){s("handleChangeQueryLanguage",V),x(V),S()(V),Ee(n(ue))}function W(){n(G)?f(G,!n(G)):T()()}U(()=>(E(l()),E(c())),()=>{f(Q,vg(Je(l(),c())))}),U(()=>n(Q),()=>{f(B,n(Q)?{json:n(Q)}:{text:""})}),U(()=>(n(Q),n(ve)),()=>{te(n(Q),n(ve))}),U(()=>(hi(),n(ue),n(ve),E(x()),n(me)),()=>{hi(hi()[pe]={queryOptions:n(ue),query:n(ve),queryLanguageId:x(),isManual:n(me)}),s("store state in memory",pe,hi()[pe])}),ln(),pt(!0),Li(e,{get onClose(){return T()},className:"jse-transform-modal",get fullscreen(){return n(G)},children:(V,R)=>{var et=q1();zu(A(et),{children:(kt,tt)=>{var Xe=I1(),De=Ne(Xe);(function(dt,Qt){lt(Qt,!1);var bn,zn=v(Qt,"queryLanguages",9),wn=v(Qt,"queryLanguageId",9),In=v(Qt,"fullscreen",13),Qn=v(Qt,"onChangeQueryLanguage",9),Or=v(Qt,"onClose",9),tr=M(void 0,!0),{openAbsolutePopup:pr,closeAbsolutePopup:br}=Ba("absolute-popup");function vr(){var Wn={queryLanguages:zn(),queryLanguageId:wn(),onChangeQueryLanguage:nr=>{br(bn),Qn()(nr)}};bn=pr(Rx,Wn,{offsetTop:-2,offsetLeft:0,anchor:n(tr),closeOnOuterClick:!0})}pt(!0),Ql(dt,{title:"Transform",fullScreenButton:!0,get onClose(){return Or()},get fullscreen(){return In()},set fullscreen(Wn){In(Wn)},$$slots:{actions:(Wn,nr)=>{var le,Nt=qx();en(A(Nt),{data:Im}),Yn(Nt,Un=>f(tr,Un),()=>n(tr)),we(()=>le=Ot(Nt,1,"jse-config svelte-1kpylsp",null,le,{hide:zn().length<=1})),se("click",Nt,vr),P(Wn,Nt)}},$$legacy:!0}),ct()})(De,{get queryLanguages(){return j()},get queryLanguageId(){return x()},onChangeQueryLanguage:Ke,get onClose(){return T()},get fullscreen(){return n(G)},set fullscreen(dt){f(G,dt)},$$legacy:!0});var Ie=A(N(De,2)),xt=A(Ie),It=N(A(xt),2);rh(A(It),()=>ie(x()).description,!1,!1);var Be=N(It,4),be=N(Be,2),Ue=A(be),ut=A(Ue),ze=A(ut),mt=fe(()=>n(de)?_a:Ei);en(ze,{get data(){return n(mt)}});var nt=N(be,2),Le=dt=>{var Qt=Ft(),bn=Ne(Qt),zn=In=>{var Qn=R1(),Or=Ne(Qn);Mx(Or,{get queryOptions(){return n(ue)},get json(){return n(Q)},onChange:Ee});var tr=N(Or,2),pr=br=>{var vr=P1(),Wn=A(vr);we(()=>gt(Wn,n(Ce))),P(br,vr)};Y(tr,br=>{n(Ce)&&br(pr)}),P(In,Qn)},wn=In=>{P(In,Lr("(Only available for arrays, not for objects)"))};Y(bn,In=>{Array.isArray(n(Q))?In(zn):In(wn,!1)}),P(dt,Qt)};Y(nt,dt=>{n(de)&&dt(Le)});var H=N(nt,4);Yn(H,dt=>f(z,dt),()=>n(z));var _e,He,Tt=N(xt,2),an=A(Tt),Ye=A(an),Vt=A(Ye),Mn=A(Vt),On=A(Mn),Jt=fe(()=>n(Me)?_a:Ei);en(On,{get data(){return n(Jt)}});var Bt=N(Ye,2),fn=dt=>{Wu(dt,{get externalContent(){return n(B)},externalSelection:void 0,get history(){return n(ne)},readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return p()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return C()},get onRenderContextMenu(){return y()},onError:console.error,onChange:xr,onChangeMode:xr,onSelect:xr,onUndo:xr,onRedo:xr,onFocus:xr,onBlur:xr,onSortModal:xr,onTransformModal:xr,onJSONEditorModal:xr,get onClassName(){return $()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})};Y(Bt,dt=>{n(Me)&&dt(fn)});var sr=N(an,2),Dn=N(A(sr),2),cn=dt=>{Wu(dt,{get externalContent(){return n(re)},externalSelection:void 0,get history(){return n(ne)},readOnly:!0,mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return d()},get escapeUnicodeCharacters(){return h()},get parser(){return p()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return C()},get onRenderContextMenu(){return y()},onError:console.error,onChange:xr,onChangeMode:xr,onSelect:xr,onUndo:xr,onRedo:xr,onFocus:xr,onBlur:xr,onSortModal:xr,onTransformModal:xr,onJSONEditorModal:xr,get onClassName(){return $()},validator:void 0,get validationParser(){return g()},get pathParser(){return b()}})},Fe=dt=>{var Qt=_1(),bn=A(Qt);we(()=>gt(bn,n(Ze))),P(dt,Qt)};Y(Dn,dt=>{n(Ze)?dt(Fe,!1):dt(cn)});var pn=A(N(Ie,2));Ar(()=>se("click",pn,q)),Br(pn,dt=>je==null?void 0:je(dt)),we(dt=>{Za(Be,dt),Za(H,n(ve)),_e=Ot(Tt,1,"jse-data-contents svelte-rrrjnb",null,_e,{"jse-hide-original-data":!n(Me)}),He=Ot(an,1,"jse-original-data svelte-rrrjnb",null,He,{"jse-hide":!n(Me)}),pn.disabled=!!n(Ze)},[()=>Rn(c())?"(document root)":ko(c())],fe),se("click",ut,ae),se("input",H,At),se("click",Mn,I),P(kt,Xe)},$$slots:{default:!0}}),Br(et,(kt,tt)=>Xl==null?void 0:Xl(kt,tt),()=>W),P(V,et)},$$slots:{default:!0}}),ct()}function lo(){}function gf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<.9*t)return e.toFixed()+" B";var r=e/t;if(r<.9*t)return r.toFixed(1)+" KB";var o=r/t;if(o<.9*t)return o.toFixed(1)+" MB";var a=o/t;return a<.9*t?a.toFixed(1)+" GB":(a/t).toFixed(1)+" TB"}jt(`/* over all fonts, sizes, and colors */
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
}`);var N1=F('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),D1=F('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),U1=F('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),B1=F('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>'),Nd=Hm.define([{tag:di.propertyName,color:"var(--internal-key-color)"},{tag:di.number,color:"var(--internal-value-color-number)"},{tag:di.bool,color:"var(--internal-value-color-boolean)"},{tag:di.string,color:"var(--internal-value-color-string)"},{tag:di.keyword,color:"var(--internal-value-color-null)"}]),L1=jp(Nd),F1=Nd.style;Nd.style=e=>F1(e||[]);var V1=[Jm.fromClass(class{constructor(e){this.view=e,this.indentUnit=av(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=av(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new Km;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var a of o){var{numColumns:s,containsTab:i}=this.numColumns(a.text,t.tabSize),l="calc(".concat(s+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(s+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(s+this.indentUnit,"ch");e.add(a.from,a.from,Ym.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:a}of this.view.visibleRanges)for(var s=o;s<=a;){var i=e.doc.lineAt(s);r!==i&&(t.add(i),r=i),s=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var a=0;a<e.length;a++)switch(e[a]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];jt(`/* over all fonts, sizes, and colors */
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
}`);var W1=F('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>',1),H1=F("<!> <!> <!> <!>",1),J1=F("<div></div> <!> <!>",1),K1=F('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>'),Y1=F("<div><!> <!></div>");function Q1(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=v(t,"readOnly",9),s=v(t,"mainMenuBar",9),i=v(t,"statusBar",9),l=v(t,"askToFormat",9),c=v(t,"externalContent",9),u=v(t,"externalSelection",9),d=v(t,"history",9),h=v(t,"indentation",9),p=v(t,"tabSize",9),m=v(t,"escapeUnicodeCharacters",9),g=v(t,"parser",9),b=v(t,"validator",9),j=v(t,"validationParser",9),x=v(t,"onChange",9),S=v(t,"onChangeMode",9),O=v(t,"onSelect",9),C=v(t,"onUndo",9),y=v(t,"onRedo",9),$=v(t,"onError",9),_=v(t,"onFocus",9),T=v(t,"onBlur",9),z=v(t,"onRenderMenu",9),ne=v(t,"onSortModal",9),Q=v(t,"onTransformModal",9),B=Sr("jsoneditor:TextMode"),G={key:"Mod-i",run:Xe,shift:De,preventDefault:!0},pe=typeof window>"u";B("isSSR:",pe);var Z,de=M(void 0,!0),Me=M(void 0,!0),ue=M(void 0,!0),ve=M(!1,!0),me=M(l(),!0),Ce=M([],!0),Ze=new vi,re=new vi,ie=new vi,Ee=new vi,At=new vi,te=c(),q=M(Su(te,h(),g()),!0),ae=gb.define(),I=null;function je(){if(!I||I.length===0)return!1;var K=I[0].startState,xe=I[I.length-1].state,st=I.map(rt=>rt.changes).reduce((rt,qt)=>rt.compose(qt)),Ct={type:"text",undo:{changes:st.invert(K.doc).toJSON(),selection:Qt(K.selection)},redo:{changes:st.toJSON(),selection:Qt(xe.selection)}};return B("add history item",Ct),d().add(Ct),I=null,!0}var Ke=M(m(),!0);qr(wt(function*(){if(!pe)try{Z=function(K){var{target:xe,initialText:st,readOnly:Ct,indentation:rt}=K;B("Create CodeMirror editor",{readOnly:Ct,indentation:rt});var qt=function(Pt,Rt){return Gc(Pt)?Pt.ranges.every(ot=>ot.anchor<Rt.length&&ot.head<Rt.length):!1}(u(),st)?On(u()):void 0,tn=vs.create({doc:st,selection:qt,extensions:[sv.of([ub,G]),Ze.of(He()),Qm(),Xm(),Gm(),Zm(),eb(),tb(),nb(),vs.allowMultipleSelections.of(!0),rb(),jp(db,{fallback:!0}),ob(),yb(),wb(),ab(),sb(),ib(),lb(),sv.of([...kb,...vb,...fb,{key:"Mod-z",run:Ue,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:ut,preventDefault:!0},{key:"Ctrl-Shift-z",run:ut,preventDefault:!0},...pb,...Cb,...hb]),L1,Nm({hideFirstIndent:!0}),fs.domEventHandlers({dblclick:_e}),fs.updateListener.of(Pt=>{f(ue,Pt.state),Pt.docChanged&&(Pt.transactions.some(Rt=>!!Rt.annotation(ae))||(I=[...I??[],Pt]),cn()),Pt.selectionSet&&dt()}),Dm(),cb({top:!0}),fs.lineWrapping,re.of(vs.readOnly.of(Ct)),Ee.of(vs.tabSize.of(p())),ie.of(Dn(rt)),At.of(fs.theme({},{dark:Tt()}))]});return Z=new fs({state:tn,parent:xe}),qt&&Z.dispatch(Z.state.update({selection:qt.main,scrollIntoView:!0})),Z}({target:n(de),initialText:bn(n(q),n(ve))?"":n(r).escapeValue(n(q)),readOnly:a(),indentation:h()})}catch(K){console.error(K)}})),uo(()=>{Fe(),Z&&(B("Destroy CodeMirror editor"),Z.destroy())});var W=Ts(),V=Ts();function R(){Z&&(B("focus"),Z.focus())}var et=!1;function kt(K){return tt(K,!1)}function tt(K,xe){B("handlePatch",K,xe);var st=g().parse(n(q)),Ct=To(st,K),rt=hp(st,K);return Mn({text:g().stringify(Ct,null,h())},xe,!1),{json:Ct,previousJson:st,undo:rt,redo:K}}function Xe(){if(B("format"),a())return!1;try{var K=g().parse(n(q));return Mn({text:g().stringify(K,null,h())},!0,!1),f(me,l()),!0}catch(xe){$()(xe)}return!1}function De(){if(B("compact"),a())return!1;try{var K=g().parse(n(q));return Mn({text:g().stringify(K)},!0,!1),f(me,!1),!0}catch(xe){$()(xe)}return!1}function Ie(){if(B("repair"),!a())try{Mn({text:qo(n(q))},!0,!1),f(zn,Kc),f(wn,void 0)}catch(K){$()(K)}}function xt(){var K;if(!a())try{var xe=g().parse(n(q));et=!0,ne()({id:W,json:xe,rootPath:[],onSort:(K=wt(function*(st){var{operations:Ct}=st;B("onSort",Ct),tt(Ct,!0)}),function(st){return K.apply(this,arguments)}),onClose:()=>{et=!1,R()}})}catch(st){$()(st)}}function It(K){var{id:xe,rootPath:st,onTransform:Ct,onClose:rt}=K;try{var qt=g().parse(n(q));et=!0,Q()({id:xe||V,json:qt,rootPath:st||[],onTransform:tn=>{Ct?Ct({operations:tn,json:qt,transformedJson:To(qt,tn)}):(B("onTransform",tn),tt(tn,!0))},onClose:()=>{et=!1,R(),rt&&rt()}})}catch(tn){$()(tn)}}function Be(){a()||It({rootPath:[]})}function be(){Z&&(n(de)&&n(de).querySelector(".cm-search")?jb(Z):xb(Z))}function Ue(){if(a())return!1;Fe();var K=d().undo();return B("undo",K),Dv(K)?(Z.dispatch({annotations:ae.of("undo"),changes:iv.fromJSON(K.undo.changes),selection:Tc.fromJSON(K.undo.selection),scrollIntoView:!0}),!0):(C()(K),!1)}function ut(){if(a())return!1;Fe();var K=d().redo();return B("redo",K),Dv(K)?(Z.dispatch({annotations:ae.of("redo"),changes:iv.fromJSON(K.redo.changes),selection:Tc.fromJSON(K.redo.selection),scrollIntoView:!0}),!0):(y()(K),!1)}function ze(){f(ve,!0),Mn(c(),!0,!0)}function mt(){S()(yr.tree)}function nt(){fn()}function Le(K){B("select validation error",K);var{from:xe,to:st}=an(K);xe!==void 0&&st!==void 0&&(H(xe,st),R())}function H(K,xe){B("setSelection",{anchor:K,head:xe}),Z&&Z.dispatch(Z.state.update({selection:{anchor:K,head:xe},scrollIntoView:!0}))}function _e(K,xe){if(xe.state.selection.ranges.length===1){var st=xe.state.selection.ranges[0],Ct=n(q).slice(st.from,st.to);if(Ct==="{"||Ct==="["){var rt=ov.parse(n(q)),qt=Object.keys(rt.pointers).find(Pt=>{var Rt;return((Rt=rt.pointers[Pt].value)===null||Rt===void 0?void 0:Rt.pos)===st.from}),tn=rt.pointers[qt];qt&&tn&&tn.value&&tn.valueEnd&&(B("pointer found, selecting inner contents of path:",qt,tn),H(tn.value.pos+1,tn.valueEnd.pos-1))}}}function He(){return mb(In,{delay:300})}function Tt(){return!!n(de)&&getComputedStyle(n(de)).getPropertyValue("--jse-theme").includes("dark")}function an(K){var{path:xe,message:st,severity:Ct}=K,{line:rt,column:qt,from:tn,to:Pt}=function(Rt,ot){try{var at=ov.parse(Rt),un=Et(ot),St=at.pointers[un];if(St)return{path:ot,line:St.key?St.key.line:St.value?St.value.line:0,column:St.key?St.key.column:St.value?St.value.column:0,from:St.key?St.key.pos:St.value?St.value.pos:0,to:St.keyEnd?St.keyEnd.pos:St.valueEnd?St.valueEnd.pos:0}}catch(kn){console.error(kn)}return{path:ot,line:0,column:0,from:0,to:0}}(n(r).escapeValue(n(q)),xe);return{path:xe,line:rt,column:qt,from:tn,to:Pt,message:st,severity:Ct,actions:[]}}function Ye(K,xe){var{line:st,column:Ct,position:rt,message:qt}=K;return{path:[],line:st,column:Ct,from:rt,to:rt,severity:Co.error,message:qt,actions:xe&&!a()?[{name:"Auto repair",apply:()=>Ie()}]:void 0}}function Vt(K){return{from:K.from||0,to:K.to||0,message:K.message||"",actions:K.actions,severity:K.severity}}function Mn(K,xe,st){var Ct=Su(K,h(),g()),rt=!Zt(K,te),qt=te;B("setCodeMirrorContent",{isChanged:rt,emitChange:xe,forceUpdate:st}),Z&&(rt||st)&&(te=K,f(q,Ct),bn(n(q),n(ve))||Z.dispatch({changes:{from:0,to:Z.state.doc.length,insert:n(r).escapeValue(n(q))}}),je(),rt&&xe&&pn(te,qt))}function On(K){return Gc(K)?Tc.fromJSON(K):void 0}function Jt(){return Bt.apply(this,arguments)}function Bt(){return Bt=wt(function*(){B("refresh"),yield function(){return sr.apply(this,arguments)}()}),Bt.apply(this,arguments)}function fn(){if(Z){var K=Z?n(r).unescapeValue(Z.state.doc.toString()):"",xe=K!==n(q);if(B("onChangeCodeMirrorValue",{isChanged:xe}),xe){var st=te;f(q,K),te={text:n(q)},je(),pn(te,st),ar(),dt()}}}function sr(){return(sr=wt(function*(){if(ar(),Z){var K=Tt();return B("updateTheme",{dark:K}),Z.dispatch({effects:[At.reconfigure(fs.theme({},{dark:K}))]}),new Promise(xe=>setTimeout(xe))}return Promise.resolve()})).apply(this,arguments)}function Dn(K){var xe=bb.of(typeof K=="number"?" ".repeat(K):K);return K==="	"?[xe]:[xe,V1]}Id({onMount:qr,onDestroy:uo,getWindow:()=>Xi(n(Me)),hasFocus:()=>et&&document.hasFocus()||jd(n(Me)),onFocus:_(),onBlur:()=>{Fe(),T()()}});var cn=El(fn,300);function Fe(){cn.flush()}function pn(K,xe){x()&&x()(K,xe,{contentErrors:Qn(),patchResult:void 0})}function dt(){O()(Qt(n(ue).selection))}function Qt(K){return ge({type:_n.text},K.toJSON())}function bn(K,xe){return!!K&&K.length>Rv&&!xe}var zn=M(Kc,!0),wn=M(void 0,!0);function In(){if(bn(n(q),n(ve)))return[];var K=Qn();if(Tv(K)){var{parseError:xe,isRepairable:st}=K;return[Vt(Ye(xe,st))]}return A0(K)?K.validationErrors.map(an).map(Vt):[]}function Qn(){B("validate:start"),Fe();var K=Or(n(r).escapeValue(n(q)),b(),g(),j());return Tv(K)?(f(zn,K.isRepairable?Iv:"invalid"),f(wn,K.parseError),f(Ce,[])):(f(zn,Kc),f(wn,void 0),f(Ce,(K==null?void 0:K.validationErrors)||[])),B("validate:end"),K}var Or=$i(Dx);function tr(){n(wn)&&function(K){B("select parse error",K);var xe=Ye(K,!1);H(xe.from!=null?xe.from:0,xe.to!=null?xe.to:0),R()}(n(wn))}var pr={icon:Um,text:"Show me",title:"Move to the parse error location",onClick:tr};U(()=>E(m()),()=>{f(r,md({escapeControlCharacters:!1,escapeUnicodeCharacters:m()}))}),U(()=>E(c()),()=>{Mn(c(),!1,!1)}),U(()=>E(u()),()=>{(function(K){if(Gc(K)){var xe=On(K);!Z||!xe||n(ue)&&n(ue).selection.eq(xe)||(B("applyExternalSelection",xe),Z.dispatch({selection:xe}))}})(u())}),U(()=>E(b()),()=>{(function(K){B("updateLinter",K),Z&&Z.dispatch({effects:Ze.reconfigure(He())})})(b())}),U(()=>E(h()),()=>{(function(K){Z&&(B("updateIndentation",K),Z.dispatch({effects:ie.reconfigure(Dn(K))}))})(h())}),U(()=>E(p()),()=>{(function(K){Z&&(B("updateTabSize",K),Z.dispatch({effects:Ee.reconfigure(vs.tabSize.of(K))}))})(p())}),U(()=>E(a()),()=>{(function(K){Z&&(B("updateReadOnly",K),Z.dispatch({effects:[re.reconfigure(vs.readOnly.of(K))]}))})(a())}),U(()=>(n(Ke),E(m())),()=>{n(Ke)!==m()&&(f(Ke,m()),B("forceUpdateText",{escapeUnicodeCharacters:m()}),Z&&Z.dispatch({changes:{from:0,to:Z.state.doc.length,insert:n(r).escapeValue(n(q))}}))}),U(()=>(n(zn),E(a()),Ns),()=>{f(o,n(zn)!==Iv||a()?[pr]:[{icon:Ns,text:"Auto repair",title:"Automatically repair JSON",onClick:Ie},pr])}),ln(),pt(!0);var br,vr=Y1(),Wn=A(vr),nr=K=>{var xe=fe(()=>n(q).length===0),st=fe(()=>!n(xe)),Ct=fe(()=>!n(xe)),rt=fe(()=>!n(xe)),qt=fe(()=>!n(xe));(function(tn,Pt){lt(Pt,!1);var Rt=M(void 0,!0),ot=v(Pt,"readOnly",9,!1),at=v(Pt,"onFormat",9),un=v(Pt,"onCompact",9),St=v(Pt,"onSort",9),kn=v(Pt,"onTransform",9),nn=v(Pt,"onToggleSearch",9),Dt=v(Pt,"onUndo",9),hn=v(Pt,"onRedo",9),Ut=v(Pt,"canUndo",9),rr=v(Pt,"canRedo",9),D=v(Pt,"canFormat",9),X=v(Pt,"canCompact",9),ke=v(Pt,"canSort",9),$t=v(Pt,"canTransform",9),rn=v(Pt,"onRenderMenu",9),Kt={type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:nn()},Cn=M(void 0,!0);U(()=>(E(ot()),E(at()),E(D()),E(un()),E(X()),E(St()),E(ke()),E(kn()),E($t()),E(Dt()),E(Ut()),E(hn()),E(rr())),()=>{f(Cn,ot()?[Kt,{type:"space"}]:[{type:"button",icon:vf,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:at(),disabled:ot()||!D()},{type:"button",icon:Fy,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:un(),disabled:ot()||!X()},{type:"separator"},{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:St(),disabled:ot()||!ke()},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:kn(),disabled:ot()||!$t()},Kt,{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Dt(),disabled:!Ut()},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:hn(),disabled:!rr()},{type:"space"}])}),U(()=>(E(rn()),n(Cn)),()=>{f(Rt,rn()(n(Cn))||n(Cn))}),ln(),pt(!0),kc(tn,{get items(){return n(Rt)}}),ct()})(K,{get readOnly(){return a()},onFormat:Xe,onCompact:De,onSort:xt,onTransform:Be,onToggleSearch:be,onUndo:Ue,onRedo:ut,get canFormat(){return n(st)},get canCompact(){return n(Ct)},get canSort(){return n(rt)},get canTransform(){return n(qt)},get canUndo(){return d().canUndo},get canRedo(){return d().canRedo},get onRenderMenu(){return z()}})};Y(Wn,K=>{s()&&K(nr)});var le=N(Wn,2),Nt=K=>{var xe,st=J1(),Ct=fe(()=>bn(n(q),n(ve))),rt=Ne(st);Yn(rt,ot=>f(de,ot),()=>n(de));var qt=N(rt,2),tn=ot=>{var at=W1(),un=Ne(at),St=fe(()=>"The JSON document is larger than ".concat(gf(Rv,1024),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(gf(n(q).length,1024),"."));$o(un,{icon:Xa,type:"error",get message(){return n(St)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:ze},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:mt},{text:"Cancel",title:"Cancel opening this large document.",onClick:nt}],onClose:R});var kn=A(N(un,2));we(nn=>gt(kn,nn),[()=>_i(n(q)||"",Eu)],fe),P(ot,at)};Y(qt,ot=>{n(Ct)&&ot(tn)});var Pt=N(qt,2),Rt=ot=>{var at=H1(),un=Ne(at),St=Ut=>{(function(rr,D){lt(D,!1);var X=v(D,"editorState",8),ke=M(),$t=M(),rn=M(),Kt=M(),Cn=M();U(()=>E(X()),()=>{var ft;f(ke,(ft=X())===null||ft===void 0||(ft=ft.selection)===null||ft===void 0||(ft=ft.main)===null||ft===void 0?void 0:ft.head)}),U(()=>(n(ke),E(X())),()=>{var ft;f($t,n(ke)!==void 0?(ft=X())===null||ft===void 0||(ft=ft.doc)===null||ft===void 0?void 0:ft.lineAt(n(ke)):void 0)}),U(()=>n($t),()=>{f(rn,n($t)!==void 0?n($t).number:void 0)}),U(()=>(n($t),n(ke)),()=>{f(Kt,n($t)!==void 0&&n(ke)!==void 0?n(ke)-n($t).from+1:void 0)}),U(()=>E(X()),()=>{var ft;f(Cn,(ft=X())===null||ft===void 0||(ft=ft.selection)===null||ft===void 0||(ft=ft.ranges)===null||ft===void 0?void 0:ft.reduce((dn,gn)=>dn+gn.to-gn.from,0))}),ln(),pt();var Bn=B1(),An=A(Bn),ir=ft=>{var dn=N1(),gn=A(dn);we(()=>{var Ln;return gt(gn,"Line: ".concat((Ln=n(rn))!==null&&Ln!==void 0?Ln:""))}),P(ft,dn)};Y(An,ft=>{n(rn)!==void 0&&ft(ir)});var Te=N(An,2),Tn=ft=>{var dn=D1(),gn=A(dn);we(()=>{var Ln;return gt(gn,"Column: ".concat((Ln=n(Kt))!==null&&Ln!==void 0?Ln:""))}),P(ft,dn)};Y(Te,ft=>{n(Kt)!==void 0&&ft(Tn)});var Lt=N(Te,2),zr=ft=>{var dn=U1(),gn=A(dn);we(()=>{var Ln;return gt(gn,"Selection: ".concat((Ln=n(Cn))!==null&&Ln!==void 0?Ln:""," characters"))}),P(ft,dn)};Y(Lt,ft=>{n(Cn)!==void 0&&n(Cn)>0&&ft(zr)}),P(rr,Bn),ct()})(Ut,{get editorState(){return n(ue)}})};Y(un,Ut=>{i()&&Ut(St)});var kn=N(un,2),nn=Ut=>{$o(Ut,{type:"error",icon:Xa,get message(){return n(wn).message},get actions(){return n(o)},onClick:tr,onClose:R})};Y(kn,Ut=>{n(wn)&&Ut(nn)});var Dt=N(kn,2),hn=Ut=>{$o(Ut,{type:"success",message:"Do you want to format the JSON?",actions:[{icon:vf,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Xe},{icon:oc,text:"No thanks",title:"Close this message",onClick:()=>f(me,!1)}],onClose:R})};Y(Dt,Ut=>{var rr,D;!n(wn)&&n(me)&&(rr=n(q),!(D=rr.substring(0,999).trim()).includes(`
`)&&t0.test(D))&&Ut(hn)}),qd(N(Dt,2),{get validationErrors(){return n(Ce)},selectError:Le}),P(ot,at)};Y(Pt,ot=>{n(Ct)||ot(Rt)}),we(()=>xe=Ot(rt,1,"jse-contents svelte-xt61xw",null,xe,{"jse-hidden":n(Ct)})),P(K,st)},Un=K=>{P(K,K1())};return Y(le,K=>{pe?K(Un,!1):K(Nt)}),Yn(vr,K=>f(Me,K),()=>n(Me)),we(()=>br=Ot(vr,1,"jse-text-mode svelte-xt61xw",null,br,{"no-main-menu":!s()})),P(e,vr),yt(t,"focus",R),yt(t,"patch",kt),yt(t,"handlePatch",tt),yt(t,"openTransformModal",It),yt(t,"refresh",Jt),yt(t,"flush",Fe),yt(t,"validate",Qn),ct({focus:R,patch:kt,handlePatch:tt,openTransformModal:It,refresh:Jt,flush:Fe,validate:Qn})}jt(`/* over all fonts, sizes, and colors */
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
}`);var X1=F('<button type="button"> </button>');jt(`/* over all fonts, sizes, and colors */
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
}`);var G1=F('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>'),Z1=F('<button type="button"><span class="jse-column-name"> </span> <!></button>');jt(`/* over all fonts, sizes, and colors */
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
}`);var ew=F("You can open the document in tree mode instead, or paste a JSON Array using <b>Ctrl+V</b>.",1),tw=F('<button type="button" class="jse-nested-array-action svelte-1q0ce0e"> <span class="jse-nested-array-count svelte-1q0ce0e"> </span></button>'),nw=F('<div class="jse-table-mode-welcome svelte-1q0ce0e" role="none"><div class="jse-space jse-before svelte-1q0ce0e"></div> <div class="jse-nested-arrays svelte-1q0ce0e"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1q0ce0e"><!> <!></div> <!> <button type="button" class="jse-nested-array-action svelte-1q0ce0e"> </button></div> <div class="jse-space jse-after svelte-1q0ce0e"></div></div>');function rw(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=M(void 0,!0),i=v(t,"text",9),l=v(t,"json",9),c=v(t,"readOnly",9),u=v(t,"parser",9),d=v(t,"openJSONEditorModal",9),h=v(t,"onChangeMode",9),p=v(t,"onClick",9),m=M(void 0,!0);U(()=>E(c()),()=>{f(r,c()?"View":"Edit")}),U(()=>(E(l()),hf),()=>{f(m,l()?hf(l()).slice(0,99).filter(B=>B.length>0):[])}),U(()=>n(m),()=>{f(o,!Rn(n(m)))}),U(()=>(E(l()),E(i())),()=>{f(a,l()===void 0&&(i()===""||i()===void 0))}),U(()=>(n(o),n(a),E(l()),E(u())),()=>{f(s,n(o)?"Object with nested arrays":n(a)?"An empty document":$r(l())?"An object":wr(l())?"An empty array":"A ".concat(gd(l(),u())))}),ln(),pt(!0);var g=nw(),b=N(A(g),2),j=A(b),x=A(j),S=N(j,2),O=A(S),C=B=>{P(B,Lr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},y=B=>{var G=Lr();we(()=>{var pe;return gt(G,"".concat((pe=n(s))!==null&&pe!==void 0?pe:""," cannot be opened in table mode."))}),P(B,G)};Y(O,B=>{n(o)?B(C):B(y,!1)});var $=N(O,2),_=B=>{P(B,ew())},T=B=>{P(B,Lr("You can open the document in tree mode instead."))};Y($,B=>{n(a)&&!c()?B(_):B(T,!1)});var z=N(S,2);dr(z,1,()=>n(m),mr,(B,G)=>{var pe=tw(),Z=fe(()=>function(ue){return Je(l(),ue).length}(n(G))),de=A(pe),Me=A(N(de));we(ue=>{var ve,me,Ce;gt(de,"".concat((ve=n(r))!==null&&ve!==void 0?ve:"",' "').concat(ue??"",'" ')),gt(Me,"(".concat((me=n(Z))!==null&&me!==void 0?me:""," ").concat((Ce=n(Z)!==1?"items":"item")!==null&&Ce!==void 0?Ce:"",")"))},[()=>ko(n(G))],fe),se("click",pe,()=>d()(n(G))),P(B,pe)});var ne=N(z,2),Q=A(ne);we(()=>{var B;gt(x,n(s)),gt(Q,"".concat((B=n(r))!==null&&B!==void 0?B:""," in tree mode"))}),se("click",ne,()=>h()(yr.tree)),se("click",g,()=>p()()),P(e,g),ct()}jt(`/* over all fonts, sizes, and colors */
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
}`);var ow=F('<button type="button"><!></button>');jt(`/* over all fonts, sizes, and colors */
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
}`);var aw=F('<div class="jse-table-root-error svelte-u14cgx"><!></div>'),sw=F('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),iw=F('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),lw=F('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>'),cw=F('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>'),uw=F('<td class="jse-table-cell svelte-u14cgx"><div><!><!></div> <!></td>'),dw=F('<td class="jse-table-cell svelte-u14cgx"></td>'),vw=F('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>'),fw=F('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!>',1),pw=F("<!> <!>",1),hw=F('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"></label> <!>',1),gw=F('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>'),mw=F('<div role="table"><!> <!></div> <!> <!>',1);function bw(e,t){lt(t,!1);var r=M(void 0,!0),o=M(void 0,!0),a=M(void 0,!0),s=Sr("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=Ba("absolute-popup"),c=Qh(),u=Ts(),d=Ts(),h=typeof window>"u";s("isSSR:",h);var p=v(t,"readOnly",9),m=v(t,"externalContent",9),g=v(t,"externalSelection",9),b=v(t,"history",9),j=v(t,"mainMenuBar",9),x=v(t,"escapeControlCharacters",9),S=v(t,"escapeUnicodeCharacters",9),O=v(t,"flattenColumns",9),C=v(t,"parser",9),y=v(t,"parseMemoizeOne",9),$=v(t,"validator",9),_=v(t,"validationParser",9),T=v(t,"indentation",9),z=v(t,"onChange",9),ne=v(t,"onChangeMode",9),Q=v(t,"onSelect",9),B=v(t,"onUndo",9),G=v(t,"onRedo",9),pe=v(t,"onRenderValue",9),Z=v(t,"onRenderMenu",9),de=v(t,"onRenderContextMenu",9),Me=v(t,"onFocus",9),ue=v(t,"onBlur",9),ve=v(t,"onSortModal",9),me=v(t,"onTransformModal",9),Ce=v(t,"onJSONEditorModal",9),Ze=M(void 0,!0),re=M(void 0,!0),ie=M(void 0,!0),Ee=M(void 0,!0),At=M(void 0,!0);Id({onMount:qr,onDestroy:uo,getWindow:()=>Xi(n(re)),hasFocus:()=>xt&&document.hasFocus()||jd(n(re)),onFocus:()=>{It=!0,Me()&&Me()()},onBlur:()=>{It=!1,ue()&&ue()()}});var te,q=M(void 0,!0),ae=M(void 0,!0),I=M(void 0,!0),je=M(void 0,!0),Ke=M(void 0,!0),W=M(!1,!0),V=M(!1,!0);function R(k){f(Ke,(te=k)?Th(n(q),te.items):void 0)}function et(k){return kt.apply(this,arguments)}function kt(){return(kt=wt(function*(k){f(H,void 0),yield bn(k)})).apply(this,arguments)}function tt(){f(W,!1),f(V,!1),Fe()}var Xe=M(1e4,!0),De=M([],!0),Ie=M(void 0,!0),xt=!1,It=!1,Be=M(!1,!0),be=M({},!0),Ue=M(600,!0),ut=M(0,!0),ze=18;function mt(k){f(H,k)}function nt(k){n(H)&&k!==void 0&&(ka(k,Ka(n(H)))&&ka(k,Qe(n(H)))||(s("clearing selection: path does not exist anymore",n(H)),f(H,void 0)))}var Le=M(n(q)!==void 0?Mu({json:n(q)}):void 0,!0),H=M(Ni(g())?g():void 0,!0),_e=M(void 0,!0),He=M(!1,!0);function Tt(k){if(!p()){s("onSortByHeader",k);var J=k.sortDirection===go.desc?-1:1;fn(tg(n(q),[],k.path,J),(ce,he)=>({state:he,sortedColumn:k}))}}qr(()=>{n(H)&&wn(Qe(n(H)))});var an=M(void 0,!0);function Ye(k){if(k.json!==void 0||k.text!==void 0){var J=n(q)!==void 0&&k.json!==void 0;b().add({type:"tree",undo:{patch:J?[{op:"replace",path:"",value:k.json}]:void 0,json:k.json,text:k.text,documentState:k.documentState,textIsRepaired:k.textIsRepaired,selection:_o(k.selection),sortedColumn:k.sortedColumn},redo:{patch:J?[{op:"replace",path:"",value:n(q)}]:void 0,json:n(q),text:n(ae),documentState:n(Le),textIsRepaired:n(He),selection:_o(n(H)),sortedColumn:n(_e)}})}}var Vt=M([],!0),Mn=$i(Xh);function On(k,J,ce,he){Es(()=>{var ye;try{ye=Mn(k,J,ce,he)}catch(Re){ye=[{path:[],message:"Failed to validate: "+Re.message,severity:Co.warning}]}Zt(ye,n(Vt))||(s("validationErrors changed:",ye),f(Vt,ye))},ye=>s("validationErrors updated in ".concat(ye," ms")))}function Jt(){return s("validate"),n(I)?{parseError:n(I),isRepairable:!1}:(On(n(q),$(),C(),_()),Rn(n(Vt))?void 0:{validationErrors:n(Vt)})}function Bt(k,J){if(s("patch",k,J),n(q)===void 0)throw new Error("Cannot apply patch: no JSON");var ce=n(q),he={json:void 0,text:n(ae),documentState:n(Le),selection:_o(n(H)),sortedColumn:n(_e),textIsRepaired:n(He)},ye=qh(n(q),k),Re=Sh(n(q),n(Le),k),Ae=v1(n(_e),k,n(De)),We=typeof J=="function"?J(Re.json,Re.documentState,n(H)):void 0;return f(q,(We==null?void 0:We.json)!==void 0?We.json:Re.json),f(Le,(We==null?void 0:We.state)!==void 0?We.state:Re.documentState),f(H,(We==null?void 0:We.selection)!==void 0?We.selection:n(H)),f(_e,(We==null?void 0:We.sortedColumn)!==void 0?We.sortedColumn:Ae),f(ae,void 0),f(He,!1),f(je,void 0),f(I,void 0),b().add({type:"tree",undo:ge({patch:ye},he),redo:{patch:k,json:void 0,text:void 0,documentState:n(Le),selection:_o(n(H)),sortedColumn:n(_e),textIsRepaired:n(He)}}),{json:n(q),previousJson:ce,undo:ye,redo:k}}function fn(k,J){s("handlePatch",k,J);var ce={json:n(q),text:n(ae)},he=Bt(k,J);return sr(ce,he),he}function sr(k,J){if((k.json!==void 0||(k==null?void 0:k.text)!==void 0)&&z()){if(n(ae)!==void 0){var ce={text:n(ae),json:void 0};z()(ce,k,{contentErrors:Jt(),patchResult:J})}else if(n(q)!==void 0){var he={text:void 0,json:n(q)};z()(he,k,{contentErrors:Jt(),patchResult:J})}}}function Dn(k){s("pasted json as text",k),f(je,k)}function cn(k){var J=parseInt(k[0],10),ce=[String(J+1),...k.slice(1)];return ka(n(q),ce)?Yt(ce):Yt(k)}function Fe(){s("focus"),n(Ee)&&(n(Ee).focus(),n(Ee).select())}function pn(k){f(ut,k.target.scrollTop)}function dt(){n(H)||f(H,function(){if(wr(n(q))&&!Rn(n(q))&&!Rn(n(De)))return Yt(["0",...n(De)[0]])}())}function Qt(){if(n(He)&&n(q)!==void 0){var k={json:n(q),text:n(ae)},J={json:n(q),documentState:n(Le),selection:n(H),sortedColumn:n(_e),text:n(ae),textIsRepaired:n(He)};f(ae,void 0),f(He,!1),nt(n(q)),Ye(J),sr(k,void 0)}return{json:n(q),text:n(ae)}}function bn(k){var J=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ce=n(W)?yi:0,he=pf(k,n(De),be,ze),ye=he-n(ut)+ce+ze,Re=In(k);if(s("scrollTo",{path:k,top:he,scrollTop:n(ut),elem:Re}),!n(ie))return Promise.resolve();var Ae=n(ie).getBoundingClientRect();if(Re&&!J){var We=Re.getBoundingClientRect();if(We.bottom>Ae.top&&We.top<Ae.bottom)return Promise.resolve()}var zt=-Math.max(ce+2*ze,Ae.height/4);return new Promise(Re?Xt=>{c(Re,{container:n(ie),offset:zt,duration:300,callback:()=>{zn(k),Xt()}})}:Xt=>{c(ye,{container:n(ie),offset:zt,duration:300,callback:()=>{ar(),zn(k),Xt()}})})}function zn(k){var J=In(k);if(J&&n(ie)){var ce=n(ie).getBoundingClientRect(),he=J.getBoundingClientRect();if(he.right>ce.right){var ye=he.right-ce.right;ro(ie,n(ie).scrollLeft+=ye)}if(he.left<ce.left){var Re=ce.left-he.left;ro(ie,n(ie).scrollLeft-=Re)}}}function wn(k){(function(J){if(n(ie)){var{rowIndex:ce}=io(J,n(De)),he=pf(J,n(De),be,ze),ye=he+(be[ce]||ze),Re=ze,Ae=n(ie).getBoundingClientRect(),We=n(ut),zt=n(ut)+Ae.height-Re;if(ye>zt){var Xt=ye-zt;ro(ie,n(ie).scrollTop+=Xt)}if(he<We){var Gt=We-he;ro(ie,n(ie).scrollTop-=Gt)}}})(k),zn(k)}function In(k){var J,ce,he=n(De).find(Re=>ua(k.slice(1),Re)),ye=he?k.slice(0,1).concat(he):k;return(J=(ce=n(ie))===null||ce===void 0?void 0:ce.querySelector('td[data-path="'.concat(Ou(ye),'"]')))!==null&&J!==void 0?J:void 0}function Qn(k){var J,{anchor:ce,left:he,top:ye,width:Re,height:Ae,offsetTop:We,offsetLeft:zt,showTip:Xt}=k,Gt=function(L){var{json:oe,documentState:qe,selection:$e,readOnly:Se,onEditValue:Oe,onEditRow:Ve,onToggleEnforceString:vt,onCut:sn,onCopy:Wt,onPaste:Pn,onRemove:ht,onDuplicateRow:lr,onInsertBeforeRow:qn,onInsertAfterRow:Xn,onRemoveRow:it}=L,Pe=oe!==void 0,Mt=!!$e,fr=oe!==void 0&&$e?Je(oe,Qe($e)):void 0,Sn=Pe&&(Jn($e)||kr($e)||En($e)),mn=!Se&&Pe&&$e!==void 0&&Ll($e),Nn=mn&&!gr(fr),hr=!Se&&Sn,_t=$e!==void 0&&aa(oe,qe,Qe($e));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>Oe(),icon:$s,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!mn},width:"11em",items:[{type:"button",icon:$s,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>Oe(),disabled:!mn},{type:"button",icon:_t?up:dp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>vt(),disabled:!Nn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>sn(!0),icon:Ms,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!hr},width:"10em",items:[{type:"button",icon:Ms,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>sn(!0),disabled:Se||!Sn},{type:"button",icon:Ms,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>sn(!1),disabled:Se||!Sn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Wt(!0),icon:wa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Sn},width:"12em",items:[{type:"button",icon:wa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Wt(!1),disabled:!Sn},{type:"button",icon:wa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Wt(!1),disabled:!Sn}]},{type:"button",onClick:()=>Pn(),icon:vp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Se||!Mt},{type:"button",onClick:()=>ht(),icon:pu,text:"Remove",title:"Remove selected contents (Delete)",disabled:Se||!Sn}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Ve(),icon:$s,text:"Edit row",title:"Edit the current row",disabled:Se||!Mt||!Pe},{type:"button",onClick:()=>lr(),icon:fp,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Se||!Mt||!Pe},{type:"button",onClick:()=>qn(),icon:ks,text:"Insert before",title:"Insert a row before the current row",disabled:Se||!Mt||!Pe},{type:"button",onClick:()=>Xn(),icon:ks,text:"Insert after",title:"Insert a row after the current row",disabled:Se||!Mt||!Pe},{type:"button",onClick:()=>it(),icon:pu,text:"Remove row",title:"Remove current row",disabled:Se||!Mt||!Pe}]}]}]}({json:n(q),documentState:n(Le),selection:n(H),readOnly:p(),onEditValue:pr,onEditRow:br,onToggleEnforceString:vr,onCut:xe,onCopy:Ct,onPaste:le,onRemove:qt,onDuplicateRow:tn,onInsertBeforeRow:Pt,onInsertAfterRow:Rt,onRemoveRow:ot}),jn=(J=de()(Gt))!==null&&J!==void 0?J:Gt;if(jn!==!1){var xn={left:he,top:ye,offsetTop:We,offsetLeft:zt,width:Re,height:Ae,anchor:ce,closeOnOuterClick:!0,onClose:()=>{xt=!1,Fe()}};xt=!0;var w=i(dg,{tip:Xt?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:jn,onRequestClose(){l(w),Fe()}},xn)}}function Or(k){if(!Jr(n(H)))if(k&&(k.stopPropagation(),k.preventDefault()),k&&k.type==="contextmenu"&&k.target!==n(Ee))Qn({left:k.clientX,top:k.clientY,width:Zo,height:Go,showTip:!1});else{var J,ce=(J=n(ie))===null||J===void 0?void 0:J.querySelector(".jse-table-cell.jse-selected-value");if(ce)Qn({anchor:ce,offsetTop:2,width:Zo,height:Go,showTip:!1});else{var he,ye=(he=n(ie))===null||he===void 0?void 0:he.getBoundingClientRect();ye&&Qn({top:ye.top+2,left:ye.left+2,width:Zo,height:Go,showTip:!1})}}}function tr(k){Qn({anchor:xh(k.target,"BUTTON"),offsetTop:0,width:Zo,height:Go,showTip:!0})}function pr(){if(!p()&&n(H)){var k=Qe(n(H));gr(Je(n(q),k))?Ut(k):f(H,Yt(k))}}function br(){!p()&&n(H)&&Ut(Qe(n(H)).slice(0,1))}function vr(){if(!p()&&En(n(H))){var k=n(H).path,J=Et(k),ce=Je(n(q),k),he=!aa(n(q),n(Le),k),ye=he?String(ce):ti(String(ce),C());s("handleToggleEnforceString",{enforceString:he,value:ce,updatedValue:ye}),fn([{op:"replace",path:J,value:ye}],(Re,Ae)=>({state:bc(n(q),Ae,k,{type:"value",enforceString:he})}))}}function Wn(){return nr.apply(this,arguments)}function nr(){return(nr=wt(function*(){if(s("apply pasted json",n(je)),n(je)){var{onPasteAsJson:k}=n(je);k(),setTimeout(Fe)}})).apply(this,arguments)}function le(){return Nt.apply(this,arguments)}function Nt(){return(Nt=wt(function*(){try{St(yield navigator.clipboard.readText())}catch(k){console.error(k),f(Be,!0)}})).apply(this,arguments)}function Un(){s("clear pasted json"),f(je,void 0),Fe()}function K(){ne()(yr.text)}function xe(k){return st.apply(this,arguments)}function st(){return(st=wt(function*(k){yield ag({json:n(q),selection:n(H),indentation:k?T():void 0,readOnly:p(),parser:C(),onPatch:fn})})).apply(this,arguments)}function Ct(){return rt.apply(this,arguments)}function rt(){return rt=wt(function*(){var k=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(q)!==void 0&&(yield sg({json:n(q),selection:n(H),indentation:k?T():void 0,parser:C()}))}),rt.apply(this,arguments)}function qt(){lg({json:n(q),text:n(ae),selection:n(H),keepSelection:!0,readOnly:p(),onChange:z(),onPatch:fn})}function tn(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=io(Qe(ce),he);Ur("duplicate row",{rowIndex:Ae});var zt=[String(Ae)];Re(Rh(J,[zt]),(Xt,Gt)=>({state:Gt,selection:Yt(Va({rowIndex:Ae<J.length?Ae+1:Ae,columnIndex:We},he))}))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function Pt(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae}=io(Qe(ce),he);Ur("insert before row",{rowIndex:Ae}),Re(zs(J,[String(Ae)],[{key:"",value:$r(J[0])?{}:""}]))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function Rt(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=io(Qe(ce),he);Ur("insert after row",{rowIndex:Ae});var zt=Ae+1,Xt=[String(zt)],Gt=[{key:"",value:$r(J[0])?{}:""}];Re(zt<J.length?zs(J,Xt,Gt):Pu(J,[],Gt),(jn,xn)=>({state:xn,selection:Yt(Va({rowIndex:zt,columnIndex:We},he))}))}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function ot(){(function(k){var{json:J,selection:ce,columns:he,readOnly:ye,onPatch:Re}=k;if(!ye&&J!==void 0&&ce&&Os(ce)){var{rowIndex:Ae,columnIndex:We}=io(Qe(ce),he);Ur("remove row",{rowIndex:Ae}),Re(Vl([[String(Ae)]]),(zt,Xt)=>{var Gt=Ae<zt.length?Ae:Ae>0?Ae-1:void 0,jn=Gt!==void 0?Yt(Va({rowIndex:Gt,columnIndex:We},he)):void 0;return Ur("remove row new selection",{rowIndex:Ae,newRowIndex:Gt,newSelection:jn}),{state:Xt,selection:jn}})}})({json:n(q),selection:n(H),columns:n(De),readOnly:p(),onPatch:fn})}function at(){return(at=wt(function*(k){yield cg({char:k,selectInside:!1,json:n(q),selection:n(H),readOnly:p(),parser:C(),onPatch:fn,onReplaceJson:kn,onSelect:mt})})).apply(this,arguments)}function un(k){var J;k.preventDefault(),St((J=k.clipboardData)===null||J===void 0?void 0:J.getData("text/plain"))}function St(k){k!==void 0&&ig({clipboardText:k,json:n(q),selection:n(H),readOnly:p(),parser:C(),onPatch:fn,onChangeText:nn,openRepairModal:rr})}function kn(k,J){var ce={json:n(q),text:n(ae)},he={json:n(q),documentState:n(Le),selection:n(H),sortedColumn:n(_e),text:n(ae),textIsRepaired:n(He)},ye=no(k,n(Le)),Re=typeof J=="function"?J(k,ye,n(H)):void 0;f(q,(Re==null?void 0:Re.json)!==void 0?Re.json:k),f(Le,(Re==null?void 0:Re.state)!==void 0?Re.state:ye),f(H,(Re==null?void 0:Re.selection)!==void 0?Re.selection:n(H)),f(_e,void 0),f(ae,void 0),f(He,!1),f(I,void 0),nt(n(q)),Ye(he),sr(ce,void 0)}function nn(k,J){s("handleChangeText");var ce={json:n(q),text:n(ae)},he={json:n(q),documentState:n(Le),selection:n(H),sortedColumn:n(_e),text:n(ae),textIsRepaired:n(He)};try{f(q,y()(k)),f(Le,no(n(q),n(Le))),f(ae,void 0),f(He,!1),f(I,void 0)}catch(Re){try{f(q,y()(qo(k))),f(Le,no(n(q),n(Le))),f(ae,k),f(He,!0),f(I,void 0)}catch{f(q,void 0),f(Le,void 0),f(ae,k),f(He,!1),f(I,n(ae)!==""?Us(n(ae),Re.message||String(Re)):void 0)}}if(typeof J=="function"){var ye=J(n(q),n(Le),n(H));f(q,(ye==null?void 0:ye.json)!==void 0?ye.json:n(q)),f(Le,(ye==null?void 0:ye.state)!==void 0?ye.state:n(Le)),f(H,(ye==null?void 0:ye.selection)!==void 0?ye.selection:n(H))}nt(n(q)),Ye(he),sr(ce,void 0)}function Dt(k){s("select validation error",k),f(H,Yt(k.path)),bn(k.path)}function hn(k){if(n(q)!==void 0){var{id:J,onTransform:ce,onClose:he}=k,ye=k.rootPath||[];xt=!0,me()({id:J||d,json:n(q),rootPath:ye||[],onTransform:Re=>{ce?ce({operations:Re,json:n(q),transformedJson:To(n(q),Re)}):(s("onTransform",ye,Re),fn(Re))},onClose:()=>{xt=!1,setTimeout(Fe),he&&he()}})}}function Ut(k){s("openJSONEditorModal",{path:k}),xt=!0,Ce()({content:{json:Je(n(q),k)},path:k,onPatch:fn,onClose:()=>{xt=!1,setTimeout(Fe)}})}function rr(k,J){f(At,{text:k,onParse:ce=>gc(ce,he=>Qi(he,C())),onRepair:vh,onApply:J,onClose:Fe})}function D(){(function(k){p()||n(q)===void 0||(xt=!0,ve()({id:u,json:n(q),rootPath:k,onSort:J=>{var{operations:ce,itemPath:he,direction:ye}=J;s("onSort",ce,k,he,ye),fn(ce,(Re,Ae)=>({state:Ae,sortedColumn:{path:he,sortDirection:ye===-1?go.desc:go.asc}}))},onClose:()=>{xt=!1,setTimeout(Fe)}}))})([])}function X(){hn({rootPath:[]})}function ke(k){s("openFind",{findAndReplace:k}),f(W,!1),f(V,!1),ar(),f(W,!0),f(V,k)}function $t(){if(!p()&&b().canUndo){var k=b().undo();if(Bl(k)){var J={json:n(q),text:n(ae)};f(q,k.undo.patch?To(n(q),k.undo.patch):k.undo.json),f(Le,k.undo.documentState),f(H,k.undo.selection),f(_e,k.undo.sortedColumn),f(ae,k.undo.text),f(He,k.undo.textIsRepaired),f(I,void 0),s("undo",{item:k,json:n(q)}),sr(J,k.undo.patch&&k.redo.patch?{json:n(q),previousJson:J.json,redo:k.undo.patch,undo:k.redo.patch}:void 0),Fe(),n(H)&&bn(Qe(n(H)),!1)}else B()(k)}}function rn(){if(!p()&&b().canRedo){var k=b().redo();if(Bl(k)){var J={json:n(q),text:n(ae)};f(q,k.redo.patch?To(n(q),k.redo.patch):k.redo.json),f(Le,k.redo.documentState),f(H,k.redo.selection),f(_e,k.redo.sortedColumn),f(ae,k.redo.text),f(He,k.redo.textIsRepaired),f(I,void 0),s("redo",{item:k,json:n(q)}),sr(J,k.undo.patch&&k.redo.patch?{json:n(q),previousJson:J.json,redo:k.redo.patch,undo:k.undo.patch}:void 0),Fe(),n(H)&&bn(Qe(n(H)),!1)}else G()(k)}}function Kt(k){f(Ue,k.getBoundingClientRect().height)}U(()=>(E(x()),E(S())),()=>{f(Ze,md({escapeControlCharacters:x(),escapeUnicodeCharacters:S()}))}),U(()=>n(W),()=>{(function(k){if(n(ie)){var J=k?yi:-100;n(ie).scrollTo({top:ro(ie,n(ie).scrollTop+=J),left:n(ie).scrollLeft})}})(n(W))}),U(()=>E(m()),()=>{(function(k){var J={json:n(q)},ce=Pi(k)?k.text!==n(ae):!Zt(J.json,k.json);if(s("update external content",{isChanged:ce}),ce){var he={json:n(q),documentState:n(Le),selection:n(H),sortedColumn:n(_e),text:n(ae),textIsRepaired:n(He)};if(Pi(k))try{f(q,y()(k.text)),f(Le,no(n(q),n(Le))),f(ae,k.text),f(He,!1),f(I,void 0)}catch(ye){try{f(q,y()(qo(k.text))),f(Le,no(n(q),n(Le))),f(ae,k.text),f(He,!0),f(I,void 0)}catch{f(q,void 0),f(Le,void 0),f(ae,k.text),f(He,!1),f(I,n(ae)!==""?Us(n(ae),ye.message||String(ye)):void 0)}}else f(q,k.json),f(Le,no(n(q),n(Le))),f(ae,void 0),f(He,!1),f(I,void 0);nt(n(q)),f(_e,void 0),Ye(he)}})(m())}),U(()=>E(g()),()=>{(function(k){Zt(n(H),k)||(s("applyExternalSelection",{selection:n(H),externalSelection:k}),Ni(k)&&f(H,k))})(g())}),U(()=>(n(De),n(q),E(O()),n(Xe)),()=>{f(De,wr(n(q))?function(k,J){var ce=new Set(J.map(Et)),he=new Set(k.map(Et));for(var ye of ce)he.has(ye)||ce.delete(ye);for(var Re of he)ce.has(Re)||ce.add(Re);return[...ce].map(Io)}(l1(n(q),O(),n(Xe)),n(De)):[])}),U(()=>(n(q),n(De)),()=>{f(Ie,!(!n(q)||Rn(n(De))))}),U(()=>(n(q),n(Xe)),()=>{f(r,Array.isArray(n(q))&&n(q).length>n(Xe))}),U(()=>(n(ut),n(Ue),n(q),n(W),yi),()=>{f(o,c1(n(ut),n(Ue),n(q),be,ze,n(W)?yi:0))}),U(()=>n(q),()=>{n(q),n(ie)&&n(ie).scrollTo({top:n(ie).scrollTop,left:n(ie).scrollLeft})}),U(()=>n(H),()=>{var k;k=n(H),Zt(k,g())||(s("onSelect",k),Q()(k))}),U(()=>(E(p()),E(C()),n(Ze),n(q),n(Le),E(pe())),()=>{f(an,{mode:yr.table,readOnly:p(),parser:C(),normalization:n(Ze),getJson:()=>n(q),getDocumentState:()=>n(Le),findElement:In,findNextInside:cn,focus:Fe,onPatch:(k,J)=>fn(function(ce,he){return ce.flatMap(ye=>{if(od(ye)){var Re=Io(ye.path);if(Re.length>0){for(var Ae=[ye],We=on(Re);We.length>0&&!ka(he,We);)Ae.unshift({op:"add",path:Et(We),value:{}}),We=on(We);return Ae}}return ye})}(k,n(q)),J),onSelect:mt,onFind:ke,onPasteJson:Dn,onRenderValue:pe()})}),U(()=>(n(q),E($()),E(C()),E(_())),()=>{On(n(q),$(),C(),_())}),U(()=>(n(Vt),n(De)),()=>{f(a,u1(n(Vt),n(De)))}),ln(),pt(!0);var Cn=mw();se("mousedown",oa,function(k){!ni(k.target,J=>J===n(re))&&Jr(n(H))&&(s("click outside the editor, exit edit mode"),f(H,_o(n(H))),It&&n(Ee)&&(n(Ee).focus(),n(Ee).blur()),s("blur (outside editor)"),n(Ee)&&n(Ee).blur())});var Bn,An=Ne(Cn),ir=A(An),Te=k=>{(function(J,ce){lt(ce,!1);var he=v(ce,"containsValidArray",9),ye=v(ce,"readOnly",9),Re=v(ce,"showSearch",13,!1),Ae=v(ce,"history",9),We=v(ce,"onSort",9),zt=v(ce,"onTransform",9),Xt=v(ce,"onContextMenu",9),Gt=v(ce,"onUndo",9),jn=v(ce,"onRedo",9),xn=v(ce,"onRenderMenu",9);function w(){Re(!Re())}var L=M(void 0,!0),oe=M(void 0,!0);U(()=>(E(ye()),E(We()),E(he()),E(zt()),E(Xt()),E(Gt()),E(Ae()),E(jn())),()=>{f(L,ye()?[{type:"space"}]:[{type:"button",icon:Ml,title:"Sort",className:"jse-sort",onClick:We(),disabled:ye()||!he()},{type:"button",icon:Al,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:zt(),disabled:ye()||!he()},{type:"button",icon:ac,title:"Search (Ctrl+F)",className:"jse-search",onClick:w,disabled:!he()},{type:"button",icon:pp,title:wd,className:"jse-contextmenu",onClick:Xt()},{type:"separator"},{type:"button",icon:td,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Gt(),disabled:!Ae().canUndo},{type:"button",icon:nd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:jn(),disabled:!Ae().canRedo},{type:"space"}])}),U(()=>(E(xn()),n(L)),()=>{f(oe,xn()(n(L))||n(L))}),ln(),pt(!0),kc(J,{get items(){return n(oe)}}),ct()})(k,{get containsValidArray(){return n(Ie)},get readOnly(){return p()},get history(){return b()},onSort:D,onTransform:X,onUndo:$t,onRedo:rn,onContextMenu:tr,get onRenderMenu(){return Z()},get showSearch(){return n(W)},set showSearch(J){f(W,J)},$$legacy:!0})};Y(ir,k=>{j()&&k(Te)});var Tn=N(ir,2),Lt=k=>{var J=hw(),ce=Ne(J),he=A(ce);he.readOnly=!0,Yn(he,We=>f(Ee,We),()=>n(Ee));var ye=N(ce,2),Re=We=>{var zt=fw(),Xt=Ne(zt);ng(A(Xt),{get json(){return n(q)},get documentState(){return n(Le)},get parser(){return C()},get showSearch(){return n(W)},get showReplace(){return n(V)},get readOnly(){return p()},get columns(){return n(De)},onSearch:R,onFocus:et,onPatch:fn,onClose:tt});var Gt=N(Xt,2),jn=A(Gt),xn=A(jn),w=A(xn),L=A(w),oe=A(L),qe=it=>{var Pe=Ft(),Mt=fe(()=>{var mn;return su([],(mn=n(a))===null||mn===void 0?void 0:mn.root)}),fr=Ne(Pe),Sn=mn=>{var Nn=aw();qs(A(Nn),{get validationError(){return n(Mt)},onExpand:lo}),P(mn,Nn)};Y(fr,mn=>{n(Mt)&&mn(Sn)}),P(it,Pe)};Y(oe,it=>{var Pe;Rn((Pe=n(a))===null||Pe===void 0?void 0:Pe.root)||it(qe)});var $e=N(L);dr($e,1,()=>n(De),mr,(it,Pe)=>{var Mt=sw();(function(fr,Sn){lt(Sn,!1);var mn=M(void 0,!0),Nn=M(void 0,!0),hr=M(void 0,!0),_t=v(Sn,"path",9),Fn=v(Sn,"sortedColumn",9),Rr=v(Sn,"readOnly",9),fo=v(Sn,"onSort",9);U(()=>(E(_t()),ko),()=>{f(mn,Rn(_t())?"values":ko(_t()))}),U(()=>(E(Fn()),E(_t())),()=>{var Gn;f(Nn,Fn()&&Zt(_t(),(Gn=Fn())===null||Gn===void 0?void 0:Gn.path)?Fn().sortDirection:void 0)}),U(()=>(n(Nn),qv),()=>{f(hr,n(Nn)?qv[n(Nn)]:void 0)}),ln(),pt(!0);var Tr,Fr=Z1(),Ko=A(Fr),cs=A(Ko),ha=N(Ko,2),Er=Gn=>{var Vr=G1(),Zr=A(Vr),po=fe(()=>n(Nn)===go.asc?_a:Vm);en(Zr,{get data(){return n(po)}}),we(()=>vn(Vr,"title","Currently sorted in ".concat(n(hr)," order"))),P(Gn,Vr)};Y(ha,Gn=>{n(Nn)!==void 0&&Gn(Er)}),we(Gn=>{Tr=Ot(Fr,1,"jse-column-header svelte-2i3vdx",null,Tr,{"jse-readonly":Rr()}),vn(Fr,"title",Rr()?n(mn):n(mn)+" (Click to sort the data by this column)"),gt(cs,Gn)},[()=>_i(n(mn),50)],fe),se("click",Fr,function(){Rr()||fo()({path:_t(),sortDirection:n(Nn)===go.asc?go.desc:go.asc})}),P(fr,Fr),ct()})(A(Mt),{get path(){return n(Pe)},get sortedColumn(){return n(_e)},get readOnly(){return p()},onSort:Tt}),P(it,Mt)});var Se=N($e),Oe=it=>{var Pe=iw(),Mt=A(Pe),fr=fe(()=>Array.isArray(n(q))?n(q).length:0);(function(Sn,mn){lt(mn,!1);var Nn=v(mn,"count",9),hr=v(mn,"maxSampleCount",9),_t=v(mn,"readOnly",9),Fn=v(mn,"onRefresh",9);pt(!0);var Rr,fo=ow();en(A(fo),{data:Wm}),we(()=>{Rr=Ot(fo,1,"jse-column-header svelte-fzj761",null,Rr,{"jse-readonly":_t()}),vn(fo,"title","The Columns are created by sampling ".concat(hr()," items out of ").concat(Nn(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),se("click",fo,()=>Fn()()),P(Sn,fo),ct()})(Mt,{get count(){return n(fr)},get maxSampleCount(){return n(Xe)},get readOnly(){return p()},onRefresh:()=>f(Xe,1/0)}),P(it,Pe)};Y(Se,it=>{n(r)&&it(Oe)});var Ve,vt=N(w),sn=A(vt),Wt=N(vt);dr(Wt,1,()=>n(o).visibleItems,mr,(it,Pe,Mt)=>{var fr=vw(),Sn=fe(()=>n(o).startIndex+Mt),mn=fe(()=>n(a).rows[n(Sn)]),Nn=fe(()=>{var Tr;return su([String(n(Sn))],(Tr=n(mn))===null||Tr===void 0?void 0:Tr.row)}),hr=fe(()=>Ja(n(q),n(Ke),[String(n(Sn))])),_t=A(fr);nh(_t,()=>n(Sn),Tr=>{var Fr=lw(),Ko=A(Fr),cs=N(Ko),ha=Er=>{qs(Er,{get validationError(){return n(Nn)},onExpand:lo})};Y(cs,Er=>{n(Nn)&&Er(ha)}),Br(Fr,(Er,Gn)=>ml==null?void 0:ml(Er,Gn),()=>Er=>function(Gn,Vr){be[Vr]=Gn.getBoundingClientRect().height}(Er,n(Sn))),we(()=>{var Er;return gt(Ko,"".concat((Er=n(Sn))!==null&&Er!==void 0?Er:""," "))}),P(Tr,Fr)});var Fn=N(_t);dr(Fn,1,()=>n(De),mr,(Tr,Fr,Ko,cs)=>{var ha,Er=uw(),Gn=fe(()=>[String(n(Sn))].concat(n(Fr))),Vr=fe(()=>Je(n(Pe),n(Fr))),Zr=fe(()=>En(n(H))&&ua(n(H).path,n(Gn))),po=fe(()=>{var jr;return(jr=n(mn))===null||jr===void 0?void 0:jr.columns[Ko]}),oi=fe(()=>su(n(Gn),n(po))),Yr=A(Er),ai=A(Yr),Mc=jr=>{var Po=fe(()=>_u(Ja(n(Pe),n(hr),n(Fr)))),so=fe(()=>!!n(Po)&&n(Po).some(Fa=>Fa.active)),Yo=fe(()=>!Rn(n(Po)));(function(Fa,Qr){lt(Qr,!1);var Rc=v(Qr,"path",9),_c=v(Qr,"value",9),Ic=v(Qr,"parser",9),us=v(Qr,"isSelected",9),ci=v(Qr,"containsSearchResult",9),Wg=v(Qr,"containsActiveSearchResult",9),Hg=v(Qr,"onEdit",9);pt(!0);var ev,nl=X1(),Jg=A(nl);we(ui=>{ev=Ot(nl,1,"jse-inline-value svelte-h57m0p",null,ev,{"jse-selected":us(),"jse-highlight":ci(),"jse-active":Wg()}),gt(Jg,ui)},[()=>{var ui;return _i((ui=Ic().stringify(_c()))!==null&&ui!==void 0?ui:"",50)}],fe),se("dblclick",nl,()=>Hg()(Rc())),P(Fa,nl),ct()})(jr,{get path(){return n(Gn)},get value(){return n(Vr)},get parser(){return C()},get isSelected(){return n(Zr)},get containsSearchResult(){return n(Yo)},get containsActiveSearchResult(){return n(so)},onEdit:Ut})},si=jr=>{var Po=fe(()=>{var Qr;return(Qr=Ja(n(q),n(Ke),n(Gn)))===null||Qr===void 0?void 0:Qr.searchResults}),so=fe(()=>n(Vr)!==void 0?n(Vr):""),Yo=fe(()=>aa(n(q),n(Le),n(Gn))),Fa=fe(()=>n(Zr)?n(H):void 0);eg(jr,{get path(){return n(Gn)},get value(){return n(so)},get enforceString(){return n(Yo)},get selection(){return n(Fa)},get searchResultItems(){return n(Po)},get context(){return n(an)}})};Y(ai,jr=>{gr(n(Vr))?jr(Mc):jr(si,!1)});var Ac=N(ai),ii=jr=>{var Po=cw();ja(A(Po),{selected:!0,onContextMenu:Qn}),P(jr,Po)};Y(Ac,jr=>{p()||!n(Zr)||Jr(n(H))||jr(ii)});var li=N(Yr,2),Pc=jr=>{qs(jr,{get validationError(){return n(oi)},onExpand:lo})};Y(li,jr=>{n(oi)&&jr(Pc)}),we(jr=>{vn(Er,"data-path",jr),ha=Ot(Yr,1,"jse-value-outer svelte-u14cgx",null,ha,{"jse-selected-value":n(Zr)})},[()=>Ou(n(Gn))],fe),P(Tr,Er)});var Rr=N(Fn),fo=Tr=>{P(Tr,dw())};Y(Rr,Tr=>{n(r)&&Tr(fo)}),P(it,fr)});var Pn=A(N(Wt));Yn(Gt,it=>f(ie,it),()=>n(ie)),Br(Gt,(it,Pe)=>ml==null?void 0:ml(it,Pe),()=>Kt),Ar(()=>se("scroll",Gt,pn));var ht=N(Gt,2),lr=it=>{var Pe=fe(()=>"You pasted a JSON ".concat(Array.isArray(n(je).contents)?"array":"object"," as text"));$o(it,{type:"info",get message(){return n(Pe)},actions:[{icon:Ns,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Wn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Un}]})};Y(ht,it=>{n(je)&&it(lr)});var qn=N(ht,2),Xn=it=>{var Pe=fe(()=>p()?[]:[{icon:rd,text:"Ok",title:"Accept the repaired document",onClick:Qt},{icon:Pl,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:K}]);$o(it,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Pe)},onClose:Fe})};Y(qn,it=>{n(He)&&it(Xn)}),qd(N(qn,2),{get validationErrors(){return n(Vt)},selectError:Dt}),we(()=>{Ve=Ot(vt,1,"jse-table-invisible-start-section svelte-u14cgx",null,Ve,{"jse-search-box-background":n(W)}),vn(sn,"colspan",n(De).length),Ps(sn,"height",n(o).startHeight+"px"),vn(Pn,"colspan",n(De).length),Ps(Pn,"height",n(o).endHeight+"px")}),P(We,zt)},Ae=We=>{var zt=Ft(),Xt=Ne(zt),Gt=xn=>{var w=pw(),L=Ne(w),oe=fe(()=>p()?[]:[{icon:Pl,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:K}]);$o(L,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(oe)}}),ug(N(L,2),{get text(){return n(ae)},get json(){return n(q)},get indentation(){return T()},get parser(){return C()}}),P(xn,w)},jn=xn=>{rw(xn,{get text(){return n(ae)},get json(){return n(q)},get readOnly(){return p()},get parser(){return C()},openJSONEditorModal:Ut,get onChangeMode(){return ne()},onClick:()=>{Fe()}})};Y(Xt,xn=>{n(I)&&n(ae)!==void 0&&n(ae)!==""?xn(Gt):xn(jn,!1)},!0),P(We,zt)};Y(ye,We=>{n(Ie)?We(Re):We(Ae,!1)}),se("paste",he,un),P(k,J)},zr=k=>{P(k,gw())};Y(Tn,k=>{h?k(zr,!1):k(Lt)}),Yn(An,k=>f(re,k),()=>n(re));var ft=N(An,2),dn=k=>{Gh(k,{onClose:()=>f(Be,!1)})};Y(ft,k=>{n(Be)&&k(dn)});var gn=N(ft,2),Ln=k=>{Zh(k,Ma(()=>n(At),{onClose:()=>{var J;(J=n(At))===null||J===void 0||J.onClose(),f(At,void 0)}}))};return Y(gn,k=>{n(At)&&k(Ln)}),we(()=>Bn=Ot(An,1,"jse-table-mode svelte-u14cgx",null,Bn,{"no-main-menu":!j()})),se("mousedown",An,function(k){if(k.buttons===1||k.buttons===2){var J=k.target;J.isContentEditable||Fe();var ce=yh(J);if(ce){if(Jr(n(H))&&Di(n(q),n(H),ce))return;f(H,Yt(ce)),k.preventDefault()}}}),se("keydown",An,function(k){var J=ca(k);if(s("keydown",{combo:J,key:k.key}),J==="Ctrl+X"&&(k.preventDefault(),xe(!0)),J==="Ctrl+Shift+X"&&(k.preventDefault(),xe(!1)),J==="Ctrl+C"&&(k.preventDefault(),Ct(!0)),J==="Ctrl+Shift+C"&&(k.preventDefault(),Ct(!1)),J==="Ctrl+D"&&(k.preventDefault(),tn()),J!=="Delete"&&J!=="Backspace"||(k.preventDefault(),qt()),J==="Insert"&&k.preventDefault(),J==="Ctrl+A"&&k.preventDefault(),J==="Ctrl+Q"&&Or(k),J==="ArrowLeft"&&(k.preventDefault(),dt(),n(H))){var ce=function(zt,Xt){var{rowIndex:Gt,columnIndex:jn}=io(Qe(Xt),zt);return jn>0?Yt(Va({rowIndex:Gt,columnIndex:jn-1},zt)):Xt}(n(De),n(H));f(H,ce),wn(Qe(ce))}if(J==="ArrowRight"&&(k.preventDefault(),dt(),n(H))){var he=function(zt,Xt){var{rowIndex:Gt,columnIndex:jn}=io(Qe(Xt),zt);return jn<zt.length-1?Yt(Va({rowIndex:Gt,columnIndex:jn+1},zt)):Xt}(n(De),n(H));f(H,he),wn(Qe(he))}if(J==="ArrowUp"&&(k.preventDefault(),dt(),n(H))){var ye=function(zt,Xt){var{rowIndex:Gt,columnIndex:jn}=io(Qe(Xt),zt);return Gt>0?Yt(Va({rowIndex:Gt-1,columnIndex:jn},zt)):Xt}(n(De),n(H));f(H,ye),wn(Qe(ye))}if(J==="ArrowDown"&&(k.preventDefault(),dt(),n(H))){var Re=function(zt,Xt,Gt){var{rowIndex:jn,columnIndex:xn}=io(Qe(Gt),Xt);return jn<zt.length-1?Yt(Va({rowIndex:jn+1,columnIndex:xn},Xt)):Gt}(n(q),n(De),n(H));f(H,Re),wn(Qe(Re))}if(J==="Enter"&&n(H)&&En(n(H))){k.preventDefault();var Ae=n(H).path;gr(Je(n(q),Ae))?Ut(Ae):p()||f(H,ge(ge({},n(H)),{},{edit:!0}))}if(J.replace(/^Shift\+/,"").length===1&&n(H))return k.preventDefault(),void function(zt){at.apply(this,arguments)}(k.key);if(J==="Ctrl+Enter"&&En(n(H))){k.preventDefault();var We=Je(n(q),n(H).path);hc(We)&&window.open(String(We),"_blank")}J==="Escape"&&n(H)&&(k.preventDefault(),f(H,void 0)),J==="Ctrl+F"&&(k.preventDefault(),ke(!1)),J==="Ctrl+H"&&(k.preventDefault(),ke(!0)),J==="Ctrl+Z"&&(k.preventDefault(),$t()),J==="Ctrl+Shift+Z"&&(k.preventDefault(),rn())}),se("contextmenu",An,Or),P(e,Cn),yt(t,"validate",Jt),yt(t,"patch",Bt),yt(t,"focus",Fe),yt(t,"acceptAutoRepair",Qt),yt(t,"scrollTo",bn),yt(t,"findElement",In),yt(t,"openTransformModal",hn),ct({validate:Jt,patch:Bt,focus:Fe,acceptAutoRepair:Qt,scrollTo:bn,findElement:In,openTransformModal:hn})}function mf(e,t){lt(t,!1);var r=v(t,"content",8),o=v(t,"selection",12),a=v(t,"readOnly",8),s=v(t,"indentation",8),i=v(t,"tabSize",8),l=v(t,"externalMode",8),c=v(t,"mainMenuBar",8),u=v(t,"navigationBar",8),d=v(t,"statusBar",8),h=v(t,"askToFormat",8),p=v(t,"escapeControlCharacters",8),m=v(t,"escapeUnicodeCharacters",8),g=v(t,"flattenColumns",8),b=v(t,"parser",8),j=v(t,"parseMemoizeOne",8),x=v(t,"validator",8),S=v(t,"validationParser",8),O=v(t,"pathParser",8),C=v(t,"insideModal",8),y=v(t,"onChange",8),$=v(t,"onChangeMode",8),_=v(t,"onSelect",8),T=v(t,"onRenderValue",8),z=v(t,"onClassName",8),ne=v(t,"onRenderMenu",8),Q=v(t,"onRenderContextMenu",8),B=v(t,"onError",8),G=v(t,"onFocus",8),pe=v(t,"onBlur",8),Z=v(t,"onSortModal",8),de=v(t,"onTransformModal",8),Me=v(t,"onJSONEditorModal",8),ue=M(),ve=M(),me=M(),Ce=Sr("jsoneditor:JSONEditorRoot"),Ze=M(fg({onChange:be=>f(Ze,be)}).get()),re=M(l());function ie(be){if(Uv(be)){f(re,be.undo.mode);var Ue=n(Ze).items(),ut=Ue.findIndex(mt=>mt===be),ze=ut!==-1?Ue[ut-1]:void 0;Ce("handleUndo",{index:ut,item:be,items:Ue,prevItem:ze}),ze&&o(ze.redo.selection),$()(n(re))}}function Ee(be){if(Uv(be)){f(re,be.redo.mode);var Ue=n(Ze).items(),ut=Ue.findIndex(mt=>mt===be),ze=ut!==-1?Ue[ut+1]:void 0;Ce("handleRedo",{index:ut,item:be,items:Ue,nextItem:ze}),ze&&o(ze.undo.selection),$()(n(re))}}var At=M(),te={type:"separator"},q=M(),ae=M();function I(be){if(n(ue))return n(ue).patch(be);if(n(ve))return n(ve).patch(be);if(n(me))return n(me).patch(be);throw new Error('Method patch is not available in mode "'.concat(n(re),'"'))}function je(be,Ue){if(n(ue))return n(ue).expand(be,Ue);throw new Error('Method expand is not available in mode "'.concat(n(re),'"'))}function Ke(be,Ue){if(n(ue))return n(ue).collapse(be,Ue);throw new Error('Method collapse is not available in mode "'.concat(n(re),'"'))}function W(be){if(n(me))n(me).openTransformModal(be);else if(n(ue))n(ue).openTransformModal(be);else{if(!n(ve))throw new Error('Method transform is not available in mode "'.concat(n(re),'"'));n(ve).openTransformModal(be)}}function V(){if(n(me))return n(me).validate();if(n(ue))return n(ue).validate();if(n(ve))return n(ve).validate();throw new Error('Method validate is not available in mode "'.concat(n(re),'"'))}function R(){return n(ue)?n(ue).acceptAutoRepair():r()}function et(be){if(n(ue))return n(ue).scrollTo(be);if(n(ve))return n(ve).scrollTo(be);throw new Error('Method scrollTo is not available in mode "'.concat(n(re),'"'))}function kt(be){if(n(ue))return n(ue).findElement(be);if(n(ve))return n(ve).findElement(be);throw new Error('Method findElement is not available in mode "'.concat(n(re),'"'))}function tt(){n(me)?n(me).focus():n(ue)?n(ue).focus():n(ve)&&n(ve).focus()}function Xe(){return De.apply(this,arguments)}function De(){return(De=wt(function*(){n(me)&&(yield n(me).refresh())})).apply(this,arguments)}U(()=>E(l()),()=>{(function(be){if(be!==n(re)){var Ue={type:"mode",undo:{mode:n(re),selection:void 0},redo:{mode:be,selection:void 0}};n(re)==="text"&&n(me)&&n(me).flush(),Ce("add history item",Ue),n(Ze).add(Ue),f(re,be)}})(l())}),U(()=>(n(re),E($())),()=>{f(At,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-first"+(n(re)===yr.text?" jse-selected":""),onClick:()=>$()(yr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(re),")"),className:"jse-group-button "+(n(re)===yr.tree?" jse-selected":""),onClick:()=>$()(yr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-last"+(n(re)===yr.table?" jse-selected":""),onClick:()=>$()(yr.table)}])}),U(()=>(n(At),E(ne()),n(re),E(C()),E(a())),()=>{f(q,be=>{var Ue=kh(be[0])?n(At).concat(be):n(At).concat(te,be),ut=fu(Ue);return ne()(Ue,{mode:n(re),modal:C(),readOnly:a()})||ut})}),U(()=>(E(Q()),n(re),E(C()),E(a()),E(o())),()=>{f(ae,be=>{var Ue,ut=fu(be);return(Ue=Q()(be,{mode:n(re),modal:C(),readOnly:a(),selection:o()}))!==null&&Ue!==void 0?Ue:!a()&&ut})}),ln(),pt();var Ie=Ft(),xt=Ne(Ie),It=be=>{Yn(Q1(be,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ze)},get readOnly(){return a()},get indentation(){return s()},get tabSize(){return i()},get mainMenuBar(){return c()},get statusBar(){return d()},get askToFormat(){return h()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get validator(){return x()},get validationParser(){return S()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return _()},onUndo:ie,onRedo:Ee,get onError(){return B()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onSortModal(){return Z()},get onTransformModal(){return de()},$$legacy:!0}),Ue=>f(me,Ue),()=>n(me))},Be=be=>{var Ue=Ft(),ut=Ne(Ue),ze=nt=>{Yn(bw(nt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ze)},get readOnly(){return a()},get mainMenuBar(){return c()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return g()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return S()},get indentation(){return s()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return _()},onUndo:ie,onRedo:Ee,get onRenderValue(){return T()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onRenderContextMenu(){return n(ae)},get onSortModal(){return Z()},get onTransformModal(){return de()},get onJSONEditorModal(){return Me()},$$legacy:!0}),Le=>f(ve,Le),()=>n(ve))},mt=nt=>{Yn(Wu(nt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(Ze)},get readOnly(){return a()},get indentation(){return s()},get mainMenuBar(){return c()},get navigationBar(){return u()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return b()},get parseMemoizeOne(){return j()},get validator(){return x()},get validationParser(){return S()},get pathParser(){return O()},get onError(){return B()},get onChange(){return y()},get onChangeMode(){return $()},get onSelect(){return _()},onUndo:ie,onRedo:Ee,get onRenderValue(){return T()},get onClassName(){return z()},get onFocus(){return G()},get onBlur(){return pe()},get onRenderMenu(){return n(q)},get onRenderContextMenu(){return n(ae)},get onSortModal(){return Z()},get onTransformModal(){return de()},get onJSONEditorModal(){return Me()},$$legacy:!0}),Le=>f(ue,Le),()=>n(ue))};Y(ut,nt=>{n(re)===yr.table?nt(ze):nt(mt,!1)},!0),P(be,Ue)};return Y(xt,be=>{n(re)===yr.text||String(n(re))==="code"?be(It):be(Be,!1)}),P(e,Ie),yt(t,"patch",I),yt(t,"expand",je),yt(t,"collapse",Ke),yt(t,"transform",W),yt(t,"validate",V),yt(t,"acceptAutoRepair",R),yt(t,"scrollTo",et),yt(t,"findElement",kt),yt(t,"focus",tt),yt(t,"refresh",Xe),ct({patch:I,expand:je,collapse:Ke,transform:W,validate:V,acceptAutoRepair:R,scrollTo:et,findElement:kt,focus:tt,refresh:Xe})}jt(`/* over all fonts, sizes, and colors */
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
}`);var jw=F('<div class="jse-error svelte-v0el4e"> </div>'),xw=F('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>'),yw=F('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>'),ww=F('<button type="button" class="jse-primary svelte-v0el4e">Close</button>'),kw=F('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>',1),Cw=F('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>'),Sw={};jt(`/* over all fonts, sizes, and colors */
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
}`);var ms=pc(()=>Sw),Ow=F('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>'),zw=F('<div class="jse-error svelte-1v9c92j"> </div>'),Ew=F('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"><col width="75%"></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>',1);jt(`/* over all fonts, sizes, and colors */
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
}`);var $w=F('<div role="none"><!></div> <!> <!> <!>',1);function Mw(e,t){lt(t,!1);var r=M(void 0,!0),o=Sr("jsoneditor:JSONEditor"),a={text:""},s=void 0,i=!1,l=yr.tree,c=!0,u=!0,d=!0,h=!0,p=!1,m=!1,g=!0,b=JSON,j=void 0,x=JSON,S={parse:K0,stringify:ko},O=[p0],C=O[0].id,y=lo,$=void 0,_=void 0,T=J0,z=lo,ne=lo,Q=lo,B=lo,G=le=>{console.error(le),alert(le.toString())},pe=lo,Z=lo,de=v(t,"content",13,a),Me=v(t,"selection",13,s),ue=v(t,"readOnly",13,i),ve=v(t,"indentation",13,2),me=v(t,"tabSize",13,4),Ce=v(t,"mode",13,l),Ze=v(t,"mainMenuBar",13,c),re=v(t,"navigationBar",13,u),ie=v(t,"statusBar",13,d),Ee=v(t,"askToFormat",13,h),At=v(t,"escapeControlCharacters",13,p),te=v(t,"escapeUnicodeCharacters",13,m),q=v(t,"flattenColumns",13,g),ae=v(t,"parser",13,b),I=v(t,"validator",13,j),je=v(t,"validationParser",13,x),Ke=v(t,"pathParser",13,S),W=v(t,"queryLanguages",13,O),V=v(t,"queryLanguageId",13,C),R=v(t,"onChangeQueryLanguage",13,y),et=v(t,"onChange",13,$),kt=v(t,"onSelect",13,_),tt=v(t,"onRenderValue",13,T),Xe=v(t,"onClassName",13,z),De=v(t,"onRenderMenu",13,ne),Ie=v(t,"onRenderContextMenu",13,Q),xt=v(t,"onChangeMode",13,B),It=v(t,"onError",13,G),Be=v(t,"onFocus",13,pe),be=v(t,"onBlur",13,Z),Ue=M(Ss(),!0),ut=M(!1,!0),ze=M(void 0,!0),mt=M(void 0,!0),nt=M(void 0,!0),Le=M(void 0,!0),H=M(ae(),!0);function _e(){return de()}function He(le){o("set");var Nt=Fc(le);if(Nt)throw new Error(Nt);f(Ue,Ss()),de(le),ar()}function Tt(le){o("update");var Nt=Fc(le);if(Nt)throw new Error(Nt);de(le),ar()}function an(le){var Nt=n(ze).patch(le);return ar(),Nt}function Ye(le){Me(le),ar()}function Vt(le,Nt){n(ze).expand(le,Nt),ar()}function Mn(le){var Nt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(ze).collapse(le,Nt),ar()}function On(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(ze).transform(le),ar()}function Jt(){return n(ze).validate()}function Bt(){var le=n(ze).acceptAutoRepair();return ar(),le}function fn(le){return sr.apply(this,arguments)}function sr(){return(sr=wt(function*(le){yield n(ze).scrollTo(le)})).apply(this,arguments)}function Dn(le){return n(ze).findElement(le)}function cn(){n(ze).focus(),ar()}function Fe(){return pn.apply(this,arguments)}function pn(){return(pn=wt(function*(){yield n(ze).refresh()})).apply(this,arguments)}function dt(le){var Nt,Un,K,xe,st,Ct,rt,qt,tn,Pt,Rt,ot,at,un,St,kn,nn,Dt,hn,Ut,rr,D,X,ke,$t,rn,Kt,Cn,Bn,An,ir=Object.keys(le);for(var Te of ir)switch(Te){case"content":de((Nt=le[Te])!==null&&Nt!==void 0?Nt:a);break;case"selection":Me((Un=le[Te])!==null&&Un!==void 0?Un:s);break;case"readOnly":ue((K=le[Te])!==null&&K!==void 0?K:i);break;case"indentation":ve((xe=le[Te])!==null&&xe!==void 0?xe:2);break;case"tabSize":me((st=le[Te])!==null&&st!==void 0?st:4);break;case"mode":Ce((Ct=le[Te])!==null&&Ct!==void 0?Ct:l);break;case"mainMenuBar":Ze((rt=le[Te])!==null&&rt!==void 0?rt:c);break;case"navigationBar":re((qt=le[Te])!==null&&qt!==void 0?qt:u);break;case"statusBar":ie((tn=le[Te])!==null&&tn!==void 0?tn:d);break;case"askToFormat":Ee((Pt=le[Te])!==null&&Pt!==void 0?Pt:h);break;case"escapeControlCharacters":At((Rt=le[Te])!==null&&Rt!==void 0?Rt:p);break;case"escapeUnicodeCharacters":te((ot=le[Te])!==null&&ot!==void 0?ot:m);break;case"flattenColumns":q((at=le[Te])!==null&&at!==void 0?at:g);break;case"parser":ae((un=le[Te])!==null&&un!==void 0?un:b);break;case"validator":I((St=le[Te])!==null&&St!==void 0?St:j);break;case"validationParser":je((kn=le[Te])!==null&&kn!==void 0?kn:x);break;case"pathParser":Ke((nn=le[Te])!==null&&nn!==void 0?nn:S);break;case"queryLanguages":W((Dt=le[Te])!==null&&Dt!==void 0?Dt:O);break;case"queryLanguageId":V((hn=le[Te])!==null&&hn!==void 0?hn:C);break;case"onChangeQueryLanguage":R((Ut=le[Te])!==null&&Ut!==void 0?Ut:y);break;case"onChange":et((rr=le[Te])!==null&&rr!==void 0?rr:$);break;case"onRenderValue":tt((D=le[Te])!==null&&D!==void 0?D:T);break;case"onClassName":Xe((X=le[Te])!==null&&X!==void 0?X:z);break;case"onRenderMenu":De((ke=le[Te])!==null&&ke!==void 0?ke:ne);break;case"onRenderContextMenu":Ie(($t=le[Te])!==null&&$t!==void 0?$t:Q);break;case"onChangeMode":xt((rn=le[Te])!==null&&rn!==void 0?rn:B);break;case"onSelect":kt((Kt=le[Te])!==null&&Kt!==void 0?Kt:_);break;case"onError":It((Cn=le[Te])!==null&&Cn!==void 0?Cn:G);break;case"onFocus":Be((Bn=le[Te])!==null&&Bn!==void 0?Bn:pe);break;case"onBlur":be((An=le[Te])!==null&&An!==void 0?An:Z);break;default:Tn(Te)}function Tn(Lt){o('Unknown property "'.concat(Lt,'"'))}W().some(Lt=>Lt.id===V())||V(W()[0].id),ar()}function Qt(){return bn.apply(this,arguments)}function bn(){return(bn=wt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function zn(le,Nt,Un){de(le),et()&&et()(le,Nt,Un)}function wn(le){Me(le),kt()&&kt()(fu(le))}function In(){f(ut,!0),Be()&&Be()()}function Qn(){f(ut,!1),be()&&be()()}function Or(le){return tr.apply(this,arguments)}function tr(){return(tr=wt(function*(le){Ce()!==le&&(Ce(le),ar(),cn(),xt()(le))})).apply(this,arguments)}function pr(le){o("handleChangeQueryLanguage",le),V(le),R()(le)}function br(le){var{id:Nt,json:Un,rootPath:K,onTransform:xe,onClose:st}=le;ue()||f(Le,{id:Nt,json:Un,rootPath:K,indentation:ve(),escapeControlCharacters:At(),escapeUnicodeCharacters:te(),parser:ae(),parseMemoizeOne:n(r),validationParser:je(),pathParser:Ke(),queryLanguages:W(),queryLanguageId:V(),onChangeQueryLanguage:pr,onRenderValue:tt(),onRenderMenu:Ct=>De()(Ct,{mode:Ce(),modal:!0,readOnly:ue()}),onRenderContextMenu:Ct=>Ie()(Ct,{mode:Ce(),modal:!0,readOnly:ue(),selection:Me()}),onClassName:Xe(),onTransform:xe,onClose:st})}function vr(le){ue()||f(nt,le)}function Wn(le){var{content:Nt,path:Un,onPatch:K,onClose:xe}=le;o("onJSONEditorModal",{content:Nt,path:Un}),f(mt,{content:Nt,path:Un,onPatch:K,readOnly:ue(),indentation:ve(),tabSize:me(),mainMenuBar:Ze(),navigationBar:re(),statusBar:ie(),askToFormat:Ee(),escapeControlCharacters:At(),escapeUnicodeCharacters:te(),flattenColumns:q(),parser:ae(),validator:void 0,validationParser:je(),pathParser:Ke(),onRenderValue:tt(),onClassName:Xe(),onRenderMenu:De(),onRenderContextMenu:Ie(),onSortModal:vr,onTransformModal:br,onClose:xe})}function nr(le){le.stopPropagation()}return U(()=>(E(ae()),n(H),E(de()),Ss),()=>{if(!e0(ae(),n(H))){if(o("parser changed, recreate editor"),Ri(de())){var le=n(H).stringify(de().json);de({json:le!==void 0?ae().parse(le):void 0})}f(H,ae()),f(Ue,Ss())}}),U(()=>E(de()),()=>{var le=Fc(de());le&&console.error("Error: "+le)}),U(()=>E(Me()),()=>{Me()===null&&console.warn("selection is invalid: it is null but should be undefined")}),U(()=>E(ae()),()=>{f(r,$i(ae().parse))}),U(()=>E(Ce()),()=>{o("mode changed to",Ce())}),ln(),pt(!0),zu(e,{children:(le,Nt)=>{var Un,K=$w(),xe=Ne(K);nh(A(xe),()=>n(Ue),Rt=>{Yn(mf(Rt,{get externalMode(){return Ce()},get content(){return de()},get selection(){return Me()},get readOnly(){return ue()},get indentation(){return ve()},get tabSize(){return me()},get statusBar(){return ie()},get askToFormat(){return Ee()},get mainMenuBar(){return Ze()},get navigationBar(){return re()},get escapeControlCharacters(){return At()},get escapeUnicodeCharacters(){return te()},get flattenColumns(){return q()},get parser(){return ae()},get parseMemoizeOne(){return n(r)},get validator(){return I()},get validationParser(){return je()},get pathParser(){return Ke()},insideModal:!1,get onError(){return It()},onChange:zn,onChangeMode:Or,onSelect:wn,get onRenderValue(){return tt()},get onClassName(){return Xe()},onFocus:In,onBlur:Qn,get onRenderMenu(){return De()},get onRenderContextMenu(){return Ie()},onSortModal:vr,onTransformModal:br,onJSONEditorModal:Wn,$$legacy:!0}),ot=>f(ze,ot),()=>n(ze))});var st=N(xe,2),Ct=Rt=>{(function(ot,at){var un,St;lt(at,!1);var kn=M(void 0,!0),nn=M(void 0,!0),Dt=M(void 0,!0),hn=M(void 0,!0),Ut=Sr("jsoneditor:SortModal"),rr=v(at,"id",9),D=v(at,"json",9),X=v(at,"rootPath",9),ke=v(at,"onSort",9),$t=v(at,"onClose",9),rn={value:1,label:"ascending"},Kt=[rn,{value:-1,label:"descending"}],Cn="".concat(rr(),":").concat(Et(X())),Bn=M((un=ms()[Cn])===null||un===void 0?void 0:un.selectedProperty,!0),An=M(((St=ms()[Cn])===null||St===void 0?void 0:St.selectedDirection)||rn,!0),ir=M(void 0,!0);function Te(){try{var Lt,zr,ft;f(ir,void 0);var dn=((Lt=n(Bn))===null||Lt===void 0?void 0:Lt.value)||((zr=n(hn))===null||zr===void 0||(zr=zr[0])===null||zr===void 0?void 0:zr.value)||[],gn=(ft=n(An))===null||ft===void 0?void 0:ft.value,Ln=tg(D(),X(),dn,gn);ke()!==void 0&&X()!==void 0&&ke()({operations:Ln,rootPath:X(),itemPath:dn,direction:gn}),$t()()}catch(k){f(ir,String(k))}}function Tn(Lt){Lt.focus()}U(()=>(E(D()),E(X())),()=>{f(kn,Je(D(),X()))}),U(()=>n(kn),()=>{f(nn,Array.isArray(n(kn)))}),U(()=>(n(nn),n(kn)),()=>{f(Dt,n(nn)?Cu(n(kn)):void 0)}),U(()=>(n(Dt),ya),()=>{f(hn,n(Dt)?n(Dt).map(ya):void 0)}),U(()=>(ms(),n(Bn),n(An)),()=>{ms(ms()[Cn]={selectedProperty:n(Bn),selectedDirection:n(An)}),Ut("store state in memory",Cn,ms()[Cn])}),ln(),pt(!0),Li(ot,{get onClose(){return $t()},className:"jse-sort-modal",children:(Lt,zr)=>{var ft=Ew(),dn=Ne(ft),gn=fe(()=>n(nn)?"Sort array items":"Sort object keys");Ql(dn,{get title(){return n(gn)},get onClose(){return $t()}});var Ln=A(N(dn,2)),k=N(A(Ln)),J=A(k),ce=N(A(J)),he=A(ce),ye=N(J),Re=xn=>{var w=Ow(),L=N(A(w));Wa(A(L),{showChevron:!0,get items(){return n(hn)},get value(){return n(Bn)},set value(oe){f(Bn,oe)},$$legacy:!0}),P(xn,w)};Y(ye,xn=>{var w;n(nn)&&(n(hn)&&((w=n(hn))===null||w===void 0?void 0:w.length)>1||n(Bn)===void 0)&&xn(Re)});var Ae=N(ye),We=N(A(Ae));Wa(A(We),{showChevron:!0,clearable:!1,items:Kt,get value(){return n(An)},set value(xn){f(An,xn)},$$legacy:!0});var zt=N(Ln,2),Xt=A(zt),Gt=xn=>{var w=zw(),L=A(w);we(()=>gt(L,n(ir))),P(xn,w)};Y(Xt,xn=>{n(ir)&&xn(Gt)});var jn=A(N(zt,2));Ar(()=>se("click",jn,Te)),Br(jn,xn=>Tn==null?void 0:Tn(xn)),we(xn=>{var w;Za(he,xn),jn.disabled=!!(n(nn)&&n(hn)&&((w=n(hn))===null||w===void 0?void 0:w.length)>1)&&!n(Bn)},[()=>X()&&!Rn(X())?ko(X()):"(document root)"],fe),P(Lt,ft)},$$slots:{default:!0}}),ct()})(Rt,Ma(()=>n(nt),{onClose:()=>{var ot;(ot=n(nt))===null||ot===void 0||ot.onClose(),f(nt,void 0)}}))};Y(st,Rt=>{n(nt)&&Rt(Ct)});var rt=N(st,2),qt=Rt=>{T1(Rt,Ma(()=>n(Le),{onClose:()=>{var ot;(ot=n(Le))===null||ot===void 0||ot.onClose(),f(Le,void 0)}}))};Y(rt,Rt=>{n(Le)&&Rt(qt)});var tn=N(rt,2),Pt=Rt=>{(function(ot,at){lt(at,!1);var un=M(void 0,!0),St=M(void 0,!0),kn=M(void 0,!0),nn=M(void 0,!0),Dt=Sr("jsoneditor:JSONEditorModal"),hn=v(at,"content",9),Ut=v(at,"path",9),rr=v(at,"onPatch",9),D=v(at,"readOnly",9),X=v(at,"indentation",9),ke=v(at,"tabSize",9),$t=v(at,"mainMenuBar",9),rn=v(at,"navigationBar",9),Kt=v(at,"statusBar",9),Cn=v(at,"askToFormat",9),Bn=v(at,"escapeControlCharacters",9),An=v(at,"escapeUnicodeCharacters",9),ir=v(at,"flattenColumns",9),Te=v(at,"parser",9),Tn=v(at,"validator",9),Lt=v(at,"validationParser",9),zr=v(at,"pathParser",9),ft=v(at,"onRenderValue",9),dn=v(at,"onClassName",9),gn=v(at,"onRenderMenu",9),Ln=v(at,"onRenderContextMenu",9),k=v(at,"onSortModal",9),J=v(at,"onTransformModal",9),ce=v(at,"onClose",9),he=M(void 0,!0),ye=M(void 0,!0),Re={mode:zt(hn()),content:hn(),selection:void 0,relativePath:Ut()},Ae=M([Re],!0),We=M(void 0,!0);function zt(Oe){return Ri(Oe)&&wr(Oe.json)?yr.table:yr.tree}function Xt(){var Oe,Ve=(Oe=Ht(n(Ae)))===null||Oe===void 0?void 0:Oe.selection;Ni(Ve)&&n(he).scrollTo(Qe(Ve))}function Gt(){if(Dt("handleApply"),!D())try{f(We,void 0);var Oe=n(un).relativePath,Ve=n(un).content,vt=[{op:"replace",path:Et(Oe),value:Av(Ve,Te()).json}];if(n(Ae).length>1){var sn=Av(n(Ae)[n(Ae).length-2].content,Te()).json,Wt={json:To(sn,vt)},Pn=ge(ge({},n(Ae)[n(Ae).length-2]||Re),{},{content:Wt});f(Ae,[...n(Ae).slice(0,n(Ae).length-2),Pn]),ar(),Xt()}else rr()(vt),ce()()}catch(ht){f(We,String(ht))}}function jn(){if(Dt("handleClose"),n(ye))f(ye,!1);else if(n(Ae).length>1){var Oe;f(Ae,on(n(Ae))),ar(),(Oe=n(he))===null||Oe===void 0||Oe.focus(),Xt(),f(We,void 0)}else ce()()}function xn(Oe){Dt("handleChange",Oe),oe(Ve=>ge(ge({},Ve),{},{content:Oe}))}function w(Oe){Dt("handleChangeSelection",Oe),oe(Ve=>ge(ge({},Ve),{},{selection:Oe}))}function L(Oe){Dt("handleChangeMode",Oe),oe(Ve=>ge(ge({},Ve),{},{mode:Oe}))}function oe(Oe){var Ve=Oe(Ht(n(Ae)));f(Ae,[...on(n(Ae)),Ve])}function qe(Oe){f(We,Oe.toString()),console.error(Oe)}function $e(Oe){var Ve,{content:vt,path:sn}=Oe;Dt("handleJSONEditorModal",{content:vt,path:sn});var Wt={mode:zt(vt),content:vt,selection:void 0,relativePath:sn};f(Ae,[...n(Ae),Wt]),ar(),(Ve=n(he))===null||Ve===void 0||Ve.focus()}function Se(Oe){Oe.focus()}qr(()=>{var Oe;(Oe=n(he))===null||Oe===void 0||Oe.focus()}),U(()=>n(Ae),()=>{f(un,Ht(n(Ae))||Re)}),U(()=>n(Ae),()=>{f(St,n(Ae).flatMap(Oe=>Oe.relativePath))}),U(()=>(n(St),ko),()=>{f(kn,Rn(n(St))?"(document root)":ko(n(St)))}),U(()=>E(Te()),()=>{f(nn,$i(Te().parse))}),ln(),pt(!0),Li(ot,{onClose:jn,className:"jse-jsoneditor-modal",get fullscreen(){return n(ye)},children:(Oe,Ve)=>{var vt=Cw();zu(A(vt),{children:(sn,Wt)=>{var Pn=kw(),ht=Ne(Pn),lr=fe(()=>n(Ae).length>1?" (".concat(n(Ae).length,")"):"");Ql(ht,{get title(){var _t;return"Edit nested content ".concat((_t=n(lr))!==null&&_t!==void 0?_t:"")},fullScreenButton:!0,onClose:jn,get fullscreen(){return n(ye)},set fullscreen(_t){f(ye,_t)},$$legacy:!0});var qn=N(ht,2),Xn=N(A(qn),2),it=N(Xn,4);Yn(mf(A(it),{get externalMode(){return n(un).mode},get content(){return n(un).content},get selection(){return n(un).selection},get readOnly(){return D()},get indentation(){return X()},get tabSize(){return ke()},get statusBar(){return Kt()},get askToFormat(){return Cn()},get mainMenuBar(){return $t()},get navigationBar(){return rn()},get escapeControlCharacters(){return Bn()},get escapeUnicodeCharacters(){return An()},get flattenColumns(){return ir()},get parser(){return Te()},get parseMemoizeOne(){return n(nn)},get validator(){return Tn()},get validationParser(){return Lt()},get pathParser(){return zr()},insideModal:!0,onError:qe,onChange:xn,onChangeMode:L,onSelect:w,get onRenderValue(){return ft()},get onClassName(){return dn()},onFocus:lo,onBlur:lo,get onRenderMenu(){return gn()},get onRenderContextMenu(){return Ln()},get onSortModal(){return k()},get onTransformModal(){return J()},onJSONEditorModal:$e,$$legacy:!0}),_t=>f(he,_t),()=>n(he));var Pe=A(N(it,2)),Mt=_t=>{var Fn=jw(),Rr=A(Fn);we(()=>gt(Rr,n(We))),P(_t,Fn)};Y(Pe,_t=>{n(We)&&_t(Mt)});var fr=N(Pe,2),Sn=_t=>{var Fn=xw();en(A(Fn),{data:qm}),se("click",Fn,jn),P(_t,Fn)};Y(fr,_t=>{n(Ae).length>1&&_t(Sn)});var mn=N(fr,2),Nn=_t=>{var Fn=yw();Ar(()=>se("click",Fn,Gt)),Br(Fn,Rr=>Se==null?void 0:Se(Rr)),P(_t,Fn)},hr=_t=>{var Fn=ww();se("click",Fn,jn),P(_t,Fn)};Y(mn,_t=>{D()?_t(hr,!1):_t(Nn)}),we(()=>Za(Xn,n(kn))),P(sn,Pn)},$$slots:{default:!0}}),P(Oe,vt)},$$slots:{default:!0}}),ct()})(Rt,Ma(()=>n(mt),{onClose:()=>{var ot;(ot=n(mt))===null||ot===void 0||ot.onClose(),f(mt,void 0)}}))};Y(tn,Rt=>{n(mt)&&Rt(Pt)}),we(()=>Un=Ot(xe,1,"jse-main svelte-57bmz4",null,Un,{"jse-focus":n(ut)})),se("keydown",xe,nr),P(le,K)},$$slots:{default:!0}}),yt(t,"get",_e),yt(t,"set",He),yt(t,"update",Tt),yt(t,"patch",an),yt(t,"select",Ye),yt(t,"expand",Vt),yt(t,"collapse",Mn),yt(t,"transform",On),yt(t,"validate",Jt),yt(t,"acceptAutoRepair",Bt),yt(t,"scrollTo",fn),yt(t,"findElement",Dn),yt(t,"focus",cn),yt(t,"refresh",Fe),yt(t,"updateProps",dt),yt(t,"destroy",Qt),ct({get:_e,set:He,update:Tt,patch:an,select:Ye,expand:Vt,collapse:Mn,transform:On,validate:Jt,acceptAutoRepair:Bt,scrollTo:fn,findElement:Dn,focus:cn,refresh:Fe,updateProps:dt,destroy:Qt})}function Aw(e){var{target:t,props:r}=e,o=_j(Mw,{target:t,props:r});return o.destroy=wt(function*(){return function(a,s){var i=wu.get(a);return i?(wu.delete(a),i(s)):Promise.resolve()}(o)}),ar(),o}const Pw=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Rw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,_w=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Iw(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){qw(e);return}return t}function qw(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Cl(e,t={}){if(typeof e!="string")return e;const r=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const o=r.toLowerCase();if(o==="true")return!0;if(o==="false")return!1;if(o==="undefined")return;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o==="-infinity")return Number.NEGATIVE_INFINITY}if(!_w.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Pw.test(e)||Rw.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Iw)}return JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}function Tw(e,t={}){return Cl(e,{...t,strict:!0})}var Nw=typeof global=="object"&&global&&global.Object===Object&&global,Dw=typeof self=="object"&&self&&self.Object===Object&&self,pg=Nw||Dw||Function("return this")(),Zl=pg.Symbol,hg=Object.prototype,Uw=hg.hasOwnProperty,Bw=hg.toString,gi=Zl?Zl.toStringTag:void 0;function Lw(e){var t=Uw.call(e,gi),r=e[gi];try{e[gi]=void 0;var o=!0}catch{}var a=Bw.call(e);return o&&(t?e[gi]=r:delete e[gi]),a}var Fw=Object.prototype,Vw=Fw.toString;function Ww(e){return Vw.call(e)}var Hw="[object Null]",Jw="[object Undefined]",bf=Zl?Zl.toStringTag:void 0;function Kw(e){return e==null?e===void 0?Jw:Hw:bf&&bf in Object(e)?Lw(e):Ww(e)}function Yw(e){return e!=null&&typeof e=="object"}var Qw="[object Symbol]";function Xw(e){return typeof e=="symbol"||Yw(e)&&Kw(e)==Qw}var Gw=/\s/;function Zw(e){for(var t=e.length;t--&&Gw.test(e.charAt(t)););return t}var ek=/^\s+/;function tk(e){return e&&e.slice(0,Zw(e)+1).replace(ek,"")}function Hu(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var jf=NaN,nk=/^[-+]0x[0-9a-f]+$/i,rk=/^0b[01]+$/i,ok=/^0o[0-7]+$/i,ak=parseInt;function xf(e){if(typeof e=="number")return e;if(Xw(e))return jf;if(Hu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Hu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=tk(e);var r=rk.test(e);return r||ok.test(e)?ak(e.slice(2),r?2:8):nk.test(e)?jf:+e}var cu=function(){return pg.Date.now()},sk="Expected a function",ik=Math.max,lk=Math.min;function ck(e,t,r){var o,a,s,i,l,c,u=0,d=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(sk);t=xf(t)||0,Hu(r)&&(d=!!r.leading,h="maxWait"in r,s=h?ik(xf(r.maxWait)||0,t):s,p="trailing"in r?!!r.trailing:p);function m($){var _=o,T=a;return o=a=void 0,u=$,i=e.apply(T,_),i}function g($){return u=$,l=setTimeout(x,t),d?m($):i}function b($){var _=$-c,T=$-u,z=t-_;return h?lk(z,s-T):z}function j($){var _=$-c,T=$-u;return c===void 0||_>=t||_<0||h&&T>=s}function x(){var $=cu();if(j($))return S($);l=setTimeout(x,b($))}function S($){return l=void 0,p&&o?m($):(o=a=void 0,i)}function O(){l!==void 0&&clearTimeout(l),u=0,o=c=a=l=void 0}function C(){return l===void 0?i:S(cu())}function y(){var $=cu(),_=j($);if(o=arguments,a=this,c=$,_){if(l===void 0)return g(c);if(h)return clearTimeout(l),l=setTimeout(x,t),m(c)}return l===void 0&&(l=setTimeout(x,t)),i}return y.cancel=O,y.flush=C,y}var gg=typeof global=="object"&&global&&global.Object===Object&&global,uk=typeof self=="object"&&self&&self.Object===Object&&self,Ho=gg||uk||Function("return this")(),Vo=Ho.Symbol,mg=Object.prototype,dk=mg.hasOwnProperty,vk=mg.toString,mi=Vo?Vo.toStringTag:void 0;function fk(e){var t=dk.call(e,mi),r=e[mi];try{e[mi]=void 0;var o=!0}catch{}var a=vk.call(e);return o&&(t?e[mi]=r:delete e[mi]),a}var pk=Object.prototype,hk=pk.toString;function gk(e){return hk.call(e)}var mk="[object Null]",bk="[object Undefined]",yf=Vo?Vo.toStringTag:void 0;function ss(e){return e==null?e===void 0?bk:mk:yf&&yf in Object(e)?fk(e):gk(e)}function Wo(e){return e!=null&&typeof e=="object"}var jk="[object Symbol]";function Dd(e){return typeof e=="symbol"||Wo(e)&&ss(e)==jk}function xk(e,t){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=t(e[r],r,e);return a}var vo=Array.isArray,wf=Vo?Vo.prototype:void 0,kf=wf?wf.toString:void 0;function bg(e){if(typeof e=="string")return e;if(vo(e))return xk(e,bg)+"";if(Dd(e))return kf?kf.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Jo(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ud(e){return e}var yk="[object AsyncFunction]",wk="[object Function]",kk="[object GeneratorFunction]",Ck="[object Proxy]";function Bd(e){if(!Jo(e))return!1;var t=ss(e);return t==wk||t==kk||t==yk||t==Ck}var uu=Ho["__core-js_shared__"],Cf=function(){var e=/[^.]+$/.exec(uu&&uu.keys&&uu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sk(e){return!!Cf&&Cf in e}var Ok=Function.prototype,zk=Ok.toString;function is(e){if(e!=null){try{return zk.call(e)}catch{}try{return e+""}catch{}}return""}var Ek=/[\\^$.*+?()[\]{}|]/g,$k=/^\[object .+?Constructor\]$/,Mk=Function.prototype,Ak=Object.prototype,Pk=Mk.toString,Rk=Ak.hasOwnProperty,_k=RegExp("^"+Pk.call(Rk).replace(Ek,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ik(e){if(!Jo(e)||Sk(e))return!1;var t=Bd(e)?_k:$k;return t.test(is(e))}function qk(e,t){return e==null?void 0:e[t]}function ls(e,t){var r=qk(e,t);return Ik(r)?r:void 0}var Ju=ls(Ho,"WeakMap"),Sf=Object.create,Tk=function(){function e(){}return function(t){if(!Jo(t))return{};if(Sf)return Sf(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Nk(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dk(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Uk=800,Bk=16,Lk=Date.now;function Fk(e){var t=0,r=0;return function(){var o=Lk(),a=Bk-(o-r);if(r=o,a>0){if(++t>=Uk)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Vk(e){return function(){return e}}var ec=function(){try{var e=ls(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Wk=ec?function(e,t){return ec(e,"toString",{configurable:!0,enumerable:!1,value:Vk(t),writable:!0})}:Ud,Hk=Fk(Wk);function Jk(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}var Kk=9007199254740991,Yk=/^(?:0|[1-9]\d*)$/;function Ld(e,t){var r=typeof e;return t=t??Kk,!!t&&(r=="number"||r!="symbol"&&Yk.test(e))&&e>-1&&e%1==0&&e<t}function Cc(e,t,r){t=="__proto__"&&ec?ec(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function tl(e,t){return e===t||e!==e&&t!==t}var Qk=Object.prototype,Xk=Qk.hasOwnProperty;function jg(e,t,r){var o=e[t];(!(Xk.call(e,t)&&tl(o,r))||r===void 0&&!(t in e))&&Cc(e,t,r)}function xg(e,t,r,o){var a=!r;r||(r={});for(var s=-1,i=t.length;++s<i;){var l=t[s],c=o?o(r[l],e[l],l,r,e):void 0;c===void 0&&(c=e[l]),a?Cc(r,l,c):jg(r,l,c)}return r}var Of=Math.max;function Gk(e,t,r){return t=Of(t===void 0?e.length-1:t,0),function(){for(var o=arguments,a=-1,s=Of(o.length-t,0),i=Array(s);++a<s;)i[a]=o[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=o[a];return l[t]=r(i),Nk(e,this,l)}}function Zk(e,t){return Hk(Gk(e,t,Ud),e+"")}var e2=9007199254740991;function Fd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=e2}function Sc(e){return e!=null&&Fd(e.length)&&!Bd(e)}function t2(e,t,r){if(!Jo(r))return!1;var o=typeof t;return(o=="number"?Sc(r)&&Ld(t,r.length):o=="string"&&t in r)?tl(r[t],e):!1}function yg(e){return Zk(function(t,r){var o=-1,a=r.length,s=a>1?r[a-1]:void 0,i=a>2?r[2]:void 0;for(s=e.length>3&&typeof s=="function"?(a--,s):void 0,i&&t2(r[0],r[1],i)&&(s=a<3?void 0:s,a=1),t=Object(t);++o<a;){var l=r[o];l&&e(t,l,o,s)}return t})}var n2=Object.prototype;function Vd(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||n2;return e===r}function r2(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var o2="[object Arguments]";function zf(e){return Wo(e)&&ss(e)==o2}var wg=Object.prototype,a2=wg.hasOwnProperty,s2=wg.propertyIsEnumerable,tc=zf(function(){return arguments}())?zf:function(e){return Wo(e)&&a2.call(e,"callee")&&!s2.call(e,"callee")};function i2(){return!1}var kg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ef=kg&&typeof module=="object"&&module&&!module.nodeType&&module,l2=Ef&&Ef.exports===kg,$f=l2?Ho.Buffer:void 0,c2=$f?$f.isBuffer:void 0,Vi=c2||i2,u2="[object Arguments]",d2="[object Array]",v2="[object Boolean]",f2="[object Date]",p2="[object Error]",h2="[object Function]",g2="[object Map]",m2="[object Number]",b2="[object Object]",j2="[object RegExp]",x2="[object Set]",y2="[object String]",w2="[object WeakMap]",k2="[object ArrayBuffer]",C2="[object DataView]",S2="[object Float32Array]",O2="[object Float64Array]",z2="[object Int8Array]",E2="[object Int16Array]",$2="[object Int32Array]",M2="[object Uint8Array]",A2="[object Uint8ClampedArray]",P2="[object Uint16Array]",R2="[object Uint32Array]",cr={};cr[S2]=cr[O2]=cr[z2]=cr[E2]=cr[$2]=cr[M2]=cr[A2]=cr[P2]=cr[R2]=!0;cr[u2]=cr[d2]=cr[k2]=cr[v2]=cr[C2]=cr[f2]=cr[p2]=cr[h2]=cr[g2]=cr[m2]=cr[b2]=cr[j2]=cr[x2]=cr[y2]=cr[w2]=!1;function _2(e){return Wo(e)&&Fd(e.length)&&!!cr[ss(e)]}function Wd(e){return function(t){return e(t)}}var Cg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Si=Cg&&typeof module=="object"&&module&&!module.nodeType&&module,I2=Si&&Si.exports===Cg,du=I2&&gg.process,Hs=function(){try{var e=Si&&Si.require&&Si.require("util").types;return e||du&&du.binding&&du.binding("util")}catch{}}(),Mf=Hs&&Hs.isTypedArray,Hd=Mf?Wd(Mf):_2,q2=Object.prototype,T2=q2.hasOwnProperty;function Sg(e,t){var r=vo(e),o=!r&&tc(e),a=!r&&!o&&Vi(e),s=!r&&!o&&!a&&Hd(e),i=r||o||a||s,l=i?r2(e.length,String):[],c=l.length;for(var u in e)(t||T2.call(e,u))&&!(i&&(u=="length"||a&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Ld(u,c)))&&l.push(u);return l}function Og(e,t){return function(r){return e(t(r))}}var N2=Og(Object.keys,Object),D2=Object.prototype,U2=D2.hasOwnProperty;function B2(e){if(!Vd(e))return N2(e);var t=[];for(var r in Object(e))U2.call(e,r)&&r!="constructor"&&t.push(r);return t}function Jd(e){return Sc(e)?Sg(e):B2(e)}function L2(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var F2=Object.prototype,V2=F2.hasOwnProperty;function W2(e){if(!Jo(e))return L2(e);var t=Vd(e),r=[];for(var o in e)o=="constructor"&&(t||!V2.call(e,o))||r.push(o);return r}function Kd(e){return Sc(e)?Sg(e,!0):W2(e)}var H2=yg(function(e,t,r,o){xg(t,Kd(t),e,o)}),J2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K2=/^\w*$/;function Yd(e,t){if(vo(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Dd(e)?!0:K2.test(e)||!J2.test(e)||t!=null&&e in Object(t)}var Wi=ls(Object,"create");function Y2(){this.__data__=Wi?Wi(null):{},this.size=0}function Q2(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var X2="__lodash_hash_undefined__",G2=Object.prototype,Z2=G2.hasOwnProperty;function eC(e){var t=this.__data__;if(Wi){var r=t[e];return r===X2?void 0:r}return Z2.call(t,e)?t[e]:void 0}var tC=Object.prototype,nC=tC.hasOwnProperty;function rC(e){var t=this.__data__;return Wi?t[e]!==void 0:nC.call(t,e)}var oC="__lodash_hash_undefined__";function aC(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Wi&&t===void 0?oC:t,this}function os(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}os.prototype.clear=Y2;os.prototype.delete=Q2;os.prototype.get=eC;os.prototype.has=rC;os.prototype.set=aC;function sC(){this.__data__=[],this.size=0}function Oc(e,t){for(var r=e.length;r--;)if(tl(e[r][0],t))return r;return-1}var iC=Array.prototype,lC=iC.splice;function cC(e){var t=this.__data__,r=Oc(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():lC.call(t,r,1),--this.size,!0}function uC(e){var t=this.__data__,r=Oc(t,e);return r<0?void 0:t[r][1]}function dC(e){return Oc(this.__data__,e)>-1}function vC(e,t){var r=this.__data__,o=Oc(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}function fa(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}fa.prototype.clear=sC;fa.prototype.delete=cC;fa.prototype.get=uC;fa.prototype.has=dC;fa.prototype.set=vC;var Hi=ls(Ho,"Map");function fC(){this.size=0,this.__data__={hash:new os,map:new(Hi||fa),string:new os}}function pC(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zc(e,t){var r=e.__data__;return pC(t)?r[typeof t=="string"?"string":"hash"]:r.map}function hC(e){var t=zc(this,e).delete(e);return this.size-=t?1:0,t}function gC(e){return zc(this,e).get(e)}function mC(e){return zc(this,e).has(e)}function bC(e,t){var r=zc(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}function pa(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}pa.prototype.clear=fC;pa.prototype.delete=hC;pa.prototype.get=gC;pa.prototype.has=mC;pa.prototype.set=bC;var jC="Expected a function";function Qd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(jC);var r=function(){var o=arguments,a=t?t.apply(this,o):o[0],s=r.cache;if(s.has(a))return s.get(a);var i=e.apply(this,o);return r.cache=s.set(a,i)||s,i};return r.cache=new(Qd.Cache||pa),r}Qd.Cache=pa;var xC=500;function yC(e){var t=Qd(e,function(o){return r.size===xC&&r.clear(),o}),r=t.cache;return t}var wC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kC=/\\(\\)?/g,CC=yC(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(wC,function(r,o,a,s){t.push(a?s.replace(kC,"$1"):o||r)}),t});function SC(e){return e==null?"":bg(e)}function zg(e,t){return vo(e)?e:Yd(e,t)?[e]:CC(SC(e))}function Ec(e){if(typeof e=="string"||Dd(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Eg(e,t){t=zg(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[Ec(t[r++])];return r&&r==o?e:void 0}function OC(e,t,r){var o=e==null?void 0:Eg(e,t);return o===void 0?r:o}function zC(e,t){for(var r=-1,o=t.length,a=e.length;++r<o;)e[a+r]=t[r];return e}var $g=Og(Object.getPrototypeOf,Object),EC="[object Object]",$C=Function.prototype,MC=Object.prototype,Mg=$C.toString,AC=MC.hasOwnProperty,PC=Mg.call(Object);function RC(e){if(!Wo(e)||ss(e)!=EC)return!1;var t=$g(e);if(t===null)return!0;var r=AC.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Mg.call(r)==PC}function _C(){this.__data__=new fa,this.size=0}function IC(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function qC(e){return this.__data__.get(e)}function TC(e){return this.__data__.has(e)}var NC=200;function DC(e,t){var r=this.__data__;if(r instanceof fa){var o=r.__data__;if(!Hi||o.length<NC-1)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new pa(o)}return r.set(e,t),this.size=r.size,this}function Mo(e){var t=this.__data__=new fa(e);this.size=t.size}Mo.prototype.clear=_C;Mo.prototype.delete=IC;Mo.prototype.get=qC;Mo.prototype.has=TC;Mo.prototype.set=DC;var Ag=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Af=Ag&&typeof module=="object"&&module&&!module.nodeType&&module,UC=Af&&Af.exports===Ag,Pf=UC?Ho.Buffer:void 0,Rf=Pf?Pf.allocUnsafe:void 0;function Pg(e,t){if(t)return e.slice();var r=e.length,o=Rf?Rf(r):new e.constructor(r);return e.copy(o),o}function BC(e,t){for(var r=-1,o=e==null?0:e.length,a=0,s=[];++r<o;){var i=e[r];t(i,r,e)&&(s[a++]=i)}return s}function LC(){return[]}var FC=Object.prototype,VC=FC.propertyIsEnumerable,_f=Object.getOwnPropertySymbols,WC=_f?function(e){return e==null?[]:(e=Object(e),BC(_f(e),function(t){return VC.call(e,t)}))}:LC;function HC(e,t,r){var o=t(e);return vo(e)?o:zC(o,r(e))}function Ku(e){return HC(e,Jd,WC)}var Yu=ls(Ho,"DataView"),Qu=ls(Ho,"Promise"),Xu=ls(Ho,"Set"),If="[object Map]",JC="[object Object]",qf="[object Promise]",Tf="[object Set]",Nf="[object WeakMap]",Df="[object DataView]",KC=is(Yu),YC=is(Hi),QC=is(Qu),XC=is(Xu),GC=is(Ju),jo=ss;(Yu&&jo(new Yu(new ArrayBuffer(1)))!=Df||Hi&&jo(new Hi)!=If||Qu&&jo(Qu.resolve())!=qf||Xu&&jo(new Xu)!=Tf||Ju&&jo(new Ju)!=Nf)&&(jo=function(e){var t=ss(e),r=t==JC?e.constructor:void 0,o=r?is(r):"";if(o)switch(o){case KC:return Df;case YC:return If;case QC:return qf;case XC:return Tf;case GC:return Nf}return t});var ZC=Object.prototype,eS=ZC.hasOwnProperty;function tS(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&eS.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var nc=Ho.Uint8Array;function Xd(e){var t=new e.constructor(e.byteLength);return new nc(t).set(new nc(e)),t}function nS(e,t){var r=Xd(e.buffer);return new e.constructor(r,e.byteOffset,e.byteLength)}var rS=/\w*$/;function oS(e){var t=new e.constructor(e.source,rS.exec(e));return t.lastIndex=e.lastIndex,t}var Uf=Vo?Vo.prototype:void 0,Bf=Uf?Uf.valueOf:void 0;function aS(e){return Bf?Object(Bf.call(e)):{}}function Rg(e,t){var r=t?Xd(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var sS="[object Boolean]",iS="[object Date]",lS="[object Map]",cS="[object Number]",uS="[object RegExp]",dS="[object Set]",vS="[object String]",fS="[object Symbol]",pS="[object ArrayBuffer]",hS="[object DataView]",gS="[object Float32Array]",mS="[object Float64Array]",bS="[object Int8Array]",jS="[object Int16Array]",xS="[object Int32Array]",yS="[object Uint8Array]",wS="[object Uint8ClampedArray]",kS="[object Uint16Array]",CS="[object Uint32Array]";function SS(e,t,r){var o=e.constructor;switch(t){case pS:return Xd(e);case sS:case iS:return new o(+e);case hS:return nS(e);case gS:case mS:case bS:case jS:case xS:case yS:case wS:case kS:case CS:return Rg(e,r);case lS:return new o;case cS:case vS:return new o(e);case uS:return oS(e);case dS:return new o;case fS:return aS(e)}}function _g(e){return typeof e.constructor=="function"&&!Vd(e)?Tk($g(e)):{}}var OS="[object Map]";function zS(e){return Wo(e)&&jo(e)==OS}var Lf=Hs&&Hs.isMap,ES=Lf?Wd(Lf):zS,$S="[object Set]";function MS(e){return Wo(e)&&jo(e)==$S}var Ff=Hs&&Hs.isSet,AS=Ff?Wd(Ff):MS,PS=1,Ig="[object Arguments]",RS="[object Array]",_S="[object Boolean]",IS="[object Date]",qS="[object Error]",qg="[object Function]",TS="[object GeneratorFunction]",NS="[object Map]",DS="[object Number]",Tg="[object Object]",US="[object RegExp]",BS="[object Set]",LS="[object String]",FS="[object Symbol]",VS="[object WeakMap]",WS="[object ArrayBuffer]",HS="[object DataView]",JS="[object Float32Array]",KS="[object Float64Array]",YS="[object Int8Array]",QS="[object Int16Array]",XS="[object Int32Array]",GS="[object Uint8Array]",ZS="[object Uint8ClampedArray]",eO="[object Uint16Array]",tO="[object Uint32Array]",or={};or[Ig]=or[RS]=or[WS]=or[HS]=or[_S]=or[IS]=or[JS]=or[KS]=or[YS]=or[QS]=or[XS]=or[NS]=or[DS]=or[Tg]=or[US]=or[BS]=or[LS]=or[FS]=or[GS]=or[ZS]=or[eO]=or[tO]=!0;or[qS]=or[qg]=or[VS]=!1;function Sl(e,t,r,o,a,s){var i,l=t&PS;if(i!==void 0)return i;if(!Jo(e))return e;var c=vo(e);if(c)i=tS(e);else{var u=jo(e),d=u==qg||u==TS;if(Vi(e))return Pg(e,l);if(u==Tg||u==Ig||d&&!a)i=d?{}:_g(e);else{if(!or[u])return a?e:{};i=SS(e,u,l)}}s||(s=new Mo);var h=s.get(e);if(h)return h;s.set(e,i),AS(e)?e.forEach(function(g){i.add(Sl(g,t,r,g,e,s))}):ES(e)&&e.forEach(function(g,b){i.set(b,Sl(g,t,r,b,e,s))});var p=Ku,m=c?void 0:p(e);return Jk(m||e,function(g,b){m&&(b=g,g=e[b]),jg(i,b,Sl(g,t,r,b,e,s))}),i}var nO=1,rO=4;function oO(e){return Sl(e,nO|rO)}var aO="__lodash_hash_undefined__";function sO(e){return this.__data__.set(e,aO),this}function iO(e){return this.__data__.has(e)}function rc(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new pa;++t<r;)this.add(e[t])}rc.prototype.add=rc.prototype.push=sO;rc.prototype.has=iO;function lO(e,t){for(var r=-1,o=e==null?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}function cO(e,t){return e.has(t)}var uO=1,dO=2;function Ng(e,t,r,o,a,s){var i=r&uO,l=e.length,c=t.length;if(l!=c&&!(i&&c>l))return!1;var u=s.get(e),d=s.get(t);if(u&&d)return u==t&&d==e;var h=-1,p=!0,m=r&dO?new rc:void 0;for(s.set(e,t),s.set(t,e);++h<l;){var g=e[h],b=t[h];if(o)var j=i?o(b,g,h,t,e,s):o(g,b,h,e,t,s);if(j!==void 0){if(j)continue;p=!1;break}if(m){if(!lO(t,function(x,S){if(!cO(m,S)&&(g===x||a(g,x,r,o,s)))return m.push(S)})){p=!1;break}}else if(!(g===b||a(g,b,r,o,s))){p=!1;break}}return s.delete(e),s.delete(t),p}function vO(e){var t=-1,r=Array(e.size);return e.forEach(function(o,a){r[++t]=[a,o]}),r}function fO(e){var t=-1,r=Array(e.size);return e.forEach(function(o){r[++t]=o}),r}var pO=1,hO=2,gO="[object Boolean]",mO="[object Date]",bO="[object Error]",jO="[object Map]",xO="[object Number]",yO="[object RegExp]",wO="[object Set]",kO="[object String]",CO="[object Symbol]",SO="[object ArrayBuffer]",OO="[object DataView]",Vf=Vo?Vo.prototype:void 0,vu=Vf?Vf.valueOf:void 0;function zO(e,t,r,o,a,s,i){switch(r){case OO:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case SO:return!(e.byteLength!=t.byteLength||!s(new nc(e),new nc(t)));case gO:case mO:case xO:return tl(+e,+t);case bO:return e.name==t.name&&e.message==t.message;case yO:case kO:return e==t+"";case jO:var l=vO;case wO:var c=o&pO;if(l||(l=fO),e.size!=t.size&&!c)return!1;var u=i.get(e);if(u)return u==t;o|=hO,i.set(e,t);var d=Ng(l(e),l(t),o,a,s,i);return i.delete(e),d;case CO:if(vu)return vu.call(e)==vu.call(t)}return!1}var EO=1,$O=Object.prototype,MO=$O.hasOwnProperty;function AO(e,t,r,o,a,s){var i=r&EO,l=Ku(e),c=l.length,u=Ku(t),d=u.length;if(c!=d&&!i)return!1;for(var h=c;h--;){var p=l[h];if(!(i?p in t:MO.call(t,p)))return!1}var m=s.get(e),g=s.get(t);if(m&&g)return m==t&&g==e;var b=!0;s.set(e,t),s.set(t,e);for(var j=i;++h<c;){p=l[h];var x=e[p],S=t[p];if(o)var O=i?o(S,x,p,t,e,s):o(x,S,p,e,t,s);if(!(O===void 0?x===S||a(x,S,r,o,s):O)){b=!1;break}j||(j=p=="constructor")}if(b&&!j){var C=e.constructor,y=t.constructor;C!=y&&"constructor"in e&&"constructor"in t&&!(typeof C=="function"&&C instanceof C&&typeof y=="function"&&y instanceof y)&&(b=!1)}return s.delete(e),s.delete(t),b}var PO=1,Wf="[object Arguments]",Hf="[object Array]",jl="[object Object]",RO=Object.prototype,Jf=RO.hasOwnProperty;function _O(e,t,r,o,a,s){var i=vo(e),l=vo(t),c=i?Hf:jo(e),u=l?Hf:jo(t);c=c==Wf?jl:c,u=u==Wf?jl:u;var d=c==jl,h=u==jl,p=c==u;if(p&&Vi(e)){if(!Vi(t))return!1;i=!0,d=!1}if(p&&!d)return s||(s=new Mo),i||Hd(e)?Ng(e,t,r,o,a,s):zO(e,t,c,r,o,a,s);if(!(r&PO)){var m=d&&Jf.call(e,"__wrapped__"),g=h&&Jf.call(t,"__wrapped__");if(m||g){var b=m?e.value():e,j=g?t.value():t;return s||(s=new Mo),a(b,j,r,o,s)}}return p?(s||(s=new Mo),AO(e,t,r,o,a,s)):!1}function Gd(e,t,r,o,a){return e===t?!0:e==null||t==null||!Wo(e)&&!Wo(t)?e!==e&&t!==t:_O(e,t,r,o,Gd,a)}var IO=1,qO=2;function TO(e,t,r,o){var a=r.length,s=a;if(e==null)return!s;for(e=Object(e);a--;){var i=r[a];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<s;){i=r[a];var l=i[0],c=e[l],u=i[1];if(i[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Mo,h;if(!(h===void 0?Gd(u,c,IO|qO,o,d):h))return!1}}return!0}function Dg(e){return e===e&&!Jo(e)}function NO(e){for(var t=Jd(e),r=t.length;r--;){var o=t[r],a=e[o];t[r]=[o,a,Dg(a)]}return t}function Ug(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function DO(e){var t=NO(e);return t.length==1&&t[0][2]?Ug(t[0][0],t[0][1]):function(r){return r===e||TO(r,e,t)}}function UO(e,t){return e!=null&&t in Object(e)}function BO(e,t,r){t=zg(t,e);for(var o=-1,a=t.length,s=!1;++o<a;){var i=Ec(t[o]);if(!(s=e!=null&&r(e,i)))break;e=e[i]}return s||++o!=a?s:(a=e==null?0:e.length,!!a&&Fd(a)&&Ld(i,a)&&(vo(e)||tc(e)))}function LO(e,t){return e!=null&&BO(e,t,UO)}var FO=1,VO=2;function WO(e,t){return Yd(e)&&Dg(t)?Ug(Ec(e),t):function(r){var o=OC(r,e);return o===void 0&&o===t?LO(r,e):Gd(t,o,FO|VO)}}function HO(e){return function(t){return t==null?void 0:t[e]}}function JO(e){return function(t){return Eg(t,e)}}function KO(e){return Yd(e)?HO(Ec(e)):JO(e)}function YO(e){return typeof e=="function"?e:e==null?Ud:typeof e=="object"?vo(e)?WO(e[0],e[1]):DO(e):KO(e)}function QO(e){return function(t,r,o){for(var a=-1,s=Object(t),i=o(t),l=i.length;l--;){var c=i[++a];if(r(s[c],c,s)===!1)break}return t}}var Bg=QO();function XO(e,t){return e&&Bg(e,t,Jd)}function Gu(e,t,r){(r!==void 0&&!tl(e[t],r)||r===void 0&&!(t in e))&&Cc(e,t,r)}function GO(e){return Wo(e)&&Sc(e)}function Zu(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function ZO(e){return xg(e,Kd(e))}function e4(e,t,r,o,a,s,i){var l=Zu(e,r),c=Zu(t,r),u=i.get(c);if(u){Gu(e,r,u);return}var d=s?s(l,c,r+"",e,t,i):void 0,h=d===void 0;if(h){var p=vo(c),m=!p&&Vi(c),g=!p&&!m&&Hd(c);d=c,p||m||g?vo(l)?d=l:GO(l)?d=Dk(l):m?(h=!1,d=Pg(c,!0)):g?(h=!1,d=Rg(c,!0)):d=[]:RC(c)||tc(c)?(d=l,tc(l)?d=ZO(l):(!Jo(l)||Bd(l))&&(d=_g(c))):h=!1}h&&(i.set(c,d),a(d,c,o,s,i),i.delete(c)),Gu(e,r,d)}function Lg(e,t,r,o,a){e!==t&&Bg(t,function(s,i){if(a||(a=new Mo),Jo(s))e4(e,t,i,r,Lg,o,a);else{var l=o?o(Zu(e,i),s,i+"",e,t,a):void 0;l===void 0&&(l=s),Gu(e,i,l)}},Kd)}var t4=yg(function(e,t,r,o){Lg(e,t,r,o)});function n4(e,t){var r={};return t=YO(t),XO(e,function(o,a,s){Cc(r,t(o,a,s),o)}),r}const r4=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),o4=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),a4=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),s4=/[^\p{L}\d]+/giu,Kf="$1\0$2",Yf="";function Fg(e){let t=e.trim();t=t.replace(r4,Kf).replace(o4,Kf),t=t.replace(s4,"\0");let r=0,o=t.length;for(;t.charAt(r)==="\0";)r++;if(r===o)return[];for(;t.charAt(o-1)==="\0";)o--;return t.slice(r,o).split(/\0/g)}function i4(e){const t=Fg(e);for(let r=0;r<t.length;r++){const o=t[r],a=a4.exec(o);if(a){const s=a.index+(a[1]??a[2]).length;t.splice(r,1,o.slice(0,s),o.slice(s))}}return t}function l4(e,t){const[r,o,a]=v4(e,t),s=c4(void 0),i=u4(void 0),l=d4(s,i);return r+o.map((c,u)=>u===0?s(c):l(c,u)).join("")+a}function c4(e){return t=>t.toLocaleLowerCase(e)}function u4(e){return t=>t.toLocaleUpperCase(e)}function d4(e,t){return(r,o)=>{const a=r[0];return(o>0&&a>="0"&&a<="9"?"_"+a:t(a))+e(r.slice(1))}}function v4(e,t={}){const r=t.split??(t.separateNumbers?i4:Fg),o=t.prefixCharacters??Yf,a=t.suffixCharacters??Yf;let s=0,i=e.length;for(;s<e.length;){const l=e.charAt(s);if(!o.includes(l))break;s++}for(;i>s;){const l=i-1,c=e.charAt(l);if(!a.includes(c))break;i=l}return[e.slice(0,s),r(e.slice(s,i)),e.slice(i)]}const Oi=e=>/.+-.+/.test(e)?l4(e):e,f4=e=>Object.prototype.toString.call(e).slice(8,-1)==="Object";function p4(e,t){const r=Object.create(null),o=e.split(",");for(let a=0;a<o.length;a++)r[o[a]]=!0;return a=>!!r[a]}const h4=p4("String,Number,Boolean,Function,Symbol,BigInt");function g4(e){const t=e==null?void 0:e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function m4(e,t){let r;const o=g4(t);if(h4(o)){const a=typeof e;r=a===o.toLowerCase(),!r&&a==="object"&&(r=e instanceof t)}else o==="Object"?r=Jo(e):o==="Array"?r=Array.isArray(e):o==="null"?r=e===null:r=e instanceof t;return{valid:r,expectedType:o}}function b4({prop:e,type:t,validator:r}){if(![void 0,null].includes(e)&&t){let o=!1;const a=Array.isArray(t)?t:[t],s=[];for(let i=0;i<a.length&&!o;i++){const{valid:l,expectedType:c}=m4(e,a[i]);s.push(c||""),o=l}if(!o)throw new TypeError(`Invalid prop: type check failed, expecting [${s.join(", ")}], receiving: ${e}`)}if(r&&!r(e))throw new Error(`Invalid prop: validator check failed, receiving: ${e}`)}function j4(e,{mergeObject:t,mergeObjectCustomizer:r,mergeFunction:o}){const a=[];for(let i=e.length-1;i>=0;i--)a.push(e[i]);const s=r||(o?(i,l)=>typeof i=="function"&&typeof l=="function"?o==null?void 0:o(l,i):void 0:void 0);return t==="deep"?t4(...a,s):H2(...a,s)}function x4(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function xa(e,t={}){const{type:r,default:o,defaultIsDynamic:a=!1,required:s=!1,validator:i,camelizeObjectKeys:l=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:u=!0}=t;let{mergeObject:d="deep",mergeObjectCustomizer:h,mergeFunction:p=!1}=t;const m=[];let g,b=!1,j=!1;const x=S=>{if(S!==void 0){b4({type:r,prop:S,validator:i});const O=f4(S),C=typeof S=="function";return b=O,j=C,O?(S=oO(S),l?n4(S,(y,$)=>Oi($)):S):S}};for(const S of e)m.push(x(S));if(!a)m.push(x(o));else if(typeof o!="function")throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${o}`);b||(d=!1,j||(p=!1));for(let S=0;S<m.length;S++){const O=m[S];if(O!==void 0){S===m.length-1?g=O:d?g=j4(c?[O,o]:m,{mergeObject:d,mergeObjectCustomizer:h,mergeFunction:p}):p?g=x4(u?[O,o]:m,{mergeFunction:p}):g=O;break}}if(s&&[void 0,null].includes(g))throw new Error("Missing required prop");return a?xa(e,{...t,default:o(g),defaultIsDynamic:!1}):g}function Qf(e){const t=Array.from(Oi(e));return t[0]=t[0].toUpperCase(),t.unshift("o","n"),t.join("")}function y4(e,{props:t=[],camelizePropNames:r=!1}={}){const o={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let a;if(Array.isArray(t))a=r?t.map(s=>Oi(s)):t;else if(r){a=[];for(const s in t)a.push(Oi(s))}else a=Object.keys(t);for(const s in e)if(s.startsWith("@")){const i=s.substring(1);if(i.startsWith("vue:"))o.hooks[Qf(i.replace("vue:","vnode-"))]=e[s];else{if(i.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");o.listeners[Qf(i)]=e[s]}}else if(s.startsWith("#")){const i=s.substring(1);i&&(o.slots[i]=e[s])}else{const i=r?Oi(s):s;a.includes(i)?o.props[i]=e[s]:o.attrs[s]=e[s]}return o}const Xf="JsonEditorVue",Ol=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],ma={},Gf={},zl="modelValue",Zf="update:modelValue",ep={[zl]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(Ol.map(e=>[e,{type:Boolean,default:void 0}]))},w4=as({name:Xf,install(e,t){const r=y4(t||{},{props:ep});Object.assign(ma,r.props),Object.assign(Gf,r.attrs),e.component(Xf,this)},props:ep,emits:{[Zf](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:r,expose:o}){var a;const s=(a=im())==null?void 0:a.proxy,i=za(),l=za(!1),c=za();lm(()=>{var x;c.value=xa([e.mode,ma.mode],{type:String}),(x=i.value)==null||x.updateProps({mode:c.value||yr.tree})});const u=x=>{r("update:mode",x)};ma.mode!==void 0&&e.mode===void 0&&u(ma.mode);const d=tv(()=>xa([e.debounce,ma.debounce,300],{type:Number})),h=tv(()=>xa([e.stringified,ma.stringified,!0],{type:Boolean}));let p=Cl;const m=x=>{l.value=!0,!h.value&&x.text&&(i.value&&!i.value.validate()&&(x.json=p(x.text)),x.text=void 0),r(Zf,x.text===void 0?x.json:x.text)},g=ck(m,d.value),b=x=>{c.value==="text"?g(x):m(x)},j=(x,S)=>(...O)=>{x(...O),S(...O)};return o==null||o({jsonEditor:i}),um(()=>{var x;(x=i.value)==null||x.destroy()}),rp(()=>{const x=xa([e[zl],ma[zl]]),S=Object.fromEntries(Array.from(Ol,C=>[C,xa([e[C],ma[C]])]).filter(([,C])=>C!==void 0)),O=xa([S,t,Gf],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:C=>{var y;return p=((y=C.parser)==null?void 0:y.parse)||Cl,{onChange:b,onChangeMode:u,mode:c.value,parser:{parse:Tw,stringify:JSON.stringify},...x!==void 0&&{content:{[typeof x=="string"&&c.value==="text"&&h.value?"text":"json"]:x}}}},mergeFunction:j,mergeObject:"shallow",type:Object});i.value=Aw({target:s==null?void 0:s.$refs.jsonEditorRef,props:O}),qc(()=>e[zl],C=>{if(l.value){l.value=!1;return}i.value&&i.value.set([void 0,""].includes(C)?{text:""}:{[typeof C=="string"&&c.value==="text"&&h.value?"text":"json"]:C})},{deep:!0}),qc(()=>Array.from(Ol,C=>e[C]),C=>{var y;(y=i.value)==null||y.updateProps(Object.fromEntries(Array.from(C,($,_)=>[Ol[_],$]).filter(([,$])=>$!==void 0)))}),qc(()=>t,C=>{var y,$;const _={};(C.onChange||C["on-change"])&&(_.onChange=b),(C.onChangeMode||C["on-change-mode"])&&(_.onChangeMode=u),p=((y=C.parser)==null?void 0:y.parse)||Cl,($=i.value)==null||$.updateProps(Object.getOwnPropertyNames(_).length>0?xa([C,_],{camelizeObjectKeys:!0,mergeFunction:j,mergeObject:"shallow",type:Object}):C)},{deep:!0}),o||(o=C=>{for(const y in C)s[y]=Ge(C[y])},o({jsonEditor:i}))}),()=>cm("div",{ref:"jsonEditorRef"})}}),k4={__name:"JsonEditor",setup(e){const t=dm().isDark;return(r,o)=>(Nr(),zi(Ge(w4),vm(r.$attrs,{class:{"jse-theme-dark":Ge(t)}}),null,16,["class"]))}},C4=["title"],S4=as({__name:"CopyableText",props:{val:{}},setup(e){const{copy:t}=kp({text:"复制成功"});return(r,o)=>(Nr(),xo("div",{title:r.val,class:"copiable-text",onClick:o[0]||(o[0]=a=>Ge(t)(r.val))},Ha(r.val),9,C4))}}),tp=ed(S4,[["__scopeId","data-v-ac147690"]]),O4={key:0,class:"prj-detail"},z4={class:"prj-meta-wrapper"},E4={class:"prj-meta"},$4={class:"prj-meta"},M4={class:"prj-data-control"},A4={class:"prj-data-wrapper"},P4={class:"edit-data-wrapper"},R4={class:"dialog-footer"};function _4(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!fm(e)}const I4=as({__name:"mockDetail",setup(e){const{copy:t}=kp({text:"复制成功"}),r=za(!1),o=op(uv()),a=[{title:"名称",key:"name",dataKey:"name",width:300,fixed:lv.LEFT},{title:"请求类型",key:"type",dataKey:"type",width:100,align:"center",cellRenderer:({cellData:c})=>bt(cv,null,_4(c)?c:{default:()=>[c]})},{title:"请求状态",key:"enabled",dataKey:"enabled",width:100,align:"center",cellRenderer:({cellData:c})=>bt(cv,{type:"success"},{default:()=>[c?"开启":"关闭"]})},{title:"接口地址",key:"path",dataKey:"path",width:300,cellRenderer:({cellData:c})=>bt(tp,{val:c},null)},{title:"接口描述",key:"description",dataKey:"description",width:300},{title:"创建时间",key:"createdAt",dataKey:"createdAt",width:200},{title:"操作",key:"operations",fixed:lv.RIGHT,cellRenderer:({rowData:c})=>bt($l,null,[bt(bi,{size:"small",onClick:()=>t(c.url??"")},{default:()=>[ho("复制")]}),bt(bi,{size:"small",onClick:()=>i(c)},{default:()=>[ho("编辑")]}),bt(Cp,{title:"确认要删除该数据吗？删除后无法恢复！",onConfirm:()=>Bb(c)},{reference:()=>bt(bi,{size:"small",type:"danger"},{default:()=>[ho("删除")]})})]),width:200,align:"center"}];function s(){Object.assign(o,uv()),r.value=!0}function i(c){let u;try{u=JSON.parse(c.response)}catch{u=c.response}Object.assign(o,{id:c.id,name:c.name,type:c.type,enabled:c.enabled,path:c.path,description:c.description,delay:c.delay,response:u,projectId:c.projectId}),r.value=!0}async function l(c){let u=c.response;if(!u){Cr.error("请填写接口返回数据");return}if(typeof u!="string")try{u=JSON.stringify(u)}catch{u=u.toString()}else try{u=JSON.stringify(JSON.parse(u))}catch{}let d;c.id>-1?d=await Db({...c,response:u}):d=await Ub({...c,response:u}),d&&(r.value=!1)}return(c,u)=>{const d=Tb,h=tp,p=bi,m=$b,g=Mb,b=ap,j=wp,x=Eb,S=zb,O=Ob,C=yp,y=k4,$=ip;return Nr(),xo($l,null,[Ge(Gr)?(Nr(),xo("div",O4,[bt(d,{onBack:u[0]||(u[0]=_=>Ge(Sp)())},{content:Zn(()=>[ho(Ha(Ge(Gr).name),1)]),_:1}),Vn("div",z4,[Vn("div",E4,[u[12]||(u[12]=Vn("div",{class:"prj-meta-name"}," 接口根地址 ",-1)),bt(h,{val:`${Ge(np).apiBaseUrl}/mock/${Ge(Gr).id}${Ge(Gr).path}`,class:"prj-meta-content"},null,8,["val"])]),Vn("div",$4,[u[13]||(u[13]=Vn("div",{class:"prj-meta-name"}," 项目ID ",-1)),bt(h,{val:Ge(Gr).id,class:"prj-meta-content"},null,8,["val"])])]),Vn("div",M4,[bt(p,{type:"primary",onClick:s},{default:Zn(()=>u[14]||(u[14]=[ho(" 新增接口 ")])),_:1,__:[14]})]),Vn("div",A4,[bt(g,null,{default:Zn(({height:_,width:T})=>[bt(m,{columns:a,data:Ge(ad),width:T,height:_,fixed:!0},null,8,["data","width","height"])]),_:1})])])):bs("",!0),bt($,{modelValue:Ge(r),"onUpdate:modelValue":u[11]||(u[11]=_=>sp(r)?r.value=_:null),fullscreen:"",title:Ge(o).id>-1?"修改接口":"添加接口","destroy-on-close":""},{footer:Zn(()=>[Vn("span",R4,[bt(p,{onClick:u[9]||(u[9]=_=>r.value=!1)},{default:Zn(()=>u[15]||(u[15]=[ho("取消")])),_:1,__:[15]}),bt(p,{type:"primary",onClick:u[10]||(u[10]=_=>l(Ge(o)))},{default:Zn(()=>u[16]||(u[16]=[ho(" 提交 ")])),_:1,__:[16]})])]),default:Zn(()=>[Vn("div",P4,[bt(C,{model:Ge(o),class:"edit-data-form"},{default:Zn(()=>[bt(j,{label:"接口名","label-width":120,required:!0},{default:Zn(()=>[bt(b,{modelValue:Ge(o).name,"onUpdate:modelValue":u[1]||(u[1]=_=>Ge(o).name=_),autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(j,{label:"类型(method)","label-width":120,required:!0},{default:Zn(()=>[bt(S,{modelValue:Ge(o).type,"onUpdate:modelValue":u[2]||(u[2]=_=>Ge(o).type=_)},{default:Zn(()=>[bt(x,{label:"ALL",value:"all"}),bt(x,{label:"GET",value:"get"}),bt(x,{label:"POST",value:"post"}),bt(x,{label:"DELETE",value:"delete"}),bt(x,{label:"PUT",value:"put"})]),_:1},8,["modelValue"])]),_:1}),bt(j,{label:"返回延时(单位毫秒)","label-width":120},{default:Zn(()=>[bt(b,{modelValue:Ge(o).delay,"onUpdate:modelValue":u[3]||(u[3]=_=>Ge(o).delay=_),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(j,{label:"数据类型","label-width":120},{default:Zn(()=>[bt(S,{modelValue:Ge(o).contentType,"onUpdate:modelValue":u[4]||(u[4]=_=>Ge(o).contentType=_)},{default:Zn(()=>[bt(x,{label:"自动",value:""}),bt(x,{label:"XML",value:"text/xml"}),bt(x,{label:"HTML",value:"text/html"})]),_:1},8,["modelValue"])]),_:1}),bt(j,{label:"接口","label-width":120,required:!0},{default:Zn(()=>[bt(b,{modelValue:Ge(o).path,"onUpdate:modelValue":u[5]||(u[5]=_=>Ge(o).path=_),autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(j,{label:"接口描述","label-width":120},{default:Zn(()=>[bt(b,{modelValue:Ge(o).description,"onUpdate:modelValue":u[6]||(u[6]=_=>Ge(o).description=_),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(j,{label:"接口状态","label-width":120},{default:Zn(()=>[bt(O,{modelValue:Ge(o).enabled,"onUpdate:modelValue":u[7]||(u[7]=_=>Ge(o).enabled=_),"inline-prompt":"","active-text":"开","inactive-text":"关"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),bt(y,{modelValue:Ge(o).response,"onUpdate:modelValue":u[8]||(u[8]=_=>Ge(o).response=_),class:"edit-data-json",mode:"text"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])],64)}}}),q4=ed(I4,[["__scopeId","data-v-baa59ded"]]),T4={id:"",name:"",path:"",description:""},Zd=za([]);async function N4(){try{await $c();const e=pm("prjId");e&&Vg(e)}catch(e){throw new Error(e.message||"获取项目列表失败")}}function D4(){return{...T4}}function Vg(e){if(typeof e=="string"){const t=Zd.value.find(r=>r.id===e);if(t)e=t;else{Cr.error("未找到项目");return}}Sp(e).then()}async function U4(e){try{return await Ua.post("/mock/api/prj",{...e,id:void 0}),Cr.success("创建项目成功"),$c().then(),!0}catch(t){Cr.error(t.message||"创建项目失败")}return!1}async function B4(e){try{return await Ua.put(`/mock/api/prj/${e.id}`,e),Cr.success("更新项目成功"),$c().then(),!0}catch(t){Cr.error(t.message||"更新项目失败")}return!1}async function L4(e){try{return await Ua.delete(`/mock/api/prj/${e.id}`),Cr.success("删除项目成功"),$c().then(),!0}catch(t){Cr.error(t.message||"删除项目失败")}return!1}async function $c(){try{const e=await Ua.get("/mock/api/prj/list");Zd.value=e.data||[]}catch(e){console.log(e),Cr.error(e.message||"获取项目列表失败")}}const F4={class:"prj-wrapper"},V4={"w-full":"",class:"prj-list"},W4={class:"prj-title"},H4={class:"prj-path"},J4={class:"prj-desc"},K4={class:"prj-control"},Y4=["onClick"],Q4=["onClick"],X4={class:"dialog-footer"},G4=as({__name:"mockList",setup(e){const t=za(!1),r=op({id:"",name:"",path:"",description:""});function o(){Object.assign(r,D4()),t.value=!0}function a(i){Object.assign(r,{id:i.id??"",name:i.name,path:i.path,description:i.description??""}),t.value=!0}async function s(i){let l;i.id?l=await B4(i):l=await U4(i),l&&(t.value=!1)}return(i,l)=>{const c=Cp,u=ap,d=wp,h=yp,p=bi,m=ip;return Nr(),xo($l,null,[Vn("div",F4,[Vn("div",V4,[(Nr(!0),xo($l,null,hm(Ge(Zd),(g,b)=>(Nr(),xo("div",{key:b,class:"prj-item"},[Vn("div",W4,Ha(g.name),1),Vn("div",H4,Ha(g.path),1),Vn("div",J4,Ha(g.description),1),Vn("div",K4,[Vn("div",{class:"prj-control-btn prj-btn-open",onClick:j=>Ge(Vg)(g)},l[6]||(l[6]=[Vn("i",{class:"i-icon-park-outline-preview-open"},null,-1)]),8,Y4),Vn("div",{class:"prj-control-btn prj-btn-edit",onClick:j=>a(g)},l[7]||(l[7]=[Vn("i",{class:"i-icon-park-outline-edit-two"},null,-1)]),8,Q4),bt(c,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:j=>Ge(L4)(g)},{reference:Zn(()=>l[8]||(l[8]=[Vn("div",{class:"prj-control-btn prj-btn-delete"},[Vn("i",{class:"i-icon-park-outline-delete"})],-1)])),_:2},1032,["onConfirm"])])]))),128)),Vn("div",{class:"prj-add",onClick:o},l[9]||(l[9]=[Vn("i",{class:"i-icon-park-outline-plus"},null,-1)]))])]),bt(m,{modelValue:Ge(t),"onUpdate:modelValue":l[5]||(l[5]=g=>sp(t)?t.value=g:null),title:Ge(r).id?"修改项目":"添加项目"},{footer:Zn(()=>[Vn("span",X4,[bt(p,{onClick:l[3]||(l[3]=g=>t.value=!1)},{default:Zn(()=>l[10]||(l[10]=[ho("取消")])),_:1,__:[10]}),bt(p,{type:"primary",onClick:l[4]||(l[4]=g=>s(Ge(r)))},{default:Zn(()=>l[11]||(l[11]=[ho(" 提交 ")])),_:1,__:[11]})])]),default:Zn(()=>[bt(h,{model:Ge(r)},{default:Zn(()=>[bt(d,{label:"项目名称","label-width":120,required:!0},{default:Zn(()=>[bt(u,{modelValue:Ge(r).name,"onUpdate:modelValue":l[0]||(l[0]=g=>Ge(r).name=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(d,{label:"接口基础路径","label-width":120,required:!0},{default:Zn(()=>[bt(u,{modelValue:Ge(r).path,"onUpdate:modelValue":l[1]||(l[1]=g=>Ge(r).path=g),autocomplete:"off"},null,8,["modelValue"])]),_:1}),bt(d,{label:"项目描述","label-width":120},{default:Zn(()=>[bt(u,{modelValue:Ge(r).description,"onUpdate:modelValue":l[2]||(l[2]=g=>Ge(r).description=g),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),Z4=ed(G4,[["__scopeId","data-v-ede3387b"]]),Rz=as({__name:"mock",setup(e){return rp(()=>{N4()}),(t,r)=>Ge(Gr)?(Nr(),zi(q4,{key:1})):(Nr(),zi(Z4,{key:0}))}});export{Rz as default};
