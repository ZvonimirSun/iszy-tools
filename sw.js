if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-edc65b78"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404-legacy.dd025d16.js",revision:"d80a400c6cfaaa68eaf7729cc64b6a4d"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.d054b3e6.js",revision:"ecdb64cd09c3cfa0e685350dacc41b8e"},{url:"assets/bilibiliBv2av-legacy.44cb3ddc.js",revision:"34a9c7bce54ac61178dffdc69668513c"},{url:"assets/bilibiliBv2av.1209ac32.js",revision:"5b9facd3665e76a19ae2366963d58aeb"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/colorTransform-legacy.cd28a695.js",revision:"90132f32facb6b48075787bbfda3ea28"},{url:"assets/colorTransform.42f5b87d.js",revision:"2052941c4521451ab7caa66eb0bc4861"},{url:"assets/container-legacy.167d2215.js",revision:"f831114f40538162e1494f2fce67779f"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/container.d23f72db.js",revision:"b863a1c0d57c0d633d550d18aff93039"},{url:"assets/cssFormatter-legacy.040bc680.js",revision:"9fcd53d87bd59fbfc200fc140f7ca271"},{url:"assets/cssFormatter.77086fcb.js",revision:"af836d00a90f4d357bf1b59b97f90d13"},{url:"assets/cssFormatter.f44c5c4c.css",revision:"4d03e6af47c2ce46b600cc04a15b2a49"},{url:"assets/geoJson-legacy.67889d5d.js",revision:"dcce3dc3dfba35ebe29eb62232821313"},{url:"assets/geoJson.600bc300.css",revision:"79335bf022e013a1815725033b2a8035"},{url:"assets/geoJson.b75038da.js",revision:"30636b6a03ef3a764f41448bb0ccc272"},{url:"assets/Home-legacy.d057848d.js",revision:"ab09521d8eac5420d779cc72711627cf"},{url:"assets/Home.00560c89.css",revision:"70d0744caecb9d9bf87de8c7cf9acfe1"},{url:"assets/Home.d16e78c9.js",revision:"86fda00d4b36c4e0786d5145975e7579"},{url:"assets/imgHosting-legacy.2e07a759.js",revision:"9b68aaec30377ec108d51d3f8a7f5e07"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/imgHosting.bf5c5c40.js",revision:"6a5e0dd15d07d29cf7f93d20a007f4cc"},{url:"assets/index-legacy.15b41ca8.js",revision:"07aa0e89326ef4e8d8364aa79fcdc99b"},{url:"assets/index-legacy.2310cea0.js",revision:"8e439263c2e21ea89024c42ce00f60fc"},{url:"assets/index-legacy.23c4b409.js",revision:"6e36ea03f6fd843f2223aff84e31f8a9"},{url:"assets/index-legacy.3de6fb99.js",revision:"44252f5d0e81814d6c7d14937334f1c1"},{url:"assets/index-legacy.5339f1e0.js",revision:"afc4ab553690d66e72b071c916b6bea8"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.909debe4.js",revision:"e7c522b3f0b0e42e5ed3040b8bd41d03"},{url:"assets/index-legacy.a538edab.js",revision:"973fdf0aa59d61f9eebfdfa72477f2da"},{url:"assets/index.036c32b2.js",revision:"dfdb891b367b99c9d2c6540c1d9f090f"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.618f776c.js",revision:"a3c4bf0fea6f577894eeb8ce5e08e82d"},{url:"assets/index.7388d348.js",revision:"4a3acd13ac2ae037838112d419514de7"},{url:"assets/index.772e9cab.js",revision:"3000e57490576d930fc3f11c82d3be3f"},{url:"assets/index.80f6e14a.js",revision:"f01071dcdb299fa6ffd4b8918d4ddb7c"},{url:"assets/index.8c5b1a3e.css",revision:"ad90343c8477d6faaab2d2455ed123b5"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.e16d26ba.js",revision:"d7ac5b9f64dc1b81b8a4bc8ab5ad9d0e"},{url:"assets/index.eb88a5f4.js",revision:"a359d647d88c833be5bd277f5223aeda"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.674033c5.js",revision:"ed40417eab343fb2af19ded6a261dfdb"},{url:"assets/jsonEditor.0a24463d.css",revision:"db8bef459e2ec8d33c2188ddb90af04d"},{url:"assets/jsonEditor.75a11fb5.js",revision:"3f8f3218890fad6c9b372557c22e4490"},{url:"assets/jsoneditor.min-legacy.f1f929df.js",revision:"40075b554b8015cd568021adc38a6d86"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.d94a5191.js",revision:"c0747e4a80cbd882aa80f49f2b602fa6"},{url:"assets/latLng-legacy.2ee577bb.js",revision:"00cbff69efee1904d01769cee417a310"},{url:"assets/latLng.03c8d1b5.css",revision:"a944c1441add68bb51e31b6eb158ddb4"},{url:"assets/latLng.558f1e80.js",revision:"f5e04c1146734436ac592e64b28024af"},{url:"assets/leaflet-src.esm-legacy.3e7f17a4.js",revision:"156b8b9404d78445283f2fe002ce513f"},{url:"assets/leaflet-src.esm.1d06475d.js",revision:"56957e79df62b8f631e5dbba30178059"},{url:"assets/leaflet-src.esm.360933b5.css",revision:"f9f8f7389b34b6156edc7dc55a45e2d7"},{url:"assets/mtqLoans-legacy.45b9d1d3.js",revision:"ce7247c51061ac922045d1920be646b7"},{url:"assets/mtqLoans.498920e7.js",revision:"1380bb8eb3a949fbff0450a5eb3ee41c"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/polyfills-legacy.12d4d54b.js",revision:"8337fa635d45ea53e1f748f29b69d040"},{url:"assets/timeCompute-legacy.ce811bbe.js",revision:"75f37abebede2f5100cf1de825c1ef63"},{url:"assets/timeCompute.73e73822.js",revision:"d81878c30586ba5cfff39209a8029f0d"},{url:"assets/urlEncode-legacy.7c777ec5.js",revision:"f364a06aa4e80b8d93143c3d650b2011"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/urlEncode.c1bf2b31.js",revision:"3eb126a7acbee5e3db53b31d908efc0c"},{url:"assets/uuid-legacy.034a7d0d.js",revision:"ca29ac8dee25869ef28f617b054690b1"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.4c65f6eb.js",revision:"f63941abef26af063ac625d4f353f754"},{url:"assets/vendor-legacy.7bd45808.js",revision:"2e08735c67f9c445929af47b64cc6315"},{url:"assets/vendor.0e23943e.css",revision:"cbed3746fff14e456025f8c97ca8e869"},{url:"assets/vendor.202237d8.js",revision:"2cfbfc68231830c054b02c81a907c1f6"},{url:"assets/viewSourceCode-legacy.14e56a6c.js",revision:"2c70bb9166671537a70bc6563a26808a"},{url:"assets/viewSourceCode.e003fba9.js",revision:"4922ec93068aaf166fc30bfc751a7ac7"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.7cad1c54.js",revision:"d0eea0e776a3550772815deeaac05b76"},{url:"assets/whatAnimeIsThis.646882e0.js",revision:"2aa937e2b376953a55f0af3f3b786b64"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"index.html",revision:"2155cc0cfed4aed9c88e4481343cf760"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"d2a2dead2b428284c30e02e8f347890d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
