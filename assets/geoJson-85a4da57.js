import{h as y,y as a,k as v,o as b,l as J,a as o,n as e,z as h,w as n,S as _,_ as j}from"./index-d1c7865c.js";import{E as k,a as w}from"./el-tab-pane-d6587e19.js";import x from"./leafletMap-ee0927f0.js";import C from"./geoJsonEditor-39ce9178.js";import E from"./propertyTable-1826a912.js";import S from"./addService-e926a085.js";import G from"./ControlMenu-3a656c31.js";import"./strings-89e2382d.js";import"./el-form-item-1f3e23c6.js";/* empty css                */import"./marker-shadow-88d5af2f.js";import"./leaflet-src-9b266a27.js";import"./jsoneditor.min-48368b8f.js";import"./el-empty-a1445be1.js";import"./el-table-f3f077a0.js";import"./el-scrollbar-e4f888b6.js";import"./el-popper-5a7b5f84.js";import"./isEqual-0076cde8.js";import"./el-checkbox-940b8154.js";import"./_baseProperty-02e4e231.js";import"./el-tag-c4cb0725.js";import"./el-tooltip-4ed993c7.js";import"./el-select-f9ca0194.js";import"./el-divider-415f97b4.js";import"./v4-fcc3550a.js";import"./el-space-986dd226.js";import"./el-dropdown-7da8b71c.js";import"./refs-accd887d.js";import"./createFile-90d32a18.js";import"./index-8a52c833.js";const M=y({__name:"geoJson",setup(L){const t=a(),l=a(),m=a(),p=a(),c=v(()=>p.value?parseFloat(getComputedStyle(p.value).height):400);function u(r){l.value=_(r)}function f(r){m.value=_(r)}return(r,i)=>{const s=k,g=w;return b(),J("div",{ref_key:"wrapper",ref:p,class:"wrapper"},[o(x,{"geo-json-layer":e(t),"onUpdate:geoJsonLayer":i[0]||(i[0]=d=>h(t)?t.value=d:null),onGetMap:u,onGetControl:f},null,8,["geo-json-layer"]),o(g,{type:"card"},{default:n(()=>[o(s,{key:"geoJson",tab:"GeoJSON"},{default:n(()=>[o(C,{ref:"geoJsonEditor","geo-json-layer":e(t)},null,8,["geo-json-layer"])]),_:1}),o(s,{key:"table",tab:"表格"},{default:n(()=>[o(E,{"geo-json-layer":e(t),height:e(c)},null,8,["geo-json-layer","height"])]),_:1}),o(s,{key:"addService",tab:"添加服务"},{default:n(()=>[o(S,{map:e(l),"layer-control":e(m)},null,8,["map","layer-control"])]),_:1})]),_:1}),o(G,{"geo-json-layer":e(t)},null,8,["geo-json-layer"])],512)}}});const lo=j(M,[["__scopeId","data-v-f31a1b09"]]);export{lo as default};
