if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-19fc34b8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_baseRandom-7bfb07b8.js",revision:null},{url:"assets/3dView-63138e01.css",revision:null},{url:"assets/3dView-d2386182.js",revision:null},{url:"assets/403-4e014ca3.css",revision:null},{url:"assets/403-d35685f3.js",revision:null},{url:"assets/404-3ceeed79.css",revision:null},{url:"assets/404-723d1304.js",revision:null},{url:"assets/addService-118e3842.js",revision:null},{url:"assets/addService-d3a97144.css",revision:null},{url:"assets/anyRule-4cd2a5c0.js",revision:null},{url:"assets/anyRule-cbc204f0.css",revision:null},{url:"assets/ascii-3e579162.js",revision:null},{url:"assets/ascii-5c9c63d6.css",revision:null},{url:"assets/base64-3c3c354e.js",revision:null},{url:"assets/base64-6174afd9.css",revision:null},{url:"assets/bilibiliBv2av-575ac960.js",revision:null},{url:"assets/bilibiliBv2av-c87a1749.css",revision:null},{url:"assets/castArray-050b8b1a.js",revision:null},{url:"assets/cdnQuery-57a20822.js",revision:null},{url:"assets/cdnQuery-ff8d90be.css",revision:null},{url:"assets/chineseColor-43126af3.js",revision:null},{url:"assets/chineseColor-fe6d15c4.css",revision:null},{url:"assets/clamp-011219f6.js",revision:null},{url:"assets/ClearSans-Bold-webfont-820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont-a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont-b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont-465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont-5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont-77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont-8c94cd2f.woff",revision:null},{url:"assets/color-c0fd1eec.js",revision:null},{url:"assets/colorTransform-0f7189a0.css",revision:null},{url:"assets/colorTransform-5bf71a8b.js",revision:null},{url:"assets/ControlMenu-0c705611.css",revision:null},{url:"assets/ControlMenu-b7b7107c.js",revision:null},{url:"assets/createFile-3a33425d.js",revision:null},{url:"assets/cssFormatter-1d44e046.js",revision:null},{url:"assets/cssFormatter-d3618b4a.css",revision:null},{url:"assets/dayjs.min-ea7c477a.js",revision:null},{url:"assets/DS-DIGI-87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB-db992dcd.TTF",revision:null},{url:"assets/DS-DIGII-7402d935.TTF",revision:null},{url:"assets/DS-DIGIT-4d330a54.TTF",revision:null},{url:"assets/duration-1638aea4.js",revision:null},{url:"assets/el-checkbox-e1a5aa0d.js",revision:null},{url:"assets/el-checkbox-f06e07bc.css",revision:null},{url:"assets/el-date-picker-5197cabe.js",revision:null},{url:"assets/el-date-picker-979cdddd.css",revision:null},{url:"assets/el-descriptions-item-662285c0.css",revision:null},{url:"assets/el-descriptions-item-ebaa6ff2.js",revision:null},{url:"assets/el-dialog-cfdaab16.js",revision:null},{url:"assets/el-dialog-e409f358.css",revision:null},{url:"assets/el-divider-afd7c2fa.js",revision:null},{url:"assets/el-divider-f4d3946e.css",revision:null},{url:"assets/el-empty-61dbabd7.js",revision:null},{url:"assets/el-empty-743b38f5.css",revision:null},{url:"assets/el-form-item-7d5af5e1.css",revision:null},{url:"assets/el-form-item-ea1ce78d.js",revision:null},{url:"assets/el-image-viewer-21a319c0.css",revision:null},{url:"assets/el-image-viewer-947bd94a.js",revision:null},{url:"assets/el-input-number-e34b49f4.css",revision:null},{url:"assets/el-input-number-ee9ce816.js",revision:null},{url:"assets/el-popover-44d36e3b.js",revision:null},{url:"assets/el-popover-bac8718b.css",revision:null},{url:"assets/el-popper-9ba09715.js",revision:null},{url:"assets/el-popper-b17b6765.css",revision:null},{url:"assets/el-progress-bc9ea1dc.js",revision:null},{url:"assets/el-progress-c7c1f9fc.css",revision:null},{url:"assets/el-radio-group-6205b692.js",revision:null},{url:"assets/el-radio-group-cacb5b7d.css",revision:null},{url:"assets/el-result-3ec04570.css",revision:null},{url:"assets/el-result-71bedfbc.js",revision:null},{url:"assets/el-scrollbar-df5aa9a0.css",revision:null},{url:"assets/el-scrollbar-e88d9e52.js",revision:null},{url:"assets/el-select-0b32213c.css",revision:null},{url:"assets/el-select-ab53fd1e.js",revision:null},{url:"assets/el-space-417b6673.css",revision:null},{url:"assets/el-space-b72f81cf.js",revision:null},{url:"assets/el-switch-4d96cdcc.css",revision:null},{url:"assets/el-switch-ef1e3377.js",revision:null},{url:"assets/el-tab-pane-522be681.js",revision:null},{url:"assets/el-tab-pane-eecd8b5a.css",revision:null},{url:"assets/el-table-column-1a8594e9.js",revision:null},{url:"assets/el-table-column-ada01c22.css",revision:null},{url:"assets/el-table-v2-4f239dc7.js",revision:null},{url:"assets/el-table-v2-fbe46d06.css",revision:null},{url:"assets/el-tag-2fca7a82.css",revision:null},{url:"assets/el-tag-8a85312f.js",revision:null},{url:"assets/el-tooltip-4ed993c7.js",revision:null},{url:"assets/el-upload-639fe77e.js",revision:null},{url:"assets/el-upload-fc8af11e.css",revision:null},{url:"assets/ext-beautify-edd97cfa.js",revision:null},{url:"assets/forexRate-5104decd.css",revision:null},{url:"assets/forexRate-93742538.js",revision:null},{url:"assets/geohash-42469d85.js",revision:null},{url:"assets/geohash-df35febf.css",revision:null},{url:"assets/geoJson-a8b044c9.css",revision:null},{url:"assets/geoJson-bfeed96a.js",revision:null},{url:"assets/geoJsonEditor-5e7fc342.css",revision:null},{url:"assets/geoJsonEditor-889d3034.js",revision:null},{url:"assets/gradientColor-bb0adb17.js",revision:null},{url:"assets/gradientColor-e2ca9a55.css",revision:null},{url:"assets/hasIn-1f8e4d37.js",revision:null},{url:"assets/idChinese-8c8bb760.css",revision:null},{url:"assets/idChinese-bf061e24.js",revision:null},{url:"assets/imageBase64-45f33906.css",revision:null},{url:"assets/imageBase64-4ddce26f.js",revision:null},{url:"assets/imgHosting-b0ab63ee.js",revision:null},{url:"assets/imgHosting-d73e6262.css",revision:null},{url:"assets/imgHosting-dfd84773.js",revision:null},{url:"assets/imgList-7207df67.css",revision:null},{url:"assets/imgList-c31996f6.js",revision:null},{url:"assets/index-0b668058.js",revision:null},{url:"assets/index-14e8c4c6.css",revision:null},{url:"assets/index-33b2171e.js",revision:null},{url:"assets/index-821d71dc.js",revision:null},{url:"assets/index-825eabff.js",revision:null},{url:"assets/index-9731973f.js",revision:null},{url:"assets/index-97f3a7a9.js",revision:null},{url:"assets/index-98543ec5.css",revision:null},{url:"assets/index-9a540dec.css",revision:null},{url:"assets/index-c00b8812.js",revision:null},{url:"assets/index-c030e765.js",revision:null},{url:"assets/index-ca21c84e.js",revision:null},{url:"assets/index-cc72c82b.js",revision:null},{url:"assets/index-ceb36e81.css",revision:null},{url:"assets/index-e03826b5.css",revision:null},{url:"assets/index-e523a736.css",revision:null},{url:"assets/isEqual-026a6ab9.js",revision:null},{url:"assets/jsonEditor-bdf7c10d.css",revision:null},{url:"assets/jsonEditor-cc171d64.js",revision:null},{url:"assets/jwt-7290c1de.js",revision:null},{url:"assets/jwt-828af2a9.css",revision:null},{url:"assets/latLng-21d68515.css",revision:null},{url:"assets/latLng-ae425e71.js",revision:null},{url:"assets/leaflet-69420918.css",revision:null},{url:"assets/leaflet-src-95f9dc1c.js",revision:null},{url:"assets/leafletMap-18c117f7.css",revision:null},{url:"assets/leafletMap-e967b2b0.js",revision:null},{url:"assets/Link-0d7d9066.js",revision:null},{url:"assets/linuxCommand-4efee7ce.js",revision:null},{url:"assets/linuxCommand-9689614e.css",revision:null},{url:"assets/login-2857d083.css",revision:null},{url:"assets/login-fb630f7a.js",revision:null},{url:"assets/marker-shadow-70c090fd.js",revision:null},{url:"assets/md5-a8949b6d.js",revision:null},{url:"assets/md5-f57b776b.css",revision:null},{url:"assets/mock-43f48306.js",revision:null},{url:"assets/mock-730d770f.css",revision:null},{url:"assets/mtqLoans-80e83f29.css",revision:null},{url:"assets/mtqLoans-ea080b1c.js",revision:null},{url:"assets/O-aabe6b8b.png",revision:null},{url:"assets/Ob-fa8b324c.png",revision:null},{url:"assets/oreo-6b415d4d.png",revision:null},{url:"assets/Paragraph-7aa24f92.js",revision:null},{url:"assets/propertyTable-954b8a32.js",revision:null},{url:"assets/propertyTable-c0591d82.css",revision:null},{url:"assets/qrcode-a6ed2c4f.css",revision:null},{url:"assets/qrcode-b1a4117e.js",revision:null},{url:"assets/R-fca5b3d5.png",revision:null},{url:"assets/raf-38044344.js",revision:null},{url:"assets/random-133d2c35.js",revision:null},{url:"assets/random-2a7d9130.css",revision:null},{url:"assets/redirect-1ee3607f.css",revision:null},{url:"assets/redirect-72088f73.js",revision:null},{url:"assets/relationship-3cc6a616.js",revision:null},{url:"assets/relationship-b22af839.css",revision:null},{url:"assets/ResizeObserver.es-0f9f8adb.js",revision:null},{url:"assets/screenRecord-51e198a1.css",revision:null},{url:"assets/screenRecord-b885206a.js",revision:null},{url:"assets/Seto-3e28fa6c.eot",revision:null},{url:"assets/Seto-8ea3242a.woff",revision:null},{url:"assets/Seto-969d39cb.ttf",revision:null},{url:"assets/Seto-f0825900.svg",revision:null},{url:"assets/settings-a2639943.js",revision:null},{url:"assets/settings-b29ebc03.js",revision:null},{url:"assets/settings-cde41287.css",revision:null},{url:"assets/settings-d4112b53.css",revision:null},{url:"assets/strings-a11040d5.js",revision:null},{url:"assets/Text-eec22c6e.js",revision:null},{url:"assets/texture-d794feb1.png",revision:null},{url:"assets/throttle-b1b1bbe0.js",revision:null},{url:"assets/timeCompute-15e62c81.js",revision:null},{url:"assets/timeCompute-2e07dc9a.css",revision:null},{url:"assets/tinycolor-ea5bcbb6.js",revision:null},{url:"assets/tinyEditor-023003a9.js",revision:null},{url:"assets/tinyEditor-03c09572.css",revision:null},{url:"assets/Title-a3d01143.js",revision:null},{url:"assets/toFinite-d05950af.js",revision:null},{url:"assets/upload-02e8c1d7.css",revision:null},{url:"assets/upload-f954151e.js",revision:null},{url:"assets/urlEncode-30cdb0d8.js",revision:null},{url:"assets/urlEncode-abc1d1a6.css",revision:null},{url:"assets/userAgent-7d9fcf67.js",revision:null},{url:"assets/userAgent-c564553f.css",revision:null},{url:"assets/uuid-20027efb.css",revision:null},{url:"assets/uuid-95f79ee2.js",revision:null},{url:"assets/v4-c87ad79c.js",revision:null},{url:"assets/VanillaJsonEditor-354d72c5.css",revision:null},{url:"assets/VanillaJsonEditor-860deb19.js",revision:null},{url:"assets/viewSourceCode-5890086f.css",revision:null},{url:"assets/viewSourceCode-719c5548.js",revision:null},{url:"assets/watermark-101d4438.css",revision:null},{url:"assets/watermark-c8715cae.js",revision:null},{url:"assets/webssh-ab914772.css",revision:null},{url:"assets/webssh-caaaebc7.js",revision:null},{url:"assets/whatAnimeIsThis-23427df3.css",revision:null},{url:"assets/whatAnimeIsThis-c803a396.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/worker-css-2c615ec9.js",revision:null},{url:"assets/worker-css-b70c72a0.js",revision:null},{url:"assets/worker-html-63aac2ef.js",revision:null},{url:"assets/worker-javascript-c4599136.js",revision:null},{url:"assets/worker-xml-2b7489a2.js",revision:null},{url:"assets/xmlEditor-12c87d90.js",revision:null},{url:"assets/xmlEditor-28e8b6f2.css",revision:null},{url:"assets/zeldaBotwMap-95ec2fe5.css",revision:null},{url:"assets/zeldaBotwMap-a8d8a6dd.js",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"df3fdaa041d26818f3ccbeecbe67bfba"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.cc/,new s.CacheFirst({cacheName:"iszycc-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lib\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszylib-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
