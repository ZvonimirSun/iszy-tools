import{F as k,t as w,o as v,J as C,K as N,X as g,a1 as y,u as $,aw as P,bI as L,ar as M,ap as x,T as E,a$ as z,az as V,as as F,aC as I}from"./index-vT3yfe1z.js";import{E as D}from"./el-space-eLSyzYIi.js";import{l as i}from"./leaflet-src-BPPqu0ND.js";import{c as T,u}from"./mapUtils-YX7FV-jJ.js";const B=k({__name:"latLng",setup(K){const b=new i.Icon({...i.Icon.Default.prototype.options,iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-yellow.png",iconRetinaUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png"});let r,c,l;const s=w(""),d=w();v(()=>{r=T({dom:d.value,view:{center:[35,105],zoom:4},controls:{layers:!0}}),c=i.marker(r.getCenter(),{icon:new i.Icon.Default}).addTo(r).bindPopup(m(r.getCenter())).on("popupopen",()=>{l&&l.closePopup()}).openPopup(),r.on("move",()=>{c&&window.requestAnimationFrame(()=>{c.setLatLng(r.getCenter()),m(r.getCenter(),c.getPopup())})}),r.on("click",e=>{s.value=`${e.latlng.lng},${e.latlng.lat}`,f(e.latlng)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(e=>{s.value||(s.value=`${e.coords.longitude},${e.coords.latitude}`),r.setView([e.coords.latitude,e.coords.longitude],16)})});function _(){if(!s.value)return;const e=s.value.replace(/，/g,",").split(",");if(e.length===2&&!Number.isNaN(Number.parseFloat(e[0].trim()))&&!Number.isNaN(Number.parseFloat(e[1].trim()))){f(new i.LatLng(Number.parseFloat(e[1].trim()),Number.parseFloat(e[0].trim())),!0);return}h(s.value)}function m(e,t,p){t||(t=new i.Popup({autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}));const n=e.lat;let a=e.lng%360;a<=-180&&(a+=360);let o="";return n>=0?o+=`<p>北纬N: ${Math.abs(n)}</p>`:o+=`<p>南纬S: ${Math.abs(n)}</p>`,a>=0?o+=`<p>东经E: ${Math.abs(a)}</p>`:o+=`<p>西经W: ${Math.abs(a)}</p>`,n>=0?o+=`<p>北纬N: ${u.formatDegree(Math.abs(n))}</p>`:o+=`<p>南纬S: ${u.formatDegree(Math.abs(n))}</p>`,a>=0?o+=`<p>东经E: ${u.formatDegree(a)}</p>`:o+=`<p>西经W: ${u.formatDegree(a)}</p>`,p&&(o+=`<p>地址: ${p}</p>`),t.setContent(o),t}function f(e,t,p){if(t&&r.setView(e,16),l?l.setLatLng(e):l=i.marker(e,{icon:b}).on("popupopen",()=>{c&&c.closePopup()}).addTo(r),p)n();else{const a=setTimeout(()=>{n()},500);u.getAddress(e).then(o=>{clearTimeout(a),p=o,n()})}function n(){const a=m(e,l.getPopup(),p);l.getPopup()||l.bindPopup(a),l.openPopup()}}async function h(e){try{const t=await u.getLocation(e);f(t.latLng,!0,t.address)}catch(t){z.error(t.message)}}return(e,t)=>{const p=V,n=F,a=D;return C(),N(E,null,[g(a,{size:8,alignment:"center"},{default:y(()=>[g(p,{modelValue:$(s),"onUpdate:modelValue":t[0]||(t[0]=o=>P(s)?s.value=o:null),placeholder:"输入经纬度(如'116.4,36.9')或地址(如'北京市政府')","allow-clear":"",onKeydown:L(_,["enter"])},null,8,["modelValue"]),g(n,{type:"primary",onClick:_},{default:y(()=>[M(" 解析 ")]),_:1})]),_:1}),x("div",{ref_key:"mapContainer",ref:d,class:"mapContainer"},null,512)],64)}}}),O=I(B,[["__scopeId","data-v-7b50ef23"]]);export{O as default};