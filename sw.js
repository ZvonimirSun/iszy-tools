if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/404.f932aab5.js",revision:"7499377a9dc725e8c7d80b4246856117"},{url:"assets/anyRule.4cef944b.css",revision:"f6b06e729ca957859aabcaa90a6d1b01"},{url:"assets/anyRule.64c41262.js",revision:"e781119d57c9b579940aeb4b9c3ea866"},{url:"assets/bilibiliBv2av.b32660ce.css",revision:"3df7bce5804ceb2a9f62e9a5580743aa"},{url:"assets/bilibiliBv2av.ce7c1bde.js",revision:"f229607f80a4608f41fe55db4620903d"},{url:"assets/BingMap.546cf150.js",revision:"0c553e7ae147d0245bf796999bd9a8f1"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/cdnQuery.5d033dc1.css",revision:"692113d905a2856de5b359434175cd77"},{url:"assets/cdnQuery.adc15635.js",revision:"4f98233436a04ac1b3baceb90bb78f5a"},{url:"assets/cesiumDemo.6f5dc9a4.js",revision:"e3d55a31ebbc3c4ef203ef5f345e5f65"},{url:"assets/cesiumDemo.dc8ac956.css",revision:"145fa25edbf433235d250ae3427d2e32"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.ef80f630.js",revision:"11208d2af2c74860880ad84b85af88e4"},{url:"assets/container.25a00a02.css",revision:"7ad3b4871b53bb517016fbcf7c096de9"},{url:"assets/container.cb8d10da.js",revision:"b9c5ed1da9ac9846229cb5b907206d4d"},{url:"assets/createFile.793739e8.js",revision:"efb69c1f710dda49f9cff904f36e2fba"},{url:"assets/cssFormatter.09cfb18f.css",revision:"28727265c94e89315253e4cc0575f7e2"},{url:"assets/cssFormatter.898e6d79.js",revision:"7e780f14c842aeb7a169e75f8d749b18"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.95adf479.css",revision:"afec2b32ddd1f6115c3b096c645a0aeb"},{url:"assets/geoJson.a2ce22f0.js",revision:"5287bd720a559e586167d94a45994870"},{url:"assets/Home.4d5fa87d.js",revision:"a39c7e10a915df1889517a49f0cce5a1"},{url:"assets/Home.a5847ba1.css",revision:"d0c348a5226d463240b2aa42c4593889"},{url:"assets/idChinese.1c0b72c3.js",revision:"45060799fa033c210babc1773279bf67"},{url:"assets/idChinese.b0148a0e.css",revision:"c4942db9c6946999b6de9b94879dfd60"},{url:"assets/imgHosting.4fd680fa.css",revision:"5e0245d9877faee2db1d10918c111653"},{url:"assets/imgHosting.ada2a9d2.js",revision:"e7d142cb3eef01bb448454668d668c76"},{url:"assets/imgList.1cc1c0c0.js",revision:"4c74f618ef88fb2df47e8a58148c9cfa"},{url:"assets/imgList.60396a06.css",revision:"e9b5f8fa4cff705da28cf078d6ad4067"},{url:"assets/index.18e8bfc5.js",revision:"fad676340ccd20f280d056d780d552e0"},{url:"assets/index.28f6fdd0.css",revision:"530021c16a47218648ecd3e877a64827"},{url:"assets/index.290a9536.css",revision:"8c5052027b5a127fe47acc0baacd1a0c"},{url:"assets/index.2ed8fa63.js",revision:"5e9373cad0c79ffa714a21ce0ae3df75"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4ca0d3d7.css",revision:"fe3c424cbabca1f84745e79a5a62e41a"},{url:"assets/index.5206647d.css",revision:"589cb028f4240419f266e9f56af0cb20"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.5580ceba.css",revision:"af1010923cf3788ad6fca5060fb81f5f"},{url:"assets/index.5843569a.css",revision:"5436996a55235d61acce5cab474c7651"},{url:"assets/index.5b179dc2.css",revision:"d0be06cfa876e82c0277c4dfe9fdd1b4"},{url:"assets/index.6a7a0a0c.css",revision:"c793c5de73cbe7c0b3a31a793caf7251"},{url:"assets/index.74580095.css",revision:"e6690b70662d1b139d46758dab252999"},{url:"assets/index.91811f0b.js",revision:"eafda9db92d5ca0b3c4c3c32861fb2a0"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a361a67d.css",revision:"ddbdde5ecc528fb2877329a1a0299a8a"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.ae2cd6ce.js",revision:"a34956668e3033f2053ea788409ee85e"},{url:"assets/index.b56b905d.css",revision:"9cd3e5c429e0f0c592bba0f7f216f79c"},{url:"assets/index.c1ec0597.js",revision:"be13b8e9f90b0316ae6b13f843958c38"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cea2c48e.css",revision:"26c638d467ab9123e38e883de8d873e1"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.d69837cc.css",revision:"43e42d65c697c01f55ad371852a7eb97"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.e2b92ee5.js",revision:"c3c970de52ae6da88cd4c278e9ccdbf8"},{url:"assets/index.e67af7ae.js",revision:"0a1f2f8dbca5948b65abd29cd2aada79"},{url:"assets/index.eb531402.css",revision:"fd95271e6e4d5891d785b846feedf025"},{url:"assets/index.eb724f65.css",revision:"83615d4ce9bd2c94ef55c1fb97ae1446"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.879bb24e.js",revision:"9f5f28420f6e0f13335c3b2b5cde6110"},{url:"assets/jsonEditor.9e2f540b.css",revision:"63a48d62c10a7916a33b136d91cb8d87"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.d37709f2.js",revision:"46d1e386a86d93e365051f0908281843"},{url:"assets/latLng.60078518.js",revision:"194a7a03a6a53bef74f9bbb3566e9d17"},{url:"assets/latLng.c5e07b62.css",revision:"04aeaa886da5093b9bb78d60d8230625"},{url:"assets/leaflet.ChineseLayer.80e2805b.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/leaflet.ChineseLayer.c69943bc.js",revision:"0b1dd182750575eb2ae1590a6109a288"},{url:"assets/linuxCommand.92c91aad.css",revision:"ffaf8a2cf7b57bf1a77ac4937bae0e4f"},{url:"assets/linuxCommand.9ade90d2.js",revision:"480a8632b7c19bb05d13dffce830fb34"},{url:"assets/mtqLoans.93a3933f.js",revision:"cf7686603dbe59377e0b4e25405bb785"},{url:"assets/mtqLoans.e74004f7.css",revision:"d89b95b2b7b2089a042f6739882d8764"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/relationship.aa7efbb5.css",revision:"1e72d8a7031a0de47614a42c58643f83"},{url:"assets/relationship.d6b22c1e.js",revision:"54f52df29d73057ebd0c6941c521019c"},{url:"assets/screenRecord.8a91372b.js",revision:"cfdf181aaff2ba42f1f4deb22913dbfb"},{url:"assets/screenRecord.8b69fd67.css",revision:"3839cb794911d26f1d26ac6e90add1d8"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/settings.06a660d7.js",revision:"28c7b91236725b78df25ef4ab34272e0"},{url:"assets/settings.f7cc85f8.css",revision:"84075a42631044a0f7ab5d8b340844f8"},{url:"assets/timeCompute.ea93ce1d.js",revision:"4d10b060fc458ef1db25a7eb836742c4"},{url:"assets/tinyEditor.0bd57153.js",revision:"e0e52fc68e2bfdc6a56c337dfb2d961e"},{url:"assets/tinyEditor.2a000628.css",revision:"56a98c0fe577c89209191ba0e5fb6869"},{url:"assets/upload.5cfe15ac.js",revision:"775d53f328d218d5d6d05d214dea9cfd"},{url:"assets/upload.645692a5.css",revision:"7f576cdbfca7dad88d12608ae742d6f7"},{url:"assets/urlEncode.71204342.js",revision:"76179547c89edc623f182c796261d2f9"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/userAgent.f891904a.js",revision:"0628ca433f6d33830e5e615870ecf355"},{url:"assets/uuid.3e759be3.js",revision:"7094e88854b97259a5fb5b55d0688ffb"},{url:"assets/uuid.b58a557b.css",revision:"2b7b9e3c6ce4d0e6ce90887638156230"},{url:"assets/vendor.588f181b.js",revision:"f4418a72de7ab8ad449440dd76190873"},{url:"assets/vendor.6b12421d.css",revision:"74a93154091c6715a1efcf2d204e7bf4"},{url:"assets/viewSourceCode.d11d47aa.js",revision:"06ad5830ddcac1331e20ebea7556b942"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/vue-color.esm.5dcdb5a9.js",revision:"cafaf8e4fdb6019090db8790d4cb6648"},{url:"assets/watermark.2d14b3be.css",revision:"d6376ffc0545139554dec6162040be21"},{url:"assets/watermark.5cf4a8cf.js",revision:"434128ccc7468340d91939db464e533e"},{url:"assets/webssh.81ad0fc9.css",revision:"757c1ef248dab2260993aedc621e2497"},{url:"assets/webssh.971e2640.js",revision:"82b7a6726a23d2951b3acbc099300637"},{url:"assets/whatAnimeIsThis.0518a789.css",revision:"a5d467ccb33512b0d7f91d71b29d818f"},{url:"assets/whatAnimeIsThis.1ffb8bda.js",revision:"cea149f62307220eda5779fd2a3ed853"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"192cecf727bcea280cef6fedebb0a2a9"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"sitemap.xml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
