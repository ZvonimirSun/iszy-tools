import{R as n,_ as p}from"./common-WPj835yt.js";import{j as f,B as _,$ as r,l,P as m,o as g,ay as y,y as c,a3 as E}from"./vendor-flbquvym.js";import"./ant-design-vue-_jsSmQ7G.js";import"./vanilla-jsoneditor--Y_UqYYL.js";const h=f({__name:"geoJsonEditor",setup(C){const a=_(null);let o={type:"FeatureCollection",features:[]};const s=r(i,500);l(()=>{n.on("updateEditor",s)}),m(()=>{n.off("updateEditor",s)});const u=r(d,500);function d(e){try{typeof e=="string"?o=JSON.parse(e):o=e,n.emit("updateGeojsonLayer",o)}catch{}}function i(e){var t;(t=a.value)==null||t.update(e)}return(e,t)=>(g(),y(p,{ref_key:"editor",ref:a,class:"edit-data-json",config:{mode:"text"},content:c(o),onChange:c(u)},null,8,["content","onChange"]))}}),j=E(h,[["__scopeId","data-v-c632b82d"]]);export{j as default};
