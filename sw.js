if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise((async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]}))},e=(e,c)=>{Promise.all(e.map(s)).then((s=>c(1===s.length?s[0]:s)))},c={require:Promise.resolve(e)};self.define=(e,a,i)=>{c[e]||(c[e]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+e.slice(1)};return Promise.all(a.map((e=>{switch(e){case"exports":return c;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return c.default||(c.default=e),c}))})))}}define("./sw.js",["./workbox-93350241"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404-legacy.cc7d3260.js",revision:"82c8b2e901503958e0e9ce8bc99845bd"},{url:"assets/404.7ce79941.js",revision:"1748beb072e222ce81d1ae26c56b980f"},{url:"assets/404.f4e12072.css",revision:"7bc8c8e2618832a0b9d57ee2abf2a577"},{url:"assets/bilibiliBv2av-legacy.83d9c176.js",revision:"7c9f608240c0d360e7621d2ce6bd3859"},{url:"assets/bilibiliBv2av.733d2c1b.css",revision:"1d04d6afe8b712c67f3b66d06ff9e53a"},{url:"assets/bilibiliBv2av.8b153b64.js",revision:"ad21351834a0a6ea598c30a2f6e71b0b"},{url:"assets/colorTransform-legacy.dadad5c8.js",revision:"84091dffea15889e9e4d64a105aaa1be"},{url:"assets/colorTransform.b75a7261.js",revision:"eb69a663890cbb4149c391c7a08de345"},{url:"assets/container-legacy.6acadabd.js",revision:"01a1d811c1ff421cb4e877623921b6ff"},{url:"assets/container.477ada9e.js",revision:"6fc02aa2d90bd390a7a49ba9ced3c08f"},{url:"assets/container.9ad14307.css",revision:"fb602d57c4d8d362ba292000802aba68"},{url:"assets/Home-legacy.eaf01fcc.js",revision:"3bf275496f080643016350f3ed5fe491"},{url:"assets/Home.33cda28d.css",revision:"83d8dc884e777b138995ef2a6a6d69a6"},{url:"assets/Home.f415c378.js",revision:"d7c576a4eca0f7f9c7ff83ddac8acbd6"},{url:"assets/imgHosting-legacy.37936341.js",revision:"d399ec814b2d584165aa30302a85002b"},{url:"assets/imgHosting.15e579cb.css",revision:"14c69e922bc5c20296710b2095183468"},{url:"assets/imgHosting.bd3ac0f0.js",revision:"c58bebb3869d5cabb016c40fcb0fe5f2"},{url:"assets/index-legacy.454d25a1.js",revision:"b104cd0034fa0e483fd7315021f0ba0b"},{url:"assets/index-legacy.46de66c6.js",revision:"5972f46913d3237b239b22710a593fe2"},{url:"assets/index-legacy.76b71a97.js",revision:"8c47d8d07dcaece971a1ad0d824d49ad"},{url:"assets/index-legacy.b75c9427.js",revision:"5789fc2b2bbc1c15f2543be47ac539cc"},{url:"assets/index-legacy.c9fd48ce.js",revision:"f7337ebb0f23eaf8cf5e26e6a31119c3"},{url:"assets/index.074909bc.css",revision:"5e0a7cc0b8db938b7219c593b5c62aed"},{url:"assets/index.08efaf64.css",revision:"f72752f896fb12dcf33f57f100659aa4"},{url:"assets/index.0edc9df2.css",revision:"89acccffa8acd4b4665d9d74fe2d724b"},{url:"assets/index.2b38113f.css",revision:"e99353fc9df2419b502c17b5db88e842"},{url:"assets/index.336e5d53.css",revision:"868a366fd2b31fd0a5f1c11184de60f9"},{url:"assets/index.35dd9a10.js",revision:"57d1c750443765d0821e1f425c87eff4"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.81d5ba7c.js",revision:"cd9c639195c9ab958fc9ff371f322ace"},{url:"assets/index.828b5239.css",revision:"0e52ec129c840e74c65ee5dccd11e60d"},{url:"assets/index.8ce290f9.css",revision:"8282d4faf4adc65f24faffc63a5043ed"},{url:"assets/index.b41164c8.css",revision:"922e60f8ef5c5f17120844114c26c54b"},{url:"assets/index.b87fca9a.css",revision:"d04029aa991dae56e6cdaff193a753ce"},{url:"assets/index.d070676f.js",revision:"90e2eddc68518d067248fa726bb2230b"},{url:"assets/index.d5474c67.css",revision:"055df3b52fe9ff200c569d1acc78f959"},{url:"assets/index.e14191af.js",revision:"c288887de6d047c1c91257932ab24c5a"},{url:"assets/index.ee1adb10.css",revision:"bcd65eba186e4fa9a82d68d5d7cd0acc"},{url:"assets/index.f1eda248.js",revision:"d649cb6dfd32f333cecc3f73f5e39758"},{url:"assets/jsonEditor-legacy.34f0eba6.js",revision:"f7edc585603526a60c7db1a17b30811f"},{url:"assets/jsonEditor.126acb46.js",revision:"98297c36c1c38b226800ed006cfc838c"},{url:"assets/jsonEditor.631ec971.css",revision:"420faa44b2f4b333b6092a371b5194cc"},{url:"assets/mtqLoans-legacy.258abe71.js",revision:"f5653a44816deb1359cdc071f0fb3829"},{url:"assets/mtqLoans.2e3b7054.css",revision:"0b34264b8d094023a615ac13744fcc48"},{url:"assets/mtqLoans.eeb349c7.js",revision:"4f83fa4ccac96b0ab41be6ec79c09ab9"},{url:"assets/polyfills-legacy.1669762b.js",revision:"032b7acd25a35315b156dd1f2834716b"},{url:"assets/timeCompute-legacy.3c0e8f7e.js",revision:"eaab2562fec3d0f1d63ce2b3d4340e8e"},{url:"assets/timeCompute.69d92124.js",revision:"99ed44f109b863e1e6b35138f1962d41"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/uuid-legacy.45c1744a.js",revision:"83e6626c566e24cf15ada193f592a26d"},{url:"assets/uuid.bdd063f3.css",revision:"04b3f066c24427c605df6f1ff78dab21"},{url:"assets/uuid.cefe2163.js",revision:"4c03c3919040d68b46665db2b3b82671"},{url:"assets/vendor-legacy.10dd88fa.js",revision:"f5832355900f23a18ea3741164298867"},{url:"assets/vendor.3ed8d532.js",revision:"c1f81cc7c685baaaa246211c4a6751cc"},{url:"assets/vendor.e075551c.css",revision:"cf216509132ef68997305f25e8f12d3a"},{url:"assets/whatAnimeIsThis-legacy.0c4cc44a.js",revision:"cac566acf13ed9ce8abacac8d5936502"},{url:"assets/whatAnimeIsThis.27aa785c.css",revision:"18fd36af57444b28740b3c9c1bef6633"},{url:"assets/whatAnimeIsThis.8060b981.js",revision:"1d9ad9438a04568531ff10683f9ae080"},{url:"googlefont.css",revision:"2c3d67c658771b0cc5a376a8689eb37a"},{url:"iconfont.js",revision:"c3d69c2d15c03b901477f0cabcc623e7"},{url:"index.html",revision:"0ea31a4e817bf752b73e3a3e9176afcf"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/gstatic\.loli\.net/,new s.StaleWhileRevalidate({cacheName:"loli-google-fonts-webfonts",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new s.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new s.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
