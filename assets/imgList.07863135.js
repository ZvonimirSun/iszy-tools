var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,s=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&o(e,t,a[t]);return e},m=(e,r)=>a(e,t(r));import{E as c,aL as d,aO as l,af as p,av as g,a_ as u,a$ as f,a as v,o as y,f as b,b as w,w as j,P as h,Q as L,c as x}from"./vendor.6fbc78f0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as O}from"./index.dcfdef32.js";var k=".imgList[data-v-d0115310] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.imgList[data-v-d0115310] .ant-image {\n  cursor: pointer;\n}\n.imgList[data-v-d0115310] .ant-card-body {\n  padding: 0.8rem;\n  width: 20rem;\n}\n.imgList .ant-space[data-v-d0115310] {\n  flex-wrap: wrap;\n}";const{Meta:P}=l,{PreviewGroup:C}=g,{mapState:I,mapActions:_}=c("imgHosting"),E={name:"imgList",computed:s({},I(["imgList"])),components:{Empty:d,Card:l,Meta:P,Space:p,Image:g,PreviewGroup:C,CopyLink:u,Delete:f},methods:m(s({},_(["removeImage"])),{async copyImgUrl({url:e}){try{await navigator.clipboard.writeText(e),this.$msg.success("地址已复制到剪贴板")}catch(a){this.$msg.error("复制失败")}}})},S={key:0,class:"imgList"};function D(e,a,t,r,i,n){const o=v("Image"),s=v("CopyLink"),m=v("Delete"),c=v("Meta"),d=v("Card"),l=v("Space"),p=v("PreviewGroup"),g=v("Empty");return e.imgList.length?(y(),b("div",S,[w(p,null,{default:j((()=>[w(l,{size:8},{default:j((()=>[(y(!0),b(h,null,L(e.imgList,(a=>(y(),x(d,{key:a.id},{cover:j((()=>[w(o,{src:a.url,alt:a.name,width:"20rem",height:"12.36rem"},null,8,["src","alt"])])),actions:j((()=>[w(s,{onClick:e=>n.copyImgUrl(a)},null,8,["onClick"]),w(m,{onClick:t=>e.removeImage(a)},null,8,["onClick"])])),default:j((()=>[w(c,{title:a.name},null,8,["title"])])),_:2},1024)))),128))])),_:1})])),_:1})])):(y(),x(g,{key:1}))}var G=O(E,[["render",D],["__scopeId","data-v-d0115310"]]);export{G as default};
