import{G as d,n as u,av as p,q as f,at as r,ah as l,o as _,I as g,v as a,h}from"./index-o_3zfK9D.js";import{V as E}from"./VanillaJsonEditor-sGSVbVCt.js";import"./index-jdOq8lDu.js";import"./isEqual-ZXEvp1IW.js";import"./el-dialog-W0iH5FUh.js";import"./isUndefined-IZwZ21d-.js";import"./el-space-Dn4TegQ4.js";import"./el-popper-Y_gCM0eV.js";import"./el-scrollbar-vz8xv5bG.js";import"./jse-theme-dark-6Wvrj8zA.js";import"./memoize-one.esm-JaOscZgY.js";import"./index-9Z17Oi6L.js";import"./_baseSlice-dEb6GWcI.js";import"./range-SrWymuVK.js";import"./toFinite-STcBZBpN.js";import"./throttle-PuGBRCtp.js";import"./map-ticeFjFQ.js";import"./index-M6Bs7v5Z.js";import"./hasIn-5_bzPVsS.js";import"./_baseEach-RR-VXSIa.js";import"./_castFunction-OXOVTcEn.js";import"./toInteger-EeOzIynn.js";import"./index-7eWOsffA.js";import"./createFile-Ox0ErjhM.js";import"./formatBytes-KQaxC_6_.js";import"./castArray-6gtm7ijH.js";import"./Paragraph-fUIEAXeu.js";import"./Text-CjDLqZJU.js";const C=d({__name:"geoJsonEditor",setup(y){const n=u(null);let t={type:"FeatureCollection",features:[]};const i=p(c,500);f(()=>{r.on("updateEditor",i)}),l(()=>{r.off("updateEditor",i)});const m=p(s,500);function s(o){try{typeof o=="string"?t=JSON.parse(o):t=o,r.emit("updateGeojsonLayer",t)}catch{}}function c(o){var e;(e=n.value)==null||e.update(o)}return(o,e)=>(_(),g(E,{ref_key:"editor",ref:n,class:"edit-data-json",config:{mode:"text"},content:a(t),onChange:a(m)},null,8,["content","onChange"]))}}),W=h(C,[["__scopeId","data-v-a73f68f3"]]);export{W as default};
