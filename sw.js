if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-19fc34b8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_baseRandom-7bfb07b8.js",revision:null},{url:"assets/3dView-63138e01.css",revision:null},{url:"assets/3dView-f09cde97.js",revision:null},{url:"assets/403-4e014ca3.css",revision:null},{url:"assets/403-be7abab1.js",revision:null},{url:"assets/404-3ceeed79.css",revision:null},{url:"assets/404-e689c1e8.js",revision:null},{url:"assets/addService-6256794a.js",revision:null},{url:"assets/addService-d3a97144.css",revision:null},{url:"assets/anyRule-cbc204f0.css",revision:null},{url:"assets/anyRule-d9b799ad.js",revision:null},{url:"assets/ascii-43b66647.js",revision:null},{url:"assets/ascii-5c9c63d6.css",revision:null},{url:"assets/base64-6174afd9.css",revision:null},{url:"assets/base64-7b1d9f38.js",revision:null},{url:"assets/bilibiliBv2av-31b01281.js",revision:null},{url:"assets/bilibiliBv2av-c87a1749.css",revision:null},{url:"assets/castArray-d7d10d05.js",revision:null},{url:"assets/cdnQuery-4904ab41.js",revision:null},{url:"assets/cdnQuery-ff8d90be.css",revision:null},{url:"assets/chineseColor-92d0959b.js",revision:null},{url:"assets/chineseColor-fe6d15c4.css",revision:null},{url:"assets/clamp-6992c957.js",revision:null},{url:"assets/ClearSans-Bold-webfont-820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont-a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont-b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont-465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont-5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont-77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont-8c94cd2f.woff",revision:null},{url:"assets/color-3a154134.js",revision:null},{url:"assets/colorTransform-0f7189a0.css",revision:null},{url:"assets/colorTransform-e5e71dc4.js",revision:null},{url:"assets/ControlMenu-0c705611.css",revision:null},{url:"assets/ControlMenu-64d207d1.js",revision:null},{url:"assets/createFile-ca480a95.js",revision:null},{url:"assets/cssFormatter-6c74dd1b.js",revision:null},{url:"assets/cssFormatter-d3618b4a.css",revision:null},{url:"assets/dayjs.min-68764032.js",revision:null},{url:"assets/DS-DIGI-87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB-db992dcd.TTF",revision:null},{url:"assets/DS-DIGII-7402d935.TTF",revision:null},{url:"assets/DS-DIGIT-4d330a54.TTF",revision:null},{url:"assets/duration-c740b129.js",revision:null},{url:"assets/el-checkbox-4b6b0653.js",revision:null},{url:"assets/el-checkbox-f06e07bc.css",revision:null},{url:"assets/el-date-picker-979cdddd.css",revision:null},{url:"assets/el-date-picker-e9bfa436.js",revision:null},{url:"assets/el-descriptions-item-662285c0.css",revision:null},{url:"assets/el-descriptions-item-9fc3d7e7.js",revision:null},{url:"assets/el-dialog-652fc2ff.js",revision:null},{url:"assets/el-dialog-e409f358.css",revision:null},{url:"assets/el-divider-f02dd9a6.js",revision:null},{url:"assets/el-divider-f4d3946e.css",revision:null},{url:"assets/el-empty-6637c9c7.js",revision:null},{url:"assets/el-empty-743b38f5.css",revision:null},{url:"assets/el-form-item-7d5af5e1.css",revision:null},{url:"assets/el-form-item-dc290dca.js",revision:null},{url:"assets/el-image-viewer-18aebd50.js",revision:null},{url:"assets/el-image-viewer-21a319c0.css",revision:null},{url:"assets/el-input-number-383f2e0e.js",revision:null},{url:"assets/el-input-number-e34b49f4.css",revision:null},{url:"assets/el-popover-6f05764b.js",revision:null},{url:"assets/el-popover-bac8718b.css",revision:null},{url:"assets/el-popper-7f1fa909.js",revision:null},{url:"assets/el-popper-b17b6765.css",revision:null},{url:"assets/el-progress-5a487259.js",revision:null},{url:"assets/el-progress-c7c1f9fc.css",revision:null},{url:"assets/el-radio-group-8b79aec5.js",revision:null},{url:"assets/el-radio-group-cacb5b7d.css",revision:null},{url:"assets/el-result-3ec04570.css",revision:null},{url:"assets/el-result-db25fe36.js",revision:null},{url:"assets/el-scrollbar-df5aa9a0.css",revision:null},{url:"assets/el-scrollbar-e88d9e52.js",revision:null},{url:"assets/el-select-0b32213c.css",revision:null},{url:"assets/el-select-103441f4.js",revision:null},{url:"assets/el-space-417b6673.css",revision:null},{url:"assets/el-space-b678a394.js",revision:null},{url:"assets/el-switch-4d96cdcc.css",revision:null},{url:"assets/el-switch-e10655ed.js",revision:null},{url:"assets/el-tab-pane-7bbaf5a5.js",revision:null},{url:"assets/el-tab-pane-eecd8b5a.css",revision:null},{url:"assets/el-table-column-ada01c22.css",revision:null},{url:"assets/el-table-column-eade8e73.js",revision:null},{url:"assets/el-table-v2-842564a6.js",revision:null},{url:"assets/el-table-v2-fbe46d06.css",revision:null},{url:"assets/el-tag-2fca7a82.css",revision:null},{url:"assets/el-tag-309ef97f.js",revision:null},{url:"assets/el-tooltip-4ed993c7.js",revision:null},{url:"assets/el-upload-ef5c81f9.js",revision:null},{url:"assets/el-upload-fc8af11e.css",revision:null},{url:"assets/ext-beautify-8a5ffd1d.js",revision:null},{url:"assets/forexRate-5104decd.css",revision:null},{url:"assets/forexRate-5fd73492.js",revision:null},{url:"assets/geohash-bd16c56f.js",revision:null},{url:"assets/geohash-df35febf.css",revision:null},{url:"assets/geoJson-a255d3a1.js",revision:null},{url:"assets/geoJson-a8b044c9.css",revision:null},{url:"assets/geoJsonEditor-4087f565.js",revision:null},{url:"assets/geoJsonEditor-5e7fc342.css",revision:null},{url:"assets/gradientColor-42121b7d.js",revision:null},{url:"assets/gradientColor-e2ca9a55.css",revision:null},{url:"assets/hasIn-1722f1ef.js",revision:null},{url:"assets/idChinese-3d5128b0.js",revision:null},{url:"assets/idChinese-8c8bb760.css",revision:null},{url:"assets/imageBase64-45f33906.css",revision:null},{url:"assets/imageBase64-61717702.js",revision:null},{url:"assets/imgHosting-0496ecd9.js",revision:null},{url:"assets/imgHosting-d73e6262.css",revision:null},{url:"assets/imgHosting-e666abdb.js",revision:null},{url:"assets/imgList-7207df67.css",revision:null},{url:"assets/imgList-e9aace28.js",revision:null},{url:"assets/index-05c20840.js",revision:null},{url:"assets/index-0c5365f2.js",revision:null},{url:"assets/index-14e8c4c6.css",revision:null},{url:"assets/index-162de939.js",revision:null},{url:"assets/index-628e6bb1.js",revision:null},{url:"assets/index-885d28f9.js",revision:null},{url:"assets/index-98543ec5.css",revision:null},{url:"assets/index-9a540dec.css",revision:null},{url:"assets/index-a1810ecb.js",revision:null},{url:"assets/index-a6df47f4.js",revision:null},{url:"assets/index-ceb36e81.css",revision:null},{url:"assets/index-d92bc18c.js",revision:null},{url:"assets/index-e03826b5.css",revision:null},{url:"assets/index-e523a736.css",revision:null},{url:"assets/index-e611bddc.js",revision:null},{url:"assets/index-f5c23e8a.js",revision:null},{url:"assets/isEqual-e1aa7bc0.js",revision:null},{url:"assets/jsonEditor-bdf7c10d.css",revision:null},{url:"assets/jsonEditor-d5341b3b.js",revision:null},{url:"assets/jwt-03490b0b.js",revision:null},{url:"assets/jwt-828af2a9.css",revision:null},{url:"assets/latLng-08033a7d.js",revision:null},{url:"assets/latLng-21d68515.css",revision:null},{url:"assets/leaflet-69420918.css",revision:null},{url:"assets/leaflet-src-b5855c04.js",revision:null},{url:"assets/leafletMap-18c117f7.css",revision:null},{url:"assets/leafletMap-722b4af6.js",revision:null},{url:"assets/Link-1c05d676.js",revision:null},{url:"assets/linuxCommand-9689614e.css",revision:null},{url:"assets/linuxCommand-b988160f.js",revision:null},{url:"assets/login-2857d083.css",revision:null},{url:"assets/login-8a791261.js",revision:null},{url:"assets/marker-shadow-fe87b814.js",revision:null},{url:"assets/md5-2488d586.js",revision:null},{url:"assets/md5-f57b776b.css",revision:null},{url:"assets/mock-730d770f.css",revision:null},{url:"assets/mock-c1271beb.js",revision:null},{url:"assets/mtqLoans-80e83f29.css",revision:null},{url:"assets/mtqLoans-b2bc0875.js",revision:null},{url:"assets/nzh-392cadb2.js",revision:null},{url:"assets/nzh-b91dd2a1.css",revision:null},{url:"assets/O-aabe6b8b.png",revision:null},{url:"assets/Ob-fa8b324c.png",revision:null},{url:"assets/oreo-6b415d4d.png",revision:null},{url:"assets/Paragraph-a677b665.js",revision:null},{url:"assets/propertyTable-bbf56565.js",revision:null},{url:"assets/propertyTable-c0591d82.css",revision:null},{url:"assets/qrcode-293b7744.js",revision:null},{url:"assets/qrcode-a6ed2c4f.css",revision:null},{url:"assets/R-fca5b3d5.png",revision:null},{url:"assets/raf-12d87b13.js",revision:null},{url:"assets/random-135b8038.js",revision:null},{url:"assets/random-2a7d9130.css",revision:null},{url:"assets/redirect-1ee3607f.css",revision:null},{url:"assets/redirect-7b32e1cb.js",revision:null},{url:"assets/relationship-9dca129c.js",revision:null},{url:"assets/relationship-b22af839.css",revision:null},{url:"assets/ResizeObserver.es-0f9f8adb.js",revision:null},{url:"assets/screenRecord-213f1d50.js",revision:null},{url:"assets/screenRecord-51e198a1.css",revision:null},{url:"assets/Seto-3e28fa6c.eot",revision:null},{url:"assets/Seto-8ea3242a.woff",revision:null},{url:"assets/Seto-969d39cb.ttf",revision:null},{url:"assets/Seto-f0825900.svg",revision:null},{url:"assets/settings-6722aa8c.js",revision:null},{url:"assets/settings-741e0238.js",revision:null},{url:"assets/settings-cde41287.css",revision:null},{url:"assets/settings-d4112b53.css",revision:null},{url:"assets/strings-4c1cf034.js",revision:null},{url:"assets/Text-58d1ddd9.js",revision:null},{url:"assets/texture-d794feb1.png",revision:null},{url:"assets/throttle-381af9f5.js",revision:null},{url:"assets/timeCompute-1d927454.js",revision:null},{url:"assets/timeCompute-2e07dc9a.css",revision:null},{url:"assets/tinycolor-ea5bcbb6.js",revision:null},{url:"assets/tinyEditor-02126627.js",revision:null},{url:"assets/tinyEditor-03c09572.css",revision:null},{url:"assets/Title-cfb54040.js",revision:null},{url:"assets/toFinite-374ee0c6.js",revision:null},{url:"assets/upload-02e8c1d7.css",revision:null},{url:"assets/upload-d3ee5512.js",revision:null},{url:"assets/urlEncode-298b867d.js",revision:null},{url:"assets/urlEncode-abc1d1a6.css",revision:null},{url:"assets/userAgent-c564553f.css",revision:null},{url:"assets/userAgent-e72a68bf.js",revision:null},{url:"assets/uuid-20027efb.css",revision:null},{url:"assets/uuid-8cfffbc9.js",revision:null},{url:"assets/v4-c87ad79c.js",revision:null},{url:"assets/VanillaJsonEditor-354d72c5.css",revision:null},{url:"assets/VanillaJsonEditor-b981b87d.js",revision:null},{url:"assets/viewSourceCode-5890086f.css",revision:null},{url:"assets/viewSourceCode-9b70e7c5.js",revision:null},{url:"assets/watermark-101d4438.css",revision:null},{url:"assets/watermark-38aa4b45.js",revision:null},{url:"assets/webssh-a98ef2f5.js",revision:null},{url:"assets/webssh-ab914772.css",revision:null},{url:"assets/whatAnimeIsThis-23427df3.css",revision:null},{url:"assets/whatAnimeIsThis-ac194873.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/worker-css-2c615ec9.js",revision:null},{url:"assets/worker-css-b70c72a0.js",revision:null},{url:"assets/worker-html-63aac2ef.js",revision:null},{url:"assets/worker-javascript-c4599136.js",revision:null},{url:"assets/worker-xml-2b7489a2.js",revision:null},{url:"assets/xmlEditor-28e8b6f2.css",revision:null},{url:"assets/xmlEditor-8282373b.js",revision:null},{url:"assets/zeldaBotwMap-304439f6.js",revision:null},{url:"assets/zeldaBotwMap-95ec2fe5.css",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"283cf233ad44368fbc9b6e07782e1c8f"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.cc/,new s.CacheFirst({cacheName:"iszycc-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lib\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszylib-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
