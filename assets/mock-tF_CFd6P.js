import{j as s,o as n,c as r,t as c,a9 as a,a3 as l}from"./vendor-_H2Zizob.js";const p=["title"],i=s({__name:"copyable-text",props:{val:{}},setup(_){async function o(e){try{await navigator.clipboard.writeText(e),a.success("复制成功")}catch{a.error("复制失败")}}return(e,t)=>(n(),r("div",{title:e.val,class:"copiable-text",onClick:t[0]||(t[0]=v=>o(e.val))},c(e.val),9,p))}}),m=l(i,[["__scopeId","data-v-7888060a"]]);export{m as C};
