if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-93350241"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404-legacy.f131565b.js",revision:"2dde4813d758c53345afba1d077fa558"},{url:"assets/404.f382f13f.js",revision:"0e1237eda68e1229983d9fdb92f715b4"},{url:"assets/404.f4e12072.css",revision:"7bc8c8e2618832a0b9d57ee2abf2a577"},{url:"assets/bilibiliBv2av-legacy.c4e0a5af.js",revision:"ce3497bb1be69fdf8d0cdbf4189a3b50"},{url:"assets/bilibiliBv2av.5c959594.js",revision:"7e47285e8f6f46ed0c84e0cd8d822554"},{url:"assets/bilibiliBv2av.733d2c1b.css",revision:"1d04d6afe8b712c67f3b66d06ff9e53a"},{url:"assets/colorTransform-legacy.8c97becf.js",revision:"81f27cb2daa42f14936810946e2020d1"},{url:"assets/colorTransform.24004b81.js",revision:"d2a8f7425cb45e1ec7fc189d68c8ffb5"},{url:"assets/container-legacy.f2cd401e.js",revision:"239fd2e61cda1bbac66a5e980cfb651e"},{url:"assets/container.9ad14307.css",revision:"fb602d57c4d8d362ba292000802aba68"},{url:"assets/container.c1bacdd7.js",revision:"9825825d3045b5e9a04fbfb23c073fde"},{url:"assets/Home-legacy.35e8c5b2.js",revision:"65d13ce197bbfa3bd8ed68e529e2cc02"},{url:"assets/Home.089c5ee0.css",revision:"91564eb38736d1020c7edcf637754f76"},{url:"assets/Home.5663b6f0.js",revision:"fcf0c04e277018fc7aa657bb3c43d82b"},{url:"assets/imgHosting-legacy.c380998b.js",revision:"908750c04692deea8dee3ea24dccc584"},{url:"assets/imgHosting.15e579cb.css",revision:"14c69e922bc5c20296710b2095183468"},{url:"assets/imgHosting.fdef8bc6.js",revision:"f2146341dd7897f479ace4422fcb5e58"},{url:"assets/index-legacy.0a90d342.js",revision:"6d98e3b8e9f5e3861990b71020820705"},{url:"assets/index-legacy.0d86fd0e.js",revision:"22d67f8ef20fe2fc11d6b98af24de226"},{url:"assets/index-legacy.6749dcf3.js",revision:"a464ff2c23f330bdd69c76c00e5e9413"},{url:"assets/index-legacy.9b9b19b3.js",revision:"67d3e4cbb19c292ae6e140fa34026369"},{url:"assets/index-legacy.eee61611.js",revision:"746dd7f76a3039e856c080f8f7542d91"},{url:"assets/index.074909bc.css",revision:"5e0a7cc0b8db938b7219c593b5c62aed"},{url:"assets/index.08efaf64.css",revision:"f72752f896fb12dcf33f57f100659aa4"},{url:"assets/index.0edc9df2.css",revision:"89acccffa8acd4b4665d9d74fe2d724b"},{url:"assets/index.2b38113f.css",revision:"e99353fc9df2419b502c17b5db88e842"},{url:"assets/index.3951cd92.js",revision:"d463c46ba898b33e2965587671eb650f"},{url:"assets/index.39e2b7d1.js",revision:"4000b75e2aadc8a181c5f0c0b0e52223"},{url:"assets/index.44d7ddd0.css",revision:"f6fc9851fe04e42484929c2d51522826"},{url:"assets/index.4b27bdb2.js",revision:"1b289e0f24e0b2902538d0abfe0d38ea"},{url:"assets/index.4e3ef97e.js",revision:"d3687c9813a2d1158e72b0c08f3991e3"},{url:"assets/index.828b5239.css",revision:"0e52ec129c840e74c65ee5dccd11e60d"},{url:"assets/index.8ce290f9.css",revision:"8282d4faf4adc65f24faffc63a5043ed"},{url:"assets/index.b3571b78.js",revision:"c5d20c7ebcb57adb6694e4e1489b774c"},{url:"assets/index.b41164c8.css",revision:"922e60f8ef5c5f17120844114c26c54b"},{url:"assets/index.b87fca9a.css",revision:"d04029aa991dae56e6cdaff193a753ce"},{url:"assets/index.d5474c67.css",revision:"055df3b52fe9ff200c569d1acc78f959"},{url:"assets/index.dd263857.css",revision:"7e63c3f5f5a2b0a8caa997c8e960eae6"},{url:"assets/index.ee1adb10.css",revision:"bcd65eba186e4fa9a82d68d5d7cd0acc"},{url:"assets/jsonEditor-legacy.2ae2100c.js",revision:"df7459599a744b0ba03fd7a48c76f839"},{url:"assets/jsonEditor.8927f512.css",revision:"92eb722b9b91ddc136c7844911168ebe"},{url:"assets/jsonEditor.9a763c51.js",revision:"8ae9f1716e14e7ea11966ba644f2aaa6"},{url:"assets/mtqLoans-legacy.6c12cf8d.js",revision:"920937f885bc3224ebdf875dba12c7e2"},{url:"assets/mtqLoans.2e3b7054.css",revision:"0b34264b8d094023a615ac13744fcc48"},{url:"assets/mtqLoans.978c06e9.js",revision:"44fa3f649fb1c8906b3a74d26fadf748"},{url:"assets/polyfills-legacy.1669762b.js",revision:"032b7acd25a35315b156dd1f2834716b"},{url:"assets/timeCompute-legacy.ce21079e.js",revision:"31641cbbba59073f55b111351a9236e6"},{url:"assets/timeCompute.9439d3d2.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/timeCompute.af318814.js",revision:"2dcc6eaa3feee61512c906aa52700b74"},{url:"assets/uuid-legacy.a2db77fd.js",revision:"d059cc398a1e9682230088ee6a6cce4d"},{url:"assets/uuid.bdd063f3.css",revision:"04b3f066c24427c605df6f1ff78dab21"},{url:"assets/uuid.e4fd08bd.js",revision:"0b613542bf7ef8e3b4ee9df5f9560a4b"},{url:"assets/vendor-legacy.d511efec.js",revision:"159578a94a3441b23883151aa64e024a"},{url:"assets/vendor.9dc91002.js",revision:"4dfee40b1c7fa782b37143c1a3eebd2d"},{url:"assets/vendor.e075551c.css",revision:"cf216509132ef68997305f25e8f12d3a"},{url:"assets/whatAnimeIsThis-legacy.fb545476.js",revision:"79442a127f2dfd02790bd1f3b27d101a"},{url:"assets/whatAnimeIsThis.27aa785c.css",revision:"18fd36af57444b28740b3c9c1bef6633"},{url:"assets/whatAnimeIsThis.e6d5642c.js",revision:"a69f7ab22a62a7b3e2624b93142a353a"},{url:"googlefont.css",revision:"2c3d67c658771b0cc5a376a8689eb37a"},{url:"iconfont.js",revision:"c3d69c2d15c03b901477f0cabcc623e7"},{url:"index.html",revision:"c10c1f27affa54e506ea04a28a934389"},{url:"registerSW.js",revision:"ea7cbed0b659d39fc56843fff5227e42"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/gstatic\.loli\.net/,new e.StaleWhileRevalidate({cacheName:"loli-google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new e.StaleWhileRevalidate({cacheName:"jsdelivr-cdn",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/tools\.iszy\.xyz/,new e.StaleWhileRevalidate({cacheName:"tools-iszy-xyz",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
