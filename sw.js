if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-93350241"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404-legacy.9249ce8f.js",revision:"741463361d43d96cd3326919fce6d6fd"},{url:"assets/404.b55a78a4.css",revision:"c6902119e2449dfc0218355f22cd45d1"},{url:"assets/404.d0992478.js",revision:"b154ff7a2ab45dfb6bc81b27cac646b5"},{url:"assets/bilibiliBv2av-legacy.78c99d79.js",revision:"8e21ce6df5c1abca2c65fbb24facb2da"},{url:"assets/bilibiliBv2av.a1acfcf9.js",revision:"13284b5d1dbbac9f92a3ebcd7dd1779e"},{url:"assets/bilibiliBv2av.f7a01c7d.css",revision:"8f9a6a8356b48b9541b2beebaedc2ea1"},{url:"assets/colorTransform-legacy.0031dca0.js",revision:"f0a04ad6e18a3e46438641830316914e"},{url:"assets/colorTransform.2d83906d.js",revision:"bb7655c259ba9ddb6452029c3a50d170"},{url:"assets/container-legacy.d2eb6f88.js",revision:"08611b6d50bc2009c3bb36e162e1f78b"},{url:"assets/container.04b81ba1.js",revision:"ff88e706ac10cad4795dc0b7dab799da"},{url:"assets/container.3a42becb.css",revision:"df11b5720dd43653fd85b89921681fd8"},{url:"assets/Home-legacy.807013f3.js",revision:"074abde3f62e8e7f88b08d7ab9da6733"},{url:"assets/Home.5ece5c37.js",revision:"ca9f2c9c8a8820230c4c9a715ee636b9"},{url:"assets/Home.6ecc999a.css",revision:"783ee9e81e8ca6cb5b13bfcbcbdc9cfa"},{url:"assets/imgHosting-legacy.6bc4aca6.js",revision:"ffb1e13fb14f28cbceeae8ce2be37605"},{url:"assets/imgHosting.041e7be6.css",revision:"c374ca9e88a2db2fb0de3878a08ff058"},{url:"assets/imgHosting.4764284d.js",revision:"96f870bafc90281e034bbba22e937a32"},{url:"assets/index-legacy.2629a13c.js",revision:"a84bb296698c3e941e8b029d4ac6a5b3"},{url:"assets/index-legacy.2891c169.js",revision:"b060d5a4161fcbd6b21fa60bc7d3311e"},{url:"assets/index-legacy.724b6977.js",revision:"57a2c5b26309b3656a80a96c4fea051b"},{url:"assets/index-legacy.9a7eae30.js",revision:"681d6c6a27751113031b1eb6c067f475"},{url:"assets/index-legacy.9f50e2ae.js",revision:"638135756891df61f61df19714294729"},{url:"assets/index.0edc9df2.css",revision:"89acccffa8acd4b4665d9d74fe2d724b"},{url:"assets/index.1cd3bf44.js",revision:"ff3d9066a68909b373a2a1fe70a99c26"},{url:"assets/index.1f2b7f1f.js",revision:"aee8dfd780c6a90f2e9a0ab2f33c0863"},{url:"assets/index.2aad6642.js",revision:"02d46cba416a7b1a72b5e1f0e76edb18"},{url:"assets/index.2b38113f.css",revision:"e99353fc9df2419b502c17b5db88e842"},{url:"assets/index.38d7b4aa.js",revision:"5e58d29618fd7726e134c2cd8c7e7f96"},{url:"assets/index.3ba81b6d.css",revision:"2ff4c235b63d09e32a871c502cb1ef8b"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.4fc760c4.css",revision:"0a44b1436fb8c164ca37d77793db7973"},{url:"assets/index.62c4aaf3.css",revision:"3a9fdc7f13ebc434702aa09f4d8c5b64"},{url:"assets/index.828b5239.css",revision:"0e52ec129c840e74c65ee5dccd11e60d"},{url:"assets/index.9b9f4a5b.js",revision:"88f2fb7c4bade48b10172b4931b407af"},{url:"assets/index.b41164c8.css",revision:"922e60f8ef5c5f17120844114c26c54b"},{url:"assets/index.b87fca9a.css",revision:"d04029aa991dae56e6cdaff193a753ce"},{url:"assets/index.d532c1a0.css",revision:"52db7148a812fcd6027674ac08047951"},{url:"assets/index.d5474c67.css",revision:"055df3b52fe9ff200c569d1acc78f959"},{url:"assets/index.dbc01653.css",revision:"e89df1ef9cf2f3351b28acab6444be4f"},{url:"assets/jsonEditor-legacy.f4233448.js",revision:"593a5bfbd43db174c88415b873c11cb2"},{url:"assets/jsonEditor.3d3655dd.css",revision:"42d6d22119527b3bb61666c376f18609"},{url:"assets/jsonEditor.ceccb343.js",revision:"20039fbb386c782587bde56aa0558105"},{url:"assets/mtqLoans-legacy.ed135263.js",revision:"fc6deee7ff7f4f85a0b78d178f806d21"},{url:"assets/mtqLoans.221ce41c.js",revision:"b61f284a2337acce657f7b72a7de2c1d"},{url:"assets/mtqLoans.669236ee.css",revision:"4d483d80706135d9858b89bf45b55289"},{url:"assets/polyfills-legacy.f0a0721e.js",revision:"646eda6f68a9d80102fc20461d1f31ff"},{url:"assets/timeCompute-legacy.2aec5932.js",revision:"3c48c1657d2d0a0a4f3d2adbf85a88e4"},{url:"assets/timeCompute.85863ff9.js",revision:"c113c36b04842130717d6916fc79d39c"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/uuid-legacy.c033978c.js",revision:"39c431c770f74589bd6be292afc87159"},{url:"assets/uuid.51f6ecc9.js",revision:"5ce57d0ffd80f7b26ce0653e6aafc89c"},{url:"assets/uuid.efb7c23a.css",revision:"d237365a8738f8f73f8b3c57ececad92"},{url:"assets/vendor-legacy.fe95ffbf.js",revision:"b42375d341fcffbdbbfd40556a9db0f9"},{url:"assets/vendor.0d36e253.js",revision:"d97ffad82db5ba4185d7fa4961352fbf"},{url:"assets/vendor.3d0f5bad.css",revision:"706d997d73162ec82aafe2a96726be5f"},{url:"assets/whatAnimeIsThis-legacy.9b126c2b.js",revision:"4dda4f05096ee0ca17342d069e56c720"},{url:"assets/whatAnimeIsThis.30db75ca.js",revision:"0fa5c84ceb9a64f7109ce233df98bf2d"},{url:"assets/whatAnimeIsThis.5e06830b.css",revision:"861eb47cf1cf8efb86669d80785b5d4b"},{url:"googlefont.css",revision:"a73b9e70a51def056518efb4b7812603"},{url:"index.html",revision:"18ab83ae814168e3f39dddbf530dd068"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/gstatic\.loli\.net/,new s.StaleWhileRevalidate({cacheName:"loli-google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new s.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
