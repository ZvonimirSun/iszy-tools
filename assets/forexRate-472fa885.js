import{aP as Ne,aQ as he,aR as J,a as v,h as N,y as D,R as Fe,ag as Ie,$ as je,X as Be,C as ze,a0 as B,aS as ie,aT as Ye,_ as Le,k as le,D as ue,o as V,l as z,w as O,m as W,n as E,t as Y,z as I,G as se,H as ce,c as fe,b as de,I as qe,J as Je}from"./index.js";import{E as We}from"./el-space-8178ace4.js";import{b as Ke}from"./el-tag-819ca3b5.js";import{t as Ce,E as Ze,a as Ge}from"./el-select-a021e03d.js";import"./el-scrollbar-e88d9e52.js";import"./el-popper-87e5b75f.js";import{E as Xe}from"./el-input-number-d89f774b.js";import{_ as Qe,c as j,a as k,i as Q,u as be,b as y,d as et,P as H,e as tt,o as at}from"./index-8a2c406b.js";import{d as ve}from"./dayjs.min-73ebc938.js";import{_ as rt}from"./Paragraph-efcac8f7.js";import"./vite-8235fac6.js";import"./isEqual-16073b58.js";import"./hasIn-b438300e.js";import"./index-6f5f7be4.js";import"./strings-5f72d036.js";import"./toFinite-86dbd612.js";import"./index-d81d9065.js";import"./ResizeObserver.es-0f9f8adb.js";function ot(t,e,a){var o=-1,i=t.length;e<0&&(e=-e>i?0:i+e),a=a>i?i:a,a<0&&(a+=i),i=e>a?0:a-e>>>0,e>>>=0;for(var l=Array(i);++o<i;)l[o]=t[o+e];return l}function nt(t,e,a){var o=t.length;return a=a===void 0?o:a,!e&&a>=o?t:ot(t,e,a)}var it="\\ud800-\\udfff",lt="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ct=lt+ut+st,ft="\\ufe0e\\ufe0f",dt="\\u200d",vt=RegExp("["+dt+it+ct+ft+"]");function ee(t){return vt.test(t)}function pt(t){return t.split("")}var Se="\\ud800-\\udfff",mt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Ct=mt+gt+ht,bt="\\ufe0e\\ufe0f",St="["+Se+"]",K="["+Ct+"]",Z="\\ud83c[\\udffb-\\udfff]",$t="(?:"+K+"|"+Z+")",$e="[^"+Se+"]",_e="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="\\u200d",ye=$t+"?",we="["+bt+"]?",xt="(?:"+_t+"(?:"+[$e,_e,xe].join("|")+")"+we+ye+")*",yt=we+ye+xt,wt="(?:"+[$e+K+"?",K,_e,xe,St].join("|")+")",Rt=RegExp(Z+"(?="+Z+")|"+wt+yt,"g");function Dt(t){return t.match(Rt)||[]}function Tt(t){return ee(t)?Dt(t):pt(t)}var Et=9007199254740991,kt=Math.floor;function pe(t,e){var a="";if(!t||e<1||e>Et)return a;do e%2&&(a+=t),e=kt(e/2),e&&(t+=t);while(e);return a}var Mt=Ke("length");const Ot=Mt;var Re="\\ud800-\\udfff",Pt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",Ut="\\u20d0-\\u20ff",Vt=Pt+At+Ut,Ht="\\ufe0e\\ufe0f",Nt="["+Re+"]",G="["+Vt+"]",X="\\ud83c[\\udffb-\\udfff]",Ft="(?:"+G+"|"+X+")",De="[^"+Re+"]",Te="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",It="\\u200d",ke=Ft+"?",Me="["+Ht+"]?",jt="(?:"+It+"(?:"+[De,Te,Ee].join("|")+")"+Me+ke+")*",Bt=Me+ke+jt,zt="(?:"+[De+G+"?",G,Te,Ee,Nt].join("|")+")",me=RegExp(X+"(?="+X+")|"+zt+Bt,"g");function Yt(t){for(var e=me.lastIndex=0;me.test(t);)++e;return e}function te(t){return ee(t)?Yt(t):Ot(t)}var Lt=Math.ceil;function Oe(t,e){e=e===void 0?" ":Ne(e);var a=e.length;if(a<2)return a?pe(e,t):e;var o=pe(e,Lt(t/te(e)));return ee(e)?nt(Tt(o),0,t).join(""):o.slice(0,t)}function qt(t,e,a){t=he(t),e=Ce(e);var o=e?te(t):0;return e&&o<e?t+Oe(e-o,a):t}function Jt(t,e,a){t=he(t),e=Ce(e);var o=e?te(t):0;return e&&o<e?Oe(e-o,a)+t:t}const{Axios:Fa,AxiosError:ge,CanceledError:Ia,isCancel:ja,CancelToken:Ba,VERSION:za,all:Ya,Cancel:La,isAxiosError:qa,spread:Ja,toFormData:Wa,AxiosHeaders:Ka,HttpStatusCode:Za,formToJSON:Ga,getAdapter:Xa,mergeConfig:Qa}=J;var Pe=function(e){var a=e.value,o=e.formatter,i=e.precision,l=e.decimalSeparator,f=e.groupSeparator,c=f===void 0?"":f,n=e.prefixCls,g;if(typeof o=="function")g=o({value:a});else{var b=String(a),h=b.match(/^(-?)(\d*)(\.(\d+))?$/);if(!h)g=b;else{var p=h[1],d=h[2]||"0",u=h[4]||"";d=d.replace(/\B(?=(\d{3})+(?!\d))/g,c),typeof i=="number"&&(u=qt(u,i,"0").slice(0,i)),u&&(u="".concat(l).concat(u)),g=[v("span",{key:"int",class:"".concat(n,"-content-value-int")},[p,d]),u&&v("span",{key:"decimal",class:"".concat(n,"-content-value-decimal")},[u])]}}return v("span",{class:"".concat(n,"-content-value")},[g])};Pe.displayName="StatisticNumber";const Wt=Pe;var Kt=function(){return{prefixCls:String,width:{type:[Number,String]}}},Zt=N({compatConfig:{MODE:3},name:"SkeletonTitle",props:Kt(),setup:function(e){return function(){var a=e.prefixCls,o=e.width,i=typeof o=="number"?"".concat(o,"px"):o;return v("h3",{class:a,style:{width:i}},null)}}});const Gt=Zt;var Xt=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},Qt=N({compatConfig:{MODE:3},name:"SkeletonParagraph",props:Xt(),setup:function(e){var a=function(i){var l=e.width,f=e.rows,c=f===void 0?2:f;if(Array.isArray(l))return l[i];if(c-1===i)return l};return function(){var o=e.prefixCls,i=e.rows,l=Qe(Array(i)).map(function(f,c){var n=a(c);return v("li",{key:c,style:{width:typeof n=="number"?"".concat(n,"px"):n}},null)});return v("ul",{class:o},[l])}}});const ea=Qt;var Ae=function(e){var a,o,i=e.prefixCls,l=e.size,f=e.shape,c=j((a={},k(a,"".concat(i,"-lg"),l==="large"),k(a,"".concat(i,"-sm"),l==="small"),a)),n=j((o={},k(o,"".concat(i,"-circle"),f==="circle"),k(o,"".concat(i,"-square"),f==="square"),k(o,"".concat(i,"-round"),f==="round"),o)),g=typeof l=="number"?{width:"".concat(l,"px"),height:"".concat(l,"px"),lineHeight:"".concat(l,"px")}:{};return v("span",{class:j(i,c,n),style:g},null)};Ae.displayName="SkeletonElement";const ta=Ae;var aa=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function L(t){return t&&et(t)==="object"?t:{}}function ra(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function oa(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function na(t,e){var a={};return(!t||!e)&&(a.width="61%"),!t&&e?a.rows=3:a.rows=2,a}var ia=N({compatConfig:{MODE:3},name:"ASkeleton",props:Q(aa(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,a){var o=a.slots,i=be("skeleton",e),l=i.prefixCls,f=i.direction;return function(){var c,n=e.loading,g=e.avatar,b=e.title,h=e.paragraph,p=e.active,d=e.round,u=l.value;if(n||e.loading===void 0){var r,s=!!g||g==="",$=!!b||b==="",m=!!h||h==="",S;if(s){var w=y(y({prefixCls:"".concat(u,"-avatar")},ra($,m)),L(g));S=v("div",{class:"".concat(u,"-header")},[v(ta,w,null)])}var x;if($||m){var R;if($){var C=y(y({prefixCls:"".concat(u,"-title")},oa(s,m)),L(b));R=v(Gt,C,null)}var T;if(m){var M=y(y({prefixCls:"".concat(u,"-paragraph")},na(s,$)),L(h));T=v(ea,M,null)}x=v("div",{class:"".concat(u,"-content")},[R,T])}var U=j(u,(r={},k(r,"".concat(u,"-with-avatar"),s),k(r,"".concat(u,"-active"),p),k(r,"".concat(u,"-rtl"),f.value==="rtl"),k(r,"".concat(u,"-round"),d),r));return v("div",{class:U},[S,x])}return(c=o.default)===null||c===void 0?void 0:c.call(o)}}});const la=ia;var Ue=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:H.any,formatter:H.any,precision:Number,prefix:H.any,suffix:H.any,title:H.any,loading:{type:Boolean,default:void 0}}};const P=N({compatConfig:{MODE:3},name:"AStatistic",props:Q(Ue(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,a){var o=a.slots,i=be("statistic",e),l=i.prefixCls,f=i.direction;return function(){var c,n,g,b,h,p,d,u=e.value,r=u===void 0?0:u,s=e.valueStyle,$=e.valueRender,m=l.value,S=(c=e.title)!==null&&c!==void 0?c:(n=o.title)===null||n===void 0?void 0:n.call(o),w=(g=e.prefix)!==null&&g!==void 0?g:(b=o.prefix)===null||b===void 0?void 0:b.call(o),x=(h=e.suffix)!==null&&h!==void 0?h:(p=o.suffix)===null||p===void 0?void 0:p.call(o),R=(d=e.formatter)!==null&&d!==void 0?d:o.formatter,C=v(Wt,y({"data-for-update":Date.now()},y(y({},e),{},{prefixCls:m,value:r,formatter:R})),null);return $&&(C=$(C)),v("div",{class:[m,k({},"".concat(m,"-rtl"),f.value==="rtl")]},[S&&v("div",{class:"".concat(m,"-title")},[S]),v(la,{paragraph:!1,loading:e.loading},{default:function(){return[v("div",{style:s,class:"".concat(m,"-content")},[w&&v("span",{class:"".concat(m,"-content-prefix")},[w]),C,x&&v("span",{class:"".concat(m,"-content-suffix")},[x])])]}})])}}});var ua=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function sa(t,e){var a=t,o=/\[[^\]]*]/g,i=(e.match(o)||[]).map(function(n){return n.slice(1,-1)}),l=e.replace(o,"[]"),f=ua.reduce(function(n,g){var b=tt(g,2),h=b[0],p=b[1];if(n.indexOf(h)!==-1){var d=Math.floor(a/p);return a-=d*p,n.replace(new RegExp("".concat(h,"+"),"g"),function(u){var r=u.length;return Jt(d.toString(),r,"0")})}return n},l),c=0;return f.replace(o,function(){var n=i[c];return c+=1,n})}function ca(t,e){var a=e.format,o=a===void 0?"":a,i=new Date(t).getTime(),l=Date.now(),f=Math.max(i-l,0);return sa(f,o)}var fa=1e3/30;function q(t){return new Date(t).getTime()}var da=function(){return y(y({},Ue()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const va=N({compatConfig:{MODE:3},name:"AStatisticCountdown",props:Q(da(),{format:"HH:mm:ss"}),setup:function(e,a){var o=a.emit,i=a.slots,l=D(),f=D(),c=function(){var d=e.value,u=q(d);u>=Date.now()?n():g()},n=function(){if(!l.value){var d=q(e.value);l.value=setInterval(function(){f.value.$forceUpdate(),d>Date.now()&&o("change",d-Date.now()),c()},fa)}},g=function(){var d=e.value;if(l.value){clearInterval(l.value),l.value=void 0;var u=q(d);u<Date.now()&&o("finish")}},b=function(d){var u=d.value,r=d.config,s=e.format;return ca(u,y(y({},r),{},{format:s}))},h=function(d){return d};return Fe(function(){c()}),Ie(function(){c()}),je(function(){g()}),function(){var p=e.value;return v(P,y({ref:f},y(y({},at(e,["onFinish","onChange"])),{},{value:p,valueRender:h,formatter:b})),i)}}});P.Countdown=va;P.install=function(t){return t.component(P.name,P),t.component(P.Countdown.name,P.Countdown),t};P.Countdown;var Ve={exports:{}};(function(t,e){(function(a,o){t.exports=o()})(Be,function(){var a="minute",o=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(l,f,c){var n=f.prototype;c.utc=function(r){var s={date:r,utc:!0,args:arguments};return new f(s)},n.utc=function(r){var s=c(this.toDate(),{locale:this.$L,utc:!0});return r?s.add(this.utcOffset(),a):s},n.local=function(){return c(this.toDate(),{locale:this.$L,utc:!1})};var g=n.parse;n.parse=function(r){r.utc&&(this.$u=!0),this.$utils().u(r.$offset)||(this.$offset=r.$offset),g.call(this,r)};var b=n.init;n.init=function(){if(this.$u){var r=this.$d;this.$y=r.getUTCFullYear(),this.$M=r.getUTCMonth(),this.$D=r.getUTCDate(),this.$W=r.getUTCDay(),this.$H=r.getUTCHours(),this.$m=r.getUTCMinutes(),this.$s=r.getUTCSeconds(),this.$ms=r.getUTCMilliseconds()}else b.call(this)};var h=n.utcOffset;n.utcOffset=function(r,s){var $=this.$utils().u;if($(r))return this.$u?0:$(this.$offset)?h.call(this):this.$offset;if(typeof r=="string"&&(r=function(x){x===void 0&&(x="");var R=x.match(o);if(!R)return null;var C=(""+R[0]).match(i)||["-",0,0],T=C[0],M=60*+C[1]+ +C[2];return M===0?0:T==="+"?M:-M}(r),r===null))return this;var m=Math.abs(r)<=16?60*r:r,S=this;if(s)return S.$offset=m,S.$u=r===0,S;if(r!==0){var w=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(m+w,a)).$offset=m,S.$x.$localOffset=w}else S=this.utc();return S};var p=n.format;n.format=function(r){var s=r||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,s)},n.valueOf=function(){var r=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*r},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var d=n.toDate;n.toDate=function(r){return r==="s"&&this.$offset?c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var u=n.diff;n.diff=function(r,s,$){if(r&&this.$u===r.$u)return u.call(this,r,s,$);var m=this.local(),S=c(r).local();return u.call(m,S,s,$)}}})})(Ve);var pa=Ve.exports;const ma=ze(pa);function ga(...t){const e=typeof t[0]=="string"?t[0]:void 0,a=typeof e=="string"?1:0;let o={},i=J,l={immediate:!!a,shallow:!0};const f=_=>!!(_!=null&&_.request);t.length>0+a&&(f(t[0+a])?i=t[0+a]:o=t[0+a]),t.length>1+a&&f(t[1+a])&&(i=t[1+a]),(t.length===2+a&&!f(t[1+a])||t.length===3+a)&&(l=t[t.length-1]);const{initialData:c,shallow:n,onSuccess:g=ie,onError:b=ie,immediate:h,resetOnExecute:p=!1}=l,d=B(),u=(n?B:D)(c),r=D(!1),s=D(!1),$=D(!1),m=B(),S=J.CancelToken.source;let w=S();const x=_=>{r.value||!s.value||(w.cancel(_),w=S(),$.value=!0,s.value=!1,r.value=!1)},R=_=>{s.value=_,r.value=!_},C=()=>{p&&(u.value=c)},T=()=>new Promise((_,F)=>{Ye(r).toBe(!0).then(()=>m.value?F(m.value):_(re))}),M={then:(..._)=>T().then(..._),catch:(..._)=>T().catch(..._)};let U=0;const ae=(_=e,F={})=>{m.value=void 0;const oe=typeof _=="string"?_:e??F.url;if(oe===void 0)return m.value=new ge(ge.ERR_INVALID_URL),r.value=!0,M;C(),x(),R(!0),U+=1;const He=U;return i(oe,{...o,...typeof _=="object"?_:F,cancelToken:w.token}).then(A=>{d.value=A;const ne=A.data;u.value=ne,g(ne)}).catch(A=>{m.value=A,b(A)}).finally(()=>{var A;(A=l.onFinish)==null||A.call(l),He===U&&R(!1)}),M};h&&e&&ae();const re={response:d,data:u,error:m,isFinished:r,isLoading:s,cancel:x,isAborted:$,isCanceled:$,abort:x,execute:ae};return{...re,...M}}const ha=t=>(qe("data-v-2a1bd4d2"),t=t(),Je(),t),Ca={"w-full":"","h-full":"","overflow-auto":""},ba=ha(()=>W("blockquote",null,"仅供参考，采用第三方接口，数据可能存在延迟",-1)),Sa={__name:"forexRate",setup(t){ve.extend(ma);const e=D("USD"),a=D("CNY"),o=D("USD"),i=D("CNY"),l=D(1),f=D(0),c=D([{code:"USD",label:"美元"},{code:"CNY",label:"人民币"},{code:"GBP",label:"英镑"},{code:"EUR",label:"欧元"},{code:"HKD",label:"港币"},{code:"MOP",label:"澳门元"},{code:"JPY",label:"日元"},{code:"CAD",label:"加拿大元"},{code:"AUD",label:"澳大利亚元"},{code:"SGD",label:"新加坡元"},{code:"KRW",label:"韩元"},{code:"PHP",label:"菲律宾比索"},{code:"THB",label:"泰国铢"},{code:"CHF",label:"瑞士法郎"},{code:"NZD",label:"新西兰元"},{code:"DKK",label:"丹麦克朗"},{code:"NOK",label:"挪威克朗"},{code:"SEK",label:"瑞典克朗"},{code:"RUB",label:"卢布"},{code:"MYR",label:"林吉特"},{code:"ZAR",label:"南非兰特"}]),n=le(()=>{const r={};return c.value.forEach(s=>{r[s.code]=s.label}),r}),g=D(""),{data:b,execute:h}=ga("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}}),p=le(()=>{var r;return b.value&&((r=b.value.data)==null?void 0:r.rate)||0});ue([e,a],()=>{h==null||h("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}})}),ue(p,()=>{g.value=ve.utc().format("M月D日 UTC HH:mm"),o.value=e.value,i.value=a.value,f.value=l.value*p.value});function d(){f.value=parseFloat((l.value*p.value).toFixed(4))}function u(){l.value=parseFloat((f.value/p.value).toFixed(4))}return(r,s)=>{const $=rt,m=P,S=Xe,w=Ze,x=Ge,R=We;return V(),z("div",Ca,[v($,null,{default:O(()=>[ba]),_:1}),v(R,{gap:8,direction:"vertical",style:{margin:"0 auto"}},{default:O(()=>[W("div",null,[v(m,{title:`1 ${E(n)[E(o)]} 等于`,value:`${E(p)} ${E(n)[E(i)]}`},null,8,["title","value"]),v($,null,{default:O(()=>[W("blockquote",null,"查询时间: "+Y(E(g)),1)]),_:1})]),v(R,{gap:8},{default:O(()=>[v(S,{modelValue:E(l),"onUpdate:modelValue":s[0]||(s[0]=C=>I(l)?l.value=C:null),modelModifiers:{number:!0},class:"w-50",onChange:d},null,8,["modelValue"]),v(x,{modelValue:E(e),"onUpdate:modelValue":s[1]||(s[1]=C=>I(e)?e.value=C:null),class:"w-50"},{default:O(()=>[(V(!0),z(se,null,ce(E(c),(C,T)=>(V(),fe(w,{key:T,value:C.code},{default:O(()=>[de(Y(C.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),v(R,{gap:8},{default:O(()=>[v(S,{modelValue:E(f),"onUpdate:modelValue":s[2]||(s[2]=C=>I(f)?f.value=C:null),modelModifiers:{number:!0},class:"w-50",onChange:u},null,8,["modelValue"]),v(x,{modelValue:E(a),"onUpdate:modelValue":s[3]||(s[3]=C=>I(a)?a.value=C:null),class:"w-50"},{default:O(()=>[(V(!0),z(se,null,ce(E(c),(C,T)=>(V(),fe(w,{key:T,value:C.code},{default:O(()=>[de(Y(C.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}},er=Le(Sa,[["__scopeId","data-v-2a1bd4d2"]]);export{er as default};
