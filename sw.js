if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-edc65b78"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404-legacy.0d1694f9.js",revision:"8c6973554b602f8ae97b334d831f30ea"},{url:"assets/404.032039f3.js",revision:"72a3d3804bc4610167e1ff213f3cf426"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/bilibiliBv2av-legacy.672dfba5.js",revision:"87494273ec8a64a08c2165f19758b5a8"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/bilibiliBv2av.718dd97e.js",revision:"119a61e8fc9644b81e8dfadcdc9068ec"},{url:"assets/colorTransform-legacy.80a2727b.js",revision:"408ccad289357525756f637ff289cfd9"},{url:"assets/colorTransform.4a6a59d7.js",revision:"6d661030b0a43b9c12267bc74d47ac0d"},{url:"assets/container-legacy.22b07ae5.js",revision:"4a20e40fd0ce134d06eb2b828541281c"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/container.5a706178.js",revision:"f149f76fdc1366035f75f36f8cd1ca9c"},{url:"assets/cssFormatter-legacy.62a878e3.js",revision:"eaaac991359e234991e01cd78a1f94b9"},{url:"assets/cssFormatter.2928a6f9.js",revision:"1b04b8e567379cdb4e0fa5cfaef841c2"},{url:"assets/cssFormatter.f44c5c4c.css",revision:"4d03e6af47c2ce46b600cc04a15b2a49"},{url:"assets/geoJson-legacy.956f1df4.js",revision:"6ad82c436a48a7221bcdc754f8b4c54a"},{url:"assets/geoJson.600bc300.css",revision:"79335bf022e013a1815725033b2a8035"},{url:"assets/geoJson.76ad56f9.js",revision:"f083780c0b4ebf7e86c85a264784d9cd"},{url:"assets/Home-legacy.84966ddf.js",revision:"de242a1815da36a1fd789d56e6475b90"},{url:"assets/Home.00560c89.css",revision:"70d0744caecb9d9bf87de8c7cf9acfe1"},{url:"assets/Home.5d3533cf.js",revision:"bba3b53e12473fd7b62da2ccfb6844b1"},{url:"assets/imgHosting-legacy.36968faa.js",revision:"70f4b4b71a49b4f202d982c5319d1c86"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/imgHosting.99290ec2.js",revision:"427317b8a8e78efa56fa3499897f1e18"},{url:"assets/index-legacy.10dc88d9.js",revision:"115a687992c621b57b5e045f17dccc35"},{url:"assets/index-legacy.1cf11a8a.js",revision:"e8e402f72b3d7108fbf6b3217ca29270"},{url:"assets/index-legacy.2eabcc47.js",revision:"0bbdc6983043e353c875661d40a34d6e"},{url:"assets/index-legacy.4f0cdedd.js",revision:"69f98cc89b12bd90bd19cbc4c39d4fb3"},{url:"assets/index-legacy.89d90ffc.js",revision:"19a90aa1ab750a97f9358bf1597eb9b9"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.ad634399.js",revision:"63dd3486391562e51b787d7d89daf88b"},{url:"assets/index-legacy.faa8a7e1.js",revision:"8d12c7d20bb98d05feee97900d370ad6"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.1a7d0101.js",revision:"a46a18a4d8dca5dd9798008dafefb12e"},{url:"assets/index.1f7adced.js",revision:"dfb37d511d044e53b61df502cdf9025e"},{url:"assets/index.2ceae049.js",revision:"8d6f3564f0b7d5ff8dfa581e9275e738"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.4ee52489.js",revision:"6d6bfa2e9e689ccce15fdcfb956a30a5"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.8c5b1a3e.css",revision:"ad90343c8477d6faaab2d2455ed123b5"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.a6ced45d.js",revision:"10712905305d87ce1eeb042fab17fabb"},{url:"assets/index.a7b55d95.js",revision:"71ddd57d462a225185e39e0bc6d6dbe7"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c771400e.js",revision:"de90e4f923eafff13d0afa8678667c3b"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.1d17235d.js",revision:"d1ebf055ad650f785d8580b96380beb3"},{url:"assets/jsonEditor.0a24463d.css",revision:"db8bef459e2ec8d33c2188ddb90af04d"},{url:"assets/jsonEditor.975d3140.js",revision:"9c936dae6179889312ccaad953d074bb"},{url:"assets/jsoneditor.min-legacy.3b31c86f.js",revision:"af93be5c8886e194e370f390731690c0"},{url:"assets/jsoneditor.min.0393547a.js",revision:"7f6f03ec52e688a359abcffa67091bb6"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/latLng-legacy.106cb116.js",revision:"61c8489ca0674e9fc37a2ea270420b02"},{url:"assets/latLng.03c8d1b5.css",revision:"a944c1441add68bb51e31b6eb158ddb4"},{url:"assets/latLng.fc80be87.js",revision:"b9016ba48236c53acf9ed56782115f08"},{url:"assets/leaflet-src.esm-legacy.3e7f17a4.js",revision:"156b8b9404d78445283f2fe002ce513f"},{url:"assets/leaflet-src.esm.1d06475d.js",revision:"56957e79df62b8f631e5dbba30178059"},{url:"assets/leaflet-src.esm.360933b5.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/mtqLoans-legacy.5fcbf515.js",revision:"5694859d144550d51c9a82309d638f26"},{url:"assets/mtqLoans.6b9214cd.js",revision:"a7cbebc34bec699b3a79870d350b1062"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/polyfills-legacy.0bc1f316.js",revision:"8c7b5d72c1ecd3f698c9f6cbd850095a"},{url:"assets/timeCompute-legacy.750fc7a5.js",revision:"5f8d30d625864ceca76ad16ba265472a"},{url:"assets/timeCompute.6744c7d3.js",revision:"fa14f2c387074869eac45b2161c17171"},{url:"assets/urlEncode-legacy.3aac0eb3.js",revision:"4baee0fcdbf72f3a7c285868d4e105fc"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/urlEncode.e12201c4.js",revision:"6d8506d2d19679141eb2690944fab856"},{url:"assets/uuid-legacy.e24d9ed6.js",revision:"f2a0d9590ed830d236d6a25b2e6be4f5"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.ef7a59c3.js",revision:"5820d99dcd3d9283a1fa66c510ef7f92"},{url:"assets/vendor-legacy.71555ff6.js",revision:"1b21474ebfb8647b94a402ceb9d90198"},{url:"assets/vendor.0e23943e.css",revision:"cbed3746fff14e456025f8c97ca8e869"},{url:"assets/vendor.8f1f5d06.js",revision:"c17406ec46c7a4f74788228f77a64cfd"},{url:"assets/viewSourceCode-legacy.70136100.js",revision:"ef91ea7f08aab669b2dc05c1ae1f0e6e"},{url:"assets/viewSourceCode.f35d5e01.js",revision:"78625ca100e24d212087ca11a41951c0"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.a423f84f.js",revision:"696027a27cdfe6425db6de4f84dfcfa9"},{url:"assets/whatAnimeIsThis.57160644.js",revision:"54964a5d70b1b28b54f21d2da3e37ec8"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"index.html",revision:"bd7401a15dc37aa9a1d6a671e0fc5f69"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
