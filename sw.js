if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-1770cef3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.7a463430.js",revision:"d774b5f4f92430ce42ba64478115849b"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.4532e5d4.js",revision:"681d4d7d45bb34e3d567d0ee64b58db2"},{url:"assets/bilibiliBv2av-legacy.89ca65c8.js",revision:"fb5744f6207b7059e4861030a0c72b8b"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/bilibiliBv2av.67eda4da.js",revision:"041e7162f1658618ed7a28eebcfb6e48"},{url:"assets/colorTransform-legacy.3de2c358.js",revision:"f0ae322a3ca59eadee009f3c27d93adb"},{url:"assets/colorTransform.5d787938.js",revision:"3efb4d184c734fc57ad56d4e26e0026c"},{url:"assets/container-legacy.bd0092d0.js",revision:"1ef96a525ebcb0f280a4e4b676c57842"},{url:"assets/container.0f8b971c.js",revision:"3545d0be06a4f39f02f1662f960d3b65"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/cssFormatter-legacy.d5007ff9.js",revision:"b21b95cc8d9e89c6aca706274140b988"},{url:"assets/cssFormatter.60dd0b98.js",revision:"13d9888358cf994771c3c119583c664e"},{url:"assets/cssFormatter.6434bdc3.css",revision:"4cb668ed5ab1dafd28405096e13fff9a"},{url:"assets/geoJson-legacy.08ad6e0d.js",revision:"2775effd0cafb0df9da5e3b487b58690"},{url:"assets/geoJson.59dd6eec.css",revision:"f2f8776863dfc08273b437f75e771f6a"},{url:"assets/geoJson.f1b48580.js",revision:"16e7326b19e9bca3c7da6d4814dc5f69"},{url:"assets/Home-legacy.fcfc1364.js",revision:"76ae018659eb49dcafbfbfb6dc132ece"},{url:"assets/Home.19002a95.js",revision:"b40dad6939c24157026655f3a57c7335"},{url:"assets/Home.1afcae07.css",revision:"038b976ae7c82866891a157bb2199995"},{url:"assets/imgHosting-legacy.90869b36.js",revision:"f52f9d1949c3b0e16b0bc4c08a3853be"},{url:"assets/imgHosting.307b4410.js",revision:"6a37908e7c77d3d6a2d239eee59472f9"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/index-legacy.17039876.js",revision:"a85c815630c44cf09fb087282365ecd2"},{url:"assets/index-legacy.4e72025e.js",revision:"490a515c768db5b78cb86494fce9d420"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.8b16e71d.js",revision:"317da61e2e59e71ce9b8e2a16ae3db26"},{url:"assets/index-legacy.d29c085b.js",revision:"b616ef39bf4f9f3880ad318e1a41682f"},{url:"assets/index-legacy.e98e92c5.js",revision:"b1650b8258eaa8aec40aaa2eb9cb70b8"},{url:"assets/index-legacy.eab3d338.js",revision:"f3cef81c6c0096deea989ad2091527d9"},{url:"assets/index.00a42a5b.js",revision:"c44399165d73cb11e43159b3d9f79735"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.0aeb2d4a.css",revision:"8a922debac52b934bdfd14d20d2141c6"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.af6e4bfd.js",revision:"a2cb240e07206a7b58cd6fd7c20b6d47"},{url:"assets/index.b40397c7.js",revision:"f0c352b12be271b498fada148fca567d"},{url:"assets/index.cb060521.js",revision:"f115895ca4ac19c2ac60e190b454292b"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.eaa069e1.js",revision:"0a61d8ea9f71cb2253bce1d62a05c438"},{url:"assets/index.f1831207.css",revision:"130479963cf283de21db4cf90338ffeb"},{url:"assets/index.f1a995ca.js",revision:"511eb4873205d4c689984ae445974875"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.04abd333.js",revision:"5fff4e6d0f241b9212794f2cd90ba6d0"},{url:"assets/jsonEditor.1633767a.css",revision:"635f253842da0f28a2c1709f3c3121fa"},{url:"assets/jsonEditor.b9834ec4.js",revision:"20dcdaa00832ed08bd19401f07435e8a"},{url:"assets/jsoneditor.min-legacy.6631d62f.js",revision:"0babf29c1992fbc3eaab27e1eacb665c"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.ef134e88.js",revision:"3a2a601e3eb2ffb09cec9377b0ad86a6"},{url:"assets/mtqLoans-legacy.233171d2.js",revision:"598cdfb334897dc8de3c686f9dc37323"},{url:"assets/mtqLoans.21c264c8.css",revision:"b2807302f234751b473b70ebbd6511a0"},{url:"assets/mtqLoans.e4cc7040.js",revision:"1fedb07dd5bdc2c61ef89150591f9d50"},{url:"assets/polyfills-legacy.f4a396a6.js",revision:"2e71a97b3db32f00cca04407725536be"},{url:"assets/timeCompute-legacy.1c9f0c70.js",revision:"66f2f320c173f34a243c5ce88b4cb8ef"},{url:"assets/timeCompute.8f5fb1f0.js",revision:"c9f5718350d505c5f9b347ac4d753bbd"},{url:"assets/urlEncode-legacy.6e133ec3.js",revision:"4782b55b11456c0fff7330ec84954cd2"},{url:"assets/urlEncode.5765e849.js",revision:"5ed9b2eff682dad829e1c4ccfdcad732"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/uuid-legacy.a6d5e67a.js",revision:"084a1fb4b82d9b329d1b5919984f4709"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.fd8a3b41.js",revision:"dacfb71e40a1233f2904dfbe42882c18"},{url:"assets/vendor-legacy.c62c7d12.js",revision:"12fe9cf2c5d0b7402f15754d25d545a8"},{url:"assets/vendor.283700cc.js",revision:"66cef663750ce0512f64e480cba84f4a"},{url:"assets/vendor.90cdafc8.css",revision:"f723014457eb2f290f5689fe85ba5b67"},{url:"assets/viewSourceCode-legacy.f2b42c7a.js",revision:"5dad64d0045fe8d9c80a2c9c2d4269ab"},{url:"assets/viewSourceCode.66b5afb5.js",revision:"37f00aa9608786951284c1cb8f99743c"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.23649831.js",revision:"e244d61f10e9dd97363ae7afa5179d99"},{url:"assets/whatAnimeIsThis.c116d285.js",revision:"580d33508d89ed5d72814abd6ff94e24"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"index.html",revision:"7a1ba4b97bf9131e7e81397884c70d65"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"f48708f3769001993179700fb1818425"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
