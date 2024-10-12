import{aU as N,j as $,R as b,T as v,o as P,F as E,K as _,w as L,m as x,W as M,bi as F,L as T,G as V,X as z,aA as B,$ as I,N as j,a0 as A}from"./index-Abyzm83G.js";import{E as D}from"./el-space-CRyovHJK.js";import{l as u}from"./leaflet-src-him8B7D0.js";import{e as k,g as h,c as K,a as S,f as m}from"./leaflet-geoman-8_GXRkL0.js";async function U(d){const i=await N.get("https://amap.api.iszy.xyz/v3/geocode/geo",{params:{address:d,key:h}});if(i.data.status==="1"&&Number(i.data.count)>0){const t=i.data.geocodes[0],r=k.gcj02_To_gps84(Number.parseFloat(t.location.split(",")[0]),Number.parseFloat(t.location.split(",")[1]));return{latLng:new u.LatLng(r.lat,r.lng),address:t.formatted_address}}else throw new Error("未找到相关地址。")}async function R(d){const i=k.gps84_To_gcj02(d.lng,d.lat),t=await N.get("https://amap.api.iszy.xyz/v3/geocode/regeo",{params:{location:`${i.lng},${i.lat}`,output:"json",key:h,homeorcorp:1}});if(t.data.status==="1"&&t.data.regeocode.formatted_address)return t.data.regeocode.formatted_address;throw new Error("未找到相关地址。")}const W=$({__name:"latLng",setup(d){const i=new u.Icon.Default({iconUrl:"marker-icon-yellow.png",iconRetinaUrl:"marker-icon-2x-yellow.png"});let t,r,l;const p=b(""),w=b();v(()=>{t=K({dom:w.value,view:{center:[35,105],zoom:4}}),S(t),r=u.marker(t.getCenter(),{icon:new u.Icon.Default}).addTo(t).bindPopup(g(t.getCenter())).on("popupopen",()=>{l&&l.closePopup()}).openPopup(),t.on("move",()=>{r&&window.requestAnimationFrame(()=>{r.setLatLng(t.getCenter()),g(t.getCenter(),r.getPopup())})}),t.on("click",e=>{p.value=`${e.latlng.lng},${e.latlng.lat}`,f(e.latlng)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(e=>{p.value||(p.value=`${e.coords.longitude},${e.coords.latitude}`),t.setView([e.coords.latitude,e.coords.longitude],16)})});function y(){if(!p.value)return;const e=p.value.replace(/，/g,",").split(",");if(e.length===2&&!Number.isNaN(Number.parseFloat(e[0].trim()))&&!Number.isNaN(Number.parseFloat(e[1].trim()))){f(new u.LatLng(Number.parseFloat(e[1].trim()),Number.parseFloat(e[0].trim())),!0);return}C(p.value)}function g(e,a,c){a||(a=new u.Popup({autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}));const s=e.lat;let o=e.lng%360;o<=-180&&(o+=360);let n="";return s>=0?n+=`<p>北纬N: ${Math.abs(s)}</p>`:n+=`<p>南纬S: ${Math.abs(s)}</p>`,o>=0?n+=`<p>东经E: ${Math.abs(o)}</p>`:n+=`<p>西经W: ${Math.abs(o)}</p>`,s>=0?n+=`<p>北纬N: ${m(Math.abs(s))}</p>`:n+=`<p>南纬S: ${m(Math.abs(s))}</p>`,o>=0?n+=`<p>东经E: ${m(o)}</p>`:n+=`<p>西经W: ${m(o)}</p>`,c&&(n+=`<p>地址: ${c}</p>`),a.setContent(n),a}function f(e,a,c){if(a&&t.setView(e,16),l?l.setLatLng(e):l=u.marker(e,{icon:i}).on("popupopen",()=>{r&&r.closePopup()}).addTo(t),c)s();else{const o=setTimeout(()=>{s()},500);R(e).then(n=>{clearTimeout(o),c=n,s()})}function s(){const o=g(e,l.getPopup(),c);l.getPopup()||l.bindPopup(o),l.openPopup()}}async function C(e){try{const a=await U(e);f(a.latLng,!0,a.address)}catch(a){B.error(a.message)}}return(e,a)=>{const c=I,s=j,o=D;return P(),E(z,null,[_(o,{size:8,alignment:"center"},{default:L(()=>[_(c,{modelValue:x(p),"onUpdate:modelValue":a[0]||(a[0]=n=>M(p)?p.value=n:null),placeholder:"输入经纬度(如'116.4,36.9')或地址(如'北京市政府')","allow-clear":"",onKeydown:F(y,["enter"])},null,8,["modelValue"]),_(s,{type:"primary",onClick:y},{default:L(()=>a[1]||(a[1]=[T(" 解析 ")])),_:1})]),_:1}),V("div",{ref_key:"mapContainer",ref:w,class:"mapContainer"},null,512)],64)}}}),H=A(W,[["__scopeId","data-v-b327f4d2"]]);export{H as default};