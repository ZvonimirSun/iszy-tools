import"./vue-codemirror.a18b2e75.js";import{C as m}from"./container.9c830cd9.js";import{a0 as d,ak as v,a as t,o as f,b as h,w as e,$ as C,e as o,h as c}from"./vendor.06d41b47.js";/* empty css                */import{_ as x}from"./index.3ca3d006.js";const{TextArea:k}=C,{Group:y}=d,U={name:"URL\u7F16\u7801/\u89E3\u7801",components:{Container:m,TextArea:k,Button:d,Group:y,Space:v},data:()=>({mode:"text",value:void 0}),methods:{encode(){this.value!=null&&(this.value=encodeURIComponent(this.value))},decode(){this.value!=null&&(this.value=decodeURIComponent(this.value))},clear(){this.value=void 0}}},j=c("UrlEncode\u7F16\u7801"),B=c("UrlDecode\u89E3\u7801"),R=c("\u6E05\u7A7A\u7ED3\u679C");function b(l,r,w,I,T,n){const s=t("TextArea"),a=t("Button"),u=t("Group"),i=t("Space"),_=t("container");return f(),h(_,null,{default:e(()=>[o(i,{direction:"vertical"},{default:e(()=>[o(s,{value:l.value,"onUpdate:value":r[0]||(r[0]=p=>l.value=p),placeholder:"\u8F6C\u6362\u7684\u5185\u5BB9\u7C98\u8D34\u5728\u8FD9\u91CC","auto-size":{minRows:5,maxRows:8}},null,8,["value"]),o(u,null,{default:e(()=>[o(a,{type:"primary",onClick:n.encode},{default:e(()=>[j]),_:1},8,["onClick"]),o(a,{type:"primary",onClick:n.decode},{default:e(()=>[B]),_:1},8,["onClick"]),o(a,{type:"link",onClick:n.clear},{default:e(()=>[R]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var V=x(U,[["render",b],["__scopeId","data-v-468abcd3"]]);export{V as default};
