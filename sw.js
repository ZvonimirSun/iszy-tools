if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-1770cef3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.cc738a7d.js",revision:"aa919369a84a5e964aeaf9c8a3b3b173"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.4e7ff506.js",revision:"af2100335c8761e3107786117f628bb2"},{url:"assets/bilibiliBv2av-legacy.e1a3b22c.js",revision:"3157eab3e569ab93019fcff8d5e67ea9"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/bilibiliBv2av.f369f375.js",revision:"71386f6e45523f6e9cb31dde856e07f5"},{url:"assets/colorTransform-legacy.ac4f24bb.js",revision:"f706fe34f42936df11985e6fad044e54"},{url:"assets/colorTransform.aec0f89b.js",revision:"c759986967e2649aeb82ff0fb2508cf2"},{url:"assets/container-legacy.690fa3c1.js",revision:"67334ecade8e04ba527924943416bccb"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/container.c1cf33bd.js",revision:"9783e5e06a99b472109db70584fa5c20"},{url:"assets/cssFormatter-legacy.f7250cb2.js",revision:"e0cdecc4fed79342773b7074b510e99e"},{url:"assets/cssFormatter.6434bdc3.css",revision:"4cb668ed5ab1dafd28405096e13fff9a"},{url:"assets/cssFormatter.ddacd385.js",revision:"e7c0c2fb47ad9e3594960a8dc2a8291d"},{url:"assets/geoJson-legacy.d0f61855.js",revision:"fd3d23fd986d9e8e31b718a47f2e255c"},{url:"assets/geoJson.3fdb6729.css",revision:"ff863e3e97ec68f2407ca4b7eed4b8c1"},{url:"assets/geoJson.5f1ca412.js",revision:"f2afa69cfaa4a6b679e238040db68515"},{url:"assets/Home-legacy.16007cd3.js",revision:"7bda3256b312c17dd568bc161e1df507"},{url:"assets/Home.1afcae07.css",revision:"038b976ae7c82866891a157bb2199995"},{url:"assets/Home.7189c2ee.js",revision:"4b0c079ab350406c67176405384cca55"},{url:"assets/imgHosting-legacy.595ec816.js",revision:"408fc2dae741cfb1d77f5519b4973f35"},{url:"assets/imgHosting.3729b5bb.js",revision:"6147d01ee9508e92f6dea618717b2f16"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/index-legacy.18da95e3.js",revision:"70bcc50a5bc6871a5672d037e984d9f8"},{url:"assets/index-legacy.74a1f771.js",revision:"4e6fdfe8c6cdf908cf6135fb0d2cc436"},{url:"assets/index-legacy.7ae13397.js",revision:"6736295a096c56279d796f4e8762c80b"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.ca6fc86a.js",revision:"367d2dab63097dfca5f2a8d2995f1df7"},{url:"assets/index-legacy.caca8dff.js",revision:"7058ebe7e1273463fd408c1fa477bcc8"},{url:"assets/index-legacy.d8a4096b.js",revision:"e539ec4363ccf6737a847ba99e9c966e"},{url:"assets/index.0aeb2d4a.css",revision:"8a922debac52b934bdfd14d20d2141c6"},{url:"assets/index.30a02f59.js",revision:"8bc730901e6dc66b6d6e9926b0bda6be"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4b2a773e.js",revision:"a417f5a692d74a520f97d3e24bfd2cf2"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.867babe8.js",revision:"eef0a342f76711e70d83a93800b5208f"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.b63b7d52.js",revision:"19dfd121964471d09ff169e7f7509596"},{url:"assets/index.c9c09fe0.js",revision:"d09a54dbb71a9696040dfb183706b8bd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.e7901d35.js",revision:"a9f6bae102d990aae4896a5df4de3219"},{url:"assets/index.f1831207.css",revision:"130479963cf283de21db4cf90338ffeb"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.d49bbb49.js",revision:"10d61a91b4d3525336e02f5df303e614"},{url:"assets/jsonEditor.1633767a.css",revision:"635f253842da0f28a2c1709f3c3121fa"},{url:"assets/jsonEditor.91f625e7.js",revision:"cbc384fd789ed46563ea182faf9ad599"},{url:"assets/jsoneditor.min-legacy.c7148b13.js",revision:"3dfaf84fa748640940d4af14c0b7ae61"},{url:"assets/jsoneditor.min.7f2bff60.js",revision:"90ac65e28e661d4fd93e71d4e915807c"},{url:"assets/jsoneditor.min.e49b399f.css",revision:"50742f76218185ff45351a6e27ab7426"},{url:"assets/mtqLoans-legacy.f7e7b745.js",revision:"4fdea8185e3ef5f85756429228ba05f2"},{url:"assets/mtqLoans.36ee0746.css",revision:"308768fff653e56c78224123c51fd043"},{url:"assets/mtqLoans.aa6dfd11.js",revision:"8a42a7b84a7471e144da4b1abedfe716"},{url:"assets/polyfills-legacy.f4a396a6.js",revision:"2e71a97b3db32f00cca04407725536be"},{url:"assets/timeCompute-legacy.b62b13c1.js",revision:"bf8cc6405a47950761d8ac9b6b9e0525"},{url:"assets/timeCompute.90ab5cdf.js",revision:"711d672b3c1562a95f1ed3656f15e8a8"},{url:"assets/urlEncode-legacy.c67cfffb.js",revision:"fcc9e9d048de6cf3863555a9bcf9ea28"},{url:"assets/urlEncode.773bbbf7.js",revision:"3debb0b5c3c0ef48305f815bb446c734"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/uuid-legacy.f8f7e0c8.js",revision:"8b14d46a44c6d6868e886d569c90ffc0"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.5bc28fea.js",revision:"94eb664a2e426ece394d91b6cd63a9f2"},{url:"assets/vendor-legacy.f21f1255.js",revision:"300184a121927f644e8a94f6923d0f4a"},{url:"assets/vendor.5bb7c925.js",revision:"a45e05c7cc1b724cacefa8cc3350819d"},{url:"assets/vendor.90cdafc8.css",revision:"f723014457eb2f290f5689fe85ba5b67"},{url:"assets/viewSourceCode-legacy.2fb6c7de.js",revision:"b916e28db4670e51ea7546d5205221cd"},{url:"assets/viewSourceCode.8fc11eb3.js",revision:"e4af993b4cacbe58576f013ee5792940"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.34328b57.js",revision:"a3d4f1b47337299bee0e258b9277970a"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"assets/whatAnimeIsThis.c8cf063c.js",revision:"62775101a21a72453f87098d82d04ac2"},{url:"index.html",revision:"21398dc00d90664ede613128cc60bebc"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"f48708f3769001993179700fb1818425"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
