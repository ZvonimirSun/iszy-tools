if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-1770cef3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.d4d832b3.js",revision:"ae62dd457d4bc9400fc6376572715419"},{url:"assets/404.389992f4.css",revision:"db447a898d185b0083946d8adee0b7ba"},{url:"assets/404.a06c7ae1.js",revision:"37b9b6b6b229138bdc6f10c8ca34ba3a"},{url:"assets/bilibiliBv2av-legacy.232b2f5d.js",revision:"cb457c9de82a9626d07b5ef9c157d7a1"},{url:"assets/bilibiliBv2av.2b5f40b0.css",revision:"27178cc9d7ab378f5062fd8e943d7970"},{url:"assets/bilibiliBv2av.8f1d7368.js",revision:"7ad37c3aae9480ba17890de63f7dbbc3"},{url:"assets/colorTransform-legacy.3f45f6b7.js",revision:"f8e016f8bce220f543415c4acb8fe7e2"},{url:"assets/colorTransform.95e14c6e.js",revision:"56046d4449d421b515db9351608cfdb9"},{url:"assets/container-legacy.9c36a3b2.js",revision:"10c7c6bf9cadc00beed6ec9cda9a5754"},{url:"assets/container.0c5c7edf.js",revision:"cd597cf3e15291b0a1045c6c67c7d473"},{url:"assets/container.1e4ae840.css",revision:"e50382edd36d39d693e28209a6194fd0"},{url:"assets/cssFormatter-legacy.9813b2ab.js",revision:"8b73303f4fa22432c123812974c190f0"},{url:"assets/cssFormatter.6434bdc3.css",revision:"4cb668ed5ab1dafd28405096e13fff9a"},{url:"assets/cssFormatter.f8a0e915.js",revision:"8c454f98fb57ec807703ce33b57e5c47"},{url:"assets/geoJson-legacy.0854b1f0.js",revision:"57aa46af95b6aeefd44b330fa631eec5"},{url:"assets/geoJson.4f6a35d2.css",revision:"028499f114b4371dcd741b3b4750d75a"},{url:"assets/geoJson.63293bd1.js",revision:"e36e97169300ca66c571392775533e01"},{url:"assets/Home-legacy.3722587a.js",revision:"70317f9c4c96fa4ee3e8e6a5eb8ebd3c"},{url:"assets/Home.9e9e0f11.js",revision:"2ec912f9927af72d9447264828960d33"},{url:"assets/Home.ea7d2cfd.css",revision:"654fc1dbb165b07eb4691af6ef0dc9d2"},{url:"assets/imgHosting-legacy.222fce74.js",revision:"9d2cc80fa4e9ed73f8de84cbc903250c"},{url:"assets/imgHosting.6f3b7102.css",revision:"e4aa2bae6fe79a45625cb22fff170611"},{url:"assets/imgHosting.8b203dc0.js",revision:"c401474d4c1d3023fc70ec9d4a1cd3f0"},{url:"assets/index-legacy.2264d7b9.js",revision:"95c662e04e40c2b91e5f995dbfe0c748"},{url:"assets/index-legacy.3b8dcca6.js",revision:"617e5fa0cb33d7a5036fc1521eb2108c"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.b74436fc.js",revision:"118996d75207f97561b9df310ad2d4ef"},{url:"assets/index-legacy.d36b3b20.js",revision:"a4a3e19061ece57525a9eb29b825c79b"},{url:"assets/index-legacy.f6834ee2.js",revision:"4d6930c4f9f35d9e4b1bda57a71b9830"},{url:"assets/index-legacy.fbea2649.js",revision:"b38f5ee78ab070ecca8359025b6b99fa"},{url:"assets/index.09466242.css",revision:"ad220efeac20d34ef69daea701d163d4"},{url:"assets/index.1482a0f8.js",revision:"ba01330b854683ec5b8d0636a5445c46"},{url:"assets/index.3a313787.css",revision:"4d71456f995fe02c0c84c5f5649781a5"},{url:"assets/index.414482b4.css",revision:"aeaa7408c0730591e369236fd7cbfa74"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.70216c15.js",revision:"5491ae5ab7ffb7f2e9e57795e9689c0e"},{url:"assets/index.90806ec9.js",revision:"0e50725c5ce6a55518a956c1b3ba3093"},{url:"assets/index.92632275.js",revision:"cf5ad7591d574589abad7ec7dafe2e38"},{url:"assets/index.9710e7a5.js",revision:"16673f5e499879e7dcafe95d45e64c76"},{url:"assets/index.98a2a291.css",revision:"9b7e609afd0c716b8b6703fcbbb9bb92"},{url:"assets/index.98f7360a.css",revision:"43f6df0ce7234fcc8aed73e3fa374302"},{url:"assets/index.9e873301.css",revision:"c3ea83fe4e0ffbc0cb2fbdd3be4a9d6d"},{url:"assets/index.ab651cec.css",revision:"f6dfa3a3aad2868f99ee42ba5f22bbc3"},{url:"assets/index.c7c3d162.css",revision:"21f1cc690eaab2398cac57625d4586dd"},{url:"assets/index.ccc15a38.css",revision:"58bcc1c094834ed62b9444cc31e2fca6"},{url:"assets/index.cd256673.css",revision:"cb8e75b45dec52893941be42e6a92085"},{url:"assets/index.cfb775c8.js",revision:"c1a1a4f51ffd1d1f8db010321a92e2c7"},{url:"assets/index.d5ecd051.css",revision:"e7a19be2ab3812db42be088b19a4c7dc"},{url:"assets/index.dc706ce3.css",revision:"663a75eaf0c0f4b1576ccbafac1934a1"},{url:"assets/index.f1831207.css",revision:"130479963cf283de21db4cf90338ffeb"},{url:"assets/index.f885c713.css",revision:"b616094e9dae9f7093bbc79d65756fb8"},{url:"assets/index.fd6e2063.css",revision:"e1508e29f4086fd83f08e3171612a9c4"},{url:"assets/jsonEditor-legacy.f423c294.js",revision:"c2cf399ca9be62013b4da19baf9be631"},{url:"assets/jsonEditor.0a24463d.css",revision:"db8bef459e2ec8d33c2188ddb90af04d"},{url:"assets/jsonEditor.a46aaf40.js",revision:"66a124e1b5a698a24c0217807da98baa"},{url:"assets/jsoneditor.min-legacy.294a4f9f.js",revision:"6190116fbf006d967d20bd21695f9aa2"},{url:"assets/jsoneditor.min.333d03ee.css",revision:"f02933a46288e646a5b4441600805273"},{url:"assets/jsoneditor.min.fd2d1e12.js",revision:"1b2f00b7f3b2017783d75078e9b901ab"},{url:"assets/mtqLoans-legacy.8ed2d179.js",revision:"89e1ac7ce4f53079a159e9812b77eefc"},{url:"assets/mtqLoans.97e03da4.css",revision:"7558b6bbe9411a712ad98b1296daccfc"},{url:"assets/mtqLoans.c077ce2e.js",revision:"8cd61d877eaf1ab839de86cd33c4ae22"},{url:"assets/polyfills-legacy.a169ecd0.js",revision:"5e8a2d0fb7691d82bbd35e3ca050fa26"},{url:"assets/timeCompute-legacy.41d95123.js",revision:"ce579af5058e8bb50b8156fef72eefad"},{url:"assets/timeCompute.d17858cd.js",revision:"b6b4fdfa916c7f84cb3cfb6ca58d36c5"},{url:"assets/urlEncode-legacy.43b1fea2.js",revision:"bd298b26cc8b3974edc484e455571645"},{url:"assets/urlEncode.02d47ebc.js",revision:"e317ffc4db2b8a90a65cbcfd11681b04"},{url:"assets/urlEncode.9f15cd91.css",revision:"4588aacae2be76fedd3522aa9e69ad0a"},{url:"assets/uuid-legacy.74dad789.js",revision:"c2c17ede1772c8bca44f11cbed1dd4a9"},{url:"assets/uuid.027a9c37.css",revision:"b6768fa13f0290e403afb2ad02a0b626"},{url:"assets/uuid.03182227.js",revision:"e58e4ac41dd9b46f0bb846335be3be76"},{url:"assets/vendor-legacy.354fb519.js",revision:"73c2e5e07c859e718cbdf9b89ba6c1f1"},{url:"assets/vendor.03c54d76.js",revision:"e9d876ffcc4d5b81ecf93f4045b04f50"},{url:"assets/vendor.90cdafc8.css",revision:"f723014457eb2f290f5689fe85ba5b67"},{url:"assets/viewSourceCode-legacy.b3eb647b.js",revision:"f11daf1006611eecc7a18e7d087a3222"},{url:"assets/viewSourceCode.7c464e59.js",revision:"b9f49358eafe4d9dacab288aa6733978"},{url:"assets/viewSourceCode.ffa04fc8.css",revision:"87d7f9a356740fe5cf17870e61ac0c93"},{url:"assets/whatAnimeIsThis-legacy.8424455b.js",revision:"694830c453572f16b6491e37a4aad786"},{url:"assets/whatAnimeIsThis.c39747bc.css",revision:"2713c2727d8a4fbf93ef257e86fae914"},{url:"assets/whatAnimeIsThis.cc7e9dec.js",revision:"2dcdc9d391d8cb9fc6d4ccdd9c6f27a8"},{url:"index.html",revision:"093881dd658f9e33664b37d08d24f929"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"f48708f3769001993179700fb1818425"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
