if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-df7d6266"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/3dView.4b15cc60.css",revision:null},{url:"assets/3dView.d8c76f7e.js",revision:null},{url:"assets/403.d1eb695a.js",revision:null},{url:"assets/404.8ff694b5.js",revision:null},{url:"assets/addService.004b185e.css",revision:null},{url:"assets/addService.3b92a509.js",revision:null},{url:"assets/anyRule.222e5d08.js",revision:null},{url:"assets/anyRule.96c84c90.css",revision:null},{url:"assets/ascii.37e82b3d.js",revision:null},{url:"assets/base64.6712fe92.js",revision:null},{url:"assets/base64.78571f07.css",revision:null},{url:"assets/bilibiliBv2av.9a0ea711.css",revision:null},{url:"assets/bilibiliBv2av.c3185b00.js",revision:null},{url:"assets/cdnQuery.19c67663.css",revision:null},{url:"assets/cdnQuery.db0aaa33.js",revision:null},{url:"assets/chineseColor.512fe460.js",revision:null},{url:"assets/chineseColor.887306df.css",revision:null},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:null},{url:"assets/colorTransform.69d27e12.css",revision:null},{url:"assets/colorTransform.8cdb1cc7.js",revision:null},{url:"assets/createFile.f740b0ee.js",revision:null},{url:"assets/cssFormatter.6fe94989.css",revision:null},{url:"assets/cssFormatter.75f82cb2.js",revision:null},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:null},{url:"assets/DS-DIGII.7402d935.TTF",revision:null},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:null},{url:"assets/duration.1b52602e.js",revision:null},{url:"assets/geoJson.0396941e.js",revision:null},{url:"assets/geoJson.31530d46.css",revision:null},{url:"assets/geoJsonEditor.6f471ae6.css",revision:null},{url:"assets/geoJsonEditor.c0c4a4f4.js",revision:null},{url:"assets/idChinese.656f50fc.js",revision:null},{url:"assets/idChinese.fca92667.css",revision:null},{url:"assets/imageBase64.2ac3d152.css",revision:null},{url:"assets/imageBase64.fad6657d.js",revision:null},{url:"assets/imgHosting.1fddf5ed.css",revision:null},{url:"assets/imgHosting.ae413b15.js",revision:null},{url:"assets/imgList.4387b698.css",revision:null},{url:"assets/imgList.d956478b.js",revision:null},{url:"assets/index.0547f307.css",revision:null},{url:"assets/index.238465ae.css",revision:null},{url:"assets/index.35e995be.js",revision:null},{url:"assets/index.369f6156.css",revision:null},{url:"assets/index.41a0e8eb.js",revision:null},{url:"assets/index.4c75083d.js",revision:null},{url:"assets/index.52837d0b.css",revision:null},{url:"assets/index.54723aec.css",revision:null},{url:"assets/index.5527443f.js",revision:null},{url:"assets/index.628d7612.css",revision:null},{url:"assets/index.62924c68.css",revision:null},{url:"assets/index.6d396e24.css",revision:null},{url:"assets/index.762a607e.css",revision:null},{url:"assets/index.7be24610.css",revision:null},{url:"assets/index.90a72359.css",revision:null},{url:"assets/index.9c24450e.css",revision:null},{url:"assets/index.a0099024.css",revision:null},{url:"assets/index.a18cc309.css",revision:null},{url:"assets/index.a54e3747.css",revision:null},{url:"assets/index.cd256673.css",revision:null},{url:"assets/index.cf414c09.js",revision:null},{url:"assets/index.db0d49f8.css",revision:null},{url:"assets/index.db335808.js",revision:null},{url:"assets/index.dd50a964.css",revision:null},{url:"assets/index.de7af22f.css",revision:null},{url:"assets/index.de7d5bb1.css",revision:null},{url:"assets/index.de9613c2.css",revision:null},{url:"assets/index.e16371df.js",revision:null},{url:"assets/index.e31b663b.css",revision:null},{url:"assets/index.eabfdf12.css",revision:null},{url:"assets/index.eb724f65.css",revision:null},{url:"assets/index.eeb6e0a6.css",revision:null},{url:"assets/index.f3516be5.css",revision:null},{url:"assets/index.f40ef877.js",revision:null},{url:"assets/index.f4e59afe.css",revision:null},{url:"assets/index.f528d1af.css",revision:null},{url:"assets/index.fa2a2fea.js",revision:null},{url:"assets/index.fe5417a2.css",revision:null},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:null},{url:"assets/jsonEditor.8fd8e1a5.js",revision:null},{url:"assets/jsonEditor.fc725ec3.css",revision:null},{url:"assets/jsoneditor.min.0b7940de.js",revision:null},{url:"assets/jsoneditor.min.2b770c09.css",revision:null},{url:"assets/jwt.7c578c2a.css",revision:null},{url:"assets/jwt.bc32bffc.js",revision:null},{url:"assets/latLng.72ab6ff4.css",revision:null},{url:"assets/latLng.8d454ead.js",revision:null},{url:"assets/leaflet-src.3ed96abf.js",revision:null},{url:"assets/leafletMap.5f477edd.css",revision:null},{url:"assets/leafletMap.81eb34f8.js",revision:null},{url:"assets/linuxCommand.187e88fb.css",revision:null},{url:"assets/linuxCommand.416a6daf.js",revision:null},{url:"assets/marker-shadow.6be0c898.js",revision:null},{url:"assets/marker-shadow.d32535f5.css",revision:null},{url:"assets/md5.ff46a2fd.js",revision:null},{url:"assets/mtqLoans.9295d6f8.css",revision:null},{url:"assets/mtqLoans.e74866f3.js",revision:null},{url:"assets/O.aabe6b8b.png",revision:null},{url:"assets/Ob.fa8b324c.png",revision:null},{url:"assets/oreo.6b415d4d.png",revision:null},{url:"assets/propertyTable.51be00d3.js",revision:null},{url:"assets/propertyTable.567b8771.css",revision:null},{url:"assets/R.fca5b3d5.png",revision:null},{url:"assets/random.27b2298b.js",revision:null},{url:"assets/randomList.3257cf2c.js",revision:null},{url:"assets/randomList.7063e486.css",revision:null},{url:"assets/randomNumber.f73b92d7.js",revision:null},{url:"assets/randomNumber.fe4723fc.css",revision:null},{url:"assets/relationship.448d1579.css",revision:null},{url:"assets/relationship.7ac2c89b.js",revision:null},{url:"assets/screenRecord.0436ac38.js",revision:null},{url:"assets/screenRecord.11eb2c7c.css",revision:null},{url:"assets/Seto.3e28fa6c.eot",revision:null},{url:"assets/Seto.8ea3242a.woff",revision:null},{url:"assets/Seto.969d39cb.ttf",revision:null},{url:"assets/Seto.f0825900.svg",revision:null},{url:"assets/settings.6c705322.css",revision:null},{url:"assets/settings.8196689f.js",revision:null},{url:"assets/texture.d794feb1.png",revision:null},{url:"assets/timeCompute.5523856f.js",revision:null},{url:"assets/tinyEditor.69ff29fa.js",revision:null},{url:"assets/tinyEditor.f5234a90.css",revision:null},{url:"assets/upload.36181b02.js",revision:null},{url:"assets/upload.ef2cdee8.css",revision:null},{url:"assets/urlEncode.1d7a021f.css",revision:null},{url:"assets/urlEncode.94a4f5f9.js",revision:null},{url:"assets/userAgent.a59f9de8.js",revision:null},{url:"assets/uuid.389eb4af.js",revision:null},{url:"assets/uuid.55e883f8.css",revision:null},{url:"assets/vendor.9bf0bfaf.js",revision:null},{url:"assets/vendor.f0797e1e.css",revision:null},{url:"assets/viewSourceCode.c691e294.js",revision:null},{url:"assets/viewSourceCode.ffa04fc8.css",revision:null},{url:"assets/watermark.771868ea.js",revision:null},{url:"assets/watermark.c0db4a7c.css",revision:null},{url:"assets/webssh.92802eec.css",revision:null},{url:"assets/webssh.c4b74503.js",revision:null},{url:"assets/whatAnimeIsThis.0f509383.css",revision:null},{url:"assets/whatAnimeIsThis.f86023fe.js",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"f7e0109dcaa10cc52dc8cddf35e352e3"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.CacheFirst({cacheName:"iconfont",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new s.CacheFirst({cacheName:"bytegoofy",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
