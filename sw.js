if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-6e09521b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/3dView.d23e8d94.js",revision:null},{url:"assets/3dView.e8814216.css",revision:null},{url:"assets/403.30e71212.js",revision:null},{url:"assets/404.cde28a78.js",revision:null},{url:"assets/addService.58cd17c9.js",revision:null},{url:"assets/addService.7e6b70ed.css",revision:null},{url:"assets/anyRule.327fd85f.js",revision:null},{url:"assets/anyRule.3d83fb36.css",revision:null},{url:"assets/ascii.3526163c.js",revision:null},{url:"assets/base64.78571f07.css",revision:null},{url:"assets/base64.d8cf070f.js",revision:null},{url:"assets/bilibiliBv2av.5a2dfa3e.css",revision:null},{url:"assets/bilibiliBv2av.e7ceb5ac.js",revision:null},{url:"assets/cdnQuery.e0037123.js",revision:null},{url:"assets/cdnQuery.e038a58c.css",revision:null},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:null},{url:"assets/colorTransform.37c1b84c.js",revision:null},{url:"assets/colorTransform.ec0cd583.css",revision:null},{url:"assets/createFile.ae770435.js",revision:null},{url:"assets/cssFormatter.1021b5b8.css",revision:null},{url:"assets/cssFormatter.67e6917f.js",revision:null},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:null},{url:"assets/DS-DIGII.7402d935.TTF",revision:null},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:null},{url:"assets/duration.d777bf6a.js",revision:null},{url:"assets/geoJson.30c253f1.css",revision:null},{url:"assets/geoJson.3a0c6588.js",revision:null},{url:"assets/geoJsonEditor.08b6c9a8.js",revision:null},{url:"assets/geoJsonEditor.92bec7c5.css",revision:null},{url:"assets/idChinese.229385ff.css",revision:null},{url:"assets/idChinese.451fbc7c.js",revision:null},{url:"assets/imageBase64.0123eee2.css",revision:null},{url:"assets/imageBase64.c66a5fac.js",revision:null},{url:"assets/imgHosting.1d2bb7bc.js",revision:null},{url:"assets/imgHosting.225480fc.css",revision:null},{url:"assets/imgList.3fffaa2d.js",revision:null},{url:"assets/imgList.7d982a7e.css",revision:null},{url:"assets/index.0547f307.css",revision:null},{url:"assets/index.238465ae.css",revision:null},{url:"assets/index.299f87ec.js",revision:null},{url:"assets/index.369f6156.css",revision:null},{url:"assets/index.52837d0b.css",revision:null},{url:"assets/index.54723aec.css",revision:null},{url:"assets/index.5527443f.js",revision:null},{url:"assets/index.5b179dc2.css",revision:null},{url:"assets/index.62924c68.css",revision:null},{url:"assets/index.6d396e24.css",revision:null},{url:"assets/index.7358280f.css",revision:null},{url:"assets/index.762a607e.css",revision:null},{url:"assets/index.7be24610.css",revision:null},{url:"assets/index.7d1eaa5d.js",revision:null},{url:"assets/index.9473fcdd.js",revision:null},{url:"assets/index.9c24450e.css",revision:null},{url:"assets/index.9d432d0f.css",revision:null},{url:"assets/index.a0099024.css",revision:null},{url:"assets/index.a18cc309.css",revision:null},{url:"assets/index.a7c57f02.css",revision:null},{url:"assets/index.a9eccfdd.css",revision:null},{url:"assets/index.b4dd4cdb.css",revision:null},{url:"assets/index.c202ebc2.js",revision:null},{url:"assets/index.cc98f6e8.css",revision:null},{url:"assets/index.cd256673.css",revision:null},{url:"assets/index.dd50a964.css",revision:null},{url:"assets/index.de7af22f.css",revision:null},{url:"assets/index.de9613c2.css",revision:null},{url:"assets/index.e106bc6c.js",revision:null},{url:"assets/index.eb724f65.css",revision:null},{url:"assets/index.ec96793c.js",revision:null},{url:"assets/index.eec11aa6.js",revision:null},{url:"assets/index.f3516be5.css",revision:null},{url:"assets/index.f4e59afe.css",revision:null},{url:"assets/index.f528d1af.css",revision:null},{url:"assets/index.fdb475d9.js",revision:null},{url:"assets/index.fe5417a2.css",revision:null},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:null},{url:"assets/jsonEditor.98212dd7.js",revision:null},{url:"assets/jsonEditor.ccafa660.css",revision:null},{url:"assets/jsoneditor.min.17222aae.css",revision:null},{url:"assets/jsoneditor.min.9da9fe96.js",revision:null},{url:"assets/jwt.8465a29a.js",revision:null},{url:"assets/jwt.cad37706.css",revision:null},{url:"assets/latLng.ab88554b.css",revision:null},{url:"assets/latLng.f9d99104.js",revision:null},{url:"assets/leaflet-src.d68c88bb.js",revision:null},{url:"assets/leafletMap.953bb003.js",revision:null},{url:"assets/leafletMap.b1bd503e.css",revision:null},{url:"assets/linuxCommand.149fd130.js",revision:null},{url:"assets/linuxCommand.9619ab7b.css",revision:null},{url:"assets/marker-shadow.468c75a6.js",revision:null},{url:"assets/marker-shadow.d32535f5.css",revision:null},{url:"assets/md5.97f829e0.js",revision:null},{url:"assets/mtqLoans.af4dc768.js",revision:null},{url:"assets/mtqLoans.f701ffa8.css",revision:null},{url:"assets/O.aabe6b8b.png",revision:null},{url:"assets/Ob.fa8b324c.png",revision:null},{url:"assets/oreo.6b415d4d.png",revision:null},{url:"assets/propertyTable.27ec9db8.css",revision:null},{url:"assets/propertyTable.86607f12.js",revision:null},{url:"assets/R.fca5b3d5.png",revision:null},{url:"assets/random.5b415d7d.js",revision:null},{url:"assets/randomList.5fc4a16c.js",revision:null},{url:"assets/randomList.d204f3a9.css",revision:null},{url:"assets/randomNumber.4b375dd8.css",revision:null},{url:"assets/randomNumber.8edba07a.js",revision:null},{url:"assets/relationship.39e4834d.css",revision:null},{url:"assets/relationship.e0527aa6.js",revision:null},{url:"assets/screenRecord.3507580f.css",revision:null},{url:"assets/screenRecord.82461793.js",revision:null},{url:"assets/Seto.3e28fa6c.eot",revision:null},{url:"assets/Seto.8ea3242a.woff",revision:null},{url:"assets/Seto.969d39cb.ttf",revision:null},{url:"assets/Seto.f0825900.svg",revision:null},{url:"assets/settings.9a805eb9.js",revision:null},{url:"assets/settings.f4152938.css",revision:null},{url:"assets/timeCompute.78f85968.js",revision:null},{url:"assets/tinyEditor.59a46f8b.css",revision:null},{url:"assets/tinyEditor.752e2e23.js",revision:null},{url:"assets/upload.5db857ad.js",revision:null},{url:"assets/upload.ec1cb8bb.css",revision:null},{url:"assets/urlEncode.ca938ee8.js",revision:null},{url:"assets/urlEncode.cc418b62.css",revision:null},{url:"assets/userAgent.48cf1bfc.js",revision:null},{url:"assets/uuid.5e0c39cc.js",revision:null},{url:"assets/uuid.7ae8f154.css",revision:null},{url:"assets/vendor.53be07e2.js",revision:null},{url:"assets/vendor.f0797e1e.css",revision:null},{url:"assets/viewSourceCode.a7d576a8.js",revision:null},{url:"assets/viewSourceCode.ffa04fc8.css",revision:null},{url:"assets/watermark.42238549.css",revision:null},{url:"assets/watermark.948b586d.js",revision:null},{url:"assets/webssh.5714d445.js",revision:null},{url:"assets/webssh.67bab004.css",revision:null},{url:"assets/whatAnimeIsThis.b70e9293.css",revision:null},{url:"assets/whatAnimeIsThis.d00449cf.js",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"a1caf9226a7aabb97e591d7a936a1bc9"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.CacheFirst({cacheName:"iconfont",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new s.CacheFirst({cacheName:"bytegoofy",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
