if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-1770cef3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.6c209ec9.js",revision:"8f61416d169ad4609ea31441396a2823"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.707c9e4e.js",revision:"057047d0c13c110b9c5e17524fbb00ef"},{url:"assets/bilibiliBv2av-legacy.79d9b119.js",revision:"de636ce9387b24637208a165836eadf3"},{url:"assets/bilibiliBv2av.27c33027.js",revision:"8d38f704799ab990f4fa137ef275861f"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/colorTransform-legacy.1296573a.js",revision:"bf4c55e59b717deb890c2c0b809477da"},{url:"assets/colorTransform.c4882711.js",revision:"2922ed34702c7064a9acb2bb76384509"},{url:"assets/container-legacy.ef2af940.js",revision:"41a8a5fd0c7bbcd237127f419969bd4f"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/container.62cecf96.js",revision:"c656caba0fb32899593302f8c2573fb6"},{url:"assets/cssFormatter-legacy.289d8f73.js",revision:"1126b018829aa484afbec00b389ec5bd"},{url:"assets/cssFormatter.687df474.js",revision:"a4f192596ee5194848091b8697fb0ef1"},{url:"assets/cssFormatter.f44c5c4c.css",revision:"4d03e6af47c2ce46b600cc04a15b2a49"},{url:"assets/geoJson-legacy.f15c8b53.js",revision:"43c3c51a907b187bef51e4ad74a4af93"},{url:"assets/geoJson.2316ffd3.js",revision:"5a65daa33cc34b5116d3fc88f15746c2"},{url:"assets/geoJson.600bc300.css",revision:"79335bf022e013a1815725033b2a8035"},{url:"assets/Home-legacy.c4ffc4f3.js",revision:"b8e70469941dd7660927b34853803e20"},{url:"assets/Home.00560c89.css",revision:"70d0744caecb9d9bf87de8c7cf9acfe1"},{url:"assets/Home.2cff9013.js",revision:"a521f91aca17f415539e14ff0d41caf6"},{url:"assets/imgHosting-legacy.9d96cbec.js",revision:"2ef176907a85e527dd59b101ded99727"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/imgHosting.bc83f45f.js",revision:"7c30e157824f0b7e6bb7e10d23123cf3"},{url:"assets/index-legacy.182a4708.js",revision:"8e0937414935aa036efd7da16e51f7e7"},{url:"assets/index-legacy.256c06b7.js",revision:"0ac94c31cf3297d2406d589e47e856da"},{url:"assets/index-legacy.2e99ec07.js",revision:"d6ef208f8e6396ef3a77365d0122de4a"},{url:"assets/index-legacy.88c42ceb.js",revision:"07a86982e2df859d0aa1297f66a179c5"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.8dff8491.js",revision:"14b3ffd3be05417fa9583754e4036e79"},{url:"assets/index-legacy.e72a90c4.js",revision:"cf39216aebf3c77b9a3119e1f21e9188"},{url:"assets/index-legacy.f43ac3dc.js",revision:"3e93282fe868363b52d1d8b176ce9546"},{url:"assets/index.06870a77.js",revision:"61b043cb01ffd0ce8818f177ce9e06fe"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.3625fbc4.js",revision:"d89c874dac40104dbf74086f5921db21"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.61a1b291.js",revision:"2aee6d1b710e18314ce2f4bdb6322d0a"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9b96496f.js",revision:"bf61edcd929c7ee9b72548db633ea1b7"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.9efba39b.js",revision:"1cb0c695727f3b7900b1ed72b521c94b"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cdfd5dc3.js",revision:"c137df6abd9993e4d5420279ab2c300c"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.df0c589c.js",revision:"88b70780785b00faa0e0a6ccfa292b4d"},{url:"assets/index.f1831207.css",revision:"130479963cf283de21db4cf90338ffeb"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.85de3bb2.js",revision:"5bcdc3f24cf2ad5c67842b733aef08de"},{url:"assets/jsonEditor.0a24463d.css",revision:"db8bef459e2ec8d33c2188ddb90af04d"},{url:"assets/jsonEditor.b925b77e.js",revision:"7dde84e3f143883567452ce058dade3d"},{url:"assets/jsoneditor.min-legacy.81071c2a.js",revision:"5e016ea3e3f8fe47f68c80cfb65f6058"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.720d8794.js",revision:"a7bd30d5489e644207e62f057e01c584"},{url:"assets/latLng-legacy.0a8cdb6f.js",revision:"6b17741f35dc0c4f6887a2f8e71683d0"},{url:"assets/latLng.554f228a.js",revision:"675347b98ddf07deebee4309c715b5a5"},{url:"assets/latLng.64908dec.css",revision:"3597ab617d3db079af02e2c81b6945c9"},{url:"assets/leaflet-src.esm-legacy.3e7f17a4.js",revision:"156b8b9404d78445283f2fe002ce513f"},{url:"assets/leaflet-src.esm.1d06475d.js",revision:"56957e79df62b8f631e5dbba30178059"},{url:"assets/leaflet-src.esm.360933b5.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/mtqLoans-legacy.2192a56c.js",revision:"e5aec8964671e174dfb9fc42173894b2"},{url:"assets/mtqLoans.7be55f74.js",revision:"58474efd9e6c201eebfdebd1059e94a5"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/polyfills-legacy.f206fdd1.js",revision:"4e08974f434af0e3dbfef715c4d811d8"},{url:"assets/timeCompute-legacy.6629b8d6.js",revision:"d95d7f1f383f1c7326e34e7f2c96e955"},{url:"assets/timeCompute.901edd66.js",revision:"2e5d2ab193c4abfa5e28c4d3f239d55d"},{url:"assets/urlEncode-legacy.8585f9ee.js",revision:"ec729ea46069deec9e63d625c63a4fe3"},{url:"assets/urlEncode.975ecafd.js",revision:"5de52846f8f62a9a393d9e73df490ba8"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/uuid-legacy.e9f0b0fe.js",revision:"20230db6a944483f8a0b715318fe59eb"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.85573c33.js",revision:"b8c79db7a4956e6ca3e18cb497e5bb1d"},{url:"assets/vendor-legacy.c6a019b7.js",revision:"55770821f16af418337d857b937c28d7"},{url:"assets/vendor.4ef9d3e1.js",revision:"268f88977e2e13e475442fed3c541838"},{url:"assets/vendor.90cdafc8.css",revision:"f723014457eb2f290f5689fe85ba5b67"},{url:"assets/viewSourceCode-legacy.a395a8a6.js",revision:"ea040a7c6b1d2ed039c6bc7041a5874f"},{url:"assets/viewSourceCode.a358470c.js",revision:"e1de29671c7c476f61f6d5467d0d45c4"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.276fe2a9.js",revision:"e71e697893e4eb6cbd7c4d00ea806a0c"},{url:"assets/whatAnimeIsThis.74096859.js",revision:"981626240b2cc57ce5c296ba5e6afe54"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"index.html",revision:"3ef60d7af29100603c4802d6322b42e0"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"f48708f3769001993179700fb1818425"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
