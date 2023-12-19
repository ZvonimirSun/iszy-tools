import{ad as ae,L as le,Z as k,B as p,a4 as K,be as z,bf as j,bg as oe,a3 as se,bh as q,x as Z,q as G,c as R,b as _,az as g,aF as ne,o as F,a as N,y as h,t as I,X as Y,F as W,e as J,ay as X,W as Q,b6 as ue,b9 as ie,ba as ce,aH as re,aI as fe}from"./vendor-flbquvym.js";import{_ as de,S as ve}from"./ant-design-vue-_jsSmQ7G.js";var ee={exports:{}};(function(o,i){(function(a,b){o.exports=b()})(ae,function(){var a="minute",b=/[+-]\d\d(?::?\d\d)?/g,x=/([+-]|\d\d)/g;return function(d,f,v){var l=f.prototype;v.utc=function(e){var t={date:e,utc:!0,args:arguments};return new f(t)},l.utc=function(e){var t=v(this.toDate(),{locale:this.$L,utc:!0});return e?t.add(this.utcOffset(),a):t},l.local=function(){return v(this.toDate(),{locale:this.$L,utc:!1})};var w=l.parse;l.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),w.call(this,e)};var O=l.init;l.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else O.call(this)};var U=l.utcOffset;l.utcOffset=function(e,t){var c=this.$utils().u;if(c(e))return this.$u?0:c(this.$offset)?U.call(this):this.$offset;if(typeof e=="string"&&(e=function(m){m===void 0&&(m="");var D=m.match(b);if(!D)return null;var s=(""+D[0]).match(x)||["-",0,0],T=s[0],V=60*+s[1]+ +s[2];return V===0?0:T==="+"?V:-V}(e),e===null))return this;var r=Math.abs(e)<=16?60*e:e,u=this;if(t)return u.$offset=r,u.$u=e===0,u;if(e!==0){var C=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(u=this.local().add(r+C,a)).$offset=r,u.$x.$localOffset=C}else u=this.utc();return u};var $=l.format;l.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return $.call(this,t)},l.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var E=l.toDate;l.toDate=function(e){return e==="s"&&this.$offset?v(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():E.call(this)};var S=l.diff;l.diff=function(e,t,c){if(e&&this.$u===e.$u)return S.call(this,e,t,c);var r=this.local(),u=v(e).local();return S.call(r,u,t,c)}}})})(ee);var he=ee.exports;const pe=le(he);function me(...o){const i=typeof o[0]=="string"?o[0]:void 0,a=typeof i=="string"?1:0;let b={},x=K,d={immediate:!!a,shallow:!0};const f=n=>!!(n!=null&&n.request);o.length>0+a&&(f(o[0+a])?x=o[0+a]:b=o[0+a]),o.length>1+a&&f(o[1+a])&&(x=o[1+a]),(o.length===2+a&&!f(o[1+a])||o.length===3+a)&&(d=o[o.length-1]);const{initialData:v,shallow:l,onSuccess:w=z,onError:O=z,immediate:U,resetOnExecute:$=!1}=d,E=k(),S=(l?k:p)(v),e=p(!1),t=p(!1),c=p(!1),r=k(),u=K.CancelToken.source;let C=u();const m=n=>{e.value||!t.value||(C.cancel(n),C=u(),c.value=!0,t.value=!1,e.value=!1)},D=n=>{t.value=n,e.value=!n},s=()=>{$&&(S.value=v)},T=()=>new Promise((n,M)=>{oe(e).toBe(!0).then(()=>r.value?M(r.value):n(B))}),V={then:(...n)=>T().then(...n),catch:(...n)=>T().catch(...n)};let H=0;const A=(n=i,M={})=>{r.value=void 0;const L=typeof n=="string"?n:i??M.url;if(L===void 0)return r.value=new j(j.ERR_INVALID_URL),e.value=!0,V;s(),m(),D(!0),H+=1;const te=H;return c.value=!1,x(L,{...b,...typeof n=="object"?n:M,cancelToken:C.token}).then(y=>{if(c.value)return;E.value=y;const P=y.data;S.value=P,w(P)}).catch(y=>{r.value=y,O(y)}).finally(()=>{var y;(y=d.onFinish)==null||y.call(d),te===H&&D(!1)}),V};U&&i&&A();const B={response:E,data:S,error:r,isFinished:e,isLoading:t,cancel:m,isAborted:c,isCanceled:c,abort:m,execute:A};return{...B,...V}}const _e=o=>(re("data-v-2e242798"),o=o(),fe(),o),be={"w-full":"","h-full":"","overflow-auto":""},$e=_e(()=>N("blockquote",null,"仅供参考，采用第三方接口，数据可能存在延迟",-1)),Ce={__name:"forexRate",setup(o){q.extend(pe);const i=p("USD"),a=p("CNY"),b=p("USD"),x=p("CNY"),d=p(1),f=p(0),v=p([{code:"USD",label:"美元"},{code:"CNY",label:"人民币"},{code:"GBP",label:"英镑"},{code:"EUR",label:"欧元"},{code:"HKD",label:"港币"},{code:"MOP",label:"澳门元"},{code:"JPY",label:"日元"},{code:"CAD",label:"加拿大元"},{code:"AUD",label:"澳大利亚元"},{code:"SGD",label:"新加坡元"},{code:"KRW",label:"韩元"},{code:"PHP",label:"菲律宾比索"},{code:"THB",label:"泰国铢"},{code:"CHF",label:"瑞士法郎"},{code:"NZD",label:"新西兰元"},{code:"DKK",label:"丹麦克朗"},{code:"NOK",label:"挪威克朗"},{code:"SEK",label:"瑞典克朗"},{code:"RUB",label:"卢布"},{code:"MYR",label:"林吉特"},{code:"ZAR",label:"南非兰特"}]),l=Z(()=>{const e={};return v.value.forEach(t=>{e[t.code]=t.label}),e}),w=p(""),{data:O,execute:U}=me("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:i.value}}),$=Z(()=>{var e;return O.value&&((e=O.value.data)==null?void 0:e.rate)||0});G([i,a],()=>{U==null||U("https://api.it120.cc/iszy/forex/rate",{params:{fromCode:a.value,toCode:i.value}})}),G($,()=>{w.value=q.utc().format("M月D日 UTC HH:mm"),b.value=i.value,x.value=a.value,f.value=d.value*$.value});function E(){f.value=parseFloat((d.value*$.value).toFixed(4))}function S(){d.value=parseFloat((f.value/$.value).toFixed(4))}return(e,t)=>{const c=de,r=ve,u=ue,C=ie,m=ce,D=ne;return F(),R("div",be,[_(c,null,{default:g(()=>[$e]),_:1}),_(D,{gap:8,direction:"vertical",style:{margin:"0 auto"}},{default:g(()=>[N("div",null,[_(r,{title:`1 ${h(l)[h(b)]} 等于`,value:`${h($)} ${h(l)[h(x)]}`},null,8,["title","value"]),_(c,null,{default:g(()=>[N("blockquote",null,"查询时间: "+I(h(w)),1)]),_:1})]),_(D,{gap:8},{default:g(()=>[_(u,{modelValue:h(d),"onUpdate:modelValue":t[0]||(t[0]=s=>Y(d)?d.value=s:null),modelModifiers:{number:!0},class:"w-50",onChange:E},null,8,["modelValue"]),_(m,{modelValue:h(i),"onUpdate:modelValue":t[1]||(t[1]=s=>Y(i)?i.value=s:null),class:"w-50"},{default:g(()=>[(F(!0),R(W,null,J(h(v),(s,T)=>(F(),X(C,{key:T,value:s.code},{default:g(()=>[Q(I(s.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(D,{gap:8},{default:g(()=>[_(u,{modelValue:h(f),"onUpdate:modelValue":t[2]||(t[2]=s=>Y(f)?f.value=s:null),modelModifiers:{number:!0},class:"w-50",onChange:S},null,8,["modelValue"]),_(m,{modelValue:h(a),"onUpdate:modelValue":t[3]||(t[3]=s=>Y(a)?a.value=s:null),class:"w-50"},{default:g(()=>[(F(!0),R(W,null,J(h(v),(s,T)=>(F(),X(C,{key:T,value:s.code},{default:g(()=>[Q(I(s.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}},xe=se(Ce,[["__scopeId","data-v-2e242798"]]);export{xe as default};
