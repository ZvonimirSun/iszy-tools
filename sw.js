if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-19fc34b8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_baseRandom-7bfb07b8.js",revision:null},{url:"assets/3dView-388b7868.js",revision:null},{url:"assets/3dView-997a3b50.css",revision:null},{url:"assets/403-2a920ece.css",revision:null},{url:"assets/403-b9b5158d.js",revision:null},{url:"assets/404-220df8ab.css",revision:null},{url:"assets/404-7034b313.js",revision:null},{url:"assets/addService-11c4236a.css",revision:null},{url:"assets/addService-6d7752f6.js",revision:null},{url:"assets/anyRule-7ef8de42.css",revision:null},{url:"assets/anyRule-bae93965.js",revision:null},{url:"assets/ascii-0fa0432c.js",revision:null},{url:"assets/ascii-43702d2a.css",revision:null},{url:"assets/base64-38547c51.js",revision:null},{url:"assets/base64-a2143416.css",revision:null},{url:"assets/bilibiliBv2av-8ba194f7.js",revision:null},{url:"assets/bilibiliBv2av-cd5b7693.css",revision:null},{url:"assets/castArray-552f9086.js",revision:null},{url:"assets/cdnQuery-5b380a82.js",revision:null},{url:"assets/cdnQuery-651c5f45.css",revision:null},{url:"assets/chineseColor-659a0d3d.js",revision:null},{url:"assets/chineseColor-de293a16.css",revision:null},{url:"assets/clamp-547c2a7e.js",revision:null},{url:"assets/ClearSans-Bold-webfont-820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont-a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont-b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont-465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont-5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont-77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont-8c94cd2f.woff",revision:null},{url:"assets/color-cc55e480.js",revision:null},{url:"assets/colorTransform-2eff4c5f.css",revision:null},{url:"assets/colorTransform-7fbecb67.js",revision:null},{url:"assets/ControlMenu-4f5234f3.js",revision:null},{url:"assets/ControlMenu-a761d595.css",revision:null},{url:"assets/createFile-381172dd.js",revision:null},{url:"assets/cssFormatter-526f98ca.css",revision:null},{url:"assets/cssFormatter-974827e5.js",revision:null},{url:"assets/dayjs.min-38d7666c.js",revision:null},{url:"assets/DS-DIGI-87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB-db992dcd.TTF",revision:null},{url:"assets/DS-DIGII-7402d935.TTF",revision:null},{url:"assets/DS-DIGIT-4d330a54.TTF",revision:null},{url:"assets/duration-1ce528ee.js",revision:null},{url:"assets/el-checkbox-209c3763.js",revision:null},{url:"assets/el-checkbox-f06e07bc.css",revision:null},{url:"assets/el-date-picker-7390776c.js",revision:null},{url:"assets/el-date-picker-979cdddd.css",revision:null},{url:"assets/el-descriptions-item-662285c0.css",revision:null},{url:"assets/el-descriptions-item-9b65e7af.js",revision:null},{url:"assets/el-dialog-91176fcb.js",revision:null},{url:"assets/el-dialog-e409f358.css",revision:null},{url:"assets/el-divider-1f863f57.js",revision:null},{url:"assets/el-divider-f4d3946e.css",revision:null},{url:"assets/el-empty-743b38f5.css",revision:null},{url:"assets/el-empty-be1c9407.js",revision:null},{url:"assets/el-form-item-b10c1cc6.css",revision:null},{url:"assets/el-form-item-ee26a29f.js",revision:null},{url:"assets/el-image-viewer-21a319c0.css",revision:null},{url:"assets/el-image-viewer-91c4856d.js",revision:null},{url:"assets/el-input-number-e34b49f4.css",revision:null},{url:"assets/el-input-number-ef5ff09a.js",revision:null},{url:"assets/el-popover-60879c44.js",revision:null},{url:"assets/el-popover-bac8718b.css",revision:null},{url:"assets/el-popper-0ac17e29.js",revision:null},{url:"assets/el-popper-b17b6765.css",revision:null},{url:"assets/el-progress-00563754.js",revision:null},{url:"assets/el-progress-c7c1f9fc.css",revision:null},{url:"assets/el-radio-94b07b0d.css",revision:null},{url:"assets/el-radio-group-81bd7f60.js",revision:null},{url:"assets/el-radio-group-cacb5b7d.css",revision:null},{url:"assets/el-result-3ec04570.css",revision:null},{url:"assets/el-result-74645937.js",revision:null},{url:"assets/el-scrollbar-df5aa9a0.css",revision:null},{url:"assets/el-scrollbar-e88d9e52.js",revision:null},{url:"assets/el-select-0b32213c.css",revision:null},{url:"assets/el-select-670385f3.js",revision:null},{url:"assets/el-space-2b811da9.js",revision:null},{url:"assets/el-space-417b6673.css",revision:null},{url:"assets/el-switch-116fc0b4.js",revision:null},{url:"assets/el-switch-4d96cdcc.css",revision:null},{url:"assets/el-tab-pane-0949e37f.js",revision:null},{url:"assets/el-tab-pane-eecd8b5a.css",revision:null},{url:"assets/el-table-column-376d229e.js",revision:null},{url:"assets/el-table-column-ada01c22.css",revision:null},{url:"assets/el-table-v2-989e7d3a.js",revision:null},{url:"assets/el-table-v2-fbe46d06.css",revision:null},{url:"assets/el-tag-2fca7a82.css",revision:null},{url:"assets/el-tag-93e57dc0.js",revision:null},{url:"assets/el-tooltip-4ed993c7.js",revision:null},{url:"assets/el-upload-faff5e65.js",revision:null},{url:"assets/el-upload-fc8af11e.css",revision:null},{url:"assets/ext-beautify-403080b7.js",revision:null},{url:"assets/forexRate-98de0309.css",revision:null},{url:"assets/forexRate-d14b08e0.js",revision:null},{url:"assets/geohash-0216f10c.css",revision:null},{url:"assets/geohash-4ac5ed01.js",revision:null},{url:"assets/geoJson-0dc6b54d.css",revision:null},{url:"assets/geoJson-2cae78b0.js",revision:null},{url:"assets/geoJsonEditor-2cf12a9b.js",revision:null},{url:"assets/geoJsonEditor-70d042e8.css",revision:null},{url:"assets/gradientColor-e3a85a45.js",revision:null},{url:"assets/gradientColor-fdbcd6b2.css",revision:null},{url:"assets/hasIn-d1fa80ef.js",revision:null},{url:"assets/idChinese-c18102cd.js",revision:null},{url:"assets/idChinese-d4c27dd4.css",revision:null},{url:"assets/imageBase64-25d1da9f.js",revision:null},{url:"assets/imageBase64-e6465efa.css",revision:null},{url:"assets/imgHosting-00fc4b69.js",revision:null},{url:"assets/imgHosting-3569c18f.js",revision:null},{url:"assets/imgHosting-69f5aba1.css",revision:null},{url:"assets/imgList-3f8352fa.js",revision:null},{url:"assets/imgList-dfac873b.css",revision:null},{url:"assets/index-0547b063.js",revision:null},{url:"assets/index-14e8c4c6.css",revision:null},{url:"assets/index-179e11a6.css",revision:null},{url:"assets/index-2a09f53a.css",revision:null},{url:"assets/index-38a6f293.js",revision:null},{url:"assets/index-408cccea.css",revision:null},{url:"assets/index-432f5d23.js",revision:null},{url:"assets/index-4e281050.css",revision:null},{url:"assets/index-72e5890e.js",revision:null},{url:"assets/index-77056331.js",revision:null},{url:"assets/index-7b458e4d.js",revision:null},{url:"assets/index-92f1e09d.js",revision:null},{url:"assets/index-951e4037.css",revision:null},{url:"assets/index-999c55fa.js",revision:null},{url:"assets/index-b52d34da.js",revision:null},{url:"assets/index-f391f214.js",revision:null},{url:"assets/index.js",revision:"cea3bf87d6e203eee103ecab92bc7a9a"},{url:"assets/isEqual-62aeb03d.js",revision:null},{url:"assets/isUndefined-aa0326a0.js",revision:null},{url:"assets/jsonEditor-1fb540ef.js",revision:null},{url:"assets/jsonEditor-deddfb26.css",revision:null},{url:"assets/jwt-dd957cb8.js",revision:null},{url:"assets/jwt-efcd4889.css",revision:null},{url:"assets/latLng-027614a0.css",revision:null},{url:"assets/latLng-0594e9fe.js",revision:null},{url:"assets/leaflet-69420918.css",revision:null},{url:"assets/leaflet-src-f32f0c1e.js",revision:null},{url:"assets/leafletMap-b08d7dc8.css",revision:null},{url:"assets/leafletMap-e48dfc5b.js",revision:null},{url:"assets/Link-11ddb575.js",revision:null},{url:"assets/linuxCommand-04c25b07.css",revision:null},{url:"assets/linuxCommand-290f914f.js",revision:null},{url:"assets/login-238452b3.js",revision:null},{url:"assets/login-2bb9ca5a.css",revision:null},{url:"assets/marker-shadow-7259285e.js",revision:null},{url:"assets/md5-55e3e546.js",revision:null},{url:"assets/md5-a2aada5c.css",revision:null},{url:"assets/mock-611e0f2c.js",revision:null},{url:"assets/mock-a97d5140.css",revision:null},{url:"assets/mtqLoans-15458129.js",revision:null},{url:"assets/mtqLoans-74042371.css",revision:null},{url:"assets/nzh-2f9a9f0d.css",revision:null},{url:"assets/nzh-7986884f.js",revision:null},{url:"assets/O-aabe6b8b.png",revision:null},{url:"assets/Ob-fa8b324c.png",revision:null},{url:"assets/oreo-6b415d4d.png",revision:null},{url:"assets/Paragraph-d6c29304.js",revision:null},{url:"assets/propertyTable-3fca8376.js",revision:null},{url:"assets/propertyTable-d4299a4c.css",revision:null},{url:"assets/qrcode-3784ddfe.css",revision:null},{url:"assets/qrcode-ba8e3fcb.js",revision:null},{url:"assets/R-fca5b3d5.png",revision:null},{url:"assets/raf-28a9c8f2.js",revision:null},{url:"assets/random-1aef8518.css",revision:null},{url:"assets/random-a45d7d41.js",revision:null},{url:"assets/redirect-44e9b604.css",revision:null},{url:"assets/redirect-72f85f0d.js",revision:null},{url:"assets/relationship-02480fc8.js",revision:null},{url:"assets/relationship-9d281f62.css",revision:null},{url:"assets/ResizeObserver.es-0f9f8adb.js",revision:null},{url:"assets/screenRecord-9f014aba.js",revision:null},{url:"assets/screenRecord-af590921.css",revision:null},{url:"assets/Seto-3e28fa6c.eot",revision:null},{url:"assets/Seto-8ea3242a.woff",revision:null},{url:"assets/Seto-969d39cb.ttf",revision:null},{url:"assets/Seto-f0825900.svg",revision:null},{url:"assets/settings-34a7b9b3.js",revision:null},{url:"assets/settings-55258381.css",revision:null},{url:"assets/settings-801b8713.js",revision:null},{url:"assets/settings-d1cd2405.css",revision:null},{url:"assets/strings-9f65aa13.js",revision:null},{url:"assets/Text-fac19e45.js",revision:null},{url:"assets/texture-d794feb1.png",revision:null},{url:"assets/throttle-29a04854.js",revision:null},{url:"assets/timeCompute-b4110b33.css",revision:null},{url:"assets/timeCompute-bb9b5c6b.js",revision:null},{url:"assets/tinycolor-ea5bcbb6.js",revision:null},{url:"assets/tinyEditor-4c5a6f63.css",revision:null},{url:"assets/tinyEditor-a66f9433.js",revision:null},{url:"assets/Title-ec9955d3.js",revision:null},{url:"assets/toFinite-72c27097.js",revision:null},{url:"assets/upload-1dbd8c20.css",revision:null},{url:"assets/upload-ca7063cc.js",revision:null},{url:"assets/urlEncode-15d8e9ec.css",revision:null},{url:"assets/urlEncode-97c1d496.js",revision:null},{url:"assets/userAgent-aeabbb27.js",revision:null},{url:"assets/userAgent-c11c37a3.css",revision:null},{url:"assets/uuid-73649c26.css",revision:null},{url:"assets/uuid-c47c97ec.js",revision:null},{url:"assets/VanillaJsonEditor-5078cfd2.js",revision:null},{url:"assets/VanillaJsonEditor-a311051a.css",revision:null},{url:"assets/viewSourceCode-6736b167.css",revision:null},{url:"assets/viewSourceCode-abe7d242.js",revision:null},{url:"assets/vite-8235fac6.js",revision:null},{url:"assets/watermark-43dac153.css",revision:null},{url:"assets/watermark-ea7001ea.js",revision:null},{url:"assets/webssh-3049fcd4.css",revision:null},{url:"assets/webssh-cae08662.js",revision:null},{url:"assets/whatAnimeIsThis-590b9bdc.js",revision:null},{url:"assets/whatAnimeIsThis-fea672d5.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/worker-css-2c615ec9.js",revision:null},{url:"assets/worker-css-b70c72a0.js",revision:null},{url:"assets/worker-html-63aac2ef.js",revision:null},{url:"assets/worker-javascript-c4599136.js",revision:null},{url:"assets/worker-xml-2b7489a2.js",revision:null},{url:"assets/xmlEditor-6cce155a.css",revision:null},{url:"assets/xmlEditor-8ad1844d.js",revision:null},{url:"assets/zeldaBotwMap-09b53606.js",revision:null},{url:"assets/zeldaBotwMap-88e3a9a5.css",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"2a9713bdf1fc91af7c841b3fddd6f47c"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.cc/,new s.CacheFirst({cacheName:"iszycc-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lib\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszylib-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
