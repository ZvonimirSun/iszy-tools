if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,d)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return i;default:return s(e)}}))).then((s=>{const e=d(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-93350241"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404-legacy.0af7a373.js",revision:"d9bf46f8de94c27dac9272c36b22055b"},{url:"assets/404.74de4acd.js",revision:"5f3f604d7de8be457c465188ab70fc8e"},{url:"assets/404.ed8e1166.css",revision:"a19a10f92686dcde8e1bd2a0171bf222"},{url:"assets/bilibiliBv2av-legacy.c306cc5d.js",revision:"86fdd73df2c157703cb0e81a5f9ca4a2"},{url:"assets/bilibiliBv2av.733d2c1b.css",revision:"1d04d6afe8b712c67f3b66d06ff9e53a"},{url:"assets/bilibiliBv2av.cb50ff6a.js",revision:"2f04a497147ac4de9cd176cc294a9490"},{url:"assets/colorTransform-legacy.0e69c8f3.js",revision:"7137706d6e17a9b7ffcaf940f07946c3"},{url:"assets/colorTransform.326131fe.js",revision:"f4dc7ad54e2d2cd5ddca13e909ce27c4"},{url:"assets/container-legacy.18bd5733.js",revision:"133ea8f0d60fdc0ec14d3300611ead25"},{url:"assets/container.10d153c5.css",revision:"da66333739ab8b39e1a41a7b13fa7466"},{url:"assets/container.e89c5783.js",revision:"efb7309b9ae3dbe6c4fd9b2ece61d9a1"},{url:"assets/Home-legacy.9e2a85b0.js",revision:"bf9b321d7135ef478014446c92fdc6c6"},{url:"assets/Home.3d8405d1.js",revision:"9c182a99f5f25e59a9375255856b9801"},{url:"assets/Home.d16dc045.css",revision:"a2d2f2259f3f8fd22af0756bdb8a2ec5"},{url:"assets/imgHosting-legacy.032f79f3.js",revision:"23c1ce1f22855c390c58f86c9c422f01"},{url:"assets/imgHosting.59d4552d.css",revision:"60975bb0bcf226ff97696d445c5ff5ef"},{url:"assets/imgHosting.e06fbe31.js",revision:"57e2cede5113e9fbdda0fd6445cfb141"},{url:"assets/index-legacy.142be609.js",revision:"82be8fcbdd3eb2f677cc9f8fdf0d49f8"},{url:"assets/index-legacy.3361adac.js",revision:"e8783a9a3c85c0f7044ceb8203626d3e"},{url:"assets/index-legacy.47f0c665.js",revision:"38db22ba1baef3d75eb9eafcfb4ed2cd"},{url:"assets/index-legacy.7706dcfc.js",revision:"5a9902a33f24e5421fc2cdf912bd8dc4"},{url:"assets/index-legacy.aca60c34.js",revision:"18cca59d80cd0e9a4a29ef598a00edea"},{url:"assets/index.071c7d58.css",revision:"982cdd4c8eacfee82b61d5df00665371"},{url:"assets/index.0c7abd86.css",revision:"c301af2f980bdfe364dd6d5ece977353"},{url:"assets/index.0edc9df2.css",revision:"89acccffa8acd4b4665d9d74fe2d724b"},{url:"assets/index.2b38113f.css",revision:"e99353fc9df2419b502c17b5db88e842"},{url:"assets/index.2e8b877c.js",revision:"d26e4d9942c6dd377a3ae93799635ac9"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.48ae10d2.js",revision:"a0514b261364708ab4cc713edabe7d62"},{url:"assets/index.7d4515cb.js",revision:"2d996a096242dca971592916af2bf76e"},{url:"assets/index.828b5239.css",revision:"0e52ec129c840e74c65ee5dccd11e60d"},{url:"assets/index.891788b1.css",revision:"8293e15599bfd9197954d90cffc3addb"},{url:"assets/index.ac5d92fb.css",revision:"80a5c7d9c48097c8d7647dd783046606"},{url:"assets/index.b41164c8.css",revision:"922e60f8ef5c5f17120844114c26c54b"},{url:"assets/index.b87fca9a.css",revision:"d04029aa991dae56e6cdaff193a753ce"},{url:"assets/index.d4314ec4.js",revision:"3aa3dc9bcbd39d33bbae397a6818d6cf"},{url:"assets/index.d5474c67.css",revision:"055df3b52fe9ff200c569d1acc78f959"},{url:"assets/index.da9287f6.js",revision:"2d3372f4323d7b750f99d7fe75441d53"},{url:"assets/index.ee1adb10.css",revision:"bcd65eba186e4fa9a82d68d5d7cd0acc"},{url:"assets/jsonEditor-legacy.6f43083a.js",revision:"dd9d0f0c6a2c237fc271a2a53eff8c70"},{url:"assets/jsonEditor.4656d062.css",revision:"4fba70febd27b7d63b262c38d163f445"},{url:"assets/jsonEditor.5ea146bb.js",revision:"9246f63d7a2b19bae6b757c8a4d0bafe"},{url:"assets/lodash-legacy.9d81bad2.js",revision:"2f1ee1924c6754c405609849de9952bd"},{url:"assets/lodash.757a9378.js",revision:"a7ef52936079151c6a118145cd9fedf1"},{url:"assets/mtqLoans-legacy.e5af8344.js",revision:"e57cbf037da6a9883bdc6bca43b4ac36"},{url:"assets/mtqLoans.25e0c872.css",revision:"c0890b72e839ff4f13c6007b5eb330f8"},{url:"assets/mtqLoans.27bc0869.js",revision:"e47c6c58249ff51adf1bb3dab7abb991"},{url:"assets/polyfills-legacy.88dbee3a.js",revision:"216cd80433a57a98675160f11960b022"},{url:"assets/timeCompute-legacy.b674656a.js",revision:"65fbfbd84e7e29b4e7f9552ce4d9ab06"},{url:"assets/timeCompute.73dabe43.js",revision:"9fdeca70f1b2305c426cee9a55ab109d"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/uuid-legacy.317534dc.js",revision:"ff641d2fbee1699fd789a699209960de"},{url:"assets/uuid.257fb316.css",revision:"b5f9c1b3db15b6e2dd05c052d4f1eb95"},{url:"assets/uuid.4ab726b4.js",revision:"2ce64d468724ba032e2ab4dfb5a1f7a9"},{url:"assets/vendor-legacy.03c66d24.js",revision:"7306a464d02ff8e64185292633f3ab78"},{url:"assets/vendor.a698f461.js",revision:"f7b5d3940480b3db5a9c33594ede8613"},{url:"assets/vendor.e075551c.css",revision:"cf216509132ef68997305f25e8f12d3a"},{url:"assets/whatAnimeIsThis-legacy.4c18873a.js",revision:"b0632d812cdd8ddb701a77ba9923af7a"},{url:"assets/whatAnimeIsThis.04ce5742.js",revision:"017910d80cf995af4b1e8a0dae56468f"},{url:"assets/whatAnimeIsThis.27aa785c.css",revision:"18fd36af57444b28740b3c9c1bef6633"},{url:"googlefont.css",revision:"2c3d67c658771b0cc5a376a8689eb37a"},{url:"index.html",revision:"a37b36682a202abed8afec685729f914"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/gstatic\.loli\.net/,new s.StaleWhileRevalidate({cacheName:"loli-google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new s.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
