if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const a=e=>n(e,c),u={module:{uri:c},exports:o,require:a};s[c]=Promise.all(t.map((e=>u[e]||a(e)))).then((e=>(i(...e),o)))}}define(["./workbox-e8274e19"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4b8dfff19e984cf17e81d234de0ac551"},{url:"manifest.webmanifest",revision:"14bc23f6bed5024862549319cc53e4ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>"https://api.iszy.xyz"===e.origin),new e.NetworkFirst({cacheName:"iszy-api",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute((({url:e})=>e.hostname.endsWith("cdn.iszy.xyz")),new e.CacheFirst({cacheName:"iszy-cdn",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"iszy-images",plugins:[new e.ExpirationPlugin({maxEntries:30}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:woff|eot|otf|ttf|TTF)$/,new e.CacheFirst({cacheName:"iszy-font",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.css.*/,new e.CacheFirst({cacheName:"iszy-css",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.js.*/,new e.CacheFirst({cacheName:"iszy-js",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
