if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const o=e=>n(e,c),r={module:{uri:c},exports:a,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),a)))}}define(["./workbox-ceaeb0ce"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"e0ccd57f047fdf093d1c58b321e64c1f"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"}],{}),e.cleanupOutdatedCaches(),e.registerRoute((({url:e})=>"https://api.iszy.xyz"===e.origin),new e.NetworkFirst({cacheName:"iszy-api",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute((({url:e})=>e.hostname.endsWith("cdn.iszy.xyz")),new e.CacheFirst({cacheName:"iszy-cdn",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"iszy-images",plugins:[new e.ExpirationPlugin({maxEntries:30}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:woff|eot|otf|ttf|TTF)$/,new e.CacheFirst({cacheName:"iszy-font",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.css.*/,new e.CacheFirst({cacheName:"iszy-css",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.js.*/,new e.CacheFirst({cacheName:"iszy-js",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
