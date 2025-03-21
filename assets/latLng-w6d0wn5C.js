import{aW as $,ax as v,k as h,R as b,T as E,E as P,r as x,K as w,F as M,w as k,W as T,bk as V,X as B,x as F,L as I,N as U,Y as A,aA as D,a0 as K}from"./index-i7h8R5B5.js";import{E as S}from"./el-space-CRZMmtck.js";import{e as y,g as N,c as W,b as j,f as g}from"./mapUtils-Dv8RWIA5.js";import{l as d}from"./leaflet-DayeahQQ.js";async function R(u){const i=await $.get(`${v.apiBaseUrl}/amap/v3/geocode/geo`,{params:{address:u,key:N}});if(i.data.status==="1"&&Number(i.data.count)>0){const a=i.data.geocodes[0],p=y.gcj02_To_gps84(Number.parseFloat(a.location.split(",")[0]),Number.parseFloat(a.location.split(",")[1]));return{latLng:new d.LatLng(p.lat,p.lng),address:a.formatted_address}}else throw new Error("未找到相关地址。")}async function z(u){u=u.wrap();const i=y.gps84_To_gcj02(u.lng,u.lat),a=await $.get(`${v.apiBaseUrl}/amap/v3/geocode/regeo`,{params:{location:`${i.lng},${i.lat}`,output:"json",key:N,homeorcorp:1}});if(a.data.status==="1"&&a.data.regeocode.formatted_address)return a.data.regeocode.formatted_address;throw new Error("未找到相关地址。")}const O=h({__name:"latLng",setup(u){const i=new d.Icon.Default({iconUrl:"marker-icon-yellow.png",iconRetinaUrl:"marker-icon-2x-yellow.png"});let a,p,c;const l=b(""),_=b();E(()=>{a=W({dom:_.value,view:{center:[35,105],zoom:4}}),j(a),p=d.marker(a.getCenter(),{icon:new d.Icon.Default}).addTo(a).bindPopup(f(a.getCenter())).on("popupopen",()=>{c&&c.closePopup()}).openPopup(),a.on("move",()=>{p&&window.requestAnimationFrame(()=>{const e=a.getCenter();p.setLatLng(e),f(e,p.getPopup())})}),a.on("click",({latlng:e})=>{const t=e.wrap();l.value=`${t.lng},${t.lat}`,m(e)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(e=>{l.value||(l.value=`${e.coords.longitude},${e.coords.latitude}`),a.setView([e.coords.latitude,e.coords.longitude],16)})});function L(){if(!l.value)return;const e=l.value.replace(/，/g,",").split(",");if(e.length===2){const t=Number.parseFloat(e[0].trim()),r=Number.parseFloat(e[1].trim());if(!Number.isNaN(t)&&!Number.isNaN(r)){const o=new d.LatLng(r,t).wrap();l.value=`${o.lng},${o.lat}`,m(o,!0);return}}C(l.value)}function f(e,t,r){t||(t=new d.Popup({autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1})),e=e.wrap();const o=e.lat,s=e.lng;let n="";return o>=0?n+=`<p>北纬N: ${Math.abs(o)}</p>`:n+=`<p>南纬S: ${Math.abs(o)}</p>`,s>=0?n+=`<p>东经E: ${Math.abs(s)}</p>`:n+=`<p>西经W: ${Math.abs(s)}</p>`,o>=0?n+=`<p>北纬N: ${g(Math.abs(o))}</p>`:n+=`<p>南纬S: ${g(Math.abs(o))}</p>`,s>=0?n+=`<p>东经E: ${g(s)}</p>`:n+=`<p>西经W: ${g(s)}</p>`,r&&(n+=`<p>地址: ${r}</p>`),t.setContent(n),t}function m(e,t,r){if(t&&a.setView(e,16),c?c.setLatLng(e):c=d.marker(e,{icon:i}).on("popupopen",()=>{p&&p.closePopup()}).addTo(a),r)o();else{const s=setTimeout(()=>{o()},500);z(e).then(n=>{clearTimeout(s),r=n,o()})}function o(){const s=f(e,c.getPopup(),r);c.getPopup()||c.bindPopup(s),c.openPopup()}}async function C(e){try{const t=await R(e);m(t.latLng,!0,t.address)}catch(t){D.error(t.message)}}return(e,t)=>{const r=T,o=I,s=S;return x(),P(A,null,[w(s,{size:8,alignment:"center"},{default:k(()=>[w(r,{modelValue:F(l),"onUpdate:modelValue":t[0]||(t[0]=n=>B(l)?l.value=n:null),placeholder:"输入经纬度(如'116.4,36.9')或地址(如'北京市政府')","allow-clear":"",onKeydown:V(L,["enter"])},null,8,["modelValue"]),w(o,{type:"primary",onClick:L},{default:k(()=>t[1]||(t[1]=[U(" 解析 ")])),_:1})]),_:1}),M("div",{ref_key:"mapContainer",ref:_,class:"mapContainer"},null,512)],64)}}}),H=K(O,[["__scopeId","data-v-09c2bf61"]]);export{H as default};
