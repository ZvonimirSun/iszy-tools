if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.3e9786f7.js",revision:"d9cef563dfc061598b653f1257430ee2"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/addService.21961d09.css",revision:"15a423093fd8db5e1592f75673326436"},{url:"assets/addService.f1c3d277.js",revision:"04d9277e7e4111141bc29ffa26955367"},{url:"assets/anyRule.72219c65.css",revision:"533b72894df5fa78de9ed5bc29da33bb"},{url:"assets/anyRule.a0460355.js",revision:"48da34606e49d49f118a0d1698656e3a"},{url:"assets/bilibiliBv2av.156f190d.css",revision:"c1e121318114ded394a6093761c6ffd1"},{url:"assets/bilibiliBv2av.73390e36.js",revision:"95ffdc30b4e564945add1a2caae1b3f1"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/BingMap.a09ab349.js",revision:"8693c28715e32a377678bc7bfccc2013"},{url:"assets/cdnQuery.3ecac12d.css",revision:"168827d9e0616f97d7b44adc6f4fb595"},{url:"assets/cdnQuery.afcf7d88.js",revision:"15fb22e7b864ac592e1c9d0df9a08e0e"},{url:"assets/cesiumDemo.7cb98846.css",revision:"298104d96f3c918d11db992082bed056"},{url:"assets/cesiumDemo.ab2c3a55.js",revision:"025c17c0d99caefd2502511ac0c003ce"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.a6c32331.css",revision:"9b519cdda24b75031e35c1dd06e8d107"},{url:"assets/colorTransform.cbf240a9.js",revision:"8c39157c083b0a97ff0220100433af0c"},{url:"assets/createFile.dc5a6ec2.js",revision:"4e81cc38d30975fa0b72fbf35949cb61"},{url:"assets/cssFormatter.94eb3ef9.js",revision:"0a64626d86a4308cbcccf2eda32e15fa"},{url:"assets/cssFormatter.c0bdf252.css",revision:"a8d7570b2941528504d95de740672bc9"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.b6d3929d.css",revision:"8be4afc9834c8e6f4532b9bdb195f170"},{url:"assets/geoJson.c4bf4c29.js",revision:"65bcef75633d4cdea3abfaecad1d0a46"},{url:"assets/geoJsonEditor.851fe4ef.js",revision:"457e2c0924c74f637d2b7b8ba6735373"},{url:"assets/geoJsonEditor.d867886a.css",revision:"5d509fa34a611b1cbf2e7188cd35d4eb"},{url:"assets/Home.46d48977.js",revision:"4e17a9a57bd9b4c8c8764c04a222f625"},{url:"assets/Home.a5847ba1.css",revision:"d0c348a5226d463240b2aa42c4593889"},{url:"assets/idChinese.96f4a2dd.js",revision:"b248aa270440151fdaf745bf863829ff"},{url:"assets/idChinese.979e67e5.css",revision:"b40dcc11ad4b3bb428b22cb6b77e9c71"},{url:"assets/imgHosting.23cdb221.js",revision:"531e3e579dc8be8cd07f5eaffbf927c9"},{url:"assets/imgHosting.8fc07071.css",revision:"e2664a8e3b42f57caba8328ca9503fa7"},{url:"assets/imgList.28db3b0a.js",revision:"29b0e95f1f723b1205b1772ca7fb1d92"},{url:"assets/imgList.3de2a167.css",revision:"e65f79cd3835d0b13856c54a2dc75eec"},{url:"assets/index.156be587.js",revision:"a7505020ba71408ea58c92c868971c53"},{url:"assets/index.28f6fdd0.css",revision:"530021c16a47218648ecd3e877a64827"},{url:"assets/index.290a9536.css",revision:"8c5052027b5a127fe47acc0baacd1a0c"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4c4938c6.js",revision:"f0756281ebe50ad5f302b05a97ecd9b4"},{url:"assets/index.4c67e46a.js",revision:"e9be0cc5a9f81b6fa7a2ddb258668add"},{url:"assets/index.4ca0d3d7.css",revision:"fe3c424cbabca1f84745e79a5a62e41a"},{url:"assets/index.51a44884.js",revision:"8cb71f050455da4fd92eaff11e2f5be4"},{url:"assets/index.5206647d.css",revision:"589cb028f4240419f266e9f56af0cb20"},{url:"assets/index.5527443f.js",revision:"8b44ca11abb8270fec378e92e23d9122"},{url:"assets/index.5580ceba.css",revision:"af1010923cf3788ad6fca5060fb81f5f"},{url:"assets/index.5843569a.css",revision:"5436996a55235d61acce5cab474c7651"},{url:"assets/index.5b179dc2.css",revision:"d0be06cfa876e82c0277c4dfe9fdd1b4"},{url:"assets/index.69caa8c2.css",revision:"0e936e554860e3e1598b6169f5d6fff8"},{url:"assets/index.6a7a0a0c.css",revision:"c793c5de73cbe7c0b3a31a793caf7251"},{url:"assets/index.74580095.css",revision:"e6690b70662d1b139d46758dab252999"},{url:"assets/index.94f2d3cc.js",revision:"dc43fe63ba478d046dad21b52ceb0030"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a361a67d.css",revision:"ddbdde5ecc528fb2877329a1a0299a8a"},{url:"assets/index.b56b905d.css",revision:"9cd3e5c429e0f0c592bba0f7f216f79c"},{url:"assets/index.c0ea70a6.js",revision:"948c3ffc8843073ce38be0d8fa884a26"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.c6647a8b.css",revision:"85f54c439ae66658555d758a2c6105d8"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cea2c48e.css",revision:"26c638d467ab9123e38e883de8d873e1"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.eb531402.css",revision:"fd95271e6e4d5891d785b846feedf025"},{url:"assets/index.eb724f65.css",revision:"83615d4ce9bd2c94ef55c1fb97ae1446"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.f8aeab4f.js",revision:"2e7f52267f561dd34d967188311dcf4e"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.8a08c0f7.js",revision:"d171214f255426fffd8d17b1fbc0c452"},{url:"assets/jsonEditor.e3af2854.css",revision:"602df3b1f32ba7f7ddbdad35a5a97a91"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.8a192fae.js",revision:"e49f7a3e515359b17d1875de629477c7"},{url:"assets/latLng.8943f6d7.js",revision:"5f5a8ada87f9fbe884d4c30529571cd1"},{url:"assets/latLng.98e0641b.css",revision:"a7b2c483591b10e13e3a00e439ef0149"},{url:"assets/leaflet-src.f5a6478a.js",revision:"51e1213eca6314c66e5c1f59acb251d1"},{url:"assets/leafletMap.43a42928.js",revision:"f8db2d5e1d4bde5bc3b0a8f0e4634bb4"},{url:"assets/leafletMap.d9f3a7e1.css",revision:"bf427dc8caaef6a2e86a4536714dcc71"},{url:"assets/linuxCommand.708119ce.css",revision:"5263d2661f8bd0d63a03d059cde0110a"},{url:"assets/linuxCommand.a4d66926.js",revision:"914b896e87421b95a4a2b9bbc0d57eaf"},{url:"assets/marker-shadow.1e6cfa9a.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/marker-shadow.f50e6270.js",revision:"bd188912cbae472aac78e0b1892b856f"},{url:"assets/mtqLoans.9525cc65.js",revision:"317664513a0c8491eb4ac0fbf08d89b5"},{url:"assets/mtqLoans.cff59d79.css",revision:"8e33194a567055c2354336909ad37d57"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/propertyTable.022c3724.js",revision:"6159568d4a003391864cf167e069bf80"},{url:"assets/propertyTable.2a3fe485.css",revision:"dc62c5f37ba5f03d6d724a834635e055"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/relationship.020a77a2.js",revision:"32d641907fc145c7978fef8ab93e26bc"},{url:"assets/relationship.39f08a55.css",revision:"d80d23b477744401031e690c137f2ce4"},{url:"assets/screenRecord.3765638c.js",revision:"d4adc9e47c9e0d0bd40234d6ddca7a85"},{url:"assets/screenRecord.ba457fcb.css",revision:"fd8e3ea4637296c83ed249bf07a7dea5"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/settings.2bccae24.js",revision:"0f502b337a5696ccbef1456202a4d939"},{url:"assets/settings.f7cc85f8.css",revision:"84075a42631044a0f7ab5d8b340844f8"},{url:"assets/timeCompute.c6c01006.js",revision:"226b9cfde01994138afb8221747519b8"},{url:"assets/tinyEditor.5e3e9906.js",revision:"681e8fb0f886956a0693342da3c942cc"},{url:"assets/tinyEditor.be937d69.css",revision:"f770673f3b2a6a0313c246aba4b76227"},{url:"assets/upload.ccfe40b2.js",revision:"4cda1839ae0b5c1d9f4c5e87a7e6ce98"},{url:"assets/upload.d429f31f.css",revision:"b0ad22e084e5d464aa50f9a2c37b7d22"},{url:"assets/urlEncode.6052a79f.css",revision:"530a188af97f9b67f4eea4071f3e9905"},{url:"assets/urlEncode.d4d32038.js",revision:"3ba7ad72947cdb777dc5d6d59003726f"},{url:"assets/userAgent.c22dc7ba.js",revision:"414d0f0585be413d88d20df075b250f0"},{url:"assets/uuid.5ee643fa.css",revision:"d4743e677409a2bf31ad407c68cc3d55"},{url:"assets/uuid.ad78efd8.js",revision:"c3d8438336c20ed6c8dd715b8ff6508e"},{url:"assets/vendor.6b12421d.css",revision:"74a93154091c6715a1efcf2d204e7bf4"},{url:"assets/vendor.af973e49.js",revision:"a808e776b79d45e8d4baae9c3a793b85"},{url:"assets/viewSourceCode.1735bf2a.js",revision:"4978faba107a4fb3fb4560ba6125b364"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/vue-codemirror.415d77a5.js",revision:"4c65cda28da5ce9042c9849da65d31b2"},{url:"assets/vue-codemirror.bdfb82c5.css",revision:"79a2f041952b504dfc4babcd3e8f8ac0"},{url:"assets/watermark.abc719cf.css",revision:"01035e9e89a8a23e68afee81a0626793"},{url:"assets/watermark.fac850ff.js",revision:"907436c77128a8312aaab68dce9bae1f"},{url:"assets/webssh.1f728a2d.css",revision:"f4c90dee22805c733fa55062af7b688d"},{url:"assets/webssh.705a771e.js",revision:"ff2941f227bbfded6d5ce1babfd349c6"},{url:"assets/whatAnimeIsThis.2d702a6f.js",revision:"f955b075cd327fabf4647488a4b60fef"},{url:"assets/whatAnimeIsThis.b2df7412.css",revision:"70a841a907a54422687c265e0532b3d2"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"f80dc88f9813826a7abe9ee288d177d1"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"sitemap.xml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
