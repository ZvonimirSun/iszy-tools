import{_ as s,o as i,c as r,w as e,a as n,b as a,m as p,B as f}from"./index.357cc62b.js";import{_ as m}from"./index.9e4d5885.js";import"./useFlexGapSupport.9cead8e6.js";const v={name:"URLEncode",data:()=>({mode:"text",value:void 0}),methods:{encode(){this.value!=null&&(this.value=encodeURIComponent(this.value))},decode(){this.value!=null&&(this.value=decodeURIComponent(this.value))},clear(){this.value=void 0}}};function h(l,_,k,y,C,o){const d=p,t=f,c=m;return i(),r(c,{direction:"vertical"},{default:e(()=>[n(d,{value:l.value,"onUpdate:value":_[0]||(_[0]=u=>l.value=u),placeholder:"\u8F6C\u6362\u7684\u5185\u5BB9\u7C98\u8D34\u5728\u8FD9\u91CC","auto-size":{minRows:5,maxRows:8}},null,8,["value"]),n(c,null,{default:e(()=>[n(t,{type:"primary",onClick:o.encode},{default:e(()=>[a(" UrlEncode\u7F16\u7801 ")]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:o.decode},{default:e(()=>[a(" UrlDecode\u89E3\u7801 ")]),_:1},8,["onClick"]),n(t,{type:"link",onClick:o.clear},{default:e(()=>[a(" \u6E05\u7A7A\u7ED3\u679C ")]),_:1},8,["onClick"])]),_:1})]),_:1})}const E=s(v,[["render",h],["__scopeId","data-v-6149ff9b"]]);export{E as default};
