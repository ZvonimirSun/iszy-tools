import{_ as y,r as v,j as x,o as k,c as N,w as i,a as _,b as f,k as b,B}from"./index.61200789.js";import{_ as E}from"./index.329ebb3e.js";import"./useFlexGapSupport.f58d4104.js";const h=[16,8,4,2,1],w="0123456789bcdefghjkmnpqrstuvwxyz",g=function(o,n,e){n&e?o[0]=(o[0]+o[1])/2:o[1]=(o[0]+o[1])/2};function j(o,n){if(typeof o=="string"){const a=o.split(",");if(a.length>=2){if(o=parseFloat(a[0]),n=parseFloat(a[1]),isNaN(o)||isNaN(n))throw new Error("Not Supported")}else throw new Error("Not Supported")}let e=1;const t=[],l=[];let r=0,u=0;const s=12;let c="";for(t[0]=-90,t[1]=90,l[0]=-180,l[1]=180;c.length<s;){if(e){const a=(l[0]+l[1])/2;n>a?(u|=h[r],l[0]=a):l[1]=a}else{const a=(t[0]+t[1])/2;o>a?(u|=h[r],t[0]=a):t[1]=a}e=!e,r<4?r++:(c+=w[u],r=0,u=0)}return c}function C(o){let n=1;const e=[],t=[];e[0]=-90,e[1]=90,t[0]=-180,t[1]=180;for(let l=0;l<o.length;l++){const r=o[l],u=w.indexOf(r);for(let s=0;s<5;s++){const c=h[s];g(n?t:e,u,c),n=!n}}return e[2]=(e[0]+e[1])/2,t[2]=(t[0]+t[1])/2,{latitude:e[2],longitude:t[2]}}const G={__name:"geohash",setup(o){const n=v(""),e=v(""),t=x("$msg");function l(){try{e.value=j(n.value)}catch(s){t.error(`\u7F16\u7801\u5931\u8D25\uFF0C${s.message}`)}}function r(){try{const{latitude:s,longitude:c}=C(n.value);e.value=s+","+c}catch(s){t.error(`\u89E3\u7801\u5931\u8D25\uFF0C${s.message}`)}}function u(){const s=n.value;n.value=e.value,e.value=s}return(s,c)=>{const a=b,p=B,m=E;return k(),N(m,{direction:"vertical",style:{width:"100%"}},{default:i(()=>[_(a,{value:n.value,"onUpdate:value":c[0]||(c[0]=d=>n.value=d),rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C GeoHash \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),_(m,{style:{"flex-wrap":"wrap"}},{default:i(()=>[_(p,{type:"primary",onClick:l},{default:i(()=>[f(" \u7F16\u7801 (Encode) ")]),_:1}),_(p,{onClick:r},{default:i(()=>[f(" \u89E3\u7801 (Decode) ")]),_:1}),_(p,{onClick:u},{default:i(()=>[f(" \u2195\u4EA4\u6362 ")]),_:1})]),_:1}),_(a,{value:e.value,"onUpdate:value":c[1]||(c[1]=d=>e.value=d),rows:5,readonly:"",placeholder:"GeoHash \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1})}}},$=y(G,[["__scopeId","data-v-4577b636"]]);export{$ as default};
