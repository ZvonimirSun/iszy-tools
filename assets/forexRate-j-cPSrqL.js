import{bh as He,bi as be,be as W,X as d,F,t as R,o as je,aF as Be,v as Ie,bc as ze,aO as Ye,s as z,bj as le,bk as Le,aC as qe,m as ie,w as se,K as Y,a1 as O,J as N,ap as K,u as T,ai as L,aw as j,T as ce,ax as fe,a0 as de,ar as ve,aA as Je,aB as We}from"./index-5nNF1qhV.js";import{E as Ke}from"./el-space-bjeibxkQ.js";import"./el-tag-GEENpiU4.js";import{E as Ze,a as Ge}from"./el-select--uAiLDgl.js";import{b as Xe}from"./el-scrollbar-8IN77BiY.js";import{i as Qe,c as B,d as E,j as ee,u as Ce,k as _,l as et,g as V,m as tt,o as at,_ as rt}from"./Router-h7YLQYLH.js";import{E as ot}from"./el-input-number-AWKAgQSz.js";import{d as pe}from"./dayjs.min-g16VJeAk.js";import{b as nt}from"./_baseSlice-dEb6GWcI.js";import{t as Se}from"./toInteger-A0CGZ4zJ.js";import"./strings-BfvfYR_R.js";import"./hasIn-Am18kIXM.js";import"./index-EMc9mnzy.js";import"./toFinite-kX9Xv4Y1.js";function ut(t,e,a){var o=t.length;return a=a===void 0?o:a,!e&&a>=o?t:nt(t,e,a)}var lt="\\ud800-\\udfff",it="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",ft=it+st+ct,dt="\\ufe0e\\ufe0f",vt="\\u200d",pt=RegExp("["+vt+lt+ft+dt+"]");function te(t){return pt.test(t)}function mt(t){return t.split("")}var $e="\\ud800-\\udfff",gt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",bt="\\u20d0-\\u20ff",Ct=gt+ht+bt,St="\\ufe0e\\ufe0f",$t="["+$e+"]",Z="["+Ct+"]",G="\\ud83c[\\udffb-\\udfff]",xt="(?:"+Z+"|"+G+")",xe="[^"+$e+"]",ye="(?:\\ud83c[\\udde6-\\uddff]){2}",_e="[\\ud800-\\udbff][\\udc00-\\udfff]",yt="\\u200d",we=xt+"?",Re="["+St+"]?",_t="(?:"+yt+"(?:"+[xe,ye,_e].join("|")+")"+Re+we+")*",wt=Re+we+_t,Rt="(?:"+[xe+Z+"?",Z,ye,_e,$t].join("|")+")",Dt=RegExp(G+"(?="+G+")|"+Rt+wt,"g");function Tt(t){return t.match(Dt)||[]}function kt(t){return te(t)?Tt(t):mt(t)}var Et=9007199254740991,Ot=Math.floor;function me(t,e){var a="";if(!t||e<1||e>Et)return a;do e%2&&(a+=t),e=Ot(e/2),e&&(t+=t);while(e);return a}var Mt=Xe("length"),De="\\ud800-\\udfff",Pt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",Ut="\\u20d0-\\u20ff",Nt=Pt+At+Ut,Vt="\\ufe0e\\ufe0f",Ft="["+De+"]",X="["+Nt+"]",Q="\\ud83c[\\udffb-\\udfff]",Ht="(?:"+X+"|"+Q+")",Te="[^"+De+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",jt="\\u200d",Oe=Ht+"?",Me="["+Vt+"]?",Bt="(?:"+jt+"(?:"+[Te,ke,Ee].join("|")+")"+Me+Oe+")*",It=Me+Oe+Bt,zt="(?:"+[Te+X+"?",X,ke,Ee,Ft].join("|")+")",ge=RegExp(Q+"(?="+Q+")|"+zt+It,"g");function Yt(t){for(var e=ge.lastIndex=0;ge.test(t);)++e;return e}function ae(t){return te(t)?Yt(t):Mt(t)}var Lt=Math.ceil;function Pe(t,e){e=e===void 0?" ":He(e);var a=e.length;if(a<2)return a?me(e,t):e;var o=me(e,Lt(t/ae(e)));return te(e)?ut(kt(o),0,t).join(""):o.slice(0,t)}function qt(t,e,a){t=be(t),e=Se(e);var o=e?ae(t):0;return e&&o<e?t+Pe(e-o,a):t}function Jt(t,e,a){t=be(t),e=Se(e);var o=e?ae(t):0;return e&&o<e?Pe(e-o,a)+t:t}const{Axios:Ua,AxiosError:he,CanceledError:Na,isCancel:Va,CancelToken:Fa,VERSION:Ha,all:ja,Cancel:Ba,isAxiosError:Ia,spread:za,toFormData:Ya,AxiosHeaders:La,HttpStatusCode:qa,formToJSON:Ja,getAdapter:Wa,mergeConfig:Ka}=W;var Ae=function(e){var a=e.value,o=e.formatter,i=e.precision,u=e.decimalSeparator,s=e.groupSeparator,c=s===void 0?"":s,n=e.prefixCls,m;if(typeof o=="function")m=o({value:a});else{var S=String(a),b=S.match(/^(-?)(\d*)(\.(\d+))?$/);if(!b)m=S;else{var p=b[1],v=b[2]||"0",f=b[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,c),typeof i=="number"&&(f=qt(f,i,"0").slice(0,i)),f&&(f="".concat(u).concat(f)),m=[d("span",{key:"int",class:"".concat(n,"-content-value-int")},[p,v]),f&&d("span",{key:"decimal",class:"".concat(n,"-content-value-decimal")},[f])]}}return d("span",{class:"".concat(n,"-content-value")},[m])};Ae.displayName="StatisticNumber";const Wt=Ae;var Kt=function(){return{prefixCls:String,width:{type:[Number,String]}}},Zt=F({compatConfig:{MODE:3},name:"SkeletonTitle",props:Kt(),setup:function(e){return function(){var a=e.prefixCls,o=e.width,i=typeof o=="number"?"".concat(o,"px"):o;return d("h3",{class:a,style:{width:i}},null)}}});const Gt=Zt;var Xt=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},Qt=F({compatConfig:{MODE:3},name:"SkeletonParagraph",props:Xt(),setup:function(e){var a=function(i){var u=e.width,s=e.rows,c=s===void 0?2:s;if(Array.isArray(u))return u[i];if(c-1===i)return u};return function(){var o=e.prefixCls,i=e.rows,u=Qe(Array(i)).map(function(s,c){var n=a(c);return d("li",{key:c,style:{width:typeof n=="number"?"".concat(n,"px"):n}},null)});return d("ul",{class:o},[u])}}});const ea=Qt;var Ue=function(e){var a,o,i=e.prefixCls,u=e.size,s=e.shape,c=B((a={},E(a,"".concat(i,"-lg"),u==="large"),E(a,"".concat(i,"-sm"),u==="small"),a)),n=B((o={},E(o,"".concat(i,"-circle"),s==="circle"),E(o,"".concat(i,"-square"),s==="square"),E(o,"".concat(i,"-round"),s==="round"),o)),m=typeof u=="number"?{width:"".concat(u,"px"),height:"".concat(u,"px"),lineHeight:"".concat(u,"px")}:{};return d("span",{class:B(i,c,n),style:m},null)};Ue.displayName="SkeletonElement";const ta=Ue;var aa=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function q(t){return t&&et(t)==="object"?t:{}}function ra(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function oa(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function na(t,e){var a={};return(!t||!e)&&(a.width="61%"),!t&&e?a.rows=3:a.rows=2,a}var ua=F({compatConfig:{MODE:3},name:"ASkeleton",props:ee(aa(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,a){var o=a.slots,i=Ce("skeleton",e),u=i.prefixCls,s=i.direction;return function(){var c,n=e.loading,m=e.avatar,S=e.title,b=e.paragraph,p=e.active,v=e.round,f=u.value;if(n||e.loading===void 0){var r,l=!!m||m==="",$=!!S||S==="",g=!!b||b==="",C;if(l){var D=_(_({prefixCls:"".concat(f,"-avatar")},ra($,g)),q(m));C=d("div",{class:"".concat(f,"-header")},[d(ta,D,null)])}var y;if($||g){var w;if($){var h=_(_({prefixCls:"".concat(f,"-title")},oa(l,g)),q(S));w=d(Gt,h,null)}var k;if(g){var P=_(_({prefixCls:"".concat(f,"-paragraph")},na(l,$)),q(b));k=d(ea,P,null)}y=d("div",{class:"".concat(f,"-content")},[w,k])}var U=B(f,(r={},E(r,"".concat(f,"-with-avatar"),l),E(r,"".concat(f,"-active"),p),E(r,"".concat(f,"-rtl"),s.value==="rtl"),E(r,"".concat(f,"-round"),v),r));return d("div",{class:U},[C,y])}return(c=o.default)===null||c===void 0?void 0:c.call(o)}}});const la=ua;var Ne=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:V.any,formatter:V.any,precision:Number,prefix:V.any,suffix:V.any,title:V.any,loading:{type:Boolean,default:void 0}}};const M=F({compatConfig:{MODE:3},name:"AStatistic",props:ee(Ne(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,a){var o=a.slots,i=Ce("statistic",e),u=i.prefixCls,s=i.direction;return function(){var c,n,m,S,b,p,v,f=e.value,r=f===void 0?0:f,l=e.valueStyle,$=e.valueRender,g=u.value,C=(c=e.title)!==null&&c!==void 0?c:(n=o.title)===null||n===void 0?void 0:n.call(o),D=(m=e.prefix)!==null&&m!==void 0?m:(S=o.prefix)===null||S===void 0?void 0:S.call(o),y=(b=e.suffix)!==null&&b!==void 0?b:(p=o.suffix)===null||p===void 0?void 0:p.call(o),w=(v=e.formatter)!==null&&v!==void 0?v:o.formatter,h=d(Wt,_({"data-for-update":Date.now()},_(_({},e),{},{prefixCls:g,value:r,formatter:w})),null);return $&&(h=$(h)),d("div",{class:[g,E({},"".concat(g,"-rtl"),s.value==="rtl")]},[C&&d("div",{class:"".concat(g,"-title")},[C]),d(la,{paragraph:!1,loading:e.loading},{default:function(){return[d("div",{style:l,class:"".concat(g,"-content")},[D&&d("span",{class:"".concat(g,"-content-prefix")},[D]),h,y&&d("span",{class:"".concat(g,"-content-suffix")},[y])])]}})])}}});var ia=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function sa(t,e){var a=t,o=/\[[^\]]*]/g,i=(e.match(o)||[]).map(function(n){return n.slice(1,-1)}),u=e.replace(o,"[]"),s=ia.reduce(function(n,m){var S=tt(m,2),b=S[0],p=S[1];if(n.indexOf(b)!==-1){var v=Math.floor(a/p);return a-=v*p,n.replace(new RegExp("".concat(b,"+"),"g"),function(f){var r=f.length;return Jt(v.toString(),r,"0")})}return n},u),c=0;return s.replace(o,function(){var n=i[c];return c+=1,n})}function ca(t,e){var a=e.format,o=a===void 0?"":a,i=new Date(t).getTime(),u=Date.now(),s=Math.max(i-u,0);return sa(s,o)}var fa=1e3/30;function J(t){return new Date(t).getTime()}var da=function(){return _(_({},Ne()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const va=F({compatConfig:{MODE:3},name:"AStatisticCountdown",props:ee(da(),{format:"HH:mm:ss"}),setup:function(e,a){var o=a.emit,i=a.slots,u=R(),s=R(),c=function(){var v=e.value,f=J(v);f>=Date.now()?n():m()},n=function(){if(!u.value){var v=J(e.value);u.value=setInterval(function(){s.value.$forceUpdate(),v>Date.now()&&o("change",v-Date.now()),c()},fa)}},m=function(){var v=e.value;if(u.value){clearInterval(u.value),u.value=void 0;var f=J(v);f<Date.now()&&o("finish")}},S=function(v){var f=v.value,r=v.config,l=e.format;return ca(f,_(_({},r),{},{format:l}))},b=function(v){return v};return je(function(){c()}),Be(function(){c()}),Ie(function(){m()}),function(){var p=e.value;return d(M,_({ref:s},_(_({},at(e,["onFinish","onChange"])),{},{value:p,valueRender:b,formatter:S})),i)}}});M.Countdown=va;M.install=function(t){return t.component(M.name,M),t.component(M.Countdown.name,M.Countdown),t};M.Countdown;var Ve={exports:{}};(function(t,e){(function(a,o){t.exports=o()})(ze,function(){var a="minute",o=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(u,s,c){var n=s.prototype;c.utc=function(r){var l={date:r,utc:!0,args:arguments};return new s(l)},n.utc=function(r){var l=c(this.toDate(),{locale:this.$L,utc:!0});return r?l.add(this.utcOffset(),a):l},n.local=function(){return c(this.toDate(),{locale:this.$L,utc:!1})};var m=n.parse;n.parse=function(r){r.utc&&(this.$u=!0),this.$utils().u(r.$offset)||(this.$offset=r.$offset),m.call(this,r)};var S=n.init;n.init=function(){if(this.$u){var r=this.$d;this.$y=r.getUTCFullYear(),this.$M=r.getUTCMonth(),this.$D=r.getUTCDate(),this.$W=r.getUTCDay(),this.$H=r.getUTCHours(),this.$m=r.getUTCMinutes(),this.$s=r.getUTCSeconds(),this.$ms=r.getUTCMilliseconds()}else S.call(this)};var b=n.utcOffset;n.utcOffset=function(r,l){var $=this.$utils().u;if($(r))return this.$u?0:$(this.$offset)?b.call(this):this.$offset;if(typeof r=="string"&&(r=function(y){y===void 0&&(y="");var w=y.match(o);if(!w)return null;var h=(""+w[0]).match(i)||["-",0,0],k=h[0],P=60*+h[1]+ +h[2];return P===0?0:k==="+"?P:-P}(r),r===null))return this;var g=Math.abs(r)<=16?60*r:r,C=this;if(l)return C.$offset=g,C.$u=r===0,C;if(r!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(C=this.local().add(g+D,a)).$offset=g,C.$x.$localOffset=D}else C=this.utc();return C};var p=n.format;n.format=function(r){var l=r||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,l)},n.valueOf=function(){var r=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*r},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var v=n.toDate;n.toDate=function(r){return r==="s"&&this.$offset?c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var f=n.diff;n.diff=function(r,l,$){if(r&&this.$u===r.$u)return f.call(this,r,l,$);var g=this.local(),C=c(r).local();return f.call(g,C,l,$)}}})})(Ve);var pa=Ve.exports;const ma=Ye(pa);function ga(...t){const e=typeof t[0]=="string"?t[0]:void 0,a=typeof e=="string"?1:0,o={immediate:!!a,shallow:!0,abortPrevious:!0};let i={},u=W,s=o;const c=x=>!!(x!=null&&x.request);t.length>0+a&&(c(t[0+a])?u=t[0+a]:i=t[0+a]),t.length>1+a&&c(t[1+a])&&(u=t[1+a]),(t.length===2+a&&!c(t[1+a])||t.length===3+a)&&(s=t[t.length-1]||o);const{initialData:n,shallow:m,onSuccess:S=le,onError:b=le,immediate:p,resetOnExecute:v=!1}=s,f=z(),r=(m?z:R)(n),l=R(!1),$=R(!1),g=R(!1),C=z(),D=W.CancelToken.source;let y=D();const w=x=>{l.value||!$.value||(y.cancel(x),y=D(),g.value=!0,$.value=!1,l.value=!1)},h=x=>{$.value=x,l.value=!x},k=()=>{v&&(r.value=n)},P=()=>new Promise((x,H)=>{Le(l).toBe(!0).then(()=>C.value?H(C.value):x(oe))}),U={then:(...x)=>P().then(...x),catch:(...x)=>P().catch(...x)};let I=0;const re=(x=e,H={})=>{C.value=void 0;const ne=typeof x=="string"?x:e??H.url;if(ne===void 0)return C.value=new he(he.ERR_INVALID_URL),l.value=!0,U;k(),s.abortPrevious!==!1&&w(),h(!0),I+=1;const Fe=I;return g.value=!1,u(ne,{...i,...typeof x=="object"?x:H,cancelToken:y.token}).then(A=>{if(g.value)return;f.value=A;const ue=A.data;r.value=ue,S(ue)}).catch(A=>{C.value=A,b(A)}).finally(()=>{var A;(A=s.onFinish)==null||A.call(s),Fe===I&&h(!1)}),U};p&&e&&re();const oe={response:f,data:r,error:C,isFinished:l,isLoading:$,cancel:w,isAborted:g,isCanceled:g,abort:w,execute:re};return{...oe,...U}}const ha=t=>(Je("data-v-44d93b26"),t=t(),We(),t),ba={"w-full":"","h-full":"","overflow-auto":""},Ca=ha(()=>K("blockquote",null,"仅供参考，采用第三方接口，数据可能存在延迟",-1)),Sa={__name:"forexRate",setup(t){pe.extend(ma);const e=R("USD"),a=R("CNY"),o=R("USD"),i=R("CNY"),u=R(1),s=R(0),c=R([{code:"USD",label:"美元"},{code:"CNY",label:"人民币"},{code:"GBP",label:"英镑"},{code:"EUR",label:"欧元"},{code:"HKD",label:"港币"},{code:"MOP",label:"澳门元"},{code:"JPY",label:"日元"},{code:"CAD",label:"加拿大元"},{code:"AUD",label:"澳大利亚元"},{code:"SGD",label:"新加坡元"},{code:"KRW",label:"韩元"},{code:"PHP",label:"菲律宾比索"},{code:"THB",label:"泰国铢"},{code:"CHF",label:"瑞士法郎"},{code:"NZD",label:"新西兰元"},{code:"DKK",label:"丹麦克朗"},{code:"NOK",label:"挪威克朗"},{code:"SEK",label:"瑞典克朗"},{code:"RUB",label:"卢布"},{code:"MYR",label:"林吉特"},{code:"ZAR",label:"南非兰特"}]),n=ie(()=>{const r={};return c.value.forEach(l=>{r[l.code]=l.label}),r}),m=R(""),{data:S,execute:b}=ga("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}}),p=ie(()=>{var r;return S.value&&((r=S.value.data)==null?void 0:r.rate)||0});se([e,a],()=>{b==null||b("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:e.value}})}),se(p,()=>{m.value=pe.utc().format("M月D日 UTC HH:mm"),o.value=e.value,i.value=a.value,s.value=u.value*p.value});function v(){s.value=Number.parseFloat((u.value*p.value).toFixed(4))}function f(){u.value=Number.parseFloat((s.value/p.value).toFixed(4))}return(r,l)=>{const $=rt,g=M,C=ot,D=Ze,y=Ge,w=Ke;return N(),Y("div",ba,[d($,null,{default:O(()=>[Ca]),_:1}),d(w,{gap:8,direction:"vertical",style:{margin:"0 auto"}},{default:O(()=>[K("div",null,[d(g,{title:`1 ${T(n)[T(o)]} 等于`,value:`${T(p)} ${T(n)[T(i)]}`},null,8,["title","value"]),d($,null,{default:O(()=>[K("blockquote",null,"查询时间: "+L(T(m)),1)]),_:1})]),d(w,{gap:8},{default:O(()=>[d(C,{modelValue:T(u),"onUpdate:modelValue":l[0]||(l[0]=h=>j(u)?u.value=h:null),modelModifiers:{number:!0},class:"w-50",onChange:v},null,8,["modelValue"]),d(y,{modelValue:T(e),"onUpdate:modelValue":l[1]||(l[1]=h=>j(e)?e.value=h:null),class:"w-50"},{default:O(()=>[(N(!0),Y(ce,null,fe(T(c),(h,k)=>(N(),de(D,{key:k,value:h.code},{default:O(()=>[ve(L(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),d(w,{gap:8},{default:O(()=>[d(C,{modelValue:T(s),"onUpdate:modelValue":l[2]||(l[2]=h=>j(s)?s.value=h:null),modelModifiers:{number:!0},class:"w-50",onChange:f},null,8,["modelValue"]),d(y,{modelValue:T(a),"onUpdate:modelValue":l[3]||(l[3]=h=>j(a)?a.value=h:null),class:"w-50"},{default:O(()=>[(N(!0),Y(ce,null,fe(T(c),(h,k)=>(N(),de(D,{key:k,value:h.code},{default:O(()=>[ve(L(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}},Za=qe(Sa,[["__scopeId","data-v-44d93b26"]]);export{Za as default};
