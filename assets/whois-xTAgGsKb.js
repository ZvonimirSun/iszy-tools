import{B as d,i,o as a,f as o,l as _,w as h,n as r,q as m,b0 as w,y as v,x,A as y,ai as g,G as k,t as V}from"./index.js";import{v as q}from"./el-loading-VsRkA9d0.js";const B={flex:"","flex-col":"","h-full":"","w-full":""},C={key:1,class:"i-icon-park-outline-search","cursor-pointer":""},D={"flex-1":"","overflow-auto":""},z=d({__name:"whois",setup(E){const t=i(!1),e=i(""),c=i();async function u(){var n;if(e.value){t.value=!0;try{const s=(await g.get(`https://cors.iszy.xyz/https://www.iana.org/whois?q=${e.value}`)).data,l=new DOMParser().parseFromString(s,"text/html");c.value=(n=l.querySelector("#results + pre"))==null?void 0:n.innerHTML}catch{k.error("查询失败")}t.value=!1}}return(n,s)=>{const l=V,p=q;return a(),o("div",B,[_(l,{modelValue:r(e),"onUpdate:modelValue":s[0]||(s[0]=f=>m(e)?e.value=f:null),placeholder:"输入域名查询",onKeyup:w(u,["enter"])},{suffix:h(()=>[r(t)?(a(),o("span",C)):(a(),o("span",{key:0,class:"i-icon-park-outline-search","cursor-pointer":"",onClick:u}))]),_:1},8,["modelValue"]),v((a(),o("pre",D,[x(y(r(c)),1)])),[[p,r(t)]])])}}});export{z as default};
