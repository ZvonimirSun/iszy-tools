if(!self.define){let s,l={};const e=(e,i)=>(e=new URL(e+".js",i).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const t=s=>e(s,r),o={module:{uri:r},exports:u,require:t};l[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-e75b55e0"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_baseEach-B9AfPc2l.js",revision:null},{url:"assets/_baseIteratee-DL4nUH5y.js",revision:null},{url:"assets/_baseRandom-CgWnUD7v.js",revision:null},{url:"assets/_castFunction-Bg7sxuNy.js",revision:null},{url:"assets/2048-9-ZphSjG.js",revision:null},{url:"assets/2048-CScpPe6a.css",revision:null},{url:"assets/3dView-B9JF0hL3.css",revision:null},{url:"assets/3dView-cZ8N7yRK.js",revision:null},{url:"assets/anyRule-Ch68hnV5.css",revision:null},{url:"assets/anyRule-P5qg2EeJ.js",revision:null},{url:"assets/ascii-Dd7Vpdbb.js",revision:null},{url:"assets/base64-DYQL876I.js",revision:null},{url:"assets/base64ToFile-CXxy1_lV.css",revision:null},{url:"assets/base64ToFile-CyeUitWf.js",revision:null},{url:"assets/bilibiliBv2av-CqBlGAKR.js",revision:null},{url:"assets/castArray-CSs-0jGd.js",revision:null},{url:"assets/cdnQuery-CMc584CN.css",revision:null},{url:"assets/cdnQuery-eq7tp0lA.js",revision:null},{url:"assets/chineseColor-_8bpx7fH.css",revision:null},{url:"assets/chineseColor-CHHIa04G.js",revision:null},{url:"assets/clone-Byx7n61h.js",revision:null},{url:"assets/color-DXw12NdE.js",revision:null},{url:"assets/colorTransform-BAr0CjtP.js",revision:null},{url:"assets/colorTransform-Dmu9QPQJ.css",revision:null},{url:"assets/createFile-B4flcA6s.js",revision:null},{url:"assets/cssFormatter-FE-uTg5K.js",revision:null},{url:"assets/dayjs.min-C0VX4vGa.js",revision:null},{url:"assets/EditorMini-CWGMkpvY.js",revision:null},{url:"assets/EditorMini-DA3k8H9X.css",revision:null},{url:"assets/el-alert-B9oGCRyi.css",revision:null},{url:"assets/el-alert-HtMq9rPY.js",revision:null},{url:"assets/el-checkbox-DIPHKmvR.css",revision:null},{url:"assets/el-checkbox-DOygNfne.js",revision:null},{url:"assets/el-date-picker-CpSHs9j2.css",revision:null},{url:"assets/el-date-picker-Dt5URdD3.js",revision:null},{url:"assets/el-descriptions-item-B5Z46VRV.css",revision:null},{url:"assets/el-descriptions-item-DKnpDz73.js",revision:null},{url:"assets/el-dialog-C0iG4hMU.js",revision:null},{url:"assets/el-dialog-Cop0q8z2.css",revision:null},{url:"assets/el-divider-BUtF_RGI.css",revision:null},{url:"assets/el-divider-CK7RHreg.js",revision:null},{url:"assets/el-empty-D4ZqTl4F.css",revision:null},{url:"assets/el-empty-Y_oMMVK0.js",revision:null},{url:"assets/el-form-item-CKZiX9BY.css",revision:null},{url:"assets/el-form-item-DJjCFo9P.js",revision:null},{url:"assets/el-image-viewer-DPg1Lgyb.js",revision:null},{url:"assets/el-image-viewer-gjGgbSV7.css",revision:null},{url:"assets/el-input-number-BGA7QSSo.js",revision:null},{url:"assets/el-input-number-DUUPPWGj.css",revision:null},{url:"assets/el-loading-C5IeuJ3V.css",revision:null},{url:"assets/el-loading-lwveQx_b.js",revision:null},{url:"assets/el-pagination-BNQcHhjS.css",revision:null},{url:"assets/el-pagination-DRQXyx-9.js",revision:null},{url:"assets/el-popover-BjsfU-Kv.js",revision:null},{url:"assets/el-popover-Dtxj3CUF.css",revision:null},{url:"assets/el-popper-B9AQAgAF.js",revision:null},{url:"assets/el-popper-DG5wR-qi.css",revision:null},{url:"assets/el-progress-COIu8PSk.js",revision:null},{url:"assets/el-progress-Dw9yTa91.css",revision:null},{url:"assets/el-radio-C-xpY9Lc.css",revision:null},{url:"assets/el-radio-group-B-p62KwQ.js",revision:null},{url:"assets/el-radio-group-BzMpJalG.css",revision:null},{url:"assets/el-select-BlQN13cO.js",revision:null},{url:"assets/el-select-Dt7emnhu.css",revision:null},{url:"assets/el-space-3oFudasq.css",revision:null},{url:"assets/el-space-Bh8rUqxk.js",revision:null},{url:"assets/el-switch-B5lTGWdM.css",revision:null},{url:"assets/el-switch-gZfmms7h.js",revision:null},{url:"assets/el-tab-pane-BihFZC1O.css",revision:null},{url:"assets/el-tab-pane-DgvWiU7d.js",revision:null},{url:"assets/el-table-column-CBdd4Iyj.css",revision:null},{url:"assets/el-table-column-XIMbKNBu.js",revision:null},{url:"assets/el-table-v2-B_f7EMaZ.js",revision:null},{url:"assets/el-table-v2-Djurru0Q.css",revision:null},{url:"assets/el-tag-DljBBxJR.css",revision:null},{url:"assets/el-tooltip-l0sNRNKZ.js",revision:null},{url:"assets/el-upload-Cb__vtEG.js",revision:null},{url:"assets/el-upload-q8uObtwj.css",revision:null},{url:"assets/formatBytes-aAslYXQD.js",revision:null},{url:"assets/FormatTransformer-C2J7d-HF.js",revision:null},{url:"assets/FormatTransformer-fFTHibYm.css",revision:null},{url:"assets/geohash-Db7qCC1g.js",revision:null},{url:"assets/geoJson-BhHSuOoh.js",revision:null},{url:"assets/geoJson-DL5VwPJB.css",revision:null},{url:"assets/gradientColor-DBSxtFan.js",revision:null},{url:"assets/gradientColor-IHU7-4HG.css",revision:null},{url:"assets/hashFile-BCgVXJrp.js",revision:null},{url:"assets/hashFile-D_6SYB2i.css",revision:null},{url:"assets/hashFile.service-Dhld-QUV.js",revision:null},{url:"assets/hashFile.worker-BOWoBR5q.js",revision:null},{url:"assets/hashText-3XkjT9nK.css",revision:null},{url:"assets/hashText-EuVHBUuX.js",revision:null},{url:"assets/hashText.service-W8L8oCuZ.js",revision:null},{url:"assets/hashText.worker-r7jdbx5m.js",revision:null},{url:"assets/idChinese-CkIDEhDC.js",revision:null},{url:"assets/idChinese.worker-DvBwaupA.js",revision:null},{url:"assets/imageBase64-C1DImxwh.css",revision:null},{url:"assets/imageBase64-CxdYt9wk.js",revision:null},{url:"assets/imgHosting-BYpX7lK3.js",revision:null},{url:"assets/imgHosting-CWmL7yVw.css",revision:null},{url:"assets/index-6J_TwRP_.js",revision:null},{url:"assets/index-BdspOCSH.js",revision:null},{url:"assets/index-BKlY8qx0.js",revision:null},{url:"assets/index-BPWWRSBl.js",revision:null},{url:"assets/index-BXNaOHMm.js",revision:null},{url:"assets/index-CPwAqYoA.css",revision:null},{url:"assets/index-CSPAz0LM.js",revision:null},{url:"assets/index-DeMmuALO.css",revision:null},{url:"assets/index-DNmjm-Lw.js",revision:null},{url:"assets/index-DXTtqce5.js",revision:null},{url:"assets/index-gJj-gWXL.js",revision:null},{url:"assets/index-Vcq4gwWv.js",revision:null},{url:"assets/index-XvhsExga.js",revision:null},{url:"assets/index-yihhvi3k.js",revision:null},{url:"assets/isUndefined-DCTLXrZ8.js",revision:null},{url:"assets/jse-theme-dark-C9TzHYAF.css",revision:null},{url:"assets/jse-theme-dark-DryR_Qc7.js",revision:null},{url:"assets/jsonEditor-6xZK4huR.js",revision:null},{url:"assets/jsonEditor-DnVUQ9M0.css",revision:null},{url:"assets/jwt-DMflfOw-.css",revision:null},{url:"assets/jwt-FxEtDXGO.js",revision:null},{url:"assets/lang-css-DVTZCL88.js",revision:null},{url:"assets/latLng-BHcuaMPd.css",revision:null},{url:"assets/latLng-CwhxQo92.js",revision:null},{url:"assets/leaflet-CIGW-MKW.css",revision:null},{url:"assets/leaflet-qVmQJfO5.js",revision:null},{url:"assets/linuxCommand-Cc4XX7Si.css",revision:null},{url:"assets/linuxCommand-hTGAdAR2.js",revision:null},{url:"assets/linuxdo-C7o2R0pC.js",revision:null},{url:"assets/lodCalculator-D6Q_jHbQ.css",revision:null},{url:"assets/lodCalculator-DyWOdZFN.js",revision:null},{url:"assets/login-BhrGH_YF.css",revision:null},{url:"assets/login-zNBMo0N4.js",revision:null},{url:"assets/map-Bx1d19M2.js",revision:null},{url:"assets/mapUtils-7WyE4uYj.css",revision:null},{url:"assets/mapUtils-DeSoDwde.js",revision:null},{url:"assets/memoize-one.esm-BdPwpGay.js",revision:null},{url:"assets/mock-DVUmXAeC.css",revision:null},{url:"assets/mock-VSw7iBOY.js",revision:null},{url:"assets/mtqLoans-B_bSKn9q.js",revision:null},{url:"assets/mtqLoans-vegeaEt-.css",revision:null},{url:"assets/nzh-BA0J6odP.js",revision:null},{url:"assets/palServerSettings-DVF9a2ig.js",revision:null},{url:"assets/palServerSettings-DVUIeBnB.css",revision:null},{url:"assets/qrcode-CcT3wcUu.css",revision:null},{url:"assets/qrcode-DG_DBZP8.js",revision:null},{url:"assets/raf-Bzz0xiaY.js",revision:null},{url:"assets/random-CIRfjSD7.js",revision:null},{url:"assets/range-Bb7Yl2AZ.js",revision:null},{url:"assets/register-0Uh2sWHw.css",revision:null},{url:"assets/register-D6Z96R6C.js",revision:null},{url:"assets/relationship-DhIxr1ew.css",revision:null},{url:"assets/relationship-kle-0ktj.js",revision:null},{url:"assets/Router-C4svEZbP.css",revision:null},{url:"assets/Router-CuaTXlvE.js",revision:null},{url:"assets/screenRecord-BF-aYe8U.js",revision:null},{url:"assets/screenRecord-CSoGXrzZ.css",revision:null},{url:"assets/settings-9XBrp49f.css",revision:null},{url:"assets/settings-Cb9IxZAx.js",revision:null},{url:"assets/strings-BEi-dg_n.js",revision:null},{url:"assets/tetris-9vIwuZ--.css",revision:null},{url:"assets/tetris-DHrZ34Sv.js",revision:null},{url:"assets/timeCompute-QB1DVRRc.js",revision:null},{url:"assets/tinyEditor-ba-0F86M.css",revision:null},{url:"assets/tinyEditor-Bbp3cwIu.js",revision:null},{url:"assets/tlDraw-BC_8v02k.css",revision:null},{url:"assets/tlDraw-DNond0CK.js",revision:null},{url:"assets/toFinite-DwvI2ZbF.js",revision:null},{url:"assets/tslib.es6-BNuSTrBL.js",revision:null},{url:"assets/urlEncode-CGvzK_at.css",revision:null},{url:"assets/urlEncode-CHhnLnLl.js",revision:null},{url:"assets/urls-B_-6iczI.js",revision:null},{url:"assets/urls-DjJ2ENyB.css",revision:null},{url:"assets/useComponentRef-D-US4sQn.js",revision:null},{url:"assets/useCopy-Bu7u2mxF.js",revision:null},{url:"assets/userAgent-DOyNtq9A.js",revision:null},{url:"assets/userManager-Cw_dGVXr.css",revision:null},{url:"assets/userManager-DQKGzOYZ.js",revision:null},{url:"assets/uuid-CnonLQTF.js",revision:null},{url:"assets/uuid-CS--KMDs.css",revision:null},{url:"assets/vanilla-picker-B6E6ObS_.js",revision:null},{url:"assets/VanillaJsonEditor-BbAfD1f3.js",revision:null},{url:"assets/VanillaJsonEditor-ClkS7NEy.css",revision:null},{url:"assets/viewSourceCode-BqKnq4zj.css",revision:null},{url:"assets/viewSourceCode-lKDjj22C.js",revision:null},{url:"assets/watermark-CU5Y6Duo.css",revision:null},{url:"assets/watermark-CUqKVUAL.js",revision:null},{url:"assets/webssh-83OTQUFF.css",revision:null},{url:"assets/webssh-CdZOWSY4.js",revision:null},{url:"assets/whatAnimeIsThis-BqgDp6ut.css",revision:null},{url:"assets/whatAnimeIsThis-CjCsHU62.js",revision:null},{url:"assets/whois-A8nQwr3J.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/xmlEditor-BXCiLWco.css",revision:null},{url:"assets/xmlEditor-CsRZba2Y.js",revision:null},{url:"assets/zeldaBotwMap-CgZaJGCl.js",revision:null},{url:"assets/zeldaBotwMap-De-jTHNy.css",revision:null},{url:"index.html",revision:"60860d857cb3af72ed002adea291005f"},{url:"manifest.webmanifest",revision:"68feed03c16122b0919a2fee06c71d23"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({url:s})=>"https://api.iszy.xyz"===s.origin),new s.NetworkFirst({cacheName:"iszy-api",plugins:[new s.CacheableResponsePlugin({statuses:[200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.xyz/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/.*cdn\.iszy\.cc/,new s.CacheFirst({cacheName:"iszy-cdn",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
