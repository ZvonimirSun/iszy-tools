if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-93350241"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404-legacy.8bb0f3b3.js",revision:"aaa8abc1c90a4957efbb6a5e693a6c07"},{url:"assets/404.15512693.js",revision:"872c502fc0dce386726b22f08a8d779d"},{url:"assets/404.f4e12072.css",revision:"7bc8c8e2618832a0b9d57ee2abf2a577"},{url:"assets/bilibiliBv2av-legacy.e68ff09d.js",revision:"904571a10d96835443f7f15ba67fc0fa"},{url:"assets/bilibiliBv2av.010f95ae.js",revision:"994081c6359a40c0d94255c6d76076d9"},{url:"assets/bilibiliBv2av.733d2c1b.css",revision:"1d04d6afe8b712c67f3b66d06ff9e53a"},{url:"assets/colorTransform-legacy.dd4cdc8d.js",revision:"155fd514c6f75035d87088f105cd65df"},{url:"assets/colorTransform.089d2567.js",revision:"d94c93769cc8412982446d99a79b9766"},{url:"assets/container-legacy.094bec58.js",revision:"4d16816388b0dadb1798d39ab6f363ac"},{url:"assets/container.72674e33.js",revision:"f3489b9c716fbc6c45a22926e30859f7"},{url:"assets/container.9ad14307.css",revision:"fb602d57c4d8d362ba292000802aba68"},{url:"assets/Home-legacy.2021861f.js",revision:"e916f479ea267949079491f5e04e1e9e"},{url:"assets/Home.00472179.js",revision:"44c623f42d34423e3ada583f6e7bf488"},{url:"assets/Home.d16dc045.css",revision:"a2d2f2259f3f8fd22af0756bdb8a2ec5"},{url:"assets/imgHosting-legacy.ccbd308d.js",revision:"d498eda3fd8f4b6370c400fd16ed9c1f"},{url:"assets/imgHosting.15e579cb.css",revision:"14c69e922bc5c20296710b2095183468"},{url:"assets/imgHosting.645cea93.js",revision:"31d9f6d18cc4e3b3e7e0b27ec2181b40"},{url:"assets/index-legacy.4988fca8.js",revision:"6aadb26c9eb143af75437857e78ecbec"},{url:"assets/index-legacy.5162f5ef.js",revision:"7b163c5cb5847797e8985caf3c9b8186"},{url:"assets/index-legacy.5e01c35e.js",revision:"b1f4c973554df97b5a6a2301dfad725d"},{url:"assets/index-legacy.893fc930.js",revision:"bfc663e5ee70502160c22caf26d43755"},{url:"assets/index-legacy.f4eb0bc3.js",revision:"6ac66cf7655fa280ade7045de2f7f089"},{url:"assets/index.08efaf64.css",revision:"f72752f896fb12dcf33f57f100659aa4"},{url:"assets/index.0edc9df2.css",revision:"89acccffa8acd4b4665d9d74fe2d724b"},{url:"assets/index.1c2e2fbc.js",revision:"5a91bd16ad194f71418586be5b5f1f06"},{url:"assets/index.2b38113f.css",revision:"e99353fc9df2419b502c17b5db88e842"},{url:"assets/index.2f553768.js",revision:"ee002eedb0a4ee826607bf0e6ddbb47b"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.549bef56.css",revision:"4e0529a091b0167b3500e724172c4c25"},{url:"assets/index.571a4bb6.css",revision:"2a953df85f1f23c21b00b3be67784516"},{url:"assets/index.64c6affa.js",revision:"853229da307640af6f72518e906385cf"},{url:"assets/index.828b5239.css",revision:"0e52ec129c840e74c65ee5dccd11e60d"},{url:"assets/index.8ce290f9.css",revision:"8282d4faf4adc65f24faffc63a5043ed"},{url:"assets/index.9103fd4b.js",revision:"9018b04cb692a1f7a2c17bc877a12251"},{url:"assets/index.988d0280.js",revision:"f8adf2823e0ac1845e8522e3d365a980"},{url:"assets/index.b41164c8.css",revision:"922e60f8ef5c5f17120844114c26c54b"},{url:"assets/index.b87fca9a.css",revision:"d04029aa991dae56e6cdaff193a753ce"},{url:"assets/index.d5474c67.css",revision:"055df3b52fe9ff200c569d1acc78f959"},{url:"assets/index.ee1adb10.css",revision:"bcd65eba186e4fa9a82d68d5d7cd0acc"},{url:"assets/jsonEditor-legacy.9703caf7.js",revision:"b35c9d90fec628975aefe14cee14af87"},{url:"assets/jsonEditor.46173a35.css",revision:"514e809dca323b0754ec45911e16b4d1"},{url:"assets/jsonEditor.6ff8f010.js",revision:"4a3bb7203d9c1c0918fbdba135b54561"},{url:"assets/lodash-legacy.ff863a97.js",revision:"342aa379a1ecf46ce4c854e8eb70e737"},{url:"assets/lodash.e7de68ee.js",revision:"cb900cf55c6676cd36989ab13ba0e3e2"},{url:"assets/mtqLoans-legacy.59acd854.js",revision:"03f4dcce0a45818444cec17fb8cd52b5"},{url:"assets/mtqLoans.2e3b7054.css",revision:"0b34264b8d094023a615ac13744fcc48"},{url:"assets/mtqLoans.cf0b31b5.js",revision:"d589b9c62c7ed039bb816ba3c4740206"},{url:"assets/polyfills-legacy.88dbee3a.js",revision:"216cd80433a57a98675160f11960b022"},{url:"assets/timeCompute-legacy.affdb91d.js",revision:"9628c6b8e8c3588bedab6c967bb7830b"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/timeCompute.b0a01bb5.js",revision:"65a4cfab6b332c039412a495978b75b6"},{url:"assets/uuid-legacy.b129299e.js",revision:"5ee1f8f21929e702d9b1fb0c1b08a97e"},{url:"assets/uuid.54347d81.js",revision:"1fb9a9d9d21b02f46784bc94b18b1eef"},{url:"assets/uuid.bdd063f3.css",revision:"04b3f066c24427c605df6f1ff78dab21"},{url:"assets/vendor-legacy.6880228f.js",revision:"0fb7bbcd15d161933eee91fe49407058"},{url:"assets/vendor.d56f002d.js",revision:"a9801bed0b806470520b3fd564db01cb"},{url:"assets/vendor.e075551c.css",revision:"cf216509132ef68997305f25e8f12d3a"},{url:"assets/whatAnimeIsThis-legacy.60ad0833.js",revision:"f01a9e3639ef2e80a1b69f3b1e8464bf"},{url:"assets/whatAnimeIsThis.27aa785c.css",revision:"18fd36af57444b28740b3c9c1bef6633"},{url:"assets/whatAnimeIsThis.afd23906.js",revision:"414cac98040a76c7410781a995f6f5e3"},{url:"googlefont.css",revision:"2c3d67c658771b0cc5a376a8689eb37a"},{url:"index.html",revision:"96c6b52c7faf4b3630a5f9aa29cc097d"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/gstatic\.loli\.net/,new s.StaleWhileRevalidate({cacheName:"loli-google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new s.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/at\.alicdn\.com/,new s.StaleWhileRevalidate({cacheName:"iconfont",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
