if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-6e09521b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/3dView.21da2ac6.js",revision:null},{url:"assets/3dView.4b15cc60.css",revision:null},{url:"assets/403.30e71212.js",revision:null},{url:"assets/404.cde28a78.js",revision:null},{url:"assets/addService.004b185e.css",revision:null},{url:"assets/addService.eed5e5d1.js",revision:null},{url:"assets/anyRule.7d20181f.js",revision:null},{url:"assets/anyRule.96c84c90.css",revision:null},{url:"assets/ascii.ab062e3b.js",revision:null},{url:"assets/base64.78571f07.css",revision:null},{url:"assets/base64.80a8c859.js",revision:null},{url:"assets/bilibiliBv2av.143456e5.js",revision:null},{url:"assets/bilibiliBv2av.9a0ea711.css",revision:null},{url:"assets/cdnQuery.96ec113b.css",revision:null},{url:"assets/cdnQuery.f8e5b81b.js",revision:null},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:null},{url:"assets/colorTransform.69d27e12.css",revision:null},{url:"assets/colorTransform.9011af5c.js",revision:null},{url:"assets/createFile.ae770435.js",revision:null},{url:"assets/cssFormatter.6fe94989.css",revision:null},{url:"assets/cssFormatter.fd3f35ac.js",revision:null},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:null},{url:"assets/DS-DIGII.7402d935.TTF",revision:null},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:null},{url:"assets/duration.d777bf6a.js",revision:null},{url:"assets/geoJson.31530d46.css",revision:null},{url:"assets/geoJson.9afd5bc9.js",revision:null},{url:"assets/geoJsonEditor.108184fa.js",revision:null},{url:"assets/geoJsonEditor.6f471ae6.css",revision:null},{url:"assets/idChinese.21222eb4.js",revision:null},{url:"assets/idChinese.fca92667.css",revision:null},{url:"assets/imageBase64.2ac3d152.css",revision:null},{url:"assets/imageBase64.75cae6b4.js",revision:null},{url:"assets/imgHosting.1fddf5ed.css",revision:null},{url:"assets/imgHosting.9882bbb4.js",revision:null},{url:"assets/imgList.27a4371e.css",revision:null},{url:"assets/imgList.e96138c5.js",revision:null},{url:"assets/index.02aba5b1.js",revision:null},{url:"assets/index.0547f307.css",revision:null},{url:"assets/index.060df8a3.js",revision:null},{url:"assets/index.1cea0ea6.css",revision:null},{url:"assets/index.238465ae.css",revision:null},{url:"assets/index.244b119d.js",revision:null},{url:"assets/index.369f6156.css",revision:null},{url:"assets/index.52837d0b.css",revision:null},{url:"assets/index.54723aec.css",revision:null},{url:"assets/index.5527443f.js",revision:null},{url:"assets/index.5b179dc2.css",revision:null},{url:"assets/index.62924c68.css",revision:null},{url:"assets/index.6d396e24.css",revision:null},{url:"assets/index.762a607e.css",revision:null},{url:"assets/index.784899d2.css",revision:null},{url:"assets/index.7be24610.css",revision:null},{url:"assets/index.7c07c032.js",revision:null},{url:"assets/index.7dc9dac3.js",revision:null},{url:"assets/index.87015f35.js",revision:null},{url:"assets/index.90a72359.css",revision:null},{url:"assets/index.9c24450e.css",revision:null},{url:"assets/index.a0099024.css",revision:null},{url:"assets/index.a18cc309.css",revision:null},{url:"assets/index.a382509d.js",revision:null},{url:"assets/index.a7c57f02.css",revision:null},{url:"assets/index.a9eccfdd.css",revision:null},{url:"assets/index.cd256673.css",revision:null},{url:"assets/index.dd50a964.css",revision:null},{url:"assets/index.de7af22f.css",revision:null},{url:"assets/index.de9613c2.css",revision:null},{url:"assets/index.eabfdf12.css",revision:null},{url:"assets/index.eb724f65.css",revision:null},{url:"assets/index.ec96793c.js",revision:null},{url:"assets/index.f3516be5.css",revision:null},{url:"assets/index.f4e59afe.css",revision:null},{url:"assets/index.f528d1af.css",revision:null},{url:"assets/index.fe5417a2.css",revision:null},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:null},{url:"assets/jsonEditor.dcd7824e.js",revision:null},{url:"assets/jsonEditor.e92209d5.css",revision:null},{url:"assets/jsoneditor.min.17222aae.css",revision:null},{url:"assets/jsoneditor.min.9da9fe96.js",revision:null},{url:"assets/jwt.7c578c2a.css",revision:null},{url:"assets/jwt.c780d39e.js",revision:null},{url:"assets/latLng.58c496eb.js",revision:null},{url:"assets/latLng.82926600.css",revision:null},{url:"assets/leaflet-src.d68c88bb.js",revision:null},{url:"assets/leafletMap.6649baae.js",revision:null},{url:"assets/leafletMap.9a824166.css",revision:null},{url:"assets/linuxCommand.21fdaca8.js",revision:null},{url:"assets/linuxCommand.f106d7e9.css",revision:null},{url:"assets/marker-shadow.468c75a6.js",revision:null},{url:"assets/marker-shadow.d32535f5.css",revision:null},{url:"assets/md5.7b56245b.js",revision:null},{url:"assets/mtqLoans.48224af6.js",revision:null},{url:"assets/mtqLoans.9295d6f8.css",revision:null},{url:"assets/O.aabe6b8b.png",revision:null},{url:"assets/Ob.fa8b324c.png",revision:null},{url:"assets/oreo.6b415d4d.png",revision:null},{url:"assets/propertyTable.567b8771.css",revision:null},{url:"assets/propertyTable.89b796fc.js",revision:null},{url:"assets/R.fca5b3d5.png",revision:null},{url:"assets/random.5e787d82.js",revision:null},{url:"assets/randomList.7063e486.css",revision:null},{url:"assets/randomList.8abd9594.js",revision:null},{url:"assets/randomNumber.d7395cae.js",revision:null},{url:"assets/randomNumber.fe4723fc.css",revision:null},{url:"assets/relationship.448d1579.css",revision:null},{url:"assets/relationship.8526d725.js",revision:null},{url:"assets/screenRecord.11eb2c7c.css",revision:null},{url:"assets/screenRecord.fe58b113.js",revision:null},{url:"assets/Seto.3e28fa6c.eot",revision:null},{url:"assets/Seto.8ea3242a.woff",revision:null},{url:"assets/Seto.969d39cb.ttf",revision:null},{url:"assets/Seto.f0825900.svg",revision:null},{url:"assets/settings.39ef8168.css",revision:null},{url:"assets/settings.4e467fe5.js",revision:null},{url:"assets/timeCompute.47e4ae8e.js",revision:null},{url:"assets/tinyEditor.bd2ef299.js",revision:null},{url:"assets/tinyEditor.f5234a90.css",revision:null},{url:"assets/upload.4d34935c.js",revision:null},{url:"assets/upload.90c23405.css",revision:null},{url:"assets/urlEncode.1d7a021f.css",revision:null},{url:"assets/urlEncode.b139e0a4.js",revision:null},{url:"assets/userAgent.14a882ed.js",revision:null},{url:"assets/uuid.55e883f8.css",revision:null},{url:"assets/uuid.a90cf73e.js",revision:null},{url:"assets/vendor.53be07e2.js",revision:null},{url:"assets/vendor.f0797e1e.css",revision:null},{url:"assets/viewSourceCode.f6921bd5.js",revision:null},{url:"assets/viewSourceCode.ffa04fc8.css",revision:null},{url:"assets/watermark.1b321052.js",revision:null},{url:"assets/watermark.c0db4a7c.css",revision:null},{url:"assets/webssh.3d13e124.js",revision:null},{url:"assets/webssh.92802eec.css",revision:null},{url:"assets/whatAnimeIsThis.0f509383.css",revision:null},{url:"assets/whatAnimeIsThis.bbdf7eb7.js",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"fc1cb09d210861bd3ca821401437d0a7"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.CacheFirst({cacheName:"iconfont",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new s.CacheFirst({cacheName:"bytegoofy",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
