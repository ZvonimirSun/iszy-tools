if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-edc65b78"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404-legacy.614b5618.js",revision:"5626ac83d20d4e077b6c13d0c19e35c9"},{url:"assets/404.23a4a6ed.js",revision:"d71ef22dc805d1cf0d625886a4449f9c"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/bilibiliBv2av-legacy.a70dfaf1.js",revision:"7dd313b7d77b7796be3cb9e247519a50"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/bilibiliBv2av.af2cc760.js",revision:"1693b096047ff7501742f0671a9fc503"},{url:"assets/colorTransform-legacy.71010829.js",revision:"7fb6470a7312826c2694be04aeb6afd7"},{url:"assets/colorTransform.da306dc8.js",revision:"6fa0c6dece2276fed55c611e4477ae04"},{url:"assets/container-legacy.251ae150.js",revision:"67413600e28e785562130bb4ac41a683"},{url:"assets/container.7fcf2957.css",revision:"18730a54a2659fa289e656ad95c160da"},{url:"assets/container.bd55eb3a.js",revision:"c3e83d7e600f9f2f26dbd69a1660e6cb"},{url:"assets/cssFormatter-legacy.3f85b90e.js",revision:"cdd3eaf248ee23e7bc8c7fc9fd0c155c"},{url:"assets/cssFormatter.cf3497e1.js",revision:"c87659ba17cca3f68452ea5a9c87450c"},{url:"assets/cssFormatter.f44c5c4c.css",revision:"4d03e6af47c2ce46b600cc04a15b2a49"},{url:"assets/geoJson-legacy.084b406a.js",revision:"28090d46707a12263932f824d9f2a44e"},{url:"assets/geoJson.600bc300.css",revision:"79335bf022e013a1815725033b2a8035"},{url:"assets/geoJson.cbfb104b.js",revision:"c188170552d7fc5247da79f6e3e8d624"},{url:"assets/Home-legacy.c8369fc7.js",revision:"53c51e4b012b244150a760d29f315513"},{url:"assets/Home.00560c89.css",revision:"70d0744caecb9d9bf87de8c7cf9acfe1"},{url:"assets/Home.c006a9e2.js",revision:"214bebcd76f1add23e4304fc8dd3fb97"},{url:"assets/imgHosting-legacy.6b095fa3.js",revision:"c07f5b4ed8ba70e9eed1bc498e96c30b"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/imgHosting.ddc62efd.js",revision:"f588297493a1073a0982405933af8597"},{url:"assets/index-legacy.0c351182.js",revision:"e5052acb7dcd90d190b9dbcd62681ac4"},{url:"assets/index-legacy.5629f911.js",revision:"2d5e02a254e44897042f2b229994ee4c"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.9f1d9191.js",revision:"831c3940aac2938b4609a82b413ab481"},{url:"assets/index-legacy.b957f317.js",revision:"5be8697db2bdacfe797d58d67ef53dda"},{url:"assets/index-legacy.bfd85a73.js",revision:"7ede5dcebe7d4b37c365a6d64233fd43"},{url:"assets/index-legacy.d890f6c4.js",revision:"ca4e9d66fa8c8779c38f6429236fd1be"},{url:"assets/index-legacy.ddacb969.js",revision:"e09025b5de61631a3a805250bf2c7f6a"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.133e404b.js",revision:"f6eaa3b042a4b475be35bd8359a85727"},{url:"assets/index.39699135.js",revision:"0fc9734d6b233ec451a3f216dd391366"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.42bb3d71.js",revision:"c99bc35147697490b74abf905fd18f37"},{url:"assets/index.46d5ecc6.js",revision:"31a4f2af2110ac16bd16903204e56eff"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.5c2b14a1.js",revision:"d3c54c20c75b29a0e458a554b5f2fefe"},{url:"assets/index.8c5b1a3e.css",revision:"ad90343c8477d6faaab2d2455ed123b5"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c4413e24.js",revision:"ae3e2f66fb1457f40b3c62aaeaf07eab"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.da032cfb.js",revision:"c258a9a9558a92ac6f75f80d85dee9ad"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.077e1e4b.js",revision:"887698912289d70f179cea3958a34c5d"},{url:"assets/jsonEditor.0a24463d.css",revision:"db8bef459e2ec8d33c2188ddb90af04d"},{url:"assets/jsonEditor.625bfa5d.js",revision:"a42cfd4055a623577c0e12a2752564ac"},{url:"assets/jsoneditor.min-legacy.1c126732.js",revision:"e117a6fbacdf5f80a6bb582b8f8efce7"},{url:"assets/jsoneditor.min.04bf4752.js",revision:"303848590b84621122ea1258c4089eae"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/latLng-legacy.0ba12b48.js",revision:"e0de6abfe0a70da1bbe24d643d9b420e"},{url:"assets/latLng.03c8d1b5.css",revision:"a944c1441add68bb51e31b6eb158ddb4"},{url:"assets/latLng.55237113.js",revision:"1ea0d1131b532054747cecdcd70051ee"},{url:"assets/leaflet-src.esm-legacy.3e7f17a4.js",revision:"156b8b9404d78445283f2fe002ce513f"},{url:"assets/leaflet-src.esm.1d06475d.js",revision:"56957e79df62b8f631e5dbba30178059"},{url:"assets/leaflet-src.esm.360933b5.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/mtqLoans-legacy.3f501092.js",revision:"64795c53d29c0c0f1e0f538cd504cde2"},{url:"assets/mtqLoans.1844ef02.js",revision:"ef657ad8b7bdbec81ed09f86d3476087"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/polyfills-legacy.2c82c164.js",revision:"475c035dacd3e90f3d523d517d648f5b"},{url:"assets/timeCompute-legacy.b0b891c8.js",revision:"be7d3a626b306b7860532edbbd00673d"},{url:"assets/timeCompute.85376a23.js",revision:"4f98d81077d6d5964b14bb5a0b1a4c79"},{url:"assets/urlEncode-legacy.0632cf8f.js",revision:"acfb0f2cccd8e1d05eb72cbe9f5820b2"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/urlEncode.f06b2d6e.js",revision:"39b51604c316bb32236a2cc440d12edb"},{url:"assets/uuid-legacy.1575abbe.js",revision:"6abbff1045637279ce690ecafc467cba"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.1b170228.js",revision:"7c53ed90d067c2c5aa269eb6e655ecbd"},{url:"assets/vendor-legacy.e0bb8d1f.js",revision:"f1e5e3ededac34ddf5672ad65acf452b"},{url:"assets/vendor.0e23943e.css",revision:"cbed3746fff14e456025f8c97ca8e869"},{url:"assets/vendor.a079698a.js",revision:"1429fd53117f66223969782b8ad9804a"},{url:"assets/viewSourceCode-legacy.895e3d5a.js",revision:"8b95654b1b5f63179228babc7037b0e4"},{url:"assets/viewSourceCode.57ad290e.js",revision:"c7c7c5a16ec1f88802f96c6685b90030"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.2065d3f9.js",revision:"ee42decfec6135b8c3f7586b45311aa0"},{url:"assets/whatAnimeIsThis.8df6418f.js",revision:"06c11c39a1ce4a05bc5d0595bf983db5"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"index.html",revision:"b9193a8d6787cd041f3756b2af49b8d7"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
