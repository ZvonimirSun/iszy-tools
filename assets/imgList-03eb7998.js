import{g as N,a5 as z,h as y,j as B,o as n,l as i,p,n as s,r as f,b as P,t as h,s as T,m as o,a1 as V,v as j,x as A,k as d,a as m,w as _,G as H,H as D,c as g,A as v,J as F,K as G,_ as J}from"./index-6d4a489f.js";import{E as K}from"./el-empty-6ea83cde.js";import{E as M}from"./el-space-ec5468cb.js";import{E as O}from"./el-popover-388032b1.js";import"./el-popper-f8543b29.js";import{E as U}from"./el-image-viewer-586c435a.js";import{u}from"./imgHosting-1a74969d.js";import"./throttle-f8cb27ab.js";import"./v4-fcc3550a.js";const q=N({header:{type:String,default:""},bodyStyle:{type:z([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),Q=y({name:"ElCard"}),R=y({...Q,props:q,setup(r){const t=B("card");return(e,l)=>(n(),i("div",{class:p([s(t).b(),s(t).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(n(),i("div",{key:0,class:p(s(t).e("header"))},[f(e.$slots,"header",{},()=>[P(h(e.header),1)])],2)):T("v-if",!0),o("div",{class:p(s(t).e("body")),style:V(e.bodyStyle)},[f(e.$slots,"default")],6)],2))}});var W=j(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const X=A(W);const Y=r=>(F("data-v-928acb03"),r=r(),G(),r),Z={key:0,class:"imgList"},ee=["title"],te={class:"card-action"},se={class:"py-3 flex"},ae=["onClick"],oe=Y(()=>o("span",{class:"py-3 flex"},[o("span",{class:"i-icon-park-outline-delete"})],-1)),ne=y({__name:"imgList",setup(r){const t=d(()=>u().imgList),e=d(()=>t.value.map(c=>c.url)),l=d(()=>u().commonConfig),C=u().removeImage;async function b({url:c}={}){try{l.value.customCopyContent?await navigator.clipboard.writeText(l.value.customCopyContent.replace(/\$url/g,c)):await navigator.clipboard.writeText(c),v.success("地址已复制到剪贴板")}catch{v.error("复制失败")}}return(c,w)=>{const k=U,E=O,S=X,x=M,I=K;return s(t).length?(n(),i("div",Z,[m(x,{size:8},{default:_(()=>[(n(!0),i(H,null,D(s(t),(a,L)=>(n(),g(S,{key:a.id,"body-style":{padding:"0px"}},{default:_(()=>[m(k,{loading:"lazy",src:a.url,alt:a.name,"preview-src-list":s(e),"initial-index":L,style:{width:"20rem",height:"12.36rem"},fit:"cover"},null,8,["src","alt","preview-src-list","initial-index"]),o("div",{title:a.name,class:"card-meta"},h(a.name),9,ee),o("div",te,[o("span",se,[o("span",{class:"i-icon-park-outline-copy-link",onClick:$=>b(a)},null,8,ae)]),m(E,{title:"是否确认删除？","confirm-button-text":"是","cancel-button-text":"否","confirm-button-type":"danger",onConfirm:$=>s(C)(a)},{reference:_(()=>[oe]),_:2},1032,["onConfirm"])])]),_:2},1024))),128))]),_:1})])):(n(),g(I,{key:1}))}}});const ye=J(ne,[["__scopeId","data-v-928acb03"]]);export{ye as default};
