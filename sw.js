if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/3dView.1241fb32.js",revision:"38bb731f9db9e2594a3a466e4a95e596"},{url:"assets/3dView.7905238b.css",revision:"48a64e72cb404e1491d1409e73dee7f8"},{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/404.c24fdf79.js",revision:"5d4b42698775a241fb2fcdbc1ecc635b"},{url:"assets/addService.21961d09.css",revision:"15a423093fd8db5e1592f75673326436"},{url:"assets/addService.cab0e68a.js",revision:"3b94a91e48a20f736f6eb77c322a4164"},{url:"assets/anyRule.207d52d5.js",revision:"1c4f3e92722324c6567f6328fb6b2219"},{url:"assets/anyRule.72219c65.css",revision:"533b72894df5fa78de9ed5bc29da33bb"},{url:"assets/bilibiliBv2av.156f190d.css",revision:"c1e121318114ded394a6093761c6ffd1"},{url:"assets/bilibiliBv2av.3509c163.js",revision:"128d0ec2f277ed5e33299032083e141e"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/BingMap.a03f304f.js",revision:"284e5decf2711c1a449630b1dcff027d"},{url:"assets/cdnQuery.3ecac12d.css",revision:"168827d9e0616f97d7b44adc6f4fb595"},{url:"assets/cdnQuery.c926f0ef.js",revision:"67ae33a758d1df3d9aca28d41874a514"},{url:"assets/cesiumDemo.49ce23b7.js",revision:"0511ab26fa992622589598b5b5fbf81c"},{url:"assets/cesiumDemo.f4395a85.css",revision:"2fdc16eb6ccd2e742e81d4c211409ff0"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.a6c32331.css",revision:"9b519cdda24b75031e35c1dd06e8d107"},{url:"assets/colorTransform.a930fdc2.js",revision:"9b13fa7e149c7a34a631e4c6ae6154f9"},{url:"assets/createFile.81387455.js",revision:"df55c9b416410598310c9af70cb41192"},{url:"assets/cssFormatter.05e06e1f.js",revision:"06468e006e74019d85bcac42bb30db2b"},{url:"assets/cssFormatter.c0bdf252.css",revision:"a8d7570b2941528504d95de740672bc9"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.4350aac9.css",revision:"a49a52b67182be67d91eff71dbb7f512"},{url:"assets/geoJson.fb3f939f.js",revision:"7179b9e33a32c668adc567649fcd83a3"},{url:"assets/geoJsonEditor.cc531139.js",revision:"f0fd9ec7a090308c62eb2b637351a404"},{url:"assets/geoJsonEditor.d867886a.css",revision:"5d509fa34a611b1cbf2e7188cd35d4eb"},{url:"assets/Home.a5847ba1.css",revision:"d0c348a5226d463240b2aa42c4593889"},{url:"assets/Home.b8ccc694.js",revision:"9b5af3adc56c3d2288cf0c7cd74f679e"},{url:"assets/idChinese.1738bda6.js",revision:"50a542c409e83bf5b66b4197d839778a"},{url:"assets/idChinese.979e67e5.css",revision:"b40dcc11ad4b3bb428b22cb6b77e9c71"},{url:"assets/imgHosting.8fc07071.css",revision:"e2664a8e3b42f57caba8328ca9503fa7"},{url:"assets/imgHosting.f5b26a24.js",revision:"62a6a3e53efbb2b9b0e7e3bd1af5135c"},{url:"assets/imgList.3de2a167.css",revision:"e65f79cd3835d0b13856c54a2dc75eec"},{url:"assets/imgList.8f3284f7.js",revision:"180af6a2afb35e243e8579c7af62e495"},{url:"assets/index.12180b7d.css",revision:"260728695780e4debe9db979f50edc6e"},{url:"assets/index.276d096e.js",revision:"243c52441e79267ad5b8a470e708c2d3"},{url:"assets/index.28f6fdd0.css",revision:"530021c16a47218648ecd3e877a64827"},{url:"assets/index.290a9536.css",revision:"8c5052027b5a127fe47acc0baacd1a0c"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4ca0d3d7.css",revision:"fe3c424cbabca1f84745e79a5a62e41a"},{url:"assets/index.5206647d.css",revision:"589cb028f4240419f266e9f56af0cb20"},{url:"assets/index.5527443f.js",revision:"8b44ca11abb8270fec378e92e23d9122"},{url:"assets/index.5580ceba.css",revision:"af1010923cf3788ad6fca5060fb81f5f"},{url:"assets/index.5b179dc2.css",revision:"d0be06cfa876e82c0277c4dfe9fdd1b4"},{url:"assets/index.60a62d54.js",revision:"6b2367396ceaf038385108623f3b6d0e"},{url:"assets/index.69caa8c2.css",revision:"0e936e554860e3e1598b6169f5d6fff8"},{url:"assets/index.6ab8854b.js",revision:"370a5f3567fa1f02a1dface34a3cc98f"},{url:"assets/index.74580095.css",revision:"e6690b70662d1b139d46758dab252999"},{url:"assets/index.7554cd06.js",revision:"cdd9311d221fbe4d32fb7339ea1edc50"},{url:"assets/index.75c5ca47.js",revision:"cce0cc16373e4ecfa73188da046e4b37"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a361a67d.css",revision:"ddbdde5ecc528fb2877329a1a0299a8a"},{url:"assets/index.b0de2fee.js",revision:"fb6192384b58793f720f06cd9a8bb563"},{url:"assets/index.b56b905d.css",revision:"9cd3e5c429e0f0c592bba0f7f216f79c"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.cc64b8ef.css",revision:"22201ff389f45206046c4a8590e3618f"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cea2c48e.css",revision:"26c638d467ab9123e38e883de8d873e1"},{url:"assets/index.d0f3da7b.js",revision:"f93144d68e0a2781b8dbddd4befc2cc2"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.eb531402.css",revision:"fd95271e6e4d5891d785b846feedf025"},{url:"assets/index.eb724f65.css",revision:"83615d4ce9bd2c94ef55c1fb97ae1446"},{url:"assets/index.f4633b46.css",revision:"e383db07cfcfffcaccd5247bd1a9db04"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.9460cf59.css",revision:"15ad7354979f44ff2eaa8df10ccf891b"},{url:"assets/jsonEditor.a3cd2ba6.js",revision:"0d99cc794753b96afa01a1d5e4872cd6"},{url:"assets/jsoneditor.min.268a8530.js",revision:"fc77d0425d2ff3d18992788050433fe8"},{url:"assets/jsoneditor.min.4e4eaa4b.css",revision:"5eda4051a59e59c45eea6f76a6702a9c"},{url:"assets/latLng.8ae8daed.js",revision:"51c107b5fda1529b18bb7e3b8c93c956"},{url:"assets/latLng.9b752f91.css",revision:"4ad74ece148e9376519889007b4b9757"},{url:"assets/leaflet-src.88b17289.js",revision:"6c6f9cff8db0559f6c0ec4d6d5bac977"},{url:"assets/leafletMap.d9f3a7e1.css",revision:"bf427dc8caaef6a2e86a4536714dcc71"},{url:"assets/leafletMap.e18f26ca.js",revision:"e4ec16578090118c2279eaf3f657afb7"},{url:"assets/linuxCommand.708119ce.css",revision:"5263d2661f8bd0d63a03d059cde0110a"},{url:"assets/linuxCommand.b0cfe3ae.js",revision:"dfa4c0c49ff54992fc8f250483a1dcb5"},{url:"assets/marker-shadow.1e6cfa9a.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/marker-shadow.7c02cedb.js",revision:"083a5e5bc932946e5531af641f6bf37b"},{url:"assets/mtqLoans.66f14d1c.js",revision:"120b091c9570fc62c6487b8da9a1f46f"},{url:"assets/mtqLoans.cff59d79.css",revision:"8e33194a567055c2354336909ad37d57"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/propertyTable.2a3fe485.css",revision:"dc62c5f37ba5f03d6d724a834635e055"},{url:"assets/propertyTable.a6164776.js",revision:"9b3490042638f17ffdf557228e3de0d4"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/relationship.38be6e66.js",revision:"7ea02a3375a592512a152163c01eeff9"},{url:"assets/relationship.39f08a55.css",revision:"d80d23b477744401031e690c137f2ce4"},{url:"assets/screenRecord.1dea0af8.js",revision:"60761e93de4dc956c6287ad2655b00ab"},{url:"assets/screenRecord.ba457fcb.css",revision:"fd8e3ea4637296c83ed249bf07a7dea5"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/settings.3aef1589.js",revision:"4dd82ec8a12ec9812fa11d43ad0e0e63"},{url:"assets/settings.f7cc85f8.css",revision:"84075a42631044a0f7ab5d8b340844f8"},{url:"assets/timeCompute.1a0b6c1d.js",revision:"a154a75b137adf23d2896778d1c34d2c"},{url:"assets/tinycolor.4227ddcb.js",revision:"6f68d151c0b53828075137ad07e6f396"},{url:"assets/tinyEditor.97338f03.js",revision:"578ed5bf21587a692c22bea05a39449c"},{url:"assets/tinyEditor.be937d69.css",revision:"f770673f3b2a6a0313c246aba4b76227"},{url:"assets/upload.8abf2937.js",revision:"9c4302bf904be6bbb7517ddb44bd9d85"},{url:"assets/upload.d429f31f.css",revision:"b0ad22e084e5d464aa50f9a2c37b7d22"},{url:"assets/urlEncode.6052a79f.css",revision:"530a188af97f9b67f4eea4071f3e9905"},{url:"assets/urlEncode.77925ec5.js",revision:"3c152696ef0b0875a8458ed9bc7ca6d5"},{url:"assets/userAgent.98e78b00.js",revision:"0af9f5533a017a3ab1ea79cbb22684b1"},{url:"assets/uuid.5ee643fa.css",revision:"d4743e677409a2bf31ad407c68cc3d55"},{url:"assets/uuid.b1234b91.js",revision:"e481f83705518c9a27488438b37bb263"},{url:"assets/vendor.23168bc2.js",revision:"3a3619d6e8a88ddfdd5531f384aedc06"},{url:"assets/vendor.e84c84a4.css",revision:"938bc6c58d7d274dc81caaebf23bfc49"},{url:"assets/viewSourceCode.4675e4ef.js",revision:"1d8a0045ec634785e92d81fe6c6a94d3"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/vue-codemirror.50ff5fee.js",revision:"7db57ea5942082969fc66c07eefb3e8c"},{url:"assets/vue-codemirror.bdfb82c5.css",revision:"79a2f041952b504dfc4babcd3e8f8ac0"},{url:"assets/watermark.abc719cf.css",revision:"01035e9e89a8a23e68afee81a0626793"},{url:"assets/watermark.d77cc41b.js",revision:"5f8959baf8b3de74f79530bc4dad049a"},{url:"assets/webssh.7c495dcf.css",revision:"0ac4206dd4a3dc5e565a6c7f4b9f26f3"},{url:"assets/webssh.b24f7d64.js",revision:"17a1c11c93d2405d15ed483ae3c1720d"},{url:"assets/whatAnimeIsThis.ae91d6ed.js",revision:"4edf58dd41fcb177de18cc3702ca2dc2"},{url:"assets/whatAnimeIsThis.b2df7412.css",revision:"70a841a907a54422687c265e0532b3d2"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"60be1ecb7f74459b255b601c0fc33c37"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"sitemap.xml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
