import{h as u,y as d,Y as s,R as m,V as t,Z as f,o as l,c as g,n as i,_ as y}from"./index-ae2f467a.js";import{_ as E}from"./VanillaJsonEditor-4b7a7727.js";import"./index-f89d1fcf.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-d759e3da.js";import"./el-dialog-253eeb63.js";import"./el-space-935fee36.js";import"./el-popper-48dc0630.js";import"./el-scrollbar-e88d9e52.js";import"./createFile-86278d84.js";import"./index-ffb67219.js";import"./Paragraph-5939213c.js";import"./index-67933027.js";import"./Link-f3f08299.js";import"./Text-842f95df.js";import"./Title-042b5abc.js";const h=u({__name:"geoJsonEditor",setup(x){const n=d(null);let e={type:"FeatureCollection",features:[]};const r=s(_,500);m(()=>{t.on("updateEditor",r)}),f(()=>{t.off("updateEditor",r)});const p=s(a,500);function a(o){try{typeof o=="string"?e=JSON.parse(o):e=o,t.emit("updateGeojsonLayer",e)}catch{}}function _(o){n.value?.update(o)}return(o,c)=>(l(),g(E,{ref_key:"editor",ref:n,class:"edit-data-json",config:{mode:"text"},content:i(e),onChange:i(p)},null,8,["content","onChange"]))}});const S=y(h,[["__scopeId","data-v-14099382"]]);export{S as default};
