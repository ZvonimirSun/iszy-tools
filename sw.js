if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/404.e3c38f98.js",revision:"22876ec41350976d0ae68158d52fb89e"},{url:"assets/anyRule.4cef944b.css",revision:"f6b06e729ca957859aabcaa90a6d1b01"},{url:"assets/anyRule.9c4b3e14.js",revision:"ea142ebb246cd3456614207190021990"},{url:"assets/bilibiliBv2av.a8524f35.js",revision:"25d8464abfb085fb70f254b511685cd1"},{url:"assets/bilibiliBv2av.b32660ce.css",revision:"3df7bce5804ceb2a9f62e9a5580743aa"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/BingMap.8aeba382.js",revision:"b2f4847d7b7ce0e25fad2a0c7f19cbb4"},{url:"assets/cdnQuery.5d033dc1.css",revision:"692113d905a2856de5b359434175cd77"},{url:"assets/cdnQuery.dab8f8d9.js",revision:"0ba94d7a2a2d7702612a7c89c38506f6"},{url:"assets/cesiumDemo.8b195c58.js",revision:"dad791ef3d0b52e2d10bd68baa06ae75"},{url:"assets/cesiumDemo.dc8ac956.css",revision:"145fa25edbf433235d250ae3427d2e32"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.86c19478.js",revision:"e8918e02f7581c89ee34373ef20641bf"},{url:"assets/container.25a00a02.css",revision:"7ad3b4871b53bb517016fbcf7c096de9"},{url:"assets/container.5ad8adce.js",revision:"8ed5cdb645537937a6b0b06b02c566fc"},{url:"assets/createFile.9c121861.js",revision:"e9ae9b8004ebeba0c69542f8498ed4f9"},{url:"assets/cssFormatter.04339db7.js",revision:"adda1be44a463e83a3cea247458e7f47"},{url:"assets/cssFormatter.09cfb18f.css",revision:"28727265c94e89315253e4cc0575f7e2"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.035d3885.js",revision:"cf38efe796fd98e5ee84e1fc0136c8ee"},{url:"assets/geoJson.95adf479.css",revision:"afec2b32ddd1f6115c3b096c645a0aeb"},{url:"assets/Home.05e39f6d.js",revision:"6b7f6a2ac981793f6dbe7519ec38d05f"},{url:"assets/Home.a5847ba1.css",revision:"d0c348a5226d463240b2aa42c4593889"},{url:"assets/idChinese.0fdfc508.js",revision:"31cbde4792600f13ec50b611f2ab2ec5"},{url:"assets/idChinese.b0148a0e.css",revision:"c4942db9c6946999b6de9b94879dfd60"},{url:"assets/imgHosting.10e2211f.js",revision:"25e4e8bc80c003f9915f9ea0cc96c629"},{url:"assets/imgHosting.90cfcb9d.css",revision:"a9017f18188d72844783b2b6825e8649"},{url:"assets/imgList.0c0f60c5.css",revision:"4d18c91eec1c6c8c3f424be0cc283071"},{url:"assets/imgList.1f7895e6.js",revision:"d94f3d1176b38f5d847c8bc93f98d7d9"},{url:"assets/index.10630c4f.js",revision:"743d2b0a833fd3fbc1109b4d5232c0d4"},{url:"assets/index.1ea68130.js",revision:"2488d545bc92e9b73a4207e9e3ea8050"},{url:"assets/index.28f6fdd0.css",revision:"530021c16a47218648ecd3e877a64827"},{url:"assets/index.290a9536.css",revision:"8c5052027b5a127fe47acc0baacd1a0c"},{url:"assets/index.3df526cf.js",revision:"dbec3c071328350aa00adc4521dea128"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4ca0d3d7.css",revision:"fe3c424cbabca1f84745e79a5a62e41a"},{url:"assets/index.5206647d.css",revision:"589cb028f4240419f266e9f56af0cb20"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.5580ceba.css",revision:"af1010923cf3788ad6fca5060fb81f5f"},{url:"assets/index.56a1e365.js",revision:"ef4f4314446b8ca1817db54ab6f2fbe5"},{url:"assets/index.5843569a.css",revision:"5436996a55235d61acce5cab474c7651"},{url:"assets/index.5b179dc2.css",revision:"d0be06cfa876e82c0277c4dfe9fdd1b4"},{url:"assets/index.6a7a0a0c.css",revision:"c793c5de73cbe7c0b3a31a793caf7251"},{url:"assets/index.74580095.css",revision:"e6690b70662d1b139d46758dab252999"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.9c6089eb.js",revision:"77c76a2299274564e992ce09200cf5c7"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a361a67d.css",revision:"ddbdde5ecc528fb2877329a1a0299a8a"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.b4aebbd8.js",revision:"b230b12e460221400752ab0d4ef261c9"},{url:"assets/index.b56b905d.css",revision:"9cd3e5c429e0f0c592bba0f7f216f79c"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.d69837cc.css",revision:"43e42d65c697c01f55ad371852a7eb97"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.eb531402.css",revision:"fd95271e6e4d5891d785b846feedf025"},{url:"assets/index.eb724f65.css",revision:"83615d4ce9bd2c94ef55c1fb97ae1446"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.f91f87a2.js",revision:"73d938e15b9770ecf1d6b04e2e8461e8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.80dd6033.js",revision:"f6fb77d36c6918faea00137e6db792b9"},{url:"assets/jsonEditor.9e2f540b.css",revision:"63a48d62c10a7916a33b136d91cb8d87"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.87ee7f55.js",revision:"578799c1709b58bac7b68224f853b78a"},{url:"assets/latLng.c5e07b62.css",revision:"04aeaa886da5093b9bb78d60d8230625"},{url:"assets/latLng.cec3badb.js",revision:"34bd52b8d647d7b611a869e83fc73b02"},{url:"assets/leaflet.ChineseLayer.80e2805b.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/leaflet.ChineseLayer.b8f3e177.js",revision:"b40f87992627b2b8a57203343cd89513"},{url:"assets/linuxCommand.7fa74600.js",revision:"54b595f7645b6b162ec6b32b54960de2"},{url:"assets/linuxCommand.92c91aad.css",revision:"ffaf8a2cf7b57bf1a77ac4937bae0e4f"},{url:"assets/mtqLoans.e6bfd843.js",revision:"0db94d4216bebcd822282f95a1b77de3"},{url:"assets/mtqLoans.e74004f7.css",revision:"d89b95b2b7b2089a042f6739882d8764"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/relationship.aa7efbb5.css",revision:"1e72d8a7031a0de47614a42c58643f83"},{url:"assets/relationship.b74d5c0f.js",revision:"b6f3fb8b17f77c988203e85681457d40"},{url:"assets/screenRecord.8b69fd67.css",revision:"3839cb794911d26f1d26ac6e90add1d8"},{url:"assets/screenRecord.8edc9009.js",revision:"d05a4eb4d0f232964dbced6d07e2eed9"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/settings.22865339.js",revision:"a6e66906fd050dc1a458232b995138b6"},{url:"assets/settings.5478c58c.css",revision:"d2a92e90aede04a491b3eea7a36fe7ec"},{url:"assets/timeCompute.c1767765.js",revision:"93cdfb97dcfb7d1767d83c4f665d05ac"},{url:"assets/tinyEditor.2a000628.css",revision:"56a98c0fe577c89209191ba0e5fb6869"},{url:"assets/tinyEditor.f4b6b163.js",revision:"48f73b9e3d2ffe07e69ab4b79be2e5c1"},{url:"assets/upload.95046232.js",revision:"8b116022ed6e33d5b3750c260fb358ce"},{url:"assets/upload.cf7d4ccd.css",revision:"b751ac35d74499029bda9bb2ae4d8f5c"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/urlEncode.b2b89c13.js",revision:"9dd93c78cdda07996bb1e9b44542a232"},{url:"assets/userAgent.78d10703.js",revision:"bec3f0e6b7f10a88f718801a7240507f"},{url:"assets/uuid.b58a557b.css",revision:"2b7b9e3c6ce4d0e6ce90887638156230"},{url:"assets/uuid.e4a03fa8.js",revision:"c65acfa5f546c8a3e0a10ee5f50a0ee9"},{url:"assets/vendor.18d196da.js",revision:"bbc6765d94f8a527003efda3ec765dea"},{url:"assets/vendor.6b12421d.css",revision:"74a93154091c6715a1efcf2d204e7bf4"},{url:"assets/viewSourceCode.dbde78d4.js",revision:"ec6286f497bff7f6ddbac6d687e84d6e"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/vue-color.esm.879073eb.js",revision:"08596a763e55577db63f124e10a27d18"},{url:"assets/watermark.2d14b3be.css",revision:"d6376ffc0545139554dec6162040be21"},{url:"assets/watermark.fe817781.js",revision:"314278a41d4d679aaf5f7d6dfe6462c1"},{url:"assets/webssh.3b743dbb.js",revision:"51ba38edf79a8736cfc6fc80d8d46486"},{url:"assets/webssh.81ad0fc9.css",revision:"757c1ef248dab2260993aedc621e2497"},{url:"assets/whatAnimeIsThis.0518a789.css",revision:"a5d467ccb33512b0d7f91d71b29d818f"},{url:"assets/whatAnimeIsThis.c5c39af9.js",revision:"34ed3d98b79161e94109e6eddf98dc58"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"750a1f638f426dec81c3cbd16878d3d9"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"sitemap.xml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
