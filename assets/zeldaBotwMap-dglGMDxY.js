import{l as a}from"./leaflet-src-4RGZHdxK.js";import{F as r,t as n,o as s,bN as m,J as p,K as l,aC as i}from"./index-VsbXgykr.js";const u=r({__name:"zeldaBotwMap",setup(c){const o=n(),t=n();return s(()=>{if(!o.value)return;const e=new a.LatLngBounds(new a.LatLng(-49.875,34.25),new a.LatLng(-206,221));t.value=m(a.map(o.value,{crs:a.CRS.Simple,attributionControl:!1,maxBounds:e,maxBoundsViscosity:1,trackResize:!0}).setView([0,0],2)),a.tileLayer("https://lib.demos.pub/other/zelda-botw-map/map/{z}_{x}_{y}.png",{minZoom:2,maxZoom:7,noWrap:!0,bounds:e}).addTo(t.value),a.tileLayer("https://lib.demos.pub/other/zelda-botw-map/label/{z}_{x}_{y}.png",{minZoom:2,maxZoom:7,noWrap:!0,bounds:e}).addTo(t.value)}),(e,d)=>(p(),l("div",{ref_key:"mapContainer",ref:o,class:"map-container"},null,512))}}),f=i(u,[["__scopeId","data-v-65e79bbe"]]);export{f as default};
