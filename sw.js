if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/3dView.22654e1b.js",revision:"7897172176d1db3671ca1dbaf6cdf15d"},{url:"assets/3dView.7905238b.css",revision:"48a64e72cb404e1491d1409e73dee7f8"},{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.15b0902b.js",revision:"d0272f4e874abd655f18b64a7d2d9750"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/addService.21961d09.css",revision:"15a423093fd8db5e1592f75673326436"},{url:"assets/addService.7aecdebf.js",revision:"7e1a92b0d1205a987885b5eb9c6a75e4"},{url:"assets/anyRule.6962804a.js",revision:"3a8bffdf7ac4641f2cfe35a1e1afccc1"},{url:"assets/anyRule.72219c65.css",revision:"533b72894df5fa78de9ed5bc29da33bb"},{url:"assets/bilibiliBv2av.156f190d.css",revision:"c1e121318114ded394a6093761c6ffd1"},{url:"assets/bilibiliBv2av.262adea5.js",revision:"2b2662fecbf58a908107fc302cb60efb"},{url:"assets/BingMap.4e2eef9e.js",revision:"299671b82aa019cf65a5d9dda44d74e0"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/cdnQuery.15330a18.js",revision:"949381676b30d44a4dfbe8b2cd2df6ca"},{url:"assets/cdnQuery.3ecac12d.css",revision:"168827d9e0616f97d7b44adc6f4fb595"},{url:"assets/cesiumDemo.16e98b50.js",revision:"8de8135c1ca3bb5e39eab1fc1b7b5e43"},{url:"assets/cesiumDemo.f4395a85.css",revision:"2fdc16eb6ccd2e742e81d4c211409ff0"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.2a76857c.js",revision:"cb4e620ae1035aabed5863bb77c0c8f9"},{url:"assets/colorTransform.a6c32331.css",revision:"9b519cdda24b75031e35c1dd06e8d107"},{url:"assets/createFile.81387455.js",revision:"df55c9b416410598310c9af70cb41192"},{url:"assets/cssFormatter.0d8f01a5.js",revision:"933e80b36ada64e149b699ffac1e3493"},{url:"assets/cssFormatter.c0bdf252.css",revision:"a8d7570b2941528504d95de740672bc9"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.4350aac9.css",revision:"a49a52b67182be67d91eff71dbb7f512"},{url:"assets/geoJson.c77c5e31.js",revision:"68d2b1b0ab771bd2eba9ac008a4964ed"},{url:"assets/geoJsonEditor.a9d88013.js",revision:"58e6249268d583d363fad447bff876d0"},{url:"assets/geoJsonEditor.d867886a.css",revision:"5d509fa34a611b1cbf2e7188cd35d4eb"},{url:"assets/Home.211f9a00.js",revision:"71063ac549e8ef2820faae578002af18"},{url:"assets/Home.a5847ba1.css",revision:"d0c348a5226d463240b2aa42c4593889"},{url:"assets/idChinese.979e67e5.css",revision:"b40dcc11ad4b3bb428b22cb6b77e9c71"},{url:"assets/idChinese.cd0cae48.js",revision:"68175c045681ff945eb6cad9001646aa"},{url:"assets/imgHosting.8fc07071.css",revision:"e2664a8e3b42f57caba8328ca9503fa7"},{url:"assets/imgHosting.91fee38e.js",revision:"a6e4de8ebea2a058ea6b46b8513835e8"},{url:"assets/imgList.56c01f82.css",revision:"c82523450e31539274872db9201f1473"},{url:"assets/imgList.f354d527.js",revision:"7a9993b97a2a34b23a3a293773ffd72b"},{url:"assets/index.07445526.js",revision:"64b5a32143f9e019a6c27a9e998ceaf8"},{url:"assets/index.28f6fdd0.css",revision:"530021c16a47218648ecd3e877a64827"},{url:"assets/index.290a9536.css",revision:"8c5052027b5a127fe47acc0baacd1a0c"},{url:"assets/index.40d52ef0.js",revision:"64ef69bb769f68952ac2ca68895b1e2c"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4ca0d3d7.css",revision:"fe3c424cbabca1f84745e79a5a62e41a"},{url:"assets/index.5206647d.css",revision:"589cb028f4240419f266e9f56af0cb20"},{url:"assets/index.5527443f.js",revision:"8b44ca11abb8270fec378e92e23d9122"},{url:"assets/index.5580ceba.css",revision:"af1010923cf3788ad6fca5060fb81f5f"},{url:"assets/index.580dfa12.js",revision:"827140b99ae352eecae52dc5fb74e5b6"},{url:"assets/index.5b179dc2.css",revision:"d0be06cfa876e82c0277c4dfe9fdd1b4"},{url:"assets/index.69caa8c2.css",revision:"0e936e554860e3e1598b6169f5d6fff8"},{url:"assets/index.70a12bd8.css",revision:"5353f15db7fba3bbe1cdd140008533ce"},{url:"assets/index.74580095.css",revision:"e6690b70662d1b139d46758dab252999"},{url:"assets/index.7554cd06.js",revision:"cdd9311d221fbe4d32fb7339ea1edc50"},{url:"assets/index.83d031db.js",revision:"88984775fccbc4ae61219c93af2dfa0a"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a361a67d.css",revision:"ddbdde5ecc528fb2877329a1a0299a8a"},{url:"assets/index.b56b905d.css",revision:"9cd3e5c429e0f0c592bba0f7f216f79c"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.cc64b8ef.css",revision:"22201ff389f45206046c4a8590e3618f"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cf8900dc.js",revision:"3af3eca6d09fb0f56d2adf1bcd5cbb91"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.eb531402.css",revision:"fd95271e6e4d5891d785b846feedf025"},{url:"assets/index.eb724f65.css",revision:"83615d4ce9bd2c94ef55c1fb97ae1446"},{url:"assets/index.f2f85627.js",revision:"143181fb8230f12516df6a972f218d1a"},{url:"assets/index.f4633b46.css",revision:"e383db07cfcfffcaccd5247bd1a9db04"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.c2c46191.js",revision:"880f2fa4c0a1737a18a24843575c5307"},{url:"assets/jsonEditor.e536d248.css",revision:"d3cb5ebc08b98a5a44e4dd94d3cf0596"},{url:"assets/jsoneditor.min.268a8530.js",revision:"fc77d0425d2ff3d18992788050433fe8"},{url:"assets/jsoneditor.min.4e4eaa4b.css",revision:"5eda4051a59e59c45eea6f76a6702a9c"},{url:"assets/latLng.55340d67.js",revision:"0a7dd51353ebd68f5667ce80733a2e3b"},{url:"assets/latLng.9b752f91.css",revision:"4ad74ece148e9376519889007b4b9757"},{url:"assets/leaflet-src.88b17289.js",revision:"6c6f9cff8db0559f6c0ec4d6d5bac977"},{url:"assets/leafletMap.9b01441d.js",revision:"09c32bcba2ed99c29d26d5415321afdf"},{url:"assets/leafletMap.d9f3a7e1.css",revision:"bf427dc8caaef6a2e86a4536714dcc71"},{url:"assets/linuxCommand.708119ce.css",revision:"5263d2661f8bd0d63a03d059cde0110a"},{url:"assets/linuxCommand.b8c63542.js",revision:"9e489f2eedf20d2eee638e1706d4da23"},{url:"assets/marker-shadow.1e6cfa9a.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/marker-shadow.7c02cedb.js",revision:"083a5e5bc932946e5531af641f6bf37b"},{url:"assets/mtqLoans.c8e0a0c8.js",revision:"c26af354820fea1e6df208ba30d2124c"},{url:"assets/mtqLoans.cff59d79.css",revision:"8e33194a567055c2354336909ad37d57"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/propertyTable.2a3fe485.css",revision:"dc62c5f37ba5f03d6d724a834635e055"},{url:"assets/propertyTable.b122cfc3.js",revision:"fe5143f4e93edc3141e1b565f0f823d3"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/relationship.39f08a55.css",revision:"d80d23b477744401031e690c137f2ce4"},{url:"assets/relationship.83bf62af.js",revision:"c67bc0e3574ffba64e093b018e7dfd45"},{url:"assets/screenRecord.ba457fcb.css",revision:"fd8e3ea4637296c83ed249bf07a7dea5"},{url:"assets/screenRecord.e180bd8a.js",revision:"827c8ca8c50f98b84f37e37f85c257c0"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/settings.222b8385.css",revision:"a87aa9b7890cdd0e8b4e1d6c6c0e6eae"},{url:"assets/settings.39a06c6a.js",revision:"c792c995cea9ba36e14a0668ed85e329"},{url:"assets/timeCompute.356c8fa3.js",revision:"018ae2571e67792f01b39b36017fba0e"},{url:"assets/tinycolor.4227ddcb.js",revision:"6f68d151c0b53828075137ad07e6f396"},{url:"assets/tinyEditor.40fb3c4d.js",revision:"b28330cf170115899fba5759ac3c971a"},{url:"assets/tinyEditor.be937d69.css",revision:"f770673f3b2a6a0313c246aba4b76227"},{url:"assets/upload.9deff44f.js",revision:"b22e5def987c5e07c631a63c9c2dc308"},{url:"assets/upload.d429f31f.css",revision:"b0ad22e084e5d464aa50f9a2c37b7d22"},{url:"assets/urlEncode.6052a79f.css",revision:"530a188af97f9b67f4eea4071f3e9905"},{url:"assets/urlEncode.6bac6d9b.js",revision:"836aad5793dbbb4add990c9496d5eacd"},{url:"assets/userAgent.9e368293.js",revision:"8dca2cadafba10fe545f8e7ba0b258a9"},{url:"assets/uuid.1a98c1fe.js",revision:"d8eb71032b1ef056a9a2f261ad64d5a7"},{url:"assets/uuid.5ee643fa.css",revision:"d4743e677409a2bf31ad407c68cc3d55"},{url:"assets/vendor.23168bc2.js",revision:"3a3619d6e8a88ddfdd5531f384aedc06"},{url:"assets/vendor.e84c84a4.css",revision:"938bc6c58d7d274dc81caaebf23bfc49"},{url:"assets/viewSourceCode.2b215e98.js",revision:"c8afd6c379300f7ea0a7ceee60803cdb"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/vue-codemirror.b2f85a52.js",revision:"faa85c94635d2d48da518c35a693d280"},{url:"assets/vue-codemirror.bdfb82c5.css",revision:"79a2f041952b504dfc4babcd3e8f8ac0"},{url:"assets/watermark.1dc0484d.js",revision:"cd3b78a93233de3b36d0365dffbc77a7"},{url:"assets/watermark.abc719cf.css",revision:"01035e9e89a8a23e68afee81a0626793"},{url:"assets/webssh.7c495dcf.css",revision:"0ac4206dd4a3dc5e565a6c7f4b9f26f3"},{url:"assets/webssh.cbfd8b7c.js",revision:"7184cdcd95bc6438cb04611c6c14e880"},{url:"assets/whatAnimeIsThis.027a5931.js",revision:"a06a57a63cea31e2229c6b4797258f6c"},{url:"assets/whatAnimeIsThis.b2df7412.css",revision:"70a841a907a54422687c265e0532b3d2"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"1c5918897de068933156132164d53fbd"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"sitemap.xml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
