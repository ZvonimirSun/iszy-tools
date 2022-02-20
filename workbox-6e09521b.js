define(["exports"],(function(t){"use strict";try{self["workbox:core:6.4.1"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.4.1"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:i})}catch(t){c=Promise.reject(t)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const c=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>t||l(u.precache),w=t=>t||l(u.runtime);function d(t){t.then((()=>{}))}const p=new Set;function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},y.apply(this,arguments)}let g,m;const R=new WeakMap,v=new WeakMap,b=new WeakMap,q=new WeakMap,D=new WeakMap;let U={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||b.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return E(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function x(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(m||(m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(I(this),e),E(R.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...s){const n=t.call(I(this),e,...s);return b.set(n,e.sort?e.sort():[e]),E(n)}}function L(t){return"function"==typeof t?x(t):(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));v.set(t,e)}(t),e=t,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,U):t);var e}function E(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(E(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&R.set(e,t)})).catch((()=>{})),D.set(e,t),e}(t);if(q.has(t))return q.get(t);const e=L(t);return e!==t&&(q.set(t,e),D.set(e,t)),e}const I=t=>D.get(t);const C=["get","getKey","getAll","getAllKeys","count"],N=["put","add","delete","clear"],O=new Map;function B(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(O.get(e))return O.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=N.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),i&&r.done]))[0]};return O.set(e,r),r}U=(t=>y({},t,{get:(e,s,n)=>B(e,s)||t.get(e,s,n),has:(e,s)=>!!B(e,s)||t.has(e,s)}))(U);try{self["workbox:expiration:6.4.1"]&&_()}catch(t){}const k="cache-entries",M=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class T{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore(k,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(()=>e())),E(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=M(t),timestamp:e,cacheName:this.u,id:this.g(t)},n=(await this.getDb()).transaction(k,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get(k,this.g(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(k).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const a=[];for(const t of i)await s.delete(k,t.id),a.push(t.url);return a}g(t){return this.u+"|"+M(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=E(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(E(a.result),t.oldVersion,t.newVersion,E(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class W{constructor(t,e={}){this.m=!1,this.R=!1,this.v=e.maxEntries,this.q=e.maxAgeSeconds,this.D=e.matchOptions,this.u=t,this.U=new T(t)}async expireEntries(){if(this.m)return void(this.R=!0);this.m=!0;const t=this.q?Date.now()-1e3*this.q:0,e=await this.U.expireEntries(t,this.v),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.D);this.m=!1,this.R&&(this.R=!1,d(this.expireEntries()))}async updateTimestamp(t){await this.U.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.q){const e=await this.U.getTimestamp(t),s=Date.now()-1e3*this.q;return void 0===e||e<s}return!1}async delete(){this.R=!1,await this.U.expireEntries(1/0)}}try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(t){}class j{constructor(t={}){this._=t.statuses,this.L=t.headers}isResponseCacheable(t){let e=!0;return this._&&(e=this._.includes(t.status)),this.L&&e&&(e=Object.keys(this.L).some((e=>t.headers.get(e)===this.L[e]))),e}}function P(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class S{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}try{self["workbox:strategies:6.4.1"]&&_()}catch(t){}function K(t){return"string"==typeof t?new Request(t):t}class A{constructor(t,e){this.I={},Object.assign(this,e),this.event=e.event,this.C=t,this.N=new S,this.O=[],this.B=[...t.plugins],this.k=new Map;for(const t of this.B)this.k.set(t,{});this.event.waitUntil(this.N.promise)}async fetch(t){const{event:e}=this;let n=K(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.C.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=K(t);let s;const{cacheName:n,matchOptions:i}=this.C,r=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,e){const n=K(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const r=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.M(e);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.C,u=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=P(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===P(e.url,s))return t.match(e,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?o.clone():o)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of p)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.I[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=K(await t({mode:e,request:n,event:this.event,params:this.params}));this.I[s]=n}return this.I[s]}hasCallback(t){for(const e of this.C.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.C.plugins)if("function"==typeof e[t]){const s=this.k.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.O.push(t),t}async doneWaiting(){let t;for(;t=this.O.shift();)await t}destroy(){this.N.resolve(null)}async M(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class F{constructor(t={}){this.cacheName=w(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new A(this,{event:e,request:s,params:n}),r=this.T(i,s,e);return[r,this.W(r,i,s,e)]}async T(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.j(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async W(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}const H={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};function $(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.4.1"]&&_()}catch(t){}function G(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class V{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class J{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.P.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.P=t}}let Q,z;async function X(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,o=function(){if(void 0===Q){const t=new Response("");if("body"in t)try{new Response(t.body),Q=!0}catch(t){Q=!1}Q=!1}return Q}()?i.body:await i.blob();return new Response(o,a)}class Y extends F{constructor(t={}){t.cacheName=f(t.cacheName),super(t),this.S=!1!==t.fallbackToNetwork,this.plugins.push(Y.copyRedirectedCacheableResponsesPlugin)}async j(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.K(t,e):await this.A(t,e))}async A(t,e){let n;const i=e.params||{};if(!this.S)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const s=i.integrity,r=t.integrity,a=!r||r===s;n=await e.fetch(new Request(t,{integrity:r||s})),s&&a&&(this.F(),await e.cachePut(t,n.clone()))}return n}async K(t,e){this.F();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}F(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==Y.copyRedirectedCacheableResponsesPlugin&&(n===Y.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(Y.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}Y.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},Y.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await X(t):t};class Z{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.H=new Map,this.$=new Map,this.G=new Map,this.C=new Y({cacheName:f(t),plugins:[...e,new J({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.C}precache(t){this.addToCacheList(t),this.V||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.V=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=G(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.H.has(i)&&this.H.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.H.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.G.has(t)&&this.G.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.G.set(t,n.integrity)}if(this.H.set(i,t),this.$.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return $(t,(async()=>{const e=new V;this.strategy.plugins.push(e);for(const[e,s]of this.H){const n=this.G.get(s),i=this.$.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return $(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.H.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.H}getCachedURLs(){return[...this.H.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.H.get(e.href)}getIntegrityForCacheKey(t){return this.G.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}const tt=()=>(z||(z=new Z),z);class et extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}t.CacheFirst=class extends F{async j(t,e){let n,i=await e.cacheMatch(t);if(!i)try{i=await e.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.CacheableResponsePlugin=class{constructor(t){this.cacheWillUpdate=async({response:t})=>this.J.isResponseCacheable(t)?t:null,this.J=new j(t)}},t.ExpirationPlugin=class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.X(n),r=this.Y(s);d(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.Y(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.Z=t,this.q=t.maxAgeSeconds,this.tt=new Map,t.purgeOnQuotaError&&function(t){p.add(t)}((()=>this.deleteCacheAndMetadata()))}Y(t){if(t===w())throw new s("expire-custom-caches-only");let e=this.tt.get(t);return e||(e=new W(t,this.Z),this.tt.set(t,e)),e}X(t){if(!this.q)return!0;const e=this.et(t);if(null===e)return!0;return e>=Date.now()-1e3*this.q}et(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.tt)await self.caches.delete(t),await e.delete();this.tt=new Map}},t.NavigationRoute=class extends i{constructor(t,{allowlist:e=[/./],denylist:s=[]}={}){super((t=>this.st(t)),t),this.nt=e,this.it=s}st({url:t,request:e}){if(e&&"navigate"!==e.mode)return!1;const s=t.pathname+t.search;for(const t of this.it)if(t.test(s))return!1;return!!this.nt.some((t=>t.test(s)))}},t.StaleWhileRevalidate=class extends F{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(H)}async j(t,e){const n=e.fetchAndCachePut(t).catch((()=>{}));let i,r=await e.cacheMatch(t);if(r);else try{r=await n}catch(t){t instanceof Error&&(i=t)}if(!r)throw new s("no-response",{url:t.url,error:i});return r}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=f();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.createHandlerBoundToURL=function(t){return tt().createHandlerBoundToURL(t)},t.precacheAndRoute=function(t,e){!function(t){tt().precache(t)}(t),function(t){const e=tt();h(new et(e,t))}(e)},t.registerRoute=h}));
