let c;const r=new Uint8Array(16);function p(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(r)}const d=[];for(let n=0;n<256;++n)d.push((n+256).toString(16).slice(1));function y(n,t=0){return(d[n[t+0]]+d[n[t+1]]+d[n[t+2]]+d[n[t+3]]+"-"+d[n[t+4]]+d[n[t+5]]+"-"+d[n[t+6]]+d[n[t+7]]+"-"+d[n[t+8]]+d[n[t+9]]+"-"+d[n[t+10]]+d[n[t+11]]+d[n[t+12]]+d[n[t+13]]+d[n[t+14]]+d[n[t+15]]).toLowerCase()}const m=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),i={randomUUID:m};function U(n,t,o){if(i.randomUUID&&!t&&!n)return i.randomUUID();n=n||{};const u=n.random||(n.rng||p)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,t){o=o||0;for(let e=0;e<16;++e)t[o+e]=u[e];return t}return y(u)}export{p as r,y as u,U as v};
