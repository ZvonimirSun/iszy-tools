if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-93350241"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.adef9355.js",revision:"24652cdbb596d26749d5a351fc466193"},{url:"assets/404.ed8e1166.css",revision:"a19a10f92686dcde8e1bd2a0171bf222"},{url:"assets/404.f3241b20.js",revision:"9b27904f19ebf432185a465b34ec28ff"},{url:"assets/bilibiliBv2av-legacy.faba41d7.js",revision:"39cd0399d16264b5be2f2773cd06011a"},{url:"assets/bilibiliBv2av.017a0725.js",revision:"d83b4938a0b7774b58c06aea79dc1ad1"},{url:"assets/bilibiliBv2av.cd471374.css",revision:"63cf92d923da200af71c238d2e7a7471"},{url:"assets/colorTransform-legacy.ed976552.js",revision:"c74625e67bcd96e7187eebf893258175"},{url:"assets/colorTransform.98c43086.js",revision:"44984a250aababb8dfa80ef463e77007"},{url:"assets/container-legacy.d01facd5.js",revision:"44b1cb959443f6aedb19b2578855cccb"},{url:"assets/container.10d153c5.css",revision:"da66333739ab8b39e1a41a7b13fa7466"},{url:"assets/container.24c59f10.js",revision:"448515e9ce08b6699c364066fedb6039"},{url:"assets/createFile-legacy.0d7616e8.js",revision:"f339e5832b987a1066c4b380b8bc9571"},{url:"assets/createFile.59f5d2ae.css",revision:"d03d004b318b2c500453f1f4353010c0"},{url:"assets/createFile.80703285.js",revision:"b2df0cad144df63edb6d216ea0d6eaaf"},{url:"assets/cssFormatter-legacy.fbb63b7e.js",revision:"fc2d892bd726853e1938aaef81878835"},{url:"assets/cssFormatter.b7a1cf4c.css",revision:"c9cbed41be8f9c0449e8bfd2e761566c"},{url:"assets/cssFormatter.bdb51b73.js",revision:"8f1164617d488ffe993847c73c63f76c"},{url:"assets/dataListTreeHandler-legacy.e32d78af.js",revision:"944c9affb3f37d6192a11239c299c0ca"},{url:"assets/dataListTreeHandler.6474fa06.js",revision:"94f874d8de26d4ef194c8ca85d430888"},{url:"assets/dataListTreeHandler.97612e3d.css",revision:"5327f41e793d9b298f75c3b9a278d1f6"},{url:"assets/Home-legacy.09a308e0.js",revision:"e3bfafc03f4fc344afae1dab7be9901b"},{url:"assets/Home.6d975836.css",revision:"e1119bd1f387b85f26db61c33a5d30d6"},{url:"assets/Home.e1fc4829.js",revision:"d199938f57bd0214688d6e89521b6a43"},{url:"assets/imgHosting-legacy.e3cc7036.js",revision:"4c0c8186ab9acb1a6ae58ffe5f13e124"},{url:"assets/imgHosting.4caa0532.js",revision:"9aaf8b062420e6ea325089100788292a"},{url:"assets/imgHosting.59d4552d.css",revision:"60975bb0bcf226ff97696d445c5ff5ef"},{url:"assets/index-legacy.04b09aef.js",revision:"87fe83d8d3e32ab09bde1666a4a265f6"},{url:"assets/index-legacy.4ed8cdcb.js",revision:"a568a5178230feff4fc9faeba088db54"},{url:"assets/index-legacy.8aebf446.js",revision:"53a8dc9300e307ea6d096e5d8653d4a6"},{url:"assets/index-legacy.8fcfa83a.js",revision:"ecc8e0b20fb3f2226feee002faedb1b7"},{url:"assets/index-legacy.909f0b52.js",revision:"2ebf008426420386ab2c457b6bd929bf"},{url:"assets/index-legacy.a387fff5.js",revision:"23f5b6caf058059fad3b17d1ebd7f8fc"},{url:"assets/index-legacy.c11183e9.js",revision:"fa53df3791973af28221584355991803"},{url:"assets/index.05d2ad06.js",revision:"21ee47c500cd2ea8a66af2e2a63b1098"},{url:"assets/index.138b0b24.js",revision:"daedef12b21d611dc77d9f6687a37521"},{url:"assets/index.171559b2.css",revision:"80727ba9e8afacedb0ed51fae2efce42"},{url:"assets/index.1741d8d6.css",revision:"881dfa0246640ee0bc168d4e385bb681"},{url:"assets/index.1800f0a6.css",revision:"c77f6eb06599b9908829864312088412"},{url:"assets/index.4150cfa4.js",revision:"bc1441023b10aebe5459f8200c5076f9"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.5527443f.js",revision:"ef081d5eda00dab46aa10bdb4c3450b6"},{url:"assets/index.568ce6f4.css",revision:"1737860ac785c2dfb561fb7d2a8387c9"},{url:"assets/index.70b57e71.css",revision:"e7f9c461988124afd6804c9de56d972b"},{url:"assets/index.749972d7.js",revision:"2e12a43f702ed574637af4f9fda09026"},{url:"assets/index.87718197.css",revision:"0aacb5f99ed7aaf341cbfe25d574568b"},{url:"assets/index.891788b1.css",revision:"8293e15599bfd9197954d90cffc3addb"},{url:"assets/index.99bfab5b.css",revision:"4a64c8d51901f82d123d6a325d0e09a4"},{url:"assets/index.9bdf3d5b.css",revision:"8fdb592279bfb293605d5276b34f83de"},{url:"assets/index.a5bd813e.js",revision:"93d91c41537fd676a8f888a9a3b9461d"},{url:"assets/index.ab747a21.css",revision:"8b2c34a63772a5419e11bf6e7320b6a1"},{url:"assets/index.c2c87e19.css",revision:"90195f923092e12f75b5a3ffd3b5f17a"},{url:"assets/index.c928c475.js",revision:"6f194db21f48ec24f29c30f673d35f39"},{url:"assets/index.d545795c.css",revision:"4372bcd134ef68a360046c13457759bb"},{url:"assets/index.df407308.css",revision:"62a9bf489c6f411d3210577254833bf9"},{url:"assets/jsonEditor-legacy.452460fe.js",revision:"e1f73d8fbf970f01b6286c07d9967d30"},{url:"assets/jsonEditor.25503c34.js",revision:"d57cd568498f03afa3ba2b6b8cfceaa5"},{url:"assets/jsonEditor.64e239c9.css",revision:"8c131d5a9fa46c08641058438be1b5c2"},{url:"assets/mtqLoans-legacy.d0d2ddf8.js",revision:"bfbc4183704840cfa2edaedbbd9c109b"},{url:"assets/mtqLoans.3e026682.css",revision:"0c50e22b55ca90830063ef8d4934b624"},{url:"assets/mtqLoans.ab25f041.js",revision:"023443086802e580b316bab733da2a26"},{url:"assets/polyfills-legacy.6238b6b6.js",revision:"92844d3c12dbeaee4d1505ba766fbb8c"},{url:"assets/timeCompute-legacy.c6d57f11.js",revision:"028215bd77b27ff33676b63d33307024"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/timeCompute.d70af84c.js",revision:"2260d239f071efc152f82c5940a0cc91"},{url:"assets/urlEncode-legacy.e052e202.js",revision:"63ebd242edcf975111ae6a54630e85ef"},{url:"assets/urlEncode.33049452.css",revision:"df78b3ae888dd003ea05a6332664cd5f"},{url:"assets/urlEncode.d9541254.js",revision:"0c2a376813b9a98f83f9cf739c11dc1d"},{url:"assets/uuid-legacy.8aa03126.js",revision:"063f1a9ba60b9d01388c041625d51c27"},{url:"assets/uuid.5db27828.js",revision:"af6ee6207f30aad6d0da173176ac4d82"},{url:"assets/uuid.9b939c0e.css",revision:"4740bcd54e2022257748532070619e6d"},{url:"assets/vendor-legacy.573b869a.js",revision:"2b09aad4f310f87f8cbf21c80b0cc6b7"},{url:"assets/vendor.808e3089.js",revision:"95ffb1d194b3463488efae5bce9a97e4"},{url:"assets/vendor.eec7920e.css",revision:"3955d4f06dffb8dea95e4ad2ce13d24a"},{url:"assets/viewSourceCode-legacy.47af5eaf.js",revision:"fc70f2d5b3e8d36be2edbc5600bd21a4"},{url:"assets/viewSourceCode.7324fa0b.css",revision:"fa80428bd85a5b62252569f695f462db"},{url:"assets/viewSourceCode.f292b646.js",revision:"c0614864b72be3f3b46987c2d74306d8"},{url:"assets/whatAnimeIsThis-legacy.aaa85fa4.js",revision:"a2490e1e658297057923a1bff3914d90"},{url:"assets/whatAnimeIsThis.162c1ff3.js",revision:"435b37d7ece8f22fc6e9c0e85fedc78e"},{url:"assets/whatAnimeIsThis.f277e4ce.css",revision:"c03baa83337096d91916e1f5e953e0d0"},{url:"index.html",revision:"8954eb2da51711a60b80400f8543d6cd"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"f48708f3769001993179700fb1818425"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"iszy-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com/,new e.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
