if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-3c841c20"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404_cloud.98e7ac66.png",revision:"0f4bc32b0f52f7cfb7d19305a6517724"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.538aa4d7.png",revision:"a57b6f31fa77c50f14d756711dea4158"},{url:"assets/404.a331f388.js",revision:"1f04190c72b95c93f8708df65fecb8de"},{url:"assets/bilibiliBv2av.488a29ae.js",revision:"d206b4e897527a055265ca0099a5fcde"},{url:"assets/bilibiliBv2av.b32660ce.css",revision:"3df7bce5804ceb2a9f62e9a5580743aa"},{url:"assets/BingMap.2789d5df.js",revision:"27c6a26119acc6d6af6740e2e9fe1a0f"},{url:"assets/BingMap.754257c7.css",revision:"5bb4d382cf244a6497bb75fe9c50b8d5"},{url:"assets/cesiumDemo.1f0f0351.css",revision:"16d0dd149f4966e94e7dfbf108ac4779"},{url:"assets/cesiumDemo.df195e59.js",revision:"896fc359a8991f1d68417e879cf4af29"},{url:"assets/ClearSans-Bold-webfont.820a4c29.eot",revision:"92a9c29a5c673efec034d61617369a37"},{url:"assets/ClearSans-Bold-webfont.a669c919.svg",revision:"637ed43d88cc8d27eb7390d16e8413ca"},{url:"assets/ClearSans-Bold-webfont.b16e36cc.woff",revision:"8e55742896553de18fbed1a44baf1d79"},{url:"assets/ClearSans-Light-webfont.465697ff.woff",revision:"930193fff909a5f270126f7b1c885268"},{url:"assets/ClearSans-Light-webfont.5080487c.svg",revision:"f6a8d8d7f680d9eef1f499a8ebcedd87"},{url:"assets/ClearSans-Light-webfont.77ef51b0.eot",revision:"43f90ca76c3585fc286161208be42ca4"},{url:"assets/ClearSans-Regular-webfont.4d1fe136.eot",revision:"207557cd41a54883b13627dcfd0240aa"},{url:"assets/ClearSans-Regular-webfont.5d7fbc7a.svg",revision:"067209713c5d920e1b705e13bd290559"},{url:"assets/ClearSans-Regular-webfont.8c94cd2f.woff",revision:"051b44622bff6697c5591a681f33eb6a"},{url:"assets/colorTransform.5b337a4a.js",revision:"b3fb3dc7428a37ffe1b2bb12acca6489"},{url:"assets/container.35c5d4bb.js",revision:"fc03c5cadac485e66aa07689f14611c1"},{url:"assets/container.62ecfe9b.css",revision:"33dfc1c73f9c80b823cee213f8d74661"},{url:"assets/cssFormatter.09cfb18f.css",revision:"28727265c94e89315253e4cc0575f7e2"},{url:"assets/cssFormatter.5399ebf1.js",revision:"f262e5c441484185568a46d94aad9820"},{url:"assets/DS-DIGI.87eb14d4.TTF",revision:"63f874d192fb3892d88d5e26f942b5e2"},{url:"assets/DS-DIGIB.db992dcd.TTF",revision:"1467e2d37ec60cc50117a8db7c24f626"},{url:"assets/DS-DIGII.7402d935.TTF",revision:"8e8e625f12e45ecc674f9579c4547351"},{url:"assets/DS-DIGIT.4d330a54.TTF",revision:"223f224650510797e0f06233d2a0f97b"},{url:"assets/geoJson.014771e8.css",revision:"730e609fe139aba2ed8176f3f770e410"},{url:"assets/geoJson.287b7050.js",revision:"40cc4738f308d0c084461b17fb4cdc64"},{url:"assets/Home.55f954d6.js",revision:"3d984e786dcbd257cfb1bce24731f59b"},{url:"assets/Home.fc6f184e.css",revision:"64583760823c896c0f8d8489ff10a00f"},{url:"assets/idChinese.cba22c6e.css",revision:"9ee50416c8a047b8a1539d33b4c7e8a3"},{url:"assets/idChinese.f934a2e6.js",revision:"e927531ec26ad1ca9cc3a98b7213f778"},{url:"assets/imgHosting.174ff740.js",revision:"b32f0856fc42afc126844b728a81a9d6"},{url:"assets/imgHosting.7a926b19.css",revision:"49f5c79ed486e58202533590fa41c77a"},{url:"assets/index.056c936c.js",revision:"a8bb1be3de5649f2c3bd838dc97fce67"},{url:"assets/index.10486d67.css",revision:"4feca6dbd5aba3f23f78c819f1e77e73"},{url:"assets/index.202ad6bb.js",revision:"9c30d25ccf8009213cd54ebb0f14b3bd"},{url:"assets/index.3a094ce6.js",revision:"b11aa8e61aa7dc4e0db66132928ffe4b"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.5eb180cb.js",revision:"b64c9158eed525f006c6829a903bc1ce"},{url:"assets/index.6a7a0a0c.css",revision:"c793c5de73cbe7c0b3a31a793caf7251"},{url:"assets/index.8cb619a4.css",revision:"db7c3efe43a16bb31a055271bcbf8392"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.a133afbf.css",revision:"16bc6856df8abaf34cda9794ec132759"},{url:"assets/index.a20867fc.js",revision:"36ec57c3893975e244157e910c1758b7"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c64f5e8c.css",revision:"59b66cdecc7de6d134b5fb5fad0fc4e9"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.de35d31b.js",revision:"2a449ae7a6f57d255d18072a27ce121f"},{url:"assets/index.e2b8fdb7.css",revision:"ff42dd61d38864d8b5d6455a7013c8c0"},{url:"assets/index.effbd968.js",revision:"38836c4096bff037c064f6be1ed91c62"},{url:"assets/index.f31914a0.css",revision:"1f59538c57e2ab640fd477bf4469ce0b"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsoneditor-icons.45c98bf0.svg",revision:"2b9b4872cd25494093c1eb14f0264a0b"},{url:"assets/jsonEditor.a127ee54.css",revision:"f99421fca4c58476a3a59135743753fa"},{url:"assets/jsonEditor.b46cbd6c.js",revision:"15f40b980ae4e69e5fa414f8cd40a272"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.5e1d0814.js",revision:"d55eb2089c2f48974b07e25a08d98a24"},{url:"assets/latLng.dead2144.css",revision:"a9ec27375a8a58c83c0183431c150eec"},{url:"assets/latLng.f4aacce8.js",revision:"793b0320a2269d3d814bd6c9cac41d09"},{url:"assets/layers-2x.066daca8.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"assets/layers.1dbbe9d0.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"assets/leaflet-src.esm.0ed8e194.js",revision:"2df585ca8164b856c5159fd76b82a311"},{url:"assets/leaflet-src.esm.b0376347.css",revision:"930989ebd3dabbdd5923ad7c9446b608"},{url:"assets/marker-icon.574c3a5c.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"assets/marker-shadow.264f5c64.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/mtqLoans.f34e6154.js",revision:"f5236c92916dc414f7b744f3536ccae3"},{url:"assets/O.aabe6b8b.png",revision:"a2db93df1d31a39dd4b59e9153d1ccfb"},{url:"assets/Ob.fa8b324c.png",revision:"7e2f2430c02d865865c523cede776e96"},{url:"assets/oreo.6b415d4d.png",revision:"12629e17b1a719cb50c9fd7906877829"},{url:"assets/R.fca5b3d5.png",revision:"2b21056701a0b99b7c01c1c7218ffe20"},{url:"assets/random.8cac1d72.png",revision:"2f86e3df693238bb2e3721e7e55b77d1"},{url:"assets/screenRecord.4eceb4d3.css",revision:"dd914f2e4b7727b9a26d474cffe22092"},{url:"assets/screenRecord.573100bb.js",revision:"58e8ff6d1dfef31d3ac2ac522fc77d2a"},{url:"assets/Seto.3e28fa6c.eot",revision:"0905bc0efff7fb60fdce4f7a11c64b9c"},{url:"assets/Seto.8ea3242a.woff",revision:"6b22c4e73a807051a1b5a6b4cc83705a"},{url:"assets/Seto.969d39cb.ttf",revision:"69b6ece536a789149e77fbc66870b482"},{url:"assets/Seto.f0825900.svg",revision:"fcf361d3ef3d31a81d5920464df396f1"},{url:"assets/timeCompute.495df05d.js",revision:"dfa92f44de559ca7c78b823104104bd5"},{url:"assets/tinyEditor.2a000628.css",revision:"56a98c0fe577c89209191ba0e5fb6869"},{url:"assets/tinyEditor.f1c675f0.js",revision:"e98c463b0b33e74d1859f2c70a51eeaf"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/urlEncode.b361786b.js",revision:"a32bd01718448362b18b7a8c8a89399f"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.f02c8a8f.js",revision:"4077f02ef46eaa44f75e51a08a4e240a"},{url:"assets/vendor.2026921e.js",revision:"dd58b4a168fdabd2180ed6e475e276ce"},{url:"assets/vendor.39655019.css",revision:"2a5a1e6ce16edf08a0c0822af8964cd0"},{url:"assets/viewSourceCode.1a575261.js",revision:"e364dea04166925bc689b4ceeadfc9c8"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis.33991b33.css",revision:"755020e8edb5b74aa83d9184247f60a2"},{url:"assets/whatAnimeIsThis.38ff251c.js",revision:"454681f271f83d9bdc1405aa3ad3bd52"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"c20bc167074aee55017399b22ec3b05d"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.CacheFirst({cacheName:"iszy-google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.CacheFirst({cacheName:"iconfont",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/lf1-cdn-tos\.bytegoofy\.com/,new e.CacheFirst({cacheName:"bytegoofy",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
