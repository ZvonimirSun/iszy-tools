if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/404.df7826a9.js",revision:"7be74ec205b2d42fce59ec7bdb959318"},{url:"assets/anyRule.1731feab.js",revision:"03307a32f7485415c4a6c63059e758ad"},{url:"assets/anyRule.4cef944b.css",revision:"f6b06e729ca957859aabcaa90a6d1b01"},{url:"assets/bilibiliBv2av.168a5ce5.js",revision:"83d98b63698e33381600d26dd4066ae8"},{url:"assets/bilibiliBv2av.b32660ce.css",revision:"3df7bce5804ceb2a9f62e9a5580743aa"},{url:"assets/BingMap.37b9ca5c.js",revision:"d31e0fcd8fa74d5d6fd5d8f1f60e9c32"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/cesiumDemo.1f0f0351.css",revision:"16d0dd149f4966e94e7dfbf108ac4779"},{url:"assets/cesiumDemo.6a452a26.js",revision:"014af71418ec6b4d5609e6a04b1b6faa"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.d20f76ed.js",revision:"caf0ca407853b02c526665cf637a21a2"},{url:"assets/container.25a00a02.css",revision:"7ad3b4871b53bb517016fbcf7c096de9"},{url:"assets/container.9dac67eb.js",revision:"fb68c9e30e6517a45f71f31c1d17f1c5"},{url:"assets/cssFormatter.09cfb18f.css",revision:"28727265c94e89315253e4cc0575f7e2"},{url:"assets/cssFormatter.ea2b0e44.js",revision:"5df01bbce559c3ddfcbf28f211be48c3"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.0ea59133.js",revision:"b532549554b17f6e2ced53070eaac862"},{url:"assets/geoJson.95adf479.css",revision:"afec2b32ddd1f6115c3b096c645a0aeb"},{url:"assets/Home.18dbe5f4.js",revision:"687d5921be9fe74e3413bc9034416f49"},{url:"assets/Home.fc6f184e.css",revision:"64583760823c896c0f8d8489ff10a00f"},{url:"assets/idChinese.225a174f.js",revision:"9bb81550a13268077cb12cf7b1d9120d"},{url:"assets/idChinese.cba22c6e.css",revision:"9ee50416c8a047b8a1539d33b4c7e8a3"},{url:"assets/imgHosting.7a926b19.css",revision:"49f5c79ed486e58202533590fa41c77a"},{url:"assets/imgHosting.f4994b54.js",revision:"34013d60bd2fbbc087e04017340d4cab"},{url:"assets/index.04fcf9fa.js",revision:"e31a9da7c3a4fc15dc195e2badcbe3bc"},{url:"assets/index.10486d67.css",revision:"4feca6dbd5aba3f23f78c819f1e77e73"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.53456b41.js",revision:"883e6c53c1765322545e4d6d5102cd08"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.6a7a0a0c.css",revision:"c793c5de73cbe7c0b3a31a793caf7251"},{url:"assets/index.74c10e66.js",revision:"c4c09942e89b903c4e7a95b7bffa0a55"},{url:"assets/index.795094c8.js",revision:"f2fb1e28975e36240a11824c88309e37"},{url:"assets/index.83f533f5.js",revision:"a5c256a19ffc1c7775aa37782b4f44f5"},{url:"assets/index.8cb619a4.css",revision:"db7c3efe43a16bb31a055271bcbf8392"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.d4a2eb76.js",revision:"de170812f06193539d538e49e89e9e38"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.edca0429.js",revision:"d5146b47778ca089ebed5249a8e2cd93"},{url:"assets/index.f31914a0.css",revision:"1f59538c57e2ab640fd477bf4469ce0b"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.5a78c1a8.js",revision:"4a28e8e5767a4bf3b2e402f86466cdc5"},{url:"assets/jsonEditor.a127ee54.css",revision:"f99421fca4c58476a3a59135743753fa"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.62f62196.js",revision:"080e51cd3eb2562082bd3d6e529d4376"},{url:"assets/latLng.ad359c64.js",revision:"2fabd09ac155221c1bea351a7abfa485"},{url:"assets/latLng.f5a211df.css",revision:"094f76a935376d4adb20c2b89886ad41"},{url:"assets/layers-2x.066daca8.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"assets/layers.1dbbe9d0.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"assets/leaflet.ChineseLayer.70a0e2fd.css",revision:"930989ebd3dabbdd5923ad7c9446b608"},{url:"assets/leaflet.ChineseLayer.d3d94d75.js",revision:"9b07ac405db0d485262096d4008ed777"},{url:"assets/linuxCommand.34ce53fc.js",revision:"d57ee8d1bf5b939c4b1c6edff6ba6cb6"},{url:"assets/linuxCommand.e7ff6d5a.css",revision:"5610153318b6d2b7a2116f001cb72da9"},{url:"assets/marker-icon.574c3a5c.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"assets/marker-shadow.264f5c64.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/mtqLoans.f2f06f06.js",revision:"c7d169940537c1f85c0374735545d46b"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/random.8cac1d72.png",revision:"2f86e3df693238bb2e3721e7e55b77d1"},{url:"assets/screenRecord.4a1ba428.js",revision:"e7ad42ad0d41b3ad15ead5ec79bceb39"},{url:"assets/screenRecord.4eceb4d3.css",revision:"dd914f2e4b7727b9a26d474cffe22092"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/timeCompute.2f659a08.js",revision:"4f265b0d7915e9f0cb531ca7f6fa9211"},{url:"assets/tinyEditor.36146ce3.css",revision:"cbe9ca6e8f14c84c329cec2501bcaf61"},{url:"assets/tinyEditor.dc54b595.js",revision:"c940aa781b3baef09fc3010352498865"},{url:"assets/urlEncode.8f7e69e6.js",revision:"6dad058d5db271ecbca8e32671574ca3"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.a488c947.js",revision:"c6edf760da645babc20f4338a7ae45a7"},{url:"assets/v4.7ebacdd7.js",revision:"c13fec497dfc02ec5c9bc92fe86cf46a"},{url:"assets/vendor.39655019.css",revision:"2a5a1e6ce16edf08a0c0822af8964cd0"},{url:"assets/vendor.562cc7dd.js",revision:"554cf9e37f184f00d91be948e45e502c"},{url:"assets/viewSourceCode.55474034.js",revision:"9020fef97bfde374465afa519d31a215"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis.33991b33.css",revision:"755020e8edb5b74aa83d9184247f60a2"},{url:"assets/whatAnimeIsThis.bda70065.js",revision:"9c950ad688609dbc9531bd62c11ae57e"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"6a3e81a6da8bffc98b227bae7d443baf"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
