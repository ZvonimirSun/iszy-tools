import{l as e}from"./leaflet-src.a5eefcf7.js";/* empty css                */import{d as s,r as n,H as r,a5 as p,o as _,L as l,_ as c}from"./index.55939a6d.js";const m=s({__name:"zeldaBotwMap",setup(d){const a=n(),o=n();return r(()=>{if(!a.value)return;const t=new e.exports.LatLngBounds(new e.exports.LatLng(-49.875,34.25),new e.exports.LatLng(-206,221));o.value=p(e.exports.map(a.value,{crs:e.exports.CRS.Simple,attributionControl:!1,maxBounds:t,maxBoundsViscosity:1}).setView([0,0],2)),e.exports.tileLayer("https://lib.iszy.xyz/other/zelda-botw-map/{z}_{x}_{y}.png",{minZoom:2,maxZoom:7,noWrap:!0,bounds:t}).addTo(o.value)}),(t,i)=>(_(),l("div",{ref_key:"mapContainer",ref:a,class:"map-container"},null,512))}});const b=c(m,[["__scopeId","data-v-bc2b5271"]]);export{b as default};
