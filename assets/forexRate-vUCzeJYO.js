import{ao as Fe,ap as Ce,al as J,s as d,D as N,l as R,n as je,aa as Ie,ag as Be,aj as ze,ai as Ye,a9 as z,aq as ue,ar as Le,g as qe,q as ie,Z as se,h as Y,w as M,o as V,j as Z,t as T,C as L,v as j,F as ce,r as fe,H as de,z as ve,p as We,k as Je}from"./index-6zGE5DCB.js";import{E as Ze}from"./el-space-IpovJKmU.js";import"./el-tag-EY9nNPhk.js";import{E as Ke,a as Ge}from"./el-select-uCNzHCk_.js";import"./el-scrollbar-vz8xv5bG.js";import"./el-popper-eQgDHU9l.js";import{E as Xe}from"./el-input-number-6Q3gqa-7.js";import{d as Qe,c as I,_ as k,i as ee,u as Se,e as _,g as et,b as H,h as tt,o as at}from"./index-_kLejrJI.js";import{d as pe}from"./dayjs.min-9hzSS0GQ.js";import{b as rt}from"./_baseSlice-dEb6GWcI.js";import{b as ot}from"./index-NQ00la_Z.js";import{t as be}from"./toInteger--1QioUwv.js";import{_ as nt}from"./Paragraph-JjA1hXAC.js";import"./strings-2kcWSpwp.js";import"./isEqual-xESWA3Y_.js";import"./isUndefined-IZwZ21d-.js";import"./index-lPu0chFm.js";import"./hasIn-lgsnO1s2.js";import"./toFinite-tbsrRPt8.js";function lt(t,e,a){var o=t.length;return a=a===void 0?o:a,!e&&a>=o?t:rt(t,e,a)}var ut="\\ud800-\\udfff",it="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",ft=it+st+ct,dt="\\ufe0e\\ufe0f",vt="\\u200d",pt=RegExp("["+vt+ut+ft+dt+"]");function te(t){return pt.test(t)}function mt(t){return t.split("")}var $e="\\ud800-\\udfff",gt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",St=gt+ht+Ct,bt="\\ufe0e\\ufe0f",$t="["+$e+"]",K="["+St+"]",G="\\ud83c[\\udffb-\\udfff]",xt="(?:"+K+"|"+G+")",xe="[^"+$e+"]",ye="(?:\\ud83c[\\udde6-\\uddff]){2}",_e="[\\ud800-\\udbff][\\udc00-\\udfff]",yt="\\u200d",we=xt+"?",Re="["+bt+"]?",_t="(?:"+yt+"(?:"+[xe,ye,_e].join("|")+")"+Re+we+")*",wt=Re+we+_t,Rt="(?:"+[xe+K+"?",K,ye,_e,$t].join("|")+")",Dt=RegExp(G+"(?="+G+")|"+Rt+wt,"g");function Tt(t){return t.match(Dt)||[]}function Et(t){return te(t)?Tt(t):mt(t)}var kt=9007199254740991,Mt=Math.floor;function me(t,e){var a="";if(!t||e<1||e>kt)return a;do e%2&&(a+=t),e=Mt(e/2),e&&(t+=t);while(e);return a}var Ot=ot("length"),De="\\ud800-\\udfff",Pt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",Ut="\\u20d0-\\u20ff",Vt=Pt+At+Ut,Ht="\\ufe0e\\ufe0f",Nt="["+De+"]",X="["+Vt+"]",Q="\\ud83c[\\udffb-\\udfff]",Ft="(?:"+X+"|"+Q+")",Te="[^"+De+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",jt="\\u200d",Me=Ft+"?",Oe="["+Ht+"]?",It="(?:"+jt+"(?:"+[Te,Ee,ke].join("|")+")"+Oe+Me+")*",Bt=Oe+Me+It,zt="(?:"+[Te+X+"?",X,Ee,ke,Nt].join("|")+")",ge=RegExp(Q+"(?="+Q+")|"+zt+Bt,"g");function Yt(t){for(var e=ge.lastIndex=0;ge.test(t);)++e;return e}function ae(t){return te(t)?Yt(t):Ot(t)}var Lt=Math.ceil;function Pe(t,e){e=e===void 0?" ":Fe(e);var a=e.length;if(a<2)return a?me(e,t):e;var o=me(e,Lt(t/ae(e)));return te(e)?lt(Et(o),0,t).join(""):o.slice(0,t)}function qt(t,e,a){t=Ce(t),e=be(e);var o=e?ae(t):0;return e&&o<e?t+Pe(e-o,a):t}function Wt(t,e,a){t=Ce(t),e=be(e);var o=e?ae(t):0;return e&&o<e?Pe(e-o,a)+t:t}const{Axios:ja,AxiosError:he,CanceledError:Ia,isCancel:Ba,CancelToken:za,VERSION:Ya,all:La,Cancel:qa,isAxiosError:Wa,spread:Ja,toFormData:Za,AxiosHeaders:Ka,HttpStatusCode:Ga,formToJSON:Xa,getAdapter:Qa,mergeConfig:er}=J;var Ae=function(e){var a=e.value,o=e.formatter,i=e.precision,l=e.decimalSeparator,f=e.groupSeparator,s=f===void 0?"":f,n=e.prefixCls,m;if(typeof o=="function")m=o({value:a});else{var b=String(a),C=b.match(/^(-?)(\d*)(\.(\d+))?$/);if(!C)m=b;else{var p=C[1],v=C[2]||"0",c=C[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,s),typeof i=="number"&&(c=qt(c,i,"0").slice(0,i)),c&&(c="".concat(l).concat(c)),m=[d("span",{key:"int",class:"".concat(n,"-content-value-int")},[p,v]),c&&d("span",{key:"decimal",class:"".concat(n,"-content-value-decimal")},[c])]}}return d("span",{class:"".concat(n,"-content-value")},[m])};Ae.displayName="StatisticNumber";const Jt=Ae;var Zt=function(){return{prefixCls:String,width:{type:[Number,String]}}},Kt=N({compatConfig:{MODE:3},name:"SkeletonTitle",props:Zt(),setup:function(e){return function(){var a=e.prefixCls,o=e.width,i=typeof o=="number"?"".concat(o,"px"):o;return d("h3",{class:a,style:{width:i}},null)}}});const Gt=Kt;var Xt=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},Qt=N({compatConfig:{MODE:3},name:"SkeletonParagraph",props:Xt(),setup:function(e){var a=function(i){var l=e.width,f=e.rows,s=f===void 0?2:f;if(Array.isArray(l))return l[i];if(s-1===i)return l};return function(){var o=e.prefixCls,i=e.rows,l=Qe(Array(i)).map(function(f,s){var n=a(s);return d("li",{key:s,style:{width:typeof n=="number"?"".concat(n,"px"):n}},null)});return d("ul",{class:o},[l])}}});const ea=Qt;var Ue=function(e){var a,o,i=e.prefixCls,l=e.size,f=e.shape,s=I((a={},k(a,"".concat(i,"-lg"),l==="large"),k(a,"".concat(i,"-sm"),l==="small"),a)),n=I((o={},k(o,"".concat(i,"-circle"),f==="circle"),k(o,"".concat(i,"-square"),f==="square"),k(o,"".concat(i,"-round"),f==="round"),o)),m=typeof l=="number"?{width:"".concat(l,"px"),height:"".concat(l,"px"),lineHeight:"".concat(l,"px")}:{};return d("span",{class:I(i,s,n),style:m},null)};Ue.displayName="SkeletonElement";const ta=Ue;var aa=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function q(t){return t&&et(t)==="object"?t:{}}function ra(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function oa(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function na(t,e){var a={};return(!t||!e)&&(a.width="61%"),!t&&e?a.rows=3:a.rows=2,a}var la=N({compatConfig:{MODE:3},name:"ASkeleton",props:ee(aa(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,a){var o=a.slots,i=Se("skeleton",e),l=i.prefixCls,f=i.direction;return function(){var s,n=e.loading,m=e.avatar,b=e.title,C=e.paragraph,p=e.active,v=e.round,c=l.value;if(n||e.loading===void 0){var r,u=!!m||m==="",$=!!b||b==="",g=!!C||C==="",S;if(u){var D=_(_({prefixCls:"".concat(c,"-avatar")},ra($,g)),q(m));S=d("div",{class:"".concat(c,"-header")},[d(ta,D,null)])}var y;if($||g){var w;if($){var h=_(_({prefixCls:"".concat(c,"-title")},oa(u,g)),q(b));w=d(Gt,h,null)}var E;if(g){var P=_(_({prefixCls:"".concat(c,"-paragraph")},na(u,$)),q(C));E=d(ea,P,null)}y=d("div",{class:"".concat(c,"-content")},[w,E])}var U=I(c,(r={},k(r,"".concat(c,"-with-avatar"),u),k(r,"".concat(c,"-active"),p),k(r,"".concat(c,"-rtl"),f.value==="rtl"),k(r,"".concat(c,"-round"),v),r));return d("div",{class:U},[S,y])}return(s=o.default)===null||s===void 0?void 0:s.call(o)}}});const ua=la;var Ve=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:H.any,formatter:H.any,precision:Number,prefix:H.any,suffix:H.any,title:H.any,loading:{type:Boolean,default:void 0}}};const O=N({compatConfig:{MODE:3},name:"AStatistic",props:ee(Ve(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,a){var o=a.slots,i=Se("statistic",e),l=i.prefixCls,f=i.direction;return function(){var s,n,m,b,C,p,v,c=e.value,r=c===void 0?0:c,u=e.valueStyle,$=e.valueRender,g=l.value,S=(s=e.title)!==null&&s!==void 0?s:(n=o.title)===null||n===void 0?void 0:n.call(o),D=(m=e.prefix)!==null&&m!==void 0?m:(b=o.prefix)===null||b===void 0?void 0:b.call(o),y=(C=e.suffix)!==null&&C!==void 0?C:(p=o.suffix)===null||p===void 0?void 0:p.call(o),w=(v=e.formatter)!==null&&v!==void 0?v:o.formatter,h=d(Jt,_({"data-for-update":Date.now()},_(_({},e),{},{prefixCls:g,value:r,formatter:w})),null);return $&&(h=$(h)),d("div",{class:[g,k({},"".concat(g,"-rtl"),f.value==="rtl")]},[S&&d("div",{class:"".concat(g,"-title")},[S]),d(ua,{paragraph:!1,loading:e.loading},{default:function(){return[d("div",{style:u,class:"".concat(g,"-content")},[D&&d("span",{class:"".concat(g,"-content-prefix")},[D]),h,y&&d("span",{class:"".concat(g,"-content-suffix")},[y])])]}})])}}});var ia=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function sa(t,e){var a=t,o=/\[[^\]]*]/g,i=(e.match(o)||[]).map(function(n){return n.slice(1,-1)}),l=e.replace(o,"[]"),f=ia.reduce(function(n,m){var b=tt(m,2),C=b[0],p=b[1];if(n.indexOf(C)!==-1){var v=Math.floor(a/p);return a-=v*p,n.replace(new RegExp("".concat(C,"+"),"g"),function(c){var r=c.length;return Wt(v.toString(),r,"0")})}return n},l),s=0;return f.replace(o,function(){var n=i[s];return s+=1,n})}function ca(t,e){var a=e.format,o=a===void 0?"":a,i=new Date(t).getTime(),l=Date.now(),f=Math.max(i-l,0);return sa(f,o)}var fa=1e3/30;function W(t){return new Date(t).getTime()}var da=function(){return _(_({},Ve()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const va=N({compatConfig:{MODE:3},name:"AStatisticCountdown",props:ee(da(),{format:"HH:mm:ss"}),setup:function(e,a){var o=a.emit,i=a.slots,l=R(),f=R(),s=function(){var v=e.value,c=W(v);c>=Date.now()?n():m()},n=function(){if(!l.value){var v=W(e.value);l.value=setInterval(function(){f.value.$forceUpdate(),v>Date.now()&&o("change",v-Date.now()),s()},fa)}},m=function(){var v=e.value;if(l.value){clearInterval(l.value),l.value=void 0;var c=W(v);c<Date.now()&&o("finish")}},b=function(v){var c=v.value,r=v.config,u=e.format;return ca(c,_(_({},r),{},{format:u}))},C=function(v){return v};return je(function(){s()}),Ie(function(){s()}),Be(function(){m()}),function(){var p=e.value;return d(O,_({ref:f},_(_({},at(e,["onFinish","onChange"])),{},{value:p,valueRender:C,formatter:b})),i)}}});O.Countdown=va;O.install=function(t){return t.component(O.name,O),t.component(O.Countdown.name,O.Countdown),t};O.Countdown;var He={exports:{}};(function(t,e){(function(a,o){t.exports=o()})(ze,function(){var a="minute",o=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(l,f,s){var n=f.prototype;s.utc=function(r){var u={date:r,utc:!0,args:arguments};return new f(u)},n.utc=function(r){var u=s(this.toDate(),{locale:this.$L,utc:!0});return r?u.add(this.utcOffset(),a):u},n.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var m=n.parse;n.parse=function(r){r.utc&&(this.$u=!0),this.$utils().u(r.$offset)||(this.$offset=r.$offset),m.call(this,r)};var b=n.init;n.init=function(){if(this.$u){var r=this.$d;this.$y=r.getUTCFullYear(),this.$M=r.getUTCMonth(),this.$D=r.getUTCDate(),this.$W=r.getUTCDay(),this.$H=r.getUTCHours(),this.$m=r.getUTCMinutes(),this.$s=r.getUTCSeconds(),this.$ms=r.getUTCMilliseconds()}else b.call(this)};var C=n.utcOffset;n.utcOffset=function(r,u){var $=this.$utils().u;if($(r))return this.$u?0:$(this.$offset)?C.call(this):this.$offset;if(typeof r=="string"&&(r=function(y){y===void 0&&(y="");var w=y.match(o);if(!w)return null;var h=(""+w[0]).match(i)||["-",0,0],E=h[0],P=60*+h[1]+ +h[2];return P===0?0:E==="+"?P:-P}(r),r===null))return this;var g=Math.abs(r)<=16?60*r:r,S=this;if(u)return S.$offset=g,S.$u=r===0,S;if(r!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(g+D,a)).$offset=g,S.$x.$localOffset=D}else S=this.utc();return S};var p=n.format;n.format=function(r){var u=r||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,u)},n.valueOf=function(){var r=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*r},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var v=n.toDate;n.toDate=function(r){return r==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var c=n.diff;n.diff=function(r,u,$){if(r&&this.$u===r.$u)return c.call(this,r,u,$);var g=this.local(),S=s(r).local();return c.call(g,S,u,$)}}})})(He);var pa=He.exports;const ma=Ye(pa);function ga(...t){const e=typeof t[0]=="string"?t[0]:void 0,a=typeof e=="string"?1:0,o={immediate:!!a,shallow:!0};let i={},l=J,f=o;const s=x=>!!(x!=null&&x.request);t.length>0+a&&(s(t[0+a])?l=t[0+a]:i=t[0+a]),t.length>1+a&&s(t[1+a])&&(l=t[1+a]),(t.length===2+a&&!s(t[1+a])||t.length===3+a)&&(f=t[t.length-1]||o);const{initialData:n,shallow:m,onSuccess:b=ue,onError:C=ue,immediate:p,resetOnExecute:v=!1}=f,c=z(),r=(m?z:R)(n),u=R(!1),$=R(!1),g=R(!1),S=z(),D=J.CancelToken.source;let y=D();const w=x=>{u.value||!$.value||(y.cancel(x),y=D(),g.value=!0,$.value=!1,u.value=!1)},h=x=>{$.value=x,u.value=!x},E=()=>{v&&(r.value=n)},P=()=>new Promise((x,F)=>{Le(u).toBe(!0).then(()=>S.value?F(S.value):x(oe))}),U={then:(...x)=>P().then(...x),catch:(...x)=>P().catch(...x)};let B=0;const re=(x=e,F={})=>{S.value=void 0;const ne=typeof x=="string"?x:e??F.url;if(ne===void 0)return S.value=new he(he.ERR_INVALID_URL),u.value=!0,U;E(),w(),h(!0),B+=1;const Ne=B;return g.value=!1,l(ne,{...i,...typeof x=="object"?x:F,cancelToken:y.token}).then(A=>{if(g.value)return;c.value=A;const le=A.data;r.value=le,b(le)}).catch(A=>{S.value=A,C(A)}).finally(()=>{var A;(A=f.onFinish)==null||A.call(f),Ne===B&&h(!1)}),U};p&&e&&re();const oe={response:c,data:r,error:S,isFinished:u,isLoading:$,cancel:w,isAborted:g,isCanceled:g,abort:w,execute:re};return{...oe,...U}}const ha=t=>(We("data-v-7c529772"),t=t(),Je(),t),Ca={"w-full":"","h-full":"","overflow-auto":""},Sa=ha(()=>Z("blockquote",null,"仅供参考，采用第三方接口，数据可能存在延迟",-1)),ba={__name:"forexRate",setup(t){pe.extend(ma);const e=R("USD"),a=R("CNY"),o=R("USD"),i=R("CNY"),l=R(1),f=R(0),s=R([{code:"USD",label:"美元"},{code:"CNY",label:"人民币"},{code:"GBP",label:"英镑"},{code:"EUR",label:"欧元"},{code:"HKD",label:"港币"},{code:"MOP",label:"澳门元"},{code:"JPY",label:"日元"},{code:"CAD",label:"加拿大元"},{code:"AUD",label:"澳大利亚元"},{code:"SGD",label:"新加坡元"},{code:"KRW",label:"韩元"},{code:"PHP",label:"菲律宾比索"},{code:"THB",label:"泰国铢"},{code:"CHF",label:"瑞士法郎"},{code:"NZD",label:"新西兰元"},{code:"DKK",label:"丹麦克朗"},{code:"NOK",label:"挪威克朗"},{code:"SEK",label:"瑞典克朗"},{code:"RUB",label:"卢布"},{code:"MYR",label:"林吉特"},{code:"ZAR",label:"南非兰特"}]),n=ie(()=>{const r={};return s.value.forEach(u=>{r[u.code]=u.label}),r}),m=R(""),{data:b,execute:C}=ga("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}}),p=ie(()=>{var r;return b.value&&((r=b.value.data)==null?void 0:r.rate)||0});se([e,a],()=>{C==null||C("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}})}),se(p,()=>{m.value=pe.utc().format("M月D日 UTC HH:mm"),o.value=e.value,i.value=a.value,f.value=l.value*p.value});function v(){f.value=parseFloat((l.value*p.value).toFixed(4))}function c(){l.value=parseFloat((f.value/p.value).toFixed(4))}return(r,u)=>{const $=nt,g=O,S=Xe,D=Ke,y=Ge,w=Ze;return V(),Y("div",Ca,[d($,null,{default:M(()=>[Sa]),_:1}),d(w,{gap:8,direction:"vertical",style:{margin:"0 auto"}},{default:M(()=>[Z("div",null,[d(g,{title:`1 ${T(n)[T(o)]} 等于`,value:`${T(p)} ${T(n)[T(i)]}`},null,8,["title","value"]),d($,null,{default:M(()=>[Z("blockquote",null,"查询时间: "+L(T(m)),1)]),_:1})]),d(w,{gap:8},{default:M(()=>[d(S,{modelValue:T(l),"onUpdate:modelValue":u[0]||(u[0]=h=>j(l)?l.value=h:null),modelModifiers:{number:!0},class:"w-50",onChange:v},null,8,["modelValue"]),d(y,{modelValue:T(e),"onUpdate:modelValue":u[1]||(u[1]=h=>j(e)?e.value=h:null),class:"w-50"},{default:M(()=>[(V(!0),Y(ce,null,fe(T(s),(h,E)=>(V(),de(D,{key:E,value:h.code},{default:M(()=>[ve(L(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),d(w,{gap:8},{default:M(()=>[d(S,{modelValue:T(f),"onUpdate:modelValue":u[2]||(u[2]=h=>j(f)?f.value=h:null),modelModifiers:{number:!0},class:"w-50",onChange:c},null,8,["modelValue"]),d(y,{modelValue:T(a),"onUpdate:modelValue":u[3]||(u[3]=h=>j(a)?a.value=h:null),class:"w-50"},{default:M(()=>[(V(!0),Y(ce,null,fe(T(s),(h,E)=>(V(),de(D,{key:E,value:h.code},{default:M(()=>[ve(L(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}},tr=qe(ba,[["__scopeId","data-v-7c529772"]]);export{tr as default};