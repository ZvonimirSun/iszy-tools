if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-19fc34b8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_baseRandom-7bfb07b8.js",revision:null},{url:"assets/3dView-997a3b50.css",revision:null},{url:"assets/3dView-f4028359.js",revision:null},{url:"assets/403-2a920ece.css",revision:null},{url:"assets/403-ca8fca06.js",revision:null},{url:"assets/404-220df8ab.css",revision:null},{url:"assets/404-8e86d919.js",revision:null},{url:"assets/addService-11c4236a.css",revision:null},{url:"assets/addService-2bc44740.js",revision:null},{url:"assets/anyRule-7ef8de42.css",revision:null},{url:"assets/anyRule-ccaaf8b3.js",revision:null},{url:"assets/ascii-43702d2a.css",revision:null},{url:"assets/ascii-c86d9766.js",revision:null},{url:"assets/base64-6bc5d1e0.js",revision:null},{url:"assets/base64-a2143416.css",revision:null},{url:"assets/bilibiliBv2av-0811c9e5.js",revision:null},{url:"assets/bilibiliBv2av-cd5b7693.css",revision:null},{url:"assets/castArray-d2e0b528.js",revision:null},{url:"assets/cdnQuery-9e5f2d38.js",revision:null},{url:"assets/cdnQuery-ac098274.css",revision:null},{url:"assets/chineseColor-28ec40e0.js",revision:null},{url:"assets/chineseColor-de293a16.css",revision:null},{url:"assets/clamp-c240aab4.js",revision:null},{url:"assets/ClearSans-Bold-webfont-820a4c29.eot",revision:null},{url:"assets/ClearSans-Bold-webfont-a669c919.svg",revision:null},{url:"assets/ClearSans-Bold-webfont-b16e36cc.woff",revision:null},{url:"assets/ClearSans-Light-webfont-465697ff.woff",revision:null},{url:"assets/ClearSans-Light-webfont-5080487c.svg",revision:null},{url:"assets/ClearSans-Light-webfont-77ef51b0.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-4d1fe136.eot",revision:null},{url:"assets/ClearSans-Regular-webfont-5d7fbc7a.svg",revision:null},{url:"assets/ClearSans-Regular-webfont-8c94cd2f.woff",revision:null},{url:"assets/color-23ab8288.js",revision:null},{url:"assets/colorTransform-2eff4c5f.css",revision:null},{url:"assets/colorTransform-5edd5639.js",revision:null},{url:"assets/ControlMenu-77310327.js",revision:null},{url:"assets/ControlMenu-a761d595.css",revision:null},{url:"assets/createFile-c1b1a5ed.js",revision:null},{url:"assets/cssFormatter-526f98ca.css",revision:null},{url:"assets/cssFormatter-aa6b1f24.js",revision:null},{url:"assets/dayjs.min-67390b44.js",revision:null},{url:"assets/DS-DIGI-87eb14d4.TTF",revision:null},{url:"assets/DS-DIGIB-db992dcd.TTF",revision:null},{url:"assets/DS-DIGII-7402d935.TTF",revision:null},{url:"assets/DS-DIGIT-4d330a54.TTF",revision:null},{url:"assets/duration-71cbcc94.js",revision:null},{url:"assets/el-checkbox-f06e07bc.css",revision:null},{url:"assets/el-checkbox-f642c5ea.js",revision:null},{url:"assets/el-date-picker-979cdddd.css",revision:null},{url:"assets/el-date-picker-a412fd8d.js",revision:null},{url:"assets/el-descriptions-item-543e3d26.js",revision:null},{url:"assets/el-descriptions-item-662285c0.css",revision:null},{url:"assets/el-dialog-6f270190.js",revision:null},{url:"assets/el-dialog-e409f358.css",revision:null},{url:"assets/el-divider-66993001.js",revision:null},{url:"assets/el-divider-f4d3946e.css",revision:null},{url:"assets/el-empty-18312cb2.js",revision:null},{url:"assets/el-empty-743b38f5.css",revision:null},{url:"assets/el-form-item-1e612af8.js",revision:null},{url:"assets/el-form-item-b10c1cc6.css",revision:null},{url:"assets/el-image-viewer-21a319c0.css",revision:null},{url:"assets/el-image-viewer-6d49c166.js",revision:null},{url:"assets/el-input-number-88495d5b.js",revision:null},{url:"assets/el-input-number-e34b49f4.css",revision:null},{url:"assets/el-pagination-b34f0fdb.js",revision:null},{url:"assets/el-pagination-caf55e98.css",revision:null},{url:"assets/el-popover-bac8718b.css",revision:null},{url:"assets/el-popover-f28e8fcd.js",revision:null},{url:"assets/el-popper-66ed4f9c.js",revision:null},{url:"assets/el-popper-b17b6765.css",revision:null},{url:"assets/el-progress-c7c1f9fc.css",revision:null},{url:"assets/el-progress-f764d4bd.js",revision:null},{url:"assets/el-radio-94b07b0d.css",revision:null},{url:"assets/el-radio-group-b0a49b9f.js",revision:null},{url:"assets/el-radio-group-cacb5b7d.css",revision:null},{url:"assets/el-result-3ec04570.css",revision:null},{url:"assets/el-result-fc9b47c2.js",revision:null},{url:"assets/el-scrollbar-df5aa9a0.css",revision:null},{url:"assets/el-scrollbar-e88d9e52.js",revision:null},{url:"assets/el-select-0b32213c.css",revision:null},{url:"assets/el-select-96a896ca.js",revision:null},{url:"assets/el-space-417b6673.css",revision:null},{url:"assets/el-space-c7bf86f9.js",revision:null},{url:"assets/el-switch-4d96cdcc.css",revision:null},{url:"assets/el-switch-ec3d532b.js",revision:null},{url:"assets/el-tab-pane-308942c8.js",revision:null},{url:"assets/el-tab-pane-eecd8b5a.css",revision:null},{url:"assets/el-table-column-37fcef15.js",revision:null},{url:"assets/el-table-column-ada01c22.css",revision:null},{url:"assets/el-table-v2-831fc727.js",revision:null},{url:"assets/el-table-v2-fbe46d06.css",revision:null},{url:"assets/el-tag-1d085a2f.js",revision:null},{url:"assets/el-tag-2fca7a82.css",revision:null},{url:"assets/el-tooltip-4ed993c7.js",revision:null},{url:"assets/el-upload-ef2c41eb.js",revision:null},{url:"assets/el-upload-fc8af11e.css",revision:null},{url:"assets/ext-beautify-4d60b46b.js",revision:null},{url:"assets/forexRate-1294ce83.js",revision:null},{url:"assets/forexRate-98de0309.css",revision:null},{url:"assets/geohash-0216f10c.css",revision:null},{url:"assets/geohash-e139fc0d.js",revision:null},{url:"assets/geoJson-0dc6b54d.css",revision:null},{url:"assets/geoJson-dd456dcf.js",revision:null},{url:"assets/geoJsonEditor-1cb693c8.js",revision:null},{url:"assets/geoJsonEditor-70d042e8.css",revision:null},{url:"assets/gradientColor-adcfff8b.js",revision:null},{url:"assets/gradientColor-fdbcd6b2.css",revision:null},{url:"assets/hasIn-c0303111.js",revision:null},{url:"assets/idChinese-d4c27dd4.css",revision:null},{url:"assets/idChinese-fb558c78.js",revision:null},{url:"assets/imageBase64-64a9c859.js",revision:null},{url:"assets/imageBase64-e6465efa.css",revision:null},{url:"assets/imgHosting-6552858e.js",revision:null},{url:"assets/imgHosting-69f5aba1.css",revision:null},{url:"assets/imgHosting-e62368a9.js",revision:null},{url:"assets/imgList-c280f20b.js",revision:null},{url:"assets/imgList-dfac873b.css",revision:null},{url:"assets/index-14e8c4c6.css",revision:null},{url:"assets/index-179e11a6.css",revision:null},{url:"assets/index-2a09f53a.css",revision:null},{url:"assets/index-408cccea.css",revision:null},{url:"assets/index-432cc2ec.js",revision:null},{url:"assets/index-48af44dd.js",revision:null},{url:"assets/index-4e281050.css",revision:null},{url:"assets/index-4e79adf3.js",revision:null},{url:"assets/index-852b4aa9.js",revision:null},{url:"assets/index-90879650.js",revision:null},{url:"assets/index-951e4037.css",revision:null},{url:"assets/index-c7aa9d5b.js",revision:null},{url:"assets/index-cbf291f6.js",revision:null},{url:"assets/index-ee677dd4.js",revision:null},{url:"assets/index-f0cb3f64.js",revision:null},{url:"assets/index-f73fab48.js",revision:null},{url:"assets/index.js",revision:"84503bb55e54270f3261115c3200fa49"},{url:"assets/isEqual-ac423b5b.js",revision:null},{url:"assets/isUndefined-aa0326a0.js",revision:null},{url:"assets/jsonEditor-19e4b267.js",revision:null},{url:"assets/jsonEditor-deddfb26.css",revision:null},{url:"assets/jwt-9149cd0e.js",revision:null},{url:"assets/jwt-efcd4889.css",revision:null},{url:"assets/latLng-027614a0.css",revision:null},{url:"assets/latLng-49784406.js",revision:null},{url:"assets/leaflet-69420918.css",revision:null},{url:"assets/leaflet-src-de634c40.js",revision:null},{url:"assets/leafletMap-833505c5.js",revision:null},{url:"assets/leafletMap-b08d7dc8.css",revision:null},{url:"assets/Link-377f1bb4.js",revision:null},{url:"assets/linuxCommand-04c25b07.css",revision:null},{url:"assets/linuxCommand-ef7c4fac.js",revision:null},{url:"assets/login-2bb9ca5a.css",revision:null},{url:"assets/login-6a0a486e.js",revision:null},{url:"assets/marker-shadow-23146348.js",revision:null},{url:"assets/md5-749d2ecc.js",revision:null},{url:"assets/md5-a2aada5c.css",revision:null},{url:"assets/mock-3fae729c.js",revision:null},{url:"assets/mock-a97d5140.css",revision:null},{url:"assets/mtqLoans-74042371.css",revision:null},{url:"assets/mtqLoans-84c530e5.js",revision:null},{url:"assets/nzh-2f9a9f0d.css",revision:null},{url:"assets/nzh-c511f41b.js",revision:null},{url:"assets/O-aabe6b8b.png",revision:null},{url:"assets/Ob-fa8b324c.png",revision:null},{url:"assets/oreo-6b415d4d.png",revision:null},{url:"assets/Paragraph-cc030132.js",revision:null},{url:"assets/propertyTable-d4299a4c.css",revision:null},{url:"assets/propertyTable-dabffba4.js",revision:null},{url:"assets/qrcode-3784ddfe.css",revision:null},{url:"assets/qrcode-c119ad78.js",revision:null},{url:"assets/R-fca5b3d5.png",revision:null},{url:"assets/raf-1680ca74.js",revision:null},{url:"assets/random-1aef8518.css",revision:null},{url:"assets/random-8ef553fa.js",revision:null},{url:"assets/redirect-44e9b604.css",revision:null},{url:"assets/redirect-fb0aacc7.js",revision:null},{url:"assets/relationship-5032961c.js",revision:null},{url:"assets/relationship-9d281f62.css",revision:null},{url:"assets/ResizeObserver.es-0f9f8adb.js",revision:null},{url:"assets/screenRecord-217f7d98.js",revision:null},{url:"assets/screenRecord-af590921.css",revision:null},{url:"assets/Seto-3e28fa6c.eot",revision:null},{url:"assets/Seto-8ea3242a.woff",revision:null},{url:"assets/Seto-969d39cb.ttf",revision:null},{url:"assets/Seto-f0825900.svg",revision:null},{url:"assets/settings-55258381.css",revision:null},{url:"assets/settings-d1cd2405.css",revision:null},{url:"assets/settings-e142162f.js",revision:null},{url:"assets/settings-e651fd78.js",revision:null},{url:"assets/strings-98730f23.js",revision:null},{url:"assets/Text-ce75cca8.js",revision:null},{url:"assets/texture-d794feb1.png",revision:null},{url:"assets/throttle-38128c32.js",revision:null},{url:"assets/timeCompute-8bdc1324.js",revision:null},{url:"assets/timeCompute-b4110b33.css",revision:null},{url:"assets/tinycolor-ea5bcbb6.js",revision:null},{url:"assets/tinyEditor-4c5a6f63.css",revision:null},{url:"assets/tinyEditor-53123e97.js",revision:null},{url:"assets/Title-7ddcb60e.js",revision:null},{url:"assets/toFinite-0e801d2e.js",revision:null},{url:"assets/upload-1dbd8c20.css",revision:null},{url:"assets/upload-e4f7d988.js",revision:null},{url:"assets/urlEncode-15d8e9ec.css",revision:null},{url:"assets/urlEncode-cdc63ae5.js",revision:null},{url:"assets/urls-23b75ec6.js",revision:null},{url:"assets/urls-3c37bb07.css",revision:null},{url:"assets/userAgent-b544a62b.js",revision:null},{url:"assets/userAgent-c11c37a3.css",revision:null},{url:"assets/uuid-3cf20e26.js",revision:null},{url:"assets/uuid-73649c26.css",revision:null},{url:"assets/VanillaJsonEditor-8932b5f4.js",revision:null},{url:"assets/VanillaJsonEditor-a311051a.css",revision:null},{url:"assets/viewSourceCode-6736b167.css",revision:null},{url:"assets/viewSourceCode-9173aa8e.js",revision:null},{url:"assets/watermark-43dac153.css",revision:null},{url:"assets/watermark-c27d79e4.js",revision:null},{url:"assets/webssh-3049fcd4.css",revision:null},{url:"assets/webssh-c58241b6.js",revision:null},{url:"assets/whatAnimeIsThis-8ff6b77b.js",revision:null},{url:"assets/whatAnimeIsThis-fea672d5.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/worker-css-2c615ec9.js",revision:null},{url:"assets/worker-css-b70c72a0.js",revision:null},{url:"assets/worker-html-63aac2ef.js",revision:null},{url:"assets/worker-javascript-c4599136.js",revision:null},{url:"assets/worker-xml-2b7489a2.js",revision:null},{url:"assets/xmlEditor-5899226b.js",revision:null},{url:"assets/xmlEditor-6cce155a.css",revision:null},{url:"assets/zeldaBotwMap-88e3a9a5.css",revision:null},{url:"assets/zeldaBotwMap-8a7fec14.js",revision:null},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"images/apple-touch-icon.png",revision:"c98146de51bfd1e44dd0bcf1c0b46e9d"},{url:"images/favicon-16x16.png",revision:"2d1bf54421b452056bee63cee3db95a0"},{url:"images/favicon-32x32.png",revision:"1db2e4df74013a3d83ed0039e0e4f107"},{url:"images/favicon.ico",revision:"44195b94f844fd090be1f4113f242f93"},{url:"index.html",revision:"aba0efa309fe58194edf74db4064e5c3"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"},{url:"robots.txt",revision:"9d98e3742c7a9deb303b51d54d03ccf9"},{url:"images/android-chrome-192x192.png",revision:"bba30f143b1f4a0c3d9e6b7fb60c1fde"},{url:"images/android-chrome-512x512.png",revision:"ffe9e7f8a59475380019a66e881ffeae"},{url:"manifest.webmanifest",revision:"9fbe4779eb6c13d53f97c42a8f9f0608"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.cc/,new s.CacheFirst({cacheName:"iszycc-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/lib\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszylib-cdn",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
